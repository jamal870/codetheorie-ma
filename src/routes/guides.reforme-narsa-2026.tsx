import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GuideLayout,
  GuideSection,
  GuideTable,
  GuideFaq,
  faqSchema,
  articleSchema,
  breadcrumbSchema,
  type GuideFaqItem,
} from "@/components/finza/GuideLayout";
import { COMPANY } from "@/components/finza";

const PAGE_URL = "https://codetheorie.ma/guides/reforme-narsa-2026";
/** <title> (≤ 60 caractères) ; le H1 complet est HEADLINE. */
const TITLE = "Réforme NARSA 2026 : ce qui change pour les auto-écoles";
const HEADLINE = "Réforme NARSA 2026 : ce qui change pour les auto-écoles au Maroc";
const UPDATED = "août 2026";
const UPDATED_ISO = "2026-08-01";
const DESCRIPTION =
  "Qui est NARSA, ce que couvre la réforme 2026, les obligations d'une auto-école marocaine (DGI, CNSS, dossiers élèves) et une checklist de préparation.";

const FAQ: GuideFaqItem[] = [
  {
    question: "NARSA impose-t-elle un logiciel de gestion aux auto-écoles ?",
    answer:
      "Non. NARSA encadre les examens, les titres et l'agrément des établissements. Elle ne publie ni ne recommande de logiciel de gestion privé. Le choix de l'outil interne reste libre.",
  },
  {
    question: "Siya9a Pro est-il « conforme NARSA » ?",
    answer:
      "Nous n'employons jamais la formule « conforme NARSA », qui laisserait croire à une validation officielle. Siya9a Pro est un logiciel privé et indépendant, compatible avec la réforme NARSA 2026 : il gère l'exploitation de l'auto-école, pas les examens officiels.",
  },
  {
    question: "Où trouver l'information officielle sur la réforme ?",
    answer:
      "Sur le site de NARSA (narsa.ma) et au Bulletin officiel. Les textes officiels priment toujours sur toute interprétation publiée par un éditeur de logiciel, y compris nous.",
  },
  {
    question: "Que doit préparer une auto-école dès aujourd'hui ?",
    answer:
      "Des dossiers élèves complets et retrouvables, une facturation conforme aux exigences de la DGI, des déclarations CNSS à jour pour les moniteurs, un suivi documenté des véhicules et un historique des heures de conduite.",
  },
];

