const sessions = [
  {
    id: "park-leaf",
    label: "公园叶子",
    age: "6-8",
    date: "2026.07.14",
    time: "16:18",
    place: "小区公园小路边",
    weather: "晴天，有一点风",
    syncStatus: "已从 LS26-01 直连云端同步",
    theme: "植物观察",
    childName: "演示儿童 A",
    turns: [
      {
        id: "leaf-1",
        icon: "🍂",
        object: "黄色的叶子",
        recognizedObject: "黄色的叶子",
        imageHint: "一片弯弯的叶子",
        deviceReply: "我看到了：一片黄色的叶子。小知识：叶子的颜色和形状可以帮助我们发现季节的变化。观察问题：你觉得它像小船、扇子，还是小手？",
        childReply: "像小船。",
        feeling: "好奇",
        action: "我蹲下来轻轻看了看",
        imagination: "它像要去旅行的小船",
        sensory: "看起来弯弯的，边边卷起来一点",
        tags: ["植物", "季节", "形状"],
        syncPayload: {
          session_id: "park-leaf",
          turn_index: 1,
          source: "image",
          image_url: "ls26://session/park-leaf/leaf-1.jpg",
          recognized_object: "黄色的叶子",
          device_reply: "我看到了：一片黄色的叶子。小知识：叶子的颜色和形状可以帮助我们发现季节的变化。观察问题：你觉得它像小船、扇子，还是小手？",
          child_asr_text: "像小船。",
          timestamp: "2026-07-14T16:18:12+08:00"
        }
      },
      {
        id: "leaf-2",
        icon: "👣",
        object: "叶子旁边的小路",
        recognizedObject: "石砖小路和落叶",
        imageHint: "叶子躺在石砖旁边",
        deviceReply: "我看到了：叶子旁边还有石砖小路。小知识：位置关系会让一片叶子更像一个故事里的场景。观察问题：你觉得它是在休息，还是准备被风带走？",
        childReply: "准备被风带走。",
        feeling: "安静",
        action: "我又往近一点看",
        imagination: "它好像在等风来接它",
        sensory: "旁边的地面有一点热，叶子静静地躺着",
        tags: ["地点", "关系", "想象"],
        syncPayload: {
          session_id: "park-leaf",
          turn_index: 2,
          source: "speech",
          image_url: "ls26://session/park-leaf/leaf-1.jpg",
          recognized_object: "石砖小路和落叶",
          device_reply: "我看到了：叶子旁边还有石砖小路。小知识：位置关系会让一片叶子更像一个故事里的场景。观察问题：你觉得它是在休息，还是准备被风带走？",
          child_asr_text: "准备被风带走。",
          timestamp: "2026-07-14T16:18:39+08:00"
        }
      }
    ],
    insights: [
      "孩子已经能从“看到什么”过渡到“它像什么”。",
      "本次会话中出现了位置关系和想象表达，适合生成故事开头。",
      "对低龄孩子来说，LS26 的追问起到了“替孩子打开观察角度”的作用。"
    ]
  },
  {
    id: "sky-cloud",
    label: "天空云层",
    age: "9-10",
    date: "2026.07.14",
    time: "17:06",
    place: "操场边的草地",
    weather: "傍晚，云层很多",
    syncStatus: "已从 LS26-01 直连云端同步",
    theme: "天空观察",
    childName: "演示儿童 B",
    turns: [
      {
        id: "cloud-1",
        icon: "☁️",
        object: "一团被夕阳照亮的云",
        recognizedObject: "云层和晚霞",
        imageHint: "云边有橙色的光",
        deviceReply: "我看到了：一团被夕阳照亮的云。小知识：傍晚的光会让云层像舞台背景一样改变气氛。观察问题：这片云更像故事里的背景，还是像一个刚出场的角色？",
        childReply: "更像刚出场的角色。",
        feeling: "惊喜",
        action: "我抬头看了很久",
        imagination: "像披着橙色披风的人",
        sensory: "边缘亮亮的，颜色在慢慢变",
        tags: ["天空", "光线", "角色感"],
        syncPayload: {
          session_id: "sky-cloud",
          turn_index: 1,
          source: "image",
          image_url: "ls26://session/sky-cloud/cloud-1.jpg",
          recognized_object: "云层和晚霞",
          device_reply: "我看到了：一团被夕阳照亮的云。小知识：傍晚的光会让云层像舞台背景一样改变气氛。观察问题：这片云更像故事里的背景，还是像一个刚出场的角色？",
          child_asr_text: "更像刚出场的角色。",
          timestamp: "2026-07-14T17:06:04+08:00"
        }
      },
      {
        id: "cloud-2",
        icon: "🌬️",
        object: "云层后面的风",
        recognizedObject: "风吹动的树梢和云层",
        imageHint: "云下面的树稍微晃动",
        deviceReply: "我看到了：风让云层和树梢一起动了起来。小知识：风虽然看不见，却能通过别的东西留下线索。观察问题：你最想把哪一种变化写进故事里，是光、风，还是树梢？",
        childReply: "我想写树梢在风里动。",
        feeling: "投入",
        action: "我一边看一边说给设备听",
        imagination: "像有人在幕后轻轻拉开幕布",
        sensory: "树梢一下一下晃，天有点慢慢暗下来",
        tags: ["变化", "动作", "叙事背景"],
        syncPayload: {
          session_id: "sky-cloud",
          turn_index: 2,
          source: "speech",
          image_url: "ls26://session/sky-cloud/cloud-1.jpg",
          recognized_object: "风吹动的树梢和云层",
          device_reply: "我看到了：风让云层和树梢一起动了起来。小知识：风虽然看不见，却能通过别的东西留下线索。观察问题：你最想把哪一种变化写进故事里，是光、风，还是树梢？",
          child_asr_text: "我想写树梢在风里动。",
          timestamp: "2026-07-14T17:06:44+08:00"
        }
      }
    ],
    insights: [
      "孩子已经能回答“像什么”，也能选择叙事重点。",
      "这一年龄层适合从观察卡直接过渡到故事提纲。",
      "平台可以重点展示“同一观察如何转成叙事结构”。"
    ]
  },
  {
    id: "bridge-city",
    label: "城市桥面",
    age: "11-12",
    date: "2026.07.14",
    time: "18:02",
    place: "人行桥上",
    weather: "傍晚，车流很多",
    syncStatus: "已从 LS26-01 直连云端同步",
    theme: "城市观察",
    childName: "演示儿童 C",
    turns: [
      {
        id: "bridge-1",
        icon: "🌉",
        object: "桥下流动的车灯",
        recognizedObject: "桥、车流和路灯",
        imageHint: "桥下面是一串流动的亮点",
        deviceReply: "我看到了：桥下的车灯像一条流动的线。小知识：城市里的光线会让空间变得更有节奏感。观察问题：如果把这里写成故事开头，你觉得这是一条忙碌的通道，还是一个正在发生选择的地方？",
        childReply: "像一个正在发生选择的地方。",
        feeling: "专注",
        action: "我站在栏杆边看车灯过去",
        imagination: "每辆车都像带着不同决定的人",
        sensory: "下面有连续的灯，声音一阵一阵地过去",
        tags: ["城市", "节奏", "空间感"],
        syncPayload: {
          session_id: "bridge-city",
          turn_index: 1,
          source: "image",
          image_url: "ls26://session/bridge-city/bridge-1.jpg",
          recognized_object: "桥、车流和路灯",
          device_reply: "我看到了：桥下的车灯像一条流动的线。小知识：城市里的光线会让空间变得更有节奏感。观察问题：如果把这里写成故事开头，你觉得这是一条忙碌的通道，还是一个正在发生选择的地方？",
          child_asr_text: "像一个正在发生选择的地方。",
          timestamp: "2026-07-14T18:02:16+08:00"
        }
      }
    ],
    insights: [
      "高年龄层可以直接进入结构化写作工作台。",
      "这个案例特别适合展示“观察如何长成叙事张力”。",
      "平台端可以用 AI 教练强调感官、空间和人物感。"
    ]
  }
];

const importedSessionsStorageKey = "ls26-mvp-imported-sessions-v1";

const sampleImportPayload = {
  sessionLabel: "教学楼角落里的叶子",
  age: "6-8",
  place: "教学楼旁边的花坛角落",
  weather: "雨后，地面有一点湿",
  childName: "演示儿童",
  object: "一片被雨打湿的黄色叶子",
  childReply: "它像一只刚停下来的小船，我想知道风会不会再把它吹走。",
  sensory: "叶子表面湿湿的，边缘卷起来一点，颜色深浅不一样",
  imagination: "像准备继续旅行的小船",
  feeling: "好奇",
  action: "我蹲下来，靠近看了看它边上的水珠",
  tags: ["植物", "雨后", "慢观察"]
};

const modeText = {
  child: {
    sync: "LS26 已同步最近一次观察会话",
    hint: "你已经有“看到什么、像什么、感觉怎么样”了，再补一个“后来发生了什么”，故事会更完整。",
    coachLabel: "这是一份根据孩子观察自动整理的草稿，重点是继续补充，不是直接代写。"
  },
  guide: {
    sync: "展示模式：正在演示 LS26 与平台的共创观察链路",
    hint: "当前页面重点展示：设备端追问如何转化为平台端的故事积木与提纲结构。",
    coachLabel: "这一栏适合家长、老师和合作方理解 AI 在哪里提供脚手架，而不是替孩子完成全部写作。"
  }
};

const ageProfiles = {
  "6-8": {
    label: "6–8 岁",
    inputMode: "voice_only",
    titlePrefix: "我的观察小卡片",
    coach: [
      "先保留孩子自己的词，比如“小船”“旅行”。",
      "句子短一点，让孩子愿意继续改和继续说。",
      "优先补“在哪里”和“我做了什么”，不要一次加太多抽象词。"
    ]
  },
  "9-10": {
    label: "9–10 岁",
    inputMode: "voice_or_text",
    titlePrefix: "我的故事提纲",
    coach: [
      "可以引导孩子把“看到的”和“想到的”分成两个层次。",
      "鼓励孩子补一个变化，让故事有经过。",
      "允许出现稍微复杂一点的比喻和位置关系。"
    ]
  },
  "11-12": {
    label: "11–12 岁",
    inputMode: "voice_or_text",
    titlePrefix: "我的写作工作台",
    coach: [
      "重点加强空间感、节奏感和情绪变化。",
      "鼓励孩子把观察对象转成故事线索，而不只是描述物体。",
      "写作建议应更像编辑反馈，而不是填空。"
    ]
  }
};

const lensLabels = {
  auto: "自动判断",
  narrative: "更叙事",
  sensory: "更感官",
  science: "更科普",
  imagination: "更想象"
};

const goalLabels = {
  story: "短故事",
  observation: "观察日记",
  science: "小观察记录",
  narrative: "叙事作文"
};

const toneLabels = {
  gentle: "温柔鼓励",
  curious: "更有探究感",
  mature: "更成熟一点",
  playful: "更有画面感"
};

const depthLabels = {
  light: "轻一点",
  balanced: "平衡",
  deep: "更深入"
};

