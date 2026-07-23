/**
 * Stil: Ruhiger Aquarell-Begleitraum. Die Hauptseite und ihre Kapitel nutzen
 * dieselben geprüften Aquarellassets; die frühere Webador-Adresse bleibt nur
 * als technische Referenz für die kontrollierte Domainmigration erhalten.
 */
const developmentAssets = {
  hero: "/manus-storage/gefuehlsbuch-hero-lesen_5c498801.png",
  newsletter: "/manus-storage/gefuehlsbuch-newsletter-brief_429ffdce.png",
  leseprobe: "/manus-storage/gefuehlsbuch-leseprobe-buch_54fefd04.png",
  mark: "/manus-storage/gefuehlsbuch-marke-sonne_0e729a9a.png",
  cover: "/manus-storage/gefuehlsbuch-leseprobe-cover_cadc2907.png",
  pdf: "/manus-storage/Leseprobe_Mein_kleines_Gefuehls_Buch_5aaa95a9.pdf",
} as const;

const releaseAssetBase =
  "https://github.com/marcelj-ccc/gefuehlsbuch-externe-landingpages/releases/download/assets-v1";

const publishedAssets = {
  hero: `${releaseAssetBase}/gefuehlsbuch-hero-lesen.png`,
  newsletter: `${releaseAssetBase}/gefuehlsbuch-newsletter-brief.png`,
  leseprobe: `${releaseAssetBase}/gefuehlsbuch-leseprobe-buch.png`,
  mark: `${releaseAssetBase}/gefuehlsbuch-marke-sonne.png`,
  cover: `${releaseAssetBase}/gefuehlsbuch-leseprobe-cover.png`,
  pdf: `${releaseAssetBase}/Leseprobe_Mein_kleines_Gefuehls_Buch.pdf`,
} as const;

// Im Produktionsbuild werden immer die veröffentlichten Release-Assets
// verwendet – unabhängig von der Domain (github.io, eigene Domain oder
// Testumgebung). Die Dev-Assets gelten nur im lokalen Vite-Dev-Modus.
const useDevelopmentAssets = import.meta.env.DEV;

export const site = {
  name: "Mein kleines Gefühls-Buch",
  legacyWebadorHome: "https://www.meinkleinesgefuehlsbuch.de/",
  amazonBook: "https://amzn.eu/d/04d9bqwR",
  assets: useDevelopmentAssets ? developmentAssets : publishedAssets,
} as const;

/**
 * Newsletter-Zustellung: Der FormSubmit-AJAX-Endpoint stellt jede Anmeldung
 * als E-Mail an info@meinkleinesgefuehlsbuch.de zu. Die Datenschutzhinweise
 * liegen als eigene Route /datenschutz direkt auf dieser Website.
 */
export const newsletterConfig = {
  endpoint:
    import.meta.env.VITE_NEWSLETTER_FORM_ENDPOINT?.trim() ||
    "https://formsubmit.co/ajax/info@meinkleinesgefuehlsbuch.de",
  privacyUrl: import.meta.env.VITE_PRIVACY_URL?.trim() || "/datenschutz",
};
