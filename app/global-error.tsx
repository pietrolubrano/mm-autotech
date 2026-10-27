"use client";

import { RouteError } from "@/components/route-error";
import { inter, manrope } from "@/lib/fonts";
import "./globals.css";

export default function GlobalError({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <RouteError retry={retry} />
      </body>
    </html>
  );
}
