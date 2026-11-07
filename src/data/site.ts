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
    q: "¿Cuánto tarda el desarrollo de una página web a medida?",
    a: "Una página web corporativa o landing page optimizada suele estar lista entre 3 y 6 semanas. Para proyectos más complejos como tiendas online (e-commerce) o desarrollo de Web Apps en Next.js, el tiempo estimado es de 6 a 12 semanas. Desde el diagnóstico inicial, te entregamos un cronograma exacto basado en el diseño UI/UX y la arquitectura de software.",
  },
  {
    q: "¿Mi página web aparecerá en los primeros resultados de Google?",
    a: "Desarrollamos todas nuestras plataformas con tecnologías modernas como Next.js, lo que garantiza una velocidad de carga ultrarrápida (Core Web Vitals) y un código semántico que Google prioriza. Implementamos SEO técnico avanzado desde la base. Aunque el posicionamiento es un proceso continuo, te entregamos el ecosistema digital perfecto para competir al más alto nivel.",
  },
  {
    q: "Al finalizar, ¿quién es el dueño del dominio, hosting y código?",
    a: "Tú eres el único dueño al 100%. A diferencia de otras agencias, en TechnoUltra registramos el dominio y la infraestructura cloud a tu nombre o el de tu empresa. Entregamos plataformas con código fuente moderno y portable (React / Next.js) para que tengas el control absoluto de tus activos digitales, sin contratos de permanencia forzada.",
  },
  {
    q: "¿Desarrollan tiendas online (e-commerce) y aplicaciones web?",
    a: "Sí. Nos especializamos en el desarrollo de e-commerce de alta conversión y plataformas a medida (SaaS). No usamos plantillas limitadas; construimos interfaces de usuario (UX) pensadas para vender e integramos pasarelas de pago seguras (MercadoPago, Stripe) para que tu negocio sea escalable.",
  },
  {
    q: "¿Ofrecen branding y gestión de campañas publicitarias?",
    a: "Sí, funcionamos como tu partner de crecimiento. Además de la ingeniería web, creamos identidades de marca sólidas (logos y manuales de marca) y diseñamos estrategias de pauta digital en Google Ads y Meta Ads enfocadas en Retorno de Inversión (ROI) para llevar clientes cualificados a tu nueva plataforma.",
  },
  {
    q: "¿Ofrecen soporte y mantenimiento web después del lanzamiento?",
    a: "Por supuesto, el lanzamiento es solo el principio. Contamos con planes de suscripción mensual que incluyen copias de seguridad, monitoreo de seguridad 24/7, optimización continua de conversión (CRO) y horas de desarrollo para que tu sitio o aplicación web evolucione constantemente al ritmo de tu empresa.",
  },
];

// Preguntas del servicio técnico (solo para /servicios/servicio-tecnico).
export const techFaqs = [
  {
    q: "¿Reparan computadores, portátiles e impresoras?",
    a: "Sí. Tenemos laboratorio técnico en Cali y ofrecemos recogida y entrega, servicio a domicilio o en sitio, y soporte remoto. Atendemos Cali, Palmira, Jamundí y Yumbo.",
  },
  {
    q: "¿El servicio técnico tiene garantía?",
    a: "Sí. Cada reparación incluye diagnóstico claro, repuestos de calidad y garantía por escrito del trabajo realizado.",
  },
  {
    q: "¿Ofrecen mantenimiento preventivo para mis equipos?",
    a: "Sí. Hacemos limpieza interna, cambio de pasta térmica, revisión de disco y memoria, actualizaciones y copia de seguridad para alargar la vida de tu computador o portátil.",
  },
];


export type Plan = {
  n: string;
  name: string;
  text: string;
  items: string[];
  priceLabel: string;
  price: string;
  note: string;
};

// Planes por proyecto (pago único).
export const plans: Plan[] = [
  {
    n: "01",
    name: "Launch & Startups",
    text: "Ideal para validar mercados, lanzar nuevas marcas o escalar MVPs con tecnología de punta y diseño estratégico.",
    items: [
      "Landing pages de alto impacto y sitios corporativos",
      "E-commerce rápido y tiendas virtuales optimizadas",
      "MVP (Producto Mínimo Viable) y prototipo rápido",
      "Diagnóstico inicial gratis y optimización SEO",
    ],
    priceLabel: "Inversión desde",
    price: "$1.200 USD",
    note: "(o el equivalente en tu moneda local • 3 cuotas sin interés)",
  },
  {
    n: "02",
    name: "Escala & Enterprise",
    text: "Para empresas consolidadas que necesitan optimizar, automatizar o expandir su infraestructura digital robusta.",
    items: [
      "Web Apps y plataformas SaaS a medida (Next.js / React)",
      "Integraciones complejas (APIs, CRM, pasarelas)",
      "Rediseño y migración de ecosistemas digitales",
      "Seguridad avanzada e infraestructura cloud dedicada",
    ],
    priceLabel: "Inversión",
    price: "A medida",
    note: "(Proyectos complejos o requerimientos específicos)",
  },
];

// Planes mensuales (soporte y crecimiento continuo).
export const monthlyPlans: Plan[] = [
  {
    n: "01",
    name: "Soporte & Crecimiento",
    text: "Ideal para mantener, optimizar y hacer crecer tu presencia digital sin los costos de un equipo de tiempo completo.",
    items: [
      "Mantenimiento, monitoreo y soporte continuo (24/7)",
      "Horas de diseño y desarrollo mensual para actualizaciones y mejoras",
      "SEO continuo, analítica web y optimización de conversión (CRO)",
      "Gestión de campañas digitales y pauta (Google/Meta Ads)",
      "Copias de seguridad diarias, actualizaciones y parches de seguridad",
    ],
    priceLabel: "Inversión mensual desde",
    price: "$450 USD",
    note: "(o el equivalente en tu moneda local • sin contratos a largo plazo)",
  },
  {
    n: "02",
    name: "Squad & Evolución",
    text: "Para empresas que requieren desarrollo, diseño y optimización continua de software, Web Apps o plataformas SaaS.",
    items: [
      "Equipo de diseño UI/UX y desarrolladores Senior bajo demanda (Figma + Next.js)",
      "Evolución constante de Web Apps, plataformas SaaS e integraciones",
      "Soporte prioritario y comunicación directa (Slack / Meet diarios o semanales)",
      "Optimización continua de código, seguridad avanzada y nube",
      "Consultoría estratégica, análisis de conversión y escalado tecnológico",
    ],
    priceLabel: "Inversión mensual desde",
    price: "$1.800 USD",
    note: "(Equipo de diseño y desarrollo dedicado a tu medida)",
  },
];


export { posts, blogCategories, homePosts } from "./blog";
export type { Post, PostSection } from "./blog";

export const absoluteUrl = (path = "/") => `${site.url}${path}`;
