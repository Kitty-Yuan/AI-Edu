#!/bin/bash
set -e

PROJECT_DIR="/Users/yuanshuyi/Documents/AI Edu"
PORT="4173"

cd "$PROJECT_DIR"

if lsof -nP -iTCP:$PORT -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Preview server is already running on http://127.0.0.1:$PORT/"
else
  nohup node server.js >/tmp/ai-edu-preview.log 2>&1 &
  sleep 1
fi

open "http://127.0.0.1:$PORT/"
