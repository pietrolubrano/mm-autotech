export const SITE_TITLE =
  "MM AUTOTECH — Taller mecánico multimarca de precisión";

export const SITE_DESCRIPTION =
  "MM AUTOTECH: taller mecánico multimarca con tecnología de diagnosis profesional. Mantenimiento, distribución, frenos, embrague, diagnosis electrónica y reparación con garantía.";

export const WHATSAPP_URL =
  "https://wa.me/34665882655?text=Hola%2C%20quiero%20solicitar%20un%20presupuesto%20para%20mi%20veh%C3%ADculo.";

export const MAPS_SEARCH =
  "https://www.google.com/maps/search/?api=1&query=Av.%20Alcora%2018%2C%2012006%20Castell%C3%B3n%20de%20la%20Plana";

export const MAPS_EMBED =
  "https://maps.google.com/maps?q=Av.%20Alcora%2018%2C%2012006%20Castell%C3%B3n%20de%20la%20Plana&t=&z=16&ie=UTF8&iwloc=&output=embed";

export const PHONE_TEL = "tel:+34665882655";
export const PHONE_DISPLAY = "+34 665 88 26 55";
export const EMAIL = "MMAUTOTECHMM@GMAIL.COM";
export const ADDRESS = "Av. Alcora 18, 12006 Castellón de la Plana";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "MM AUTOTECH",
  description:
    "Taller mecánico multimarca especializado en mantenimiento, diagnosis y reparación con tecnología profesional.",
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
