interface Pillar {
  title: string;
  desc: string;
}

interface FeaturedSystemProps {
  label: string;
  title: string;
  description: string;
  steps: string[];
  pillars: Pillar[];
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function FeaturedSystem({
  label,
  title,
  description,
  steps,
  pillars,
  ctaText,
  onCtaClick,
}: FeaturedSystemProps) {
  return (
    // <section className="relative z-10 py-20 md:py-24 px-6 md:px-8">
    <section className="relative z-10 pt-14 pb-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="section-label">{label}</div>

          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            {title}
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Mini Diagram */}
        <div
          className="
            card-surface
            px-6 py-10
            md:px-16 md:py-12
            mb-16
  "
        >
          <div
            className="
      flex
      flex-col
      items-center
      md:flex-row
      md:justify-center
      md:items-center
      gap-6
      md:gap-2
      w-full
    "
          >
            {steps.map((step, i) => (
              <div
                key={step}
                className="
          flex
          flex-col
          items-center
          md:flex-row
        "
              >
                {/* Step Pill */}
                <div
                  className="
            px-4 py-2 md:px-6 md:py-2.5
            bg-zinc-800
            rounded-full
            border border-white/10
            whitespace-nowrap
            flex items-center gap-2
          "
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      i === 0 ? "bg-amber-400" : "bg-amber-400/70"
                    }`}
                  />
                  {step}
                </div>

                {i !== steps.length - 1 && (
                  <>
                    {/* Desktop Arrow */}
                    <div className="hidden md:flex items-center mx-3">
                      <div className="w-8 h-px bg-gradient-to-r from-white/10 to-amber-400/20" />
                      <svg
                        className="w-3 h-3 text-amber-400/70"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14M13 6l6 6-6 6"
                        />
                      </svg>
                    </div>

                    {/* Mobile Arrow */}
                    <div className="md:hidden flex flex-col items-center mt-4">
                      <div className="h-6 w-px bg-gradient-to-r from-white/10 to-amber-400/20" />
                      <svg
                        className="w-3 h-3 text-amber-400/70 mt-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 5v14M6 13l6 6 6-6"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="card-surface p-6">
              <h3 className="text-lg text-white font-medium">{pillar.title}</h3>

              <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {ctaText && (
          <div className="flex justify-center mt-16">
            <button
              onClick={onCtaClick}
              className="text-sm uppercase tracking-widest text-zinc-500 hover:text-white transition-colors duration-300"
            >
              {ctaText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
