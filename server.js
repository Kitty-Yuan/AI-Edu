const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { URL } = require("node:url");
const { execFile } = require("node:child_process");
const { promisify } = require("node:util");

const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || "127.0.0.1";
const PROJECT_DIR = __dirname;
const API_BASE_URL = process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com";
const MODEL_NAME = process.env.DEEPSEEK_MODEL || "deepseek-v4-flash";
const PRODUCT_ID = process.env.LISTENAI_PRODUCT_ID || "1f830d43-ff69-430e-99df-b2a8ff8475d6";
const execFileAsync = promisify(execFile);
const DEVICE_TASK_KEYS = {
  sessionId: "ai_edu_session_id",
  title: "ai_edu_task_title",
  environment: "ai_edu_task_environment",
  focus: "ai_edu_task_focus",
  age: "ai_edu_task_age",
  openMission: "ai_edu_open_mission",
  introScript: "ai_edu_intro_script",
  observeScript: "ai_edu_observe_script",
  captureScript: "ai_edu_capture_script",
  closingScript: "ai_edu_closing_script",
  questionCount: "ai_edu_question_count",
  promptHintCount: "ai_edu_prompt_hint_count",
  updatedAt: "ai_edu_task_updated_at"
};

let deviceInteractionMode = "unknown";

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8"
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("请求体过大。"));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function serveStatic(requestPath, response, method = "GET") {
  const pathname = requestPath === "/" ? "/index.html" : requestPath;
  const safePath = path.normalize(path.join(PROJECT_DIR, pathname));

  if (!safePath.startsWith(PROJECT_DIR)) {
    sendJson(response, 403, { error: "禁止访问该路径。" });
    return;
  }

  fs.readFile(safePath, (error, content) => {
    if (error) {
      sendJson(response, 404, { error: "文件不存在。" });
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": contentTypes[ext] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    if (method === "HEAD") {
      response.end();
      return;
    }
    response.end(content);
  });
}

function buildWritingPrompt(payload) {
  const session = payload.session || {};
  const turn = payload.turn || {};
  const guidance = payload.guidance || {};
  const targetWordCount = Number(guidance.targetWordCount) || 300;
  const draftLengthRule = targetWordCount <= 220
    ? "draft 长度控制在 170-230 汉字。"
    : targetWordCount <= 380
      ? "draft 长度控制在 260-340 汉字。"
      : "draft 长度控制在 420-560 汉字。";

  return [
    "你是儿童观察写作教练。",
    "请基于真实户外观察记录，输出一个 JSON 对象，不要输出 Markdown，不要加代码块。",
    "JSON 结构必须是：",
    '{"title":"", "outline":["", "", ""], "draft":"", "coachTips":["", "", ""]}',
    "要求：",
    "1. 不要代替孩子编造超出原记录太远的事实。",
    "2. 保留孩子自己的比喻、感受和观察角度。",
    `3. ${draftLengthRule}`,
    "4. outline 用 3-4 条中文短句。",
    "5. coachTips 用 3 条可继续追问或修改的建议。",
    `年龄层：${payload.age || "6-8"}`,
    `模式：${payload.mode || "child"}`,
    `观察会话：${session.label || "LS26 导入会话"}`,
    `地点：${session.place || "未记录"}`,
    `时间：${session.date || ""} ${session.time || ""}`.trim(),
    `天气：${session.weather || "未记录"}`,
    `观察对象：${turn.object || "未记录"}`,
    `孩子原话：${turn.childReply || "未记录"}`,
    `感官细节：${turn.sensory || "未记录"}`,
    `故事种子：${turn.imagination || "未记录"}`,
    `感受：${turn.feeling || "未记录"}`,
    `动作：${turn.action || "未记录"}`,
    `设备追问：${guidance.question || turn.deviceReply || "未记录"}`,
    `写作目标：${guidance.goal || "story"}`,
    `表达语气：${guidance.tone || "gentle"}`,
    `生成侧重点：${guidance.lens || "auto"}`,
    `问题深度：${guidance.depth || "balanced"}`,
    `目标字数：约 ${targetWordCount} 字`,
    `本地提纲参考：${Array.isArray(guidance.outline) ? guidance.outline.join(" | ") : ""}`,
    `本地教练建议参考：${Array.isArray(guidance.coach) ? guidance.coach.join(" | ") : ""}`
  ].join("\n");
}

async function runAdb(args) {
  const { stdout, stderr } = await execFileAsync("adb", args, {
    cwd: PROJECT_DIR,
    timeout: 15000,
    maxBuffer: 1024 * 1024
  });

  return `${stdout || ""}${stderr || ""}`.trim();
}

function extractPid(rawOutput) {
  const match = rawOutput.match(/Product ID from KV:\s*([^\s]+)/);
  return match ? match[1] : "";
}

