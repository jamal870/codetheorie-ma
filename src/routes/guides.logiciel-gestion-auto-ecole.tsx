import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GuideLayout,
  GuideSection,
  GuideTable,
  GuideFaq,
  faqSchema,
  type GuideFaqItem,
} from "@/components/finza/GuideLayout";
import { COMPANY } from "@/components/finza";

const TITLE = "Logiciel de gestion d'auto-école au Maroc : comment choisir en 2026";
const DESCRIPTION =
  "Papier/Excel, logiciel généraliste ou solution spécialisée marocaine : critères de choix, coût réel, facturation DGI, paie CNSS et grille de comparaison pour auto-écoles.";

const FAQ: GuideFaqItem[] = [
  {
    question: "Un logiciel de gestion est-il obligatoire pour une auto-école marocaine ?",
    answer:
      "Non. Aucune obligation ne porte sur l'outil. Les obligations portent sur les résultats : dossiers élèves complets, factures conformes à la DGI, déclarations CNSS à jour et suivi des véhicules.",
  },
  {
    question: "Excel suffit-il pour une petite auto-école ?",
    answer:
      "Excel tient tant que le volume est faible et qu'une seule personne saisit. Les limites apparaissent avec le multi-utilisateur, l'historique des heures, la numérotation de factures et la reprise après une erreur de manipulation.",
  },
  {
    question: "Combien coûte Siya9a Pro ?",
    answer:
      "Trois formules annuelles : Start 5 900 MAD/an jusqu'à 20 nouveaux élèves / mois, ÉLITE Medium 9 900 MAD/an jusqu'à 50 nouveaux élèves / mois, ÉLITE Grand Cabinet 18 900 MAD/an jusqu'à 150 nouveaux élèves / mois et multi-filiales.",
  },
  {
    question: "Un logiciel étranger peut-il convenir au Maroc ?",
    answer:
      "Techniquement oui, mais il faut vérifier la facturation aux normes marocaines (ICE, TVA, numérotation), la paie CNSS, la langue et le support local. Ces points sont rarement couverts par un outil conçu pour un autre pays.",
  },
];

export const Route = createFileRoute("/guides/logiciel-gestion-auto-ecole")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "https://codetheorie.ma/guides/logiciel-gestion-auto-ecole" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(FAQ)) }],
  }),
  component: Page,
});

function Page() {
  return (
    <GuideLayout
      eyebrow="Comparatif"
      title={TITLE}
      intro="Une auto-école marocaine jongle entre dossiers élèves, planning des moniteurs, flotte, facturation DGI et paie CNSS. Ce guide compare les trois approches possibles et donne une grille de décision honnête — y compris les cas où un logiciel spécialisé n'est pas nécessaire."
      updated="août 2026"
      cta={{
        label: "Postuler pour une place pilote Siya9a Pro",
        href: COMPANY.whatsappUrl,
        note: "Lancement 2026 · places pilotes limitées. Nous ne publions aucun chiffre client tant que le déploiement est en cours.",
      }}
    >
      <GuideSection heading="Les trois approches">
        <GuideTable
          head={["Approche", "Avantages", "Limites"]}
          rows={[
            [
              "Papier + Excel",
              "Coût nul, aucune formation, contrôle total",
              "Pas de multi-utilisateur fiable, historique fragile, factures manuelles, aucune alerte",
            ],
            [
              "Logiciel généraliste (compta/CRM)",
              "Facturation solide, souvent connu du comptable",
              "Aucune notion d'heures de conduite, de moniteur ni de véhicule ; paramétrage lourd",
            ],
            [
              "Logiciel spécialisé auto-école",
              "Élèves, planning, flotte, facturation et paie dans un seul flux",
              "Abonnement annuel, migration des données, dépendance à l'éditeur",
            ],
          ]}
        />
      </GuideSection>

      <GuideSection heading="Sept critères à vérifier avant de signer">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            <strong>Facturation conforme DGI</strong> : numérotation continue, ICE, TVA, archivage
            exportable.
          </li>
          <li>
            <strong>Paie CNSS</strong> : bulletins moniteurs et déclarations mensuelles générés,
            pas ressaisis.
          </li>
          <li>
            <strong>Suivi des heures</strong> : chaque séance rattachée à un élève, un moniteur et
            un véhicule.
          </li>
          <li>
            <strong>Flotte</strong> : alertes assurance, visite technique, entretien.
          </li>
          <li>
            <strong>Export de vos données</strong> : pouvoir partir avec ses données est un critère,
            pas un détail.
          </li>
          <li>
            <strong>Langue et support local</strong> : interface française, assistance joignable au
            Maroc, WhatsApp inclus.
          </li>
          <li>
            <strong>Coût total sur trois ans</strong> : licence + migration + temps de formation, pas
            seulement le prix affiché.
          </li>
        </ol>
      </GuideSection>

      <GuideSection heading="Quand un logiciel spécialisé ne se justifie pas">
        <p>
          Si vous gérez moins d'une dizaine de nouveaux élèves par mois, sans salarié déclaré et avec un seul
          véhicule, un classeur bien tenu et un modèle de facture propre suffisent. Le point de
          bascule se situe généralement là : plusieurs moniteurs, plusieurs véhicules, ou un volume
          d'élèves qui rend le planning ingérable de tête.
        </p>
      </GuideSection>

      <GuideSection heading="Les formules Siya9a Pro">
        <GuideTable
          head={["Formule", "Prix / an", "Cible"]}
          rows={[
            ["Start", "5 900 MAD", "Jusqu'à 20 nouveaux élèves / mois"],
            ["ÉLITE Medium", "9 900 MAD", "Jusqu'à 50 nouveaux élèves / mois"],
            ["ÉLITE Grand Cabinet", "18 900 MAD", "Jusqu'à 150 nouveaux élèves / mois · multi-filiales"],
          ]}
        />
        <p>
          Siya9a Pro est édité par {COMPANY.name} (Casablanca). C'est un logiciel privé, indépendant
          de NARSA, compatible avec la réforme NARSA 2026 : il gère l'exploitation, pas les examens.
          Le détail des fonctionnalités est sur la page{" "}
          <Link to="/" className="font-semibold text-finza-brand">
            Auto-écoles
          </Link>{" "}
          ; le contexte réglementaire est traité dans le{" "}
          <Link to="/guides/reforme-narsa-2026" className="font-semibold text-finza-brand">
            guide réforme NARSA 2026
          </Link>
          .
        </p>
      </GuideSection>

      <GuideSection heading="Questions fréquentes">
        <GuideFaq items={FAQ} />
      </GuideSection>
    </GuideLayout>
  );
}
