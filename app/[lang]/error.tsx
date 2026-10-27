"use client";

import { useParams } from "next/navigation";
import { RouteError } from "@/components/route-error";
import { dictionaries } from "@/lib/dictionaries";
import { defaultLocale, hasLocale, type Locale } from "@/lib/i18n";

export default function Error({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  const params = useParams<{ lang: string }>();
  const locale: Locale = hasLocale(params.lang) ? params.lang : defaultLocale;

  return (
    <RouteError
      retry={retry}
      copy={dictionaries[locale].error}
      homeHref={`/${locale}`}
    />
  );
}
