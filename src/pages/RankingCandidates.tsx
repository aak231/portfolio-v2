import type { ReactNode } from "react";
import {
  CaseSection,
  CaseStudyPage,
  ChartPanel,
  DetailCards,
  DiagramCard,
  IllustrationNote,
  NumberBadge,
  OutcomeCard,
  Pill,
  Prose,
  QuestionChips,
  SectionTitle,
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

const QUESTIONS = [
  { n: 1, text: "Does a CV match the role, not just the words?" },
  { n: 2, text: "Can a recruiter see why it ranked there?" },
  { n: 3, text: "What does it cost to run at scale?" },
  { n: 4, text: "What happens when it is slow or wrong?" },
];

const DETAIL_CARDS = [
  {
    title: "How the Score Works",
    desc: "Each applicant gets a relevancy index score from comparing their CV with the job description. The ATS sorts by it, highest first, so the likeliest fits are at the top instead of buried in the list.",
  },
  {
    title: "Explainability",
    desc: "A score alone is hard to trust. Each ranking comes with the pointers behind it, so a recruiter can see why one candidate sits above another and still make their own call.",
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

// Percent coordinates inside the diagram grid (lg+). Keep in sync with the
// grid template on <FlowDiagram> (columns 24/9/22/9/28/8, rows 3/3/1).
const GEO = {
  jobY: 21.43,
  cvY: 64.29,
  matchInTop: 38.5,
  matchInBottom: 47.2,
  leftR: 24,
  matchL: 33,
  matchR: 55,
  rightL: 64,
  rightR: 92,
  loopX: 96,
  loopStartX: 12,
  laneTop: 85.71,
  laneY: 92.86,
};

function curve(x0: number, y0: number, x1: number, y1: number) {
  const mx = (x0 + x1) / 2;
  return `M${x0} ${y0} C${mx} ${y0} ${mx} ${y1} ${x1} ${y1}`;
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-white/5 bg-white/[0.04] px-2 py-0.5 text-[11px] text-zinc-300">
      {children}
    </span>
  );
}

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
            <span className="text-zinc-400">{bar.label}</span>
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
                tone === "amber" ? "text-amber-400" : "text-zinc-400"
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

function FlowNode({
  title,
  subtitle,
  chips,
  highlight = false,
  className = "",
  children,
}: {
  title: string;
  subtitle: string;
  chips?: string[];
  highlight?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`relative min-w-0 rounded-xl border p-3 lg:p-4 ${
        highlight
          ? "border-amber-400/60 bg-amber-400/[0.06] text-center shadow-[0_0_24px_rgba(251,191,36,0.12)]"
          : "border-white/10 bg-white/[0.03]"
      } ${className}`}
    >
      <div
        className={`break-words text-sm font-medium ${
          highlight ? "text-amber-400" : "text-white"
        }`}
      >
        {title}
      </div>
      <div className="mt-1 text-xs leading-snug text-zinc-400">{subtitle}</div>
      {chips && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {chips.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </div>
      )}
      {children}
    </div>
  );
}

function DownArrow({ amber = false }: { amber?: boolean }) {
  return (
    <div aria-hidden="true" className="flex flex-col items-center lg:hidden">
      <span
        className={`h-4 w-px ${amber ? "bg-amber-400/70" : "bg-white/25"}`}
      />
      <span
        className={`h-0 w-0 border-x-[4px] border-t-[7px] border-x-transparent ${
          amber ? "border-t-amber-400/70" : "border-t-white/30"
        }`}
      />
    </div>
  );
}

function Arrowhead({
  x,
  y,
  dir,
  amber = false,
}: {
  x: number;
  y: number;
  dir: "right" | "left";
  amber?: boolean;
}) {
  const shape =
    dir === "right"
      ? `-translate-x-full border-y-[4px] border-y-transparent border-l-[7px] ${
          amber ? "border-l-amber-400/70" : "border-l-white/30"
        }`
      : `border-y-[4px] border-y-transparent border-r-[7px] ${
          amber ? "border-r-amber-400/70" : "border-r-white/30"
        }`;
  return (
    <span
      aria-hidden="true"
      className={`absolute hidden h-0 w-0 -translate-y-1/2 lg:block ${shape}`}
      style={{ left: `${x}%`, top: `${y}%` }}
    />
  );
}

function RankedCard({ className = "" }: { className?: string }) {
  return (
    <FlowNode
      title="Ranked in the ATS"
      subtitle="Ranked by relevancy index score"
      className={className}
    >
      <ul className="mt-3 space-y-1.5">
        {RANKED_BARS.map((bar) => (
          <li
            key={bar.score}
            className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-2"
          >
            <span className="text-[11px] tabular-nums text-zinc-300">
              {bar.score}
            </span>
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
      <div className="mt-2 text-[11px] text-zinc-400">
        Illustration only, not real scores
      </div>
    </FlowNode>
  );
}

function WhyCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative min-w-0 rounded-xl border border-white/10 bg-white/[0.03] p-3 lg:p-4 ${className}`}
    >
      <NumberBadge n={2} className="absolute -left-2 -top-2" />
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="text-sm font-medium text-white">Why This Score</span>
        <Pill>Trust Check</Pill>
      </div>
      <ul className="mt-3 space-y-1.5">
        {WHY_ROWS.map((row) => (
          <li
            key={row.text}
            className="flex items-center gap-2 text-xs text-zinc-300"
          >
            <span
              aria-hidden="true"
              className={`h-2 w-2 shrink-0 rounded-full ${
                row.matched ? "bg-amber-400" : "border border-amber-400/70"
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

function FlowDiagram() {
  const g = GEO;
  return (
    <figure aria-describedby="flow-desc">
      <p id="flow-desc" className="sr-only">
        The job description and each candidate CV go into Match by meaning. It
        produces a ranked list in the ATS and a Why this score explanation with
        a trust check. If scoring is slow or unavailable, applicants skip
        scoring and still load in the order they applied.
      </p>

      <div className="relative mx-auto flex max-w-xl flex-col gap-3 lg:grid lg:max-w-4xl lg:grid-cols-[minmax(0,24fr)_minmax(0,9fr)_minmax(0,22fr)_minmax(0,9fr)_minmax(0,28fr)_minmax(0,8fr)] lg:grid-rows-[3fr_3fr_1fr] lg:gap-0">
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible fill-none lg:block"
        >
          <path
            d={curve(g.leftR, g.jobY, g.matchL, g.matchInTop)}
            className="stroke-white/25"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={curve(g.leftR, g.cvY, g.matchL, g.matchInBottom)}
            className="stroke-white/25"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={curve(g.matchR, g.matchInTop, g.rightL, g.jobY)}
            className="stroke-amber-400/70"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={curve(g.matchR, g.matchInBottom, g.rightL, g.cvY)}
            className="stroke-amber-400/70"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={`M${g.loopStartX} ${g.laneTop} V${g.laneY} H${g.loopX} V${g.jobY} H${g.rightR}`}
            className="stroke-white/25"
            strokeWidth={1}
            strokeDasharray="4 4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <FlowNode
          title="Job Description"
          subtitle="The recruiter’s own words"
          chips={["Role", "Skills", "Seniority"]}
          className="lg:col-start-1 lg:row-start-1 lg:my-2"
        />

        <FlowNode
          title="Candidate CV"
          subtitle="Every applicant, read the same way"
          chips={["Roles", "Skills", "Years"]}
          className="lg:col-start-1 lg:row-start-2 lg:my-2"
        >
          <NumberBadge n={3} className="absolute -left-2 -top-2" />
        </FlowNode>

        <DownArrow />

        <FlowNode
          title="Match by Meaning"
          subtitle="Compare CV pointers with job requirements, not words"
          highlight
          className="lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:self-center"
        >
          <NumberBadge
            n={1}
            className="absolute -top-3 left-4 lg:left-1/2 lg:-translate-x-1/2"
          />
        </FlowNode>

        <DownArrow amber />

        <RankedCard className="lg:col-start-5 lg:row-start-1 lg:my-2" />
        <WhyCard className="lg:col-start-5 lg:row-start-2 lg:my-2" />

        <div className="relative rounded-xl border border-dashed border-white/20 px-4 py-3 text-center text-xs leading-snug text-zinc-400 lg:absolute lg:left-[54%] lg:top-[92.86%] lg:w-max lg:max-w-[60%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-none lg:border-0 lg:bg-[#121214] lg:px-3 lg:py-0">
          <NumberBadge n={4} className="absolute -left-2 -top-2 lg:hidden" />
          If scoring is slow or unavailable, applicants still load in the order
          they applied
        </div>

        <span
          className="absolute hidden -translate-x-1/2 -translate-y-1/2 lg:block"
          style={{ left: `${GEO.loopX}%`, top: "57%" }}
        >
          <NumberBadge n={4} />
        </span>

        <Arrowhead x={g.matchL} y={g.matchInTop} dir="right" />
        <Arrowhead x={g.matchL} y={g.matchInBottom} dir="right" />
        <Arrowhead x={g.rightL} y={g.jobY} dir="right" amber />
        <Arrowhead x={g.rightL} y={g.cvY} dir="right" amber />
        <Arrowhead x={g.rightR} y={g.jobY} dir="left" />
      </div>
    </figure>
  );
}

export default function RankingCandidates() {
  return (
    <CaseStudyPage
      id="ranking-candidates"
      title="Ranking Candidates by Meaning"
      subtitle="How we moved recruiter search from keyword matching to a relevancy index score that reads CVs against the job description, and kept recruiters’ trust in the results."
    >
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
          system pulls the key pointers out of each CV, compares them with the
          requirements in the recruiter’s job description, and gives every
          applicant a relevancy index score. The ATS then lists applicants from
          highest to lowest.
        </Prose>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ComparisonPanel
            title="Keyword Matching"
            subtitle="Listed as they applied, scored by words found"
            tone="muted"
            bars={KEYWORD_BARS}
          />
          <ComparisonPanel
            title="Matching by Meaning"
            subtitle="Ranked by relevancy index score, highest first"
            tone="amber"
            bars={MEANING_BARS}
          />
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-xs md:text-sm leading-relaxed text-zinc-400">
            <span className="font-medium text-white">
              Relevancy Index Score:
            </span>{" "}
            one number per applicant showing how closely their CV matches the
            job description. Higher means a closer match, and the ATS sorts on
            it.
          </p>
          <IllustrationNote>
            Illustration only, not real scores.
          </IllustrationNote>
        </div>
      </CaseSection>

      <section className="mb-8">
        <SectionTitle>How It Works</SectionTitle>
        <DiagramCard>
          <FlowDiagram />
          <QuestionChips
            title="What the Ranking Had to Answer"
            items={QUESTIONS}
          />
        </DiagramCard>
        <DetailCards cards={DETAIL_CARDS} />
      </section>

      <OutcomeCard stat="2,000+">
        Recruiting agencies helped to find relevant candidates by meaning, not
        keywords, with applicants ranked by relevance inside the ATS.
      </OutcomeCard>
    </CaseStudyPage>
  );
}
