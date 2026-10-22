// Datos de contacto y marca de TechnoUltra (tomados de technoultra.com).
export const site = {
  name: "TechnoUltra",
  nameTop: "Techno",
  nameBottom: "Ultra",
  url: "https://technoultra.com",
  city: "Cali",
  region: "Valle del Cauca",
  country: "Colombia",
  phone: "+57 300 729 6067",
  phoneHref: "tel:+573007296067",
  whatsapp: "https://wa.me/573007296067",
  email: "studio@technoultra.com",
  instagram: "https://www.instagram.com/technoultra",
  facebook: "https://www.facebook.com/technoultra",
  linkedin: "https://www.linkedin.com/company/technoultra",
  description:
    "Agencia digital en Cali: desarrollo web, aplicaciones a medida, branding, redes sociales, SEO y servicio técnico de computadores e impresoras.",
};

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/blog", label: "Blog" },
  { href: "/planes", label: "Planes" },
];

export const wa = (text: string) => `${site.whatsapp}?text=${encodeURIComponent(text)}`;

export type Service = {
  slug: string;
  n: string;
  title: string;
  h1: string;
  short: string;
  intro: string;
  categories: string[];
  deliverables: { title: string; text: string }[];
  tone: "a" | "b" | "c" | "d" | "e";
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "diseno-ui-ux",
    n: "01",
    title: "Diseño UI/UX",
    h1: "Diseño UI/UX para sitios web y aplicaciones en Cali",
    short:
      "Diseñamos interfaces claras y memorables que guían a tus clientes hasta la compra, la cotización o el contacto.",
    intro:
      "Una buena interfaz se siente invisible: el usuario encuentra lo que busca sin esfuerzo. Investigamos a tu cliente, prototipamos en Figma y validamos cada pantalla antes de programarla.",
    categories: ["Investigación de usuarios", "Wireframes", "Prototipos en Figma"],
    deliverables: [
      { title: "Investigación y arquitectura", text: "Entendemos a quién le vendes, qué busca y cómo decide. Ordenamos el contenido para que cada página tenga un objetivo claro." },
      { title: "Wireframes y prototipos", text: "Bocetamos la estructura y creamos prototipos navegables para probar la idea antes de invertir en desarrollo." },
      { title: "Diseño visual y sistema", text: "Paleta, tipografía y componentes reutilizables que mantienen tu marca consistente en web, móvil y redes." },
    ],
    tone: "a",
    seoTitle: "Diseño UI/UX en Cali | Interfaces web y apps | TechnoUltra",
    seoDescription:
      "Diseño UI/UX en Cali: investigación, wireframes, prototipos en Figma y diseño visual para páginas web y aplicaciones que convierten visitas en clientes.",
  },
  {
    slug: "identidad-de-marca",
    n: "02",
    title: "Identidad de marca",
    h1: "Diseño de logo e identidad de marca para empresas en Cali",
    short:
      "Creamos sistemas visuales que capturan la personalidad de tu negocio: logo, paleta, tipografía y piezas para redes.",
    intro:
      "Tu marca es lo primero que ven y lo último que recuerdan. Construimos identidades completas, desde el naming y el logo hasta el manual de marca y las plantillas para que tu comunicación se vea profesional en todas partes.",
    categories: ["Logo y naming", "Manual de marca", "Rebranding"],
    deliverables: [
      { title: "Logo y sistema visual", text: "Logotipo versátil, paleta de color, tipografías y reglas de uso para aplicarlo sin errores." },
      { title: "Manual de marca", text: "Un documento claro para que tu equipo, proveedores y diseñadores mantengan la misma imagen." },
      { title: "Piezas para redes sociales", text: "Plantillas editables para publicaciones, historias y portadas alineadas con tu identidad." },
    ],
    tone: "b",
    seoTitle: "Diseño de logo e identidad de marca en Cali | TechnoUltra",
    seoDescription:
      "Branding en Cali: diseño de logo, naming, manual de marca, rebranding y piezas para redes sociales. Identidad visual profesional para pymes y empresas.",
  },
  {
    slug: "desarrollo-web",
    n: "03",
    title: "Desarrollo web",
    h1: "Desarrollo de páginas web y aplicaciones a medida en Cali",
    short:
      "Sitios corporativos, tiendas online y aplicaciones con Next.js: rápidos, seguros y listos para posicionar en Google.",
    intro:
      "Programamos a la medida con tecnología moderna, sin plantillas genéricas. Cada sitio se entrega optimizado para velocidad, móviles y SEO técnico, con un panel que tu equipo puede administrar.",
    categories: ["React / Next.js", "Tiendas online", "Aplicaciones a medida"],
    deliverables: [
      { title: "Páginas web corporativas", text: "Sitios rápidos que presentan tu empresa, tus servicios y generan solicitudes de cotización." },
      { title: "Tiendas online", text: "Catálogo, carrito, pasarela de pagos y WhatsApp integrado para vender todos los días." },
      { title: "Aplicaciones y paneles", text: "Plataformas con acceso de clientes y personal, gestión de pedidos, servicios y garantías." },
    ],
    tone: "c",
    seoTitle: "Desarrollo web en Cali | Páginas web y aplicaciones a medida | TechnoUltra",
    seoDescription:
      "Desarrollo web en Cali con Next.js: páginas corporativas, tiendas online y aplicaciones a medida, rápidas, seguras y optimizadas para SEO.",
  },
  {
    slug: "estrategia-digital",
    n: "04",
    title: "Estrategia digital",
    h1: "Estrategia digital, SEO y redes sociales para empresas en Colombia",
    short:
      "Posicionamiento en Google, manejo de redes sociales y campañas con retorno medible para que te encuentren y te compren.",
    intro:
      "No basta con tener un sitio bonito: hay que lograr que lo encuentren. Combinamos SEO, gestión de redes sociales y publicidad en Google y Meta con analítica real para tomar decisiones con datos.",
    categories: ["SEO y posicionamiento", "Gestión de redes sociales", "Google Ads y Meta Ads"],
    deliverables: [
      { title: "SEO técnico y local", text: "Auditoría, optimización de contenidos y perfil de negocio en Google para aparecer cuando te buscan cerca." },
      { title: "Manejo de redes sociales", text: "Calendario editorial, diseño de piezas y publicación constante con la voz de tu marca." },
      { title: "Publicidad y analítica", text: "Campañas en Google Ads y Meta Ads con métricas claras de consultas, ventas y costo por cliente." },
    ],
    tone: "d",
    seoTitle: "Estrategia digital, SEO y manejo de redes sociales en Cali | TechnoUltra",
    seoDescription:
      "Agencia de marketing digital en Cali: SEO local, manejo de redes sociales, Google Ads y Meta Ads con resultados medibles para tu empresa.",
  },
  {
    slug: "servicio-tecnico",
    n: "05",
    title: "Servicio técnico",
    h1: "Reparación de computadores, portátiles e impresoras en Cali",
    short:
      "Reparación y mantenimiento de equipos con recogida, laboratorio y servicio a domicilio en Cali, Palmira, Jamundí y Yumbo.",
    intro:
      "Además de construir tu presencia digital, mantenemos funcionando tus equipos. Reparamos computadores de escritorio, portátiles e impresoras con diagnóstico claro, repuestos de calidad y garantía por escrito.",
    categories: ["PC de escritorio", "Portátiles", "Impresoras"],
    deliverables: [
      { title: "Recogemos y entregamos", text: "Pasamos por tu equipo, lo llevamos al laboratorio y te lo devolvemos reparado, sin que pierdas tiempo." },
      { title: "Laboratorio técnico", text: "Diagnóstico, limpieza, cambio de partes, formateo, recuperación de información y mantenimiento preventivo." },
      { title: "Servicio a domicilio y soporte remoto", text: "Visita técnica en tu casa u oficina y soporte remoto para fallas de software en toda Colombia." },
    ],
    tone: "e",
    seoTitle: "Reparación de computadores, portátiles e impresoras en Cali | TechnoUltra",
    seoDescription:
      "Servicio técnico en Cali: reparación y mantenimiento de computadores de escritorio, portátiles e impresoras con recogida, laboratorio y visita a domicilio. Cali, Palmira, Jamundí y Yumbo.",
  },
];

