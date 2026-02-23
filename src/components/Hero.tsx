import HeroImage from "./HeroImage";
import GlassSurface from "@/components/GlassSurface";

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-start pt-[18vh] px-6 md:px-8">
      <div className="w-full max-w-6xl mx-auto flex justify-center">
        <GlassSurface
          width="100%"
          height="auto"
          className="max-w-5xl rounded-3xl p-10 md:p-16"
          displace={0.6}
          distortionScale={-220}
          redOffset={0}
          greenOffset={8}
          blueOffset={18}
          brightness={65}
          opacity={0.92}
          blur={14}
          mixBlendMode="screen"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl font-semibold text-white tracking-tight">
                Ahad Khan
              </h1>

              <h2 className="text-sm md:text-base text-white/70 uppercase tracking-[0.28em]">
                Product × Data × Systems
              </h2>

              <p className="text-lg text-white/70 max-w-xl leading-relaxed">
                I build and scale product systems powered by data. From growth
                analytics to infrastructure decisions, I operate where product
                thinking meets technical execution.
              </p>

              <button
                className="
                border border-amber-400/70 
                text-amber-400 
                px-6 py-3 
                rounded-2xl 
                hover:bg-amber-400 
                hover:text-black 
                transition-all duration-300
              "
              >
                View Selected Work
              </button>
            </div>

            <HeroImage />
          </div>
        </GlassSurface>
      </div>
    </section>
  );
}
