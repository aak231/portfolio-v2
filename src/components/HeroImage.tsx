import { useRef } from "react";
import me from "../assets/me.jpeg";

const canTilt = () =>
  window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)")
    .matches;

export default function HeroImage({
  className = "max-w-md",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card || !canTilt()) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative aspect-4/5 w-full overflow-hidden rounded-3xl transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <img
        src={me}
        alt="Ahad Khan"
        width={900}
        height={1200}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