export type Project = {
  slug: string;
  name: string;
  client: string;
  category: string;
  industry: string;
  year: string;
  month: string;
  summary: string;
  challenge: string;
  solution: string;
  services: string[];
  stack: string[];
  results: { value: string; label: string }[];
  url: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "electriobras",
    name: "Electriobras",
    client: "Electriobras S.A.S.",
    category: "Sitio web corporativo",
    industry: "Ingeniería eléctrica y obras civiles",
    year: "2026",
    month: "Mar",
    summary:
      "Presencia digital para una empresa de ingeniería eléctrica y obras civiles en Cali, con video de portada, sectores atendidos, servicios y solicitud de cotización.",
    challenge:
      "Electriobras necesitaba mostrarse como una empresa seria y confiable ante clientes industriales, y que la página fuera una herramienta real para recibir cotizaciones, no solo una tarjeta de presentación.",
    solution:
      "Diseñamos un sitio rápido con estructura pensada para posicionar servicios locales en Google (mantenimiento eléctrico, obras civiles y metalmecánica en Cali), llamados a la acción visibles y secciones por sector.",
    services: ["Desarrollo web", "SEO local", "Diseño UI/UX"],
    stack: ["Next.js", "React", "SEO técnico"],
    results: [
      { value: "+70%", label: "Velocidad de carga" },
      { value: "+45%", label: "Leads" },
      { value: "+120%", label: "Visitas" },
    ],
    url: "https://www.electriobras.com/",
    image: "/projects/electriobras.png",
  },
  {
    slug: "excelenter",
    name: "Excelenter",
    client: "Excelenter Cali",
    category: "Tienda online",
    industry: "Tecnología y computadores",
    year: "2026",
    month: "Jun",
    summary:
      "Tienda tecnológica con catálogo de computadores, componentes y tarjetas de video, soporte técnico y contacto directo por WhatsApp.",
    challenge:
      "Una tienda con más de 17 años de trayectoria en Cali necesitaba un catálogo ordenado, fácil de recorrer en el celular y capaz de competir por búsquedas de computadores, PC gamer y reparación.",
    solution:
      "Creamos una tienda con categorías claras, buscador, carrito, secciones de soporte técnico y preguntas frecuentes, con velocidad optimizada y datos estructurados para productos.",
    services: ["Tienda online", "Desarrollo web", "SEO"],
    stack: ["E-commerce", "Catálogo", "WhatsApp"],
    results: [
      { value: "17+", label: "Años de trayectoria del cliente" },
      { value: "4", label: "Categorías destacadas" },
      { value: "24/7", label: "Catálogo disponible" },
    ],
    url: "https://excelenter.com/",
    image: "/projects/excelenter.png",
  },
  {
    slug: "tufink",
    name: "Tufink",
    client: "Tufink",
    category: "Sitio de reservas",
    industry: "Turismo y alquiler de fincas",
    year: "2026",
    month: "Ago",
    summary:
      "Sitio para una finca de alquiler en el Lago Calima con galería, tarifas, disponibilidad, cómo llegar y reservas.",
    challenge:
      "El propietario necesitaba que los huéspedes encontraran tarifas, capacidad, ubicación y disponibilidad sin depender de mensajes sueltos, y diferenciarse de otras fincas de la zona.",
    solution:
      "Construimos un sitio ligero y visual, con galería, información de habitaciones y servicios, mapa, transporte y un flujo directo de reserva y consulta de disponibilidad.",
    services: ["Desarrollo web", "Diseño UI/UX", "SEO local"],
    stack: ["Landing", "Reservas", "Cloudflare Workers"],
    results: [
      { value: "25", label: "Personas de capacidad" },
      { value: "1", label: "Clic a reservar" },
      { value: "100%", label: "Optimizado para móvil" },
    ],
    url: "https://tufink.ghocho88.workers.dev/",
    image: "/projects/tufink.png",
  },
  {
    slug: "technoultra-app",
    name: "TechnoUltra App",
    client: "TechnoUltra",
    category: "Aplicación web",
    industry: "Servicios y soporte técnico",
    year: "2026",
    month: "Sep",
    summary:
      "Plataforma con acceso para clientes y personal para gestionar servicios, equipos, pedidos y garantías.",
    challenge:
      "Centralizar solicitudes de servicio técnico, seguimiento de equipos y garantías en un solo lugar, con acceso diferenciado para clientes y equipo interno.",
    solution:
      "Desarrollamos una aplicación con inicio de sesión con Google y correo, panel para clientes y acceso de personal, y seguimiento del estado de cada servicio.",
    services: ["Aplicación a medida", "Diseño UI/UX", "Desarrollo web"],
    stack: ["Next.js", "Autenticación", "Panel de gestión"],
    results: [
      { value: "2", label: "Perfiles: cliente y personal" },
      { value: "1", label: "Panel unificado" },
      { value: "24/7", label: "Acceso a tus servicios" },
    ],
    url: "https://app.technoultra.com/login",
    image: "/projects/technoultra.png",
  },
];

