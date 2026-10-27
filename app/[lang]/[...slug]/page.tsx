import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ServiceArticle } from "@/components/service-article";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import {
  allArticleParams,
  articlePaths,
  findArticle,
} from "@/lib/articles";
import { dictionaries } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { SITE_URL, whatsappHref } from "@/lib/site";

export function generateStaticParams() {
  return allArticleParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/[...slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang) || slug.length !== 1) return {};
  const article = findArticle(lang, slug[0]);
  if (!article) return {};
  const paths = articlePaths(article.id);
  return {
    metadataBase: new URL(SITE_URL),
    title: article.copy.title,
    description: article.copy.description,
    alternates: {
      canonical: paths[lang],
      languages: {
        es: paths.es,
        en: paths.en,
        "x-default": paths.es,
      },
    },
    openGraph: {
      siteName: "MM AUTOTECH",
      title: article.copy.title,
      description: article.copy.description,
      type: "article",
      url: paths[lang],
    },
    twitter: {
      card: "summary_large_image",
      title: article.copy.title,
      description: article.copy.description,
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/[lang]/[...slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang) || slug.length !== 1) notFound();
  const article = findArticle(lang, slug[0]);
  if (!article) notFound();

  const dict = dictionaries[lang];
  const whatsappUrl = whatsappHref(article.copy.whatsappMessage);
  const related = dict.services.items.filter((item) => item.id !== article.id);

  return (
    <>
      <Header
        locale={lang}
        copy={dict.nav}
        whatsappUrl={whatsappUrl}
        localeHrefs={articlePaths(article.id)}
      />
      <main>
        <ServiceArticle
          locale={lang}
          id={article.id}
          copy={article.copy}
          dict={dict}
          whatsappUrl={whatsappUrl}
          related={related}
        />
      </main>
      <Footer copy={dict.footer} whatsappUrl={whatsappUrl} />
      <WhatsAppFab label={dict.whatsappFab} whatsappUrl={whatsappUrl} />
    </>
  );
}
