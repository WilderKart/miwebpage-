"use client";

/**
 * Componente Services — Sección de Servicios
 *
 * Muestra 6 categorías de servicios. Cada categoría es una card con efecto flip:
 *   - Cara FRONTAL: ícono, título de categoría, subtítulo y lista de sub-servicios clickeables.
 *   - Cara TRASERA: nombre del sub-servicio seleccionado + descripción completa + botón X para volver.
 *
 * Flujo de interacción:
 *   Usuario hace clic en un sub-servicio → la card entera gira (flip 3D) → muestra descripción
 *   Usuario hace clic en X              → la card regresa a su vista original
 *
 * Impacta en: layout principal de la página (sección #servicios). Sin llamadas a backend.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    FaLaptopCode,
    FaChartLine,
    FaSearchDollar,
    FaRocket,
    FaFingerprint,
    FaPenNib,
    FaTimes,
} from "react-icons/fa";

/* ─────────────────────────────────────────────
   Tipos
───────────────────────────────────────────── */
interface SubService {
    title: string;
    description: string;
}

interface ServiceCategory {
    icon: React.ElementType;
    title: string;
    subtitle: string;
    img: string;
    items: SubService[];
}

/* ─────────────────────────────────────────────
   Datos — categorías con sus sub-servicios
   (copys provistos por el cliente)
───────────────────────────────────────────── */
const services: ServiceCategory[] = [
    {
        icon: FaLaptopCode,
        title: "Arquitectura Digital",
        subtitle: "Infraestructura pensada para escalar.",
        img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2670&auto=format&fit=crop",
        items: [
            {
                title: "Desarrollo estratégico",
                description:
                    "Planificamos cada paso digital de tu negocio para que tus inversiones rindan y logres tus objetivos sin perder tiempo ni dinero.",
            },
            {
                title: "Web corporativa",
                description:
                    "Creamos tu sitio web profesional que transmite confianza a tus clientes y presenta tu negocio de forma clara y atractiva.",
            },
            {
                title: "Ecommerce",
                description:
                    "Montamos tu tienda online para que vendas productos o servicios fácilmente, aumentando tus ingresos sin depender solo de clientes locales.",
            },
            {
                title: "Landing pages",
                description:
                    "Diseñamos páginas específicas para convertir visitantes en clientes, enfocadas en lograr acciones concretas para tu negocio.",
            },
        ],
    },
    {
        icon: FaChartLine,
        title: "Performance & Ads",
        subtitle: "Adquisición con retorno medible.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        items: [
            {
                title: "Google Ads",
                description:
                    "Creamos campañas en Google para que tu negocio aparezca cuando la gente busca lo que ofreces, generando ventas y consultas directas.",
            },
            {
                title: "Meta Ads",
                description:
                    "Anunciamos tu negocio en Facebook e Instagram para llegar a las personas correctas y aumentar tus ventas de manera efectiva.",
            },
            {
                title: "LinkedIn Ads",
                description:
                    "Llevamos tu negocio a profesionales y empresas relevantes, ayudándote a generar oportunidades de negocio de alto valor.",
            },
            {
                title: "Programática",
                description:
                    "Automatizamos la compra de anuncios digitales para mostrar tu marca en el lugar y momento justo, maximizando tu inversión.",
            },
        ],
    },
    {
        icon: FaSearchDollar,
        title: "SEO Estratégico",
        subtitle: "Posicionamiento de autoridad.",
        img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
        items: [
            {
                title: "Auditoría técnica",
                description:
                    "Revisamos tu sitio web para encontrar problemas que afectan su rendimiento y visibilidad, asegurando que todo funcione al 100%.",
            },
            {
                title: "SEO Local",
                description:
                    "Hacemos que tu negocio aparezca cuando alguien busca servicios cerca de ti, aumentando clientes en tu zona sin gastar en publicidad.",
            },
            {
                title: "SEO Ecommerce",
                description:
                    "Optimizamos tu tienda online para que tus productos se encuentren fácilmente en Google, aumentando ventas sin depender solo de anuncios.",
            },
            {
                title: "Linkbuilding",
                description:
                    "Conseguimos referencias de sitios confiables hacia tu web, aumentando su autoridad y visibilidad en buscadores para atraer más clientes.",
            },
        ],
    },
    {
        icon: FaRocket,
        title: "Growth Systems",
        subtitle: "Automatización y ventas.",
        img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        items: [
            {
                title: "Funnels de venta",
                description:
                    "Creamos caminos claros que guían a tus clientes desde descubrir tu negocio hasta comprar, aumentando conversiones y ventas.",
            },
            {
                title: "CRM & Automation",
                description:
                    "Organizamos y automatizamos la relación con tus clientes, recordándoles tus productos y servicios sin que tengas que hacerlo manualmente.",
            },
            {
                title: "Email Marketing",
                description:
                    "Enviamos mensajes personalizados que mantienen a tus clientes interesados y generan ventas adicionales de forma regular.",
            },
            {
                title: "IA Aplicada",
                description:
                    "Usamos inteligencia artificial para optimizar procesos, generar contenido y mejorar decisiones de negocio sin que tengas que invertir horas extras.",
            },
        ],
    },
    {
        icon: FaFingerprint,
        title: "Brand Strategy",
        subtitle: "Identidad que domina mercados.",
        img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop",
        items: [
            {
                title: "Naming & Identidad",
                description:
                    "Creamos nombres y elementos visuales que transmiten lo que tu negocio representa, haciendo que sea fácil de recordar y confiar.",
            },
            {
                title: "Rebranding",
                description:
                    "Renovamos la imagen de tu negocio para que se vea moderno, profesional y atractivo, aumentando la percepción de valor.",
            },
            {
                title: "Reputación Online",
                description:
                    "Gestionamos cómo tu negocio aparece en internet para que los clientes te perciban confiable y elijan tus productos o servicios.",
            },
            {
                title: "Diseño UI/UX",
                description:
                    "Diseñamos experiencias digitales fáciles y agradables para tus clientes, haciendo que navegar y comprar sea simple y placentero.",
            },
        ],
    },
    {
        icon: FaPenNib,
        title: "Content Marketing",
        subtitle: "Narrativa que convence.",
        img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop",
        items: [
            {
                title: "Estrategia editorial",
                description:
                    "Planificamos qué contenido publicar, cuándo y cómo, para mantener a tus clientes interesados y atraer nuevos seguidores.",
            },
            {
                title: "Copywriting",
                description:
                    "Escribimos textos persuasivos que convencen a tus clientes de comprar o tomar acción, de manera clara y directa.",
            },
            {
                title: "Calendarios",
                description:
                    "Organizamos cuándo y dónde publicar contenido para que tu negocio mantenga presencia constante y genere interacción con clientes.",
            },
            {
                title: "Blog corporativo",
                description:
                    "Creamos artículos útiles y relevantes que posicionan a tu negocio como experto, aumentando confianza y atrayendo clientes nuevos.",
            },
        ],
    },
];

