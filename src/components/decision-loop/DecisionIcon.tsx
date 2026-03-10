interface Props {
  delay?: string;
  active?: boolean;
}

export default function DecisionIcon({ delay = "0s", active = false }: Props) {
  return (
    <div
      className={`flex flex-col items-center gap-2 ${
        active ? "node-animate" : "opacity-0"
      }`}
      style={{ animationDelay: delay }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="block"
        aria-hidden="true"
      >
        {/* Three options, centered in 40x40 with more padding between rows */}
        <line
          x1="14"
          y1="10"
          x2="34"
          y2="10"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.5"
        />
        <line
          x1="14"
          y1="20"
          x2="34"
          y2="20"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.5"
        />
        <line
          x1="14"
          y1="30"
          x2="34"
          y2="30"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.5"
        />

        <circle
          cx="9"
          cy="10"
          r="3.5"
          fill="none"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="1.5"
        />
        <circle
          cx="9"
          cy="20"
          r="3.5"
          fill="#fbbf24"
          stroke="#fbbf24"
          strokeWidth="1.5"
        />
        <circle
          cx="9"
          cy="30"
          r="3.5"
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
        />
      </svg>

      <span className="text-sm text-zinc-300 text-center">Decision</span>
    </div>
  );
}
