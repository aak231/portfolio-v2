interface Props {
  delay?: string;
  active?: boolean;
}

export default function TrackingIcon({ delay = "0s", active = false }: Props) {
  return (
    <div
      className={`flex flex-col items-center gap-3 ${
        active ? "node-animate" : "opacity-0"
      }`}
      style={{ animationDelay: delay }}
    >
      <svg width="46" height="46" viewBox="0 0 46 46">
        {/* Outer frame */}
        <rect
          x="10"
          y="12"
          width="26"
          height="20"
          rx="3"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Event stream dots */}
        <circle cx="14" cy="18" r="1.5" fill="#fbbf24" />
        <circle cx="19" cy="22" r="1.5" fill="#fbbf24" />
        <circle cx="24" cy="19" r="1.5" fill="#fbbf24" />
        <circle cx="30" cy="24" r="1.5" fill="#fbbf24" />

        {/* Path connecting events */}
        <polyline
          points="14,18 19,22 24,19 30,24"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Timeline baseline */}
        <line
          x1="12"
          y1="28"
          x2="32"
          y2="28"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1"
        />
      </svg>

      <span className="text-sm text-zinc-300">Tracking</span>
    </div>
  );
}
