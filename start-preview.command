#!/bin/bash
set -u

# Finder does not inherit the same PATH as Terminal, so include common Node paths.
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
PORT="4173"
URL="http://127.0.0.1:$PORT/"
LOG_FILE="/tmp/ai-edu-preview.log"

cd "$PROJECT_DIR" || exit 1

if ! command -v node >/dev/null 2>&1; then
  echo "无法启动：没有找到 Node.js。"
  echo "请先安装 Node.js，然后重新双击此文件。"
  read -r -p "按回车键关闭窗口..."
  exit 1
fi

if curl -fsS "$URL" >/dev/null 2>&1; then
  echo "网站已经在运行：$URL"
else
  nohup node "$PROJECT_DIR/server.js" >"$LOG_FILE" 2>&1 &

  READY="false"
  for _ in 1 2 3 4 5 6 7 8 9 10; do
    if curl -fsS "$URL" >/dev/null 2>&1; then
      READY="true"
      break
    fi
    sleep 0.5
  done

  if [ "$READY" != "true" ]; then
    echo "网站启动失败，错误信息："
    tail -20 "$LOG_FILE" 2>/dev/null || true
    read -r -p "按回车键关闭窗口..."
    exit 1
  fi
fi

open "$URL"
echo "已在浏览器中打开网站。这个窗口可以关闭。"
