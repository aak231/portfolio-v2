export default function OperatingModel() {
  return (
    <section className="relative z-10 py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Instrument Before Opinion",
              points: [
                "Define north star and guardrail metrics",
                "Design event taxonomy across funnels",
                "Establish behavioral baselines",
              ],
            },
            {
              title: "Optimize Systems, Not Screens",
              points: [
                "Diagnose structural drop offs",
                "Balance supply and demand dynamics",
                "Quantify marginal performance lift",
              ],
            },
            {
              title: "Evidence Driven Iteration",
              points: [
                "Cohort based analysis",
                "Experiment impact measurement",
                "Translate signals into roadmap direction",
              ],
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
            bg-zinc-900/40
            backdrop-blur-md
            border border-white/5
            rounded-2xl
            p-7
        "
            >
              <h3 className="text-white text-lg font-medium mb-5">
                {item.title}
              </h3>

              <ul className="space-y-3 text-sm text-zinc-400">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-amber-400">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
