import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalBlock } from "@/components/finza/LegalLayout";
import { COMPANY } from "@/components/finza";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Siya9a Pro & Code Theorie" },
      {
        name: "description",
        content:
          "Protection des données sur codetheorie.ma : données collectées, cookies, durées de conservation et vos droits selon la loi marocaine 09-08.",
      },
      { property: "og:title", content: "Politique de confidentialité — Siya9a Pro" },
      {
        property: "og:description",
        content: "Données collectées, cookies, conservation et droits d'accès selon la loi 09-08.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/confidentialite" }],
  }),
  component: Confidentialite,
});

function Confidentialite() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      intro="Finza Tech respecte votre vie privée et se conforme à la loi marocaine 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, ainsi qu'au RGPD européen."
    >
      <LegalBlock heading="Données collectées">
        <p>
          Via les formulaires du site (demande de démo, place pilote, contact candidat) : nom,
          téléphone, e-mail, ville, nom de l'auto-école et message. Aucune donnée n'est utilisée à
          des fins publicitaires ni revendue.
        </p>
      </LegalBlock>

      <LegalBlock heading="Hébergement et transfert hors du Maroc">
        <p>
          Le site vitrine codetheorie.ma est hébergé sur l'infrastructure CDN de Netlify. Les
          applications et bases de données (Code Theorie, Siya9a Pro, Mizan) sont hébergées par
          Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Chypre (Union
          européenne).
        </p>
        <p>
          Vos données peuvent donc faire l'objet d'un transfert hors du territoire marocain, vers un
          pays reconnu comme assurant un niveau de protection adéquat (Chypre, État membre de l'UE
          soumis au RGPD). Ce transfert fait l'objet d'une demande d'autorisation auprès de la CNDP
          conformément aux articles 43 et 44 de la loi 09-08.
        </p>
      </LegalBlock>

      <LegalBlock heading="Déclaration CNDP et consentement">
        <p>
          Les traitements de données réalisés par Finza Tech font l'objet d'une déclaration auprès
          de la Commission Nationale de contrôle de la protection des Données à caractère Personnel
          (CNDP). En utilisant nos formulaires et nos applications, vous consentez au traitement de
          vos données ainsi qu'à leur hébergement et transfert tels que décrits ci-dessus.
        </p>
      </LegalBlock>

      <LegalBlock heading="Cookies">
        <p>
          Le site n'utilise que des cookies techniques nécessaires à son fonctionnement. Aucun
          cookie de tracking tiers.
        </p>
      </LegalBlock>

      <LegalBlock heading="Vos droits">
        <p>
          Vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
          Contact :{" "}
          <a href={`mailto:${COMPANY.email}`} className="font-semibold text-finza-brand">
            {COMPANY.email}
          </a>
          .
        </p>
      </LegalBlock>

      <LegalBlock heading="Conservation">
        <p>
          Les données sont conservées pendant une durée maximale de 5 ans, conformément aux
          déclarations effectuées auprès de la CNDP. Passé ce délai, elles sont supprimées ou
          anonymisées.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
