import {
  CaseSection,
  CaseStudyPage,
  ChartPanel,
  DetailCards,
  DiagramCard,
  IllustrationNote,
  OutcomeCard,
  Pill,
  Prose,
  QuestionChips,
  SectionTitle,
} from "@/components/CaseStudy";
import { CHART_AMBER, CHART_GREY } from "@/components/chartColors";

const LEAD_TYPES = ["Small rental", "Mid-size sale", "Large sale"];
const FLAT_BARS = [62, 62, 62];
const VALUE_BARS = [30, 58, 100];

const PROCESS_STEPS = [
  {
    title: "Launch Flat",
    desc: "One price per lead type, to learn what agencies would pay.",
  },
  {
    title: "Read the Behaviour",
    desc: "Watched which leads sold, which sat, and where one price stopped fitting.",
  },
  {
    title: "Design the Model",
    desc: "Prices that follow each lead’s value, built with BI.",
  },
  {
    title: "Replay History",
    desc: "Ran the model on months of past leads before any agency saw a price.",
    badge: "Go-Live Check",
  },
  {
    title: "Go Live and Tune",
    desc: "Prices shown before unlock, then tuned as agencies respond.",
  },
];

const REPLAY_QUESTIONS = [
  { text: "How do prices spread across leads?" },
  { text: "Who pays more, and who pays less, than today?" },
  { text: "Can every lead get a price?" },
  { text: "What do the extremes look like?" },
];

const DETAIL_CARDS = [
  {
    title: "Pricing Logic",
    desc: "Prices come from the lead itself, not from a rate card: what the property is worth, what an agent can earn from it, how much demand there is in the area and whether we have verified the lead. Higher-value leads cost more and smaller leads cost less, within limits.",
  },
  {
    title: "Testing on Past Leads",
    desc: "Replaying the model on months of past leads shows how it behaves without putting revenue at risk, and points to the cases that need fixing first. It turns a model on paper into something we can judge on real leads.",
  },
  {
    title: "Guardrails",
    desc: "The test surfaced edge cases: leads with too little data to price with confidence, and prices that looked too high or too low. We treated them as conditions for going live: a price for every lead, limits at both ends, and a check on how the model behaves when data is thin.",
  },
  {
    title: "Rollout",
    desc: "Pricing touches agencies, Sales, Operations and Tech, so the rollout had its own plan: an internal update on how prices are decided, and one clear message for agencies. You now see the price on every lead before you unlock it.",
  },
];

function BarPanel({
  title,
  heights,
  barColor,
  ariaLabel,
}: {
  title: string;
  heights: number[];
  barColor: string;
  ariaLabel: string;
}) {
  return (
    <div role="img" aria-label={ariaLabel}>
      <ChartPanel title={title}>
        <div className="mt-6 grid grid-cols-3 gap-3 md:gap-4">
          {LEAD_TYPES.map((label, i) => (
            <div key={label} className="flex flex-col items-stretch">
              <div className="flex h-40 items-end border-b border-white/10 md:h-48">
                <div
                  className="w-full rounded-t-xl"
                  style={{
                    height: `${heights[i]}%`,
                    backgroundColor: barColor,
                  }}
                />
              </div>
              <div className="mt-3 text-center text-xs text-zinc-400 md:text-sm">
                {label}
              </div>
            </div>
          ))}
        </div>
      </ChartPanel>
    </div>
  );
}

function ProcessTimeline() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute bottom-5 left-5 top-5 w-px bg-white/10 lg:bottom-auto lg:left-[10%] lg:right-[10%] lg:top-5 lg:h-px lg:w-auto"
      />
      <ol className="relative lg:grid lg:grid-cols-5 lg:gap-4">
        {PROCESS_STEPS.map((step) => {
          const active = Boolean(step.badge);
          return (
            <li
              key={step.title}
              className="relative flex gap-5 pb-8 last:pb-0 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center"
            >
              <div
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-[#121214] ${
                  active
                    ? "border-amber-400/70 shadow-[0_0_14px_rgba(251,191,36,0.35)] ring-4 ring-amber-400/10"
                    : "border-white/10"
                }`}
              >
                <span
                  className={`block rounded-full bg-amber-400 ${
                    active ? "h-3 w-3" : "h-2 w-2"
                  }`}
                />
              </div>

              <div className="min-w-0 pt-1.5 lg:mt-5 lg:pt-0">
                {step.badge && (
                  <Pill size="md" className="mb-2">
                    {step.badge}
                  </Pill>
                )}
                <h3
                  className={`text-lg font-medium ${
                    active ? "text-amber-400" : "text-white"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {step.desc}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function SellerLeadsPricing() {
  return (
    <CaseStudyPage
      id="seller-leads-pricing"
      title="Pricing the Seller Leads Marketplace"
      subtitle="How we moved a marketplace from flat prices to prices that reflect each lead’s value, and tested the model on past leads before it went live."
    >
      <CaseSection title="The Problem">
        <Prose>
          We launched with flat prices, on purpose. One price for each type of
          lead let us learn what agencies were willing to pay without adding
          complexity.
        </Prose>
        <Prose>
          It worked for learning, but a flat price treats very different leads
          the same. A small rental and a large sale are not the same opportunity
          for an agency, yet they cost almost the same. That made lower-value
          leads harder to justify and left higher-value leads underpriced.
        </Prose>
      </CaseSection>

      <CaseSection title="The Approach">
        <Prose>
          The principle was simple: the price should follow what the lead is
          worth to the agency. Each price is built from market data, commission
          potential, demand in the area and quality signals, and agencies see it
          before they unlock.
        </Prose>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <BarPanel
            title="Flat Pricing"
            heights={FLAT_BARS}
            barColor={CHART_GREY}
            ariaLabel="Flat pricing: the same price for a small rental, a mid-size sale and a large sale"
          />
          <BarPanel
            title="Price Follows Value"
            heights={VALUE_BARS}
            barColor={CHART_AMBER}
            ariaLabel="Price follows value: price rises from small rental to mid-size sale to large sale"
          />
        </div>
        <IllustrationNote>Illustration only, not real prices.</IllustrationNote>
      </CaseSection>

      <section className="mb-8">
        <SectionTitle>The Process</SectionTitle>
        <DiagramCard>
          <ProcessTimeline />
          <QuestionChips
            title="What the Replay Had to Answer"
            items={REPLAY_QUESTIONS}
          />
        </DiagramCard>
        <DetailCards cards={DETAIL_CARDS} />
      </section>

      <OutcomeCard stat="Live">
        Value-based pricing is now running in the marketplace. The early weeks
        are about reading how agencies respond, such as which prices move and
        which leads sell, before tuning the model further.
      </OutcomeCard>
    </CaseStudyPage>
  );
}
