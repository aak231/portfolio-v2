import {
  Callout,
  CaseNav,
  CaseSection,
  CaseStudyPage,
  ChartPanel,
  DetailCards,
  DiagramCard,
  IllustrationNote,
  MyRoleCard,
  OutcomeCard,
  Prose,
  QaList,
  SectionTitle,
  TldrBlock,
  TradeOffs,
} from "@/components/CaseStudy";
import Stepper from "@/components/Stepper";
import { CHART_AMBER, CHART_GREY } from "@/components/chartColors";

const LEAD_TYPES = ["Small rental", "Mid-size sale", "Large sale"];
const FLAT_BARS = [62, 62, 62];
const VALUE_BARS = [30, 58, 100];

const PROCESS_STEPS = [
  {
    title: "Launch Flat",
    caption: "One price per lead type, to learn what agencies would pay.",
  },
  {
    title: "Read the Behavior",
    caption:
      "Watched which leads sold, which sat, and where one price stopped fitting.",
  },
  {
    title: "Design the Model",
    caption: "Prices that follow each lead’s value, built with BI.",
  },
  {
    title: "Replay History",
    caption:
      "Ran the model on months of past leads before any agency saw a price.",
    tag: "Go-Live Check",
  },
  {
    title: "Go Live and Tune",
    caption: "Prices shown before unlock, then tuned as agencies respond.",
  },
];

const REPLAY_FINDINGS = [
  {
    q: "How do prices spread across leads?",
    a: "Much wider than flat pricing. Most leads landed below the old flat price, and a smaller group of high-value leads above it.",
  },
  {
    q: "Who pays more, and who pays less, than today?",
    a: "Rental leads mostly got cheaper. Sale leads for higher-value homes got more expensive.",
  },
  {
    q: "Can every lead get a price?",
    a: "Not at first. The model was too specific, so some leads had nothing to match. Falling back to broader areas closed most of the gap.",
  },
  {
    q: "What do the extremes look like?",
    a: "A small number of leads came out far above anything agencies had paid, mostly because of bad input prices. That put limits and input checks on the go-live list.",
  },
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
    desc: "The test surfaced edge cases: leads with too little data to price with confidence, and prices that looked too high or too low. They became the checklist we took into go-live: a price for every lead, limits at both ends, and a check on how the model behaves when data is thin.",
  },
  {
    title: "Rollout",
    desc: "Pricing touches agencies, Sales, Operations and Tech, so the rollout had its own plan: an internal update on how prices are decided, and one clear message for agencies. You now see the price on every lead before you unlock it.",
  },
];

const TRADE_OFFS = [
  {
    choice: "Flat prices first.",
    detail:
      "We gave up some revenue on high-value leads early, but learned what agencies would pay before modeling it.",
  },
  {
    choice: "Replay before go-live.",
    detail:
      "It slowed the launch, but the edge cases showed up in a test instead of on agencies’ bills.",
  },
];

const WATCHING = [
  "Which leads sell at their new price",
  "Whether more agencies take part",
  "Whether value per lead holds as prices spread out",
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
              <div className="flex h-40 items-end border-b border-line md:h-48">
                <div
                  className="w-full rounded-t-xl"
                  style={{
                    height: `${heights[i]}%`,
                    backgroundColor: barColor,
                  }}
                />
              </div>
              <div className="mt-3 text-center text-xs text-caption md:text-sm">
                {label}
              </div>
            </div>
          ))}
        </div>
      </ChartPanel>
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
      <TldrBlock
        problem="Flat prices treated a small rental and a large sale as the same opportunity."
        decision="Price each lead on its value, and replay the model on past leads before any agency saw a price."
        result="Value-based pricing is live, with its gaps found before launch instead of after."
      />

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

        <div className="mt-8 grid gap-5 md:grid-cols-2">
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

      <section>
        <SectionTitle>The Process</SectionTitle>
        <div className="space-y-5">
          <DiagramCard>
            <Stepper label="How the pricing model was built" steps={PROCESS_STEPS} />
            <QaList title="What the Replay Found" items={REPLAY_FINDINGS} />
          </DiagramCard>
          <DetailCards cards={DETAIL_CARDS} />
        </div>
      </section>

      <TradeOffs items={TRADE_OFFS} />

      <OutcomeCard
        stat="Live"
        extra={
          <div className="mt-6 border-t border-line pt-5">
            <h3 className="text-sm font-semibold text-white">
              What We’re Watching
            </h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-body marker:text-gold">
              {WATCHING.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        }
      >
        Value-based pricing is running in the marketplace. The early weeks are
        about reading how agencies respond before tuning the model further.
      </OutcomeCard>

      <MyRoleCard>
        <Prose>
          I shaped the pricing approach with BI, ran the replay on past leads
          before launch, and planned the rollout across Sales, Operations and
          Tech, including the internal update and the message to agencies.
        </Prose>
      </MyRoleCard>

      <Callout title="What I’d Do Differently">
        <Prose>
          Check data coverage before tuning the formula. The biggest issues in
          the replay came from leads the model could not see, not from the
          math.
        </Prose>
      </Callout>

      <CaseNav id="seller-leads-pricing" />
    </CaseStudyPage>
  );
}
