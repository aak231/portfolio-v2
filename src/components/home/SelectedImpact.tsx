import { ButtonLink, LinkCard, TextLink } from "@/components/ui/links";
import { ALSO, IMPACT } from "@/content/home";
import Section from "./Section";

export default function SelectedImpact() {
  return (
    <Section>
      <span className="section-label">Milestones</span>
      <h2 className="mb-8 text-3xl font-semibold text-white md:text-4xl">
        Selected Impact
      </h2>

      <div className="grid gap-5 md:grid-cols-3">
        {IMPACT.map((card) => (
          <LinkCard key={card.to} className="flex flex-col p-6">
            <p className="text-4xl font-semibold text-white">{card.metric}</p>
            <h3 className="mt-1 text-lg font-medium text-white">
              {card.label}
            </h3>
            <p className="mt-3 text-body">{card.text}</p>
            <p className="mt-4 text-sm text-caption">{card.role}</p>
            <div className="mt-auto pt-5">
              <TextLink to={card.to} stretched srLabel={card.srLabel}>
                Read the Case Study
              </TextLink>
            </div>
          </LinkCard>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-2 rounded-2xl border border-line px-5 py-4">
        <h3 className="text-sm font-medium text-white">Also</h3>
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {ALSO.map((item) => (
            <li key={item.metric} className="text-sm text-body">
              <span className="font-semibold text-white">{item.metric}</span>{" "}
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <ButtonLink to="/systems-in-practice" variant="secondary">
          See All Case Studies
        </ButtonLink>
      </div>
    </Section>
  );
}
