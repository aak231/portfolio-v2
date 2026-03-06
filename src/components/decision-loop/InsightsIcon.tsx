interface Props {
  delay?: string;
}

export default function InsightsIcon({ delay = "0s" }: Props) {
  return (
    <div
      className="flex flex-col items-center gap-3 node-animate"
      style={{ animationDelay: delay }}
    >
      <svg width="46" height="46" viewBox="0 0 46 46">
        <rect x="10" y="24" width="4" height="10" fill="#fbbf24" />

        <rect x="18" y="18" width="4" height="16" fill="#fbbf24" />

        <rect x="26" y="12" width="4" height="22" fill="#fbbf24" />
      </svg>

      <span className="text-sm text-zinc-300">Insights</span>
    </div>
  );
}
