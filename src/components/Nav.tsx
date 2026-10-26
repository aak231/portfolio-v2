import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { RESUME_URL } from "@/data/site";

type NavItem = {
  label: string;
  to?: string;
  href?: string;
  active?: boolean;
};

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const items: NavItem[] = [
    {
      label: "Work",
      to: "/systems-in-practice",
      active: pathname.startsWith("/systems-in-practice"),
    },
    { label: "About", to: "/#about" },
    { label: "Contact", to: "/#contact" },
    ...(RESUME_URL ? [{ label: "Résumé", href: RESUME_URL }] : []),
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const linkClass = (active?: boolean) =>
    `block rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white ${
      active ? "text-white underline decoration-gold decoration-2 underline-offset-8" : "text-body"
    }`;

  const renderItem = (item: NavItem, mobile: boolean) => {
    const cls = mobile
      ? `${linkClass(item.active)} min-h-11 content-center`
      : linkClass(item.active);
    const close = () => setOpen(false);
    if (item.to) {
      return (
        <Link
          to={item.to}
          viewTransition={!item.to.includes("#")}
          onClick={close}
          className={cls}
          aria-current={item.active ? "page" : undefined}
        >
          {item.label}
        </Link>
      );
    }
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener"
        onClick={close}
        className={cls}
      >
        {item.label}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:px-8">
      <div
        ref={containerRef}
        className="relative mx-auto max-w-6xl"
        onBlur={(e) => {
          if (open && !containerRef.current?.contains(e.relatedTarget)) {
            setOpen(false);
          }
        }}
      >
        <nav
          aria-label="Primary"
          className="flex items-center justify-between rounded-full border border-line bg-card/90 px-4 py-2.5 backdrop-blur-md md:px-6"
        >
          <Link
            to="/"
            viewTransition
            aria-label="Ahad Khan, home"
            className="group"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/70 font-medium tracking-wide text-white shadow-[0_0_6px_rgba(251,191,36,0.15)] transition-shadow duration-300 group-hover:shadow-[0_0_14px_rgba(251,191,36,0.35)]">
              AK
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {items.map((item) => (
              <li key={item.label}>{renderItem(item, false)}</li>
            ))}
          </ul>

          <button
            ref={buttonRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/5 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </nav>

        <div
          id="mobile-menu"
          hidden={!open}
          className="mt-2 rounded-2xl border border-line bg-card p-2 md:hidden"
        >
          <ul>
            {items.map((item) => (
              <li key={item.label}>{renderItem(item, true)}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
