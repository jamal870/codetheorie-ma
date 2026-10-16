/**
 * Central registry of every Finza product.
 * Used by FinzaHeader (product switcher) and FinzaFooter
 * so adding a new product is a one-line change.
 */
export type FinzaProductId = "siya9a" | "siya9a-pro" | "mizan" | "finza";

export interface FinzaProduct {
  id: FinzaProductId;
  name: string;
  tagline: string;
  href: string;
  /** Used as data-product on the page root to swap accent color */
  accentKey: FinzaProductId;
}

export const FINZA_PRODUCTS: FinzaProduct[] = [
  {
    id: "siya9a",
    name: "Code Theorie",
    tagline: "Code de la route — élèves",
    href: "https://codetheorie.ma",
    accentKey: "siya9a",
  },
  {
    id: "siya9a-pro",
    name: "Siya9a Pro",
    tagline: "Gestion auto-école",
    href: "https://siya9apro.ma",
    accentKey: "siya9a-pro",
  },
  {
    id: "mizan",
    name: "Mizan",
    tagline: "Comptabilité marocaine",
    href: "https://mizan.finza.ma",
    accentKey: "mizan",
  },
  {
    id: "finza",
    name: "Finza Tech",
    tagline: "La maison mère",
    href: "https://finza.ma",
    accentKey: "finza",
  },
];

export const COMPANY = {
  name: "Finza Tech",
  url: "https://finza.ma",
  tagline: "Une création Finza Tech",
  email: "support@finza.ma",
  phone: "+212661349492",
  phoneDisplay: "06 61 34 94 92",
  whatsappUrl: "https://wa.me/212661349492?text=Bonjour%20Finza",
};