function normalizeTaskText(value, fallback = "") {
  const text = typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
  return text || fallback;
}

function buildDeviceMission(environment, focus) {
  const compactEnvironment = normalizeTaskText(environment, "附近").replace(/[，。、“”‘’：；？！,.!?]/g, "");
  const compactFocus = normalizeTaskText(focus, "变化和感受").replace(/[，。、“”‘’：；？！,.!?]/g, "");
  return `在${compactEnvironment}找一个容易被忽略的小地方留意${compactFocus}`;
}

function buildDeviceTaskContext(payload = {}) {
  const source = payload.deviceContext && typeof payload.deviceContext === "object"
    ? payload.deviceContext
    : payload;
  const questions = Array.isArray(source.questions)
    ? source.questions.map((item) => normalizeTaskText(item)).filter(Boolean).slice(0, 4)
    : [];
  const promptHints = Array.isArray(source.promptHints)
    ? source.promptHints.map((item) => normalizeTaskText(item)).filter(Boolean).slice(0, 4)
    : [];

  return {
    sessionId: normalizeTaskText(source.sessionId || payload.sessionId, `session-${Date.now()}`),
    title: normalizeTaskText(source.title || payload.title, "新的观察任务"),
    environment: normalizeTaskText(source.environment || payload.environment, "户外观察点"),
    focus: normalizeTaskText(source.focus || payload.focus, "变化、声音、痕迹或感受"),
    age: normalizeTaskText(source.age || payload.age, "6-8"),
    openMission: normalizeTaskText(
      source.openMission,
      buildDeviceMission(source.environment || payload.environment, source.focus || payload.focus)
    ),
    scripts: {
      intro: normalizeTaskText(source.scripts?.intro, "今天我们先做慢观察，先看十秒再决定要不要记录。"),
      observe: normalizeTaskText(source.scripts?.observe, "如果你找到观察点了，先看看哪里在变化。"),
      capture: normalizeTaskText(source.scripts?.capture, "现在你可以拍照或录音了，别忘了说说为什么想保存它。"),
      closing: normalizeTaskText(source.scripts?.closing, "这次观察先到这里，回教室后我们再把发现整理出来。")
    },
    questions,
    promptHints,
    updatedAt: new Date().toISOString()
  };
}

async function writeDeviceKv(key, value) {
  await runAdb(["shell", "kv", "set", "string", key, String(value ?? "")]);
}

async function readDeviceKv(key) {
  const output = await runAdb(["shell", "kv", "get", "string", key]);
  const lines = output.split("\n").map((line) => line.trim()).filter(Boolean);
  const prefix = `flash get ${key}:`;
  const targetLine = lines.find((line) => line.includes(prefix));
  if (!targetLine) {
    return "";
  }

  return targetLine
    .slice(targetLine.indexOf(prefix) + prefix.length)
    .replace(/\s+success$/, "")
    .trim();
}

async function syncTaskContextToDevice(payload = {}) {
  const context = buildDeviceTaskContext(payload);
  const writes = [
    [DEVICE_TASK_KEYS.sessionId, context.sessionId],
    [DEVICE_TASK_KEYS.title, context.title],
    [DEVICE_TASK_KEYS.environment, context.environment],
    [DEVICE_TASK_KEYS.focus, context.focus],
    [DEVICE_TASK_KEYS.age, context.age],
    [DEVICE_TASK_KEYS.openMission, context.openMission],
    [DEVICE_TASK_KEYS.introScript, context.scripts.intro],
    [DEVICE_TASK_KEYS.observeScript, context.scripts.observe],
    [DEVICE_TASK_KEYS.captureScript, context.scripts.capture],
    [DEVICE_TASK_KEYS.closingScript, context.scripts.closing],
    [DEVICE_TASK_KEYS.questionCount, String(context.questions.length)],
    [DEVICE_TASK_KEYS.promptHintCount, String(context.promptHints.length)],
    [DEVICE_TASK_KEYS.updatedAt, context.updatedAt]
  ];

  context.questions.forEach((question, index) => {
    writes.push([`ai_edu_question_${index + 1}`, question]);
  });
  context.promptHints.forEach((hint, index) => {
    writes.push([`ai_edu_prompt_hint_${index + 1}`, hint]);
  });

  for (const [key, value] of writes) {
    await writeDeviceKv(key, value);
  }

  return context;
}

