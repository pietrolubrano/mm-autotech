"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CloseIcon } from "@/components/icons";
import { LogoMark } from "@/components/logo";
import { WHATSAPP_URL } from "@/lib/site";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/90 backdrop-blur-[24px]"
          : "bg-transparent"
      } ${scrolled && !open ? "border-b border-white/5" : ""}`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#inicio" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <LogoMark glow />
          <div className="leading-none">
            <div className="font-display text-lg font-extrabold tracking-tight whitespace-nowrap text-white">
              MM AUTOTECH
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.25em] whitespace-nowrap text-muted-foreground">
              Precision Motors
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red hidden text-sm md:inline-flex"
          >
            WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label="Menú"
            aria-expanded={open}
            className="p-2 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <div className="space-y-1.5">
                <div className="h-px w-6 bg-white" />
                <div className="h-px w-6 bg-white" />
                <div className="ml-auto h-px w-4 bg-white" />
              </div>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/5 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container-x flex flex-col py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-white/80 transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red mt-3 w-full justify-center"
              onClick={() => setOpen(false)}
            >
              WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
