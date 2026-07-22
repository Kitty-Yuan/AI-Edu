#!/bin/bash
set -e

PROJECT_DIR="/Users/yuanshuyi/Documents/AI Edu"
PORT="4173"

cd "$PROJECT_DIR"

if lsof -nP -iTCP:$PORT -sTCP:LISTEN >/dev/null 2>&1; then
  echo "LAN share server is already running on port $PORT"
else
  HOST="0.0.0.0" PORT="$PORT" nohup node server.js >/tmp/ai-edu-lan-share.log 2>&1 &
  sleep 1
fi

IP_ADDR="$(ipconfig getifaddr en0 2>/dev/null || true)"
if [ -z "$IP_ADDR" ]; then
  IP_ADDR="$(ipconfig getifaddr en1 2>/dev/null || true)"
fi

if [ -z "$IP_ADDR" ]; then
  echo "Server started on port $PORT, but local IP could not be detected automatically."
  echo "Please run: ipconfig getifaddr en0"
  exit 0
fi

echo "Share this URL on the same Wi-Fi:"
echo "http://$IP_ADDR:$PORT/"
open "http://127.0.0.1:$PORT/"