export const testimonials = [
  {
    title: "Entendieron nuestra visión y la convirtieron en una plataforma que genera crecimiento.",
    text: "TechnoUltra entendió nuestra visión y la convirtió en una plataforma que realmente genera crecimiento para la empresa.",
    author: "Cesar Augusto Garcia",
    role: "Director, Electriobras S.A.S.",
  },
  {
    title: "Con las campañas en Google Ads la visibilidad del restaurante creció y las reservas se multiplicaron.",
    text: "Gracias a las estrategias en campañas de Google Ads, aumentamos drásticamente la visibilidad del restaurante y nuestras reservas se multiplicaron.",
    author: "Yuli Tulande",
    role: "Gerente, Hostal y Restaurante El Viajero",
  },
];

export const process = [
  { n: "01", title: "Diagnóstico", text: "Auditoría del ecosistema digital actual y definición clara de objetivos." },
  { n: "02", title: "Arquitectura", text: "Diseño de la estructura, el stack tecnológico y la estrategia de conversión." },
  { n: "03", title: "Implementación", text: "Desarrollo ágil con código limpio, escalable y optimizado para SEO." },
  { n: "04", title: "Optimización", text: "Ajustes con datos reales, mejora continua de rendimiento y conversión." },
  { n: "05", title: "Escalado", text: "Expansión de canales, automatización y crecimiento sostenido." },
];

