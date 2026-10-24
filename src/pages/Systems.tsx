import { Link } from "react-router-dom";
import SystemsField from "../animations/SystemsField";
import BrandLogo from "@/components/BrandLogo";
import { Pill } from "@/components/CaseStudy";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function Systems() {
  return (
    <>
      <SystemsField />
      <div className="relative z-10 py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h1 className="text-4xl font-semibold text-white mb-4">
              Systems in Practice
            </h1>

            <p className="text-zinc-400 max-w-2xl">
              Deep architectural breakdowns of marketplace systems, monetization
              engines and operational frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                className="card-surface relative flex flex-col p-8"
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h2 className="text-xl font-medium text-white">
                    {study.title}
                  </h2>
                  <BrandLogo brand={study.brand} className="-my-1" />
                </div>

                <p className="mb-6 text-sm text-zinc-400">
                  {study.description}
                </p>

                <div className="mt-auto flex flex-col items-start gap-4">
                  <Pill size="md">{study.tag}</Pill>
                  <Link
                    to={study.to}
                    viewTransition
                    aria-label={`Explore ${study.title}`}
                    className="text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-white after:absolute after:inset-0 after:content-['']"
                  >
                    Explore <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
