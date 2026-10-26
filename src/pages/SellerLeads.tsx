import {
  Callout,
  CaseNav,
  CaseSection,
  CaseStudyPage,
  DetailCards,
  DiagramCard,
  IntentQuestionCard,
  MyRoleCard,
  OutcomeCard,
  Prose,
  SectionTitle,
  TldrBlock,
  TradeOffs,
} from "@/components/CaseStudy";
import Stepper from "@/components/Stepper";
import { InlineLink } from "@/components/ui/links";

const STEPS = [
  {
    title: "Intent Capture",
    caption: "Owners tell us they want to sell or rent.",
  },
  {
    title: "Qualification",
    caption: "Checks and verification remove noise.",
  },
  {
    title: "Marketplace",
    caption: "Agencies browse leads with contact details hidden.",
  },
  {
    title: "Unlock",
    caption: "Agencies spend credits to reveal the owner.",
  },
  {
    title: "Inventory Growth",
    caption:
      "Unlocked leads help agencies win listings, which grows supply on the platforms.",
  },
];

const CARDS = [
  {
    title: "Capture Layer",
    desc: "Entry points sit where intent is already forming, such as after a TruEstimate valuation or mid-search on Bayut and dubizzle, with validation built in. We met owners in the journey they were already on instead of relying on one generic form.",
  },
  {
    title: "Qualification System",
    desc: "A layered approach that combines people and automation, including Operations review, WhatsApp verification and pricing checks. Noise is filtered early, so the marketplace stays high-trust without slowing capture down.",
  },
  {
    title: "Marketplace Engine",
    desc: "A credit-based unlock model. Agencies spend credits to unlock a lead, and timed access and visibility controls decide who sees it first, so supply keeps moving.",
  },
  {
    title: "Monetization Logic",
    desc: (
      <>
        We started with flat pricing to learn what agencies would pay, then
        moved to pricing that reflects each lead’s value. The full story is in
        the{" "}
        <InlineLink to="/systems-in-practice/seller-leads-pricing">
          pricing case study
        </InlineLink>
        .
      </>
    ),
  },
];

const TRADE_OFFS = [
  {
    choice: "Validated before building.",
    detail: "Slower to announce, but every later decision rested on evidence.",
  },
  {
    choice: "Many entry points over one form.",
    detail: "More to maintain, but owners are met where they already are.",
  },
  {
    choice: "Flat prices at launch.",
    detail:
      "Simple and easy to explain, while we learned what agencies would pay.",
  },
];

export default function SellerLeads() {
  return (
    <CaseStudyPage
      id="seller-leads"
      title="Designing the Seller Leads Marketplace"
      subtitle="How one question on a WhatsApp lead turned a “someday” idea into a seller marketplace across Bayut and dubizzle."
    >
      <TldrBlock
        problem="Owners were contacting agents every day, but our data could not tell a seller from a buyer."
        decision="Test demand with one extra question on an existing channel before building anything."
        result="8K+ owner leads in the first four months, and a marketplace agencies now buy from with credits."
      />

      <CaseSection title="The Problem">
        <Prose>
          Management expected we would need a seller product one day, but it had
          never been validated or prioritized.
        </Prose>
        <Prose>
          Every WhatsApp conversation with an agent looked identical in our
          data. We could not tell whether the person wanted to sell, buy or
          invest. Seller intent was almost certainly in that traffic, but nobody
          could see it.
        </Prose>
      </CaseSection>

      <CaseSection title="The Bet: Intent Capture">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:items-center md:gap-10">
          <div>
            <Prose>
              We believed seller intent was already inside our inbound traffic.
              Instead of building a seller product on that belief, we tested it.
            </Prose>
            <Prose>
              Intent Capture added one field to every WhatsApp lead sent to an
              agent: why are you getting in touch? To sell or lease, to buy, or
              to invest. It was a small change to an existing flow, with no new
              journey to build.
            </Prose>
            <Prose>
              Most people chose sell or lease. The question changed from “does
              seller demand exist?” to “how do we turn it into supply agencies
              can use?”
            </Prose>
          </div>
          <IntentQuestionCard />
        </div>
      </CaseSection>

      <section>
        <SectionTitle>The System</SectionTitle>
        <div className="space-y-5">
          <DiagramCard>
            <Stepper label="How the Seller Leads Marketplace works" steps={STEPS} />
          </DiagramCard>
          <DetailCards cards={CARDS} />
        </div>
      </section>

      <Callout title="What Didn’t Work">
        <Prose>
          Early on, some entry points were tuned for volume. They produced
          plenty of leads, but too many owners had not really asked to be
          contacted. We switched to an explicit opt-in. Fewer leads came in, and
          more of them were real.
        </Prose>
      </Callout>

      <TradeOffs items={TRADE_OFFS} />

      <OutcomeCard stat="8K+">
        Seller leads generated in the first four months. One experiment became
        an ongoing supply of owner leads for agencies, with capture,
        qualification, access and pricing running as one system.
      </OutcomeCard>

      <MyRoleCard>
        <Prose>
          I work on the marketplace side: the roadmap, the analytics behind it,
          and the features that shape how agencies buy, from access rules to
          refunds and pricing.
        </Prose>
      </MyRoleCard>

      <Callout title="What I’d Do Differently">
        <Prose>
          Define the downstream metric earlier. We measured leads and unlocks
          well, but tracking whether an unlocked lead became a listing would
          have told us more about value, sooner.
        </Prose>
      </Callout>

      <CaseNav id="seller-leads" />
    </CaseStudyPage>
  );
}
