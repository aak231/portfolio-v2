interface ImpactCardProps {
  metric: string;
  title: string;
  description: string;
  contributions: string[];
}

export default function ImpactCard({
  metric,
  title,
  description,
  contributions,
}: ImpactCardProps) {
  return (
    <div className="card-surface p-6">
      <div className="text-3xl font-semibold text-white">{metric}</div>

      <div className="text-lg text-zinc-300 mt-2">{title}</div>

      <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
        {description}
      </p>

      <div className="mt-6 space-y-2">
        {contributions.map((item, index) => (
          <div key={index} className="text-xs text-zinc-500">
            • {item}
          </div>
        ))}
      </div>
    </div>
  );
}
