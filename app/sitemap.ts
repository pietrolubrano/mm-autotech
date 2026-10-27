import type { MetadataRoute } from "next";
import { articlePath } from "@/lib/articles";
import { serviceIds } from "@/lib/dictionaries";
import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    es: `${SITE_URL}/es`,
    en: `${SITE_URL}/en`,
  };

  const homes = locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    changeFrequency: "monthly" as const,
    priority: locale === "es" ? 1 : 0.8,
    alternates: { languages },
  }));

  const services = serviceIds.flatMap((id) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${articlePath(locale, id)}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${SITE_URL}${articlePath("es", id)}`,
          en: `${SITE_URL}${articlePath("en", id)}`,
        },
      },
    })),
  );

  return [...homes, ...services];
}