export const coverage = [
  { city: "Cali", detail: "Laboratorio técnico, recogida y visita a domicilio" },
  { city: "Palmira", detail: "Recogida y servicio a domicilio" },
  { city: "Jamundí", detail: "Recogida y servicio a domicilio" },
  { city: "Yumbo", detail: "Recogida y servicio a domicilio" },
  { city: "Toda Colombia", detail: "Soporte remoto y proyectos digitales" },
];

export const faqs = [
  {
    q: "¿Cuánto tarda el desarrollo de una página web?",
    a: "Una página corporativa suele estar lista entre 3 y 6 semanas; una tienda online o una aplicación a medida puede tomar de 6 a 12 semanas según el alcance. Te damos un cronograma claro desde el diagnóstico.",
  },
  {
    q: "¿Mi página web aparecerá en Google?",
    a: "Entregamos cada sitio con SEO técnico y contenidos pensados para búsquedas locales como “desarrollo web en Cali”. El posicionamiento crece con el tiempo y lo reforzamos con contenido, perfil de negocio en Google y campañas.",
  },
  {
    q: "¿Pueden manejar mis redes sociales?",
    a: "Sí. Planeamos el calendario editorial, diseñamos las piezas y publicamos con la voz de tu marca. También medimos resultados para ajustar la estrategia cada mes.",
  },
  {
    q: "¿Reparan computadores, portátiles e impresoras?",
    a: "Sí. Tenemos laboratorio técnico en Cali y ofrecemos recogida y entrega, servicio a domicilio o en sitio, y soporte remoto. Atendemos Cali, Palmira, Jamundí y Yumbo.",
  },
  {
    q: "¿El servicio técnico tiene garantía?",
    a: "Sí. Cada reparación incluye diagnóstico claro, repuestos de calidad y garantía por escrito del trabajo realizado.",
  },
  {
    q: "¿Ofrecen soporte después de entregar el proyecto?",
    a: "Sí, ofrecemos planes de mantenimiento con actualizaciones, copias de seguridad, monitoreo de velocidad y mejoras continuas para tu sitio o aplicación.",
  },
];