const themeProfiles = {
  plant: {
    match: ["叶", "树", "花", "草", "果", "种子", "藤", "苔"],
    icon: "🍃",
    knowledge: {
      "6-8": [
        "植物的颜色和边缘，常常在告诉我们它正在经历季节和阳光。",
        "一片叶子看起来很安静，其实它的形状、颜色和位置都在讲故事。 "
      ],
      "9-10": [
        "植物的颜色、叶脉和边缘变化，往往能帮助我们判断季节、风和水分的影响。",
        "同一株植物远看像整体，近看却会出现叶脉、纹理和位置关系这些写作线索。 "
      ],
      "11-12": [
        "植物并不只是静态物体，它的颜色、干湿度和所在位置都在透露时间和环境变化。",
        "真正有叙事感的植物观察，不只写名称，更要写它如何和周围空间形成关系。 "
      ]
    },
    sensory: ["边缘有轻轻卷起的弧度", "颜色里有深浅变化", "靠近看会发现表面有细细纹路"],
    imagination: ["它像准备启程的小船", "它像一封被风带着走的信", "它像从树上慢慢飘下来的小角色"],
    question: {
      light: [
        "你最想再看它的颜色、边缘，还是它待着的位置？",
        "它最像一个安静的发现，还是像故事里的小角色？"
      ],
      balanced: [
        "如果把它写进故事里，你最想先写它的颜色变化，还是它和周围环境的关系？",
        "从它现在的样子看，你觉得它更像在休息，还是准备被风带去别的地方？"
      ],
      deep: [
        "如果它是这个场景里的线索，你觉得它透露的是季节变化、风经过的痕迹，还是一次即将发生的离开？",
        "它和地面、光线、风之间的关系，哪一处最值得写成故事里的转折？"
      ]
    }
  },
  sky: {
    match: ["云", "天空", "风", "光", "晚霞", "太阳", "月亮", "影子"],
    icon: "☁️",
    knowledge: {
      "6-8": [
        "天空会让整个地方的感觉变得不一样，云和光就像会变的背景。",
        "风虽然看不见，但它会让云、树和光一起动起来。 "
      ],
      "9-10": [
        "天空和天气常常决定一个场景的气氛，光线、云层和风会一起改变画面的节奏。",
        "同一片天空在不同时间会像换了舞台背景，适合写进叙事开头。 "
      ],
      "11-12": [
        "天空观察真正重要的不是“看见一朵云”，而是光线、风和空间如何一起制造情绪。",
        "云层和光影很适合作为叙事背景，因为它们会让场景拥有变化和节奏。 "
      ]
    },
    sensory: ["边缘亮亮的，颜色在缓慢移动", "光线落下来时，画面像被重新涂了一层颜色", "风一过，周围的树梢和云层都像一起动了起来"],
    imagination: ["它像刚从故事里走出来的角色", "它像舞台背后正在慢慢拉开的幕布", "它像一个会把场景气氛悄悄改掉的背景设计师"],
    question: {
      light: [
        "你觉得它更像背景，还是像刚出场的角色？",
        "你最想记住的是颜色、光，还是风带来的变化？"
      ],
      balanced: [
        "如果把这一幕写成故事开头，你最想让读者先看到光线、云层，还是风吹动的变化？",
        "这片天空让你更想写一个安静的片段，还是一个即将发生变化的场景？"
      ],
      deep: [
        "如果它是叙事背景的一部分，你觉得它在推动场景变得更安静，还是在暗示某个转折即将发生？",
        "这里最值得写下来的，不只是“有云”，而是光、风和空间怎样一起改变了你的判断，你会从哪一处下笔？"
      ]
    }
  },
  playground: {
    match: ["自行车", "单车", "滑梯", "秋千", "长椅", "操场", "篮球架", "球门", "栏杆", "跷跷板", "跑道"],
    icon: "🛝",
    knowledge: {
      "6-8": [
        "户外设施和物件会留下很多线索，比如停放的位置、使用的痕迹，还有它和周围空间的关系。",
        "有些东西看起来只是放在那里，其实它的方向、材质和停留方式都在告诉我们刚才发生过什么。 "
      ],
      "9-10": [
        "像自行车、长椅、滑梯这样的户外物件，很适合拿来观察“谁用过它、它为什么会停在这里”。",
        "人工物体的观察重点，常常不是名称，而是它和动作、痕迹、路线之间的关系。 "
      ],
      "11-12": [
        "户外设施天然带有行动线索，因为它们往往和人的停留、经过、等待或离开有关。",
        "当一个人工物件和场景发生关系时，它就不只是被看见的对象，而会变成叙事中的证据。 "
      ]
    },
    sensory: ["车身边缘有反光，停着的时候却像刚刚结束一段路", "表面有被使用过的痕迹，方向也像在说明它刚才怎样停下", "它和周围空间之间留出了可以被经过、被停留、被重新出发的距离"],
    imagination: ["它像刚停下来休息的旅伴", "它像知道很多路线却暂时安静下来的向导", "它像一段行动刚刚暂停、下一段故事又快开始的线索"],
    question: {
      light: [
        "你最想继续看它停放的方向，还是它和周围空间的距离？",
        "它更像刚刚结束一段路，还是像准备再出发的伙伴？"
      ],
      balanced: [
        "如果把它写进故事里，你最想从它停下来的位置，还是从它像被谁用过的痕迹开始写？",
        "你觉得它最能说明场景的一点，是它的方向、停留方式，还是它和周围人的关系？"
      ],
      deep: [
        "如果它是这个场景里的线索，你觉得它最像在说明一次到达、一次停留，还是一次准备重新出发？",
        "除了它本身，你还想追哪一个细节，才能判断这里刚才发生过什么、接下来又可能去向哪里？"
      ]
    }
  },
  city: {
    match: ["桥", "车", "路", "路灯", "建筑", "城市", "斑马线", "路口", "公交", "高楼", "街道"],
    icon: "🌉",
    knowledge: {
      "6-8": [
        "城市里的灯和路会让很多东西一起动起来，看起来像有节奏的画面。",
        "同一个地方，因为人、车和光不同，就会有不一样的感觉。 "
      ],
      "9-10": [
        "城市观察不只是看见建筑或车，更要看它们怎样一起组成方向、速度和节奏。",
        "桥、路口和灯光很适合写成故事场景，因为它们会影响人会往哪里去。 "
      ],
      "11-12": [
        "城市中的桥、灯和车流本身就带有叙事张力，因为它们天然连接了选择、流动和秩序。",
        "写城市观察时，真正有力量的不是罗列物体，而是写它们怎样制造出节奏和判断。 "
      ]
    },
    sensory: ["下面的灯一串一串地过去", "声音不是一下子来的，而是一阵一阵从桥下推过来", "光线在移动，空间也像跟着一起改变了方向"],
    imagination: ["每一盏灯都像带着一个要去别处的人", "桥下面像一条不停流动的故事线", "这个地方像很多选择正在同时发生的路口"],
    question: {
      light: [
        "这个地方更像忙碌的通道，还是像一个会发生故事的地方？",
        "你更想写光、声音，还是人会往哪里去？"
      ],
      balanced: [
        "如果把这里写成故事开头，你最想让读者先注意到它的节奏、方向，还是正在经过的人？",
        "站在这里时，你觉得最有故事感的是流动的灯，还是这个空间让人必须做出选择？"
      ],
      deep: [
        "这处城市场景最适合承载哪一种叙事力量：秩序、流动，还是选择？你会用什么细节把它写出来？",
        "如果这里只是背景，它会显得普通；但如果它是一条叙事线索，你觉得它正在推动谁、去向哪里？"
      ]
    }
  },
  generic: {
    match: [],
    icon: "🧭",
    knowledge: {
      "6-8": [
        "一个东西的颜色、样子和位置，都能让我们发现它特别在哪里。",
        "只要你愿意多看一会儿，很多普通的东西都会变成故事开始的地方。 "
      ],
      "9-10": [
        "好的观察不会只停在“看见了什么”，还会继续追问它为什么在这里、和周围有什么关系。",
        "把对象、位置和感受连起来，观察就会慢慢变成叙事材料。 "
      ],
      "11-12": [
        "当一个对象开始和空间、时间、动作发生关系，它就不再只是被描述的东西，而会变成叙事线索。",
        "观察的价值，不在于答案，而在于你如何通过细节建立判断。 "
      ]
    },
    sensory: ["靠近之后，细节比远看时更多", "位置、光线和周围的关系让它变得更值得记", "它看起来不像孤立存在，而像在某个场景里扮演角色"],
    imagination: ["它像一个故事刚冒出来的线索", "它像在等人把它真正看清楚", "它像一个还没被说出来的开头"],
    question: {
      light: [
        "你最想继续记住它的样子，还是它带给你的感觉？",
        "它更像一个发现，还是像故事里的线索？"
      ],
      balanced: [
        "如果你要把它写给别人听，你最想让别人先看到它的外形、位置，还是你当时的感觉？",
        "它和周围环境之间，哪一种关系最值得再看近一点？"
      ],
      deep: [
        "如果它要承担故事里的一个作用，你觉得它更像证据、线索，还是一个推动情节变化的背景？",
        "除了它本身，你还会追哪一个细节，才能让这次观察真正长成叙事？"
      ]
    }
  }
};

const state = {
  mode: "child",
  age: "6-8",
  sessionId: "park-leaf",
  turnId: "leaf-1",
  canvasBlocks: [],
  aiInput: null,
  aiBundle: null,
  selectedQuestionIndex: 0,
  apiWriting: null,
  apiStatusText: "当前显示本地模板生成结果。接入 API 后可切换为真实模型生成。",
  targetWordCount: 300,
  taskBlueprint: null,
  deviceBridge: {
    connected: false,
    transportId: "",
    productId: "",
    productMatch: false,
    interactionMode: "unknown",
    statusText: "正在检查 LS26 连接状态……",
    syncedTask: null
  },
  importDraft: {
    imageUrl: "",
    imageName: "",
    audioUrl: "",
    audioName: "",
    lastImportedLabel: ""
  }
};

const taskStatusText = document.getElementById("taskStatusText");
const taskSessionSummary = document.getElementById("taskSessionSummary");
const deviceBridgeSummary = document.getElementById("deviceBridgeSummary");
const taskPromptList = document.getElementById("taskPromptList");
const taskCardTitle = document.getElementById("taskCardTitle");
const taskCardMeta = document.getElementById("taskCardMeta");
const taskMissionText = document.getElementById("taskMissionText");
const taskPhaseList = document.getElementById("taskPhaseList");
const taskQuestionList = document.getElementById("taskQuestionList");
const taskTeacherTips = document.getElementById("taskTeacherTips");
const taskDeviceScripts = document.getElementById("taskDeviceScripts");
const taskTitleInput = document.getElementById("taskTitleInput");
const taskEnvironmentInput = document.getElementById("taskEnvironmentInput");
const taskAgeSelect = document.getElementById("taskAgeSelect");
const taskDateInput = document.getElementById("taskDateInput");
const taskTimeInput = document.getElementById("taskTimeInput");
const taskFocusInput = document.getElementById("taskFocusInput");
const taskNoteInput = document.getElementById("taskNoteInput");
const taskDeviceIntroInput = document.getElementById("taskDeviceIntroInput");
const taskDeviceObserveInput = document.getElementById("taskDeviceObserveInput");
const taskDeviceCaptureInput = document.getElementById("taskDeviceCaptureInput");
const taskDeviceClosingInput = document.getElementById("taskDeviceClosingInput");
const sessionList = document.getElementById("sessionList");
const timelineList = document.getElementById("timelineList");
const observationCard = document.getElementById("observationCard");
const syncFields = document.getElementById("syncFields");
const sessionMeta = document.getElementById("sessionMeta");
const blockLibrary = document.getElementById("blockLibrary");
const storyCanvas = document.getElementById("storyCanvas");
const canvasHint = document.getElementById("canvasHint");
const writingNotes = document.getElementById("writingNotes");
const writingOutline = document.getElementById("writingOutline");
const writingDraft = document.getElementById("writingDraft");
const writingDraftMeta = document.getElementById("writingDraftMeta");
const writingCoach = document.getElementById("writingCoach");
const apiStatusText = document.getElementById("apiStatusText");
const insightList = document.getElementById("insightList");
const writingWordCountSelect = document.getElementById("writingWordCountSelect");
const syncStatusText = document.getElementById("syncStatusText");
const devicePreviewObject = document.getElementById("devicePreviewObject");
const devicePreviewReply = document.getElementById("devicePreviewReply");
const importStatusText = document.getElementById("importStatusText");
const importSummary = document.getElementById("importSummary");
const importMediaPreview = document.getElementById("importMediaPreview");
const importAgeModeNote = document.getElementById("importAgeModeNote");
const importSessionLabelField = document.getElementById("importSessionLabelField");
const importPlaceField = document.getElementById("importPlaceField");
const importObjectField = document.getElementById("importObjectField");
const importChildReplyField = document.getElementById("importChildReplyField");
const importSensoryField = document.getElementById("importSensoryField");
const importImaginationField = document.getElementById("importImaginationField");
const importJsonTextField = document.getElementById("importJsonTextField");
const importSessionLabel = document.getElementById("importSessionLabel");
const importAgeSelect = document.getElementById("importAgeSelect");
const importPlaceInput = document.getElementById("importPlaceInput");
const importObjectInput = document.getElementById("importObjectInput");
const importChildReplyInput = document.getElementById("importChildReplyInput");
const importSensoryInput = document.getElementById("importSensoryInput");
const importImaginationInput = document.getElementById("importImaginationInput");
const importJsonText = document.getElementById("importJsonText");
const importJsonFile = document.getElementById("importJsonFile");
const importImageFile = document.getElementById("importImageFile");
const importAudioFile = document.getElementById("importAudioFile");
const aiStudioStatus = document.getElementById("aiStudioStatus");
const aiAgeModeNote = document.getElementById("aiAgeModeNote");
const aiObjectField = document.getElementById("aiObjectField");
const aiPlaceField = document.getElementById("aiPlaceField");
const aiChildReplyField = document.getElementById("aiChildReplyField");
const aiStrategyList = document.getElementById("aiStrategyList");
const aiQuestionVariants = document.getElementById("aiQuestionVariants");
const aiSummary = document.getElementById("aiSummary");
const aiObjectInput = document.getElementById("aiObjectInput");
const aiPlaceInput = document.getElementById("aiPlaceInput");
const aiChildReplyInput = document.getElementById("aiChildReplyInput");
const aiLensSelect = document.getElementById("aiLensSelect");
const aiGoalSelect = document.getElementById("aiGoalSelect");
const aiToneSelect = document.getElementById("aiToneSelect");
const aiDepthSelect = document.getElementById("aiDepthSelect");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function asTextList(value) {
  if (Array.isArray(value)) {
    return value.map((item) => normalizeText(item)).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(/[，,、|]/)
      .map((item) => normalizeText(item))
      .filter(Boolean);
  }

  return [];
}

function slugify(input) {
  const normalized = normalizeText(input, "ls26-import");
  const basic = normalized
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return basic || `ls26-import-${Date.now()}`;
}

