import FeaturedSystem from "./FeaturedSystem";
import { useNavigate } from "react-router-dom";

export default function SupplyEngine() {
  const navigate = useNavigate();

  return (
    <FeaturedSystem
      label="Supply Engine"
      title="Designing the Seller Leads Marketplace"
      description="Multi entrypoint intent capture across Bayut and dubizzle, supported by behavioral triggers and structured validation rules."
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
          desc: "Human and automated qualification layers including moderation via an Operations team, WhatsApp verification and BI pricing validation to increase trust and lead quality.",
        },
        {
          title: "Marketplace Engine",
          desc: "Credit driven unlock engine with timed access controls, emirate visibility flags and preference based distribution logic.",
        },
        {
          title: "Monetization Logic",
          desc: "Pilot flat pricing evolving toward dynamic pricing based on intent strength, commission potential, market demand and qualification status.",
        },
      ]}
      ctaText="Explore Full Architecture"
      onCtaClick={() => navigate("/systems-in-practice/seller-leads")}
    />
  );
}
