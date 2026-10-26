// Generates one 1200x630 Open Graph PNG per page into dist/og (run after `vite build --ssr`).
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const root = process.cwd();
const ssr = await import(
  pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href
);
const { ROUTE_META } = ssr;

// Alpha Lyrae only ships Medium; register it for each weight the layout asks for.
const fontData = await readFile(
  path.join(root, "src/assets/fonts/AlphaLyrae-Medium.ttf"),
);
const fonts = [400, 600, 700].map((weight) => ({
  name: "Alpha Lyrae",
  weight,
  style: "normal",
  data: fontData,
}));

const h = (style, children) => ({
  type: "div",
  props: { style: { display: "flex", ...style }, children },
});

function titleSize(title) {
  if (title.length <= 28) return 76;
  if (title.length <= 48) return 64;
  return 56;
}

function tree(meta) {
  return h(
    {
      boxSizing: "border-box",
      width: 1200,
      height: 630,
      flexDirection: "column",
      backgroundColor: "#0a0a0d",
      padding: "72px 72px 56px",
      color: "#ffffff",
      fontFamily: "Alpha Lyrae",
      // Alpha Lyrae's contextual alternates pixelate every 4th glyph; keep them off.
      fontFeatureSettings: '"calt" 0',
      fontVariantLigatures: "no-contextual",
    },
    [
      h(
        {
          width: 64,
          height: 64,
          borderRadius: 32,
          border: "2px solid rgba(251,191,36,0.7)",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 26,
          fontWeight: 600,
        },
        "AK",
      ),
      h({ flexDirection: "column", marginTop: 54, flexGrow: 1 }, [
        h(
          {
            color: "#fbbf24",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          },
          meta.eyebrow,
        ),
        h(
          {
            marginTop: 22,
            fontSize: titleSize(meta.ogTitle),
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 1000,
          },
          meta.ogTitle,
        ),
        h(
          {
            marginTop: 26,
            fontSize: 30,
            fontWeight: 400,
            color: "#9a9aa3",
            lineHeight: 1.4,
            maxWidth: 920,
          },
          meta.description,
        ),
      ]),
      h(
        {
          width: 1056,
          height: 3,
          backgroundColor: "#fbbf24",
        },
        [],
      ),
    ],
  );
}

const outDir = path.join(root, "dist", "og");
await mkdir(outDir, { recursive: true });

for (const meta of ROUTE_META) {
  const svg = await satori(tree(meta), { width: 1200, height: 630, fonts });
  const png = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
    font: { loadSystemFonts: false },
  })
    .render()
    .asPng();
  await writeFile(path.join(outDir, `${meta.slug}.png`), png);
  console.log("og image", meta.slug, `${(png.length / 1024).toFixed(0)} KB`);
}
