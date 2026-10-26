// Checks every prerendered route over HTTP (run `npm run serve:dist` first).
import { existsSync } from "node:fs";
import path from "node:path";

const base = process.env.BASE || "http://localhost:4173";
const dist = path.join(process.cwd(), "dist");

const routes = [
  { path: "/", h1: "Ahad Khan", snippet: "I’m a product manager who builds the systems behind marketplaces" },
  { path: "/systems-in-practice", h1: "Systems in Practice", snippet: "Case studies from building marketplaces and AI products at dubizzle" },
  { path: "/systems-in-practice/seller-leads", h1: "Designing the Seller Leads Marketplace", snippet: "Owners were contacting agents every day" },
  { path: "/systems-in-practice/seller-leads-pricing", h1: "Pricing the Seller Leads Marketplace", snippet: "Flat prices treated a small rental" },
  { path: "/systems-in-practice/ranking-candidates", h1: "Ranking Candidates by Meaning", snippet: "Keyword matching buried strong applicants" },
];

let failures = 0;
const fail = (route, msg) => {
  failures++;
  console.log(`  FAIL ${route}: ${msg}`);
};
const titles = new Set();

for (const r of routes) {
  const res = await fetch(base + r.path);
  const html = await res.text();
  console.log(`${r.path} -> ${res.status}`);
  if (res.status !== 200) fail(r.path, `status ${res.status}`);
  if (!res.headers.get("content-type")?.includes("text/html")) fail(r.path, "content-type is not text/html");

  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1].replace(/<[^>]+>/g, "").trim();
  if (h1 !== r.h1) fail(r.path, `h1 "${h1}" != "${r.h1}"`);
  if (!html.includes(r.snippet)) fail(r.path, "first-section text missing from raw HTML");

  const titleTags = html.match(/<title>/g) || [];
  if (titleTags.length !== 1) fail(r.path, `${titleTags.length} <title> tags`);
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  if (!title || titles.has(title)) fail(r.path, "missing or duplicate title");
  titles.add(title);

  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  if (!desc || desc.length > 160) fail(r.path, `description length ${desc.length}`);
  if (!/<link rel="canonical" href="https:\/\/ahadk\.com/.test(html)) fail(r.path, "canonical missing/not absolute");
  for (const p of ["og:title", "og:description", "og:image", "og:url"]) {
    if (!html.includes(`property="${p}"`)) fail(r.path, `${p} missing`);
  }
  if (!html.includes('name="twitter:card" content="summary_large_image"')) fail(r.path, "twitter card");
  const og = html.match(/property="og:image" content="https:\/\/ahadk\.com\/og\/([^"]+)"/)?.[1];
  if (!og || !existsSync(path.join(dist, "og", og))) fail(r.path, `og image ${og} not in dist/og`);

  for (const ref of new Set(html.match(/\/assets\/[^"')\s]+/g) || [])) {
    if (!existsSync(path.join(dist, ref))) fail(r.path, `missing asset ${ref}`);
  }

  const visible = html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, " ");
  if (/[—–]|&mdash;|&ndash;/.test(visible + title + desc)) fail(r.path, "em/en dash in content");
  if (/monetis/i.test(visible)) fail(r.path, "UK spelling 'Monetisation'");
}

const notFound = await fetch(base + "/this-page-does-not-exist");
console.log(`/this-page-does-not-exist -> ${notFound.status}`);
if (notFound.status !== 404) fail("404", `status ${notFound.status}`);

for (const f of ["sitemap.xml", "robots.txt"]) {
  const res = await fetch(`${base}/${f}`);
  if (res.status !== 200) fail(f, `status ${res.status}`);
}

console.log(failures ? `\n${failures} check(s) failed` : "\nAll checks passed");
process.exit(failures ? 1 : 0);
