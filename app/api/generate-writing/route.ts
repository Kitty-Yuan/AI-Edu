function normalizeText(value: unknown, fallback = "") {
  const text = typeof value === "string" ? value.trim() : "";
  return text || fallback;
}

function buildWritingPrompt(payload: any) {
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

export async function POST(request: Request) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "未设置 DEEPSEEK_API_KEY。" }, { status: 400 });
  }

  try {
    const payload = await request.json();
    const baseUrl = process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com";
    const model = process.env.DEEPSEEK_MODEL || "deepseek-v4-flash";

    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
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
        max_tokens: 1400,
        response_format: { type: "json_object" },
        thinking: { type: "disabled" }
      })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return Response.json(
        { error: data.error?.message || data.message || "DeepSeek 请求失败。" },
        { status: response.status }
      );
    }

    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      return Response.json({ error: "DeepSeek 没有返回可用内容。" }, { status: 500 });
    }

    const parsed = JSON.parse(content);
    return Response.json({
      model: data.model || model,
      title: normalizeText(parsed.title),
      outline: Array.isArray(parsed.outline) ? parsed.outline.map((item: unknown) => normalizeText(item)).filter(Boolean) : [],
      draft: normalizeText(parsed.draft),
      coachTips: Array.isArray(parsed.coachTips) ? parsed.coachTips.map((item: unknown) => normalizeText(item)).filter(Boolean) : []
    });
  } catch (error: any) {
    return Response.json({ error: error?.message || "服务端请求失败。" }, { status: 500 });
  }
}
