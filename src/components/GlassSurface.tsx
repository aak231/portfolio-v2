import type { ReactNode } from "react";

interface GlassSurfaceProps {
  children: ReactNode;
  className?: string;
}

export default function GlassSurface({
  children,
  className = "",
}: GlassSurfaceProps) {
  return (
    <div
      className={`
        relative
        rounded-3xl
        bg-zinc-800/40
        backdrop-blur-lg
        backdrop-saturate-150
        border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        overflow-hidden
        ${className}
      `}
    >
      <div
        className="
          pointer-events-none
          absolute -inset-20
          bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]
          opacity-40
          animate-pulse
                "
      />
      <div
        className="
    pointer-events-none
    absolute top-0 left-0 right-0
    h-[1px]
    bg-white/20
    opacity-40
  "
      />
      {/* top light reflection */}
      {/* <div
        className="
          pointer-events-none
          absolute inset-0 rounded-3xl
          bg-gradient-to-br
          from-white/40
          via-white/10
          to-transparent
          opacity-30
        "
      /> */}
      <div
        className="
    pointer-events-none
    absolute inset-0 rounded-3xl
    opacity-[0.02]
    mix-blend-overlay
    bg-[url('/noise.png')]
  "
      />
      {/* subtle bottom dark depth */}
      <div
        className="
          pointer-events-none
          absolute inset-0 rounded-3xl
          bg-gradient-to-t
          from-black/20
          via-transparent
          to-transparent
          opacity-40
        "
      />
      <div
        className="
    pointer-events-none
    absolute inset-0 rounded-3xl
    shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-20px_40px_rgba(0,0,0,0.4)]
  "
      />
      {/* subtle inner edge highlight */}
      <div
        className="
          pointer-events-none
          absolute inset-[1px] rounded-3xl
          ring-1 ring-white/10
        "
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
