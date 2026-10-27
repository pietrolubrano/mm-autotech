import type { Metadata, Viewport } from "next";
import { dictionaries } from "@/lib/dictionaries";
import { inter, manrope } from "@/lib/fonts";
import { defaultLocale, hasLocale, locales, type Locale } from "@/lib/i18n";
import { buildJsonLd, siteMetadata } from "@/lib/site";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : defaultLocale;
  return siteMetadata(locale, dictionaries[locale], false);
}

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : defaultLocale;
  const dict = dictionaries[locale];

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildJsonLd(dict.meta.jsonLdDescription)).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
