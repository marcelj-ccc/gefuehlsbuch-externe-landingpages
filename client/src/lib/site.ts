/**
 * Stil: Ruhiger Aquarell-Begleitraum. Die Entwicklungsansicht lädt die geprüften
 * Manus-Assets; die veröffentlichten Seiten laden ausschließlich die Dateien des
 * eigenständigen GitHub-Releases.
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

const runsOnGitHubPages =
  typeof window !== "undefined" && window.location.hostname.endsWith(".github.io");

export const site = {
  name: "Mein kleines Gefühls-Buch",
  webadorHome: "https://www.meinkleinesgefuehlsbuch.de/",
  amazonBook: "https://amzn.eu/d/04d9bqwR",
  assets: runsOnGitHubPages ? publishedAssets : developmentAssets,
} as const;

export const newsletterConfig = {
  endpoint: import.meta.env.VITE_NEWSLETTER_FORM_ENDPOINT?.trim() ?? "",
  privacyUrl: import.meta.env.VITE_PRIVACY_URL?.trim() ?? "",
};