function formatDateDisplay(date = new Date()) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}.${month}.${day}`;
}

function formatTimeDisplay(date = new Date()) {
  const hours = `${date.getHours()}`.padStart(2, "0");
  const minutes = `${date.getMinutes()}`.padStart(2, "0");
  return `${hours}:${minutes}`;
}

function formatDateInputValue(date = new Date()) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatTimeInputValue(date = new Date()) {
  const hours = `${date.getHours()}`.padStart(2, "0");
  const minutes = `${date.getMinutes()}`.padStart(2, "0");
  return `${hours}:${minutes}`;
}

function fileToText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("读取文件失败"));
    reader.readAsText(file);
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("读取文件失败"));
    reader.readAsDataURL(file);
  });
}

function hashString(input) {
  return Array.from(input).reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function pickVariant(list, key, shift = 0) {
  if (!list || list.length === 0) {
    return "";
  }
  const index = (hashString(key) + shift) % list.length;
  return list[index];
}

function normalizeText(text, fallback = "") {
  return (text || "").replace(/\s+/g, " ").trim() || fallback;
}

function stripTrailingPunctuation(text) {
  return normalizeText(text).replace(/[。！？!?，,、；;：:\s]+$/g, "");
}

function simplifyComparable(text) {
  return normalizeText(text).replace(/[^\u4e00-\u9fa5A-Za-z0-9]/g, "");
}

function hasObservationChanged(sourceText, nextText) {
  const source = simplifyComparable(sourceText);
  const next = simplifyComparable(nextText);

  if (!source || !next) {
    return false;
  }

  return !source.includes(next) && !next.includes(source);
}

function getActiveSession() {
  return sessions.find((session) => session.id === state.sessionId) || sessions[0];
}

function getSourceTurn() {
  const session = getActiveSession();
  return session.turns.find((turn) => turn.id === state.turnId) || session.turns[0];
}

function inferTheme(objectText, placeText) {
  const objectHaystack = normalizeText(objectText);
  const placeHaystack = normalizeText(placeText);
  let bestTheme = "generic";
  let bestScore = 0;

  for (const [themeName, profile] of Object.entries(themeProfiles)) {
    if (themeName === "generic") {
      continue;
    }

    const objectScore = profile.match.reduce((score, keyword) => {
      return score + (objectHaystack.includes(keyword) ? 3 : 0);
    }, 0);

    const placeScore = profile.match.reduce((score, keyword) => {
      return score + (placeHaystack.includes(keyword) ? 1 : 0);
    }, 0);

    const totalScore = objectScore + placeScore;
    if (totalScore > bestScore) {
      bestTheme = themeName;
      bestScore = totalScore;
    }
  }

  return bestScore > 0 ? bestTheme : "generic";
}

function inferLens(turn) {
  if ((turn.tags || []).includes("形状") || turn.imagination.includes("像")) {
    return "imagination";
  }
  if ((turn.tags || []).includes("叙事背景") || (turn.tags || []).includes("关系")) {
    return "narrative";
  }
  if (turn.sensory.includes("颜色") || turn.sensory.includes("声音") || turn.sensory.includes("纹")) {
    return "sensory";
  }
  return "auto";
}

function inferGoal(age) {
  if (age === "6-8") {
    return "story";
  }
  if (age === "9-10") {
    return "observation";
  }
  return "narrative";
}

function loadAiInputFromTurn() {
  const session = getActiveSession();
  const turn = getSourceTurn();

  state.aiInput = {
    object: normalizeText(turn.object, "一个有趣的户外对象"),
    place: normalizeText(session.place, "户外场景里"),
    childReply: normalizeText(turn.childReply, "我觉得它很特别。"),
    lens: inferLens(turn),
    goal: inferGoal(state.age),
    tone: state.age === "11-12" ? "mature" : "gentle",
    depth: state.age === "6-8" ? "light" : "balanced"
  };
}

function getAgeProfile(age) {
  return ageProfiles[age] || ageProfiles["6-8"];
}

function getInputModeByAge(age) {
  return getAgeProfile(age).inputMode || "voice_only";
}

function isVoiceOnlyAge(age) {
  return getInputModeByAge(age) === "voice_only";
}

function inferTaskTitle(environment, focus) {
  const place = normalizeText(environment, "户外角落");
  const observationFocus = normalizeText(focus, "容易被忽略的细节");
  return `${place}里的${observationFocus}`;
}

function buildDefaultDeviceScripts(title, environment, focus, age) {
  const ageLabel = getAgeProfile(age).label;
  const compactFocus = stripTrailingPunctuation(focus);
  const inputMode = getInputModeByAge(age);
  return {
    intro: `你好，今天我们要做一场${ageLabel}适用的慢观察任务，主题是${title}。请先在${environment}里找到一个让你想停下来的小地方，先看十秒，再决定要不要记录。${inputMode === "voice_only" ? "这次不用打字，你只要说出来就可以。" : "这次你可以说出来，也可以用文字补充。"} `,
    observe: `如果你已经找到观察点了，先别急着拍。请看看哪里在变化，或者听听周围有什么声音，再告诉我最吸引你的是哪一个细节。`,
    capture: `现在你可以拍一张照片，或者录一小段声音。保存之前，请先说一句：我想保存它，因为……重点说说这个关于${compactFocus}的发现。${inputMode === "voice_only" ? "今天不需要打字记录。" : "如果你愿意，也可以再打字补一句。"} `,
    closing: `这次户外观察先到这里。回到教室后，把你最想写的那个发现上传回来，我们再一起把它变成一段文字。`
  };
}

function ensureTaskFormDefaults() {
  const now = new Date();
  if (!taskTitleInput.value) {
    taskTitleInput.value = "容易被忽略的小发现";
  }
  if (!taskEnvironmentInput.value) {
    taskEnvironmentInput.value = "校园花坛旁";
  }
  if (!taskAgeSelect.value) {
    taskAgeSelect.value = "6-8";
  }
  if (!taskDateInput.value) {
    taskDateInput.value = formatDateInputValue(now);
  }
  if (!taskTimeInput.value) {
    taskTimeInput.value = formatTimeInputValue(now);
  }
  if (!taskFocusInput.value) {
    taskFocusInput.value = "变化、声音、痕迹或颜色";
  }
  const defaultScripts = buildDefaultDeviceScripts(
    normalizeText(taskTitleInput.value, "容易被忽略的小发现"),
    normalizeText(taskEnvironmentInput.value, "校园花坛旁"),
    normalizeText(taskFocusInput.value, "变化、声音、痕迹或颜色"),
    taskAgeSelect.value || "6-8"
  );
  if (!taskDeviceIntroInput.value) {
    taskDeviceIntroInput.value = defaultScripts.intro;
  }
  if (!taskDeviceObserveInput.value) {
    taskDeviceObserveInput.value = defaultScripts.observe;
  }
  if (!taskDeviceCaptureInput.value) {
    taskDeviceCaptureInput.value = defaultScripts.capture;
  }
  if (!taskDeviceClosingInput.value) {
    taskDeviceClosingInput.value = defaultScripts.closing;
  }
}

function readTaskForm() {
  ensureTaskFormDefaults();
  const environment = normalizeText(taskEnvironmentInput.value, "户外观察点");
  const focus = normalizeText(taskFocusInput.value, "变化、声音、痕迹或颜色");

  return {
    title: normalizeText(taskTitleInput.value, inferTaskTitle(environment, focus)),
    environment,
    age: taskAgeSelect.value || "6-8",
    inputMode: getInputModeByAge(taskAgeSelect.value || "6-8"),
    dateInput: taskDateInput.value || formatDateInputValue(new Date()),
    timeInput: taskTimeInput.value || formatTimeInputValue(new Date()),
    focus,
    note: normalizeText(taskNoteInput.value),
    deviceScripts: {
      intro: normalizeText(taskDeviceIntroInput.value),
      observe: normalizeText(taskDeviceObserveInput.value),
      capture: normalizeText(taskDeviceCaptureInput.value),
      closing: normalizeText(taskDeviceClosingInput.value)
    }
  };
}

function buildTaskPrompts(theme, age, environment, focus, title) {
  const ageLabel = getAgeProfile(age).label;
  const openMission = age === "6-8"
    ? `请你在${environment}里，寻找一个容易被别人忽略、却让你想停下来看一看的小地方。重点留意${focus}。`
    : age === "9-10"
      ? `请你在${environment}里寻找一个容易被忽略的观察点，重点关注${focus}，并试着判断它为什么值得被记录。`
      : `请你在${environment}里寻找一个容易被忽略却很有叙事潜力的观察点，重点追踪${focus}，并思考它如何改变你对场景的理解。`;

  const ageQuestions = buildQuestionVariants(theme, age, age === "6-8" ? "light" : "balanced", title, environment, inferGoal(age), "gentle");
  const sessionId = `session-${slugify(`${title}-${environment}`)}-${Date.now()}`;

  return {
    sessionId,
    ageLabel,
    openMission,
    phases: [
      "Look：先不要拍照，先安静观察十秒，看看有什么正在变化。",
      "Capture：再拍 1 张图，或者留 1 段声音，先抓住最想保存的那个细节。",
      "Explain：说一句“我保存它，因为……”，把原因留给回家后的写作。"
    ],
    questions: [
      `你在${environment}里最先注意到的，是哪一个关于${focus}的线索？`,
      ...ageQuestions
    ].slice(0, 4),
    teacherTips: [
      `适龄版本：${ageLabel}。这一轮尽量让孩子自己说，不急着给标准答案。`,
      "建议每次任务先控制在 1 个观察对象、1 张图片、2 到 4 轮对话。",
      "记录孩子的原话，特别是“像什么”“为什么想保存它”“刚刚没注意到什么”。",
      "回家后把这次 session 导入平台，同一条 session 里的 turn 会自动进入写作流程。"
    ]
  };
}

function buildDevicePromptHints(age, environment, focus) {
  const firstHint = age === "6-8"
    ? "先停十秒"
    : age === "9-10"
      ? "先观察变化"
      : "先判断最值得记的点";
  const secondHint = focus.includes("声音") ? "先闭眼听一听" : "找一个刚才没注意到的细节";
  const thirdHint = environment.includes("花") || environment.includes("树") || environment.includes("草")
    ? "看看风或光有没有让它变化"
    : "看看它和周围东西是什么关系";

  return [
    firstHint,
    secondHint,
    thirdHint,
    `说说为什么想保存这个关于${focus}的发现`
  ];
}

function buildSlowObservationPrompts(environment, focus) {
  const compactFocus = stripTrailingPunctuation(focus);
  return [
    "先不要拍照，先观察十秒。",
    "你听到了几种声音？",
    "有什么东西正在变化？",
    "哪个细节是刚才没有注意到的？",
    `你为什么想保存这个关于${compactFocus}的发现？`
  ];
}

function buildThreeStageTaskJson(openMission, phases, prompts, teacherTips) {
  return {
    look: {
      label: "Look",
      instruction: phases[0],
      prompts: prompts.slice(0, 3)
    },
    capture: {
      label: "Capture",
      instruction: phases[1],
      prompts: ["现在再决定要不要拍照或录音。", "你最想先保存哪一个细节？"]
    },
    explain: {
      label: "Explain",
      instruction: phases[2],
      prompts: ["请说一句“我保存它，因为……”。", "它让我感到……", "我还想知道……"]
    },
    teacherTips,
    openMission
  };
}

function generateTaskBlueprint() {
  const form = readTaskForm();
  const theme = inferTheme(form.focus, form.environment);
  const prompts = buildTaskPrompts(theme, form.age, form.environment, form.focus, form.title);
  const date = form.dateInput.replaceAll("-", ".");
  const slowObservationPrompts = buildSlowObservationPrompts(form.environment, form.focus);
  const devicePromptHints = buildDevicePromptHints(form.age, form.environment, form.focus);
  const threeStageJson = buildThreeStageTaskJson(
    prompts.openMission,
    prompts.phases,
    slowObservationPrompts,
    prompts.teacherTips
  );

  return {
    ...form,
    theme,
    date,
    time: form.timeInput,
    sessionId: prompts.sessionId,
    openMission: prompts.openMission,
    inputMode: form.inputMode,
    phases: prompts.phases,
    questions: prompts.questions,
    slowObservationPrompts,
    threeStageJson,
    deviceContext: {
      sessionId: prompts.sessionId,
      title: form.title,
      environment: form.environment,
      focus: form.focus,
      age: form.age,
      inputMode: form.inputMode,
      openMission: `在${form.environment}找一个容易被忽略的小地方留意${form.focus}`,
      promptHints: devicePromptHints,
      questions: prompts.questions,
      scripts: form.deviceScripts
    },
    teacherTips: prompts.teacherTips,
    printTitle: `${form.title}观察卡`
  };
}

function createTaskSessionFromBlueprint(blueprint) {
  return {
    id: blueprint.sessionId,
    label: blueprint.title,
    age: blueprint.age,
    date: blueprint.date,
    time: blueprint.time,
    place: blueprint.environment,
    weather: "待现场填写",
    syncStatus: "观察任务已创建，等待 LS26 采集并回家导入",
    theme: blueprint.focus,
    childName: "待观察者",
    isTaskSession: true,
    taskBlueprint: blueprint,
    turns: [
      {
        id: `${blueprint.sessionId}-starter`,
        icon: themeProfiles[blueprint.theme]?.icon || "🧭",
        object: blueprint.title,
        recognizedObject: blueprint.focus,
        imageHint: "这是本次活动的任务卡，还没有导入真实图片。",
        deviceReply: blueprint.deviceContext.scripts.intro,
        childReply: "等待孩子开始探索。",
        feeling: "准备开始",
        action: "老师或家长已创建新的观察任务。",
        imagination: "把第一个发现变成回家后能继续写下去的故事线索。",
        sensory: `请重点留意：${blueprint.focus}。`,
        tags: ["新任务", "等待采集", getAgeProfile(blueprint.age).label],
        media: {
          imageUrl: "",
          imageName: "",
          audioUrl: "",
          audioName: ""
        },
        syncPayload: {
          session_id: blueprint.sessionId,
          turn_index: 0,
          source: "task",
          task_title: blueprint.title,
          focus: blueprint.focus,
          open_mission: blueprint.openMission,
          device_scripts: blueprint.deviceContext.scripts,
          timestamp: `${blueprint.dateInput}T${blueprint.time}:00+08:00`,
          import_mode: "task-planner"
        }
      }
    ],
    insights: [
      "这是一条任务脚手架 session，等孩子回家后再把真实采集内容挂进来。",
      "同一条 session 里的多轮图片与对话，回家后会一起进入观察卡和写作生成。",
      "如果你继续接设备实时控制，这个 session_id 就是网页和 LS26 对齐的关键。"
    ]
  };
}

function parseImportJson(rawText) {
  const text = normalizeText(rawText);
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error("JSON 格式不正确，请检查逗号、引号和花括号。");
  }
}

function populateImportForm(payload = {}) {
  const firstTurn = Array.isArray(payload.turns) && payload.turns.length > 0 ? payload.turns[0] : payload;
  importSessionLabel.value = normalizeText(payload.sessionLabel || payload.label, importSessionLabel.value);
  importAgeSelect.value = normalizeText(payload.age, importAgeSelect.value || "6-8");
  importPlaceInput.value = normalizeText(payload.place, importPlaceInput.value);
  importObjectInput.value = normalizeText(
    firstTurn.object || firstTurn.recognizedObject || firstTurn.recognized_object,
    importObjectInput.value
  );
  importChildReplyInput.value = normalizeText(
    firstTurn.childReply || firstTurn.child_asr_text || firstTurn.explanation || firstTurn.explain,
    importChildReplyInput.value
  );
  importSensoryInput.value = normalizeText(firstTurn.sensory, importSensoryInput.value);
  importImaginationInput.value = normalizeText(firstTurn.imagination, importImaginationInput.value);
}

function readImportOverrides() {
  return {
    sessionLabel: normalizeText(importSessionLabel.value),
    age: importAgeSelect.value || "6-8",
    place: normalizeText(importPlaceInput.value),
    object: normalizeText(importObjectInput.value),
    childReply: normalizeText(importChildReplyInput.value),
    sensory: normalizeText(importSensoryInput.value),
    imagination: normalizeText(importImaginationInput.value)
  };
}

function getImportMediaDraft() {
  return {
    imageUrl: state.importDraft.imageUrl,
    imageName: state.importDraft.imageName,
    audioUrl: state.importDraft.audioUrl,
    audioName: state.importDraft.audioName
  };
}

function buildImportedSession(payload = {}, targetSession = null) {
  const overrides = readImportOverrides();
  const now = new Date();
  const baseTimestamp = payload.timestamp || payload.createdAt || payload.created_at || now.toISOString();
  const parsedDate = Number.isNaN(new Date(baseTimestamp).getTime()) ? now : new Date(baseTimestamp);
  const sessionLabel = normalizeText(payload.sessionLabel || payload.label || targetSession?.label || overrides.sessionLabel, overrides.object || "LS26 导入会话");
  const age = normalizeText(payload.age || targetSession?.age || overrides.age, "6-8");
  const place = normalizeText(payload.place || targetSession?.place || overrides.place, "户外观察点");
  const weather = normalizeText(payload.weather || targetSession?.weather, "未记录");
  const childName = normalizeText(payload.childName || payload.child_name || targetSession?.childName, "真实观察者");
  const mediaDraft = getImportMediaDraft();
  const rawTurns = Array.isArray(payload.turns) && payload.turns.length > 0 ? payload.turns : [payload];
  const sessionId = targetSession?.id || `import-${slugify(sessionLabel)}-${Date.now()}`;
  const sessionDate = payload.date || targetSession?.date || formatDateDisplay(parsedDate);
  const sessionTime = payload.time || targetSession?.time || formatTimeDisplay(parsedDate);

  const turns = rawTurns.map((rawTurn, index) => {
    const object = normalizeText(
      rawTurn.object || rawTurn.recognizedObject || rawTurn.recognized_object || (index === 0 ? overrides.object : ""),
      `第 ${index + 1} 个观察对象`
    );
    const childReply = normalizeText(
      rawTurn.childReply || rawTurn.child_asr_text || rawTurn.explanation || rawTurn.explain || (index === 0 ? overrides.childReply : ""),
      "我觉得它很特别。"
    );
    const sensory = normalizeText(
      rawTurn.sensory || (index === 0 ? overrides.sensory : ""),
      "我靠近看时发现它有更多细节。"
    );
    const imagination = normalizeText(
      rawTurn.imagination || (index === 0 ? overrides.imagination : ""),
      childReply.includes("像") ? childReply : "它像一个值得继续追下去的线索。"
    );
    const feeling = normalizeText(rawTurn.feeling, "好奇");
    const action = normalizeText(rawTurn.action, `我在${place}停下来，又靠近看了一会儿。`);
    const timestamp = rawTurn.timestamp || rawTurn.createdAt || rawTurn.created_at || baseTimestamp;
    const theme = inferTheme(object, place);
    const promptQuestion = buildQuestionVariants(theme, age, "light", object, place, inferGoal(age), "gentle")[0];
    const deviceReply = normalizeText(
      rawTurn.deviceReply || rawTurn.device_reply,
      `我看到了：${stripTrailingPunctuation(object)}。观察问题：${stripTrailingPunctuation(promptQuestion)}`
    );
    const source = normalizeText(rawTurn.source || rawTurn.mediaType, index === 0 ? "image" : "speech");
    const imageUrl = normalizeText(rawTurn.imageUrl || rawTurn.image_url || (index === 0 ? mediaDraft.imageUrl : ""));
    const audioUrl = normalizeText(rawTurn.audioUrl || rawTurn.audio_url || (index === 0 ? mediaDraft.audioUrl : ""));
    const tags = Array.from(new Set([
      ...asTextList(rawTurn.tags),
      ...(index === 0 ? asTextList(payload.tags) : []),
      themeProfiles[theme].icon === "🧭" ? "真实导入" : "LS26 导入"
    ])).slice(0, 5);

    return {
      id: `${sessionId}-turn-${index + 1}`,
      icon: rawTurn.icon || themeProfiles[theme].icon,
      object,
      recognizedObject: normalizeText(rawTurn.recognizedObject || rawTurn.recognized_object, object),
      imageHint: normalizeText(rawTurn.imageHint, buildImageHint(theme, object, place)),
      deviceReply,
      childReply,
      feeling,
      action,
      imagination,
      sensory,
      tags,
      media: {
        imageUrl,
        imageName: normalizeText(rawTurn.imageName || (index === 0 ? mediaDraft.imageName : "")),
        audioUrl,
        audioName: normalizeText(rawTurn.audioName || (index === 0 ? mediaDraft.audioName : ""))
      },
      syncPayload: {
        session_id: sessionId,
        turn_index: index + 1,
        source,
        image_url: imageUrl || "未附带图片",
        audio_url: audioUrl || "未附带音频",
        recognized_object: normalizeText(rawTurn.recognizedObject || rawTurn.recognized_object, object),
        device_reply: deviceReply,
        child_asr_text: childReply,
        timestamp,
        import_mode: "local-mvp"
      }
    };
  });

  return {
    id: sessionId,
    label: sessionLabel,
    age,
    date: sessionDate,
    time: sessionTime,
    place,
    weather,
    syncStatus: normalizeText(payload.syncStatus, "已从 LS26 本地导入到电脑网页 MVP"),
    theme: "真实导入",
    childName,
    isImported: true,
    isTaskSession: Boolean(targetSession?.isTaskSession),
    taskBlueprint: targetSession?.taskBlueprint || null,
    turns,
    insights: [
      "这是一条真实导入的观察记录，平台已经把它接到了现有写作链路。",
      "下一步最适合接自动同步或 DeepSeek 改写，而不是重做页面结构。",
      "如果继续采集更多 turn，这页就能自然升级成完整的观察时间线。"
    ]
  };
}

function serializeCustomSessions() {
  return sessions
    .filter((session) => session.isImported || session.isTaskSession)
    .map((session) => ({
      ...session,
      turns: session.turns.map((turn) => ({
        ...turn,
        media: {
          imageName: turn.media?.imageName || "",
          audioName: turn.media?.audioName || ""
        }
      }))
    }));
}

function saveImportedSessions() {
  localStorage.setItem(importedSessionsStorageKey, JSON.stringify(serializeCustomSessions()));
}

function loadImportedSessions() {
  const raw = localStorage.getItem(importedSessionsStorageKey);
  if (!raw) {
    return;
  }

  try {
    const imported = JSON.parse(raw);
    if (!Array.isArray(imported)) {
      return;
    }

    imported.reverse().forEach((session) => {
      sessions.unshift(session);
    });
  } catch (error) {
    localStorage.removeItem(importedSessionsStorageKey);
  }
}

function clearImportedSessions() {
  for (let index = sessions.length - 1; index >= 0; index -= 1) {
    if (sessions[index].isImported || sessions[index].isTaskSession) {
      sessions.splice(index, 1);
    }
  }

  localStorage.removeItem(importedSessionsStorageKey);
  state.importDraft = {
    imageUrl: "",
    imageName: "",
    audioUrl: "",
    audioName: "",
    lastImportedLabel: ""
  };
  importJsonText.value = "";
  importJsonFile.value = "";
  importImageFile.value = "";
  importAudioFile.value = "";

  if (!sessions.find((session) => session.id === state.sessionId)) {
    state.sessionId = sessions[0].id;
    state.turnId = sessions[0].turns[0].id;
    state.age = sessions[0].age;
    state.selectedQuestionIndex = 0;
    loadAiInputFromTurn();
    state.aiBundle = generateAiBundle();
    state.canvasBlocks = buildRecommendedBlocks(state.aiBundle.turn, getActiveSession());
  }
}

function buildKnowledge(theme, age, lens, objectText, placeText) {
  const profile = themeProfiles[theme];
  let sentence = pickVariant(profile.knowledge[age], `${objectText}-${placeText}-${lens}`);

  if (lens === "science") {
    sentence += age === "6-8" ?
      " 这能帮助我们像小科学家一样去发现它为什么会这样。" :
      " 这类细节很适合写成“我通过什么线索做出判断”。";
  }
  if (lens === "narrative") {
    sentence += age === "11-12" ?
      " 它和周围关系越清楚，叙事张力就越强。" :
      " 位置和变化会让它更像一个故事场景。";
  }
  if (lens === "sensory") {
    sentence += " 感官细节会让读者更像和孩子站在同一个地方。";
  }
  if (lens === "imagination") {
    sentence += " 想象不是离开观察，而是让观察继续长出新的意思。";
  }

  return stripTrailingPunctuation(sentence);
}

function buildQuestionVariants(theme, age, depth, objectText, placeText, goal, tone) {
  const profile = themeProfiles[theme];
  const depthOrderMap = {
    light: ["light", "balanced", "deep"],
    balanced: ["balanced", "light", "deep"],
    deep: ["deep", "balanced", "light"]
  };
  const candidatePool = depthOrderMap[depth]
    .flatMap((level) => profile.question[level] || [])
    .map((question) => stripTrailingPunctuation(question));

  if (theme === "playground") {
    candidatePool.unshift(
      age === "6-8"
        ? "你觉得它是在安静地休息，还是像马上又要带谁出发"
        : "如果把它当成场景里的行动线索，你觉得它更像停顿、等待，还是下一次出发前的安静时刻"
    );
  }

  if (goal === "science" || tone === "curious") {
    candidatePool.unshift(
      age === "6-8"
        ? "如果你再看近一点，你最想先确认它的哪一个线索"
        : "如果继续观察下去，你最想先验证哪一个细节，看看它能支持什么判断"
    );
  }

  if (goal === "science") {
    candidatePool.push(
      age === "6-8"
        ? "如果你像小科学家一样再看一眼，你最想先确认它的哪一个小线索"
        : "如果把这次观察写成小观察记录，你最想先验证哪一个细节，它能支持什么判断"
    );
  }

  if (goal === "story" || goal === "narrative") {
    candidatePool.push(
      age === "6-8"
        ? "如果它真的会去旅行，你觉得它下一站会去哪里"
        : "如果这就是故事开头，你更愿意让它接下来遇见什么，或发生什么变化"
    );
  }

  if (tone === "playful") {
    candidatePool.push("如果把它放进你今天的探险故事里，它最适合出现在第几幕");
  }

  if (tone === "mature" && age !== "6-8") {
    candidatePool.push("如果你要把它写成一条观察线索，你觉得最值得保留的判断依据是什么");
  }

  const ordered = [];
  const used = new Set();

  for (let index = 0; index < candidatePool.length; index += 1) {
    const candidate = pickVariant(candidatePool, `${objectText}-${placeText}-${goal}-${tone}-${depth}`, index);
    if (candidate && !used.has(candidate)) {
      used.add(candidate);
      ordered.push(candidate);
    }
  }

  while (ordered.length < 3) {
    const fallback = age === "6-8"
      ? "你还想靠近看它的哪一个细节"
      : "如果继续观察下去，你觉得哪一个细节最可能改变你的判断";
    if (!used.has(fallback)) {
      used.add(fallback);
      ordered.push(fallback);
    } else {
      break;
    }
  }

  return ordered.slice(0, 3).map((question) => {
    let adjusted = question;

    if (tone === "mature" && age !== "6-8") {
      adjusted = adjusted.replaceAll("最想", "更愿意").replaceAll("更像", "更接近");
    }

    return `${stripTrailingPunctuation(adjusted)}？`;
  });
}

function buildSensory(theme, objectText, placeText, lens, sourceTurn, objectChanged) {
  if (objectChanged) {
    return normalizeText(pickVariant(themeProfiles[theme].sensory, `${objectText}-${placeText}-${lens}`));
  }

  if (lens === "sensory" && sourceTurn.sensory) {
    return normalizeText(`${sourceTurn.sensory}，再看时还能注意到${pickVariant(themeProfiles[theme].sensory, objectText, 1)}`);
  }

  if (sourceTurn.sensory) {
    return normalizeText(sourceTurn.sensory);
  }

  return normalizeText(pickVariant(themeProfiles[theme].sensory, `${objectText}-${placeText}`));
}

function buildAction(placeText, sourceTurn, age) {
  if (sourceTurn.action) {
    return normalizeText(sourceTurn.action);
  }

  if (age === "6-8") {
    return `我在${placeText}又靠近了一点`;
  }

  if (age === "9-10") {
    return `我在${placeText}停下来，又换了一个角度去看`;
  }

  return `我在${placeText}停下来观察，并试着判断它和周围空间的关系`;
}

function buildImagination(theme, objectText, childReply, goal, sourceTurn, objectChanged) {
  if (!objectChanged && sourceTurn.imagination) {
    return normalizeText(sourceTurn.imagination);
  }

  if (childReply.includes("像")) {
    const cleanedReply = stripTrailingPunctuation(childReply).replace(/^我觉得/, "").replace(/^我想/, "");
    return normalizeText(`它让我想到${cleanedReply}`);
  }

  if (sourceTurn.imagination) {
    return normalizeText(sourceTurn.imagination);
  }

  const seed = pickVariant(themeProfiles[theme].imagination, `${objectText}-${childReply}-${goal}`);
  return normalizeText(seed);
}

function buildFeeling(sourceTurn, tone) {
  if (sourceTurn.feeling) {
    return sourceTurn.feeling;
  }

  if (tone === "playful") {
    return "兴奋";
  }
  if (tone === "mature") {
    return "专注";
  }
  if (tone === "curious") {
    return "投入";
  }
  return "好奇";
}

function buildImageHint(theme, objectText, placeText) {
  const map = {
    plant: `${objectText}落在${placeText}，边缘和颜色都很明显`,
    sky: `${objectText}在天空里有很清楚的光线变化`,
    playground: `${objectText}停在${placeText}，位置和方向都像在说明刚才发生过什么`,
    city: `${objectText}和周围空间形成了很强的节奏感`,
    generic: `${objectText}在${placeText}里显得很值得多看一眼`
  };

  return map[theme] || map.generic;
}

function buildTags(theme, lens, goal, sourceTurn) {
  const tags = new Set(sourceTurn.tags || []);

  tags.add(lensLabels[lens]);
  tags.add(goalLabels[goal]);

  if (theme === "plant") {
    tags.add("自然观察");
  } else if (theme === "sky") {
    tags.add("气氛变化");
  } else if (theme === "playground") {
    tags.add("行动线索");
  } else if (theme === "city") {
    tags.add("空间节奏");
  } else {
    tags.add("故事线索");
  }

  return Array.from(tags).slice(0, 5);
}

function composeDeviceReply(objectText, knowledge, question) {
  return `我看到了：${stripTrailingPunctuation(objectText)}。小知识：${stripTrailingPunctuation(knowledge)}。观察问题：${stripTrailingPunctuation(question)}？`;
}

function buildChildThought(childReply) {
  const clean = stripTrailingPunctuation(childReply);

  if (!clean) {
    return "我觉得它很特别";
  }
  if (clean.startsWith("我觉得") || clean.startsWith("我想")) {
    return clean;
  }
  if (clean.startsWith("像")) {
    return `我觉得它${clean}`;
  }

  return `我觉得${clean}`;
}

function buildStoryTitle(objectText, goal, age) {
  if (goal === "science") {
    return `关于${objectText}的小观察`;
  }
  if (goal === "observation") {
    return `${objectText}观察记录`;
  }
  if (age === "6-8") {
    return `${objectText}的小故事`;
  }
  return `${objectText}带来的故事开头`;
}

function buildRecommendedBlocks(turn, session) {
  return [
    { id: "time", label: `${session.date} ${session.time}`, type: "时间" },
    { id: "place", label: `我在${session.place}`, type: "地点" },
    { id: "see", label: `我看到了${turn.object}`, type: "发现" },
    { id: "sense", label: turn.sensory, type: "细节" },
    { id: "feel", label: `我觉得${turn.feeling}`, type: "感受" },
    { id: "imagine", label: turn.imagination, type: "想象" }
  ];
}

function buildLibraryBlocks(bundle, session) {
  return [
    ...buildRecommendedBlocks(bundle.turn, session),
    { id: "device", label: `设备提醒我：${bundle.questionVariants[bundle.activeQuestionIndex]}`, type: "追问" },
    { id: "child", label: `我回答：${bundle.turn.childReply}`, type: "回应" },
    { id: "action", label: bundle.turn.action, type: "动作" },
    { id: "change", label: bundle.suggestedChange, type: "变化" },
    { id: "ending", label: bundle.suggestedEnding, type: "结尾" }
  ];
}

function buildOutline(bundle, session) {
  const turn = bundle.turn;

  if (state.age === "6-8") {
    return [
      `开头：我在${session.place}发现了${turn.object}。`,
      `经过：我${turn.action}，又发现${turn.sensory}。`,
      `想象：我觉得${turn.imagination}。`,
      `结尾：这次观察让我觉得${turn.feeling}，我还想继续看看。`
    ];
  }

  if (state.age === "9-10") {
    return [
      `开头：交代时间、地点和最先注意到的对象。`,
      `经过：把“${turn.childReply}”和“${turn.sensory}”连接起来。`,
      `变化：补上${bundle.suggestedChange}，让故事有推进。`,
      `结尾：用“${turn.imagination}”或自己的感受收住。`
    ];
  }

  return [
    `开头：把${turn.object}写成一个正在影响场景判断的线索。`,
    `经过：通过${turn.sensory}展现空间、节奏和观察者的注意力移动。`,
    `转折：写出${bundle.suggestedChange}带来的理解变化。`,
    `结尾：回到观察者自己，用${turn.imagination}或新的判断收束。`
  ];
}

function buildDraft(bundle, session) {
  const turn = bundle.turn;
  const childThought = buildChildThought(turn.childReply);

  if (state.age === "6-8") {
    return `${session.date}，我在${session.place}看到了${turn.object}。它${turn.sensory}。${stripTrailingPunctuation(turn.action)}，然后${childThought}。我想，${stripTrailingPunctuation(turn.imagination)}。这次观察让我觉得${turn.feeling}，我还想再看看它会不会真的继续发生变化。`;
  }

  if (state.age === "9-10") {
    return `${session.date}，我在${session.place}进行观察时，注意到了${turn.object}。一开始，我只是觉得它很特别，可是在设备提醒我继续观察之后，我发现它${turn.sensory}。于是${stripTrailingPunctuation(turn.action)}，又想到${stripTrailingPunctuation(turn.childReply)}。慢慢地，这次观察不再只是“看见一个东西”，而像是在追一条故事线，因为${stripTrailingPunctuation(turn.imagination)}。最后，我最想记住的不是答案，而是${stripTrailingPunctuation(bundle.suggestedEnding)}。`;
  }

  return `${session.date}傍晚，我在${session.place}注意到${turn.object}。它并不是一个孤立的画面，而是和周围空间一起构成了一个正在变化的现场。${turn.sensory}，让我意识到这处景象真正值得写下来的，不只是它本身，而是它怎样让场景拥有节奏和方向。于是${stripTrailingPunctuation(turn.action)}，并产生了一个更清楚的判断：${stripTrailingPunctuation(turn.childReply)}。如果把这次观察写成叙事开头，我会保留${stripTrailingPunctuation(turn.imagination)}这一层想象，因为它让观察从记录，慢慢长成了故事。`;
}

function buildCoach(bundle) {
  const ageProfile = getAgeProfile(state.age);
  return [
    modeText[state.mode].coachLabel,
    ...ageProfile.coach,
    bundle.lens === "science"
      ? "这一版更适合强调“我通过什么线索做出判断”。"
      : "这一版适合保留孩子原话，让孩子的观察仍然是故事中心。"
  ];
}

function buildInsights(bundle, sourceSession) {
  const dynamic = [];
  dynamic.push(`这次 AI 生成更偏向“${lensLabels[bundle.lens]} + ${goalLabels[bundle.goal]}”的表达路径。`);
  dynamic.push(`系统把设备端追问延展成了 ${bundle.questionVariants.length} 个可选版本，方便现场演示不同提问深度。`);
  dynamic.push(`当前页面保留 LS26 原始同步字段，同时展示平台如何基于同一条记录生成更完整的写作脚手架。`);
  return [...dynamic, ...sourceSession.insights].slice(0, 4);
}

function resetApiWriting(message = "当前显示本地模板生成结果。接入 API 后可切换为真实模型生成。") {
  state.apiWriting = null;
  state.apiStatusText = message;
}

async function fetchDeviceBridgeStatus() {
  try {
    const response = await fetch("/api/device/status");
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(result.error || "无法获取设备状态。");
    }

    state.deviceBridge = {
      connected: Boolean(result.connected),
      transportId: normalizeText(result.transportId),
      productId: normalizeText(result.productId),
      productMatch: Boolean(result.productMatch),
      interactionMode: normalizeText(result.interactionMode, "unknown"),
      statusText: normalizeText(result.statusText, "设备状态未知。"),
      syncedTask: result.syncedTask || null
    };
  } catch (error) {
    state.deviceBridge = {
      connected: false,
      transportId: "",
      productId: "",
      productMatch: false,
      interactionMode: "unknown",
      statusText: error.message || "无法连接本地设备桥。",
      syncedTask: null
    };
  }
}

async function startDeviceSessionFromTask() {
  const blueprint = state.taskBlueprint || generateTaskBlueprint();
  state.taskBlueprint = blueprint;

  const response = await fetch("/api/device/start-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      sessionId: blueprint.sessionId,
      title: blueprint.title,
      environment: blueprint.environment,
      focus: blueprint.focus,
      openMission: blueprint.openMission,
      questions: blueprint.questions,
      promptHints: blueprint.deviceContext.promptHints,
      age: blueprint.age,
      deviceContext: blueprint.deviceContext
    })
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error || "设备启动失败。");
  }

  await fetchDeviceBridgeStatus();
  taskStatusText.textContent = result.message || "LS26 已进入交互模式，可以开始观察。";
}

async function stopDeviceSession() {
  const response = await fetch("/api/device/stop-session", {
    method: "POST"
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error || "设备停止失败。");
  }

  await fetchDeviceBridgeStatus();
  taskStatusText.textContent = result.message || "LS26 已退出交互模式。";
  return result;
}

function importPayloadIntoApp(payload, targetSession = null) {
  const session = buildImportedSession(payload, targetSession);
  const existingIndex = sessions.findIndex((item) => item.id === session.id);
  if (existingIndex >= 0) {
    sessions.splice(existingIndex, 1);
  }

  sessions.unshift(session);
  state.importDraft.lastImportedLabel = session.label;
  saveImportedSessions();
  activateSession(session);
  return session;
}

function hasRealCapturedDialogue(payload = {}) {
  if (payload.meta?.hasCapturedDialogue) {
    return true;
  }

  const firstTurn = Array.isArray(payload.turns) && payload.turns.length > 0 ? payload.turns[0] : payload;
  const childReply = normalizeText(
    firstTurn.childReply || firstTurn.child_asr_text || firstTurn.explanation || firstTurn.explain,
    ""
  );

  return Boolean(childReply) && !childReply.includes("待补充") && !childReply.includes("当前版本已导回任务上下文");
}

async function exportStoppedDeviceSessionIntoWriting() {
  const stopResult = await stopDeviceSession();
  const exportedPayload = stopResult.exportedSession;

  if (!exportedPayload) {
    renderApp();
    return;
  }

  const activeSession = getActiveSession();
  const targetSession = activeSession?.isTaskSession && !activeSession?.isImported ? activeSession : null;
  const session = importPayloadIntoApp(exportedPayload, targetSession);

  if (hasRealCapturedDialogue(exportedPayload)) {
    try {
      await generateWritingWithApi();
    } catch (error) {
      resetApiWriting(error.message || "设备数据已导回，但 DeepSeek 生成失败。");
    }
  } else {
    resetApiWriting("已把 LS26 的任务上下文导回网页，并切到写作准备状态。等设备端继续写回真实原话后，这里就能自动生成更完整的独立写作。");
  }

  renderApp();
  document.getElementById("studio")?.scrollIntoView({ behavior: "smooth", block: "start" });
  taskStatusText.textContent = hasRealCapturedDialogue(exportedPayload)
    ? `已从 LS26 导回 ${session.label}，并自动进入写作生成。`
    : `已从 LS26 导回 ${session.label}。当前先进入写作准备态，下一步接上真实设备原话后就能自动生成完整写作。`;
}

function buildApiWritingPayload() {
  const session = getActiveSession();
  const turn = getEffectiveTurn();

  return {
    mode: state.mode,
    age: state.age,
    session: {
      id: session.id,
      label: session.label,
      place: session.place,
      date: session.date,
      time: session.time,
      weather: session.weather,
      syncStatus: session.syncStatus
    },
    turn: {
      object: turn.object,
      childReply: turn.childReply,
      sensory: turn.sensory,
      imagination: turn.imagination,
      feeling: turn.feeling,
      action: turn.action,
      deviceReply: turn.deviceReply,
      imageHint: turn.imageHint,
      tags: turn.tags || []
    },
    guidance: {
      lens: state.aiBundle.lens,
      goal: state.aiBundle.goal,
      tone: state.aiBundle.tone,
      depth: state.aiBundle.depth,
      targetWordCount: state.targetWordCount,
      outline: state.aiBundle.outline,
      coach: state.aiBundle.coach,
      question: state.aiBundle.questionVariants[state.aiBundle.activeQuestionIndex]
    }
  };
}

function normalizeApiWritingResult(payload) {
  const draft = normalizeText(payload.draft, state.aiBundle.draft);
  return {
    title: normalizeText(payload.title, `${getEffectiveTurn().object}观察写作`),
    outline: Array.isArray(payload.outline)
      ? payload.outline.map((item) => normalizeText(item)).filter(Boolean)
      : [],
    draft,
    coachTips: Array.isArray(payload.coachTips)
      ? payload.coachTips.map((item) => normalizeText(item)).filter(Boolean)
      : [],
    actualWordCount: draft.replace(/\s+/g, "").length
  };
}

async function generateWritingWithApi() {
  state.apiStatusText = `正在请求 DeepSeek 生成约 ${state.targetWordCount} 字作文，请稍等几秒……`;
  renderApp();

  const response = await fetch("/api/generate-writing", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(buildApiWritingPayload())
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.error || "DeepSeek 接口请求失败。");
  }

  state.apiWriting = normalizeApiWritingResult(result);
  state.apiStatusText = `当前显示 DeepSeek 生成结果，模型：${result.model || "deepseek-v4-flash"}，目标 ${state.targetWordCount} 字。`;
}

function countDraftCharacters(text) {
  return normalizeText(text).replace(/\s+/g, "").length;
}

async function copyCurrentDraft() {
  const title = state.apiWriting?.title || `${getEffectiveTurn().object}观察写作`;
  const draft = state.apiWriting?.draft || state.aiBundle.draft;
  const content = `${title}\n\n${draft}`;
  await navigator.clipboard.writeText(content);
  state.apiStatusText = "已把当前作文复制到剪贴板。";
  renderApp();
}

function downloadCurrentDraft() {
  const title = state.apiWriting?.title || `${getEffectiveTurn().object}观察写作`;
  const draft = state.apiWriting?.draft || state.aiBundle.draft;
  const text = `${title}\n\n${draft}\n`;
  const filename = `${slugify(title)}-${state.targetWordCount}zi.txt`;
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
  state.apiStatusText = `已下载 ${filename}。`;
  renderApp();
}

function generateAiBundle() {
  const session = getActiveSession();
  const sourceTurn = getSourceTurn();
  const input = state.aiInput;
  const objectText = normalizeText(input.object, sourceTurn.object);
  const placeText = normalizeText(input.place, session.place);
  const childReply = normalizeText(input.childReply, sourceTurn.childReply);
  const lens = input.lens;
  const goal = input.goal;
  const tone = input.tone;
  const depth = input.depth;
  const theme = inferTheme(objectText, placeText);
  const age = state.age;
  const objectChanged = hasObservationChanged(sourceTurn.object, objectText);
  const knowledge = buildKnowledge(theme, age, lens, objectText, placeText);
  const questionVariants = buildQuestionVariants(theme, age, depth, objectText, placeText, goal, tone);
  const activeQuestionIndex = Math.min(state.selectedQuestionIndex, questionVariants.length - 1);
  const sensory = buildSensory(theme, objectText, placeText, lens, sourceTurn, objectChanged);
  const action = buildAction(placeText, sourceTurn, age);
  const imagination = buildImagination(theme, objectText, childReply, goal, sourceTurn, objectChanged);
  const feeling = buildFeeling(sourceTurn, tone);
  const imageHint = buildImageHint(theme, objectText, placeText);
  const tags = buildTags(theme, lens, goal, sourceTurn);
  const suggestedChange = age === "6-8"
    ? "风一来，它的样子好像又变了一点"
    : age === "9-10"
      ? "场景里出现一个变化，比如光线、风或位置关系突然更明显"
      : "观察者因为一个新的细节而改变了对场景的判断";
  const suggestedEnding = age === "6-8"
    ? "我想下次还想看看它"
    : age === "9-10"
      ? "我开始明白这次观察真正让我记住的是什么"
      : "我意识到一个场景真正有力量的，是它怎样改变了我的理解";

  const turn = {
    ...sourceTurn,
    object: objectText,
    recognizedObject: objectText,
    imageHint,
    childReply,
    feeling,
    action,
    imagination,
    sensory,
    tags
  };

  const bundle = {
    theme,
    lens,
    goal,
    tone,
    depth,
    knowledge,
    questionVariants,
    activeQuestionIndex,
    strategy: [
      `基于 ${session.label} 的 LS26 原始同步记录`,
      `年龄层：${getAgeProfile(age).label}`,
      `生成侧重点：${lensLabels[lens]}`,
      `写作目标：${goalLabels[goal]}`,
      `表达语气：${toneLabels[tone]}`,
      `问题深度：${depthLabels[depth]}`
    ],
    suggestedChange,
    suggestedEnding,
    turn
  };

  bundle.turn.deviceReply = composeDeviceReply(objectText, knowledge, questionVariants[activeQuestionIndex]);
  bundle.blocks = buildRecommendedBlocks(bundle.turn, session);
  bundle.outline = buildOutline(bundle, session);
  bundle.draft = buildDraft(bundle, session);
  bundle.coach = buildCoach(bundle);
  bundle.insights = buildInsights(bundle, session);
  bundle.summary = [
    {
      title: "设备端追问",
      text: "根据你现在的调参，设备会换成更合适的观察问题，而不是死用原始文案。"
    },
    {
      title: "平台端整理",
      text: "观察卡、故事积木、提纲和草稿会同步一起重写，适合现场演示“智能生成”。"
    },
    {
      title: "保留原始来源",
      text: "LS26 原始同步字段仍然保留在右侧，方便你说明这不是凭空生成，而是基于真实户外会话。"
    }
  ];

  return bundle;
}

function getEffectiveTurn() {
  return state.aiBundle ? state.aiBundle.turn : getSourceTurn();
}

function getObservationMediaMarkup(turn) {
  if (turn.media?.imageUrl) {
    return `<img src="${escapeHtml(turn.media.imageUrl)}" alt="${escapeHtml(turn.object)}">`;
  }

  return escapeHtml(turn.icon || themeProfiles[state.aiBundle.theme].icon);
}

function renderTaskPlanner() {
  ensureTaskFormDefaults();
  const blueprint = state.taskBlueprint || generateTaskBlueprint();
  state.taskBlueprint = blueprint;

  taskTitleInput.value = blueprint.title;
  taskEnvironmentInput.value = blueprint.environment;
  taskAgeSelect.value = blueprint.age;
  taskDateInput.value = blueprint.dateInput;
  taskTimeInput.value = blueprint.time;
  taskFocusInput.value = blueprint.focus;
  taskNoteInput.value = blueprint.note;
  taskDeviceIntroInput.value = blueprint.deviceContext.scripts.intro;
  taskDeviceObserveInput.value = blueprint.deviceContext.scripts.observe;
  taskDeviceCaptureInput.value = blueprint.deviceContext.scripts.capture;
  taskDeviceClosingInput.value = blueprint.deviceContext.scripts.closing;

  const hasTaskSession = sessions.some((session) => session.id === blueprint.sessionId);
  taskStatusText.textContent = hasTaskSession
    ? `任务卡已生成，并且 ${blueprint.sessionId} 已经是当前可用的观察 session。`
    : "先填写任务信息，我会自动生成一张可打印的观察卡和一个新的 session 草稿。";

  taskSessionSummary.innerHTML = "";
  [
    { title: "Session ID", text: blueprint.sessionId },
    { title: "任务时间", text: `${blueprint.date} ${blueprint.time}` },
    { title: "观察环境", text: blueprint.environment },
    { title: "年龄层", text: getAgeProfile(blueprint.age).label },
    { title: "输入方式", text: blueprint.inputMode === "voice_only" ? "语音 / 拍照 / 录音，不要求打字" : "可语音，也可保留文字输入" }
  ].forEach((item) => {
    const card = document.createElement("article");
    card.className = "task-summary-item";
    card.innerHTML = `<strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.text)}</p>`;
    taskSessionSummary.appendChild(card);
  });

  deviceBridgeSummary.innerHTML = "";
  [
    { title: "连接状态", text: state.deviceBridge.connected ? "LS26 已连接到本机" : "LS26 未连接到本机" },
    { title: "产品匹配", text: state.deviceBridge.productMatch ? "当前设备 PID 与 AI_Edu_Box 一致" : "设备已连接，但 PID 还没对上或未读取成功" },
    { title: "交互模式", text: state.deviceBridge.interactionMode === "started" ? "已进入交互模式" : state.deviceBridge.interactionMode === "stopped" ? "已退出交互模式" : "未知" },
    { title: "设备提示", text: state.deviceBridge.statusText },
    {
      title: "已同步任务",
      text: state.deviceBridge.syncedTask
        ? `${state.deviceBridge.syncedTask.title || "未命名任务"} ｜ ${state.deviceBridge.syncedTask.sessionId || "无 session_id"}`
        : "还没有把当前观察任务写入 LS26"
    }
  ].forEach((item) => {
    const card = document.createElement("article");
    card.className = "task-summary-item";
    card.innerHTML = `<strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.text)}</p>`;
    deviceBridgeSummary.appendChild(card);
  });

  taskPromptList.innerHTML = "";
  [
    { title: "开放任务", text: blueprint.openMission },
    { title: "观察重点", text: `请重点观察：${blueprint.focus}` },
    { title: "慢观察提示", text: blueprint.slowObservationPrompts.join(" · ") },
    { title: "三段式任务", text: "Look → 先看和听；Capture → 再拍照或录音；Explain → 说出为什么保留。" },
    { title: "输入规则", text: blueprint.inputMode === "voice_only" ? "当前年龄段默认不打字，只需要说出来、拍下来或录下来。" : "当前年龄段保留文字输入，也可以继续语音采集。" },
    { title: "补充说明", text: blueprint.note || "没有额外说明时，就尽量让孩子先说、先看、先停一停。" }
  ].forEach((item) => {
    const card = document.createElement("article");
    card.className = "task-prompt-item";
    card.innerHTML = `<strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.text)}</p>`;
    taskPromptList.appendChild(card);
  });

  taskCardTitle.textContent = blueprint.printTitle;
  taskCardMeta.innerHTML = `
    <p>Session：${escapeHtml(blueprint.sessionId)}</p>
    <p>${escapeHtml(blueprint.date)} · ${escapeHtml(blueprint.time)} · ${escapeHtml(getAgeProfile(blueprint.age).label)}</p>
    <p>${escapeHtml(blueprint.environment)}</p>
  `;
  taskMissionText.textContent = blueprint.openMission;
  taskPhaseList.innerHTML = `<ol class="task-list">${blueprint.phases.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>`;
  taskQuestionList.innerHTML = `<ol class="task-list">${blueprint.questions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>`;
  taskTeacherTips.innerHTML = `<ul class="task-tip-list">${blueprint.teacherTips.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  taskDeviceScripts.innerHTML = `
    <ul class="task-tip-list">
      <li><strong>开场：</strong>${escapeHtml(blueprint.deviceContext.scripts.intro)}</li>
      <li><strong>观察中：</strong>${escapeHtml(blueprint.deviceContext.scripts.observe)}</li>
      <li><strong>采集后：</strong>${escapeHtml(blueprint.deviceContext.scripts.capture)}</li>
      <li><strong>结束前：</strong>${escapeHtml(blueprint.deviceContext.scripts.closing)}</li>
    </ul>
  `;
}

function renderImportPanel() {
  const importVoiceOnly = isVoiceOnlyAge(importAgeSelect.value || state.taskBlueprint?.age || "6-8");
  const importedCount = sessions.filter((session) => session.isImported).length;
  const lastImported = state.importDraft.lastImportedLabel
    ? `最近导入：${state.importDraft.lastImportedLabel}`
    : importedCount > 0
      ? "已保存的真实会话仍在左侧列表中"
      : "还没有导入真实会话";
  const activeSession = getActiveSession();
  if (activeSession?.isTaskSession && !activeSession?.isImported) {
    importStatusText.textContent = `当前导入会自动挂到任务 session：${activeSession.id}。回家后把 LS26 记录导入这里，就会和任务卡保持同一条线。`;
  } else {
    importStatusText.textContent = importedCount > 0
      ? `已导入 ${importedCount} 条真实会话。${lastImported}。`
      : "当前使用演示数据。你可以导入一条真实观察记录覆盖演示会话。";
  }

  importAgeModeNote.textContent = importVoiceOnly
    ? "6–8 岁模式：网页端不显示孩子打字区，请直接上传设备导出、图片或音频。"
    : "9–12 岁模式：网页端保留文字输入，也可以继续上传设备导出、图片或音频。";

  [
    importSessionLabelField,
    importPlaceField,
    importObjectField,
    importChildReplyField,
    importSensoryField,
    importImaginationField,
    importJsonTextField
  ].forEach((element) => {
    element.classList.toggle("age-hidden", importVoiceOnly);
  });

  importSummary.innerHTML = "";
  [
    {
      title: "当前草稿",
      text: normalizeText(importSessionLabel.value, "还没填会话名称")
    },
    {
      title: "观察对象",
      text: normalizeText(importObjectInput.value, "还没填观察对象")
    },
    {
      title: "导入方式",
      text: normalizeText(importJsonText.value)
        ? "将优先读取你粘贴的 JSON，再用表单字段补充/覆盖"
        : "将使用表单字段生成一条本地导入会话"
    }
  ].forEach((item) => {
    const card = document.createElement("article");
    card.className = "import-summary-item";
    card.innerHTML = `<strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.text)}</p>`;
    importSummary.appendChild(card);
  });

  importMediaPreview.innerHTML = "";
  if (state.importDraft.imageUrl) {
    const card = document.createElement("article");
    card.className = "import-media-card";
    card.innerHTML = `
      <strong>观察图片</strong>
      <img class="import-image-thumb" src="${escapeHtml(state.importDraft.imageUrl)}" alt="${escapeHtml(state.importDraft.imageName || "观察图片")}">
      <p>${escapeHtml(state.importDraft.imageName || "未命名图片")}</p>
    `;
    importMediaPreview.appendChild(card);
  }

  if (state.importDraft.audioUrl) {
    const card = document.createElement("article");
    card.className = "import-media-card";
    card.innerHTML = `
      <strong>现场音频</strong>
      <audio class="import-audio-player" controls src="${escapeHtml(state.importDraft.audioUrl)}"></audio>
      <p>${escapeHtml(state.importDraft.audioName || "未命名音频")}</p>
    `;
    importMediaPreview.appendChild(card);
  }

  if (!state.importDraft.imageUrl && !state.importDraft.audioUrl) {
    const empty = document.createElement("article");
    empty.className = "import-summary-item";
    empty.innerHTML = "<strong>还没有附带媒体</strong><p>这一版先支持最多 1 张图片和 1 段音频，足够演示真实采集到写作生成的闭环。</p>";
    importMediaPreview.appendChild(empty);
  }
}

function renderSessionList() {
  sessionList.innerHTML = "";
  sessions.forEach((session) => {
    const button = document.createElement("button");
    button.className = `session-chip${session.id === state.sessionId ? " active" : ""}`;
    button.textContent = `${session.isImported ? `真实导入 · ${session.label}` : session.isTaskSession ? `任务卡 · ${session.label}` : session.label} · ${ageProfiles[session.age].label}`;
    button.addEventListener("click", () => {
      state.sessionId = session.id;
      state.turnId = session.turns[0].id;
      state.age = session.age;
      state.selectedQuestionIndex = 0;
      resetApiWriting(`已切换到 ${session.label}，当前显示本地模板生成结果。`);
      updateAgeButtons();
      loadAiInputFromTurn();
      state.aiBundle = generateAiBundle();
      state.canvasBlocks = buildRecommendedBlocks(state.aiBundle.turn, session);
      renderApp();
    });
    sessionList.appendChild(button);
  });
}

function renderTimeline() {
  const session = getActiveSession();
  sessionMeta.textContent = `${session.date} · ${session.place} · ${session.syncStatus}`;
  timelineList.innerHTML = "";

  session.turns.forEach((turn, index) => {
    const item = document.createElement("article");
    item.className = `timeline-item${turn.id === state.turnId ? " active" : ""}`;
    item.addEventListener("click", () => {
      state.turnId = turn.id;
      state.selectedQuestionIndex = 0;
      resetApiWriting(`已切换到第 ${index + 1} 轮观察，当前显示本地模板生成结果。`);
      loadAiInputFromTurn();
      state.aiBundle = generateAiBundle();
      state.canvasBlocks = buildRecommendedBlocks(state.aiBundle.turn, session);
      renderApp();
    });

    item.innerHTML = `
      <div class="timeline-marker">${escapeHtml(turn.icon)}</div>
      <div>
        <p class="mini-label">第 ${index + 1} 轮 · ${turn.syncPayload.source === "image" ? "图片触发" : "语音继续"}</p>
        <h4>${escapeHtml(turn.object)}</h4>
        <p>${escapeHtml(turn.deviceReply)}</p>
        <div class="timeline-tags">
          ${turn.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
        </div>
      </div>
    `;

    timelineList.appendChild(item);
  });
}

function renderAiStudio() {
  const aiVoiceOnly = isVoiceOnlyAge(state.age);
  const input = state.aiInput;
  aiObjectInput.value = input.object;
  aiPlaceInput.value = input.place;
  aiChildReplyInput.value = input.childReply;
  aiLensSelect.value = input.lens;
  aiGoalSelect.value = input.goal;
  aiToneSelect.value = input.tone;
  aiDepthSelect.value = input.depth;

  aiStudioStatus.textContent = aiVoiceOnly
    ? `当前底稿来自 ${getActiveSession().label} · ${getSourceTurn().object}。6–8 岁模式下不显示孩子打字区，平台将优先使用语音、图片和现场记录。`
    : `当前底稿来自 ${getActiveSession().label} · ${getSourceTurn().object}，平台正在生成 AI 调整版。`;

  aiAgeModeNote.textContent = aiVoiceOnly
    ? "6–8 岁模式：这里不显示文字输入，请使用已导入的语音/图片记录继续生成。"
    : "9–12 岁模式：这里保留文字输入，你可以继续手动调整对象、地点和孩子原话。";

  [aiObjectField, aiPlaceField, aiChildReplyField].forEach((element) => {
    element.classList.toggle("age-hidden", aiVoiceOnly);
  });

  aiStrategyList.innerHTML = "";
  state.aiBundle.strategy.forEach((item) => {
    const pill = document.createElement("span");
    pill.className = "strategy-pill";
    pill.textContent = item;
    aiStrategyList.appendChild(pill);
  });

  aiQuestionVariants.innerHTML = "";
  state.aiBundle.questionVariants.forEach((question, index) => {
    const button = document.createElement("button");
    button.className = `question-chip${index === state.aiBundle.activeQuestionIndex ? " active" : ""}`;
    button.textContent = question;
    button.addEventListener("click", () => {
      state.selectedQuestionIndex = index;
      state.aiBundle = generateAiBundle();
      state.canvasBlocks = buildRecommendedBlocks(state.aiBundle.turn, getActiveSession());
      renderApp();
    });
    aiQuestionVariants.appendChild(button);
  });

  aiSummary.innerHTML = "";
  state.aiBundle.summary.forEach((item) => {
    const card = document.createElement("article");
    card.className = "summary-card";
    card.innerHTML = `<strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.text)}</p>`;
    aiSummary.appendChild(card);
  });
}

function renderObservationCard() {
  const session = getActiveSession();
  const sourceTurn = getSourceTurn();
  const turn = getEffectiveTurn();

  observationCard.innerHTML = `
    <div class="observation-hero">
      <div class="observation-media${turn.media?.imageUrl ? " has-image" : ""}">${getObservationMediaMarkup(turn)}</div>
      <div>
        <p class="mini-label">AI 调整后的观察卡</p>
        <h3>${escapeHtml(turn.object)}</h3>
        <p>${escapeHtml(turn.imageHint)}</p>
        <div class="observation-badges">
          <span class="tag">来源：${escapeHtml(session.label)}</span>
          <span class="tag">侧重点：${escapeHtml(lensLabels[state.aiBundle.lens])}</span>
          <span class="tag">目标：${escapeHtml(goalLabels[state.aiBundle.goal])}</span>
        </div>
      </div>
    </div>
    <dl>
      <div>
        <dt>AI 调整后的设备引导</dt>
        <dd>${escapeHtml(turn.deviceReply)}</dd>
      </div>
      <div>
        <dt>孩子回应</dt>
        <dd>${escapeHtml(turn.childReply)}</dd>
      </div>
      <div>
        <dt>孩子动作</dt>
        <dd>${escapeHtml(turn.action)}</dd>
      </div>
      <div>
        <dt>观察感受</dt>
        <dd>${escapeHtml(turn.feeling)}</dd>
      </div>
      <div>
        <dt>感官细节</dt>
        <dd>${escapeHtml(turn.sensory)}</dd>
      </div>
      <div>
        <dt>故事种子</dt>
        <dd>${escapeHtml(turn.imagination)}</dd>
      </div>
      <div>
        <dt>现场音频</dt>
        <dd>${turn.media?.audioUrl ? `<audio class="import-audio-player" controls src="${escapeHtml(turn.media.audioUrl)}"></audio>` : "本轮未附带音频"}</dd>
      </div>
      <div>
        <dt>原始 LS26 回复</dt>
        <dd>${escapeHtml(sourceTurn.deviceReply)}</dd>
      </div>
      <div>
        <dt>AI 调整说明</dt>
        <dd>平台保留原始同步内容，同时根据你的设置重写“问题角度、表达深度和写作脚手架”。</dd>
      </div>
    </dl>
  `;

  syncFields.innerHTML = "";
  const payload = {
    ...sourceTurn.syncPayload,
    ai_generated_object: turn.object,
    ai_lens: lensLabels[state.aiBundle.lens],
    ai_goal: goalLabels[state.aiBundle.goal],
    ai_tone: toneLabels[state.aiBundle.tone],
    ai_depth: depthLabels[state.aiBundle.depth],
    ai_selected_question: state.aiBundle.questionVariants[state.aiBundle.activeQuestionIndex]
  };

  Object.entries(payload).forEach(([key, value]) => {
    const row = document.createElement("div");
    row.className = "sync-row";
    row.innerHTML = `
      <div class="sync-key">${escapeHtml(key)}</div>
      <div>${escapeHtml(value)}</div>
    `;
    syncFields.appendChild(row);
  });
}

function renderBlocks() {
  const session = getActiveSession();
  const library = buildLibraryBlocks(state.aiBundle, session);

  blockLibrary.innerHTML = "";
  library.forEach((block) => {
    const chip = document.createElement("button");
    chip.className = "story-chip addable";
    chip.innerHTML = `<strong>${escapeHtml(block.label)}</strong><span>${escapeHtml(block.type)}</span>`;
    chip.addEventListener("click", () => {
      state.canvasBlocks.push(block);
      renderCanvas();
      renderWriting();
    });
    blockLibrary.appendChild(chip);
  });

  renderCanvas();
}

function renderCanvas() {
  storyCanvas.innerHTML = "";

  if (state.canvasBlocks.length === 0) {
    storyCanvas.innerHTML = "<p>先从左边选几个积木，平台会自动帮你整理成故事结构。</p>";
    canvasHint.textContent = modeText[state.mode].hint;
    return;
  }

  state.canvasBlocks.forEach((block, index) => {
    const chip = document.createElement("div");
    chip.className = "story-chip canvas";
    chip.innerHTML = `
      <strong>${escapeHtml(block.label)}</strong>
      <span>${escapeHtml(block.type)}</span>
      <button class="story-chip-remove" aria-label="移除积木">×</button>
    `;
    chip.querySelector("button").addEventListener("click", () => {
      state.canvasBlocks.splice(index, 1);
      renderCanvas();
      renderWriting();
    });
    storyCanvas.appendChild(chip);
  });

  canvasHint.textContent = modeText[state.mode].hint;
}

function renderWriting() {
  const session = getActiveSession();
  const turn = getEffectiveTurn();
  const ageProfile = getAgeProfile(state.age);
  const outlineItems = state.apiWriting?.outline?.length ? state.apiWriting.outline : state.aiBundle.outline;
  const draftText = state.apiWriting?.draft || state.aiBundle.draft;
  const coachTips = state.apiWriting?.coachTips?.length ? state.apiWriting.coachTips : state.aiBundle.coach.slice(1);
  const actualWordCount = state.apiWriting?.actualWordCount || countDraftCharacters(draftText);

  writingNotes.innerHTML = `
    <p><strong>${escapeHtml(ageProfile.titlePrefix)}</strong></p>
    <ul>
      <li>对象：${escapeHtml(turn.object)}</li>
      <li>地点：${escapeHtml(session.place)}</li>
      <li>孩子原话：${escapeHtml(turn.childReply)}</li>
      <li>故事种子：${escapeHtml(turn.imagination)}</li>
    </ul>
  `;

  writingOutline.innerHTML = `
    <ul>${outlineItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
  `;

  writingDraftMeta.textContent = state.apiWriting
    ? `目标字数：${state.targetWordCount} 字 · 当前约 ${actualWordCount} 字`
    : `当前显示本地模板草稿 · 约 ${actualWordCount} 字`;

  writingDraft.innerHTML = `
    ${state.apiWriting?.title ? `<p><strong>${escapeHtml(state.apiWriting.title)}</strong></p>` : ""}
    <p>${escapeHtml(draftText)}</p>
  `;
  writingCoach.innerHTML = `
    <p>${escapeHtml(state.apiWriting ? "下面这组建议来自 DeepSeek 生成结果，你仍然可以回到本地模板继续改。" : state.aiBundle.coach[0])}</p>
    <ul>
      ${coachTips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}
    </ul>
  `;
}

function renderInsights() {
  if (!insightList) {
    return;
  }
  insightList.innerHTML = "";
  state.aiBundle.insights.forEach((item) => {
    const block = document.createElement("article");
    block.className = "insight-item";
    block.innerHTML = `
      <strong>${state.mode === "child" ? "平台提示" : "展示洞察"}</strong>
      <p>${escapeHtml(item)}</p>
    `;
    insightList.appendChild(block);
  });
}

function updateModeButtons() {
  document.querySelectorAll("#modeSwitch .segmented-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
}

function updateAgeButtons() {
  document.querySelectorAll("#ageSwitch .segmented-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.age === state.age);
  });
}

function updateModeVisuals() {
  document.body.classList.toggle("mode-guide", state.mode === "guide");
  syncStatusText.textContent = state.mode === "guide" ? modeText[state.mode].sync : getActiveSession().syncStatus;
}

function updateHeroPreview() {
  const turn = getEffectiveTurn();
  devicePreviewObject.textContent = turn.object;
  devicePreviewReply.textContent = `孩子回答：${turn.childReply}`;
}

function renderApp() {
  updateModeVisuals();
  apiStatusText.textContent = state.apiStatusText;
  if (writingWordCountSelect) {
    writingWordCountSelect.value = String(state.targetWordCount);
  }
  renderTaskPlanner();
  renderImportPanel();
  renderSessionList();
  renderAiStudio();
  renderTimeline();
  renderObservationCard();
  renderBlocks();
  renderWriting();
  renderInsights();
  updateHeroPreview();
}

function readAiInputFromForm() {
  state.aiInput = {
    object: normalizeText(aiObjectInput.value, getSourceTurn().object),
    place: normalizeText(aiPlaceInput.value, getActiveSession().place),
    childReply: normalizeText(aiChildReplyInput.value, getSourceTurn().childReply),
    lens: aiLensSelect.value,
    goal: aiGoalSelect.value,
    tone: aiToneSelect.value,
    depth: aiDepthSelect.value
  };
}

function normalizeImportPayloadShape(payload) {
  if (payload && typeof payload === "object" && !Array.isArray(payload)) {
    if (payload.session && typeof payload.session === "object") {
      return payload.session;
    }
    if (Array.isArray(payload.sessions) && payload.sessions.length > 0) {
      return payload.sessions[0];
    }
  }

  return payload;
}

function buildPayloadFromImportInputs() {
  const rawJson = normalizeText(importJsonText.value);
  let payload = {};
  const importVoiceOnly = isVoiceOnlyAge(importAgeSelect.value || state.taskBlueprint?.age || "6-8");

  if (rawJson) {
    payload = normalizeImportPayloadShape(parseImportJson(rawJson)) || {};
  }

  const overrides = readImportOverrides();
  const nextPayload = { ...payload };

  if (overrides.sessionLabel) {
    nextPayload.sessionLabel = overrides.sessionLabel;
  }
  if (overrides.age) {
    nextPayload.age = overrides.age;
  }
  if (overrides.place) {
    nextPayload.place = overrides.place;
  }

  if (Array.isArray(nextPayload.turns) && nextPayload.turns.length > 0) {
    nextPayload.turns = nextPayload.turns.map((turn, index) => {
      if (index > 0) {
        return turn;
      }

      return {
        ...turn,
        object: overrides.object || turn.object || turn.recognizedObject || turn.recognized_object,
        childReply: overrides.childReply || turn.childReply || turn.child_asr_text || turn.explanation,
        sensory: overrides.sensory || turn.sensory,
        imagination: overrides.imagination || turn.imagination
      };
    });
  } else {
    Object.assign(nextPayload, {
      object: overrides.object || nextPayload.object,
      childReply: overrides.childReply || nextPayload.childReply,
      sensory: overrides.sensory || nextPayload.sensory,
      imagination: overrides.imagination || nextPayload.imagination
    });
  }

  const previewObject = normalizeText(
    nextPayload.object ||
    (Array.isArray(nextPayload.turns) && nextPayload.turns[0] ? nextPayload.turns[0].object : ""),
    ""
  );
  const previewReply = normalizeText(
    nextPayload.childReply ||
    (Array.isArray(nextPayload.turns) && nextPayload.turns[0] ? nextPayload.turns[0].childReply : ""),
    ""
  );

  if (importVoiceOnly) {
    const fallbackObject = previewObject || "这次带回来的观察发现";
    const fallbackPlace = normalizeText(nextPayload.place, getActiveSession().place || "户外观察点");
    const fallbackReply = previewReply || "（6–8 岁模式：本次先用图片、音频或设备记录代替孩子打字输入。）";

    if (Array.isArray(nextPayload.turns) && nextPayload.turns.length > 0) {
      nextPayload.turns[0] = {
        ...nextPayload.turns[0],
        object: nextPayload.turns[0].object || fallbackObject,
        childReply: nextPayload.turns[0].childReply || fallbackReply,
        sensory: nextPayload.turns[0].sensory || "等待根据图片、音频或现场记录补充细节。",
        imagination: nextPayload.turns[0].imagination || "先把这次发现带回教室，再继续整理成文字。"
      };
    } else {
      Object.assign(nextPayload, {
        object: fallbackObject,
        place: fallbackPlace,
        childReply: fallbackReply,
        sensory: nextPayload.sensory || "等待根据图片、音频或现场记录补充细节。",
        imagination: nextPayload.imagination || "先把这次发现带回教室，再继续整理成文字。"
      });
    }
  }

  if (!normalizeText(
    nextPayload.object ||
    (Array.isArray(nextPayload.turns) && nextPayload.turns[0] ? nextPayload.turns[0].object : ""),
    ""
  ) || !normalizeText(nextPayload.place) || !normalizeText(
    nextPayload.childReply ||
    (Array.isArray(nextPayload.turns) && nextPayload.turns[0] ? nextPayload.turns[0].childReply : ""),
    ""
  )) {
    throw new Error("请至少填写观察对象、观察地点和孩子原话，或者粘贴一份包含这些字段的 JSON。");
  }

  return nextPayload;
}

function activateSession(session) {
  state.sessionId = session.id;
  state.turnId = session.turns[0].id;
  state.age = session.age;
  state.selectedQuestionIndex = 0;
  resetApiWriting(`已切换到 ${session.label}，当前显示本地模板生成结果。`);
  updateAgeButtons();
  state.taskBlueprint = session.taskBlueprint || state.taskBlueprint;
  loadAiInputFromTurn();
  state.aiBundle = generateAiBundle();
  state.canvasBlocks = buildRecommendedBlocks(state.aiBundle.turn, session);
}

function importSessionIntoApp() {
  const payload = buildPayloadFromImportInputs();
  const activeSession = getActiveSession();
  const targetSession = activeSession?.isTaskSession && !activeSession?.isImported ? activeSession : null;
  importPayloadIntoApp(payload, targetSession);
  renderApp();
}

function createTaskSessionFromCurrentBlueprint() {
  const blueprint = generateTaskBlueprint();
  state.taskBlueprint = blueprint;
  const session = createTaskSessionFromBlueprint(blueprint);
  const existingIndex = sessions.findIndex((item) => item.id === session.id);

  if (existingIndex >= 0) {
    sessions.splice(existingIndex, 1);
  }

  sessions.unshift(session);
  saveImportedSessions();
  activateSession(session);
  renderApp();
}

function buildTaskDownloadPayload(blueprint) {
  return {
    session_id: blueprint.sessionId,
    task_title: blueprint.title,
    environment: blueprint.environment,
    age_group: blueprint.age,
    input_mode: blueprint.inputMode,
    date: blueprint.dateInput,
    time: blueprint.time,
    open_mission: blueprint.openMission,
    slow_observation_prompts: blueprint.slowObservationPrompts,
    three_stage_task: blueprint.threeStageJson,
    writing_questions: blueprint.questions,
    teacher_tips: blueprint.teacherTips,
    note: blueprint.note || "",
    device_scripts: blueprint.deviceContext.scripts,
    deviceContext: blueprint.deviceContext
  };
}

function downloadJsonFile(filename, payload) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

document.getElementById("modeSwitch").addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (!button) {
    return;
  }
  state.mode = button.dataset.mode;
  updateModeButtons();
  renderApp();
});

