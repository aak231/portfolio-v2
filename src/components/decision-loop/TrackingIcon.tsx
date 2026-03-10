interface Props {
  delay?: string;
  active?: boolean;
}
export default function TrackingIcon({ delay = "0s", active = false }: Props) {
  return (
    <div
      className={`flex flex-col items-center gap-2 transition-all duration-700 ${
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: delay }}
    >
      <svg width="40" height="40" viewBox="0 0 36 36">
        {/* center tracking node */}
        <circle
          cx="12"
          cy="18"
          r="5"
          stroke="#fabf26"
          strokeWidth="2"
          fill="none"
        />

        {/* connection lines */}
        <line
          x1="17"
          y1="18"
          x2="26"
          y2="8"
          stroke="#fabf26"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        <line
          x1="17"
          y1="18"
          x2="26"
          y2="18"
          stroke="#fabf26"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        <line
          x1="17"
          y1="18"
          x2="26"
          y2="28"
          stroke="#fabf26"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* event nodes */}
        <circle cx="28" cy="8" r="3" fill="#fabf26" />
        <circle cx="28" cy="18" r="3" fill="#fabf26" />
        <circle cx="28" cy="28" r="3" fill="#fabf26" />

        {/* pulse animation */}
        {active && (
          <circle
            cx="12"
            cy="18"
            r="5"
            stroke="#fabf26"
            strokeWidth="1.4"
            fill="none"
          >
            <animate
              attributeName="r"
              values="5;8;5"
              dur="1.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0;1"
              dur="1.6s"
              repeatCount="indefinite"
            />
          </circle>
        )}
      </svg>

      <span className="text-sm text-zinc-300">Tracking</span>
    </div>
  );
}