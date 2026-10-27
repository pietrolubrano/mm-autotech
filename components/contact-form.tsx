"use client";

import { useRef, useState, type FormEvent } from "react";
import { SendIcon } from "@/components/icons";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const timer = useRef<number | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setSent(false), 4000);
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50">
            Nombre
          </span>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3.5 text-white transition-colors focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50">
            Teléfono
          </span>
          <input
            type="tel"
            name="phone"
            required
            className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3.5 text-white transition-colors focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50">
          Mensaje
        </span>
        <textarea
          name="msg"
          rows={4}
          className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3.5 text-white transition-colors focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none"
        />
      </label>
      <button type="submit" className="btn-ghost w-full hover:bg-white/10 sm:w-auto">
        {sent ? (
          "Enviado ✓"
        ) : (
          <>
            Enviar mensaje <SendIcon className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
