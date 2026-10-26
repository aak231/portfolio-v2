import { DiagramCard } from "@/components/CaseStudy";
import Section from "@/components/home/Section";
import Stepper from "@/components/Stepper";
import { TextLink } from "@/components/ui/links";
import { LOOP } from "@/content/home";

export default function LoopInPractice() {
  return (
    <Section>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">
        {LOOP.title}
      </h2>
      <p className="mt-3 text-body">{LOOP.subtitle}</p>

      <div className="mt-8">
        <DiagramCard>
          <Stepper label="How one question became a product" steps={LOOP.steps} />
        </DiagramCard>
      </div>

      <p className="mt-6">
        <TextLink to="/systems-in-practice/seller-leads">{LOOP.cta}</TextLink>
      </p>
    </Section>
  );
}
