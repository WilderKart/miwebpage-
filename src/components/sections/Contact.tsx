"use client";

/**
 * Componente Contact — Sección de Contacto
 *
 * Layout de dos columnas:
 *   - Columna izquierda: frase de impacto en grande (azul + naranja), sin fondo, texto directo.
 *   - Columna derecha: formulario de contacto con validación Zod.
 *
 * Flujo: usuario completa el form → onSubmit simula envío → muestra estado de éxito.
 * Sin llamadas a backend real en esta versión (simulación con setTimeout).
 * Impacta en: sección #contacto del layout principal.
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FaCheckCircle } from "react-icons/fa";

/* ─── Esquema de validación — definido en cliente, replicar en backend si se integra ─── */
const contactSchema = z.object({
    name: z.string().min(2, "El nombre es requerido"),
    email: z.string().email("Email inválido"),
    company: z.string().optional(),
    message: z.string().min(10, "Mensaje muy corto"),
    // Autorización obligatoria de política de privacidad y tratamiento de datos
    // Nota: Zod v4 usa `error` en lugar de `errorMap` en el segundo argumento de z.literal
    acceptPolicy: z.literal(true, {
        error: "Debes aceptar la política de privacidad para continuar",
    }),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactForm>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactForm) => {
        // Simulación de envío — reemplazar por llamada real al backend
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(data);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contacto" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 pointer-events-none" />

            {/* Encabezado centrado — permanece dentro del container */}
            <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-16">
                <div className="text-center">
                    <span className="text-accent uppercase tracking-widest text-sm font-bold block">
                        Hablemos de Negocios
                    </span>
                </div>
            </div>

            {/*
             * Layout de pantalla completa — sin container global.
             * Lado izquierdo: padding normal con la frase.
             * Lado derecho: sin padding — el form se extiende hasta el borde del viewport.
             */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6">

                {/* ── Columna izquierda — Frase de impacto (responsiva) ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
                    }}
                    className="flex flex-col justify-center px-6 lg:pl-40 xl:pl-64 lg:pr-8 py-12 lg:py-24"
                >
                    <h2 className="font-display font-black leading-[0.9] tracking-tighter text-left">
                        {[
                            { text: "¿VAS A", color: "text-primary" },
                            { text: "ESPERAR A", color: "text-primary" },
                            { text: "QUE TU", color: "text-primary" },
                            { text: "COMPETENCIA", color: "text-accent" },
                            { text: "LO HAGA", color: "text-primary" },
                            { text: "PRIMERO?", color: "text-accent" },
                        ].map(({ text, color }) => (
                            <motion.span
                                key={text}
                                variants={{
                                    hidden: { opacity: 0, filter: "blur(12px)", y: 8 },
                                    visible: {
                                        opacity: 1, filter: "blur(0px)", y: 0,
                                        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                                    },
                                }}
                                className={`block text-4xl sm:text-5xl md:text-7xl xl:text-8xl ${color}`}
                            >
                                {text}
                            </motion.span>
                        ))}
                    </h2>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, filter: "blur(8px)" },
                            visible: {
                                opacity: 1, filter: "blur(0px)",
                                transition: { duration: 0.6, ease: "easeOut", delay: 0.1 }
                            },
                        }}
                        className="mt-6 text-slate-500 text-base md:text-lg font-light max-w-sm leading-relaxed"
                    >
                        Cada día sin estrategia digital es una ventaja que le regalas a tu competencia.
                    </motion.p>
                </motion.div>

                {/* ── Columna derecha — Formulario (responsivo) ── */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className="flex flex-col justify-center px-4 lg:pl-4 lg:pr-32 xl:pr-[380px] py-12 lg:py-24"
                >
                    <div className="bg-white p-6 md:p-12 rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50">
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center py-20 text-center"
                                >
                                    <FaCheckCircle className="text-accent text-6xl mb-6" />
                                    <h3 className="text-3xl text-primary font-bold mb-2">¡Mensaje Recibido!</h3>
                                    <p className="text-slate-600">Nuestro equipo de estrategia te contactará en breve.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-sm uppercase tracking-wider text-secondary font-semibold ml-1">Nombre</label>
                                            <input
                                                {...register("name")}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-400"
                                                placeholder="Tu nombre completo"
                                            />
                                            {errors.name && <p className="text-red-400 text-xs ml-1">{errors.name.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm uppercase tracking-wider text-secondary font-semibold ml-1">Empresa</label>
                                            <input
                                                {...register("company")}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-400"
                                                placeholder="Nombre de tu organización"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm uppercase tracking-wider text-secondary font-semibold ml-1">Email Corporativo</label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-400"
                                            placeholder="ejemplo@empresa.com"
                                        />
                                        {errors.email && <p className="text-red-400 text-xs ml-1">{errors.email.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm uppercase tracking-wider text-secondary font-semibold ml-1">Desafío Principal</label>
                                        <textarea
                                            {...register("message")}
                                            rows={4}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder:text-slate-400"
                                            placeholder="Describe brevemente qué buscas lograr..."
                                        />
                                        {errors.message && <p className="text-red-400 text-xs ml-1">{errors.message.message}</p>}
                                    </div>

                                    {/* ── Autorización política de privacidad y tratamiento de datos ── */}
                                    <div className="flex items-start gap-3">
                                        <input
                                            {...register("acceptPolicy")}
                                            type="checkbox"
                                            id="acceptPolicy"
                                            className="mt-1 w-4 h-4 accent-accent cursor-pointer shrink-0"
                                        />
                                        <label htmlFor="acceptPolicy" className="text-sm text-slate-500 leading-snug cursor-pointer">
                                            Autorizo el tratamiento de mis datos personales conforme a la{" "}
                                            <a href="/privacidad" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
                                                Política de Privacidad
                                            </a>{" "}
                                            y acepto ser contactado por el equipo de TechnoUltra.
                                        </label>
                                    </div>
                                    {errors.acceptPolicy && (
                                        <p className="text-red-400 text-xs ml-1 -mt-2">{errors.acceptPolicy.message}</p>
                                    )}

                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="w-full bg-accent hover:bg-accent/90 text-white font-bold tracking-widest py-6 text-lg shadow-lg shadow-accent/20"
                                    >
                                        {isSubmitting ? "ENVIANDO..." : "Recibir asesoría personalizada"}
                                    </Button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
