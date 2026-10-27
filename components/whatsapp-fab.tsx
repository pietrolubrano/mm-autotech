import { WhatsAppGlyph } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed right-6 bottom-6 z-40"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
      <span className="shadow-elegant relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] transition-transform group-hover:scale-110">
        <WhatsAppGlyph className="h-7 w-7 fill-white" />
      </span>
    </a>
  );
}
