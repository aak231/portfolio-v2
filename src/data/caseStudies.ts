export type Brand = "bayut" | "dubizzle";

export type CaseStudyTag = "Supply Engine" | "Monetization" | "AI Product";

export type CaseStudyId =
  | "seller-leads"
  | "seller-leads-pricing"
  | "ranking-candidates";

export type CaseStudy = {
  id: CaseStudyId;
  title: string;
  summary: string;
  metric: string;
  to: string;
  brand: Brand;
  tag: CaseStudyTag;
  icon: "store" | "tags" | "list";
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "seller-leads",
    title: "Designing the Seller Leads Marketplace",
    summary:
      "One experiment turned a “someday” idea into seller supply across Bayut and dubizzle.",
    metric: "8K+ leads in four months",
    to: "/systems-in-practice/seller-leads",
    brand: "bayut",
    tag: "Supply Engine",
    icon: "store",
  },
  {
    id: "seller-leads-pricing",
    title: "Pricing the Seller Leads Marketplace",
    summary:
      "Moving from flat prices to value-based pricing, tested on past leads before go-live.",
    metric: "Live",
    to: "/systems-in-practice/seller-leads-pricing",
    brand: "bayut",
    tag: "Monetization",
    icon: "tags",
  },
  {
    id: "ranking-candidates",
    title: "Ranking Candidates by Meaning",
    summary:
      "Ranking applicants by how well their CV fits the job, with reasons recruiters can check.",
    metric: "2,000+ agencies",
    to: "/systems-in-practice/ranking-candidates",
    brand: "dubizzle",
    tag: "AI Product",
    icon: "list",
  },
];

export function getCaseStudy(id: CaseStudyId): CaseStudy {
  const study = CASE_STUDIES.find((s) => s.id === id);
  if (!study) throw new Error(`Unknown case study: ${id}`);
  return study;
}

export function getNeighbours(id: CaseStudyId) {
  const i = CASE_STUDIES.findIndex((s) => s.id === id);
  return {
    prev: i > 0 ? CASE_STUDIES[i - 1] : undefined,
    next: CASE_STUDIES[(i + 1) % CASE_STUDIES.length],
  };
}
