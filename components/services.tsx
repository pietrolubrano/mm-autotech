import Link from "next/link";
import {
  ArrowRight,
  BoltIcon,
  CarIcon,
  CogIcon,
  CpuIcon,
  DiscIcon,
  GaugeIcon,
  SnowflakeIcon,
  ThermometerIcon,
  WrenchIcon,
} from "@/components/icons";
import { articlePath } from "@/lib/articles";
import type { Dictionary, ServiceId } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export const serviceIcons: Record<ServiceId, typeof WrenchIcon> = {
  maintenance: WrenchIcon,
  diagnosis: CpuIcon,
  brakes: DiscIcon,
  suspension: CarIcon,
  engine: GaugeIcon,
  electrical: BoltIcon,
  climate: SnowflakeIcon,
  cooling: ThermometerIcon,
  gearbox: CogIcon,
};

export function Services({
  copy,
  whatsappUrl,
  locale,
}: {
  copy: Dictionary["services"];
  whatsappUrl: string;
  locale: Locale;
}) {
  return (
    <section id="servicios" className="relative py-24">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
            {copy.kicker}
          </div>
          <h2 className="font-display text-4xl leading-[1.05] font-extrabold text-white md:text-5xl lg:text-6xl">
            {copy.titleLead}
            <span className="text-metal">{copy.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            {copy.body}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((service) => {
            const Icon = serviceIcons[service.id];
            return (
              <Link
                key={service.id}
                href={articlePath(locale, service.id)}
                className="surface-glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:bg-surface/80"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display flex-1 font-semibold text-white">
                  {service.title}
                </h3>
                <ArrowRight className="h-4 w-4 shrink-0 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary transition-all hover:gap-3"
          >
            {copy.quote}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
