import { useState } from "react";

export default function ContactSection() {
  const email = "ahadaak231@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/ahadtheengineer/";

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section className="relative z-10 py-24 px-6 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Let’s Build Systems That Compound
        </h2>

        <p className="text-zinc-500 mt-6 leading-relaxed">
          If you’re building thoughtful, high impact products and care about
          systems that scale, I’m always open to meaningful conversations.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          {/* EMAIL */}
          <div
            className="
              bg-zinc-900/60
              border border-white/5
              backdrop-blur-sm
              rounded-2xl
              px-6 py-4
              flex items-center justify-between
              min-w-[280px]
              transition-all duration-300
              hover:border-amber-400/40
              hover:shadow-[0_0_20px_rgba(251,191,36,0.08)]
            "
          >
            <a
              href={`mailto:${email}`}
              className="text-white text-sm tracking-wide"
            >
              {email}
            </a>

            <button
              onClick={() => handleCopy(email, "email")}
              className="text-amber-400 hover:text-white transition-colors"
            >
              {copied === "email" ? (
                /* Check Icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                /* Copy Icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15V5a2 2 0 012-2h10" />
                </svg>
              )}
            </button>
          </div>

          {/* LINKEDIN */}
          <div
            className="
              bg-zinc-900/60
              border border-white/5
              backdrop-blur-sm
              rounded-2xl
              px-6 py-4
              flex items-center justify-between
              min-w-[280px]
              transition-all duration-300
              hover:border-amber-400/40
              hover:shadow-[0_0_20px_rgba(251,191,36,0.08)]
            "
          >
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm tracking-wide"
            >
              LinkedIn
            </a>

            <button
              onClick={() => handleCopy(linkedinUrl, "linkedin")}
              className="text-amber-400 hover:text-white transition-colors"
            >
              {copied === "linkedin" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15V5a2 2 0 012-2h10" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
