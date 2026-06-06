#!/usr/bin/env bash
set -euo pipefail

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not a git repository yet; public boundary check skipped."
  exit 0
fi

if ! git check-ignore -q private; then
  echo "Refusing: private/ is not ignored by git."
  exit 1
fi

tracked_artifacts="$(
  git ls-files \
    'private/*' \
    '.playwright-cli/*' \
    '.playwright-mcp/*' \
    '*.pptx' \
    '*.pptm' \
    '*.ppt' \
    '*.ppsx' \
    '*.docx' \
    '*.xlsx' \
    '*.pdf' \
    '*.log' \
    '*-before.png' \
    '*-after.png' \
    '*-final*.png' \
    'screenshot-*.png' \
    'page-*.png'
)"

if [ -n "$tracked_artifacts" ]; then
  echo "Refusing: private, binary, or local debug artifacts are tracked:"
  echo "$tracked_artifacts"
  exit 1
fi

echo "Public boundary check passed."
