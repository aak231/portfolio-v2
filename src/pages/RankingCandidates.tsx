import type { ReactNode } from "react";
import {
  CaseNav,
  CaseSection,
  CaseStudyPage,
  ChartPanel,
  DetailCards,
  DiagramCard,
  IllustrationNote,
  MyRoleCard,
  OutcomeCard,
  Pill,
  Prose,
  QaList,
  SectionTitle,
  TldrBlock,
  TradeOffs,
} from "@/components/CaseStudy";
import { CHART_AMBER, CHART_GREY } from "@/components/chartColors";

const KEYWORD_BARS = [
  { label: "Candidate 1", value: 42, valueLabel: "3 words" },
  { label: "Candidate 2", value: 86, valueLabel: "7 words" },
  { label: "Candidate 3", value: 28, valueLabel: "2 words" },
  { label: "Candidate 4", value: 62, valueLabel: "5 words" },
];

const MEANING_BARS = [
  { label: "Candidate 4", value: 94, valueLabel: "Score 94" },
  { label: "Candidate 1", value: 81, valueLabel: "Score 81" },
  { label: "Candidate 2", value: 63, valueLabel: "Score 63" },
  { label: "Candidate 3", value: 38, valueLabel: "Score 38" },
];

const RANKED_BARS = [
  { score: 94, opacity: 1 },
  { score: 81, opacity: 1 },
  { score: 63, opacity: 0.8 },
  { score: 38, opacity: 0.55 },
];

const WHY_ROWS = [
  { text: "Role matches the brief", matched: true },
  { text: "Skills found in the CV", matched: true },
  { text: "Seniority is a step below", matched: false },
];

const GET_RIGHT = [
  {
    q: "Does a CV match the role, not just the words?",
    a: "The score compares what the person has done (roles, skills and years) with what the job asks for, so the same experience written in different words still counts.",
  },
  {
    q: "Can a recruiter see why it ranked there?",
    a: "Every score comes with the reasons behind it: whether the role matches, which skills were found and how seniority compares.",
  },
  {
    q: "What does it cost to run at scale?",
    a: "Scoring focuses on the parts of a CV that carry signal and only runs when it is needed, so cost grows with real usage.",
  },
  {
    q: "What happens when it is slow or wrong?",
    a: "Applicants still load in the order they applied. The recruiter never meets an empty screen, and the reasons make a wrong score easy to spot and ignore.",
  },
];

const DETAIL_CARDS = [
  {
    title: "How the Score Works",
    desc: "Each applicant gets a relevance score from comparing their CV with the job description. The ATS sorts by it, highest first, so the likeliest fits are at the top instead of buried in the list.",
  },
  {
    title: "Explainability",
    desc: "A score alone is hard to trust. Each ranking comes with the key points behind it, so a recruiter can see why one candidate sits above another and still make their own call.",
  },
  {
    title: "Cost",
    desc: "Reading whole CVs costs more than matching keywords. The design keeps that in check by scoring only what is needed and focusing on the parts of a CV that carry signal, so cost grows in step with real usage.",
  },
  {
    title: "Reliability",
    desc: "Ranking sits inside a recruiter’s daily workflow, so it cannot be the thing that breaks it. If scoring is slow or unavailable, applicants still load, and the recruiter never meets an empty screen.",
  },
];

const TRADE_OFFS = [
  {
    choice: "Reasons with every score.",
    detail:
      "More to build and display, but a score recruiters cannot question is a score they will not trust.",
  },
  {
    choice: "A fallback before anything else.",
    detail: "Ranking can fail without breaking the recruiter’s day.",
  },
  {
    choice: "Scoring what matters in a CV.",
    detail:
      "Less than reading every word, but it keeps cost in step with use.",
  },
];

const FALLBACK_TEXT = "Fallback: applicants load in the order they applied";

