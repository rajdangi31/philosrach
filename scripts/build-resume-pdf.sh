#!/usr/bin/env bash
# Renders /resume to public/Resume.pdf with headless Chrome.
# Usage: scripts/build-resume-pdf.sh [base-url]   (default http://127.0.0.1:41731)
set -euo pipefail

base="${1:-http://127.0.0.1:41731}"
out="$(cd "$(dirname "$0")/.." && pwd)/public/Resume.pdf"
chrome="${CHROME:-$(command -v google-chrome || command -v chromium || command -v chromium-browser)}"
profile="$(mktemp -d)"
tmp="$(mktemp -u).pdf"

"$chrome" --headless=new --no-sandbox --disable-gpu --user-data-dir="$profile" \
  --no-pdf-header-footer --virtual-time-budget=6000 \
  --print-to-pdf="$tmp" "$base/resume" >/dev/null 2>&1 &
pid=$!

# Headless Chrome can linger after writing the file, so wait for the PDF rather than the process.
for _ in $(seq 1 120); do
  if [ -s "$tmp" ]; then sleep 1; break; fi
  sleep 0.5
done
kill "$pid" 2>/dev/null || true
pkill -f -- "--user-data-dir=$profile" 2>/dev/null || true
sleep 0.5
rm -rf "$profile" 2>/dev/null || true

if [ ! -s "$tmp" ]; then
  echo "Failed to render $base/resume" >&2
  exit 1
fi
mv "$tmp" "$out"
echo "Wrote $out"
