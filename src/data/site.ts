// Datos de contacto y marca de TechnoUltra (tomados de technoultra.com).
export const site = {
  name: "TechnoUltra",
  nameTop: "Techno",
  nameBottom: "Ultra",
  url: "https://technoultra.com",
  city: "Cali",
  region: "Valle del Cauca",
  country: "Colombia",
  phone: "+57 318 394 3465",
  phoneHref: "tel:+573183943465",
  whatsapp: "https://wa.me/573183943465",
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
  images: [string, string]; // [cuadrada, grande]
  focus: [number, number]; // punto focal horizontal (%) de cada imagen
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
    images: ["/services/diseno-ui-ux-2.webp", "/services/diseno-ui-ux-1.webp"],
    focus: [60, 50],
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
    images: ["/services/identidad-de-marca-2.webp", "/services/identidad-de-marca-1.webp"],
    focus: [50, 62],
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
    images: ["/services/desarrollo-web-2.webp", "/services/desarrollo-web-1.webp"],
    focus: [52, 38],
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
    images: ["/services/estrategia-digital-1.webp", "/services/estrategia-digital-2.webp"],
    focus: [50, 76],
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
    images: ["/services/servicio-tecnico-2.webp", "/services/servicio-tecnico-1.webp"],
    focus: [50, 38],
    seoTitle: "Reparación de computadores, portátiles e impresoras en Cali | TechnoUltra",
    seoDescription:
      "Servicio técnico en Cali: reparación y mantenimiento de computadores de escritorio, portátiles e impresoras con recogida, laboratorio y visita a domicilio. Cali, Palmira, Jamundí y Yumbo.",
  },
];

import { projects } from "./projects";
export { projects };
export type { Project } from "./projects";

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

export { posts, blogCategories, homePosts } from "./blog";
export type { Post, PostSection } from "./blog";

export const absoluteUrl = (path = "/") => `${site.url}${path}`;
