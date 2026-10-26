import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { ButtonLink, LinkCard } from "@/components/ui/links";
import { CONTACT } from "@/data/site";
import {
  getCaseStudy,
  getNeighbours,
  type CaseStudyId,
} from "@/data/caseStudies";

export function CaseStudyPage({
  id,
  title,
  subtitle,
  children,
}: {
  id: CaseStudyId;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  const study = getCaseStudy(id);
  return (
    <div className="relative z-10 px-6 pb-20 pt-28 md:px-8 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/systems-in-practice"
          viewTransition
          className="inline-flex items-center gap-2 text-sm font-medium text-caption underline decoration-line underline-offset-4 transition-colors hover:text-white hover:decoration-gold"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to Systems in Practice
        </Link>

        <header className="mb-12 mt-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="section-label !mb-0">
              Case Study · {study.tag}
            </span>
            <BrandLogo brand={study.brand} className="-my-2" />
          </div>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-body">{subtitle}</p>
        </header>

        <div className="space-y-12">{children}</div>
      </div>
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <p className="text-body [&:not(:first-child)]:mt-4">{children}</p>;
}

export function CaseSection({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`card-surface p-6 md:p-8 ${className}`}>
      <h2 className="mb-4 text-xl font-medium text-white">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="mb-5 text-xl font-medium text-white">{children}</h2>;
}

export function DiagramCard({ children }: { children: ReactNode }) {
  return <div className="card-surface px-6 py-8 md:p-10">{children}</div>;
}

export function DetailCards({
  cards,
}: {
  cards: { title: string; desc: ReactNode }[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {cards.map((card) => (
        <div key={card.title} className="card-surface p-6">
          <h3 className="text-lg font-medium text-white">{card.title}</h3>
          <p className="mt-3 text-body">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function OutcomeCard({
  stat,
  children,
  extra,
}: {
  stat: string;
  children: ReactNode;
  extra?: ReactNode;
}) {
  return (
    <section className="card-surface p-6 md:p-8">
      <h2 className="mb-4 text-xl font-medium text-white">The Outcome</h2>
      <div className="text-4xl font-semibold text-white md:text-5xl">
        {stat}
      </div>
      <p className="mt-3 text-body">{children}</p>
      {extra}
    </section>
  );
}

export function ChartPanel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white/[0.03] p-5 md:p-6">
      <h3 className="text-sm font-medium text-white">{title}</h3>
      {subtitle && <p className="mt-1 text-xs text-caption">{subtitle}</p>}
      {children}
    </div>
  );
}

export function IllustrationNote({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-sm text-caption">{children}</p>;
}

export function Pill({
  children,
  size = "sm",
  className = "",
}: {
  children: ReactNode;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-full border border-gold/50 text-gold ${
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs"
      } ${className}`}
    >
      {children}
    </span>
  );
}

export function TldrBlock({
  problem,
  decision,
  result,
}: {
  problem: string;
  decision: string;
  result: string;
}) {
  const rows = [
    ["Problem", problem],
    ["Decision", decision],
    ["Result", result],
  ] as const;
  return (
    <section aria-label="TL;DR" className="card-surface p-6 md:p-8">
      <dl className="space-y-4">
        {rows.map(([label, text]) => (
          <div
            key={label}
            className="gap-x-6 sm:grid sm:grid-cols-[6.5rem_minmax(0,1fr)]"
          >
            <dt className="font-semibold text-white">{label}</dt>
            <dd className="text-body">{text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function QaList({
  title,
  items,
}: {
  title: string;
  items: { q: string; a: string }[];
}) {
  return (
    <div className="mt-10 border-t border-line pt-8">
      <h3 className="mb-6 text-lg font-medium text-white">{title}</h3>
      <dl className="grid gap-x-10 gap-y-7 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.q}>
            <dt className="font-semibold text-white">{item.q}</dt>
            <dd className="mt-1.5 text-body">{item.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function TradeOffs({
  items,
}: {
  items: { choice: string; detail: string }[];
}) {
  return (
    <section className="card-surface p-6 md:p-8">
      <h2 className="mb-2 text-xl font-medium text-white">
        Trade-offs We Made
      </h2>
      <ul className="divide-y divide-line">
        {items.map((item) => (
          <li key={item.choice} className="py-4 last:pb-0">
            <strong className="block font-semibold text-white">
              {item.choice}
            </strong>
            <span className="mt-1 block text-body">{item.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Callout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      className="card-surface p-6 md:p-8"
      style={{
        borderLeftWidth: 3,
        borderLeftColor: "var(--color-gold)",
      }}
    >
      <h2 className="mb-4 text-xl font-medium text-white">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export function MyRoleCard({ children }: { children: ReactNode }) {
  return <CaseSection title="My Role">{children}</CaseSection>;
}

export function CaseNav({ id }: { id: CaseStudyId }) {
  const { prev, next } = getNeighbours(id);
  return (
    <nav aria-label="More case studies">
      <div className="grid gap-5 sm:grid-cols-2">
        {prev && (
          <LinkCard className="p-6">
            <p className="flex items-center gap-2 text-sm text-caption">
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Previous
            </p>
            <Link
              to={prev.to}
              viewTransition
              className="mt-2 block text-lg font-medium text-white underline decoration-line underline-offset-4 after:absolute after:inset-0 after:content-[''] hover:decoration-gold focus-visible:outline-none"
            >
              {prev.title}
            </Link>
          </LinkCard>
        )}
        <LinkCard className={`p-6 ${prev ? "" : "sm:col-start-2"}`}>
          <p className="flex items-center gap-2 text-sm text-caption">
            Next
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </p>
          <Link
            to={next.to}
            viewTransition
            className="mt-2 block text-lg font-medium text-white underline decoration-line underline-offset-4 after:absolute after:inset-0 after:content-[''] hover:decoration-gold focus-visible:outline-none"
          >
            {next.title}
          </Link>
        </LinkCard>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-white">Want to talk about this work?</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            href={`mailto:${CONTACT.email}`}
            icon={<Mail aria-hidden="true" className="h-4 w-4" />}
          >
            Email
          </ButtonLink>
          <ButtonLink href={CONTACT.linkedin} external variant="secondary">
            LinkedIn
          </ButtonLink>
        </div>
      </div>
    </nav>
  );
}

export function IntentQuestionCard() {
  const options = [
    { label: "Sell or lease", selected: true },
    { label: "Buy", selected: false },
    { label: "Invest", selected: false },
  ];
  return (
    <figure>
      <div className="card-surface p-5">
        <div className="rounded-2xl rounded-bl-md border border-line bg-white/[0.04] px-4 py-3 text-white">
          Why are you contacting this agent?
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {options.map((o) => (
            <li
              key={o.label}
              className={`rounded-full border px-4 py-1.5 text-sm ${
                o.selected
                  ? "border-gold bg-gold/10 text-white"
                  : "border-line bg-white/5 text-body"
              }`}
            >
              {o.label}
              {o.selected && (
                <span className="sr-only"> (selected in this example)</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-sm text-caption">
        Illustration of the field we added to every WhatsApp lead.
      </figcaption>
    </figure>
  );
}
