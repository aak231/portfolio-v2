interface Props {
  delay?: string;
  active?: boolean;
}

export default function UserBehaviorIcon({
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
      <svg width="40" height="40" viewBox="0 0 46 46">
        <circle cx="23" cy="23" r="4" fill="#fbbf24" />
        <circle
          cx="23"
          cy="23"
          r="10"
          stroke="rgba(251,191,36,0.5)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="23"
          cy="23"
          r="16"
          stroke="rgba(251,191,36,0.25)"
          strokeWidth="1"
          fill="none"
        />
        {/* Lowkey ripple – half frequency (double duration) */}
        {active && (
          <>
            <circle cx="23" cy="23" r="10" fill="none" stroke="#fbbf24" strokeWidth="1.2">
              <animate attributeName="r" values="10;18;10" dur="4.4s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="4.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="23" cy="23" r="10" fill="none" stroke="#fbbf24" strokeWidth="1.2">
              <animate attributeName="r" values="10;18;10" dur="4.4s" repeatCount="indefinite" begin="2.2s" />
              <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="4.4s" repeatCount="indefinite" begin="2.2s" />
            </circle>
          </>
        )}
      </svg>

      <span className="text-sm text-zinc-300">User Behavior</span>
    </div>
  );
}
