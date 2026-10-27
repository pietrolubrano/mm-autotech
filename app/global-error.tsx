"use client";

import { usePathname } from "next/navigation";
import { RouteError } from "@/components/route-error";
import { dictionaries } from "@/lib/dictionaries";
import { inter, manrope } from "@/lib/fonts";
import { localeFromPathname } from "@/lib/i18n";
import "./globals.css";

export default function GlobalError({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  const locale = localeFromPathname(usePathname());
  const copy = dictionaries[locale].error;

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <RouteError retry={retry} copy={copy} homeHref={`/${locale}`} />
      </body>
    </html>
  );
}
