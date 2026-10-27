import { ContactForm } from "@/components/contact-form";
import {
  ArrowRight,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppGlyph,
} from "@/components/icons";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

import {
  ADDRESS,
  EMAIL,
  MAPS_EMBED,
  MAPS_SEARCH,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/site";

export function Contact({
  copy,
  whatsappUrl,
  lang
}: {
  copy: Dictionary["contact"];
  whatsappUrl: string;
  lang: Locale;
}) {
  return (
    <section id="contacto" className="py-24">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-8">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
              {copy.kicker}
            </div>
            <h2 className="font-display text-4xl leading-tight font-extrabold text-white md:text-5xl">
              {copy.titleLead}
              <span className="text-metal">{copy.titleAccent}</span>
            </h2>
            <p className="mt-6 max-w-md text-white/60">{copy.body}</p>
          </div>

          <div className="surface-glass space-y-5 rounded-2xl p-6">
            <a href={MAPS_SEARCH} className="group block transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <MapPinIcon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 group-hover:text-primary">
                    {copy.address}
                  </div>
                  <div className="mt-0.5 text-sm text-white group-hover:text-primary">
                    {ADDRESS}
                  </div>
                </div>
              </div>
            </a>
            <a href={PHONE_TEL} className="group block transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <PhoneIcon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 group-hover:text-primary">
                    {copy.phone}
                  </div>
                  <div className="mt-0.5 text-sm text-white group-hover:text-primary">
                    {PHONE_DISPLAY}
                  </div>
                </div>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="group block transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <MailIcon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 group-hover:text-primary">
                    {copy.email}
                  </div>
                  <div className="mt-0.5 text-sm text-white group-hover:text-primary">
                    {EMAIL}
                  </div>
                </div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <ClockIcon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                  {copy.hours}
                </div>
                <div className="mt-0.5 text-sm text-white">{copy.hoursValue}</div>
              </div>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red w-full justify-center py-4 text-base"
          >
            <WhatsAppGlyph className="h-5 w-5 fill-current" />
            {copy.whatsapp}
          </a>

          <ContactForm copy={copy.form} />
        </div>

        <div className="h-fit overflow-hidden rounded-2xl border border-white/10 bg-surface">
          <div className="relative aspect-[4/3] bg-black">
            <iframe
              title={copy.mapTitle}
              src={MAPS_EMBED(lang)}
              className="h-full w-full opacity-90"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent" />
          </div>
          <a
            href={MAPS_SEARCH}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 border-t border-white/10 py-4 text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            {copy.mapLink}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
