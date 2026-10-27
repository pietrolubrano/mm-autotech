import type { Metadata } from "next";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export const SITE_URL = "https://mm-autotech.vercel.app";

export const MAPS_SEARCH =
  "https://www.google.com/maps?cid=1318573056509000447&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF";

export const MAPS_EMBED = (locale: Locale) => {
  const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.0128006982045!2d-0.05390702358370281!3d39.98581927151227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5fffc1acdcc57f%3A0x124c8335739ebaff!2sMM%20AUTOTECH%20SL!5e0!3m2!1s${locale}!2s${locale}!4v1793120167490!5m2!1s${locale}!2s${locale}&hl=${locale}`;
  return src;
};

export const PHONE_TEL = "tel:+34665882655";
export const PHONE_DISPLAY = "+34 665 88 26 55";
export const EMAIL = "MMAUTOTECHMM@GMAIL.COM";
export const ADDRESS = "Av. Alcora 18, 12006 Castellón de la Plana";

const WHATSAPP_PHONE = "34665882655";

export function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function buildJsonLd(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "MM AUTOTECH",
    description,
    priceRange: "€€",
    image: "/og-image.jpg",
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Alcora 18",
      postalCode: "12006",
      addressLocality: "Castellón de la Plana",
      addressCountry: "ES",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "180",
    },
  };
}

export function siteMetadata(
  locale: Locale,
  dict: Dictionary,
  canonical = false,
): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    authors: [{ name: "MM AUTOTECH" }],
    ...(canonical
      ? {
          alternates: {
            canonical: `/${locale}`,
            languages: {
              es: "/es",
              en: "/en",
              "x-default": "/es",
            },
          },
        }
      : {}),
    openGraph: {
      siteName: "MM AUTOTECH",
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      ...(canonical ? { url: `/${locale}` } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}
