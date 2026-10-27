import { lang } from "next/root-params";
import { defaultLocale, hasLocale, type Locale } from "@/lib/i18n";

export async function getLocale(): Promise<Locale> {
  const value = await lang();
  return hasLocale(value) ? value : defaultLocale;
}
