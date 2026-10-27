"use client";

import Link from "next/link";
import { locales, LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE, type Locale } from "@/lib/i18n";

function rememberLocale(locale: Locale) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
}

export function LanguageSwitch({
  locale,
  label,
  onNavigate,
}: {
  locale: Locale;
  label: string;
  onNavigate?: () => void;
}) {
  return (
    <nav aria-label={label} className="flex items-center text-sm">
      {locales.map((code, index) => {
        const active = code === locale;
        return (
          <span key={code} className="flex items-center">
            {index > 0 ? (
              <span aria-hidden="true" className="px-1.5 text-white/30">
                /
              </span>
            ) : null}
            <Link
              href={`/${code}`}
              hrefLang={code}
              lang={code}
              prefetch
              aria-current={active ? "true" : undefined}
              className={
                active
                  ? "relative text-white"
                  : "text-white/45 transition-colors hover:text-white"
              }
              onClick={() => {
                rememberLocale(code);
                onNavigate?.();
              }}
            >
              {code.toUpperCase()}
              {active ? (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-primary" />
              ) : null}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
