import type { Metadata } from "next";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export const MAPS_SEARCH =
  "https://www.google.com/maps/search/?api=1&query=Av.%20Alcora%2018%2C%2012006%20Castell%C3%B3n%20de%20la%20Plana";

export const MAPS_EMBED =
  "https://maps.google.com/maps?q=Av.%20Alcora%2018%2C%2012006%20Castell%C3%B3n%20de%20la%20Plana&t=&z=16&ie=UTF8&iwloc=&output=embed";

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
