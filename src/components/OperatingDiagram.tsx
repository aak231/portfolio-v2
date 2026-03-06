import { useEffect, useRef, useState } from "react";
import UserBehaviorIcon from "./decision-loop/UserBehaviorIcon";
import TrackingIcon from "./decision-loop/TrackingIcon";
import InsightsIcon from "./decision-loop/InsightsIcon";
import DecisionIcon from "./decision-loop/DecisionIcon";
import OptimizationIcon from "./decision-loop/OptimizationIcon";

export default function OperatingDiagram() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-16 md:py-20 px-6 md:px-8"
    >
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
  py-20
  px-10
  hover:border-white/50
"
        >
          <div className="relative h-[420px] w-full">
            {/* LOOP RING */}
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              width="520"
              height="320"
              viewBox="0 0 520 320"
              aria-hidden="true"
            >
              {/* Solid white track (same as motion path) */}
              <ellipse
                cx="260"
                cy="170"
                rx="165"
                ry="95"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="1.6"
                fill="none"
              />

              {/* Five nodes moving *on* the ellipse (animateMotion follows path = no orbit) */}
              {(() => {
                const ellipsePath =
                  "M 425 170 A 165 95 0 0 1 260 265 A 165 95 0 0 1 95 170 A 165 95 0 0 1 260 75 A 165 95 0 0 1 425 170";
                const delays = ["0s", "2.4s", "4.8s", "7.2s", "9.6s"];
                return (
                  isInView &&
                  delays.map((begin, i) => (
                    <g key={i} className="decision-loop-node-wrap">
                      <animateMotion
                        path={ellipsePath}
                        dur="12s"
                        repeatCount="indefinite"
                        rotate="0"
                        begin={begin}
                      />
                      <circle cx="0" cy="0" r="5" className="decision-loop-node" />
                    </g>
                  ))
                );
              })()}
            </svg>

            {/* USER BEHAVIOR */}
            <div className="absolute left-[22%] top-1/2 -translate-y-1/2">
              <UserBehaviorIcon delay="0s" active={isInView} />
            </div>

            {/* TRACKING */}
            <div className="absolute left-1/2 top-[8%] -translate-x-1/2">
              <TrackingIcon delay="0.4s" active={isInView} />
            </div>

            {/* INSIGHTS */}
            <div className="absolute right-[22%] top-1/2 -translate-y-1/2">
              <InsightsIcon delay="0.8s" active={isInView} />
            </div>

            {/* DECISION */}
            <div className="absolute left-[64%] bottom-[8%] -translate-x-1/2">
              <DecisionIcon delay="1.2s" active={isInView} />
            </div>

            {/* OPTIMIZATION */}
            <div className="absolute left-[36%] bottom-[8%] -translate-x-1/2">
              <OptimizationIcon delay="1.6s" active={isInView} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