/* ─────────────────────────────────────────────
   Sub-componente: ServiceCard
   La CARD COMPLETA se voltea al seleccionar un sub-servicio.
   - selectedItem: sub-servicio activo (null = cara frontal visible)
   - Al hacer clic en un ítem → flip a cara trasera con su descripción
   - Botón X en la cara trasera → flip de regreso al frente
───────────────────────────────────────────── */
function ServiceCard({
    service,
    animationDelay,
}: {
    service: ServiceCategory;
    animationDelay: number;
}) {
    // null = cara frontal; SubService = cara trasera con ese servicio
    const [selectedItem, setSelectedItem] = useState<SubService | null>(null);

    const isFlipped = selectedItem !== null;

    return (
        <motion.div
            className="relative"
            style={{ perspective: "1200px" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: animationDelay, duration: 0.5 }}
        >
            {/*
             * Contenedor interno que rota.
             * min-h fijo para que la card no colapse al voltear.
             * transform-style preserve-3d mantiene el espacio 3D para ambas caras.
             */}
            <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformStyle: "preserve-3d", minHeight: "420px" }}
                className="relative w-full"
            >
                {/* ── CARA FRONTAL ── */}
                <div
                    className="absolute inset-0 group bg-white rounded-[2rem] p-10 shadow-lg border border-slate-100 overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {/* Imagen decorativa fondo */}
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.08] group-hover:opacity-[0.12] group-hover:scale-105 transition-all duration-700 pointer-events-none">
                        <Image
                            src={service.img}
                            alt=""
                            fill
                            className="object-cover"
                            style={{
                                maskImage: "radial-gradient(circle at top right, black 40%, transparent 80%)",
                                WebkitMaskImage:
                                    "radial-gradient(circle at top right, black 40%, transparent 80%)",
                            }}
                        />
                    </div>

                    {/* Ícono */}
                    <div className="relative mb-8 inline-flex items-center justify-center p-4 rounded-2xl bg-slate-50 text-accent shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                        <service.icon size={28} />
                    </div>

                    {/* Título y subtítulo de la categoría */}
                    <div className="relative z-10 mb-8">
                        <h3 className="text-2xl font-bold text-primary mb-2 font-display tracking-tight leading-tight">
                            {service.title}
                        </h3>
                        <p className="text-slate-500 text-sm font-medium">{service.subtitle}</p>
                    </div>

                    {/* Lista de sub-servicios — cada ítem dispara el flip */}
                    <div className="relative z-10 space-y-3">
                        {service.items.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedItem(item)}
                                className="w-full text-left flex items-center gap-3 group/item cursor-pointer"
                                aria-label={`Ver descripción de ${item.title}`}
                            >
                                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200" />
                                <span className="text-primary font-semibold text-base group-hover/item:text-accent transition-colors duration-200">
                                    {item.title}
                                </span>
                                <span className="ml-auto text-slate-300 text-xs opacity-0 group-hover/item:opacity-100 transition-opacity">
                                    →
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── CARA TRASERA ── */}
                {/*
                 * rotateY(180deg) en el contenedor interno + backfaceVisibility hidden
                 * garantiza que esta cara solo sea visible cuando la card esté girada.
                 */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-10 shadow-lg border border-accent/20 flex flex-col overflow-hidden"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    {/* Glow decorativo naranja */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl pointer-events-none" />

                    {/* Etiqueta de categoría */}
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="p-2 rounded-xl bg-accent/20 text-accent">
                            <service.icon size={18} />
                        </div>
                        <span className="text-accent text-sm font-semibold tracking-wide uppercase">
                            {service.title}
                        </span>
                    </div>

                    {/* Nombre del sub-servicio seleccionado */}
                    <h4 className="text-white text-3xl font-bold font-display tracking-tight leading-tight mb-6">
                        {selectedItem?.title}
                    </h4>

                    {/* Línea separadora */}
                    <div className="w-12 h-1 bg-accent rounded-full mb-6" />

                    {/* Descripción */}
                    <p className="text-slate-300 text-base leading-relaxed flex-1">
                        {selectedItem?.description}
                    </p>

                    {/* Botón X — cierra la cara trasera y vuelve al frente */}
                    <button
                        onClick={() => setSelectedItem(null)}
                        aria-label="Volver al listado de servicios"
                        className="mt-8 self-end flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
                    >
                        <FaTimes size={12} />
                        Cerrar
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   Componente principal: Services
───────────────────────────────────────────── */
export default function Services() {
    return (
        <section id="servicios" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Fondo decorativo — grid de puntos sutil */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: "radial-gradient(#0F172A 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* ── Encabezado de sección ── */}
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-8 text-primary font-display tracking-tight flex flex-col md:block items-center"
                    >
                        SISTEMAS DE <span className="text-secondary">ALTO</span>
                        <br className="md:hidden" />
                        <motion.span
                            initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
                            whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #FF5930 0%, #ABFA54 25%, #0044FF 50%, #5C6B3D 75%, #FF5930 100%)",
                                backgroundSize: "300% 300%",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                                filter: "drop-shadow(0px 0px 20px rgba(171, 250, 84, 0.3))",
                            }}
                            transition={{
                                backgroundPosition: {
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                                scale: { duration: 0.8, ease: "easeOut" },
                                opacity: { duration: 0.8, ease: "easeOut" },
                                filter: { duration: 0.8, ease: "easeOut" },
                            }}
                            className="ml-3 inline-block font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter"
                        >
                            IMPACTO
                        </motion.span>
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        className="h-1 bg-accent mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto font-light"
                    >
                        Infraestructura digital diseñada para escalar negocios y dominar mercados.
                    </motion.p>
                </div>

                {/* ── Grid de categorías ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service}
                            animationDelay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
