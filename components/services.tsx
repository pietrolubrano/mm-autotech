import type { ReactNode } from "react";
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
import { WHATSAPP_URL } from "@/lib/site";

const services: { title: string; icon: ReactNode }[] = [
  { title: "Mantenimiento & Aceite", icon: <WrenchIcon className="h-5 w-5" /> },
  { title: "Diagnosis electrónica", icon: <CpuIcon className="h-5 w-5" /> },
  { title: "Frenos", icon: <DiscIcon className="h-5 w-5" /> },
  { title: "Suspensión", icon: <CarIcon className="h-5 w-5" /> },
  { title: "Averías de motor", icon: <GaugeIcon className="h-5 w-5" /> },
  { title: "Electricidad & Baterías", icon: <BoltIcon className="h-5 w-5" /> },
  { title: "Aire acondicionado", icon: <SnowflakeIcon className="h-5 w-5" /> },
  { title: "Refrigeración", icon: <ThermometerIcon className="h-5 w-5" /> },
  { title: "Caja de cambios", icon: <CogIcon className="h-5 w-5" /> },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
            Servicios
          </div>
          <h2 className="font-display text-4xl leading-[1.05] font-extrabold text-white md:text-5xl lg:text-6xl">
            Servicios de <span className="text-metal">mecánica.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Trabajamos multimarca con diagnóstico profesional y garantía en cada
            intervención.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="surface-glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:bg-surface/80"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="font-display font-semibold text-white">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary transition-all hover:gap-3"
          >
            Solicitar presupuesto por WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
