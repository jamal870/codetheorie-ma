import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalBlock } from "@/components/finza/LegalLayout";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "CGV — Conditions Générales de Vente | Siya9a Pro" },
      {
        name: "description",
        content:
          "Conditions générales de vente des abonnements Siya9a Pro et Code Theorie : prix, paiement, durée, résiliation, support et droit applicable.",
      },
      { property: "og:title", content: "CGV — Conditions Générales de Vente | Siya9a Pro" },
      {
        property: "og:description",
        content: "Prix, paiement, durée, résiliation et support des abonnements Siya9a Pro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/cgv" }],
  }),
  component: Cgv,
});

function Cgv() {
  return (
    <LegalLayout title="Conditions Générales de Vente">
      <LegalBlock heading="1. Objet">
        <p>
          Les présentes CGV régissent la souscription aux logiciels SaaS Siya9a Pro (gestion
          auto-école) et Code Theorie (entraînement au code de la route) édités par Finza Tech,
          Casablanca.
        </p>
      </LegalBlock>

      <LegalBlock heading="2. Prix et paiement">
        <p>
          Les prix sont indiqués en MAD HT. Le paiement en ligne sera disponible prochainement (en
          attente d'activation par les banques marocaines). En attendant, le règlement se fait par
          virement bancaire après émission de la facture.
        </p>
      </LegalBlock>

      <LegalBlock heading="3. Durée et résiliation">
        <p>
          Les abonnements auto-école sont conclus pour 12 mois renouvelables par tacite
          reconduction, résiliables avec préavis de 30 jours. L'accès candidat Code Theorie est un
          achat unique, sans reconduction.
        </p>
      </LegalBlock>

      <LegalBlock heading="4. Données et confidentialité">
        <p>
          Voir notre{" "}
          <Link to="/confidentialite" className="font-semibold text-finza-brand">
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalBlock>

      <LegalBlock heading="5. Support">
        <p>
          Support technique inclus : e-mail, WhatsApp, téléphone aux heures ouvrées (Lun–Ven
          9h–18h).
        </p>
      </LegalBlock>

      <LegalBlock heading="6. Droit applicable">
        <p>
          Les présentes CGV sont soumises au droit marocain. Tribunal compétent : Casablanca.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