document.getElementById("ageSwitch").addEventListener("click", (event) => {
  const button = event.target.closest("[data-age]");
  if (!button) {
    return;
  }
  state.age = button.dataset.age;
  state.selectedQuestionIndex = 0;
  resetApiWriting(`已切换年龄层到 ${button.dataset.age}，当前显示本地模板生成结果。`);
  readAiInputFromForm();
  state.aiBundle = generateAiBundle();
  state.canvasBlocks = buildRecommendedBlocks(state.aiBundle.turn, getActiveSession());
  updateAgeButtons();
  renderApp();
});

document.getElementById("generateAiButton").addEventListener("click", () => {
  state.selectedQuestionIndex = 0;
  resetApiWriting("本地模板已按当前参数重新生成。");
  readAiInputFromForm();
  state.aiBundle = generateAiBundle();
  state.canvasBlocks = buildRecommendedBlocks(state.aiBundle.turn, getActiveSession());
  renderApp();
});

document.getElementById("reloadFromTurnButton").addEventListener("click", () => {
  state.selectedQuestionIndex = 0;
  resetApiWriting("已重新读取当前会话，本地模板已恢复为当前 turn 的内容。");
  loadAiInputFromTurn();
  state.aiBundle = generateAiBundle();
  state.canvasBlocks = buildRecommendedBlocks(state.aiBundle.turn, getActiveSession());
  renderApp();
});

