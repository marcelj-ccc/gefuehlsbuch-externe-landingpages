/**
 * Stil: Ruhiger Aquarell-Begleitraum. Die Hauptseite und ihre Kapitel nutzen
 * dieselben geprüften Aquarellassets; die frühere Webador-Adresse bleibt nur
 * als technische Referenz für die kontrollierte Domainmigration erhalten.
 */
const developmentAssets = {
  hero: "/brand/mein-kleines-gefuehls-buch-cover.png",
  newsletter: "/manus-storage/gefuehlsbuch-newsletter-brief_429ffdce.png",
  leseprobe: "/manus-storage/gefuehlsbuch-leseprobe-buch_54fefd04.png",
  mark: "/manus-storage/gefuehlsbuch-marke-sonne_0e729a9a.png",
  cover: "/brand/mein-kleines-gefuehls-buch-cover.png",
  pdf: "/manus-storage/Leseprobe_Mein_kleines_Gefuehls_Buch_5aaa95a9.pdf",
} as const;

const releaseAssetBase =
  "https://github.com/marcelj-ccc/gefuehlsbuch-externe-landingpages/releases/download/assets-v1";

const publishedAssets = {
  hero: "/brand/mein-kleines-gefuehls-buch-cover.png",
  newsletter: `${releaseAssetBase}/gefuehlsbuch-newsletter-brief.png`,
  leseprobe: `${releaseAssetBase}/gefuehlsbuch-leseprobe-buch.png`,
  mark: `${releaseAssetBase}/gefuehlsbuch-marke-sonne.png`,
  cover: "/brand/mein-kleines-gefuehls-buch-cover.png",
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
 * Newsletter-Zustellung: Ein eigener kostenloser Apps-Script-Endpunkt versendet
 * die Bestätigung an die anmeldende Person und die Betreiberbenachrichtigung.
 * Die Datenschutzhinweise liegen als eigene Route /datenschutz auf dieser Website.
 */
export const newsletterConfig = {
  endpoint:
    import.meta.env.VITE_NEWSLETTER_FORM_ENDPOINT?.trim() ||
    "https://script.google.com/macros/s/AKfycbzr4z2X7aqdynXsGMafKGU3_UWZd922aglGsDJvGKkIMkWamkrtjVP7XqPFxjPe9tU/exec",
  privacyUrl: import.meta.env.VITE_PRIVACY_URL?.trim() || "/datenschutz",
};
