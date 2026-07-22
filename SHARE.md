# LS26 Outdoor Co-Writing Demo

这是一个纯前端静态网页项目，主要文件如下：

- `index.html`：页面入口
- `styles.css`：样式
- `app.js`：交互和智能生成逻辑

## 本地预览

推荐不要直接双击打开 `index.html`，而是启动本地预览服务。

### 方法 1：双击脚本

- 双击 `start-preview.command`
- 浏览器会自动打开：`http://127.0.0.1:4173/`

### 方法 2：终端命令

```bash
cd "/Users/yuanshuyi/Documents/AI Edu"
python3 -m http.server 4173
```

然后访问：

```text
http://127.0.0.1:4173/
```

## 局域网分享

如果你和对方在同一个 Wi-Fi 下，可以双击：

- `start-lan-share.command`

脚本会输出一个类似下面的地址：

```text
http://192.168.x.x:4173/
```

把这个地址发给对方，对方在同一网络里就可以打开。

## 对外正式分享

如果你想发给不在同一网络的人，推荐把这个静态网页部署到：

- Netlify
- Vercel
- GitHub Pages

这三个都很适合这个项目，因为它没有后端依赖。

## 直接打包给别人

如果你只是想把文件发给别人继续改，可以把下面这些文件一起打包：

- `index.html`
- `styles.css`
- `app.js`
- `SHARE.md`
- `start-preview.command`
- `start-lan-share.command`

对方解压后，双击脚本就能运行。
