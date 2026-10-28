import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { dictionaries } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { siteMetadata, whatsappHref } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return siteMetadata(lang, dictionaries[lang], true);
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = dictionaries[lang];
  const whatsappUrl = whatsappHref(dict.whatsappMessage);

  return (
    <>
      <meta property="og:image" content="/hero-repair.jpg" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1088" />
      <meta property="og:image:alt" content={dict.meta.ogAlt} />
      <meta name="twitter:image" content="/hero-repair.jpg" />
      <Header locale={lang} copy={dict.nav} whatsappUrl={whatsappUrl} />
      <main>
        <Hero copy={dict.hero} whatsappUrl={whatsappUrl} />
        <Services copy={dict.services} whatsappUrl={whatsappUrl} locale={lang} />
        <Reviews copy={dict.reviews} />
        <Contact copy={dict.contact} whatsappUrl={whatsappUrl} lang={lang} />
      </main>
      <Footer copy={dict.footer} whatsappUrl={whatsappUrl} />
      <WhatsAppFab label={dict.whatsappFab} whatsappUrl={whatsappUrl} />
    </>
  );
}
