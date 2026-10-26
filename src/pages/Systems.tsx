import { ListOrdered, Store, Tags } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Pill } from "@/components/CaseStudy";
import { LinkCard, TextLink } from "@/components/ui/links";
import { CASE_STUDIES, type CaseStudy } from "@/data/caseStudies";

const ICONS: Record<CaseStudy["icon"], typeof Store> = {
  store: Store,
  tags: Tags,
  list: ListOrdered,
};

export default function Systems() {
  return (
    <div className="relative z-10 px-6 pb-20 pt-28 md:px-8 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-semibold text-white md:text-5xl">
            Systems in Practice
          </h1>
          <p className="text-body">
            Case studies from building marketplaces and AI products at dubizzle
            Group: what we decided, what we traded off and what happened.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => {
            const Icon = ICONS[study.icon];
            return (
              <LinkCard key={study.id} className="flex flex-col p-6 md:p-7">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <BrandLogo brand={study.brand} className="-my-1" />
                </div>

                <Pill className="self-start">{study.tag}</Pill>
                <h2 className="mt-4 text-xl font-medium text-white">
                  {study.title}
                </h2>
                <p className="mt-3 text-body">{study.summary}</p>
                <p className="mt-4 text-sm font-medium text-white">
                  {study.metric}
                </p>

                <div className="mt-auto pt-6">
                  <TextLink to={study.to} stretched srLabel={study.title}>
                    Read the Case Study
                  </TextLink>
                </div>
              </LinkCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
