import type { ServiceId } from "@/lib/dictionaries";
import { serviceIds } from "@/lib/dictionaries";
import { locales, type Locale } from "@/lib/i18n";

export type ArticleCopy = {
  slug: string;
  title: string;
  description: string;
  h1Lead: string;
  h1Accent: string;
  intro: string;
  included: string[];
  when: string;
  whatsappMessage: string;
};

export const articleChrome = {
  es: {
    kicker: "Taller en Castellón de la Plana",
    included: "Qué incluye",
    when: "Cuándo venir",
    related: "Otros servicios",
    back: "Volver a servicios",
    quote: "Pedir presupuesto por WhatsApp",
  },
  en: {
    kicker: "Workshop in Castellón de la Plana",
    included: "What's included",
    when: "When to come in",
    related: "Other services",
    back: "Back to services",
    quote: "Request a quote on WhatsApp",
  },
} as const;

const articles: Record<ServiceId, Record<Locale, ArticleCopy>> = {
  maintenance: {
    es: {
      slug: "mantenimiento-y-aceite",
      title: "Mantenimiento y cambio de aceite en Castellón de la Plana | MM AUTOTECH",
      description:
        "Cambio de aceite, filtros y mantenimiento multimarca en Castellón de la Plana. Presupuesto claro por WhatsApp en MM AUTOTECH, Av. Alcora 18.",
      h1Lead: "Mantenimiento y ",
      h1Accent: "cambio de aceite.",
      intro:
        "En MM AUTOTECH hacemos el mantenimiento de turismos multimarca en Castellón de la Plana. Cambiamos el aceite y los filtros, revisamos niveles y te decimos qué conviene hacer ahora y qué puede esperar, antes de tocar el coche.",
      included: [
        "Cambio de aceite y filtro de aceite",
        "Filtro de aire y de habitáculo",
        "Revisión de niveles, luces y estado general",
        "Presupuesto por escrito de lo que no es urgente",
      ],
      when: "Pide cita si se acerca el intervalo del fabricante, se enciende el testigo de servicio o el motor suena más de lo normal. El taller está en Av. Alcora 18, en Castellón de la Plana, y puedes traer el vehículo directamente.",
      whatsappMessage:
        "Hola, quiero un presupuesto de mantenimiento y cambio de aceite para mi vehículo.",
    },
    en: {
      slug: "maintenance-and-oil",
      title: "Oil change and servicing in Castellón de la Plana | MM AUTOTECH",
      description:
        "Multi-brand oil changes, filters and servicing in Castellón de la Plana. Clear WhatsApp quotes at MM AUTOTECH, Av. Alcora 18.",
      h1Lead: "Servicing and ",
      h1Accent: "oil changes.",
      intro:
        "MM AUTOTECH services multi-brand cars in Castellón de la Plana. We change the oil and filters, check fluid levels, and tell you what should be done now and what can wait before any work starts.",
      included: [
        "Oil and oil-filter change",
        "Air filter and cabin filter",
        "Check of levels, lights and general condition",
        "A written quote for anything that is not urgent",
      ],
      when: "Book in when the manufacturer interval is due, the service light is on, or the engine sounds rougher than usual. The workshop is at Av. Alcora 18 in Castellón de la Plana, and you can bring the car in directly.",
      whatsappMessage:
        "Hello, I would like a quote for servicing and an oil change for my vehicle.",
    },
  },
  diagnosis: {
    es: {
      slug: "diagnosis-electronica",
      title: "Diagnosis electrónica del coche en Castellón de la Plana | MM AUTOTECH",
      description:
        "Lectura de averías y diagnosis electrónica multimarca en Castellón de la Plana. En MM AUTOTECH te explicamos el fallo y el presupuesto por WhatsApp.",
      h1Lead: "Diagnosis ",
      h1Accent: "electrónica.",
      intro:
        "Si el cuadro se enciende o el coche falla sin una causa clara, en el taller de Castellón de la Plana leemos la centralita y contrastamos el código con el síntoma. No cambiamos piezas a ciegas: primero localizamos el fallo.",
      included: [
        "Lectura y borrado de códigos de avería",
        "Comprobación del síntoma en el vehículo",
        "Diagnóstico de motor, ABS, airbag y confort",
        "Explicación del fallo y del siguiente paso",
      ],
      when: "Ven si hay un testigo encendido, el coche entra en modo de emergencia, pierde potencia o algún sistema deja de funcionar. Estamos en Av. Alcora 18 y respondemos al presupuesto por WhatsApp.",
      whatsappMessage:
        "Hola, quiero una diagnosis electrónica para mi vehículo en Castellón.",
    },
    en: {
      slug: "electronic-diagnostics",
      title: "Car electronic diagnostics in Castellón de la Plana | MM AUTOTECH",
      description:
        "Fault-code reading and multi-brand electronic diagnostics in Castellón de la Plana. MM AUTOTECH explains the fault and quotes on WhatsApp.",
      h1Lead: "Electronic ",
      h1Accent: "diagnostics.",
      intro:
        "If a warning light is on or the car fails without an obvious cause, the Castellón de la Plana workshop reads the control unit and checks the code against the symptom. We do not replace parts blindly: we find the fault first.",
      included: [
        "Fault-code reading and clearing",
        "Checking the symptom on the vehicle",
        "Engine, ABS, airbag and comfort-system diagnosis",
        "A plain explanation of the fault and the next step",
      ],
      when: "Come in if a warning light stays on, the car goes into limp mode, it loses power, or a system stops working. We are at Av. Alcora 18 and send the quote on WhatsApp.",
      whatsappMessage:
        "Hello, I would like electronic diagnostics for my vehicle in Castellón.",
    },
  },
  brakes: {
    es: {
      slug: "frenos",
      title: "Frenos en Castellón de la Plana | MM AUTOTECH",
      description:
        "Pastillas, discos y revisión de frenos en un taller multimarca de Castellón de la Plana. Presupuesto por WhatsApp en MM AUTOTECH, Av. Alcora 18.",
      h1Lead: "Frenos en ",
      h1Accent: "Castellón.",
      intro:
        "Revisamos y reparamos frenos de turismos multimarca en Castellón de la Plana. Medimos discos y pastillas, comprobamos el tacto del pedal y te pasamos el presupuesto antes de sustituir nada.",
      included: [
        "Pastillas y discos de freno",
        "Revisión de pinzas, latiguillos y líquido",
        "Comprobación de ruidos y vibración al frenar",
        "Presupuesto separado de lo urgente y lo que puede esperar",
      ],
      when: "Trae el coche si chirría, vibra al frenar, el pedal se hunde o el testigo de freno está encendido. El taller está en Av. Alcora 18, Castellón de la Plana.",
      whatsappMessage: "Hola, quiero un presupuesto de frenos para mi vehículo.",
    },
    en: {
      slug: "brakes",
      title: "Brakes in Castellón de la Plana | MM AUTOTECH",
      description:
        "Pads, discs and brake checks at a multi-brand workshop in Castellón de la Plana. WhatsApp quotes at MM AUTOTECH, Av. Alcora 18.",
      h1Lead: "Brakes in ",
      h1Accent: "Castellón.",
      intro:
        "We inspect and repair brakes on multi-brand cars in Castellón de la Plana. We measure discs and pads, check the pedal feel, and send the quote before replacing anything.",
      included: [
        "Brake pads and discs",
        "Check of calipers, hoses and fluid",
        "Noise and vibration when braking",
        "A quote that separates urgent work from what can wait",
      ],
      when: "Bring the car in if it squeals, shakes when braking, the pedal sinks, or the brake warning light is on. The workshop is at Av. Alcora 18, Castellón de la Plana.",
      whatsappMessage: "Hello, I would like a quote for brakes for my vehicle.",
    },
  },
  suspension: {
    es: {
      slug: "suspension",
      title: "Suspensión y amortiguadores en Castellón de la Plana | MM AUTOTECH",
      description:
        "Amortiguadores, rótulas y suspensión en Castellón de la Plana. Taller multimarca MM AUTOTECH, presupuesto por WhatsApp, Av. Alcora 18.",
      h1Lead: "Suspensión en ",
      h1Accent: "Castellón.",
      intro:
        "Si el coche balancea, golpea en los baches o desgasta mal el neumático, revisamos la suspensión en el taller de Castellón de la Plana. Localizamos la pieza y te decimos el coste antes de cambiarla.",
      included: [
        "Amortiguadores y copelas",
        "Rótulas, silentblocks y bieletas",
        "Revisión de holguras y desgaste irregular",
        "Presupuesto de la reparación concreta",
      ],
      when: "Conviene venir si oyes golpes en camino irregular, el volante no vuelve centrado o la ITV marca un defecto de suspensión. Estamos en Av. Alcora 18.",
      whatsappMessage: "Hola, quiero un presupuesto de suspensión para mi vehículo.",
    },
    en: {
      slug: "suspension",
      title: "Suspension and shock absorbers in Castellón de la Plana | MM AUTOTECH",
      description:
        "Shock absorbers, ball joints and suspension in Castellón de la Plana. Multi-brand workshop MM AUTOTECH, WhatsApp quotes, Av. Alcora 18.",
      h1Lead: "Suspension in ",
      h1Accent: "Castellón.",
      intro:
        "If the car wallows, knocks over bumps or wears a tyre unevenly, we check the suspension at the Castellón de la Plana workshop. We find the part and tell you the cost before replacing it.",
      included: [
        "Shock absorbers and top mounts",
        "Ball joints, bushes and drop links",
        "Check for play and uneven wear",
        "A quote for the specific repair",
      ],
      when: "Come in if you hear knocks on rough roads, the steering does not self-centre, or the inspection flagged the suspension. We are at Av. Alcora 18.",
      whatsappMessage: "Hello, I would like a quote for suspension work on my vehicle.",
    },
  },
  engine: {
    es: {
      slug: "averias-de-motor",
      title: "Averías de motor en Castellón de la Plana | MM AUTOTECH",
      description:
        "Diagnosis y reparación de averías de motor en Castellón de la Plana. Taller multimarca MM AUTOTECH, presupuesto claro por WhatsApp.",
      h1Lead: "Averías de ",
      h1Accent: "motor.",
      intro:
        "Diagnosticamos averías de motor en turismos multimarca en Castellón de la Plana. Empezamos por el síntoma y la lectura electrónica, y solo abrimos el motor cuando hace falta. El presupuesto llega antes de la reparación.",
      included: [
        "Pérdidas de potencia, tirones y ralentí inestable",
        "Consumo de aceite o refrigerante y fugas",
        "Cadenas, correas de accesorios y sensores",
        "Reparación con explicación de la causa",
      ],
      when: "No esperes si el motor se calienta, humea, pierde fuerza o se enciende el testigo. Llama o escribe por WhatsApp y trae el coche a Av. Alcora 18, Castellón de la Plana.",
      whatsappMessage: "Hola, quiero un presupuesto por una avería de motor.",
    },
    en: {
      slug: "engine-faults",
      title: "Engine fault repair in Castellón de la Plana | MM AUTOTECH",
      description:
        "Diagnosis and repair of engine faults in Castellón de la Plana. Multi-brand workshop MM AUTOTECH, with a clear quote on WhatsApp.",
      h1Lead: "Engine ",
      h1Accent: "faults.",
      intro:
        "We diagnose engine faults on multi-brand cars in Castellón de la Plana. We start with the symptom and an electronic reading, and we only open the engine when that is required. The quote arrives before the repair.",
      included: [
        "Loss of power, hesitation and uneven idle",
        "Oil or coolant use, and leaks",
        "Chains, auxiliary belts and sensors",
        "Repair with an explanation of the cause",
      ],
      when: "Do not wait if the engine overheats, smokes, loses power or a warning light comes on. Message us on WhatsApp and bring the car to Av. Alcora 18, Castellón de la Plana.",
      whatsappMessage: "Hello, I would like a quote for an engine fault.",
    },
  },
  electrical: {
    es: {
      slug: "electricidad-y-baterias",
      title: "Electricidad y baterías del coche en Castellón de la Plana | MM AUTOTECH",
      description:
        "Baterías, alternador y fallos eléctricos en Castellón de la Plana. MM AUTOTECH revisa el circuito y pasa presupuesto por WhatsApp.",
      h1Lead: "Electricidad y ",
      h1Accent: "baterías.",
      intro:
        "En el taller de Castellón de la Plana comprobamos batería, carga y consumos parásitos antes de cambiar piezas. Si el coche no arranca o se queda sin corriente, medimos el circuito y te decimos la causa.",
      included: [
        "Prueba de batería y sustitución",
        "Alternador, motor de arranque y masa",
        "Consumos con el contacto quitado",
        "Fallos de elevalunas, cierre e iluminación",
      ],
      when: "Ven si cuesta arrancar por la mañana, las luces pierden intensidad o algún mando deja de responder. Estamos en Av. Alcora 18 y el presupuesto sale por WhatsApp.",
      whatsappMessage:
        "Hola, quiero un presupuesto de electricidad o batería para mi vehículo.",
    },
    en: {
      slug: "electrics-and-batteries",
      title: "Car electrics and batteries in Castellón de la Plana | MM AUTOTECH",
      description:
        "Batteries, alternators and electrical faults in Castellón de la Plana. MM AUTOTECH checks the circuit and quotes on WhatsApp.",
      h1Lead: "Electrics and ",
      h1Accent: "batteries.",
      intro:
        "At the Castellón de la Plana workshop we test the battery, charging and parasitic drain before replacing parts. If the car will not start or keeps going flat, we measure the circuit and tell you the cause.",
      included: [
        "Battery test and replacement",
        "Alternator, starter motor and earths",
        "Drain with the ignition off",
        "Window, locking and lighting faults",
      ],
      when: "Come in if it struggles to start in the morning, the lights dim, or a switch stops responding. We are at Av. Alcora 18 and the quote goes out on WhatsApp.",
      whatsappMessage:
        "Hello, I would like a quote for electrics or a battery for my vehicle.",
    },
  },
  climate: {
    es: {
      slug: "aire-acondicionado",
      title: "Aire acondicionado del coche en Castellón de la Plana | MM AUTOTECH",
      description:
        "Carga y reparación del aire acondicionado en Castellón de la Plana. Taller multimarca MM AUTOTECH, presupuesto por WhatsApp, Av. Alcora 18.",
      h1Lead: "Aire ",
      h1Accent: "acondicionado.",
      intro:
        "El calor en Castellón se nota enseguida si el aire no enfría. En MM AUTOTECH revisamos el circuito, buscamos fugas y recargamos solo cuando el sistema está estanco. Te decimos el presupuesto antes de la carga.",
      included: [
        "Comprobación de presión y temperatura de salida",
        "Búsqueda de fugas",
        "Recarga cuando el circuito lo permite",
        "Revisión de filtro de habitáculo y ventilador",
      ],
      when: "Pide cita si el aire sale templado, huele mal al encenderlo o el compresor no entra. El taller está en Av. Alcora 18, Castellón de la Plana.",
      whatsappMessage:
        "Hola, quiero un presupuesto del aire acondicionado de mi vehículo.",
    },
    en: {
      slug: "air-conditioning",
      title: "Car air conditioning in Castellón de la Plana | MM AUTOTECH",
      description:
        "Air-conditioning regas and repair in Castellón de la Plana. Multi-brand workshop MM AUTOTECH, WhatsApp quotes, Av. Alcora 18.",
      h1Lead: "Air ",
      h1Accent: "conditioning.",
      intro:
        "The heat in Castellón shows up quickly if the air conditioning does not cool. At MM AUTOTECH we check the circuit, look for leaks, and regas only when the system holds pressure. You get the quote before the recharge.",
      included: [
        "Pressure and vent-temperature check",
        "Leak tracing",
        "Regas when the circuit can hold it",
        "Cabin filter and blower check",
      ],
      when: "Book in if the air blows warm, smells when you switch it on, or the compressor does not engage. The workshop is at Av. Alcora 18, Castellón de la Plana.",
      whatsappMessage:
        "Hello, I would like a quote for my vehicle's air conditioning.",
    },
  },
  cooling: {
    es: {
      slug: "refrigeracion",
      title: "Refrigeración del motor en Castellón de la Plana | MM AUTOTECH",
      description:
        "Termostato, radiador y fugas de refrigerante en Castellón de la Plana. MM AUTOTECH diagnostica el calentón y pasa presupuesto por WhatsApp.",
      h1Lead: "Refrigeración del ",
      h1Accent: "motor.",
      intro:
        "Un motor que se calienta en Castellón de la Plana no se puede dejar. Localizamos fugas, comprobamos termostato, radiador, bomba y ventiladores, y paramos el trabajo si el presupuesto no te encaja.",
      included: [
        "Fugas de refrigerante y manguitos",
        "Termostato, radiador y vaso de expansión",
        "Bomba de agua y ventiladores",
        "Purgado del circuito tras la reparación",
      ],
      when: "Ven enseguida si sube la temperatura, baja el nivel o hay olor dulce y vapor. Estamos en Av. Alcora 18 y puedes escribir por WhatsApp con la matrícula y el síntoma.",
      whatsappMessage:
        "Hola, quiero un presupuesto de refrigeración para mi vehículo.",
    },
    en: {
      slug: "cooling",
      title: "Engine cooling repair in Castellón de la Plana | MM AUTOTECH",
      description:
        "Thermostat, radiator and coolant leaks in Castellón de la Plana. MM AUTOTECH diagnoses overheating and quotes on WhatsApp.",
      h1Lead: "Engine ",
      h1Accent: "cooling.",
      intro:
        "An engine that overheats in Castellón de la Plana should not be left. We find leaks and check the thermostat, radiator, pump and fans, and we stop if the quote does not suit you.",
      included: [
        "Coolant leaks and hoses",
        "Thermostat, radiator and expansion tank",
        "Water pump and fans",
        "Bleeding the system after the repair",
      ],
      when: "Come in straight away if the temperature rises, the level drops, or you smell sweet coolant and see steam. We are at Av. Alcora 18, and you can WhatsApp the registration and the symptom.",
      whatsappMessage: "Hello, I would like a quote for cooling work on my vehicle.",
    },
  },
  gearbox: {
    es: {
      slug: "caja-de-cambios",
      title: "Caja de cambios en Castellón de la Plana | MM AUTOTECH",
      description:
        "Diagnosis de caja de cambios manual y automática en Castellón de la Plana. Taller multimarca MM AUTOTECH, presupuesto por WhatsApp.",
      h1Lead: "Caja de ",
      h1Accent: "cambios.",
      intro:
        "Revisamos cajas de cambio manuales y automáticas en el taller multimarca de Castellón de la Plana. Escuchamos el ruido, comprobamos el embrague o el cambio de marcha y te explicamos si conviene reparar, antes de desmontar.",
      included: [
        "Ruidos, vibraciones y marchas que rascan",
        "Embrague y volante en cambios manuales",
        "Golpes o retardos en cambios automáticos",
        "Nivel y fugas de aceite de la caja",
      ],
      when: "Pide cita si una marcha no entra, el coche patina al salir o el cambio golpea. El taller está en Av. Alcora 18, Castellón de la Plana.",
      whatsappMessage:
        "Hola, quiero un presupuesto de la caja de cambios de mi vehículo.",
    },
    en: {
      slug: "gearbox",
      title: "Gearbox repair in Castellón de la Plana | MM AUTOTECH",
      description:
        "Manual and automatic gearbox diagnosis in Castellón de la Plana. Multi-brand workshop MM AUTOTECH, with quotes on WhatsApp.",
      h1Lead: "Gearbox ",
      h1Accent: "repair.",
      intro:
        "We check manual and automatic gearboxes at the multi-brand workshop in Castellón de la Plana. We listen for the noise, check the clutch or the shift, and explain whether a repair makes sense before anything is stripped.",
      included: [
        "Noise, vibration and crunching gears",
        "Clutch and flywheel on manual gearboxes",
        "Thumps or delays on automatics",
        "Gearbox oil level and leaks",
      ],
      when: "Book in if a gear will not select, the car slips as you pull away, or the gearbox thumps. The workshop is at Av. Alcora 18, Castellón de la Plana.",
      whatsappMessage: "Hello, I would like a quote for my vehicle's gearbox.",
    },
  },
};

export function articlePath(locale: Locale, id: ServiceId) {
  return `/${locale}/${articles[id][locale].slug}`;
}

export function articlePaths(id: ServiceId): Record<Locale, string> {
  return {
    es: articlePath("es", id),
    en: articlePath("en", id),
  };
}

export function findArticle(locale: Locale, slug: string) {
  for (const id of serviceIds) {
    if (articles[id][locale].slug === slug) {
      return { id, copy: articles[id][locale] };
    }
  }
  return null;
}

export function allArticleParams() {
  return locales.flatMap((lang) =>
    serviceIds.map((id) => ({ lang, slug: [articles[id][lang].slug] })),
  );
}

export function articleCopy(locale: Locale, id: ServiceId) {
  return articles[id][locale];
}
