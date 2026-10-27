import { cacheLife } from "next/cache";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { LogoMark } from "@/components/logo";
import type { Dictionary } from "@/lib/dictionaries";
import {
  ADDRESS,
  EMAIL,
  MAPS_SEARCH,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/site";

async function copyrightYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function Footer({
  copy,
  whatsappUrl,
}: {
  copy: Dictionary["footer"];
  whatsappUrl: string;
}) {
  const year = await copyrightYear();

  return (
    <footer className="border-t border-white/5 bg-background pt-16 pb-8">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <LogoMark />
              <div className="font-display font-extrabold text-white">
                MM AUTOTECH
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/50">{copy.blurb}</p>
          </div>
          <div>
            <div className="mb-5 text-xs uppercase tracking-[0.25em] text-white/60">
              {copy.contact}
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={PHONE_TEL}
                  className="text-white/60 transition-colors hover:text-primary"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white/60 transition-colors hover:text-primary"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={MAPS_SEARCH}
                  className="text-white/60 transition-colors hover:text-primary"
                >
                  {ADDRESS}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  className="text-white/60 transition-colors hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-5 text-xs uppercase tracking-[0.25em] text-white/60">
              {copy.hours}
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-white/60">{copy.week}</span>
              </li>
              <li>
                <span className="text-white/60">{copy.saturday}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="hairline my-10" />
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 md:flex-row">
          <div>{copy.copyright.replace("{year}", String(year))}</div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="transition-colors hover:text-primary"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="transition-colors hover:text-primary"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