document.getElementById("restoreOriginalButton").addEventListener("click", () => {
  const session = getActiveSession();
  const turn = getSourceTurn();
  state.selectedQuestionIndex = 0;
  resetApiWriting("已恢复到设备原始内容的本地模板版本。");
  loadAiInputFromTurn();
  state.aiBundle = generateAiBundle();
  state.canvasBlocks = buildRecommendedBlocks(turn, session);
  renderApp();
});

document.getElementById("resetCanvasButton").addEventListener("click", () => {
  state.canvasBlocks = buildRecommendedBlocks(getEffectiveTurn(), getActiveSession());
  renderCanvas();
  renderWriting();
});

document.getElementById("generateTaskCardButton").addEventListener("click", () => {
  state.taskBlueprint = generateTaskBlueprint();
  renderApp();
});

document.getElementById("createTaskSessionButton").addEventListener("click", () => {
  createTaskSessionFromCurrentBlueprint();
});

document.getElementById("startDeviceSessionButton").addEventListener("click", async () => {
  try {
    await startDeviceSessionFromTask();
    renderApp();
  } catch (error) {
    taskStatusText.textContent = error.message || "设备启动失败。";
    renderApp();
    alert(error.message || "设备启动失败。");
  }
});

document.getElementById("stopDeviceSessionButton").addEventListener("click", async () => {
  try {
    await exportStoppedDeviceSessionIntoWriting();
  } catch (error) {
    taskStatusText.textContent = error.message || "设备停止失败。";
    renderApp();
    alert(error.message || "设备停止失败。");
  }
});

