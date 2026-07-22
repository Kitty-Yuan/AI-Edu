# LS26 共创观察平台 Demo

这是一个本地可运行的 MVP，用来展示：

- `LS26` 如何在户外陪孩子完成观察
- 设备端的图片、语音和对话如何同步到平台
- 平台如何把原始记录整理成 `观察卡 / 故事积木 / 写作提纲 / 短作文`
- 如何通过本地代理安全接入 `DeepSeek API`

## 直接打开

可以直接双击打开 [index.html](/Users/yuanshuyi/Documents/AI%20Edu/index.html)。

如果你要使用 `DeepSeek API`，不要直接双击页面，需要使用下面的本地服务启动方式。

## 本地预览

如果只看本地模板版：

```bash
cd /Users/yuanshuyi/Documents/AI\ Edu
node server.js
```

然后访问：

`http://127.0.0.1:4173`

## 接入 DeepSeek API

先在终端里设置环境变量，再启动本地服务：

```bash
cd /Users/yuanshuyi/Documents/AI\ Edu
export DEEPSEEK_API_KEY="<你的密钥>"
node server.js
```

如果你想换模型，也可以额外设置：

```bash
export DEEPSEEK_MODEL="deepseek-v4-flash"
```

启动后：

1. 打开 `http://127.0.0.1:4173`
2. 在 `00 / MVP 导入站` 导入一条真实观察记录
3. 在 `04 / 写作工作台` 点击 `用 DeepSeek 生成作文`

## 当前能力

- 本地导入一条 `LS26` 观察记录
- 附带 1 张图片和 1 段音频
- 本地模板生成提纲和草稿
- 通过 `/api/generate-writing` 调用 `DeepSeek` 生成真实写作版本

## 当前页面

- `首页`
- `MVP 导入站`
- `观察时间线`
- `观察卡`
- `故事积木`
- `写作工作台`
- `展示洞察`

## 下一步最值得接的能力

1. 把 LS26 的真实会话通过 HTTP API 同步到平台
2. 用真实图片替换当前 demo 图标和模拟数据
3. 增加作品集和会话详情页
4. 给家长/老师模式增加成长统计
