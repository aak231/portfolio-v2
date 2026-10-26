import { SITE } from "@/data/site";

export type RouteMeta = {
  path: string;
  slug: string;
  title: string;
  description: string;
  /** Small gold caps line on the OG image. */
  eyebrow: string;
  /** Large white title on the OG image. */
  ogTitle: string;
  noindex?: boolean;
};

export const ROUTE_META: RouteMeta[] = [
  {
    path: "/",
    slug: "home",
    title: "Ahad Khan · Product Manager, Marketplaces and Data",
    description:
      "I build the systems behind marketplaces: how supply is captured, qualified, priced and bought.",
    eyebrow: "Product × Data × Systems",
    ogTitle: "Ahad Khan",
  },
  {
    path: "/systems-in-practice",
    slug: "systems-in-practice",
    title: "Systems in Practice · Ahad Khan",
    description:
      "Case studies from building marketplaces and AI products: what we decided, what we traded off and what happened.",
    eyebrow: "Case Studies",
    ogTitle: "Systems in Practice",
  },
  {
    path: "/systems-in-practice/seller-leads",
    slug: "seller-leads",
    title: "Designing the Seller Leads Marketplace · Ahad Khan",
    description:
      "How one question on a WhatsApp lead turned a “someday” idea into a seller marketplace across Bayut and dubizzle.",
    eyebrow: "Case Study · Supply Engine",
    ogTitle: "Designing the Seller Leads Marketplace",
  },
  {
    path: "/systems-in-practice/seller-leads-pricing",
    slug: "seller-leads-pricing",
    title: "Pricing the Seller Leads Marketplace · Ahad Khan",
    description:
      "How we moved a marketplace from flat prices to prices that reflect each lead’s value, and tested the model on past leads before it went live.",
    eyebrow: "Case Study · Monetization",
    ogTitle: "Pricing the Seller Leads Marketplace",
  },
  {
    path: "/systems-in-practice/ranking-candidates",
    slug: "ranking-candidates",
    title: "Ranking Candidates by Meaning · Ahad Khan",
    description:
      "Moving recruiter search from keyword matching to a relevance score that reads each CV against the job description, with reasons recruiters can check.",
    eyebrow: "Case Study · AI Product",
    ogTitle: "Ranking Candidates by Meaning",
  },
];

export const NOT_FOUND_META: RouteMeta = {
  path: "/404",
  slug: "home",
  title: "Page Not Found · Ahad Khan",
  description: "This page does not exist.",
  eyebrow: "404",
  ogTitle: "Page Not Found",
  noindex: true,
};

export function normalizePath(pathname: string) {
  const p = pathname.replace(/[?#].*$/, "");
  return p.length > 1 ? p.replace(/\/+$/, "") : p;
}

export function getRouteMeta(pathname: string): RouteMeta {
  const p = normalizePath(pathname);
  return ROUTE_META.find((m) => m.path === p) ?? NOT_FOUND_META;
}

export function canonicalUrl(path: string) {
  return path === "/" ? `${SITE.url}/` : `${SITE.url}${path}`;
}

export function ogImageUrl(slug: string) {
  return `${SITE.url}/og/${slug}.png`;
}

export function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Head tags for the prerendered HTML (the client MetaSync keeps them in step on navigation). */
export function headTags(meta: RouteMeta): string {
  const title = escapeHtml(meta.title);
  const desc = escapeHtml(meta.description);
  const url = canonicalUrl(meta.path);
  const img = ogImageUrl(meta.slug);
  const alt = escapeHtml(`${meta.ogTitle} · ${SITE.name}`);

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${desc}" />`,
  ];

  if (meta.noindex) {
    tags.push(`<meta name="robots" content="noindex" />`);
    return tags.join("\n    ");
  }

  tags.push(
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE.name)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${desc}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${alt}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${desc}" />`,
    `<meta name="twitter:image" content="${img}" />`,
  );
  return tags.join("\n    ");
}
