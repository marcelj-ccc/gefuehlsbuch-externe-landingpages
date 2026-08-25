const asset = (file: string) => `${import.meta.env.BASE_URL}brand/${file}`;

const localAssets = {
  hero: asset("hero-familienlesemoment.webp"),
  bookWorld: asset("buchwelten-innenseiten.webp"),
  leseprobe: asset("buchwelten-innenseiten.webp"),
  newsletter: asset("newsletter-umschlag.webp"),
  motion: asset("gefuehlsmoment-bewegung.webm"),
  motionPoster: asset("hero-familienlesemoment.webp"),
  mark: "/manus-storage/gefuehlsbuch-marke-sonne_0e729a9a.png",
  cover: asset("gefuehlsbuch-cover-echt.png"),
  pdf: "/manus-storage/Leseprobe_Mein_kleines_Gefuehls_Buch_5aaa95a9.pdf",
} as const;

/** Öffentliche, externe Website-Adresse – keine sichtbaren GitHub-Ziele. */
export const site = {
  name: "Mein kleines Gefühls-Buch",
  origin: "https://marcelj-ccc.github.io/gefuehlsbuch-externe-landingpages",
  amazonBook: "https://amzn.eu/d/01oOpOaU",
  assets: localAssets,
} as const;

/**
 * Newsletter-Zustellung: Ein eigener Apps-Script-Endpunkt versendet die
 * Bestätigung an die anmeldende Person und die Betreiberbenachrichtigung.
 */
export const newsletterConfig = {
  endpoint:
    import.meta.env.VITE_NEWSLETTER_FORM_ENDPOINT?.trim() ||
    "https://script.google.com/macros/s/AKfycbzr4z2X7aqdynXsGMafKGU3_UWZd922aglGsDJvGKkIMkWamkrtjVP7XqPFxjPe9tU/exec",
  privacyUrl: import.meta.env.VITE_PRIVACY_URL?.trim() || "/datenschutz",
};
