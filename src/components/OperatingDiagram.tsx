export default function OperatingDiagram() {
  const steps = [
    "User Behavior",
    "Tracking",
    "Insights",
    "Decision",
    "Optimization",
  ];

  return (
    <section className="relative z-10 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Decision Loop
          </h2>
          <p className="text-zinc-500 mt-4 max-w-2xl">
            From user behavior to optimization, product growth is a continuous
            feedback system.
          </p>
        </div>
        <div
          className="
            bg-zinc-900/60
            border border-white/5
            rounded-2xl
            px-6 py-10
            md:px-16 md:py-12
            backdrop-blur-sm
            transition-all duration-300
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
                <div
                  className="
                    px-6 py-2.5
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
                    {/* Desktop connector */}
                    <div className="hidden md:block w-10 h-px bg-white/10 mx-3" />

                    {/* Mobile connector */}
                    <div className="md:hidden h-6 w-px bg-white/10 mt-4" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
