"use client";

/**
 * Authority — Sección de Propuesta de Valor
 *
 * Fondo blanco, títulos en azul oscuro (#0F172A / `text-primary`),
 * taglines en naranja accent, sin iconos.
 * Frase legal sutil al pie en gris claro.
 * Animación: stagger fade + slide-up por columna.
 */

import { motion } from "framer-motion";

// Columnas de propuesta de valor
const pillars = [
    {
        title: "Crecimiento Estratégico",
        tagline: "Sistemas digitales diseñados para escalar.",
        body: "Desarrollo web, SEO y marketing digital orientados a conversión.",
    },
    {
        title: "ROI Optimizado",
        tagline: "Estrategias basadas en datos reales.",
        body: "Performance marketing y automatización enfocada en eficiencia.",
    },
    {
        title: "Relaciones Sólidas",
        tagline: "Partnerships digitales sostenibles.",
        body: "Infraestructura adaptable según industria y presupuesto.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
};

const disclaimerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7 } },
};

export default function Authority() {
    return (
        <section className="bg-white py-32 border-t border-slate-100 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Grid de columnas */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                >
                    {pillars.map(({ title, tagline, body }, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="pt-10 md:pt-0 px-6 md:px-12"
                        >
                            {/* Título grande en azul oscuro */}
                            <h3 className="text-primary text-4xl md:text-5xl font-bold font-display tracking-tight mb-4 leading-tight">
                                {title}
                            </h3>

                            {/* Tagline en naranja accent */}
                            <motion.p
                                variants={itemVariants}
                                className="text-accent text-base italic font-semibold mb-4 leading-snug"
                            >
                                {tagline}
                            </motion.p>

                            {/* Descripción en gris medio */}
                            <motion.p
                                variants={itemVariants}
                                className="text-slate-500 text-sm font-light leading-relaxed"
                            >
                                {body}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Frase legal sutil al pie */}
                <motion.p
                    className="text-center text-slate-300 text-xs mt-20 font-light max-w-2xl mx-auto leading-relaxed"
                    variants={disclaimerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-80px" }}
                >
                    Cada proyecto es estructurado de forma personalizada. Los resultados pueden variar según mercado, competencia y condiciones externas.
                </motion.p>
            </div>
        </section>
    );
}
