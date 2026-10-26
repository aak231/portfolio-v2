# Graph Report - portfolio-v2  (2026-10-26)

## Corpus Check
- Corpus is ~33,391 words - fits in a single context window. You may not need a graph.

## Summary
- 403 nodes · 758 edges · 20 communities (16 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Case Study Components
- Homepage Sections & Hero
- Dev Tooling & Dependencies
- App Shell & Runtime Deps
- Build Scripts (OG, Prerender)
- GitHub Deploy Workflow
- Alpha Lyrae Font & License
- App TypeScript Config
- Node TypeScript Config
- Brand Logos & Case Data
- Hero Portrait Photo
- Font Package Metadata
- Graphify Usage Rules
- npm Scripts
- Vite Template README
- AK Logo
- robots.txt & Domain
- Bayut Logo
- tsconfig Project Refs
- S3 Deploy Script

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 22 edges
2. `SellerLeadsPricing()` - 18 edges
3. `compilerOptions` - 18 edges
4. `RankingCandidates()` - 17 edges
5. `SellerLeads()` - 16 edges
6. `react` - 15 edges
7. `Section()` - 13 edges
8. `ButtonLink()` - 13 edges
9. `react-router-dom` - 11 edges
10. `DiagramCard()` - 11 edges

## Surprising Connections (you probably didn't know these)
- `AlphaLyrae-LICENSE.md (font package copy)` --shares_data_with--> `alpha-lyrae-master LICENSE.md`  [INFERRED]
  src/assets/fonts/AlphaLyrae-LICENSE.md → alpha-lyrae-master/LICENSE.md
- `AlphaLyrae-LICENSE.md (font package copy)` --references--> `Vega Protocol (VEGA)`  [EXTRACTED]
  src/assets/fonts/AlphaLyrae-LICENSE.md → alpha-lyrae-master/README.md
- `AlphaLyrae-LICENSE.md (font package copy)` --references--> `Reserved Font Name Alpha Lyrae`  [EXTRACTED]
  src/assets/fonts/AlphaLyrae-LICENSE.md → alpha-lyrae-master/LICENSE.md
- `AlphaLyrae-LICENSE.md (font package copy)` --references--> `Fontfabric copyright 2021`  [EXTRACTED]
  src/assets/fonts/AlphaLyrae-LICENSE.md → alpha-lyrae-master/LICENSE.md
- `CaseStudyPage()` --calls--> `BrandLogo()`  [EXTRACTED]
  src/components/CaseStudy.tsx → src/components/BrandLogo.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **graphify usage rules** — claude_graphify_query_rule, claude_graphify_update_rule, claude_graph_report, claude_graph_json, claude_graphify_wiki_index [EXTRACTED 1.00]
- **Alpha Lyrae CALT substitution chain** — alpha_lyrae_master_readme_calt_feature, alpha_lyrae_master_readme_fourth_glyph_rule, alpha_lyrae_master_readme_repeat_rule, alpha_lyrae_master_readme_scenario03, alpha_lyrae_master_readme_stylistic_sets, alpha_lyrae_master_readme_dlig [INFERRED 0.85]
- **SIL OFL obligations in the license FAQ** — alpha_lyrae_master_license_sil_ofl, alpha_lyrae_master_license_reserved_font_name, alpha_lyrae_master_license_woff_rule, alpha_lyrae_master_license_embedding_rule, alpha_lyrae_master_license_web_font_distribution_rule [INFERRED 0.85]
- **AK logo composition** — public_ak_logo, public_ak_logo_yellow_ring, public_ak_logo_ak_monogram [EXTRACTED 1.00]
- **Elements composing the portrait scene** — src_assets_me_subject, src_assets_me_cafe_setting, src_assets_me_indoor_plant, src_assets_me_glass_facade, src_assets_me_coffee_cup [INFERRED 0.75]

## Communities (20 total, 4 thin omitted)

### Community 0 - "Case Study Components"
Cohesion: 0.09
Nodes (55): Callout(), CaseNav(), CaseSection(), CaseStudyPage(), ChartPanel(), DetailCards(), DiagramCard(), IllustrationNote() (+47 more)

### Community 1 - "Homepage Sections & Hero"
Cohesion: 0.12
Nodes (31): lucide-react, react, DecisionField(), Node, About(), ContactSection(), FeaturedSystem(), GlassSurface() (+23 more)

### Community 2 - "Dev Tooling & Dependencies"
Cohesion: 0.07
Nodes (41): devDependencies, eslint@^9.39.1, @eslint/js@^9.39.1, eslint-plugin-react-hooks@^7.0.1, eslint-plugin-react-refresh@^0.4.24, globals@^16.5.0, @resvg/resvg-js@^2.6.2, satori@^0.63.2 (+33 more)

### Community 3 - "App Shell & Runtime Deps"
Cohesion: 0.09
Nodes (33): index.html (Vite app shell), app-head comment placeholder, ak-logo.svg favicon and touch icon, div#root mount point, theme-color #0a0a0a, dependencies, lucide-react@^1.61.0, react@^19.2.0 (+25 more)

### Community 4 - "Build Scripts (OG, Prerender)"
Cohesion: 0.08
Nodes (20): fonts, h(), outDir, root, titleSize(), tree(), dist, extensionless (+12 more)

### Community 5 - "GitHub Deploy Workflow"
Cohesion: 0.08
Nodes (29): runs-on, steps, if, needs, runs-on, steps, AWS_ACCESS_KEY_ID, AWS_REGION (+21 more)

### Community 6 - "Alpha Lyrae Font & License"
Cohesion: 0.10
Nodes (20): alpha-lyrae-master LICENSE.md, Fontfabric copyright 2021, FONTLOG, SIL Open Font License 1.1, alpha-lyrae-master README, Alpha Lyrae typeface, CALT contextual alternates feature, Discretionary ligatures (DLIG) (+12 more)

### Community 7 - "App TypeScript Config"
Cohesion: 0.08
Nodes (23): compilerOptions, allowImportingTsExtensions, baseUrl, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+15 more)

