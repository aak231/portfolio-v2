import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { getCaseStudy, type CaseStudy } from "@/data/caseStudies";

export function CaseStudyPage({
  id,
  title,
  subtitle,
  children,
}: {
  id: CaseStudy["id"];
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  const study = getCaseStudy(id);
  return (
    <div className="relative z-10 pt-28 pb-24 md:pt-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/systems-in-practice"
          viewTransition
          className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
        >
          ← Back to Systems in Practice
        </Link>

        <div className="mt-8 mb-16">
          <div className="mb-3 flex items-center gap-3">
            <span className="section-label !mb-0">
              Case Study · {study.tag}
            </span>
            <BrandLogo brand={study.brand} className="-my-2" />
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            {title}
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm md:text-base text-zinc-400 leading-relaxed [&:not(:first-child)]:mt-4">
      {children}
    </p>
  );
}

export function CaseSection({
  title,
  last = false,
  children,
}: {
  title: string;
  last?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={`card-surface p-8 ${last ? "" : "mb-8"}`}>
      <h2 className="text-xl text-white font-medium mb-4">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-xl text-white font-medium mb-6">{children}</h2>;
}

export function DiagramCard({ children }: { children: ReactNode }) {
  return <div className="card-surface px-6 py-8 md:p-10 mb-8">{children}</div>;
}

export function DetailCards({
  cards,
}: {
  cards: { title: string; desc: string }[];
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {cards.map((card) => (
        <div key={card.title} className="card-surface p-6">
          <h3 className="text-lg text-white font-medium">{card.title}</h3>
          <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export function OutcomeCard({
  stat,
  children,
}: {
  stat: string;
  children: ReactNode;
}) {
  return (
    <section className="card-surface p-8">
      <h2 className="text-xl text-white font-medium mb-4">The Outcome</h2>
      <div className="text-4xl md:text-5xl font-semibold text-white">
        {stat}
      </div>
      <p className="text-sm md:text-base text-zinc-400 leading-relaxed mt-3 max-w-3xl">
        {children}
      </p>
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
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 md:p-6">
      <h3 className="text-sm font-medium text-white">{title}</h3>
      {subtitle && <p className="mt-1 text-xs text-zinc-400">{subtitle}</p>}
      {children}
    </div>
  );
}

export function IllustrationNote({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-xs text-zinc-400">{children}</p>;
}

export function NumberBadge({
  n,
  size = "sm",
  className = "",
}: {
  n: number;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-amber-400 font-semibold leading-none text-zinc-950 ${
        size === "sm" ? "h-5 w-5 text-[11px]" : "h-6 w-6 text-xs"
      } ${className}`}
    >
      {n}
    </span>
  );
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
      className={`inline-block rounded-full border border-amber-400/50 text-amber-400 ${
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-0.5 text-[11px]"
      } ${className}`}
    >
      {children}
    </span>
  );
}

export function QuestionChips({
  title,
  items,
}: {
  title: string;
  items: { text: string; n?: number }[];
}) {
  return (
    <div className="mt-10 border-t border-white/10 pt-8">
      <h3 className="text-sm font-medium text-white">{title}</h3>
      <ol
        role="list"
        className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((item) => (
          <li
            key={item.text}
            className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 text-sm leading-relaxed text-zinc-200"
          >
            {item.n !== undefined && <NumberBadge n={item.n} size="md" />}
            <span className="min-w-0">{item.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
