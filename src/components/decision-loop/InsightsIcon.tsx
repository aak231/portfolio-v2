interface Props {
  delay?: string;
  active?: boolean;
}

export default function InsightsIcon({ delay = "0s", active = false }: Props) {
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
        viewBox="6 6 34 34"
        className="block"
        aria-hidden="true"
      >
        {/* Axes */}
        <line
          x1="12"
          y1="12"
          x2="12"
          y2="32"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1"
        />
        <line
          x1="12"
          y1="32"
          x2="40"
          y2="32"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1"
        />

        {/* Axis arrowheads */}
        <polyline
          points="10,14 12,12 14,14"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="38,30 40,32 38,34"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bars */}
        <rect x="14" y="24" width="4" height="8" fill="#fbbf24" />
        <rect x="20" y="20" width="4" height="12" fill="#fbbf24" />
        <rect x="26" y="16" width="4" height="16" fill="#fbbf24" />
        <rect x="32" y="10" width="4" height="22" fill="#fbbf24" />
      </svg>

      <span className="text-sm text-zinc-300 text-center">Insights</span>
    </div>
  );
}
