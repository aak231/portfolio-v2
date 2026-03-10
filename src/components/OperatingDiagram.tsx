import { useEffect, useRef, useState } from "react";
import UserBehaviorIcon from "./decision-loop/UserBehaviorIcon";
import TrackingIcon from "./decision-loop/TrackingIcon";
import InsightsIcon from "./decision-loop/InsightsIcon";
import DecisionIcon from "./decision-loop/DecisionIcon";
import OptimizationIcon from "./decision-loop/OptimizationIcon";

const ELLIPSE = { cx: 260, cy: 170, rx: 165, ry: 95 };
const NODE_COUNT = 5;
const LOOP_DURATION_MS = 12000;

function getNodePositionOnEllipse(nodeIndex: number, phase: number) {
  // phase 0..1; clockwise from right (0°) -> bottom -> left -> top -> right (positive angle = clockwise on screen)
  const angle = 2 * Math.PI * (nodeIndex / NODE_COUNT + phase);
  return {
    x: ELLIPSE.cx + ELLIPSE.rx * Math.cos(angle),
    y: ELLIPSE.cy + ELLIPSE.ry * Math.sin(angle),
  };
}

export default function OperatingDiagram() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [phase, setPhase] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

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
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // When in view, run animation so nodes move along ellipse; positions correct from frame 1
  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    startRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const newPhase = (elapsed / LOOP_DURATION_MS) % 1;
      setPhase(newPhase);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isInView]);

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

              {/* Five nodes on the ellipse: positions from JS so they're on the path from frame 1 */}
              {isInView &&
                Array.from({ length: NODE_COUNT }, (_, i) => {
                  const { x, y } = getNodePositionOnEllipse(i, phase);
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r={5}
                      className="decision-loop-node"
                    />
                  );
                })}
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
