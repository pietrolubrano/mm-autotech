"use client";

import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";

export function RouteError({
  retry,
  copy,
  homeHref,
}: {
  retry: () => void;
  copy: Dictionary["error"];
  homeHref: string;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <meta property="og:image" content="/og-preview.png" />
      <meta name="twitter:image" content="/og-preview.png" />
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold text-foreground">{copy.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{copy.body}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button type="button" className="btn-red" onClick={() => retry()}>
            {copy.retry}
          </button>
          <Link href={homeHref} className="btn-ghost">
            {copy.home}
          </Link>
        </div>
      </div>
    </div>
  );
}
