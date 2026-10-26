import HeroImage from "@/components/HeroImage";
import Section from "@/components/home/Section";
import { ABOUT } from "@/content/home";

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-start gap-8 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-12">
        <div className="hidden md:block">
          <HeroImage className="max-w-56" />
        </div>
        <div>
          <h2 className="mb-5 text-3xl font-semibold text-white md:text-4xl">
            {ABOUT.title}
          </h2>
          <div className="space-y-4">
            {ABOUT.paragraphs.map((p) => (
              <p key={p} className="text-body">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