async function getSyncedTaskContext() {
  const sessionId = await readDeviceKv(DEVICE_TASK_KEYS.sessionId).catch(() => "");
  if (!sessionId) {
    return null;
  }

  const title = await readDeviceKv(DEVICE_TASK_KEYS.title).catch(() => "");
  const environment = await readDeviceKv(DEVICE_TASK_KEYS.environment).catch(() => "");
  const focus = await readDeviceKv(DEVICE_TASK_KEYS.focus).catch(() => "");
  const age = await readDeviceKv(DEVICE_TASK_KEYS.age).catch(() => "");
  const openMission = await readDeviceKv(DEVICE_TASK_KEYS.openMission).catch(() => "");
  const intro = await readDeviceKv(DEVICE_TASK_KEYS.introScript).catch(() => "");
  const observe = await readDeviceKv(DEVICE_TASK_KEYS.observeScript).catch(() => "");
  const capture = await readDeviceKv(DEVICE_TASK_KEYS.captureScript).catch(() => "");
  const closing = await readDeviceKv(DEVICE_TASK_KEYS.closingScript).catch(() => "");
  const updatedAt = await readDeviceKv(DEVICE_TASK_KEYS.updatedAt).catch(() => "");
  const questionCount = Number(await readDeviceKv(DEVICE_TASK_KEYS.questionCount).catch(() => "0")) || 0;
  const promptHintCount = Number(await readDeviceKv(DEVICE_TASK_KEYS.promptHintCount).catch(() => "0")) || 0;

  const questions = [];
  for (let index = 0; index < Math.min(questionCount, 4); index += 1) {
    const question = await readDeviceKv(`ai_edu_question_${index + 1}`).catch(() => "");
    if (question) {
      questions.push(question);
    }
  }

  const promptHints = [];
  for (let index = 0; index < Math.min(promptHintCount, 4); index += 1) {
    const hint = await readDeviceKv(`ai_edu_prompt_hint_${index + 1}`).catch(() => "");
    if (hint) {
      promptHints.push(hint);
    }
  }

  return {
    sessionId,
    title,
    environment,
    focus,
    age,
    openMission,
    scripts: {
      intro,
      observe,
      capture,
      closing
    },
    questions,
    promptHints,
    updatedAt
  };
}

function buildExportPayloadFromSyncedTask(syncedTask) {
  if (!syncedTask?.sessionId) {
    return null;
  }

  const firstQuestion = Array.isArray(syncedTask.questions) && syncedTask.questions.length > 0
    ? syncedTask.questions[0]
    : "你最想从哪里开始说起？";
  const promptHints = Array.isArray(syncedTask.promptHints) ? syncedTask.promptHints.filter(Boolean) : [];
  const focusText = normalizeTaskText(syncedTask.focus, "这次观察里的关键线索");
  const environmentText = normalizeTaskText(syncedTask.environment, "观察点");
  const updatedAt = syncedTask.updatedAt || new Date().toISOString();

  return {
    sessionLabel: syncedTask.title || "LS26 观察任务",
    age: syncedTask.age || "6-8",
    place: environmentText,
    weather: "待补充",
    childName: "待补充真实观察者",
    timestamp: updatedAt,
    syncStatus: "已从 LS26 导回本次任务上下文，可直接进入网页写作准备。",
    tags: ["LS26 导回", "任务上下文", "待补充真实原话"],
    source: "ls26-device-export",
    meta: {
      fromDeviceContext: true,
      hasCapturedDialogue: false,
      sessionId: syncedTask.sessionId
    },
    turns: [
      {
        object: focusText,
        recognizedObject: focusText,
        childReply: "（当前版本已导回任务上下文；孩子现场原话仍需下一步设备端真实写入后才能自动带回。）",
        sensory: promptHints.length > 0
          ? `现场提示词：${promptHints.join("、")}`
          : `现场重点：${focusText}`,
        imagination: syncedTask.openMission || "请围绕这次观察任务，继续把现场发现补成一段可写下来的内容。",
        feeling: "好奇",
        action: `我在${environmentText}完成了这一轮观察任务，并把任务上下文带回了网页。`,
        deviceReply: `现场任务：${syncedTask.openMission || "先观察十秒，再决定最想保存的发现。"}${firstQuestion ? ` 追问：${firstQuestion}` : ""}`,
        timestamp: updatedAt,
        source: "device-session-export",
        tags: ["导回任务", "写作准备"],
        deviceScripts: syncedTask.scripts || {}
      }
    ]
  };
}

