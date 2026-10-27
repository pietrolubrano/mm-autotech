import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "MM AUTOTECH",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <>
      <meta property="og:image" content="/hero-repair.jpg" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1088" />
      <meta
        property="og:image:alt"
        content="Mecánico trabajando en motor de alto rendimiento en MM AUTOTECH"
      />
      <meta name="twitter:image" content="/hero-repair.jpg" />
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
