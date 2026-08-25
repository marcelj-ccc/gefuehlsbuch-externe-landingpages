import { useEffect } from "react";
import { site } from "@/lib/site";

type SeoHeadProps = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
};

const siteOrigin = site.origin;
const fallbackImage = `${siteOrigin}${site.assets.hero}`;

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

/**
 * Ergänzt ausschließlich Metadaten im Dokumentkopf. Es verändert keine sichtbaren
 * Komponenten, Klassen, Seitenabstände oder bestehende Funktionalität.
 */
export function SeoHead({ title, description, path = "/", type = "website" }: SeoHeadProps) {
  useEffect(() => {
    const canonicalUrl = `${siteOrigin}${path === "/" ? "" : path}`;
    document.title = title;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:image"]', "property", "og:image", fallbackImage);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", fallbackImage);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let structuredData = document.head.querySelector<HTMLScriptElement>('script[data-seo="book"]');
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.type = "application/ld+json";
      structuredData.dataset.seo = "book";
      document.head.appendChild(structuredData);
    }
    structuredData.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          name: site.name,
          url: siteOrigin,
          inLanguage: "de-DE",
        },
        {
          "@type": "Book",
          name: site.name,
          url: canonicalUrl,
          inLanguage: "de-DE",
          audience: { "@type": "PeopleAudience", suggestedMinAge: 4, suggestedMaxAge: 8 },
          about: ["Gefühle bei Kindern", "Gefühle benennen", "Gemeinsam lesen"],
          offers: {
            "@type": "Offer",
            url: site.amazonBook,
            availability: "https://schema.org/InStock",
          },
        },
      ],
    });
  }, [description, path, title, type]);

  return null;
}
