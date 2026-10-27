import type { Locale } from "@/lib/i18n";

export const serviceIds = [
  "maintenance",
  "diagnosis",
  "brakes",
  "suspension",
  "engine",
  "electrical",
  "climate",
  "cooling",
  "gearbox",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
    jsonLdDescription: string;
  };
  whatsappMessage: string;
  nav: {
    home: string;
    services: string;
    contact: string;
    menu: string;
    language: string;
  };
  hero: {
    imageAlt: string;
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    whatsapp: string;
    address: string;
  };
  services: {
    kicker: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    quote: string;
    items: { id: ServiceId; title: string }[];
  };
  contact: {
    kicker: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    hoursValue: string;
    whatsapp: string;
    mapTitle: string;
    mapLink: string;
    form: {
      name: string;
      phone: string;
      message: string;
      submit: string;
      sent: string;
    };
  };
  footer: {
    blurb: string;
    contact: string;
    hours: string;
    week: string;
    saturday: string;
    copyright: string;
  };
  notFound: {
    title: string;
    body: string;
    home: string;
  };
  error: {
    title: string;
    body: string;
    retry: string;
    home: string;
  };
  whatsappFab: string;
};

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    meta: {
      title: "MM AUTOTECH — Taller mecánico multimarca de precisión",
      description:
        "MM AUTOTECH: taller mecánico multimarca con tecnología de diagnosis profesional. Mantenimiento, distribución, frenos, embrague, diagnosis electrónica y reparación con garantía.",
      ogAlt:
        "Mecánico trabajando en motor de alto rendimiento en MM AUTOTECH",
      jsonLdDescription:
        "Taller mecánico multimarca especializado en mantenimiento, diagnosis y reparación con tecnología profesional.",
    },
    whatsappMessage:
      "Hola, quiero solicitar un presupuesto para mi vehículo.",
    nav: {
      home: "Inicio",
      services: "Servicios",
      contact: "Contacto",
      menu: "Menú",
      language: "Idioma",
    },
    hero: {
      imageAlt:
        "Mecánico trabajando en motor de alto rendimiento en MM AUTOTECH",
      eyebrow: "Taller multimarca · Castellón de la Plana",
      titleLead: "Mecánica de ",
      titleAccent: "precisión.",
      body: "Especialistas en mantenimiento y reparación multimarca. Presupuesto claro, trabajos garantizados y atención directa por WhatsApp.",
      whatsapp: "Escribir por WhatsApp",
      address: "Ver dirección",
    },
    services: {
      kicker: "Servicios",
      titleLead: "Servicios de ",
      titleAccent: "mecánica.",
      body: "Trabajamos multimarca con diagnóstico profesional y garantía en cada intervención.",
      quote: "Solicitar presupuesto por WhatsApp",
      items: [
        { id: "maintenance", title: "Mantenimiento & Aceite" },
        { id: "diagnosis", title: "Diagnosis electrónica" },
        { id: "brakes", title: "Frenos" },
        { id: "suspension", title: "Suspensión" },
        { id: "engine", title: "Averías de motor" },
        { id: "electrical", title: "Electricidad & Baterías" },
        { id: "climate", title: "Aire acondicionado" },
        { id: "cooling", title: "Refrigeración" },
        { id: "gearbox", title: "Caja de cambios" },
      ],
    },
    contact: {
      kicker: "Contacto",
      titleLead: "Ven o escríbenos ",
      titleAccent: "por WhatsApp.",
      body: "Responde a tus dudas y presupuestos de forma rápida. También puedes traernos tu vehículo directamente.",
      address: "Dirección",
      phone: "Teléfono / WhatsApp",
      email: "Email",
      hours: "Horario",
      hoursValue: "Lun–Vie · 09:00 – 19:00 · Sáb · 09:00 – 14:00",
      whatsapp: "Escribir por WhatsApp",
      mapTitle: "Ubicación MM AUTOTECH en Google Maps",
      mapLink: "Abrir dirección en Google Maps",
      form: {
        name: "Nombre",
        phone: "Teléfono",
        message: "Mensaje",
        submit: "Enviar mensaje",
        sent: "Enviado ✓",
      },
    },
    footer: {
      blurb:
        "Taller multimarca especializado en mantenimiento y reparación con tecnología profesional.",
      contact: "Contacto",
      hours: "Horario",
      week: "Lun–Vie · 09:00–19:00",
      saturday: "Sáb · 09:00–14:00",
      copyright: "© {year} MM AUTOTECH · Mecánica de precisión.",
    },
    notFound: {
      title: "Página no encontrada",
      body: "La página que buscas no existe o ha sido movida.",
      home: "Volver al inicio",
    },
    error: {
      title: "Esta página no pudo cargarse",
      body: "Algo salió mal. Puedes intentarlo de nuevo o volver al inicio.",
      retry: "Reintentar",
      home: "Ir al inicio",
    },
    whatsappFab: "Contactar por WhatsApp",
  },
  en: {
    meta: {
      title: "MM AUTOTECH — Precision multi-brand workshop",
      description:
        "MM AUTOTECH: multi-brand mechanical workshop with professional diagnostic technology. Maintenance, timing belts, brakes, clutch, electronic diagnostics, and guaranteed repairs.",
      ogAlt: "Mechanic working on a high-performance engine at MM AUTOTECH",
      jsonLdDescription:
        "Multi-brand mechanical workshop specialized in maintenance, diagnostics, and repair with professional technology.",
    },
    whatsappMessage: "Hello, I would like a quote for my vehicle.",
    nav: {
      home: "Home",
      services: "Services",
      contact: "Contact",
      menu: "Menu",
      language: "Language",
    },
    hero: {
      imageAlt: "Mechanic working on a high-performance engine at MM AUTOTECH",
      eyebrow: "Multi-brand workshop · Castellón de la Plana",
      titleLead: "Precision ",
      titleAccent: "mechanics.",
      body: "Specialists in multi-brand maintenance and repair. Clear quotes, guaranteed work, and direct support on WhatsApp.",
      whatsapp: "Message on WhatsApp",
      address: "View address",
    },
    services: {
      kicker: "Services",
      titleLead: "Mechanical ",
      titleAccent: "services.",
      body: "Multi-brand work with professional diagnostics and a guarantee on every job.",
      quote: "Request a quote on WhatsApp",
      items: [
        { id: "maintenance", title: "Maintenance & oil" },
        { id: "diagnosis", title: "Electronic diagnostics" },
        { id: "brakes", title: "Brakes" },
        { id: "suspension", title: "Suspension" },
        { id: "engine", title: "Engine faults" },
        { id: "electrical", title: "Electrics & batteries" },
        { id: "climate", title: "Air conditioning" },
        { id: "cooling", title: "Cooling" },
        { id: "gearbox", title: "Gearbox" },
      ],
    },
    contact: {
      kicker: "Contact",
      titleLead: "Visit us or message us ",
      titleAccent: "on WhatsApp.",
      body: "Quick answers and quotes. You can also bring your vehicle in directly.",
      address: "Address",
      phone: "Phone / WhatsApp",
      email: "Email",
      hours: "Hours",
      hoursValue: "Mon–Fri · 09:00 – 19:00 · Sat · 09:00 – 14:00",
      whatsapp: "Message on WhatsApp",
      mapTitle: "MM AUTOTECH location on Google Maps",
      mapLink: "Open address in Google Maps",
      form: {
        name: "Name",
        phone: "Phone",
        message: "Message",
        submit: "Send message",
        sent: "Sent ✓",
      },
    },
    footer: {
      blurb:
        "Multi-brand workshop specialized in maintenance and repair with professional technology.",
      contact: "Contact",
      hours: "Hours",
      week: "Mon–Fri · 09:00–19:00",
      saturday: "Sat · 09:00–14:00",
      copyright: "© {year} MM AUTOTECH · Precision mechanics.",
    },
    notFound: {
      title: "Page not found",
      body: "The page you are looking for does not exist or has been moved.",
      home: "Back to home",
    },
    error: {
      title: "This page could not be loaded",
      body: "Something went wrong. You can try again or go back home.",
      retry: "Try again",
      home: "Go to home",
    },
    whatsappFab: "Contact on WhatsApp",
  },
};
