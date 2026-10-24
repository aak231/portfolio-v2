import {
  CaseSection,
  CaseStudyPage,
  DetailCards,
  DiagramCard,
  OutcomeCard,
  Prose,
  SectionTitle,
} from "@/components/CaseStudy";

const STEPS = [
  "Intent Capture",
  "Qualification",
  "Marketplace",
  "Unlock",
  "Inventory Growth",
];

const PILLARS = [
  {
    title: "Capture Layer",
    desc: "Multi entrypoint architecture across Bayut, dubizzle and TruEstimate with behavioral triggers and validation controls. Entry points were placed wherever intent was already forming — post-valuation on TruEstimate, mid-search on Bayut and dubizzle — rather than relying on a single generic intake form.",
  },
  {
    title: "Qualification System",
    desc: "Human and automated qualification layers including moderation via an Operations team, WhatsApp verification and BI pricing validation to increase trust and lead quality. This layered approach filtered out noise early, so downstream marketplace supply stayed high-trust without slowing down capture volume.",
  },
  {
    title: "Marketplace Engine",
    desc: "Credit driven unlock engine with timed access controls, emirate visibility flags and preference based distribution logic. Brokers spent credits to unlock a lead, and timed access windows kept supply moving instead of sitting with a single broker indefinitely.",
  },
  {
    title: "Monetization Logic",
    desc: "Pilot flat pricing evolving toward dynamic pricing based on intent strength, commission potential, market demand and qualification status. Starting with flat pricing let the team validate broker willingness-to-pay before introducing the complexity of a fully dynamic model.",
  },
];

function StepFlow() {
  return (
    <ol
      role="list"
      className="flex w-full flex-col items-center gap-6 xl:flex-row xl:justify-center xl:gap-2"
    >
      {STEPS.map((step, i) => (
        <li key={step} className="flex flex-col items-center xl:flex-row">
          <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-zinc-800 px-4 py-2 xl:px-6 xl:py-2.5">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                i === 0 ? "bg-amber-400" : "bg-amber-400/70"
              }`}
            />
            {step}
          </div>

          {i !== STEPS.length - 1 && (
            <>
              <div
                aria-hidden="true"
                className="mx-2 hidden items-center xl:flex"
              >
                <div className="h-px w-8 bg-gradient-to-r from-white/10 to-amber-400/20" />
                <svg
                  className="h-3 w-3 text-amber-400/70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </div>

              <div
                aria-hidden="true"
                className="mt-4 flex flex-col items-center xl:hidden"
              >
                <div className="h-6 w-px bg-gradient-to-b from-white/10 to-amber-400/20" />
                <svg
                  className="mt-1 h-3 w-3 text-amber-400/70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14M6 13l6 6 6-6"
                  />
                </svg>
              </div>
            </>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function SellerLeads() {
  return (
    <CaseStudyPage
      id="seller-leads"
      title="Designing the Seller Leads Marketplace"
      subtitle="How a single validation experiment turned a “someday” idea into a structured seller acquisition system across Bayut and dubizzle."
    >
      <CaseSection title="The Problem">
        <Prose>
          Management had a general sense that a dedicated seller acquisition
          flow was something we’d eventually need to build, but it wasn’t
          validated or prioritized. Every inbound WhatsApp conversation with an
          agent looked identical from a data standpoint — there was no way to
          tell whether the person reaching out wanted to sell, buy, or invest.
          Seller intent was almost certainly buried in that traffic, but it was
          invisible.
        </Prose>
      </CaseSection>

      <CaseSection title="The Hypothesis">
        <Prose>
          The underlying assumption was that seller intent already existed
          within the platform’s inbound demand, but we had no reliable way to
          identify or quantify it. If we could capture that intent at the point
          of interaction, we could determine whether seller demand was large and
          consistent enough to justify building a dedicated acquisition system.
          The goal was not to build the full product immediately. It was to
          reduce the uncertainty first.
        </Prose>
      </CaseSection>

      <CaseSection title="The Experiment: Intent Capture">
        <Prose>
          Rather than committing to a full seller product before knowing if the
          demand was real, we ran a lightweight experiment called{" "}
          <span className="text-white">Intent Capture</span>: an additional
          field added to every WhatsApp lead generated by agents on the
          platform, simply asking why the user was reaching out — to sell/lease,
          buy, or invest.
        </Prose>
        <Prose>
          The majority of respondents selected sell/lease. That result was the
          signal the business needed — it confirmed seller intent was large
          enough and consistent enough to justify a dedicated acquisition
          system, and it’s what accelerated the Seller Leads program from a
          future idea into an active build.
        </Prose>
      </CaseSection>

      <CaseSection title="The Decision">
        <Prose>
          Rather than committing to a dedicated seller acquisition journey
          upfront, we chose to validate the underlying demand through an
          existing, high volume channel.
        </Prose>
        <Prose>
          The Intent Capture experiment required a small change to an existing
          WhatsApp lead flow, allowing us to observe seller intent without
          introducing a new acquisition journey or significant operational
          complexity.
        </Prose>
        <Prose>
          The result gave the team enough evidence to move from asking whether
          seller demand existed to designing how that demand could become a
          structured marketplace supply system.
        </Prose>
      </CaseSection>

      <section className="mb-8">
        <SectionTitle>The System</SectionTitle>
        <DiagramCard>
          <StepFlow />
        </DiagramCard>
        <DetailCards cards={PILLARS} />
      </section>

      <CaseSection title="How the System Behaves">
        <Prose>
          The system was designed as a progression rather than a single feature.
        </Prose>
        <Prose>
          Intent Capture identified potential seller demand. Qualification
          converted that signal into usable supply. The marketplace then
          distributed qualified leads to brokers, while the unlock model
          controlled access and created a mechanism for monetization.
        </Prose>
        <Prose>
          As more qualified supply entered the system, marketplace liquidity
          increased. This created a feedback loop between seller demand,
          available inventory and broker participation.
        </Prose>
        <Prose>
          The important shift was from capturing an isolated signal to building
          a system that could continuously convert that signal into marketplace
          supply.
        </Prose>
      </CaseSection>

      <OutcomeCard stat="8K+">
        Seller leads generated in the first four months of the program. It
        validated the Intent Capture hypothesis at scale and turned one
        experiment into an ongoing supply engine for the marketplace.
      </OutcomeCard>
    </CaseStudyPage>
  );
}
