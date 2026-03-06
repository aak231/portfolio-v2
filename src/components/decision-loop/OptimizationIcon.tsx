interface Props {
  delay?: string;
  active?: boolean;
}

export default function OptimizationIcon({
  delay = "0s",
  active = false,
}: Props) {
  return (
    <div
      className={`flex flex-col items-center gap-3 ${
        active ? "node-animate" : "opacity-0"
      }`}
      style={{ animationDelay: delay }}
    >
      <svg width="46" height="46" viewBox="0 0 46 46">
        {/* Optimization orbit */}
        <circle
          cx="23"
          cy="23"
          r="11"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.4"
        />

        {/* Iterative improvement steps */}
        <circle cx="17" cy="25" r="1.4" fill="#fbbf24" />
        <circle cx="21" cy="22" r="1.6" fill="#fbbf24" />
        <circle cx="25" cy="19" r="1.8" fill="#fbbf24" />

        {/* Final uplift arrow */}
        <polyline
          points="25,19 30,15 34,15"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon points="34,12 38,15 34,18" fill="#fbbf24" />
      </svg>

      <span className="text-sm text-zinc-300">Optimization</span>
    </div>
  );
}