document.getElementById("downloadTaskJsonButton").addEventListener("click", () => {
  const blueprint = generateTaskBlueprint();
  state.taskBlueprint = blueprint;
  downloadJsonFile(`${slugify(blueprint.title)}-task.json`, buildTaskDownloadPayload(blueprint));
  renderApp();
});

document.getElementById("printTaskCardButton").addEventListener("click", () => {
  state.taskBlueprint = generateTaskBlueprint();
  renderApp();
  document.body.classList.add("task-print-mode");
  window.print();
  window.setTimeout(() => {
    document.body.classList.remove("task-print-mode");
  }, 300);
});

document.getElementById("generateApiDraftButton").addEventListener("click", async () => {
  try {
    readAiInputFromForm();
    state.aiBundle = generateAiBundle();
    await generateWritingWithApi();
    renderApp();
  } catch (error) {
    resetApiWriting(error.message || "DeepSeek 接口请求失败。");
    renderApp();
    alert(error.message || "DeepSeek 接口请求失败。");
  }
});

document.getElementById("regenerateApiDraftButton").addEventListener("click", async () => {
  try {
    readAiInputFromForm();
    state.aiBundle = generateAiBundle();
    await generateWritingWithApi();
    renderApp();
  } catch (error) {
    resetApiWriting(error.message || "重新生成失败。");
    renderApp();
    alert(error.message || "重新生成失败。");
  }
});

