import Image from "next/image";
import { ArrowRight, WhatsAppGlyph } from "@/components/icons";
import { ADDRESS, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Image
        src="/hero-repair.jpg"
        alt="Mecánico trabajando en motor de alto rendimiento en MM AUTOTECH"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      <div className="container-x relative z-10 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="surface-glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Taller multimarca · Castellón de la Plana
          </div>
          <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] font-extrabold tracking-tight text-white">
            Mecánica de <span className="text-metal">precisión.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
            Especialistas en mantenimiento y reparación multimarca. Presupuesto
            claro, trabajos garantizados y atención directa por WhatsApp.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red px-8 py-4 text-base"
            >
              <WhatsAppGlyph className="h-5 w-5 fill-current" />
              Escribir por WhatsApp
            </a>
            <a
              href="#contacto"
              className="btn-ghost hover:border-white/30 hover:bg-white/10"
            >
              Ver dirección <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              WhatsApp: {PHONE_DISPLAY}
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {ADDRESS}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
