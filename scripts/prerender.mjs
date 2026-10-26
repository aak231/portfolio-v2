// Renders every route to static HTML (run after `vite build` and `vite build --ssr`).
import { readFile, writeFile, mkdir, readdir, stat } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const ssr = await import(
  pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href
);
const { render, ROUTE_META, NOT_FOUND_META, headTags, canonicalUrl } = ssr;

const template = await readFile(path.join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-head-->") || !template.includes('<div id="root"></div>')) {
  throw new Error("dist/index.html is missing the prerender placeholders");
}

const assets = await readdir(path.join(dist, "assets"));
const font = assets.find((f) => /^AlphaLyrae-Medium-.*\.woff2$/.test(f));
const preload = font
  ? `\n    <link rel="preload" as="font" type="font/woff2" crossorigin href="/assets/${font}" />`
  : "";

function page(meta, html) {
  return template
    .replace("<!--app-head-->", headTags(meta) + preload)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

async function write(file, content) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, content);
}

const pageKeys = [];

for (const meta of ROUTE_META) {
  const html = await render(meta.path);
  const rel = meta.path === "/" ? "index.html" : `${meta.path.slice(1)}/index.html`;
  await write(path.join(dist, rel), page(meta, html));
  pageKeys.push(rel);
  console.log("prerendered", meta.path, "->", rel);
}

const notFound = await render("/__not-found__");
await write(path.join(dist, "404.html"), page(NOT_FOUND_META, notFound));
pageKeys.push("404.html");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTE_META.map((m) => `  <url><loc>${canonicalUrl(m.path)}</loc></url>`).join("\n")}
</urlset>
`;
await write(path.join(dist, "sitemap.xml"), sitemap);

// Manifest of S3 keys: every file, plus an extensionless key per page (S3 does not map /foo to /foo/index.html).
async function walk(dir, base = "") {
  const out = [];
  for (const name of await readdir(dir)) {
    const full = path.join(dir, name);
    const rel = base ? `${base}/${name}` : name;
    if ((await stat(full)).isDirectory()) out.push(...(await walk(full, rel)));
    else out.push(rel);
  }
  return out;
}
const files = (await walk(dist)).filter((f) => f !== "manifest.txt");
const extensionless = ROUTE_META.filter((m) => m.path !== "/").map((m) => m.path.slice(1));
await write(
  path.join(dist, "manifest.txt"),
  [...files, ...extensionless].sort().join("\n") + "\n",
);
console.log(`manifest: ${files.length + extensionless.length} keys`);
