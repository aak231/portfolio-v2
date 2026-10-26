// Serves dist/ the way S3 behind CloudFront would: exact keys only, no index-document mapping.
import http from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import path from "node:path";

const dist = path.join(process.cwd(), "dist");
const port = Number(process.env.PORT || 4173);
const keys = new Set(
  (await readFile(path.join(dist, "manifest.txt"), "utf8")).split("\n").filter(Boolean),
);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpeg": "image/jpeg",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

http
  .createServer(async (req, res) => {
    const url = new URL(req.url, "http://localhost");
    const key = decodeURIComponent(url.pathname).replace(/^\/+/, "") || "index.html";

    let file = null;
    let type = types[path.extname(key)] || "application/octet-stream";
    if (keys.has(key)) {
      const full = path.join(dist, key);
      if (existsSync(full) && statSync(full).isFile()) file = full;
      else if (existsSync(path.join(full, "index.html"))) {
        file = path.join(full, "index.html");
        type = types[".html"];
      }
    }

    if (file) {
      res.writeHead(200, { "content-type": type });
      res.end(await readFile(file));
    } else {
      res.writeHead(404, { "content-type": types[".html"] });
      res.end(await readFile(path.join(dist, "404.html")));
    }
  })
  .listen(port, () => console.log(`serving dist on http://localhost:${port}`));