async function getDeviceStatus() {
  const devicesOutput = await runAdb(["devices", "-l"]);
  const deviceLine = devicesOutput
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line && !line.startsWith("List of devices") && line.includes("device"));

  if (!deviceLine) {
    return {
      connected: false,
      transportId: "",
      productId: "",
      productMatch: false,
      interactionMode: deviceInteractionMode,
      statusText: "没有检测到已连接的 LS26。"
    };
  }

  let productId = "";
  try {
    const pidOutput = await runAdb(["shell", "device", "get_pid"]);
    productId = extractPid(pidOutput);
  } catch (error) {
    productId = "";
  }

  const transportIdMatch = deviceLine.match(/transport_id:(\d+)/);
  const syncedTask = productId === PRODUCT_ID
    ? await getSyncedTaskContext().catch(() => null)
    : null;

  return {
    connected: true,
    transportId: transportIdMatch ? transportIdMatch[1] : "",
    productId,
    productMatch: productId === PRODUCT_ID,
    interactionMode: deviceInteractionMode,
    syncedTask,
    statusText: productId === PRODUCT_ID
      ? "设备已连接，并且当前 PID 与 AI_Edu_Box 匹配。"
      : "设备已连接，但当前 PID 未确认和 AI_Edu_Box 一致。"
  };
}

async function startDeviceInteraction() {
  await runAdb(["shell", "interact", "start"]);
  deviceInteractionMode = "started";
}

async function stopDeviceInteraction() {
  await runAdb(["shell", "interact", "stop"]);
  deviceInteractionMode = "stopped";
}

async function callDeepSeek(payload) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    const error = new Error("未设置 DEEPSEEK_API_KEY。");
    error.statusCode = 400;
    throw error;
  }

  const response = await fetch(`${API_BASE_URL.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: MODEL_NAME,
      messages: [
        {
          role: "system",
          content: "你只返回合法 JSON，不要返回任何解释文字。"
        },
        {
          role: "user",
          content: buildWritingPrompt(payload)
        }
      ],
      temperature: 0.7,
      max_tokens: 1200,
      response_format: { type: "json_object" },
      thinking: { type: "disabled" }
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data.error?.message || data.message || "DeepSeek 请求失败。");
    error.statusCode = response.status;
    throw error;
  }

  const content = data.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("DeepSeek 没有返回可用内容。");
  }

  try {
    const parsed = JSON.parse(content);
    return {
      model: data.model || MODEL_NAME,
      title: parsed.title,
      outline: parsed.outline,
      draft: parsed.draft,
      coachTips: parsed.coachTips
    };
  } catch (error) {
    throw new Error("DeepSeek 返回内容无法解析为 JSON。");
  }
}

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host || `${HOST}:${PORT}`}`);

  if (request.method === "GET" && requestUrl.pathname === "/api/health") {
    const deviceStatus = await getDeviceStatus().catch(() => ({
      connected: false,
      productMatch: false
    }));
    sendJson(response, 200, {
      ok: true,
      model: MODEL_NAME,
      configured: Boolean(process.env.DEEPSEEK_API_KEY),
      deviceConnected: Boolean(deviceStatus.connected),
      deviceProductMatch: Boolean(deviceStatus.productMatch)
    });
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/device/status") {
    try {
      const status = await getDeviceStatus();
      sendJson(response, 200, status);
    } catch (error) {
      sendJson(response, 500, {
        error: error.message || "无法读取设备状态。"
      });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/generate-writing") {
    try {
      const body = await readRequestBody(request);
      const payload = JSON.parse(body || "{}");
      const result = await callDeepSeek(payload);
      sendJson(response, 200, result);
    } catch (error) {
      sendJson(response, error.statusCode || 500, {
        error: error.message || "服务端请求失败。"
      });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/device/start-session") {
    try {
      const body = await readRequestBody(request);
      const payload = JSON.parse(body || "{}");
      const context = await syncTaskContextToDevice(payload);
      await startDeviceInteraction();
      const status = await getDeviceStatus();
      sendJson(response, 200, {
        ok: true,
        message: `已把任务“${context.title}”写入 LS26，并让设备进入交互模式。现在 session_id、开放问题和提示词都已经同步到设备侧。`,
        sessionId: context.sessionId,
        syncedTask: context,
        status
      });
    } catch (error) {
      sendJson(response, 500, {
        error: error.message || "无法启动设备交互模式。"
      });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/device/stop-session") {
    try {
      await stopDeviceInteraction();
      const status = await getDeviceStatus();
      const exportedSession = buildExportPayloadFromSyncedTask(status.syncedTask);
      sendJson(response, 200, {
        ok: true,
        message: exportedSession
          ? "已结束 LS26 交互，并把本次任务上下文导回网页。"
          : "已请求 LS26 退出交互模式。",
        status,
        exportedSession
      });
    } catch (error) {
      sendJson(response, 500, {
        error: error.message || "无法停止设备交互模式。"
      });
    }
    return;
  }

  if (request.method === "GET" || request.method === "HEAD") {
    serveStatic(requestUrl.pathname, response, request.method);
    return;
  }

  sendJson(response, 405, { error: "不支持的请求方法。" });
});

server.listen(PORT, HOST, () => {
  console.log(`AI Edu MVP server running at http://${HOST}:${PORT}`);
});
