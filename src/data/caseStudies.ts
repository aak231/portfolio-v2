import type { Brand } from "@/components/BrandLogo";

export type CaseStudyTag = "Supply Engine" | "Monetisation" | "AI Product";

export type CaseStudy = {
  id: "seller-leads" | "seller-leads-pricing" | "ranking-candidates";
  title: string;
  description: string;
  to: string;
  brand: Brand;
  tag: CaseStudyTag;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "seller-leads",
    title: "Seller Leads Marketplace",
    description:
      "Designing a structured seller supply engine across Bayut and dubizzle.",
    to: "/systems-in-practice/seller-leads",
    brand: "bayut",
    tag: "Supply Engine",
  },
  {
    id: "seller-leads-pricing",
    title: "Pricing the Seller Leads Marketplace",
    description:
      "Moving from flat prices to value-based pricing, tested on past leads before go-live.",
    to: "/systems-in-practice/seller-leads-pricing",
    brand: "bayut",
    tag: "Monetisation",
  },
  {
    id: "ranking-candidates",
    title: "Ranking Candidates by Meaning",
    description:
      "Moving recruiter search from keyword matching to a relevancy index score, with scores recruiters can trust.",
    to: "/systems-in-practice/ranking-candidates",
    brand: "dubizzle",
    tag: "AI Product",
  },
];

export function getCaseStudy(id: CaseStudy["id"]): CaseStudy {
  const study = CASE_STUDIES.find((s) => s.id === id);
  if (!study) throw new Error(`Unknown case study: ${id}`);
  return study;
}
