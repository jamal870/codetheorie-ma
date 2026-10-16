import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { FinzaHeader } from "./FinzaHeader";
import { FinzaFooter } from "./FinzaFooter";

export interface GuideFaqItem {
  question: string;
  answer: string;
}

interface GuideLayoutProps {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
  cta?: { label: string; href: string; note?: string };
}

/** Shared shell for the editorial guides (/guides/*). */
export function GuideLayout({ eyebrow, title, intro, updated, children, cta }: GuideLayoutProps) {
  return (
    <div data-product="siya9a-pro" className="flex min-h-screen flex-col bg-finza-paper">
      <FinzaHeader
        product="siya9a-pro"
        logoUrl="/finza-logo.png"
        logoTo="/"
        navLinks={[
          { label: "Guides", to: "/guides" },
          { label: "Auto-écoles", to: "/" },
          { label: "Candidats", to: "/eleves" },
        ]}
        hideProductSwitcher
      />

      <main className="flex-1 px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <Link to="/guides" className="text-sm font-medium text-finza-ink-soft hover:text-finza-ink">
            ← Tous les guides
          </Link>

          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-finza-brand">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-finza-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-finza-ink-soft">{intro}</p>
          <p className="mt-3 text-xs text-finza-ink-soft">Mis à jour : {updated}</p>

          <div className="mt-10 space-y-10">{children}</div>

          {cta && (
            <div className="mt-14 rounded-[var(--finza-radius)] border border-finza-line bg-finza-surface p-6 shadow-[var(--finza-shadow)]">
              <a
                href={cta.href}
                className="inline-flex items-center justify-center rounded-[var(--finza-radius)] bg-finza-brand px-5 py-3 text-sm font-semibold text-finza-brand-ink"
              >
                {cta.label}
              </a>
              {cta.note && <p className="mt-3 text-sm text-finza-ink-soft">{cta.note}</p>}
            </div>
          )}
        </div>
      </main>

      <FinzaFooter product="siya9a-pro" productName="Siya9a Pro" hideOtherProducts />
    </div>
  );
}

export function GuideSection({
  id,
  heading,
  children,
}: {
  id?: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section id={id}>
      <h2 className="text-xl font-bold text-finza-ink sm:text-2xl">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-finza-ink-soft">{children}</div>
    </section>
  );
}

export function GuideTable({
  head,
  rows,
}: {
  head: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto rounded-[var(--finza-radius)] border border-finza-line">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-finza-surface">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold text-finza-ink">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-finza-line">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top text-finza-ink-soft">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function GuideFaq({ items }: { items: GuideFaqItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="rounded-[var(--finza-radius)] border border-finza-line bg-finza-paper p-4"
        >
          <summary className="cursor-pointer text-sm font-semibold text-finza-ink">
            {item.question}
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-finza-ink-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(items: GuideFaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}
