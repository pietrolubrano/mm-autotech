import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <meta property="og:image" content="/og-preview.png" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image:alt" content="MM AUTOTECH" />
      <meta name="twitter:image" content="/og-preview.png" />
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Página no encontrada
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o ha sido movida.
        </p>
        <div className="mt-6">
          <Link href="/" className="btn-red">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
