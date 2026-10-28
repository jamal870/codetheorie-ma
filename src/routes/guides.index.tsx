import { createFileRoute, Link } from "@tanstack/react-router";
import { FinzaHeader, FinzaFooter, FinzaCard } from "@/components/finza";

const PAGE_URL = "https://codetheorie.ma/guides";
const TITLE = "Guides auto-école & code de la route au Maroc — Code Theorie";
const DESCRIPTION =
  "Guides pratiques et vérifiables sur la réforme NARSA 2026, l'examen du code de la route au Maroc et le choix d'un logiciel de gestion d'auto-école.";

const GUIDES = [
  {
    to: "/guides/reforme-narsa-2026" as const,
    eyebrow: "Réglementation",
    title: "Réforme NARSA 2026 : ce qui change pour les auto-écoles",
    desc: "Rôle de NARSA, digitalisation des démarches, obligations d'une auto-école marocaine et checklist de préparation.",
    points: [
      "Ce que NARSA fait — et ce qu'elle ne fait pas",
      "Obligations DGI, CNSS et dossiers élèves à tenir",
      "Checklist de préparation en cinq points",
    ],
    cta: "Lire le guide sur la réforme NARSA →",
  },
  {
    to: "/guides/examen-code-route-maroc" as const,
    eyebrow: "Candidats",
    title: "Examen du code de la route au Maroc : déroulé, coût et préparation",
    desc: "Comment se passe l'épreuve théorique, quelles catégories de permis, combien ça coûte et comment s'entraîner efficacement.",
    points: [
      "Le parcours du candidat en cinq étapes",
      "Qui fait quoi entre l'auto-école et NARSA",
      "Combien ça coûte et comment s'entraîner",
    ],
    cta: "Lire le guide sur l'examen du code →",
  },
  {
    to: "/guides/logiciel-gestion-auto-ecole" as const,
    eyebrow: "Comparatif",
    title: "Logiciel de gestion d'auto-école au Maroc : comment choisir",
    desc: "Papier/Excel, logiciel généraliste ou solution spécialisée : critères de choix, coûts réels et grille de comparaison.",
    points: [
      "Papier, Excel, généraliste ou spécialisé : les trois approches",
      "Sept critères à vérifier avant de signer",
      "Grille de comparaison et formules Siya9a Pro",
    ],
    cta: "Lire le comparatif des logiciels →",
  },
];

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": PAGE_URL,
          url: PAGE_URL,
          name: TITLE,
          description: DESCRIPTION,
          inLanguage: "fr-MA",
          isPartOf: { "@type": "WebSite", name: "Code Theorie", url: "https://codetheorie.ma" },
          publisher: { "@type": "Organization", name: "Finza Tech", url: "https://finza.ma" },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: GUIDES.map((g, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: g.title,
              description: g.desc,
              url: `https://codetheorie.ma${g.to}`,
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://codetheorie.ma/" },
            { "@type": "ListItem", position: 2, name: "Guides", item: PAGE_URL },
          ],
        }),
      },
    ],
  }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <div data-product="siya9a-pro" className="flex min-h-screen flex-col bg-finza-paper">
      <FinzaHeader
        product="siya9a-pro"
        logoUrl="/finza-logo.png"
        logoTo="/"
        navLinks={[
          { label: "Accueil", to: "/" },
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
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-finza-ink-soft">
                  {g.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link
                  to={g.to}
                  className="mt-4 inline-block text-sm font-semibold text-finza-brand"
                >
                  {g.cta}
                </Link>
              </FinzaCard>
            ))}
          </div>

          <section className="mt-14 max-w-2xl">
            <h2 className="text-xl font-bold text-finza-ink sm:text-2xl">
              Comment ces guides sont rédigés
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-finza-ink-soft">
              <p>
                Chaque guide part des textes et des démarches officiels : l'examen du permis, les
                titres de conduite et l'agrément des établissements relèvent de NARSA, l'Agence
                Nationale de la Sécurité Routière. Quand une information dépend d'un texte
                réglementaire, nous renvoyons à la source plutôt que de l'interpréter.
              </p>
              <p>
                Les parties qui concernent l'exploitation d'une auto-école — facturation conforme
                à la DGI, déclarations CNSS des moniteurs, suivi des véhicules et des heures de
                conduite — s'appuient sur l'expérience de terrain des auto-écoles qui utilisent
                Siya9a Pro. Nous n'employons jamais la formule « conforme NARSA » pour un outil
                privé.
              </p>
              <p>
                Les guides sont relus à chaque évolution notable et datés en bas de page. Une
                erreur ou une mise à jour à signaler ? Écrivez-nous à{" "}
                <a href="mailto:support@finza.ma" className="font-semibold text-finza-brand">
                  support@finza.ma
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </main>

      <FinzaFooter product="siya9a-pro" productName="Siya9a Pro" hideOtherProducts />
    </div>
  );
}
