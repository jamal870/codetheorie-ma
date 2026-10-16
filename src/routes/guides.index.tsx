import { createFileRoute, Link } from "@tanstack/react-router";
import { FinzaHeader, FinzaFooter, FinzaCard } from "@/components/finza";

const TITLE = "Guides auto-école & code de la route au Maroc — Code Theorie";
const DESCRIPTION =
  "Guides pratiques et vérifiables sur la réforme NARSA 2026, l'examen du code de la route au Maroc et le choix d'un logiciel de gestion d'auto-école.";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://codetheorie.ma/guides" }],
  }),
  component: GuidesIndex,
});

const GUIDES = [
  {
    to: "/guides/reforme-narsa-2026" as const,
    eyebrow: "Réglementation",
    title: "Réforme NARSA 2026 : ce qui change pour les auto-écoles",
    desc: "Rôle de NARSA, digitalisation des démarches, obligations d'une auto-école marocaine et checklist de préparation.",
  },
  {
    to: "/guides/examen-code-route-maroc" as const,
    eyebrow: "Candidats",
    title: "Examen du code de la route au Maroc : déroulé, coût et préparation",
    desc: "Comment se passe l'épreuve théorique, quelles catégories de permis, combien ça coûte et comment s'entraîner efficacement.",
  },
  {
    to: "/guides/logiciel-gestion-auto-ecole" as const,
    eyebrow: "Comparatif",
    title: "Logiciel de gestion d'auto-école au Maroc : comment choisir",
    desc: "Papier/Excel, logiciel généraliste ou solution spécialisée : critères de choix, coûts réels et grille de comparaison.",
  },
];

function GuidesIndex() {
  return (
    <div data-product="siya9a-pro" className="flex min-h-screen flex-col bg-finza-paper">
      <FinzaHeader
        product="siya9a-pro"
        logoUrl="/finza-logo.png"
        logoTo="/"
        navLinks={[
          { label: "Auto-écoles", to: "/" },
          { label: "Candidats", to: "/eleves" },
        ]}
        hideProductSwitcher
      />

      <main className="flex-1 px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-finza-ink sm:text-4xl">
            Guides — code de la route et gestion d'auto-école au Maroc
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-finza-ink-soft">
            Des ressources factuelles, en français, pour les candidats au permis et les
            exploitants d'auto-école. Chaque guide distingue clairement ce qui relève de NARSA
            (l'autorité officielle) et ce qui relève d'un outil privé comme Siya9a Pro.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {GUIDES.map((g) => (
              <FinzaCard key={g.to} variant="brand">
                <p className="text-xs font-bold uppercase tracking-widest text-finza-brand">
                  {g.eyebrow}
                </p>
                <h2 className="mt-2 text-lg font-bold text-finza-ink">{g.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-finza-ink-soft">{g.desc}</p>
                <Link
                  to={g.to}
                  className="mt-4 inline-block text-sm font-semibold text-finza-brand"
                >
                  Lire le guide →
                </Link>
              </FinzaCard>
            ))}
          </div>
        </div>
      </main>

      <FinzaFooter product="siya9a-pro" productName="Siya9a Pro" hideOtherProducts />
    </div>
  );
}
