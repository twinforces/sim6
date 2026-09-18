#!/bin/sh
set -eu
cd /workspace

if [ ! -d .git ]; then
  git init -b main >/dev/null 2>&1 || true
  git remote add origin https://github.com/twinforces/sim6.git >/dev/null 2>&1 || true
  git fetch origin main >/dev/null 2>&1 || true
  git reset origin/main >/dev/null 2>&1 || true
fi
git config core.hooksPath scripts/githooks >/dev/null 2>&1 || true

node scripts/preview.mjs stop || true
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi
npm run dev >>/tmp/app-startup.log 2>&1 &
