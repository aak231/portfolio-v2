interface Props {
  delay?: string;
}

export default function OptimizationIcon({ delay = "0s" }: Props) {
  return (
    <div
      className="flex flex-col items-center gap-3 node-animate"
      style={{ animationDelay: delay }}
    >
      <svg width="46" height="46" viewBox="0 0 46 46">
        <path
          d="M16 18a10 10 0 111 10"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="2"
        />

        <polygon points="16,16 20,18 16,20" fill="#fbbf24" />
      </svg>

      <span className="text-sm text-zinc-300">Optimization</span>
    </div>
  );
}
