interface Props {
  delay?: string;
}

export default function DecisionIcon({ delay = "0s" }: Props) {
  return (
    <div
      className="flex flex-col items-center gap-3 node-animate"
      style={{ animationDelay: delay }}
    >
      <svg width="46" height="46" viewBox="0 0 46 46">
        <circle cx="23" cy="12" r="3" fill="#fbbf24" />

        <line
          x1="23"
          y1="15"
          x2="12"
          y2="30"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.5"
        />

        <line
          x1="23"
          y1="15"
          x2="34"
          y2="30"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.5"
        />

        <circle cx="12" cy="34" r="3" fill="#fbbf24" />
        <circle cx="34" cy="34" r="3" fill="#fbbf24" />
      </svg>

      <span className="text-sm text-zinc-300">Decision</span>
    </div>
  );
}
