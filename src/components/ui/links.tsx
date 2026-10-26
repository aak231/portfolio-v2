import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const iconClass =
  "h-4 w-4 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5";

type Target = { to: string } | { href: string; external?: boolean };

export function ButtonLink({
  children,
  variant = "primary",
  icon,
  className = "",
  ...target
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode | null;
  className?: string;
} & Target) {
  const external = "href" in target && Boolean(target.external);
  const cls = `group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
    variant === "primary"
      ? "bg-gold text-page hover:bg-gold/90"
      : "border border-gold/60 text-white hover:border-gold hover:bg-gold/10"
  } ${className}`;

  const iconNode =
    icon === undefined ? (
      external ? (
        <ExternalLink aria-hidden="true" className={iconClass} />
      ) : (
        <ArrowRight aria-hidden="true" className={iconClass} />
      )
    ) : (
      icon
    );

  const content = (
    <>
      {children}
      {iconNode}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </>
  );

  if ("to" in target) {
    return (
      <Link to={target.to} viewTransition className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <a
      href={target.href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
    >
      {content}
    </a>
  );
}

export function TextLink({
  to,
  children,
  stretched = false,
  srLabel,
  className = "",
}: {
  to: string;
  children: ReactNode;
  stretched?: boolean;
  srLabel?: string;
  className?: string;
}) {
  return (
    <Link
      to={to}
      viewTransition
      className={`group inline-flex items-center gap-1.5 font-medium text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold ${
        stretched
          ? "after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          : ""
      } ${className}`}
    >
      {children}
      {srLabel && <span className="sr-only"> {srLabel}</span>}
      <ArrowRight aria-hidden="true" className={iconClass} />
    </Link>
  );
}

export function LinkCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`card-surface card-link relative has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold ${className}`}
    >
      {children}
    </article>
  );
}

export function InlineLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      viewTransition
      className="font-medium text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold"
    >
      {children}
    </Link>
  );
}
