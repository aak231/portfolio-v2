import Section from "@/components/home/Section";
import { TextLink } from "@/components/ui/links";
import { PRINCIPLES } from "@/content/home";

export default function OperatingModel() {
  return (
    <Section>
      <span className="section-label">Framework</span>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">
        {PRINCIPLES.title}
      </h2>
      <p className="mt-3 text-body">{PRINCIPLES.subtitle}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {PRINCIPLES.cards.map((card) => (
          <div key={card.title} className="card-surface flex flex-col p-6">
            <h3 className="text-lg font-medium text-white">{card.title}</h3>
            <p className="mt-3 text-body">{card.text}</p>
            <p className="mt-auto pt-5 text-sm text-caption">
              Seen in:{" "}
              <TextLink to={card.seen.to}>{card.seen.label}</TextLink>
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
