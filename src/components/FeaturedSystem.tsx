import { DetailCards, DiagramCard } from "@/components/CaseStudy";
import Section from "@/components/home/Section";
import Stepper from "@/components/Stepper";
import { ButtonLink } from "@/components/ui/links";
import { FEATURED } from "@/content/home";

export default function FeaturedSystem() {
  return (
    <Section>
      <span className="section-label">{FEATURED.eyebrow}</span>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">
        {FEATURED.title}
      </h2>
      <p className="mt-3 text-body">{FEATURED.subtitle}</p>

      <div className="mt-8 space-y-5">
        <DiagramCard>
          <Stepper
            label="How the Seller Leads Marketplace works"
            steps={FEATURED.steps}
          />
        </DiagramCard>
        <DetailCards cards={FEATURED.cards} />
      </div>

      <div className="mt-8">
        <ButtonLink to="/systems-in-practice/seller-leads">
          {FEATURED.cta}
        </ButtonLink>
      </div>
    </Section>
  );
}
