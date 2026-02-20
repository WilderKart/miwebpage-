"use client";

/**
 * WhatsAppBtn — Botón flotante de WhatsApp
 *
 * Cada 60 segundos:
 *   - Vibra el dispositivo 50ms (feedback táctil en móvil)
 *   - El botón ejecuta una animación visual de "shake" sincronizada con la vibración
 *
 * Impacta en: layout global (fixed bottom-right). Sin llamadas a backend.
 */

import { motion, useAnimation } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

// Variante de animación shake — simula el movimiento de un dispositivo vibrando
const shakeVariants = {
    idle: { x: 0, rotate: 0 },
    shake: {
        x: [0, -6, 6, -5, 5, -3, 3, -1, 1, 0],
        rotate: [0, -4, 4, -3, 3, -2, 2, 0],
        // ease como cubic-bezier explícito para satisfacer el tipo Easing de Framer Motion
        transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
    },
};

export default function WhatsAppBtn() {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        /**
         * Cada 60 segundos:
         * 1. Vibra el hardware del dispositivo (50ms, solo en móvil con soporte)
         * 2. Dispara la animación visual de shake en el botón
         */
        const triggerShake = async () => {
            // Vibración táctil del dispositivo
            if (navigator.vibrate) navigator.vibrate(50);

            // Animación visual sincronizada
            await controls.start("shake");
            controls.start("idle");
        };

        const interval = setInterval(triggerShake, 60000);
        return () => clearInterval(interval);
    }, [controls]);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
            {/* Tooltip — solo visible en desktop al hacer hover */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
                className="bg-white/90 backdrop-blur text-primary px-4 py-2 rounded-xl shadow-lg text-sm font-bold pointer-events-none hidden md:block"
            >
                ¡Escríbenos ahora!
            </motion.div>

            {/* Botón con animación de shake */}
            <motion.a
                href="https://wa.me/573007296067"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] relative flex items-center justify-center group cursor-pointer"
                variants={shakeVariants}
                initial="idle"
                animate={controls}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75 duration-[3s]" />

                <FaWhatsapp size={32} />
            </motion.a>
        </div>
    );
}
