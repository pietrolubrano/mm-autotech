import { NotFoundScreen } from "@/components/not-found-screen";
import { getLocale } from "@/lib/locale";

export default async function NotFound() {
  const locale = await getLocale();
  return <NotFoundScreen locale={locale} />;
}
