export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const LOCALE_COOKIE = "mm-locale";

export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function hasLocale(value: string): value is Locale {
  return value === "es" || value === "en";
}

export function localeFromPathname(pathname: string | null | undefined): Locale {
  const first = pathname?.split("/").filter(Boolean)[0];
  return first && hasLocale(first) ? first : defaultLocale;
}