document.getElementById("copyDraftButton").addEventListener("click", async () => {
  try {
    await copyCurrentDraft();
  } catch (error) {
    alert(error.message || "复制失败，请重试。");
  }
});

document.getElementById("downloadDraftButton").addEventListener("click", () => {
  try {
    downloadCurrentDraft();
  } catch (error) {
    alert(error.message || "下载失败，请重试。");
  }
});

document.getElementById("clearApiDraftButton").addEventListener("click", () => {
  resetApiWriting("已回到本地模板生成结果。");
  renderApp();
});

writingWordCountSelect?.addEventListener("change", () => {
  const nextValue = Number(writingWordCountSelect.value) || 300;
  state.targetWordCount = nextValue;
  state.apiStatusText = `已切换目标字数到 ${nextValue} 字。`;
  renderApp();
});

document.getElementById("loadSampleImportButton").addEventListener("click", () => {
  importJsonText.value = JSON.stringify(sampleImportPayload, null, 2);
  populateImportForm(sampleImportPayload);
  renderImportPanel();
});

document.getElementById("importSessionButton").addEventListener("click", () => {
  try {
    importSessionIntoApp();
  } catch (error) {
    alert(error.message || "导入失败，请检查输入内容。");
  }
});

document.getElementById("clearImportedSessionsButton").addEventListener("click", () => {
  clearImportedSessions();
  renderApp();
});

