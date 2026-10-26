import DecisionField from "@/animations/DecisionField";
import GlassSurface from "@/components/GlassSurface";
import HeroImage from "@/components/HeroImage";
import { ButtonLink } from "@/components/ui/links";
import { HERO } from "@/content/home";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-12 pt-28 md:px-8 md:pb-16 md:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_35%,#19191b,transparent_70%)]"
      />
      <DecisionField />

      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <GlassSurface className="w-full max-w-5xl p-6 sm:p-10 md:p-14">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
                Ahad Khan
              </h1>

              <p className="text-sm uppercase tracking-[0.28em] text-body md:text-base">
                Product × Data × Systems
              </p>

              <p className="text-lg text-body">{HERO.intro}</p>
              <p className="text-sm text-caption">{HERO.note}</p>

              <div className="flex flex-wrap gap-3">
                <ButtonLink to="/systems-in-practice">
                  Read the Case Studies
                </ButtonLink>
                <ButtonLink
                  href="#contact"
                  variant="secondary"
                  icon={null}
                >
                  Get in Touch
                </ButtonLink>
              </div>
            </div>

            <HeroImage priority />
          </div>
        </GlassSurface>
      </div>
    </section>
  );
}
