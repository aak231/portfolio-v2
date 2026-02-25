import { useNavigate } from "react-router-dom";
import HeroImage from "./HeroImage";
import GlassSurface from "@/components/GlassSurface";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative z-10 min-h-[85vh] flex items-start pt-[12vh] pb-12 md:pb-16 px-6 md:px-8">
      <div className="w-full max-w-6xl mx-auto flex justify-center">
        <GlassSurface className="max-w-5xl p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-7xl font-bold text-white tracking-tight">
                Ahad Khan
              </h1>

              <h2 className="text-sm md:text-base text-white/70 uppercase tracking-[0.28em]">
                Product × Data × Systems
              </h2>

              <p className="text-lg text-white/70 max-w-xl leading-relaxed">
                I design and scale product systems powered by data. From growth
                funnels to marketplace infrastructure, I operate at the
                intersection of product, data and execution.
              </p>

              <button
                onClick={() => navigate("/systems-in-practice")}
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
                View Systems in Practice
              </button>
            </div>

            <HeroImage />
          </div>
        </GlassSurface>
      </div>
    </section>
  );
}
