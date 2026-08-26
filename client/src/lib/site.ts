const asset = (file: string) => `${import.meta.env.BASE_URL}brand/${file}`;

const localAssets = {
  // Genau vier speziell für die Website erzeugte, ruhige Markenmotive.
  hero: asset("website-hero-gemeinsam-lesen.png"),
  bookWorld: asset("website-buchwelt-gefuehlsfarben.png"),
  newsletter: asset("website-newsletter-kleine-impulse.png"),
  // Unveränderte Originalbestandteile der Website.
  mark: asset("logo-original.png"),
  cover: asset("gefuehlsbuch-cover-echt.png"),
  innerPage: asset("manuskript-innenseite-echt.png"),
  ritual: asset("website-ritual-gefuehlsfarben.png"),
  pdf: asset("Leseprobe_Mein_kleines_Gefuehls_Buch_10_Seiten.pdf"),
  // Kurzes lokales Bewegungsmodul, kein GIF und kein externer Videoaufruf.
  motion: asset("gefuehlsmoment-bewegung.mp4"),
  motionPoster: asset("website-hero-gemeinsam-lesen.png"),
  leseprobe: asset("website-nach-der-kita-gespraech.png"),
} as const;

export const site = {
  name: "Mein kleines Gefühls-Buch",
  origin: "https://marcelj-ccc.github.io/gefuehlsbuch-externe-landingpages",
  amazonBook: "https://amzn.eu/d/01oOpOaU",
  assets: localAssets,
} as const;

/** Newsletter-Zustellung über den bestehenden Apps-Script-Endpunkt. */
export const newsletterConfig = {
  endpoint:
    import.meta.env.VITE_NEWSLETTER_FORM_ENDPOINT?.trim() ||
    "https://script.google.com/macros/s/AKfycbzr4z2X7aqdynXsGMafKGU3_UWZd922aglGsDJvGKkIMkWamkrtjVP7XqPFxjPe9tU/exec",
  privacyUrl: import.meta.env.VITE_PRIVACY_URL?.trim() || "/datenschutz",
};
