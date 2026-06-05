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

tracked_artifacts="$(git ls-files 'private/*' '*.pptx' '*.ppt' '*.docx' '*.xlsx' '*.pdf')"

if [ -n "$tracked_artifacts" ]; then
  echo "Refusing: private or binary artifacts are tracked:"
  echo "$tracked_artifacts"
  exit 1
fi

echo "Public boundary check passed."

