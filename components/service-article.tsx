import Link from "next/link";
import { ArrowRight, WhatsAppGlyph } from "@/components/icons";
import { serviceIcons } from "@/components/services";
import { articleChrome, articlePath, type ArticleCopy } from "@/lib/articles";
import type { Dictionary, ServiceId } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/site";

export function ServiceArticle({
  locale,
  id,
  copy,
  dict,
  whatsappUrl,
  related,
}: {
  locale: Locale;
  id: ServiceId;
  copy: ArticleCopy;
  dict: Dictionary;
  whatsappUrl: string;
  related: { id: ServiceId; title: string }[];
}) {
  const chrome = articleChrome[locale];
  const Icon = serviceIcons[id];
  const path = articlePath(locale, id);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: dict.services.items.find((item) => item.id === id)?.title,
    serviceType: dict.services.items.find((item) => item.id === id)?.title,
    description: copy.description,
    url: `${SITE_URL}${path}`,
    areaServed: {
      "@type": "City",
      name: "Castellón de la Plana",
    },
    provider: {
      "@type": "AutoRepair",
      name: "MM AUTOTECH",
      telephone: PHONE_DISPLAY,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Alcora 18",
        postalCode: "12006",
        addressLocality: "Castellón de la Plana",
        addressCountry: "ES",
      },
    },
  };

  return (
    <article className="pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="container-x">
        <nav aria-label={chrome.kicker} className="mb-8 text-sm text-white/45">
          <Link href={`/${locale}`} className="transition-colors hover:text-white">
            {dict.nav.home}
          </Link>
          <span aria-hidden="true" className="px-2 text-white/25">
            /
          </span>
          <Link
            href={`/${locale}#servicios`}
            className="transition-colors hover:text-white"
          >
            {dict.nav.services}
          </Link>
          <span aria-hidden="true" className="px-2 text-white/25">
            /
          </span>
          <span className="text-white/70">
            {dict.services.items.find((item) => item.id === id)?.title}
          </span>
        </nav>

        <div className="max-w-3xl">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
            {chrome.kicker}
          </div>
          <h1 className="font-display text-4xl leading-[1.05] font-extrabold text-white md:text-6xl">
            {copy.h1Lead}
            <span className="text-metal">{copy.h1Accent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {copy.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="surface-glass rounded-2xl p-6 md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-extrabold text-white">
                {chrome.included}
              </h2>
            </div>
            <ul className="space-y-3 text-white/70">
              {copy.included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="surface-glass rounded-2xl p-6">
              <h2 className="font-display text-xl font-extrabold text-white">
                {chrome.when}
              </h2>
              <p className="mt-3 leading-relaxed text-white/65">{copy.when}</p>
            </div>
            <div className="surface-glass rounded-2xl p-6 text-sm text-white/70">
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/45">
                {dict.contact.address}
              </div>
              <div className="mt-1 text-white">{ADDRESS}</div>
              <div className="mt-4 text-[10px] uppercase tracking-[0.25em] text-white/45">
                {dict.contact.phone}
              </div>
              <a href={PHONE_TEL} className="mt-1 block text-white hover:text-primary">
                {PHONE_DISPLAY}
              </a>
              <div className="mt-4 text-[10px] uppercase tracking-[0.25em] text-white/45">
                {dict.contact.hours}
              </div>
              <div className="mt-1 text-white">{dict.contact.hoursValue}</div>
            </div>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red mt-10 px-8 py-4 text-base"
        >
          <WhatsAppGlyph className="h-5 w-5 fill-current" />
          {chrome.quote}
        </a>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-extrabold text-white">
            {chrome.related}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <li key={item.id}>
                <Link
                  href={articlePath(locale, item.id)}
                  className="surface-glass flex items-center justify-between gap-3 rounded-2xl px-4 py-4 text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.title}
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={`/${locale}#servicios`}
            className="mt-6 inline-flex items-center gap-2 text-sm text-primary transition-all hover:gap-3"
          >
            {chrome.back}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
