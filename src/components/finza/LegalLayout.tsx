import type { ReactNode } from "react";
import { FinzaHeader } from "./FinzaHeader";
import { CodeTheorieLogo } from "./CodeTheorieLogo";
import { FinzaFooter } from "./FinzaFooter";

interface LegalLayoutProps {
  title: string;
  intro?: string;
  children: ReactNode;
}

/** Shared shell for the legal pages (mentions légales, CGV, confidentialité). */
export function LegalLayout({ title, intro, children }: LegalLayoutProps) {
  return (
    <div data-product="siya9a-pro" className="flex min-h-screen flex-col bg-finza-paper">
      <FinzaHeader product="siya9a-pro" logo={<CodeTheorieLogo />} logoTo="/" hideProductSwitcher />

      <main className="flex-1 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-finza-ink sm:text-4xl">
            {title}
          </h1>
          {intro && <p className="mt-4 text-base leading-relaxed text-finza-ink-soft">{intro}</p>}
          <div className="mt-10 space-y-10">{children}</div>
        </div>
      </main>

      <FinzaFooter product="siya9a-pro" productName="Siya9a Pro" hideOtherProducts />
    </div>
  );
}

export function LegalBlock({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-finza-ink">{heading}</h2>
      <div className="mt-3 space-y-2 text-sm leading-relaxed text-finza-ink-soft">{children}</div>
    </section>
  );
}

export function LegalRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-finza-line py-2 sm:flex-row sm:gap-4">
      <span className="w-64 shrink-0 font-semibold text-finza-ink">{label}</span>
      <span>{value}</span>
    </div>
  );
}
