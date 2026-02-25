import FeaturedSystem from "./FeaturedSystem";
import { useNavigate } from "react-router-dom";

export default function SupplyEngine() {
  const navigate = useNavigate();

  return (
    <FeaturedSystem
      label="Supply Engine"
      title="Designing the Seller Leads Marketplace"
      description="Transforming fragmented seller intent into a structured, qualified and monetizable supply system across Bayut and dubizzle."
      steps={[
        "Intent Capture",
        "Qualification",
        "Marketplace",
        "Unlock",
        "Inventory Growth",
      ]}
      pillars={[
        {
          title: "Capture Layer",
          desc: "Multi entrypoint architecture across Bayut, dubizzle and TruEstimate with behavioral triggers and validation controls.",
        },
        {
          title: "Qualification System",
          desc: "Ops moderation panel, WhatsApp verification flows and BI validation thresholds improving trust and unlock velocity.",
        },
        {
          title: "Marketplace Engine",
          desc: "Credit based unlock model with timed tiered access, emirate flags and preference driven visibility logic.",
        },
        {
          title: "Monetization Logic",
          desc: "Flat rate pilot pricing evolving toward dynamic pricing based on intent, commission potential and qualification status.",
        },
      ]}
      ctaText="Explore Full Architecture"
      onCtaClick={() => navigate("/systems-in-practice/seller-leads")}
    />
  );
}
