"use client";

import Link from "next/link";

export function RouteError({ retry }: { retry: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <meta property="og:image" content="/og-preview.png" />
      <meta name="twitter:image" content="/og-preview.png" />
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold text-foreground">
          Esta página no pudo cargarse
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo salió mal. Puedes intentarlo de nuevo o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button type="button" className="btn-red" onClick={() => retry()}>
            Reintentar
          </button>
          <Link href="/" className="btn-ghost">
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
