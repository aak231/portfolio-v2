import { CONTACT } from "@/data/site";

const linkClass =
  "underline decoration-line underline-offset-4 transition-colors hover:text-white hover:decoration-gold";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line px-6 py-8 text-sm text-caption md:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-2">
        <span>© Ahad Khan</span>
        <span aria-hidden="true">·</span>
        <a href={`mailto:${CONTACT.email}`} className={linkClass}>
          Email
        </a>
        <span aria-hidden="true">·</span>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener"
          className={linkClass}
        >
          LinkedIn
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </footer>
  );
}
