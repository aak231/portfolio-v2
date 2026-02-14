import HeroImage from "./HeroImage";

// export default function Hero() {
//   return (
//     <section className="relative z-10 min-h-screen flex items-start pt-[20vh] px-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl mx-auto">
//         {/* LEFT SIDE */}
//         <div className="space-y-6">
//           <h1 className="text-6xl font-bold text-white tracking-tight leading-tight">
//             Ahad Khan
//           </h1>

//           <h2 className="text-xl text-white/80 uppercase tracking-widest">
//             Product × Data × Systems
//           </h2>

//           <p className="text-lg text-white/70 max-w-xl leading-relaxed">
//             I build and scale product systems powered by data. From growth
//             analytics to infrastructure decisions, I operate where product
//             thinking meets technical execution.
//           </p>

//           <button className="border border-amber-400 text-amber-400 px-6 py-3 rounded-2xl backdrop-blur-md hover:bg-amber-400 hover:text-black transition-all duration-300">
//             View Selected Work
//           </button>
//         </div>

//         {/* RIGHT SIDE */}
//         <HeroImage />
//       </div>
//     </section>
//   );
// }
export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-start pt-[18vh] px-6 md:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* GLASS CONTAINER */}
        {/* <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.4)] p-8 md:p-14"> */}
        <div
          className="relative rounded-3xl 
             bg-white/[0.01]
             backdrop-blur-2xl
             border border-white/[0.12]
             ring-1 ring-white/10
             p-10 md:p-16"
        >
          {/* subtle inner glow */}
          {/* <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" /> */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none
             bg-gradient-to-br
             from-white/[0.15]
             via-white/[0.03]
             to-transparent
             opacity-30"
          />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              <h1 className="text-6xl font-bold text-white tracking-tight">
                Ahad Khan
              </h1>

              <h2 className="text-sm md:text-base text-white/70 uppercase tracking-[0.25em]">
                Product × Data × Systems
              </h2>

              <p className="text-lg text-white/70 max-w-xl leading-relaxed">
                I build and scale product systems powered by data. From growth
                analytics to infrastructure decisions, I operate where product
                thinking meets technical execution.
              </p>

              <button className="border border-amber-400/70 text-amber-400 px-6 py-3 rounded-2xl backdrop-blur-md hover:bg-amber-400 hover:text-black transition-all duration-300">
                View Selected Work
              </button>
            </div>

            {/* RIGHT SIDE */}
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}