const localAssets = {
  hero: "/brand/hero-familienlesemoment.webp",
  bookWorld: "/brand/buchwelten-innenseiten.webp",
  leseprobe: "/brand/buchwelten-innenseiten.webp",
  newsletter: "/brand/newsletter-umschlag.webp",
  motion: "/brand/gefuehlsmoment-bewegung.webm",
  motionPoster: "/brand/hero-familienlesemoment.webp",
  mark: "/manus-storage/gefuehlsbuch-marke-sonne_0e729a9a.png",
  cover: "/brand/gefuehlsbuch-cover-echt.png",
  pdf: "/manus-storage/Leseprobe_Mein_kleines_Gefuehls_Buch_5aaa95a9.pdf",
} as const;

/** Öffentliche, externe Website-Adresse – keine sichtbaren GitHub-Ziele. */
export const site = {
  name: "Mein kleines Gefühls-Buch",
  origin: "https://kleinesbuch-m2jwekcg.manus.space",
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
