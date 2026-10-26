#!/usr/bin/env bash
# Publishes dist/ to S3 so that every prerendered page is served as HTML at its clean URL.
# S3 REST origins do not map /foo to /foo/index.html, so each page is also uploaded as an
# extensionless key. Run from the repo root after `npm run build`. Use DRY=--dryrun to preview.
set -euo pipefail

BUCKET="${BUCKET:-ahadk.com}"
DRY="${DRY:-}"
HTML_TYPE="text/html; charset=utf-8"
HTML_CACHE="public,max-age=0,must-revalidate"

[ -f dist/manifest.txt ] || { echo "dist/manifest.txt missing: run npm run build first" >&2; exit 1; }
[ "$(wc -l < dist/manifest.txt)" -ge 15 ] || { echo "manifest looks too small, refusing to deploy" >&2; exit 1; }

# 1. Hashed assets never change: cache for a year.
aws s3 sync dist/assets "s3://$BUCKET/assets" $DRY \
  --cache-control "public,max-age=31536000,immutable"

# 2. Other static files (OG images, sitemap, robots, favicon).
aws s3 sync dist "s3://$BUCKET" $DRY \
  --exclude "assets/*" --exclude "*.html" --exclude "manifest.txt" \
  --cache-control "public,max-age=3600"

# 3. Pages: every index.html, plus an extensionless copy of each non-root page.
while IFS= read -r key; do
  case "$key" in
    index.html) continue ;; # uploaded last
    404.html|*/index.html)
      aws s3 cp "dist/$key" "s3://$BUCKET/$key" $DRY \
        --content-type "$HTML_TYPE" --cache-control "$HTML_CACHE"
      if [ "$key" != "404.html" ]; then
        page="${key%/index.html}"
        aws s3 cp "dist/$key" "s3://$BUCKET/$page" $DRY \
          --content-type "$HTML_TYPE" --cache-control "$HTML_CACHE"
      fi
      ;;
  esac
done < dist/manifest.txt
aws s3 cp dist/index.html "s3://$BUCKET/index.html" $DRY \
  --content-type "$HTML_TYPE" --cache-control "$HTML_CACHE"

# 4. Remove objects that are no longer part of the build (replaces a blind `sync --delete`).
if [ -z "$DRY" ]; then
  aws s3api list-objects-v2 --bucket "$BUCKET" --query 'Contents[].Key' --output text \
    | tr '\t' '\n' | sort > /tmp/remote-keys.txt
  sort dist/manifest.txt > /tmp/local-keys.txt
  comm -23 /tmp/remote-keys.txt /tmp/local-keys.txt | while IFS= read -r stale; do
    [ -n "$stale" ] && aws s3 rm "s3://$BUCKET/$stale"
  done
fi
