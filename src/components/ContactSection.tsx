import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import Section from "@/components/home/Section";
import { ButtonLink } from "@/components/ui/links";
import { CONTACT_COPY as CONTENT_CONTACT } from "@/content/home";
import { CONTACT } from "@/data/site";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Section id="contact" className="pb-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          {CONTENT_CONTACT.heading}
        </h2>
        <p className="mx-auto mt-4 text-body">{CONTENT_CONTACT.subline}</p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <div className="card-surface flex items-center justify-between gap-3 py-1.5 pl-5 pr-1.5">
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-medium text-white underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold"
            >
              {CONTACT.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email address"}
              className="flex h-11 w-11 items-center justify-center rounded-xl text-gold transition-colors hover:bg-gold/10"
            >
              {copied ? (
                <Check aria-hidden="true" className="h-4 w-4" />
              ) : (
                <Copy aria-hidden="true" className="h-4 w-4" />
              )}
            </button>
          </div>

          <ButtonLink href={CONTACT.linkedin} external variant="secondary">
            LinkedIn
          </ButtonLink>
        </div>
        <p role="status" className="sr-only">
          {copied ? "Email address copied to clipboard" : ""}
        </p>
      </div>
    </Section>
  );
}
