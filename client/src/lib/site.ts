const asset = (file: string) => `${import.meta.env.BASE_URL}brand/${file}`;

const localAssets = {
  // Genau drei Ersatzmotive aus der bereits produzierten Marketingbibliothek.
  hero: asset("hero-marketing-ritual.png"),
  bookWorld: asset("buchwelt-marketing-kita.png"),
  newsletter: asset("newsletter-marketing-impuls.png"),
  // Unveränderte Originalbestandteile der Website.
  mark: asset("logo-original.png"),
  cover: asset("gefuehlsbuch-cover-echt.png"),
  pdf: asset("Leseprobe_Mein_kleines_Gefuehls_Buch.pdf"),
  // Kurzes lokales Bewegungsmodul, kein GIF und kein externer Videoaufruf.
  motion: asset("gefuehlsmoment-bewegung.mp4"),
  motionPoster: asset("hero-marketing-ritual.png"),
  leseprobe: asset("buchwelt-marketing-kita.png"),
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