export const plans = [
  {
    n: "01",
    name: "Presencia Digital",
    text: "Para negocios que necesitan una página profesional, rápida y lista para aparecer en Google.",
    items: [
      "Sitio web corporativo de hasta 6 secciones",
      "Diseño a medida adaptado a celular y computador",
      "SEO técnico y textos enfocados en búsquedas locales",
      "Botón de WhatsApp y formulario de contacto",
    ],
  },
  {
    n: "02",
    name: "Crecimiento",
    text: "Para empresas que quieren vender más con tienda online, branding y contenido constante.",
    items: [
      "Tienda online o aplicación a medida",
      "Identidad de marca y manual de uso",
      "Gestión de redes sociales y calendario editorial",
      "Campañas en Google Ads y Meta Ads con analítica",
    ],
  },
];

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readMinutes: number;
  excerpt: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "cuanto-cuesta-una-pagina-web-en-colombia",
    title: "¿Cuánto cuesta una página web en Colombia? Guía para empresas en Cali",
    category: "Desarrollo web",
    date: "2026-09-15",
    readMinutes: 5,
    excerpt:
      "Los factores que determinan el precio de una página web y cómo elegir la opción adecuada para tu negocio.",
    sections: [
      {
        heading: "El precio depende del objetivo, no solo de las páginas",
        paragraphs: [
          "Cuando una empresa pregunta cuánto cuesta una página web, la respuesta real depende de lo que necesita lograr: presentar sus servicios, vender productos, recibir reservas o administrar clientes dentro de una aplicación.",
          "Un sitio corporativo con pocas secciones no requiere el mismo trabajo que una tienda online con catálogo, pagos e inventario. Por eso es más útil comparar el alcance que el precio final.",
        ],
      },
      {
        heading: "Qué factores cambian la inversión",
        paragraphs: [
          "Los más importantes son: el diseño (a medida o basado en una plantilla), la cantidad de secciones, las integraciones (pagos, WhatsApp, CRM), la redacción de contenidos y el trabajo de SEO técnico para aparecer en Google.",
          "También influye si necesitas un panel para administrar el contenido, y el mantenimiento posterior: actualizaciones, copias de seguridad y mejoras.",
        ],
      },
      {
        heading: "Cómo elegir bien",
        paragraphs: [
          "Pide una propuesta con alcance, tiempos y entregables por escrito. Verifica que el sitio se entregue rápido, adaptado a celulares y con SEO básico. En TechnoUltra diseñamos cada proyecto a la medida y te damos una cotización clara después de un diagnóstico gratuito.",
        ],
      },
    ],
  },
  {
    slug: "seo-local-en-cali-como-aparecer-en-google",
    title: "SEO local en Cali: cómo aparecer en Google cuando te buscan cerca",
    category: "Estrategia digital",
    date: "2026-09-22",
    readMinutes: 5,
    excerpt:
      "Pasos prácticos para que tu negocio aparezca en búsquedas como “servicio técnico en Cali” o “ingeniería eléctrica en Cali”.",
    sections: [
      {
        heading: "Por qué el SEO local importa",
        paragraphs: [
          "Muchas búsquedas tienen intención local: la persona quiere resolver algo cerca de donde está. Quien aparece primero en Google suele recibir la llamada o la visita.",
        ],
      },
      {
        heading: "Los tres pilares",
        paragraphs: [
          "Primero, un sitio rápido y claro, con una página para cada servicio y tu ciudad en los títulos y textos. Segundo, un perfil de negocio en Google completo, con fotos, horarios, servicios y reseñas. Tercero, contenido útil y enlaces desde sitios locales.",
          "Cuida los datos de contacto: tu nombre, dirección y teléfono deben ser idénticos en tu sitio, en Google y en tus redes.",
        ],
      },
      {
        heading: "Mide y ajusta",
        paragraphs: [
          "Revisa qué búsquedas te traen visitas, qué páginas convierten y qué preguntas hacen tus clientes. Con esos datos se mejora el contenido mes a mes.",
        ],
      },
    ],
  },
  {
    slug: "mantenimiento-de-computadores-cada-cuanto-hacerlo",
    title: "Mantenimiento de computadores: cada cuánto hacerlo y señales de que necesita reparación",
    category: "Servicio técnico",
    date: "2026-10-01",
    readMinutes: 4,
    excerpt:
      "Cuándo limpiar y revisar tu computador o portátil, y qué síntomas indican que es hora de llevarlo al técnico.",
    sections: [
      {
        heading: "Mantenimiento preventivo",
        paragraphs: [
          "Se recomienda una limpieza interna y cambio de pasta térmica al menos una vez al año, o cada seis meses si el equipo trabaja muchas horas o está en ambientes con polvo.",
        ],
      },
      {
        heading: "Señales de alerta",
        paragraphs: [
          "Ruidos fuertes del ventilador, calentamiento, apagados repentinos, lentitud extrema, pantalla azul o mensajes de disco con fallas. Si tu portátil no carga o tu impresora deja de imprimir, también conviene revisar a tiempo.",
          "Actuar rápido evita perder información y reduce el costo de la reparación.",
        ],
      },
      {
        heading: "Recogida, laboratorio o domicilio",
        paragraphs: [
          "En TechnoUltra puedes elegir: recogemos tu equipo y te lo devolvemos reparado, lo traes a nuestro laboratorio o enviamos un técnico a tu casa u oficina en Cali, Palmira, Jamundí y Yumbo.",
        ],
      },
    ],
  },
  {
    slug: "branding-para-pymes-elementos-de-identidad",
    title: "Branding para pymes: 5 elementos de identidad que tu marca necesita",
    category: "Identidad de marca",
    date: "2026-10-08",
    readMinutes: 4,
    excerpt:
      "Logo, color, tipografía, voz y plantillas: la base de una marca que se reconoce y genera confianza.",
    sections: [
      {
        heading: "Una marca es más que un logo",
        paragraphs: [
          "El logo es solo la puerta de entrada. Una identidad sólida combina elementos visuales y de comunicación que se repiten en todos los puntos de contacto con el cliente.",
        ],
      },
      {
        heading: "Los cinco elementos",
        paragraphs: [
          "1) Logo versátil que funcione en pequeño y en grande. 2) Paleta de color definida. 3) Tipografías para títulos y textos. 4) Tono de voz coherente. 5) Plantillas para redes, presentaciones y papelería.",
          "Reunirlos en un manual de marca facilita que cualquier persona de tu equipo comunique con la misma imagen.",
        ],
      },
      {
        heading: "Por dónde empezar",
        paragraphs: [
          "Define a quién le hablas y qué te diferencia. A partir de ahí el diseño tiene dirección. Si necesitas ayuda, en TechnoUltra creamos identidades completas para pymes y las llevamos a tu web y redes sociales.",
        ],
      },
    ],
  },
];

export const absoluteUrl = (path = "/") => `${site.url}${path}`;