export const Route = createFileRoute("/guides/reforme-narsa-2026")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: HEADLINE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: PAGE_URL },
      { property: "article:modified_time", content: UPDATED_ISO },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          articleSchema({
            url: PAGE_URL,
            headline: HEADLINE,
            description: DESCRIPTION,
            section: "Réglementation",
            modified: UPDATED_ISO,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Accueil", url: "https://codetheorie.ma/" },
            { name: "Guides", url: "https://codetheorie.ma/guides" },
            { name: HEADLINE, url: PAGE_URL },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(FAQ)) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <GuideLayout
      eyebrow="Réglementation"
      title={HEADLINE}
      intro="NARSA (Agence Nationale de la Sécurité Routière) est l'autorité publique marocaine en charge de la sécurité routière, des examens du permis et des titres de conduite. Ce guide résume son rôle, ce que la modernisation en cours change concrètement pour une auto-école, et comment s'y préparer sans attendre."
      updated={UPDATED}
      cta={{
        label: "Postuler pour une place pilote Siya9a Pro",
        href: COMPANY.whatsappUrl,
        note: "Lancement 2026 · places pilotes limitées. Échange direct sur WhatsApp, sans engagement.",
      }}
    >
      <GuideSection heading="Ce que NARSA fait — et ce qu'elle ne fait pas">
        <p>
          NARSA est un établissement public créé par la loi 103-14. Son périmètre couvre notamment
          la sécurité routière, l'organisation des examens du permis de conduire, la délivrance des
          titres et le contrôle des établissements d'enseignement de la conduite.
        </p>
        <GuideTable
          head={["Domaine", "NARSA", "Auto-école"]}
          rows={[
            ["Examens du code et de la conduite", "Organise et valide", "Prépare les candidats"],
            ["Titres (permis, cartes)", "Délivre", "Constitue le dossier"],
            ["Agrément de l'établissement", "Contrôle", "Se met en conformité"],
            [
              "Gestion interne (élèves, planning, facturation, paie)",
              "Hors périmètre",
              "Responsabilité pleine de l'exploitant",
            ],
          ]}
        />
        <p>
          Point important : aucune administration marocaine n'impose ni ne certifie un logiciel de
          gestion d'auto-école. Les obligations portent sur les <strong>résultats</strong> —
          dossiers complets, factures conformes, déclarations sociales — pas sur l'outil utilisé.
        </p>
      </GuideSection>

      <GuideSection heading="Le sens de la réforme : moins de papier, plus de traçabilité">
        <p>
          La direction prise depuis plusieurs années est constante : dématérialisation des
          démarches, identification fiable des candidats, traçabilité de la formation et des
          documents. Pour une auto-école, l'effet pratique est le même quel que soit le calendrier
          exact des textes :
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>chaque dossier élève doit être complet, daté et retrouvable en quelques secondes ;</li>
          <li>les heures de conduite et les convocations doivent être documentées, pas mémorisées ;</li>
          <li>la facturation doit suivre les exigences de la DGI (numérotation, ICE, TVA) ;</li>
          <li>les moniteurs doivent être déclarés à la CNSS avec des bulletins de paie cohérents ;</li>
          <li>l'état des véhicules (visite technique, assurance) doit être suivi et prouvable.</li>
        </ul>
        <p className="rounded-[var(--finza-radius)] border border-finza-line bg-finza-surface p-4">
          Nous ne publions pas de dates ou de chiffres non confirmés. Pour le calendrier officiel et
          les textes applicables, référez-vous à{" "}
          <a href="https://www.narsa.ma" className="font-semibold text-finza-brand" rel="noopener">
            narsa.ma
          </a>{" "}
          et au Bulletin officiel.
        </p>
      </GuideSection>

      <GuideSection heading="Checklist de préparation pour une auto-école">
        <GuideTable
          head={["Chantier", "À faire", "Risque si négligé"]}
          rows={[
            [
              "Dossiers élèves",
              "Numériser pièces d'identité, contrats, attestations ; une fiche par élève",
              "Dossier incomplet lors d'un contrôle",
            ],
            [
              "Planning & heures",
              "Enregistrer chaque séance : moniteur, véhicule, durée, signature",
              "Litiges élèves, heures non facturées",
            ],
            [
              "Facturation DGI",
              "Numérotation continue, mentions légales, ICE, archivage",
              "Redressement fiscal",
            ],
            [
              "Paie CNSS",
              "Déclaration mensuelle des moniteurs, bulletins conservés",
              "Pénalités sociales",
            ],
            [
              "Flotte",
              "Suivi assurance, visite technique, entretien par véhicule",
              "Immobilisation, responsabilité en cas d'accident",
            ],
          ]}
        />
      </GuideSection>

      <GuideSection heading="Où se situe Siya9a Pro">
        <p>
          Siya9a Pro est un logiciel marocain de gestion d'auto-école édité par {COMPANY.name}. Il
          couvre les élèves, le planning, la flotte, la facturation et la paie — c'est-à-dire
          exactement la partie « exploitation » que NARSA ne gère pas. Il ne remplace aucune
          démarche officielle et ne bénéficie d'aucune homologation publique.
        </p>
        <p>
          Détail des fonctionnalités et tarifs annuels sur{" "}
          <Link to="/" className="font-semibold text-finza-brand">
            la page d'accueil Siya9a Pro
          </Link>
          . Les candidats au permis trouveront l'entraînement au code sur{" "}
          <Link to="/eleves" className="font-semibold text-finza-brand">
            la page élèves
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
