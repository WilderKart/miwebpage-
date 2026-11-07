export type PostSection = { heading: string; paragraphs: string[]; list?: string[] };

export type Post = {
  slug: string;
  author: string; // slug de autor (data/team.ts)
  title: string; // H1 (con la palabra clave principal)
  metaTitle: string; // <title> para Google (≤ 60 caracteres)
  description: string; // meta description (≤ 160 caracteres)
  category: string;
  date: string;
  updated: string;
  readMinutes: number;
  excerpt: string;
  intro: string;
  keywords: string[];
  image: string; // portada a color (tarjetas, cabecera y redes)
  imageAlt: string;
  service: { slug: string; label: string }; // servicio al que lleva el llamado a la acción
  sections: PostSection[];
  faqs: { q: string; a: string }[];
};

export const blogCategories = [
  { slug: "paginas-web", label: "Páginas web" },
  { slug: "seo-y-google", label: "SEO y Google" },
  { slug: "diseno-y-agencia", label: "Diseño y agencia" },
  { slug: "branding", label: "Branding" },
];

// Texto con enlaces internos: [texto](/ruta). Se interpreta en la página del artículo.
export const posts: Post[] = [
  {
    slug: "cuanto-cuesta-una-pagina-web-en-colombia",
    author: "andres-mejia",
    title: "¿Cuánto cuesta una página web en Colombia? Guía de precios 2026 para empresas",
    metaTitle: "¿Cuánto cuesta una página web en Colombia? Precios 2026",
    description:
      "Rangos de precio de una página web en Colombia según el tipo de sitio (landing, corporativo, tienda online o app) y qué factores cambian la inversión. Guía para Cali.",
    category: "Páginas web",
    date: "2026-09-15",
    updated: "2026-11-05",
    readMinutes: 7,
    excerpt: "Rangos de referencia, factores que cambian el precio y cómo comparar propuestas sin sorpresas.",
    intro:
      "Si estás cotizando una página web en Colombia, seguramente viste precios que van de unos cientos de miles de pesos a decenas de millones. La diferencia casi nunca está en el “diseño bonito”, sino en el alcance: qué hace el sitio, quién lo mantiene y cuánto te ayuda a vender. Esta guía te da rangos de referencia y una forma clara de comparar propuestas.",
    keywords: ["cuánto cuesta una página web en Colombia", "precio página web Colombia", "costo de una página web", "diseño de páginas web en Cali", "cotizar página web"],
    image: "/blog/cuanto-cuesta-una-pagina-web-en-colombia.jpg",
    imageAlt: "Calculadora, bocetos de una página web y monedas sobre un escritorio, ilustrando el costo de una página web",
    service: { slug: "desarrollo-web", label: "Desarrollo web" },
    sections: [
      {
        heading: "Rangos de precio de referencia en Colombia",
        paragraphs: [
          "Los valores cambian según el equipo, la ciudad y el alcance, así que tómalos como una orientación y no como una tarifa fija. En el mercado colombiano, estos son los rangos más habituales para proyectos hechos por una agencia o un equipo profesional:",
        ],
        list: [
          "Landing page (una sola página enfocada en convertir): entre $800.000 y $2.500.000 COP.",
          "Sitio web corporativo (5 a 10 secciones, formulario y SEO básico): entre $2.500.000 y $8.000.000 COP.",
          "Tienda online (catálogo, carrito, pagos e inventario): entre $4.000.000 y $15.000.000 COP o más.",
          "Aplicación web a medida (usuarios, paneles, procesos propios): desde $15.000.000 COP, según la complejidad.",
        ],
      },
      {
        heading: "Qué factores hacen que el precio suba o baje",
        paragraphs: [
          "Un sitio con diseño a medida cuesta más que uno basado en una plantilla, pero suele diferenciarte mejor y cargar más rápido porque no arrastra código que no necesita.",
          "También pesan la cantidad de secciones, las integraciones (pasarelas de pago como PSE o Nequi, WhatsApp, CRM, facturación), la redacción de los textos, la producción de fotos y el trabajo de [SEO técnico](/servicios/estrategia-digital) para aparecer en Google.",
          "Por último, cuenta si necesitas un panel para administrar el contenido tú mismo y si vas a contratar mantenimiento posterior: actualizaciones, copias de seguridad y mejoras mensuales.",
        ],
      },
      {
        heading: "Costos que no siempre aparecen en la cotización",
        paragraphs: [
          "Además del desarrollo, una página web tiene costos anuales: el dominio (por lo general entre $60.000 y $100.000 COP al año) y el hosting o alojamiento (desde unos $150.000 hasta $600.000 COP al año, según el plan). Pregunta siempre si están incluidos, a nombre de quién quedan registrados y quién paga la renovación.",
        ],
      },
      {
        heading: "Cómo comparar propuestas sin equivocarte",
        paragraphs: [
          "No compares solo el valor final. Pide por escrito el alcance, los tiempos de entrega, el número de revisiones, qué incluye el SEO, si el sitio será adaptable a celulares y qué pasa después de publicarlo.",
          "Una propuesta barata que no incluye velocidad, SEO ni soporte suele terminar costando más. Si quieres ver cómo se ve un proyecto terminado, revisa nuestro [portafolio de proyectos](/proyectos) y pide una cotización.",
        ],
      },
    ],
    faqs: [
      { q: "¿Cuánto cuesta una página web básica en Colombia?", a: "Una página básica o landing suele costar entre $800.000 y $2.500.000 COP. Un sitio corporativo con varias secciones, formulario y SEO básico se ubica entre $2.500.000 y $8.000.000 COP, según el alcance." },
      { q: "¿Cuánto tarda en hacerse una página web?", a: "Una landing puede estar lista en una o dos semanas y un sitio corporativo entre tres y seis semanas. Las tiendas online y las aplicaciones toman más tiempo porque requieren pagos, inventario y pruebas." },
      { q: "¿Pago algo cada año por tener una página web?", a: "Sí. Debes renovar el dominio y el hosting cada año, y es recomendable contratar un mantenimiento para actualizaciones y copias de seguridad." },
    ],
  },
  {
    slug: "pagina-web-o-tienda-online-cual-necesita-tu-negocio",
    author: "andres-mejia",
    title: "Página web o tienda online: cuál necesita tu negocio en Colombia",
    metaTitle: "Página web o tienda online: cuál elegir para tu negocio",
    description:
      "Diferencias entre un sitio web corporativo y una tienda online, qué incluye cada uno y cómo decidir según tu producto, tus clientes y tu presupuesto en Colombia.",
    category: "Páginas web",
    date: "2026-10-20",
    updated: "2026-11-05",
    readMinutes: 6,
    excerpt: "Cuándo basta con un sitio que presente tus servicios y cuándo conviene vender en línea.",
    intro:
      "Muchos negocios dudan entre tener una página web que presente sus servicios o montar una tienda online para vender las 24 horas. La respuesta depende de lo que vendes, de cómo te compran tus clientes y de cuánto tiempo puedes dedicar a atender pedidos. Estas son las diferencias reales para decidir con criterio.",
    keywords: ["página web o tienda online", "tienda online Colombia", "crear tienda virtual en Cali", "sitio web corporativo", "vender por internet en Colombia"],
    image: "/blog/pagina-web-o-tienda-online-cual-necesita-tu-negocio.jpg",
    imageAlt: "Portátil mostrando una tienda online junto a un celular con el carrito de compras y paquetes de envío",
    service: { slug: "desarrollo-web", label: "Desarrollo web" },
    sections: [
      {
        heading: "Qué es un sitio web corporativo",
        paragraphs: [
          "Es la presentación digital de tu empresa: quiénes eres, qué servicios ofreces, tus proyectos, datos de contacto y un formulario o botón de WhatsApp para cotizar. Está pensado para generar confianza y recibir solicitudes, sobre todo si vendes servicios que se cotizan (ingeniería, asesoría, instalaciones, reparaciones).",
        ],
      },
      {
        heading: "Qué agrega una tienda online",
        paragraphs: [
          "Una tienda online suma catálogo de productos, carrito, pasarela de pagos, control de inventario y gestión de pedidos y envíos. Es la mejor opción cuando vendes productos con precio definido y el cliente puede decidir la compra sin hablar contigo.",
        ],
        list: [
          "Catálogo con fotos, precios, variantes y buscador.",
          "Pagos con tarjeta, PSE y billeteras como Nequi.",
          "Inventario y panel para administrar pedidos.",
          "Cupones, ofertas y datos estructurados para aparecer mejor en Google.",
        ],
      },
      {
        heading: "Cómo decidir en cuatro preguntas",
        paragraphs: [
          "Hazte estas preguntas: ¿mi producto tiene un precio fijo?, ¿mis clientes están dispuestos a comprar sin hablar conmigo?, ¿puedo gestionar inventario y envíos?, ¿tengo fotos y descripciones de cada producto? Si respondes que sí a la mayoría, una tienda online tiene sentido. Si tu venta depende de una visita técnica o una cotización, empieza por un sitio corporativo bien posicionado.",
        ],
      },
      {
        heading: "Puedes empezar por uno y crecer al otro",
        paragraphs: [
          "No tienes que decidir para siempre. Muchos negocios empiezan con un sitio corporativo, miden qué productos piden más y después añaden la tienda. En nuestro [portafolio](/proyectos) puedes ver ejemplos de ambos caminos, como una tienda tecnológica y un sitio corporativo de ingeniería eléctrica que luego sumó su tienda de ferretería.",
        ],
      },
    ],
    faqs: [
      { q: "¿Qué es más barato, una página web o una tienda online?", a: "Un sitio corporativo suele costar menos porque no incluye catálogo, carrito, pagos ni inventario. La tienda online requiere más desarrollo y configuración, por eso su inversión es mayor." },
      { q: "¿Puedo vender por internet solo con WhatsApp?", a: "Sí, es una forma de empezar, pero no escala bien: cada venta exige atención manual. Una tienda online automatiza el catálogo, el pago y el pedido." },
      { q: "¿Una tienda online me sirve si vendo servicios?", a: "Depende. Si el servicio tiene precio fijo y se contrata sin visita previa, puedes venderlo en línea. Si requiere diagnóstico o cotización, conviene un sitio corporativo con formulario de contacto." },
    ],
  },
  {
    slug: "seo-local-en-cali-como-aparecer-en-google",
    author: "laura-valencia",
    title: "SEO local en Cali: cómo aparecer en Google cuando te buscan cerca",
    metaTitle: "SEO local en Cali: cómo aparecer en Google en 2026",
    description:
      "Guía práctica de SEO local para negocios de Cali: palabras clave, página por servicio, perfil de Google, reseñas y datos de contacto para que te encuentren cerca.",
    category: "SEO y Google",
    date: "2026-09-22",
    updated: "2026-11-05",
    readMinutes: 7,
    excerpt: "Pasos concretos para aparecer en búsquedas como “diseño web en Cali” o “ingeniería eléctrica en Cali”.",
    intro:
      "Cuando alguien busca “diseño web en Cali” o “ingeniería eléctrica en Cali”, quiere resolver algo cerca y ahora. Quien aparece primero en Google recibe la llamada, el mensaje o la visita. El SEO local es el conjunto de acciones que te ponen ahí, y no requiere un presupuesto enorme: requiere orden y constancia.",
    keywords: ["SEO local en Cali", "posicionamiento web en Cali", "aparecer en Google Cali", "SEO para negocios locales", "agencia SEO Cali"],
    image: "/blog/seo-local-en-cali-como-aparecer-en-google.jpg",
    imageAlt: "Mapa de Cali en una pantalla con pines de ubicación y una lupa sobre los resultados de Google",
    service: { slug: "estrategia-digital", label: "Estrategia digital y SEO" },
    sections: [
      {
        heading: "Por qué el SEO local importa para tu negocio",
        paragraphs: [
          "Una parte muy grande de las búsquedas en celular tiene intención local: la persona quiere un servicio cerca de donde está. Los resultados de Google combinan tres cosas: los resultados normales, el mapa con tres negocios destacados y los anuncios. Estar en el mapa y en los primeros resultados multiplica tus contactos sin pagar por cada clic.",
        ],
      },
      {
        heading: "Los tres pilares del SEO local",
        paragraphs: [
          "Primero, un sitio rápido y claro, con una página para cada servicio y la ciudad en los títulos y textos (por ejemplo, “mantenimiento eléctrico industrial en Cali”). Una sola página que lo explica todo posiciona peor que varias páginas enfocadas.",
          "Segundo, un [perfil de negocio en Google](/blog/perfil-de-negocio-en-google-como-aparecer-en-google-maps) completo, con fotos reales, horarios, servicios, descripción y reseñas.",
          "Tercero, contenido útil que responda las preguntas de tus clientes y enlaces desde sitios locales, como directorios, cámaras de comercio y aliados.",
        ],
      },
      {
        heading: "Palabras clave: cómo elegirlas",
        paragraphs: [
          "Piensa en cómo te buscaría un cliente, no en cómo te llamas tú. Combina el servicio con la ciudad y el problema: “reparación de portátiles en Cali”, “cotización de instalación eléctrica”, “diseño de páginas web en Cali”. Usa esa frase en el título, el primer párrafo, un subtítulo y la descripción de la página, sin repetirla de forma forzada.",
        ],
      },
      {
        heading: "Datos de contacto idénticos en todas partes",
        paragraphs: [
          "Tu nombre, dirección y teléfono deben escribirse igual en tu sitio, en Google y en tus redes. Las diferencias confunden a los buscadores y le restan fuerza a tu posicionamiento local.",
        ],
      },
      {
        heading: "Mide y ajusta cada mes",
        paragraphs: [
          "Revisa en Google Search Console qué búsquedas te traen visitas, qué páginas reciben clics y cuáles tienen impresiones pero poco clic. Con esos datos mejoras títulos y textos, y decides qué contenido nuevo escribir. Si prefieres delegarlo, nuestro equipo de [estrategia digital y SEO](/servicios/estrategia-digital) puede encargarse.",
        ],
      },
    ],
    faqs: [
      { q: "¿Cuánto tarda el SEO local en dar resultados?", a: "Los primeros movimientos suelen verse entre uno y tres meses, y el posicionamiento estable llega entre tres y seis meses, según la competencia y la calidad del sitio." },
      { q: "¿Necesito una página web para aparecer en Google Maps?", a: "Puedes aparecer solo con un perfil de negocio, pero tener un sitio web propio mejora tu posicionamiento y te permite captar más solicitudes." },
      { q: "¿Las reseñas influyen en el SEO local?", a: "Sí. La cantidad, la calidad y la frecuencia de las reseñas, y que respondas a ellas, influyen en cuánto destacas en el mapa." },
    ],
  },
  {
    slug: "perfil-de-negocio-en-google-como-aparecer-en-google-maps",
    author: "laura-valencia",
    title: "Perfil de negocio en Google: cómo aparecer en Google Maps paso a paso",
    metaTitle: "Perfil de negocio en Google: aparecer en Maps paso a paso",
    description:
      "Cómo crear y optimizar tu perfil de negocio en Google para aparecer en Google Maps en Cali: verificación, categorías, fotos, reseñas y errores que debes evitar.",
    category: "SEO y Google",
    date: "2026-10-27",
    updated: "2026-11-05",
    readMinutes: 6,
    excerpt: "Crea, verifica y optimiza tu ficha de Google para que te encuentren en el mapa.",
    intro:
      "El perfil de negocio de Google (antes Google My Business) es la ficha que aparece en el mapa y en el lado derecho de los resultados cuando buscan tu empresa. Es gratis, es lo primero que ven muchos clientes y, bien optimizado, puede traerte llamadas todos los días. Este es el paso a paso para crearlo y mejorarlo.",
    keywords: ["perfil de negocio en Google", "Google Maps negocio Cali", "Google My Business Colombia", "cómo aparecer en Google Maps", "reseñas de Google"],
    image: "/blog/perfil-de-negocio-en-google-como-aparecer-en-google-maps.jpg",
    imageAlt: "Celular mostrando la ficha de un negocio en Google Maps con estrellas de reseñas y un pin de ubicación",
    service: { slug: "estrategia-digital", label: "Estrategia digital y SEO" },
    sections: [
      {
        heading: "Paso 1: crea y verifica tu perfil",
        paragraphs: [
          "Busca tu negocio en Google Maps. Si no aparece, agrégalo con tu cuenta de Google. Completa el nombre real de tu negocio (sin añadir palabras clave de relleno), la dirección o el área de servicio y el teléfono. Google te pedirá verificar que eres el dueño, normalmente por videollamada, llamada o código.",
        ],
      },
      {
        heading: "Paso 2: elige bien la categoría y los servicios",
        paragraphs: [
          "La categoría principal es uno de los factores que más influye. Elige la que mejor describa tu actividad (por ejemplo, “agencia de diseño web”) y añade categorías secundarias. Después lista cada servicio con una descripción corta que incluya la ciudad cuando sea natural.",
        ],
      },
      {
        heading: "Paso 3: completa toda la información",
        paragraphs: ["Cuanto más completo esté el perfil, más confianza genera. Revisa que incluya:"],
        list: [
          "Horarios, incluidos festivos y horarios especiales.",
          "Enlace a tu sitio web y botón de WhatsApp.",
          "Descripción del negocio con tus servicios y zonas de cobertura.",
          "Fotos reales del local, del equipo y de trabajos terminados.",
        ],
      },
      {
        heading: "Paso 4: consigue y responde reseñas",
        paragraphs: [
          "Pídeles a tus clientes satisfechos que dejen una reseña y comparte el enlace directo. Responde todas, también las negativas, con respeto y con una solución. Nunca compres reseñas: Google las detecta y puede suspender tu perfil.",
        ],
      },
      {
        heading: "Errores comunes que debes evitar",
        paragraphs: [
          "Usar un nombre distinto al real, dejar el perfil sin actualizar, tener datos diferentes a los de tu web o crear perfiles duplicados. Cuida también que tu [sitio web esté optimizado para SEO local](/blog/seo-local-en-cali-como-aparecer-en-google), porque ambos se refuerzan.",
        ],
      },
    ],
    faqs: [
      { q: "¿Tiene costo crear un perfil de negocio en Google?", a: "No. Crear y administrar el perfil de negocio en Google es gratuito." },
      { q: "¿Puedo aparecer en Google Maps si no tengo local?", a: "Sí. Si atiendes a domicilio puedes configurar un área de servicio sin mostrar tu dirección." },
      { q: "¿Cuánto tarda la verificación?", a: "Depende del método: puede ser inmediata con videollamada o tomar algunos días con código por correo o llamada." },
    ],
  },
  {
    slug: "como-elegir-una-agencia-de-diseno-web-en-cali",
    author: "camilo-restrepo",
    title: "Cómo elegir una agencia de diseño web en Cali: 7 criterios para no equivocarte",
    metaTitle: "Cómo elegir una agencia de diseño web en Cali: 7 criterios",
    description:
      "Qué revisar antes de contratar una agencia de diseño y desarrollo web en Cali: portafolio, tecnología, SEO, propiedad del sitio, soporte y una propuesta clara por escrito.",
    category: "Diseño y agencia",
    date: "2026-10-01",
    updated: "2026-11-07",
    readMinutes: 6,
    excerpt: "Siete preguntas que te ayudan a distinguir una agencia seria de una que solo promete.",
    intro:
      "Elegir una agencia de diseño web en Cali no debería depender del precio más bajo ni del portafolio más vistoso. Un sitio web es una inversión que trabaja para tu negocio todos los días, y la agencia que lo construya define su velocidad, su posicionamiento en Google y lo fácil que será hacerlo crecer. Estos son los siete criterios que conviene revisar antes de firmar.",
    keywords: ["agencia de diseño web en Cali", "cómo elegir una agencia web", "desarrollo web en Cali", "agencia digital en Cali", "contratar diseñador web"],
    image: "/blog/como-elegir-una-agencia-de-diseno-web-en-cali.jpg",
    imageAlt: "Reunión de trabajo entre un equipo de agencia digital y un cliente revisando el diseño de un sitio web en un portátil",
    service: { slug: "desarrollo-web", label: "Desarrollo web" },
    sections: [
      {
        heading: "1. Revisa su portafolio con proyectos reales y en línea",
        paragraphs: [
          "Pide ver sitios publicados y funcionando, no solo imágenes. Entra desde tu celular, mide qué tan rápido cargan y comprueba que se vean bien en todos los tamaños. Si puedes, habla con el cliente. En nuestro [portafolio](/proyectos) todos los proyectos están en línea para que los visites.",
        ],
      },
      {
        heading: "2. Pregunta por la tecnología y la velocidad",
        paragraphs: [
          "Una agencia profesional trabaja con tecnologías modernas (por ejemplo, Next.js o React) y puede explicarte por qué. La velocidad de carga influye en tus ventas y en tu posicionamiento: pide que midan el sitio con Core Web Vitals antes de entregarlo.",
        ],
      },
      {
        heading: "3. Exige SEO desde el diseño, no como un extra",
        paragraphs: [
          "El posicionamiento se construye desde la estructura: títulos, URL, velocidad, datos estructurados y una página por servicio. Si la agencia “agrega el SEO al final”, ya perdiste tiempo. Lee nuestra guía de [SEO local en Cali](/blog/seo-local-en-cali-como-aparecer-en-google) para saber qué pedir.",
        ],
      },
      {
        heading: "4. Confirma quién será el dueño del dominio, el hosting y el código",
        paragraphs: [
          "Tu dominio y tu infraestructura deben quedar a tu nombre o al de tu empresa, con acceso a tu código fuente. Así nadie puede retener tu sitio y puedes cambiar de proveedor cuando quieras.",
        ],
      },
      {
        heading: "5. Mira cómo trabajan: diagnóstico, cronograma y entregables",
        paragraphs: ["Una agencia ordenada te entrega por escrito:"],
        list: [
          "Un diagnóstico inicial de tu negocio y tus objetivos.",
          "Un cronograma con fechas y número de revisiones.",
          "El alcance exacto: secciones, funciones e integraciones.",
          "Qué incluye el SEO, el diseño adaptable a celular y la capacitación.",
        ],
      },
      {
        heading: "6. Pregunta qué pasa después del lanzamiento",
        paragraphs: [
          "Un sitio necesita mantenimiento: actualizaciones de seguridad, copias de respaldo y mejoras. Pregunta si hay planes de soporte y qué incluyen, y si puedes contratar solo lo que necesitas, sin permanencia forzada.",
        ],
      },
      {
        heading: "7. Compara por alcance, no solo por precio",
        paragraphs: [
          "Dos cotizaciones con el mismo valor pueden incluir cosas muy distintas. Antes de decidir, revisa nuestra guía de [cuánto cuesta una página web en Colombia](/blog/cuanto-cuesta-una-pagina-web-en-colombia) y compara las propuestas punto por punto. Si quieres una cotización clara, [conoce nuestro servicio de desarrollo web](/servicios/desarrollo-web).",
        ],
      },
    ],
    faqs: [
      { q: "¿Cuánto debería durar el desarrollo de una página web?", a: "Una página corporativa suele tomar entre tres y seis semanas. Tiendas online y aplicaciones requieren más tiempo, según el alcance." },
      { q: "¿Es mejor una agencia o un diseñador freelance?", a: "Depende del proyecto. Una agencia reúne diseño, desarrollo, SEO y soporte en un solo equipo, lo que reduce riesgos en proyectos que necesitan varias especialidades." },
      { q: "¿Qué debo pedir en una propuesta de diseño web?", a: "Alcance detallado, cronograma, entregables, número de revisiones, qué incluye el SEO, quién es dueño del dominio y el código, y las condiciones de soporte posterior." },
    ],
  },
  {
    slug: "diseno-ui-ux-que-es-y-como-aumenta-las-ventas-de-tu-pagina-web",
    author: "camilo-restrepo",
    title: "Diseño UI/UX: qué es y cómo aumenta las ventas de tu página web",
    metaTitle: "Diseño UI/UX: qué es y cómo aumenta las ventas web",
    description:
      "Qué es el diseño UI/UX, en qué se diferencian UI y UX y qué prácticas (jerarquía, velocidad, móvil, llamados a la acción) convierten visitas en clientes en tu sitio web.",
    category: "Diseño y agencia",
    date: "2026-11-03",
    updated: "2026-11-07",
    readMinutes: 6,
    excerpt: "La diferencia entre un sitio bonito y uno que vende está en cómo se diseña la experiencia.",
    intro:
      "Un sitio web puede verse espectacular y aun así no vender. La razón casi siempre está en la experiencia: si el visitante no encuentra rápido lo que busca, no entiende qué hacer o se frustra en el celular, se va. El diseño UI/UX se ocupa justamente de eso: que tu sitio se vea bien, sea fácil de usar y guíe a cada persona hasta contactarte o comprar.",
    keywords: ["diseño UI/UX", "qué es UI UX", "diseño web que vende", "experiencia de usuario", "conversión web"],
    image: "/blog/diseno-ui-ux-que-es-y-como-aumenta-las-ventas-de-tu-pagina-web.jpg",
    imageAlt: "Diseñadora UI/UX trabajando con wireframes y prototipos de una aplicación en una pantalla y en papel",
    service: { slug: "diseno-ui-ux", label: "Diseño UI/UX" },
    sections: [
      {
        heading: "Qué es UI y qué es UX",
        paragraphs: [
          "UI (interfaz de usuario) es lo que se ve: colores, tipografías, botones, imágenes y la jerarquía de la página. UX (experiencia de usuario) es lo que se siente al usarla: qué tan fácil es encontrar información, completar un formulario o comprar.",
          "Una buena interfaz sin buena experiencia es solo decoración; una buena experiencia sin interfaz cuidada pierde confianza. Las dos van juntas.",
        ],
      },
      {
        heading: "Cinco prácticas que más impactan las ventas",
        paragraphs: ["Estas decisiones de diseño tienen efecto directo en cuántos visitantes se convierten en clientes:"],
        list: [
          "Jerarquía clara: un mensaje principal, un llamado a la acción visible y menos distracciones.",
          "Navegación simple: que cualquiera llegue a cualquier servicio en dos clics.",
          "Prueba social: reseñas, casos de éxito y logos de clientes cerca de los llamados a la acción.",
          "Formularios cortos: pide solo lo necesario para empezar la conversación.",
          "Botón de WhatsApp visible: en Colombia es el canal que más contactos genera.",
        ],
      },
      {
        heading: "Velocidad y diseño pensado primero para celular",
        paragraphs: [
          "Más de la mitad de las visitas llegan desde el celular. Un sitio lento o que se desborda en pantallas pequeñas pierde clientes antes de mostrar una sola imagen. Por eso diseñamos primero la versión móvil y la optimizamos con [desarrollo web moderno](/servicios/desarrollo-web) para que cargue rápido.",
        ],
      },
      {
        heading: "Cómo medir si el diseño funciona",
        paragraphs: [
          "Revisa en Google Analytics la tasa de rebote y de conversión, usa mapas de calor para ver dónde hacen clic las personas y prueba variantes de títulos y botones. El diseño se mejora con datos, no con opiniones. Si además trabajas tu posicionamiento, combínalo con [SEO local](/blog/seo-local-en-cali-como-aparecer-en-google).",
        ],
      },
      {
        heading: "Cuándo conviene rediseñar tu sitio",
        paragraphs: [
          "Si tu web tiene más de tres años, no se ve bien en celular, tarda más de tres segundos en cargar o recibe visitas pero pocos contactos, es momento de un rediseño. En TechnoUltra partimos de un diagnóstico, definimos la estructura y diseñamos prototipos en Figma antes de programar. Conoce nuestro [servicio de diseño UI/UX](/servicios/diseno-ui-ux).",
        ],
      },
    ],
    faqs: [
      { q: "¿Cuál es la diferencia entre UI y UX?", a: "UI es el aspecto visual de la interfaz (colores, botones, tipografías). UX es la experiencia completa al usarla: facilidad, claridad y satisfacción." },
      { q: "¿El diseño UI/UX realmente aumenta las ventas?", a: "Sí, porque reduce fricción: un sitio claro, rápido y fácil de usar convierte más visitas en contactos y compras que uno confuso." },
      { q: "¿Qué es un prototipo en Figma?", a: "Es una maqueta interactiva de tu sitio que permite validar la estructura y el recorrido del usuario antes de programarlo, lo que evita cambios costosos." },
    ],
  },
  {
    slug: "branding-para-pymes-elementos-de-identidad",
    author: "natalia-cardenas",
    title: "Branding para pymes: 5 elementos de identidad que tu marca necesita",
    metaTitle: "Branding para pymes: 5 elementos de identidad de marca",
    description:
      "Qué es el branding y los 5 elementos que toda pyme necesita: logo, color, tipografía, voz y plantillas. Cómo construir una marca que se reconozca y genere confianza.",
    category: "Branding",
    date: "2026-10-08",
    updated: "2026-11-05",
    readMinutes: 6,
    excerpt: "Logo, color, tipografía, voz y plantillas: la base de una marca que se reconoce y genera confianza.",
    intro:
      "Muchas pymes creen que tener branding es tener un logo. En realidad, la marca es la suma de todo lo que tu cliente ve, lee y siente al encontrarse contigo: desde la tarjeta hasta el perfil de Instagram. Una identidad bien definida te hace reconocible, justifica tus precios y genera confianza antes de que alguien te escriba.",
    keywords: ["branding para pymes", "identidad de marca", "diseño de logo en Cali", "manual de marca", "branding en Colombia"],
    image: "/blog/branding-para-pymes-elementos-de-identidad.jpg",
    imageAlt: "Mesa de diseño con paleta de colores, muestras tipográficas, tarjetas de presentación y un logo impreso",
    service: { slug: "identidad-de-marca", label: "Identidad de marca" },
    sections: [
      {
        heading: "Una marca es más que un logo",
        paragraphs: [
          "El logo es solo la puerta de entrada. Una identidad sólida combina elementos visuales y de comunicación que se repiten en todos los puntos de contacto, de modo que la gente te reconozca incluso sin ver tu nombre.",
        ],
      },
      {
        heading: "Los cinco elementos de una identidad de marca",
        paragraphs: ["Estos son los cinco que toda pyme debería tener definidos:"],
        list: [
          "Logo versátil: que funcione en pequeño, en grande, en color y en blanco y negro.",
          "Paleta de color: uno o dos colores principales y neutros de apoyo, con sus códigos.",
          "Tipografías: una para títulos y otra para textos, legibles en pantalla y en impreso.",
          "Tono de voz: cómo hablas (cercano, técnico, elegante) y cómo no.",
          "Plantillas: para redes sociales, presentaciones, cotizaciones y papelería.",
        ],
      },
      {
        heading: "Por qué conviene reunirlo en un manual de marca",
        paragraphs: [
          "El manual de marca documenta estos elementos y su uso correcto. Así cualquier persona de tu equipo, o un proveedor externo, comunica con la misma imagen y evitas que cada pieza se vea distinta.",
        ],
      },
      {
        heading: "Por dónde empezar",
        paragraphs: [
          "Define a quién le hablas y qué te diferencia. A partir de ahí el diseño tiene dirección y no depende de gustos personales. Si necesitas ayuda, en TechnoUltra creamos [identidades de marca completas](/servicios/identidad-de-marca) para pymes y las llevamos a tu web y redes sociales.",
        ],
      },
    ],
    faqs: [
      { q: "¿Qué incluye el branding de una empresa?", a: "Normalmente: estrategia y posicionamiento, logo, paleta de color, tipografías, tono de voz, papelería y plantillas, reunidos en un manual de marca." },
      { q: "¿Cuánto tarda crear una identidad de marca?", a: "Un proyecto de identidad para una pyme suele tomar entre tres y seis semanas, según el número de piezas y las rondas de ajustes." },
      { q: "¿Es lo mismo hacer un logo que hacer branding?", a: "No. El logo es una pieza de la marca; el branding incluye estrategia, sistema visual y comunicación." },
    ],
  },
  {
    slug: "logo-o-identidad-de-marca-que-incluye-un-manual-de-marca",
    author: "natalia-cardenas",
    title: "Logo o identidad de marca: qué incluye un manual de marca y cuándo lo necesitas",
    metaTitle: "Manual de marca: qué incluye y cuándo lo necesitas",
    description:
      "Diferencias entre un logo y una identidad de marca completa, qué contiene un manual de marca y señales de que tu negocio ya necesita uno.",
    category: "Branding",
    date: "2026-11-06",
    updated: "2026-11-06",
    readMinutes: 5,
    excerpt: "Qué hay detrás de un manual de marca y cuándo conviene dar el paso de un logo a una identidad completa.",
    intro:
      "Empezaste con un logo hecho rápido y hoy tu marca se ve distinta en cada lugar: el logo en la web no coincide con el de Instagram y las cotizaciones parecen de otra empresa. Ese es el momento de pasar de un logo suelto a una identidad con manual de marca. Te explicamos qué incluye y cómo saber si ya lo necesitas.",
    keywords: ["manual de marca", "qué incluye un manual de marca", "diferencia logo e identidad de marca", "rediseño de logo", "identidad corporativa"],
    image: "/blog/logo-o-identidad-de-marca-que-incluye-un-manual-de-marca.jpg",
    imageAlt: "Manual de marca abierto sobre una mesa con variaciones del logo, paleta de colores y ejemplos de aplicación",
    service: { slug: "identidad-de-marca", label: "Identidad de marca" },
    sections: [
      {
        heading: "Logo vs. identidad de marca",
        paragraphs: [
          "El logo es el símbolo que te representa. La identidad de marca es el sistema completo: colores, tipografías, estilo de imágenes, tono de voz y reglas para usarlos. Con un logo te reconocen; con una identidad te recuerdan y confían en ti.",
        ],
      },
      {
        heading: "Qué contiene un manual de marca",
        paragraphs: ["Un manual completo reúne, como mínimo:"],
        list: [
          "Historia, propósito, valores y personalidad de la marca.",
          "Versiones del logo, áreas de respeto, tamaños mínimos y usos incorrectos.",
          "Paleta de color con códigos para pantalla (HEX, RGB) e impresión (CMYK).",
          "Tipografías y jerarquías para títulos, subtítulos y textos.",
          "Estilo fotográfico, iconografía y elementos gráficos.",
          "Tono de voz con ejemplos de cómo escribir.",
          "Aplicaciones: papelería, redes sociales, empaques, señalética y web.",
        ],
      },
      {
        heading: "Señales de que tu negocio ya necesita uno",
        paragraphs: [
          "Si tu marca se ve distinta según el canal, si varias personas diseñan piezas sin una guía, si vas a lanzar una web o una tienda, o si quieres competir con empresas más grandes, ya es momento. Un manual ahorra tiempo en cada pieza futura y evita rediseños constantes.",
        ],
      },
      {
        heading: "Cómo llevarlo a tu web y redes",
        paragraphs: [
          "La identidad cobra valor cuando se aplica. Por eso conviene que quien diseña tu marca también trabaje con tu [página web](/servicios/desarrollo-web) y tus redes, para que todo hable el mismo idioma. Lee también nuestros [5 elementos de identidad para pymes](/blog/branding-para-pymes-elementos-de-identidad).",
        ],
      },
    ],
    faqs: [
      { q: "¿Qué es un manual de marca?", a: "Es el documento que define cómo se ve y cómo habla tu marca: logo, colores, tipografías, tono de voz y reglas de uso en cada soporte." },
      { q: "¿Una pyme necesita un manual de marca?", a: "Sí, sobre todo si comunica en varios canales o trabaja con distintos proveedores. No tiene que ser extenso: lo importante es que sea claro y se use." },
      { q: "¿Puedo rediseñar mi logo sin perder a mis clientes?", a: "Sí. Un rediseño evolutivo mantiene elementos reconocibles (color, forma o nombre) mientras mejora la calidad y la coherencia." },
    ],
  },
];

// Los cuatro artículos de la sección «Noticias y guías» de la home (uno por tema principal).
export const homePosts = [
  "cuanto-cuesta-una-pagina-web-en-colombia",
  "seo-local-en-cali-como-aparecer-en-google",
  "como-elegir-una-agencia-de-diseno-web-en-cali",
  "branding-para-pymes-elementos-de-identidad",
]
  .map((slug) => posts.find((p) => p.slug === slug)!)
  .filter(Boolean);
