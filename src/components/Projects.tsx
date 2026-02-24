import { useState } from "react";
import ImpactCard from "./ImpactCard";
import bayutLogo from "@/assets/bayut_grey.png";
import dubizzleLogo from "@/assets/dubizzle_grey.png";

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Selected Impact
          </h2>

          <div className="flex items-center gap-4">
            <img
              src={bayutLogo}
              className="h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <img
              src={dubizzleLogo}
              className="h-7 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <span className="text-xs tracking-widest uppercase text-zinc-500">
              Product × Data Operator
            </span>
          </div>
        </div>
        {/* Top 3 Always Visible */}
        <div className="grid md:grid-cols-3 gap-8">
          <ImpactCard
            metric="550K+"
            title="TruEstimate™ Reports Generated"
            description="Automated property valuation experience driving large-scale report generation."
            contributions={[
              "Defined valuation funnel KPIs",
              "Instrumented tracking architecture",
              "Built end-to-end dashboards",
              "Influenced UX iterations using behavioral data",
            ]}
          />

          <ImpactCard
            metric="8K+"
            title="Seller Leads in 4 Months"
            description="Seller acquisition funnel capturing high-intent property owners."
            contributions={[
              "Defined acquisition metrics",
              "Designed lead quality scoring framework",
              "Analyzed form friction",
              "Drove funnel optimization through behavioral analysis",
            ]}
          />

          <ImpactCard
            metric="600+"
            title="Offplan Leads Unlocked in 72 Hours"
            description="Premium off-plan lead marketplace enabling broker unlock mechanics."
            contributions={[
              "Defined unlock conversion metrics",
              "Tracked supply-demand balance",
              "Measured agency engagement velocity",
              "Analyzed monetization signals",
            ]}
          />
        </div>

        {/* Expandable Section */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            expanded ? "max-h-[1200px] opacity-100 mt-12" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <ImpactCard
              metric="9K+"
              title="TruBroker™ Marketplace Scale"
              description="Verified broker ecosystem across Dubai and Abu Dhabi."
              contributions={[
                "Defined broker performance metrics",
                "Built distribution efficiency dashboards",
                "Measured response latency",
                "Influenced onboarding optimization",
              ]}
            />

            <ImpactCard
              metric="Ad Visibility Uplift"
              title="Area Prime Slot Performance"
              description="Premium placement feature increasing listing visibility and qualified leads."
              contributions={[
                "Defined incremental lift KPIs",
                "Built experiment dashboards",
                "Measured baseline vs feature impact",
                "Quantified listing performance deltas",
              ]}
            />
          </div>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm uppercase tracking-widest text-zinc-500 hover:text-white transition-colors duration-300"
          >
            {expanded ? "Show Less" : "View More Impact"}
          </button>
        </div>
      </div>
    </section>
  );
}
