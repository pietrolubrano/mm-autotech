import { notFound } from "next/navigation";
import { locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang, slug: ["404"] }));
}

export default async function MissingPage({
  params,
}: PageProps<"/[lang]/[...slug]">) {
  await params;
  notFound();
}
