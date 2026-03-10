interface Props {
  delay?: string;
  active?: boolean;
}

// export default function TrackingIcon({ delay = "0s", active = false }: Props) {
//   return (
//     <div
//       className={`flex flex-col items-center gap-3 ${
//         active ? "node-animate" : "opacity-0"
//       }`}
//       style={{ animationDelay: delay }}
//     >
//       <svg width="46" height="46" viewBox="0 0 46 46">
//         {/* Outer frame */}
//         <rect
//           x="10"
//           y="12"
//           width="26"
//           height="20"
//           rx="3"
//           stroke="rgba(255,255,255,0.45)"
//           strokeWidth="1.2"
//           fill="none"
//         />

//         {/* Event stream dots */}
//         <circle cx="14" cy="18" r="1.5" fill="#fbbf24" />
//         <circle cx="19" cy="22" r="1.5" fill="#fbbf24" />
//         <circle cx="24" cy="19" r="1.5" fill="#fbbf24" />
//         <circle cx="30" cy="24" r="1.5" fill="#fbbf24" />

//         {/* Path connecting events */}
//         <polyline
//           points="14,18 19,22 24,19 30,24"
//           fill="none"
//           stroke="#fbbf24"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />

//         {/* Timeline baseline */}
//         <line
//           x1="12"
//           y1="28"
//           x2="32"
//           y2="28"
//           stroke="rgba(255,255,255,0.25)"
//           strokeWidth="1"
//         />
//       </svg>

//       <span className="text-sm text-zinc-300">Tracking</span>
//     </div>
//   );
// }

export default function TrackingIcon({ delay = "0s", active = false }) {
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