function ComparisonPanel({
  title,
  subtitle,
  tone,
  bars,
}: {
  title: string;
  subtitle: string;
  tone: "muted" | "amber";
  bars: { label: string; value: number; valueLabel: string }[];
}) {
  return (
    <ChartPanel title={title} subtitle={subtitle}>
      <ol className="mt-5 space-y-3">
        {bars.map((bar) => (
          <li
            key={bar.label}
            className="grid grid-cols-[4.5rem_minmax(0,1fr)_3.75rem] items-center gap-3 text-xs"
          >
            <span className="text-caption">{bar.label}</span>
            <span
              aria-hidden="true"
              className="h-2 overflow-hidden rounded-full bg-white/5"
            >
              <span
                className="block h-full rounded-full"
                style={{
                  width: `${bar.value}%`,
                  backgroundColor: tone === "amber" ? CHART_AMBER : CHART_GREY,
                }}
              />
            </span>
            <span
              className={`text-right tabular-nums ${
                tone === "amber" ? "text-gold" : "text-caption"
              }`}
            >
              {bar.valueLabel}
            </span>
          </li>
        ))}
      </ol>
    </ChartPanel>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-white/[0.04] px-2 py-0.5 text-xs text-body">
      {children}
    </span>
  );
}

const nodeBase = "min-w-0 rounded-xl border border-line bg-white/[0.03] p-3 lg:p-4";

function JobCard() {
  return (
    <div className={nodeBase}>
      <h3 className="text-sm font-semibold text-white">Job Description</h3>
      <p className="mt-1 text-xs text-caption">The recruiter’s own words</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <Chip>Role</Chip>
        <Chip>Skills</Chip>
        <Chip>Seniority</Chip>
      </div>
    </div>
  );
}

function CvCard() {
  return (
    <div className={nodeBase}>
      <h3 className="text-sm font-semibold text-white">Candidate CV</h3>
      <p className="mt-1 text-xs text-caption">
        Every applicant, read the same way
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <Chip>Roles</Chip>
        <Chip>Skills</Chip>
        <Chip>Years</Chip>
      </div>
    </div>
  );
}

function MatchCard() {
  return (
    <div className="min-w-0 rounded-xl border border-gold/60 bg-gold/[0.06] p-3 text-center shadow-[0_0_24px_rgba(251,191,36,0.12)] lg:p-4">
      <h3 className="text-sm font-semibold text-gold">Match CV to Job</h3>
      <p className="mt-1 text-xs text-body">
        Compare CV key points with job requirements, not words
      </p>
    </div>
  );
}

