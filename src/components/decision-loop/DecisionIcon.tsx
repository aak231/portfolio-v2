interface Props {
  delay?: string;
  active?: boolean;
}

export default function DecisionIcon({ delay = "0s", active = false }: Props) {
  return (
    <div
      className={`flex flex-col items-center gap-3 ${
        active ? "node-animate" : "opacity-0"
      }`}
      style={{ animationDelay: delay }}
    >
      <svg width="46" height="46" viewBox="0 0 46 46">
        {/* Options list */}
        <line
          x1="18"
          y1="14"
          x2="34"
          y2="14"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.2"
        />
        <line
          x1="18"
          y1="23"
          x2="34"
          y2="23"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.2"
        />
        <line
          x1="18"
          y1="32"
          x2="34"
          y2="32"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.2"
        />

        {/* Hollow choices */}
        <circle
          cx="13"
          cy="14"
          r="3"
          fill="none"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="1.3"
        />
        <circle
          cx="13"
          cy="23"
          r="3"
          fill="#fbbf24"
          stroke="#fbbf24"
          strokeWidth="1.3"
        />
        <circle
          cx="13"
          cy="32"
          r="3"
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.3"
        />
      </svg>

      <span className="text-sm text-zinc-300">Decision</span>
    </div>
  );
}
