import { useState, type MouseEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { FINZA_PRODUCTS, type FinzaProductId } from "./products";

export interface FinzaNavLink {
  label: string;
  /** Hash anchor on the current page (e.g. "products") OR a full path. */
  hash?: string;
  to?: string;
}

interface FinzaHeaderProps {
  /** Current product — drives the brand accent. */
  product: FinzaProductId;
  /** Logo node (img or svg). Sizing handled by parent. */
  logo?: ReactNode;
  /** URL of the logo image. Renders an <img> when `logo` is not provided. */
  logoUrl?: string;
  /** Optional extra classes for the rendered logo image. Defaults to `h-10 w-auto`. */
  logoClassName?: string;
  /** Section nav links shown in desktop and mobile menus. */
  navLinks?: FinzaNavLink[];
  /** Primary CTA shown on the right of the header. */
  cta?: { label: string; href: string };
  /** Destination the logo links to. Defaults to "/". */
  logoTo?: "/" | "/eleves";
  /** Hide the "Famille Finza" cross-product switcher in the mobile menu. */
  hideProductSwitcher?: boolean;
}

/**
 * Shared Finza header.
 * - Same layout/spacing across every product
 * - Accent comes from --finza-brand on the page root
 */
export function FinzaHeader({ product, logo, logoUrl, logoClassName = "h-10 w-auto", navLinks = [], cta, logoTo = "/", hideProductSwitcher = false }: FinzaHeaderProps) {
  const [open, setOpen] = useState(false);

  const handleHashNavigation = (event: MouseEvent<HTMLAnchorElement>, hash: string) => {
    event.preventDefault();
    const target = document.getElementById(hash);
    const nextUrl = `${window.location.pathname}${window.location.search}#${hash}`;

    if (window.location.hash !== `#${hash}`) {
      window.history.pushState(null, "", nextUrl);
    }

    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-finza-line bg-finza-paper/80 shadow-[0_10px_30px_-24px_oklch(0_0_0/0.5)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5">
        <Link to={logoTo} className="flex min-w-0 items-center">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={FINZA_PRODUCTS.find((p) => p.id === product)?.name ?? product}
              className={cn("shrink-0 object-contain", logoClassName)}
              loading="eager"
            />
          ) : (
            logo
          )}
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) =>
            link.hash ? (
              <a
                key={link.label}
                href={`#${link.hash}`}
                className="text-sm font-semibold text-finza-ink-soft transition-colors hover:text-finza-ink"
                onClick={(event) => handleHashNavigation(event, link.hash!)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to ?? "/"}
                className="text-sm font-semibold text-finza-ink-soft transition-colors hover:text-finza-ink"
              >
                {link.label}
              </Link>
            ),
          )}
          {cta && (
            <a
              href={cta.href}
              className="finza-sheen rounded-full bg-finza-brand px-4 py-2.5 text-sm font-bold text-finza-brand-ink shadow-[var(--finza-shadow-brand)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--finza-shadow-lift)]"
            >
              {cta.label}
            </a>
          )}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-finza-ink hover:bg-finza-surface md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-finza-line bg-finza-paper px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-base font-semibold">
            {navLinks.map((link) =>
              link.hash ? (
                <a
                  key={link.label}
                  href={`#${link.hash}`}
                  className="text-finza-ink"
                  onClick={(event) => {
                    handleHashNavigation(event, link.hash!);
                    setOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to ?? "/"}
                  className="text-finza-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            {cta && (
              <a
                href={cta.href}
                className="mt-1 rounded-full bg-finza-brand px-4 py-2.5 text-center text-sm font-extrabold text-finza-brand-ink"
                onClick={() => setOpen(false)}
              >
                {cta.label}
              </a>
            )}
          </nav>

          {!hideProductSwitcher && <ProductSwitcher current={product} />}
        </div>
      )}
    </header>
  );
}

function ProductSwitcher({ current }: { current: FinzaProductId }) {
  return (
    <div className="mt-5 border-t border-finza-line pt-4">
      <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-finza-ink-soft">
        Famille Finza
      </p>
      <ul className="flex flex-col gap-1">
        {FINZA_PRODUCTS.map((p) => {
          const active = p.id === current;
          return (
            <li key={p.id}>
              <a
                href={p.href}
                className="flex items-center justify-between rounded-lg px-2 py-2 text-sm hover:bg-finza-surface"
              >
                <span>
                  <span className={active ? "font-bold text-finza-ink" : "font-semibold text-finza-ink"}>
                    {p.name}
                  </span>
                  <span className="ml-2 text-xs text-finza-ink-soft">{p.tagline}</span>
                </span>
                {active && (
                  <span
                    className="h-2 w-2 rounded-full bg-finza-brand"
                    aria-label="produit actuel"
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