importJsonFile.addEventListener("change", async (event) => {
  const [file] = event.target.files || [];
  if (!file) {
    return;
  }

  try {
    const text = await fileToText(file);
    importJsonText.value = text;
    const payload = normalizeImportPayloadShape(parseImportJson(text));
    populateImportForm(payload || {});
    renderImportPanel();
  } catch (error) {
    alert(error.message || "JSON 文件读取失败。");
  }
});

importImageFile.addEventListener("change", async (event) => {
  const [file] = event.target.files || [];
  if (!file) {
    state.importDraft.imageUrl = "";
    state.importDraft.imageName = "";
    renderImportPanel();
    return;
  }

  try {
    state.importDraft.imageUrl = await fileToDataUrl(file);
    state.importDraft.imageName = file.name;
    renderImportPanel();
  } catch (error) {
    alert("图片读取失败，请重试。");
  }
});

importAudioFile.addEventListener("change", async (event) => {
  const [file] = event.target.files || [];
  if (!file) {
    state.importDraft.audioUrl = "";
    state.importDraft.audioName = "";
    renderImportPanel();
    return;
  }

  try {
    state.importDraft.audioUrl = await fileToDataUrl(file);
    state.importDraft.audioName = file.name;
    renderImportPanel();
  } catch (error) {
    alert("音频读取失败，请重试。");
  }
});

[
  taskTitleInput,
  taskEnvironmentInput,
  taskAgeSelect,
  taskDateInput,
  taskTimeInput,
  taskFocusInput,
  taskNoteInput,
  taskDeviceIntroInput,
  taskDeviceObserveInput,
  taskDeviceCaptureInput,
  taskDeviceClosingInput,
  importSessionLabel,
  importAgeSelect,
  importPlaceInput,
  importObjectInput,
  importChildReplyInput,
  importSensoryInput,
  importImaginationInput,
  importJsonText
].forEach((element) => {
  element.addEventListener("input", () => {
    state.taskBlueprint = generateTaskBlueprint();
    renderImportPanel();
    renderTaskPlanner();
  });
});

loadImportedSessions();
state.taskBlueprint = generateTaskBlueprint();
fetchDeviceBridgeStatus().then(() => {
  renderApp();
});
loadAiInputFromTurn();
state.aiBundle = generateAiBundle();
state.canvasBlocks = buildRecommendedBlocks(state.aiBundle.turn, getActiveSession());
renderApp();
