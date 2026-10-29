# Graph Report - portfolio-v2  (2026-10-28)

## Corpus Check
- 50 files · ~22,529 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 1, .ttf 1, .woff 1)

## Summary
- 371 nodes · 717 edges · 18 communities (13 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6363254b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Case Study Components
- Homepage Sections & Hero
- Dev Tooling & Dependencies
- App Shell & Runtime Deps
- Build Scripts (OG, Prerender)
- GitHub Deploy Workflow
- AlphaLyrae-LICENSE.md (font package copy)
- App TypeScript Config
- Node TypeScript Config
- Brand Logos & Case Data
- Hero Portrait Photo
- Graphify Usage Rules
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
- `CaseStudyPage()` --calls--> `BrandLogo()`  [EXTRACTED]
  src/components/CaseStudy.tsx → src/components/BrandLogo.tsx
- `FeaturedSystem()` --calls--> `DiagramCard()`  [EXTRACTED]
  src/components/FeaturedSystem.tsx → src/components/CaseStudy.tsx
- `LoopInPractice()` --calls--> `DiagramCard()`  [EXTRACTED]
  src/components/LoopInPractice.tsx → src/components/CaseStudy.tsx
- `FeaturedSystem()` --calls--> `DetailCards()`  [EXTRACTED]
  src/components/FeaturedSystem.tsx → src/components/CaseStudy.tsx
- `Stepper()` --calls--> `Pill()`  [EXTRACTED]
  src/components/Stepper.tsx → src/components/CaseStudy.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **AK logo composition** — public_ak_logo, public_ak_logo_yellow_ring, public_ak_logo_ak_monogram [EXTRACTED 1.00]
- **graphify usage rules** — claude_graphify_query_rule, claude_graphify_update_rule, claude_graph_report, claude_graph_json, claude_graphify_wiki_index [EXTRACTED 1.00]
- **Elements composing the portrait scene** — src_assets_me_subject, src_assets_me_cafe_setting, src_assets_me_indoor_plant, src_assets_me_glass_facade, src_assets_me_coffee_cup [INFERRED 0.75]

## Communities (18 total, 5 thin omitted)

### Community 0 - "Case Study Components"
Cohesion: 0.09
Nodes (55): Callout(), CaseNav(), CaseSection(), CaseStudyPage(), ChartPanel(), DetailCards(), DiagramCard(), IllustrationNote() (+47 more)

### Community 1 - "Homepage Sections & Hero"
Cohesion: 0.12
Nodes (31): lucide-react, react, DecisionField(), Node, About(), ContactSection(), FeaturedSystem(), GlassSurface() (+23 more)

### Community 2 - "Dev Tooling & Dependencies"
Cohesion: 0.06
Nodes (49): devDependencies, eslint@^9.39.1, @eslint/js@^9.39.1, eslint-plugin-react-hooks@^7.0.1, eslint-plugin-react-refresh@^0.4.24, globals@^16.5.0, @resvg/resvg-js@^2.6.2, satori@^0.63.2 (+41 more)

### Community 3 - "App Shell & Runtime Deps"
Cohesion: 0.09
Nodes (33): index.html (Vite app shell), app-head comment placeholder, ak-logo.svg favicon and touch icon, div#root mount point, theme-color #0a0a0a, dependencies, lucide-react@^1.61.0, react@^19.2.0 (+25 more)

### Community 4 - "Build Scripts (OG, Prerender)"
Cohesion: 0.08
Nodes (20): fonts, h(), outDir, root, titleSize(), tree(), dist, extensionless (+12 more)

### Community 5 - "GitHub Deploy Workflow"
Cohesion: 0.07
Nodes (31): runs-on, steps, if, needs, runs-on, steps, AWS_ACCESS_KEY_ID, AWS_REGION (+23 more)

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

### Community 12 - "Graphify Usage Rules"
Cohesion: 0.39
Nodes (5): CLAUDE.md (graphify usage rules), graphify-out/graph.json, graphify-out/GRAPH_REPORT.md, graphify CLI, graphify-out/wiki/index.md

### Community 14 - "Vite Template README"
Cohesion: 0.43
Nodes (5): README.md (React + TypeScript + Vite template), eslint-plugin-react-dom, eslint-plugin-react-x, @vitejs/plugin-react, @vitejs/plugin-react-swc

### Community 15 - "AK Logo"
Cohesion: 0.50
Nodes (4): AK logo (ak-logo.svg), AK monogram, Personal portfolio brand identity, Yellow outline ring

## Ambiguous Edges - Review These
- `Bayut (real estate brand, inferred from filename)` → `bayut_grey.png`  [AMBIGUOUS]
  src/assets/bayut_grey.png · relation: conceptually_related_to

## Knowledge Gaps
- **20 isolated node(s):** `Casual professional portrait style`, `Personal portfolio hero portrait`, `Blurred background diners`, `Indoor cafe setting`, `Coffee cup on table edge` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 147 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Homepage Sections & Hero` to `Case Study Components`, `Dev Tooling & Dependencies`, `App Shell & Runtime Deps`?**
  _High betweenness centrality (0.134) - this node is a cross-community bridge._
- **What connects `Casual professional portrait style`, `Personal portfolio hero portrait`, `Blurred background diners` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Case Study Components` be split into smaller, more focused modules?**
  _Cohesion score 0.09344262295081968 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `App Shell & Runtime Deps` to `Case Study Components`, `Homepage Sections & Hero`, `Dev Tooling & Dependencies`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Should `Homepage Sections & Hero` be split into smaller, more focused modules?**
  _Cohesion score 0.12025901942645699 - nodes in this community are weakly interconnected._
- **Why does `@resvg/resvg-js` connect `Dev Tooling & Dependencies` to `Build Scripts (OG, Prerender)`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Bayut (real estate brand, inferred from filename)` and `bayut_grey.png`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._