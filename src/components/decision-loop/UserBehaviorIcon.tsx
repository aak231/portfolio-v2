interface Props {
  delay?: string;
}

export default function UserBehaviorIcon({ delay = "0s" }: Props) {
  return (
    <div
      className="flex flex-col items-center gap-3 node-animate"
      style={{ animationDelay: delay }}
    >
      <svg width="46" height="46" viewBox="0 0 46 46">
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
      </svg>

      <span className="text-sm text-zinc-300">User Behavior</span>
    </div>
  );
}
