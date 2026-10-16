import type { ReactNode } from "react";

interface FinzaCardProps {
  children: ReactNode;
  className?: string;
  /** "brand" adds a subtle accent-tinted border on hover. */
  variant?: "default" | "brand";
}

/**
 * Shared card primitive — same radius, border and shadow
 * for every Finza product.
 */
export function FinzaCard({ children, className = "", variant = "default" }: FinzaCardProps) {
  const variantClass =
    variant === "brand"
      ? "hover:border-finza-brand hover:shadow-[var(--finza-shadow-brand)]"
      : "hover:shadow-[var(--finza-shadow-lift)]";

  return (
    <div
      className={`finza-sheen finza-glow rounded-[var(--finza-radius)] border border-finza-line bg-finza-paper p-6 shadow-[var(--finza-shadow)] transition duration-300 hover:-translate-y-0.5 ${variantClass} ${className}`}
    >
      {children}
    </div>
  );
}

export function FinzaSection({
  id,
  children,
  className = "",
  tone = "paper",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "surface";
}) {
  const bg = tone === "surface" ? "bg-finza-surface" : "bg-finza-paper";
  return (
    <section id={id} className={`${bg} px-5 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
