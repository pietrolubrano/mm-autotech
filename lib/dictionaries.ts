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
    reviews: string;
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
  reviews: {
    kicker: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    score: string;
    scoreValue: number;
    scoreLabel: string;
    googleLink: string;
    starsLabel: string;
    items: {
      name: string;
      rating: number;
      when: string;
      text: string;
      authorReviews?: string;
    }[];
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
      reviews: "Reseñas",
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
    reviews: {
      kicker: "Google",
      titleLead: "Lo que dicen ",
      titleAccent: "en Google.",
      body: "Opiniones de clientes del taller en Castellón de la Plana.",
      score: "4,6",
      scoreValue: 4.6,
      scoreLabel: "Nota en Google",
      googleLink: "Ver en Google Maps",
      starsLabel: "{n} de 5",
      items: [
        {
          name: "Lorea Navarro almena",
          rating: 5,
          when: "Hace 3 meses",
          authorReviews: "4 reseñas",
          text: "El trato muy bueno y muy profesionales. Y muy rápidos. Sin duda ninguna cuando volvamos a tener un problema con el coche iremos a ellos",
        },
        {
          name: "Jose gregorio Hernandez silva",
          rating: 5,
          when: "Hace 4 meses",
          text: "Muy buen trato. Excelente trabajo el de los chicos. Recomendado al 100% el coche ha quedado de lujo. Calidad y confianza",
        },
        {
          name: "Dalmiro",
          rating: 5,
          when: "Hace 5 meses",
          text: "Taller de confianza total. Siempre llevo mi coche para revisión pre itv. Muy profesionales y sobre todo honestos. Trato impecable y buen precio. Recomendados 100%",
        },
        {
          name: "Ricardo Solsona",
          rating: 5,
          when: "Hace 5 meses",
          text: "Muy buen taller. Trabajan mecánica y electricidad y el servicio es de 10. Profesional, rápido y con buenos precios. Se nota cuando alguien hace las cosas con ganas y bien hechas. Recomendadísimo.",
        },
        {
          name: "Cristhian David",
          rating: 5,
          when: "Hace 3 meses",
          text: "Excelente servicio y trato total mente buenos profesionales vengo a vacaciones con mi.auto desde belgica y el servicio es excelente lo recomiendo de verdad",
        },
        {
          name: "Luis Orts Gomez",
          rating: 5,
          when: "Hace 1 mes",
          text: "Que suerte tuve de tener el pinchazo delante de este taller! Tenia que volver a Barcelona urgente y el señor me reparó el neumatico, fuera de horario y com muy buena cara, en menos de 20 minutos. Gente con ganas de trabajar y ayudar! Muchas gracias!",
        },
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
      reviews: "Reviews",
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
    reviews: {
      kicker: "Google",
      titleLead: "What customers say ",
      titleAccent: "on Google.",
      body: "Reviews from customers of the workshop in Castellón de la Plana.",
      score: "4.6",
      scoreValue: 4.6,
      scoreLabel: "Google rating",
      googleLink: "See on Google Maps",
      starsLabel: "{n} out of 5",
      items: [
        {
          name: "Lorea Navarro almena",
          rating: 5,
          when: "3 months ago",
          authorReviews: "4 reviews",
          text: "Really good service, and very professional. And very fast. Without any doubt, the next time we have a problem with the car we will go back to them.",
        },
        {
          name: "Jose gregorio Hernandez silva",
          rating: 5,
          when: "4 months ago",
          text: "Very good service. Excellent work from the team. Recommended 100%. The car looks great. Quality and trust.",
        },
        {
          name: "Dalmiro",
          rating: 5,
          when: "5 months ago",
          text: "A workshop you can trust completely. I always take my car in for the pre-ITV check. Very professional and, above all, honest. Impeccable service and a fair price. Recommended 100%.",
        },
        {
          name: "Ricardo Solsona",
          rating: 5,
          when: "5 months ago",
          text: "A very good workshop. They do mechanical and electrical work, and the service is a 10. Professional, fast, and fairly priced. You can tell when someone enjoys the work and does it properly. Highly recommended.",
        },
        {
          name: "Cristhian David",
          rating: 5,
          when: "3 months ago",
          text: "Excellent service and treatment, truly good professionals. I come on holiday with my car from Belgium and the service is excellent. I really recommend them.",
        },
        {
          name: "Luis Orts Gomez",
          rating: 5,
          when: "1 month ago",
          text: "I was lucky to get a puncture right in front of this workshop! I had to get back to Barcelona urgently, and he repaired the tyre after hours, with a smile, in less than 20 minutes. People who want to work and to help. Thank you so much!",
        },
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
