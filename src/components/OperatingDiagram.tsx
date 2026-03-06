import UserBehaviorIcon from "./decision-loop/UserBehaviorIcon";
import TrackingIcon from "./decision-loop/TrackingIcon";
import InsightsIcon from "./decision-loop/InsightsIcon";
import DecisionIcon from "./decision-loop/DecisionIcon";
import OptimizationIcon from "./decision-loop/OptimizationIcon";

export default function OperatingDiagram() {
  return (
    <section className="relative z-10 py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Decision Loop
          </h2>

          <p className="text-zinc-500 mt-4 max-w-2xl">
            Product growth is a continuous feedback loop from behavior to
            insight to optimized execution.
          </p>
        </div>

        {/* System Diagram */}
        <div
          className="
            relative
            bg-zinc-900/60
            border border-white/5
            rounded-2xl
            backdrop-blur-sm
            transition-all duration-300
            py-14
            px-10
            hover:border-white/50
          "
        >
          {/* Connection lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-1/4 h-px bg-white/10" />
            <div className="absolute top-1/2 right-1/4 w-1/4 h-px bg-white/10" />

            <div className="absolute left-1/2 top-1/4 h-1/4 w-px bg-white/10" />
            <div className="absolute left-1/2 bottom-1/4 h-1/4 w-px bg-white/10" />
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-3 grid-rows-3 gap-y-14 gap-x-8 place-items-center">
            {/* Insights */}
            <div className="col-start-1 row-start-2">
              <UserBehaviorIcon delay="0s" />
            </div>

            <div className="col-start-2 row-start-2">
              <TrackingIcon delay="0.35s" />
            </div>

            <div className="col-start-2 row-start-1">
              <InsightsIcon delay="0.7s" />
            </div>

            <div className="col-start-3 row-start-2">
              <DecisionIcon delay="1.05s" />
            </div>

            <div className="col-start-2 row-start-3">
              <OptimizationIcon delay="1.4s" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
