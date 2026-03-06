interface Props {
  delay?: string;
}

export default function TrackingIcon({ delay = "0s" }: Props) {
  return (
    <div
      className="flex flex-col items-center gap-3 node-animate"
      style={{ animationDelay: delay }}
    >
      <svg width="46" height="46" viewBox="0 0 46 46">
        <circle cx="10" cy="23" r="3" fill="#fbbf24" />

        <line
          x1="13"
          y1="23"
          x2="33"
          y2="23"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.5"
        />

        <circle cx="36" cy="23" r="3" fill="#fbbf24" />
      </svg>

      <span className="text-sm text-zinc-300">Tracking</span>
    </div>
  );
}
