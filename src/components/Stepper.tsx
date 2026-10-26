import type { CSSProperties } from "react";
import { Pill } from "@/components/CaseStudy";

export type Step = {
  title: string;
  caption?: string;
  tag?: string;
};

export default function Stepper({
  steps,
  label,
}: {
  steps: Step[];
  label: string;
}) {
  return (
    <div
      className="relative"
      style={{ "--n": steps.length } as CSSProperties}
    >
      <div
        aria-hidden="true"
        className="absolute bottom-5 left-5 top-5 w-px bg-line lg:bottom-auto lg:left-[calc(50%/var(--n))] lg:right-[calc(50%/var(--n))] lg:top-5 lg:h-px lg:w-auto"
      />
      <ol
        aria-label={label}
        className="relative lg:grid lg:[grid-template-columns:repeat(var(--n),minmax(0,1fr))] lg:gap-4"
      >
        {steps.map((step) => {
          const active = Boolean(step.tag);
          return (
            <li
              key={step.title}
              className="relative flex gap-5 pb-8 last:pb-0 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center"
            >
              <div
                aria-hidden="true"
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-card ${
                  active
                    ? "border-gold shadow-[0_0_14px_rgba(251,191,36,0.3)] ring-4 ring-gold/15"
                    : "border-line"
                }`}
              >
                <span
                  className={`block rounded-full bg-gold ${
                    active ? "h-3 w-3" : "h-2 w-2"
                  }`}
                />
              </div>

              <div className="min-w-0 pt-1.5 lg:mt-4 lg:pt-0">
                {step.tag && <Pill className="mb-2">{step.tag}</Pill>}
                <h3
                  className={`font-semibold ${
                    active ? "text-gold" : "text-white"
                  }`}
                >
                  {step.title}
                </h3>
                {step.caption && (
                  <p className="mt-1.5 text-sm text-body">{step.caption}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