function RankedCard() {
  return (
    <div className={nodeBase}>
      <h3 className="text-sm font-semibold text-white">Ranked in the ATS</h3>
      <p className="mt-1 text-xs text-caption">Ranked by relevance score</p>
      <ul className="mt-3 space-y-1.5">
        {RANKED_BARS.map((bar) => (
          <li
            key={bar.score}
            className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-2"
          >
            <span className="text-xs tabular-nums text-body">{bar.score}</span>
            <span
              aria-hidden="true"
              className="h-1.5 overflow-hidden rounded-full bg-white/5"
            >
              <span
                className="block h-full rounded-full"
                style={{
                  width: `${bar.score}%`,
                  backgroundColor: CHART_AMBER,
                  opacity: bar.opacity,
                }}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhyCard() {
  return (
    <div className={nodeBase}>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <h3 className="text-sm font-semibold text-white">Why This Score</h3>
        <Pill>Trust Check</Pill>
      </div>
      <ul className="mt-3 space-y-1.5">
        {WHY_ROWS.map((row) => (
          <li
            key={row.text}
            className="flex items-center gap-2 text-xs text-body"
          >
            <span
              aria-hidden="true"
              className={`h-2 w-2 shrink-0 rounded-full ${
                row.matched ? "bg-gold" : "border border-gold/70"
              }`}
            />
            <span className="sr-only">
              {row.matched ? "Matched: " : "Partial: "}
            </span>
            {row.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DownArrow() {
  return (
    <div aria-hidden="true" className="flex flex-col items-center lg:hidden">
      <span className="h-4 w-px bg-gold/70" />
      <span className="h-0 w-0 border-x-[4px] border-t-[7px] border-x-transparent border-t-gold/70" />
    </div>
  );
}

/** Spacer that keeps a card exactly centred in its grid row while it fits its own content. */
const spacer = "hidden lg:block lg:min-h-4 lg:flex-1";

/** Fluid connector between two cards; endpoints are cell edges, so they stay exact. */
function Connector({
  d,
  gold = false,
  className,
}: {
  d: string;
  gold?: boolean;
  className: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`pointer-events-none hidden h-full w-full overflow-visible fill-none lg:block ${className}`}
    >
      <path
        d={d}
        className={gold ? "stroke-gold/70" : "stroke-white/30"}
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Tip({
  gold = false,
  className,
}: {
  gold?: boolean;
  className: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute hidden h-0 w-0 border-y-[4px] border-l-[7px] border-y-transparent lg:block ${
        gold ? "border-l-gold/70" : "border-l-white/30"
      } ${className}`}
    />
  );
}

function FlowDiagram() {
  return (
    <figure aria-describedby="flow-desc">
      <p id="flow-desc" className="sr-only">
        The job description and each candidate CV go into Match CV to Job. It
        produces a ranked list in the ATS and a Why This Score explanation with
        a trust check. If scoring is slow or unavailable, applicants skip
        scoring and still load in the order they applied.
      </p>

      <div className="mx-auto flex max-w-xl flex-col gap-3 lg:grid lg:max-w-4xl lg:grid-cols-[minmax(0,.5fr)_minmax(0,.5fr)_4rem_minmax(0,1fr)_4rem_minmax(0,.6fr)_minmax(0,.6fr)] lg:grid-rows-[1.75rem_1fr_1fr] lg:gap-0">
        {/* Fallback lane (desktop): dashed gold route above everything else */}
        <div
          aria-hidden="true"
          className="relative hidden lg:col-span-5 lg:col-start-2 lg:row-start-1 lg:block"
        >
          <div className="dash-gold-h absolute inset-x-0 bottom-0" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 whitespace-nowrap rounded-full border border-gold bg-card px-3 py-1 text-xs text-gold">
            {FALLBACK_TEXT}
          </span>
        </div>

        {/* Job Description */}
        <div className="flex flex-col lg:col-span-2 lg:col-start-1 lg:row-start-3">
          <div className={spacer} />
          <JobCard />
          <div className={spacer} />
        </div>

        {/* Candidate CV (stub starts the fallback route) */}
        <div className="flex flex-col lg:col-span-2 lg:col-start-1 lg:row-start-2">
          <div className={`${spacer} relative`}>
            <div className="dash-gold-v absolute inset-y-0 left-1/2 -translate-x-1/2" />
          </div>
          <CvCard />
          <div className={spacer} />
        </div>

        <DownArrow />

        {/* Match */}
        <div className="lg:col-start-4 lg:row-span-2 lg:row-start-2 lg:self-center">
          <MatchCard />
        </div>

        <DownArrow />

        {/* Ranked (stub ends the fallback route) */}
        <div className="flex flex-col gap-3 lg:col-span-2 lg:col-start-6 lg:row-start-2 lg:gap-0">
          <div className={`${spacer} relative`}>
            <div className="dash-gold-v absolute inset-y-0 left-1/2 -translate-x-1/2" />
            <span className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[4px] border-t-[7px] border-x-transparent border-t-gold" />
          </div>
          <RankedCard />
          <div className={spacer} />
          <p className="rounded-xl border border-dashed border-gold/70 px-4 py-3 text-sm text-gold lg:hidden">
            {FALLBACK_TEXT}
          </p>
        </div>

        {/* Why This Score */}
        <div className="flex flex-col lg:col-span-2 lg:col-start-6 lg:row-start-3">
          <div className={spacer} />
          <WhyCard />
          <div className={spacer} />
        </div>

        {/* Connectors between the card columns */}
        <div className="relative hidden lg:col-start-3 lg:row-start-2 lg:block">
          <Connector d="M0 50 C50 50 50 100 100 100" className="absolute inset-0" />
          <Tip className="bottom-0 right-0 translate-y-1/2" />
        </div>
        <div className="relative hidden lg:col-start-3 lg:row-start-3 lg:block">
          <Connector d="M0 50 C50 50 50 0 100 0" className="absolute inset-0" />
          <Tip className="right-0 top-0 -translate-y-1/2" />
        </div>
        <div className="relative hidden lg:col-start-5 lg:row-start-2 lg:block">
          <Connector d="M0 100 C50 100 50 50 100 50" gold className="absolute inset-0" />
          <Tip gold className="right-0 top-1/2 -translate-y-1/2" />
        </div>
        <div className="relative hidden lg:col-start-5 lg:row-start-3 lg:block">
          <Connector d="M0 0 C50 0 50 50 100 50" gold className="absolute inset-0" />
          <Tip gold className="right-0 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <figcaption className="mt-6 text-sm text-caption">
        Illustration only, not real scores.
      </figcaption>
    </figure>
  );
}

export default function RankingCandidates() {
  return (
    <CaseStudyPage
      id="ranking-candidates"
      title="Ranking Candidates by Meaning"
      subtitle="How we moved recruiter search from keyword matching to a relevance score that reads CVs against the job description, and kept recruiters’ trust in the results."
    >
      <TldrBlock
        problem="Keyword matching buried strong applicants and rewarded people who stuffed their CVs with the right words."
        decision="Score every applicant on how well their CV matches the job, and show the reasons behind each score."
        result="Applicants ranked by relevance inside the ATS, used by 2,000+ recruiting agencies."
      />

      <CaseSection title="The Problem">
        <Prose>
          Recruiters on a B2B hiring platform often face hundreds of applicants
          for a single role. Keyword search treats a CV as a bag of words: a
          strong candidate who writes “customer success” instead of “account
          management” gets missed, and a weak one who stuffs in the right words
          ranks high.
        </Prose>
        <Prose>
          The result was a list that looked complete but took real time to work
          through. Recruiters had to open CV after CV to find the people worth
          calling.
        </Prose>
      </CaseSection>

      <CaseSection title="The Approach">
        <Prose>
          The principle was that a CV should be read the way a recruiter reads
          it: for what the person has done, not which words they used. The
          system pulls the key points out of each CV, compares them with the
          requirements in the recruiter’s job description, and gives every
          applicant a relevance score. The ATS then lists applicants from
          highest to lowest.
        </Prose>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <ComparisonPanel
            title="Keyword Matching"
            subtitle="Listed as they applied, scored by words found"
            tone="muted"
            bars={KEYWORD_BARS}
          />
          <ComparisonPanel
            title="Matching by Meaning"
            subtitle="Ranked by relevance score, highest first"
            tone="amber"
            bars={MEANING_BARS}
          />
        </div>

        <div className="mt-6 border-t border-line pt-5">
          <p className="text-body">
            <span className="font-medium text-white">
              Relevancy Index Score:
            </span>{" "}
            one number per applicant showing how closely their CV matches the
            job description. Higher means a closer match, and the ATS sorts on
            it.
          </p>
          <IllustrationNote>Illustration only, not real scores.</IllustrationNote>
        </div>
      </CaseSection>

      <section>
        <SectionTitle>How It Works</SectionTitle>
        <div className="space-y-5">
          <DiagramCard>
            <FlowDiagram />
            <QaList
              title="What the Ranking Had to Get Right"
              items={GET_RIGHT}
            />
          </DiagramCard>
          <DetailCards cards={DETAIL_CARDS} />
        </div>
      </section>

      <TradeOffs items={TRADE_OFFS} />

      <OutcomeCard stat="2,000+">
        Recruiting agencies now see applicants ranked by how well they fit the
        job, with the reasons beside each score, inside the ATS they already
        use.
      </OutcomeCard>

      <MyRoleCard>
        <Prose>
          I owned the feature as product manager for dubizzle Jobs: the problem,
          how the score should work for recruiters, and how it should behave
          when it fails.
        </Prose>
      </MyRoleCard>

      <CaseNav id="ranking-candidates" />
    </CaseStudyPage>
  );
}
