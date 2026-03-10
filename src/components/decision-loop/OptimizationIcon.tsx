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
      className={`flex flex-col items-center gap-2 transition-all duration-700 ${
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: delay }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <defs>
          <linearGradient
            id="ring-grad-right"
            x1="0%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#fabf26" stopOpacity="0" />
            <stop offset="100%" stopColor="#fabf26" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="ring-grad-left" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fabf26" stopOpacity="0" />
            <stop offset="100%" stopColor="#fabf26" stopOpacity="1" />
          </linearGradient>

          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ghost ring */}
        <circle
          cx="20"
          cy="20"
          r="14"
          stroke="#fabf26"
          strokeOpacity="0.12"
          strokeWidth="1.5"
        />

        {/* right arc */}
        <path
          d="M20 34 A14 14 0 0 1 20 6"
          stroke="url(#ring-grad-right)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* top arrow */}
        <path
          d="M17 9 L20 3 L23 9 Z"
          fill="#fabf26"
          filter="url(#glow)"
          transform="rotate(90, 20, 6)"
        />

        {/* left arc */}
        <path
          d="M20 6 A14 14 0 0 1 20 34"
          stroke="url(#ring-grad-left)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* bottom arrow */}
        <path
          d="M17 31 L20 37 L23 31 Z"
          fill="#fabf26"
          filter="url(#glow)"
          transform="rotate(90, 20, 34)"
        />

        {/* center animation */}
        {active ? (
          <>
            <circle
              cx="20"
              cy="20"
              r="5"
              stroke="#fabf26"
              strokeWidth="1"
              fill="none"
              strokeOpacity="0.4"
            >
              <animate
                attributeName="r"
                values="3;6;3"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                values="0.6;0;0.6"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="20" cy="20" r="3" fill="#fabf26">
              <animate
                attributeName="opacity"
                values="1;0.5;1"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
          </>
        ) : (
          <circle cx="20" cy="20" r="3" fill="#fabf26" />
        )}
      </svg>

      {/* LABEL */}
      <span className="text-sm text-zinc-300">Optimization</span>
    </div>
  );
}