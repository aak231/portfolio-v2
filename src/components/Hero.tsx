import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-start pt-[20vh] px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl mx-auto">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-white tracking-tight leading-tight">
            Ahad Khan
          </h1>

          <h2 className="text-xl text-white/80 uppercase tracking-widest">
            Product × Data × Systems
          </h2>

          <p className="text-lg text-white/70 max-w-xl leading-relaxed">
            I build and scale product systems powered by data. From growth
            analytics to infrastructure decisions, I operate where product
            thinking meets technical execution.
          </p>

          <button className="border border-amber-400 text-amber-400 px-6 py-3 rounded-2xl backdrop-blur-md hover:bg-amber-400 hover:text-black transition-all duration-300">
            View Selected Work
          </button>
        </div>

        {/* RIGHT SIDE */}
        <HeroImage />
      </div>
    </section>
  );
}
