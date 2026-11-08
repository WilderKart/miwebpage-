export type Project = {
  slug: string;
  name: string;
  client: string;
  category: string; // tipo de proyecto (para filtrar)
  industry: string;
  year: string;
  month: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  services: string[];
  stack: string[];
  highlights: string[];
  results: { value: string; label: string }[];
  url: string;
  image: string; // portada
  ratio: number; // ancho/alto de la portada, para mostrarla completa sin recortes
  card: string; // imagen de la tarjeta de la home (captura vertical u horizontal, como la referencia)
  cardRatio: number; // ancho/alto de la tarjeta de la home
  shots: string[]; // capturas de escritorio (portada incluida)
  mobile?: string; // captura móvil
  accent: string; // color de marca del cliente
  note?: string;
};

// Proyectos reales. Los datos salen de los propios sitios publicados; las cifras de "results" son hechos del proyecto
// (secciones, categorías, rutas…) salvo las de Electriobras, que son las que reportó el cliente.
export const projects: Project[] = [
  {
    slug: "electriobras",
    name: "Electriobras",
    client: "Electriobras S.A.S.",
    category: "Sitio web corporativo",
    industry: "Ingeniería eléctrica y obras civiles",
    year: "2026",
    month: "Mar",
    tagline: "Mantenimiento eléctrico industrial, obras civiles y metalmecánica en Cali",
    summary:
      "Presencia digital para una empresa de ingeniería eléctrica y obras civiles en Cali: hero con selector de sectores, seis servicios técnicos, proceso de trabajo y solicitud de cotización.",
    challenge:
      "Electriobras necesitaba mostrarse como un aliado técnico serio y confiable ante clientes industriales, y que la página funcionara como una herramienta real para recibir cotizaciones, no solo como una tarjeta de presentación.",
    solution:
      "Diseñamos un sitio rápido, con estructura pensada para posicionar servicios locales en Google (mantenimiento eléctrico, obras civiles y metalmecánica en Cali), llamados a la acción visibles en cada sección y un formulario de cotización por tipo de proyecto.",
    services: ["Desarrollo web", "SEO local", "Diseño UI/UX"],
    stack: ["Next.js", "React", "SEO técnico", "WhatsApp"],
    highlights: [
      "Hero a pantalla completa con selector de sectores: construcción, industrial, inmobiliario y comercial",
      "Seis servicios técnicos presentados como tarjetas con foto y descripción",
      "Proceso de trabajo en cinco pasos, del diagnóstico técnico a la entrega certificada",
      "Formulario de cotización con tipo de proyecto y consentimiento de datos según la Ley 1581",
      "Franja de clientes, testimonios y botón de WhatsApp con mensaje prellenado",
    ],
    results: [
      { value: "+70%", label: "Velocidad de carga" },
      { value: "+45%", label: "Solicitudes de clientes" },
      { value: "+120%", label: "Visitas al sitio" },
    ],
    url: "https://www.electriobras.com/",
    image: "/projects/electriobras-1.jpg",
    ratio: 1.6,
    card: "/projects/electriobras-card.jpg",
    cardRatio: 1440 / 1508,
    shots: ["/projects/electriobras-1.jpg", "/projects/electriobras-2.jpg", "/projects/electriobras-3.jpg"],
    mobile: "/projects/electriobras-m.jpg",
    accent: "#ff6a00",
  },
  {
    slug: "excelenter",
    name: "Excelenter",
    client: "Excelenter Tienda Tecnológica",
    category: "Tienda online",
    industry: "Tecnología y comercio electrónico",
    year: "2026",
    month: "Abr",
    tagline: "Computadores, PC gamer, componentes y reparación en Cali",
    summary:
      "Tienda tecnológica con banner interactivo por categorías, catálogo de productos y marcas, medios de pago locales, soporte técnico y catálogo descargable en PDF con código QR.",
    challenge:
      "Excelenter vende computadores, PC gamer y componentes, y también repara equipos. Necesitaba una tienda que se viera a la altura de los productos, fuera fácil de recorrer y mostrara con claridad la garantía y el soporte técnico.",
    solution:
      "Creamos una tienda con un banner principal que cambia por categorías (Gamer, Partes, Portátiles y Soporte), catálogo con marcas y buscador, pagos con tarjeta, PSE y Nequi, un catálogo en PDF descargable y un panel administrativo para gestionar el inventario.",
    services: ["Tienda online", "Desarrollo web", "Diseño UI/UX", "SEO"],
    stack: ["Next.js", "Panel administrativo", "Pasarela de pagos", "SEO técnico"],
    highlights: [
      "Banner principal interactivo con cuatro categorías: Gamer, Partes, Portátiles y Soporte",
      "Barra de confianza: garantía oficial, productos originales y medios de pago",
      "Menú con categorías, productos, marcas, soporte técnico, catálogo y preguntas frecuentes",
      "Catálogo descargable en PDF con código QR para abrirlo desde el celular",
      "Panel administrativo propio y botón de WhatsApp para atención inmediata",
    ],
    results: [
      { value: "4", label: "Categorías en el banner principal" },
      { value: "PDF", label: "Catálogo descargable con QR" },
      { value: "3", label: "Medios de pago: tarjeta, PSE y Nequi" },
    ],
    url: "https://excelenter.com/",
    image: "/projects/excelenter-1.jpg",
    ratio: 1.6,
    card: "/projects/excelenter-card.jpg",
    cardRatio: 1440 / 1080,
    shots: ["/projects/excelenter-1.jpg", "/projects/excelenter-2.jpg", "/projects/excelenter-3.jpg"],
    mobile: "/projects/excelenter-m.jpg",
    accent: "#e8602c",
  },
  {
    slug: "tufink",
    name: "Tufink",
    client: "Finca Tufink",
    category: "Sitio de reservas",
    industry: "Turismo y hospedaje",
    year: "2026",
    month: "Ago",
    tagline: "Finca de alquiler en el Lago Calima, Valle del Cauca",
    summary:
      "Sitio de reservas para una finca de hasta 25 huéspedes en el Lago Calima: alojamiento, galería, tarifas, calendario de disponibilidad, medios de pago y transporte.",
    challenge:
      "Tufink recibía consultas por mensajes sueltos y repetía las mismas respuestas: cuántas personas caben, cuánto cuesta, qué fechas hay libres y cómo llegar. Necesitaba un sitio que mostrara la finca como merece y ordenara el proceso de reserva.",
    solution:
      "Construimos un sitio de una sola página con navegación por secciones: la finca, alojamiento por tipo, servicios, galería filtrable con visor, tarifas, medios de pago con datos para copiar, calendario de disponibilidad, transporte con rutas y horarios, y reserva por WhatsApp.",
    services: ["Sitio de reservas", "Desarrollo web", "Diseño UI/UX"],
    stack: ["Calendario de disponibilidad", "Galería con visor", "WhatsApp", "Cloudflare"],
    highlights: [
      "Hero con video y fotos de la finca, el lago y el atardecer",
      "Alojamiento por tipo: habitaciones, chalet y pérgola con hamacas",
      "Galería filtrable por La finca, El lago y Chalet, con visor de fotos",
      "Calendario con fechas disponibles y ocupadas, y selección de llegada y salida",
      "Tarifas claras, medios de pago con datos para copiar y transporte con horarios",
      "Botón flotante «Haz tu reserva» que abre WhatsApp",
    ],
    results: [
      { value: "25", label: "Huéspedes de capacidad" },
      { value: "4", label: "Rutas de transporte publicadas" },
      { value: "1 clic", label: "Para reservar por WhatsApp" },
    ],
    url: "https://tufink.ghocho88.workers.dev/",
    image: "/projects/tufink-full.png",
    ratio: 1897 / 987,
    card: "/projects/tufink-card.jpg",
    cardRatio: 1440 / 1990,
    shots: ["/projects/tufink-full.png", "/projects/tufink-2.jpg"],
    mobile: "/projects/tufink-m.jpg",
    accent: "#ff5a2c",
  },
  {
    slug: "electriobras-ferreteria",
    name: "Electriobras Ferretería",
    client: "Electriobras Ferretería",
    category: "Tienda online",
    industry: "Ferretería y suministros eléctricos",
    year: "2026",
    month: "Sep",
    tagline: "Herramientas, iluminación y electricidad al mejor precio",
    summary:
      "Tienda en línea de ferretería y suministros eléctricos con ofertas por temporada, categorías claras, carrito con cupones, envíos y atención por WhatsApp.",
    challenge:
      "La empresa quería vender sus herramientas, iluminación y materiales eléctricos también por internet, con una tienda fácil de actualizar y conectada con su sitio de servicios.",
    solution:
      "Montamos una tienda sobre Tienda Nube con carrusel de ofertas, sección de «Flash Deals», cuatro categorías principales (iluminación, electricidad, herramientas y cámaras), productos destacados, carrito con cupones, datos estructurados para Google y botón de WhatsApp.",
    services: ["Tienda online", "Diseño UI/UX", "SEO"],
    stack: ["Tienda Nube", "Datos estructurados", "WhatsApp"],
    highlights: [
      "Carrusel principal con ofertas por categoría y campañas de temporada de hasta 50 % de descuento",
      "Sección «Flash Deals» con productos en oferta y etiquetas de descuento",
      "Cuatro categorías: iluminación, electricidad, herramientas, cámaras y accesorios",
      "Carrito con cupones, estado de stock y envío gratis en productos seleccionados",
      "Soluciones integrales e instalaciones conectadas con el sitio de Electriobras",
    ],
    results: [
      { value: "4", label: "Categorías principales" },
      { value: "50%", label: "Descuento máximo en campañas" },
      { value: "SEO", label: "Datos estructurados de producto" },
    ],
    url: "https://www.electriobrasferreteria.com/",
    image: "/projects/ferreteria-1.jpg",
    ratio: 1.6,
    card: "/projects/ferreteria-card.jpg",
    cardRatio: 1440 / 998,
    shots: ["/projects/ferreteria-1.jpg", "/projects/ferreteria-2.jpg", "/projects/ferreteria-3.jpg"],
    mobile: "/projects/ferreteria-m.jpg",
    accent: "#f39c12",
  },
  {
    slug: "technoultra-app",
    name: "TechnoUltra App",
    client: "TechnoUltra",
    category: "Aplicación web",
    industry: "Servicios y soporte técnico",
    year: "2026",
    month: "Sep",
    tagline: "Plataforma para clientes y personal: servicios, equipos y garantías",
    summary:
      "Plataforma con acceso para clientes y personal para gestionar servicios, equipos, pedidos y garantías. Producto propio de TechnoUltra.",
    challenge:
      "Centralizar solicitudes de servicio técnico, seguimiento de equipos y garantías en un solo lugar, con acceso diferenciado para clientes y equipo interno.",
    solution:
      "Desarrollamos una aplicación con inicio de sesión con Google y correo, panel para clientes y acceso de personal, y seguimiento del estado de cada servicio.",
    services: ["Aplicación a medida", "Diseño UI/UX", "Desarrollo web"],
    stack: ["Next.js", "Autenticación", "Panel de gestión"],
    highlights: [
      "Inicio de sesión con Google y con correo",
      "Dos perfiles: cliente y personal de TechnoUltra",
      "Seguimiento del estado de cada servicio técnico",
      "Gestión de equipos, pedidos y garantías en un solo panel",
    ],
    results: [
      { value: "2", label: "Perfiles: cliente y personal" },
      { value: "1", label: "Panel unificado" },
      { value: "24/7", label: "Acceso a tus servicios" },
    ],
    url: "https://app.technoultra.com/login",
    image: "/projects/technoultra-app.png",
    ratio: 1917 / 987,
    card: "/projects/technoultra-app-card.jpg",
    cardRatio: 1440 / 1508,
    shots: ["/projects/technoultra-app.png"],
    accent: "#ff6a00",
    note: "Producto propio",
  },
  {
    slug: "stylernow",
    name: "StylerNow",
    client: "StylerNow",
    category: "Aplicación web",
    industry: "Software para barberías",
    year: "2026",
    month: "Nov",
    tagline: "El sistema operativo para barberías modernas",
    summary:
      "Sitio de lanzamiento de StylerNow, un sistema de gestión de reservas, pagos y clientes para barberías, con acceso anticipado por invitación y cupos limitados para la beta.",
    challenge:
      "StylerNow necesitaba presentar un producto nuevo a dueños de barberías y convertir el interés en solicitudes de acceso, con una imagen premium a la altura de los negocios que quiere atender.",
    solution:
      "Diseñamos una página de lanzamiento oscura y de aire premium, con un mensaje directo («La gestión premium que tu barbería merece»), vistas del producto en un móvil, secciones de beneficios, cómo funciona, experiencia e inversión, y un formulario de acceso anticipado con consentimiento de privacidad.",
    services: ["Desarrollo web", "Diseño UI/UX"],
    stack: ["Next.js", "Formulario de captación", "SSL"],
    highlights: [
      "Hero con el mensaje principal, vista de la app en el móvil y botón de acceso anticipado",
      "Beneficios en tarjetas: orden absoluto, finanzas bajo control, pagos justos y relaciones duraderas",
      "Sección «Cómo funciona» en cuatro fases: arquitectura, calibración, momentum y dominio",
      "Experiencia del producto con capturas de Agenda, Inventario, Clientes y Servicios",
      "Inversión para miembros fundadores y formulario de acceso anticipado con WhatsApp y correo",
    ],
    results: [
      { value: "1000", label: "Cupos para el lanzamiento beta" },
      { value: "4", label: "Módulos: agenda, inventario, clientes y servicios" },
      { value: "4", label: "Fases en el proceso de implementación" },
    ],
    url: "https://www.stylernow.com/",
    image: "/projects/stylernow.png",
    ratio: 1897 / 975,
    card: "/projects/stylernow-card.jpg",
    cardRatio: 1440 / 1080,
    shots: ["/projects/stylernow.png"],
    accent: "#ff8a00",
  },
];
