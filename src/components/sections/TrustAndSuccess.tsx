"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaArrowRight, FaStar, FaQuoteLeft } from "react-icons/fa";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function TrustAndSuccess() {
    return (
        <section className="w-full font-sans">
            {/* 1. SECCIÓN DE LOGOS (Dark) */}
            <div className="bg-[#0B1120] text-white py-20 px-6 border-b border-white/5">
                <motion.div 
                    className="max-w-7xl mx-auto text-center"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <motion.p variants={fadeUp} className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
                        EMPRESAS QUE
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                        <span className="text-accent">CONFÍAN</span> EN NOSOTROS
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl mx-auto text-[15px] mb-12">
                        Organizaciones que han elegido a <strong className="text-white font-medium">Technoultra</strong> para construir su crecimiento digital con estrategia, <strong className="text-white font-medium">diseño y tecnología</strong>.
                    </motion.p>
                    
                    {/* Carrusel de Logos Animado */}
                    <div className="relative w-full overflow-hidden mt-12 py-6">
                        {/* Difuminados en los bordes para un efecto suave */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B1120] to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B1120] to-transparent z-10 pointer-events-none"></div>

                        <motion.div
                            className="flex items-center gap-16 md:gap-24 w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 20 // Ajustar velocidad aquí
                            }}
                        >
                            {/* Doble mapeo para el efecto infinito sin cortes */}
                            {[1, 2].map((group) => (
                                <React.Fragment key={group}>
                                    {[
                                        { name: "ELECTRIOBRAS", src: "/logo_companys/Logo electriobras (1300 x 1920 px).svg" },
                                        { name: "EL VIAJERO", src: "/logo_companys/el viajero.png" },
                                        { name: "LEVEL23", src: "/logo_companys/level23.png" },
                                        { name: "STYLERNOW", src: "/logo_companys/stylernow.png" }
                                    ].map((logo, idx) => (
                                        <div key={`${group}-${idx}`} className="flex items-center justify-center min-w-[200px] md:min-w-[250px] transition-colors">
                                            <Image
                                                src={logo.src}
                                                alt={`Cliente ${logo.name}`}
                                                width={200}
                                                height={80}
                                                className="h-16 md:h-20 w-auto object-contain transition-transform hover:scale-110 duration-300"
                                                unoptimized
                                            />
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* 2. CASOS DE ÉXITO (Light) */}
            <div className="bg-[#F8FAFC] py-24 px-6 relative">
                <motion.div 
                    className="max-w-7xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <motion.div variants={fadeUp} className="text-center mb-16">
                        <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">
                            CASOS DE ÉXITO
                        </p>
                        <h3 className="text-[#0F172A] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            Proyectos que generan resultados reales
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Card 1: Electriobras */}
                        <motion.article variants={fadeUp} className="bg-[#1E293B] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col group min-h-[480px]">
                            <div className="absolute inset-0 z-0">
                                <Image src="/proyectos/electriobras.webp" unoptimized alt="Caso de Éxito Electriobras - Desarrollo Web" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
                            </div>
                            <div className="relative z-10 p-8 flex flex-col h-full justify-end text-white">
                                <div className="mb-2">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Electriobras Website</p>
                                </div>
                                <div className="mb-6 border-l-2 border-accent pl-4">
                                    <p className="text-xs font-bold tracking-widest uppercase text-slate-300 mb-1">ELECTRIOBRAS</p>
                                    <h4 className="text-2xl font-bold leading-tight">Implementamos su<br/>presencia digital</h4>
                                </div>
                                <div className="flex justify-between items-end border-t border-white/20 pt-6">
                                    <div className="text-center">
                                        <p className="text-accent text-3xl font-extrabold mb-1 tracking-tight">+70%</p>
                                        <p className="text-white text-xs font-medium">Velocidad</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-accent text-3xl font-extrabold mb-1 tracking-tight">+45%</p>
                                        <p className="text-white text-xs font-medium">Leads</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-accent text-3xl font-extrabold mb-1 tracking-tight">+120%</p>
                                        <p className="text-white text-xs font-medium">Visitas</p>
                                    </div>
                                </div>
                            </div>
                        </motion.article>

                        {/* Card 2: Restaurante El Viajero (Ads aspect) */}
                        <motion.article variants={fadeUp} className="bg-[#1E293B] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col group min-h-[480px]">
                            <div className="absolute inset-0 z-0">
                                <Image src="/proyectos/viajero.webp" unoptimized alt="Caso de Éxito Restaurante El Viajero - Campañas de Ads" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
                            </div>
                            <div className="relative z-10 p-8 flex flex-col h-full justify-end text-white">
                                <div className="mb-2">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Restaurante Ads</p>
                                </div>
                                <div className="mb-6 border-l-2 border-accent pl-4">
                                    <p className="text-xs font-bold tracking-widest uppercase text-slate-300 mb-1">RESTAURANTE EL VIAJERO</p>
                                    <h4 className="text-2xl font-bold leading-tight">Campañas de<br/>anuncios</h4>
                                </div>
                                <div className="flex justify-between items-end border-t border-white/20 pt-6">
                                    <div className="text-center">
                                        <p className="text-accent text-3xl font-extrabold mb-1 tracking-tight">+88%</p>
                                        <p className="text-white text-xs font-medium">Consultas</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-accent text-3xl font-extrabold mb-1 tracking-tight">+60%</p>
                                        <p className="text-white text-xs font-medium">Reputación</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-accent text-3xl font-extrabold mb-1 tracking-tight">Top 3</p>
                                        <p className="text-white text-xs font-medium">Google Ads</p>
                                    </div>
                                </div>
                            </div>
                        </motion.article>

                        {/* Card 3: Level23 (Ecommerce) */}
                        <motion.article variants={fadeUp} className="bg-[#1E293B] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col group min-h-[480px]">
                            <div className="absolute inset-0 z-0">
                                <Image src="/proyectos/level23.webp" unoptimized alt="Caso de Éxito Level23 - Ecommerce" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
                            </div>
                            <div className="relative z-10 p-8 flex flex-col h-full justify-end text-white">
                                <div className="mb-2">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Level23 Ecommerce</p>
                                </div>
                                <div className="mb-6 border-l-2 border-accent pl-4">
                                    <p className="text-xs font-bold tracking-widest uppercase text-slate-300 mb-1">LEVEL23</p>
                                    <h4 className="text-2xl font-bold leading-tight">Creamos una e-commerce<br/>a la medida</h4>
                                </div>
                                <div className="flex justify-between items-end border-t border-white/20 pt-6">
                                    <div className="text-center">
                                        <p className="text-accent text-3xl font-extrabold mb-1 tracking-tight">+90%</p>
                                        <p className="text-white text-xs font-medium">Rendimiento</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-accent text-3xl font-extrabold mb-1 tracking-tight">+55%</p>
                                        <p className="text-white text-xs font-medium">Ventas</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-accent text-3xl font-extrabold mb-1 tracking-tight">+40%</p>
                                        <p className="text-white text-xs font-medium">Conversión</p>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    </div>

                    <motion.div variants={fadeUp} className="mt-16 flex justify-center">
                        <button 
                            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                            aria-label="Solicitar asesoría de Technoultra" 
                            className="flex items-center gap-3 bg-[#111827] hover:bg-accent text-white px-8 py-4 rounded-[2rem] font-bold text-sm tracking-wide transition-all duration-300 shadow-xl group cursor-pointer"
                        >
                            Solicitar asesoría
                            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* 3. TESTIMONIOS (Dark) */}
            <div className="bg-[#0B1120] text-white py-24 px-6 border-t border-white/5 relative">
                <motion.div 
                    className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {/* Título de Testimonios - Alineado a la izquierda sin blur text-rendering-optimizeLegibility */}
                    <motion.div variants={fadeUp} className="lg:w-1/3 flex flex-col justify-center" style={{ textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased' }}>
                        <p className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight mb-1">
                            LO QUE DICEN
                        </p>
                        <h2 className="text-accent text-2xl md:text-3xl font-extrabold uppercase tracking-wide">
                            NUESTROS CLIENTES
                        </h2>
                        <div className="w-20 h-1 bg-accent mt-4"></div>
                    </motion.div>

                    {/* Cards de Testimonios */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Testimonio 1 */}
                        <motion.div variants={fadeUp} className="bg-[#111827] p-8 rounded-2xl border border-white/10 relative shadow-2xl flex flex-col justify-between">
                            <div>
                                <FaQuoteLeft className="text-accent/40 w-8 h-8 mb-6" />
                                <p className="text-slate-200 text-lg leading-relaxed mb-8 font-light">
                                    "Technoultra entendió nuestra visión y la convirtió en una plataforma que realmente genera crecimiento."
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 shrink-0 rounded-full overflow-hidden bg-slate-800 border-2 border-accent">
                                    <Image src="/img_site/avatar-cesar.jpg" alt="Avatar Cesar Augusto" width={112} height={112} quality={100} unoptimized className="object-cover object-top h-full w-full" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Cesar Augusto Garcia</p>
                                    <p className="text-slate-400 text-xs">Director – Electriobras S.A.S.</p>
                                    <div className="flex gap-1 mt-1">
                                        {[...Array(5)].map((_, i) => <FaStar key={i} className="text-accent w-3 h-3" />)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Testimonio 2 */}
                        <motion.div variants={fadeUp} className="bg-[#111827] p-8 rounded-2xl border border-white/10 relative shadow-2xl flex flex-col justify-between">
                            <div>
                                <FaQuoteLeft className="text-accent/40 w-8 h-8 mb-6" />
                                <p className="text-slate-200 text-lg leading-relaxed mb-8 font-light">
                                    "Gracias a las estrategias en campañas de Google Ads, aumentamos drásticamente la visibilidad del restaurante y nuestras reservaciones se multiplicaron."
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 shrink-0 rounded-full overflow-hidden bg-slate-800 border-2 border-accent">
                                    <Image src="/img_site/avatar-yuli.jpg" alt="Avatar Yuli Tulande" width={112} height={112} quality={100} unoptimized className="object-cover object-top h-full w-full" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Yuli Tulande</p>
                                    <p className="text-slate-400 text-xs text-balance">Gerente del hostal y restaurante el viajero</p>
                                    <div className="flex gap-1 mt-1">
                                        {[...Array(5)].map((_, i) => <FaStar key={i} className="text-accent w-3 h-3" />)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