### Community 8 - "Node TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+11 more)

### Community 9 - "Brand Logos & Case Data"
Cohesion: 0.20
Nodes (11): Dubizzle grey logo mark (monochrome flame icon with circular base), BrandLogo(), BRANDS, Pill(), Brand, CASE_STUDIES, CaseStudy, CaseStudyId (+3 more)

### Community 10 - "Hero Portrait Photo"
Cohesion: 0.18
Nodes (11): Blurred background diners, Indoor cafe setting, Casual professional portrait style, Coffee cup on table edge, Floor-to-ceiling glass windows with metal door handles, Personal portfolio hero portrait, Tall indoor tree and potted plants, Dark smartphone held on table (+3 more)

### Community 11 - "Font Package Metadata"
Cohesion: 0.25
Nodes (7): license, name, packageManager, repository, type, url, version

### Community 12 - "Graphify Usage Rules"
Cohesion: 0.39
Nodes (5): CLAUDE.md (graphify usage rules), graphify-out/graph.json, graphify-out/GRAPH_REPORT.md, graphify CLI, graphify-out/wiki/index.md

### Community 13 - "npm Scripts"
Cohesion: 0.25
Nodes (8): scripts, build, build:server, dev, lint, preview, serve:dist, verify:dist

### Community 14 - "Vite Template README"
Cohesion: 0.43
Nodes (5): README.md (React + TypeScript + Vite template), eslint-plugin-react-dom, eslint-plugin-react-x, @vitejs/plugin-react, @vitejs/plugin-react-swc

### Community 15 - "AK Logo"
Cohesion: 0.50
Nodes (4): AK logo (ak-logo.svg), AK monogram, Personal portfolio brand identity, Yellow outline ring

## Ambiguous Edges - Review These
- `bayut_grey.png` → `Bayut (real estate brand, inferred from filename)`  [AMBIGUOUS]
  src/assets/bayut_grey.png · relation: conceptually_related_to

## Knowledge Gaps
- **23 isolated node(s):** `graphify-out/wiki/index.md`, `Glyphs App`, `English letter frequency reference`, `Online playground`, `app-head comment placeholder` (+18 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 159 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Homepage Sections & Hero` to `Case Study Components`, `Dev Tooling & Dependencies`, `App Shell & Runtime Deps`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **What connects `graphify-out/wiki/index.md`, `Glyphs App`, `English letter frequency reference` to the rest of the system?**
  _23 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Case Study Components` be split into smaller, more focused modules?**
  _Cohesion score 0.09344262295081968 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `App Shell & Runtime Deps` to `Case Study Components`, `Homepage Sections & Hero`, `Dev Tooling & Dependencies`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Should `Homepage Sections & Hero` be split into smaller, more focused modules?**
  _Cohesion score 0.12025901942645699 - nodes in this community are weakly interconnected._
- **Why does `@resvg/resvg-js` connect `Dev Tooling & Dependencies` to `Build Scripts (OG, Prerender)`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `bayut_grey.png` and `Bayut (real estate brand, inferred from filename)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._