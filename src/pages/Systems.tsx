export default function Systems() {
  return (
    <div className="relative z-10 py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h1 className="text-4xl font-semibold text-white mb-4">
            Systems in Practice
          </h1>

          <p className="text-zinc-400 max-w-2xl">
            Deep architectural breakdowns of marketplace systems, monetization
            engines and operational frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-zinc-900/60 border border-white/5 rounded-2xl p-8 backdrop-blur-sm hover:border-white/10 transition-all">
            <h3 className="text-xl text-white mb-3">
              Seller Leads Marketplace
            </h3>

            <p className="text-zinc-400 text-sm mb-6">
              Designing a structured seller supply engine across Bayut and
              dubizzle.
            </p>

            <a
              href="/systems-in-practice/seller-leads"
              className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white"
            >
              Explore →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
