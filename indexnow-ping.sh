#!/usr/bin/env bash
# Submit all sitemap URLs to IndexNow (Bing, Yandex, Seznam, Naver). Run after each deploy.
set -euo pipefail
HOST=dlee8484.github.io
KEY=8f0a7e97ca3693353dfbe5583adb3dc2
BASE=https://$HOST/loadout-rank
cd "$(dirname "$0")"
URLS=$(grep -o '<loc>[^<]*' sitemap.xml | sed 's/<loc>//' | python3 -c 'import sys,json;print(json.dumps([l.strip() for l in sys.stdin]))')
curl -s -o /dev/null -w "IndexNow HTTP %{http_code}\n" -X POST https://api.indexnow.org/indexnow -H 'Content-Type: application/json; charset=utf-8' \
 -d "{\"host\":\"$HOST\",\"key\":\"$KEY\",\"keyLocation\":\"$BASE/$KEY.txt\",\"urlList\":$URLS}"
