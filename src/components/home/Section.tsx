import type { ReactNode } from "react";

export default function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative z-10 scroll-mt-24 px-6 pt-12 md:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
