"use client";

/**
 * CookieBanner — Banner de consentimiento de cookies
 *
 * Cumple con la Ley 1581 de 2012 de Colombia y buenas prácticas GDPR.
 * Ofrece dos niveles de consentimiento:
 *   1. Aceptar todas (necesarias + analíticas/marketing)
 *   2. Aceptar solo necesarias
 *
 * Guarda la elección en una cookie propia durante 365 días.
 * Activa GA4 de forma condicional solo si el usuario acepta todas.
 *
 * Impacta en: layout global, carga de scripts de terceros (GA4).
 * Relación: layout.tsx → CookieBanner (cliente), NEXT_PUBLIC_GA_ID env var.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import Link from "next/link";

// ── Constantes de la cookie de consentimiento ──────────────────────────────
const CONSENT_COOKIE_NAME = "technoultra_cookie_consent";
const CONSENT_DURATION_DAYS = 365;

type ConsentStatus = "accepted_all" | "accepted_necessary" | null;

/**
 * Lee el valor de una cookie por su nombre.
 * Retorna null si no existe (aún no decidió o expiró).
 */
function getCookie(name: string): string | null {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : null;
}

/**
 * Escribe una cookie propia con expiración definida.
 * SameSite=Lax + Secure para seguridad básica.
 */
function setCookie(name: string, value: string, days: number) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

export default function CookieBanner() {
    // null = no decidido todavía / string = decisión previa guardada
    const [consent, setConsent] = useState<ConsentStatus | "loading">("loading");
    const [showDetails, setShowDetails] = useState(false);

    // Al montar el componente leemos la cookie guardada
    useEffect(() => {
        const saved = getCookie(CONSENT_COOKIE_NAME) as ConsentStatus | null;
        setConsent(saved);
    }, []);

    /**
     * Maneja la aceptación de todas las cookies (necesarias + analíticas).
     * Activa GA4 mediante el estado que condiciona el <Script>.
     */
    const handleAcceptAll = () => {
        setCookie(CONSENT_COOKIE_NAME, "accepted_all", CONSENT_DURATION_DAYS);
        setConsent("accepted_all");
    };

    /**
     * Maneja la aceptación solo de cookies necesarias.
     * GA4 no se carga — sin tracking analítico.
     */
    const handleAcceptNecessary = () => {
        setCookie(CONSENT_COOKIE_NAME, "accepted_necessary", CONSENT_DURATION_DAYS);
        setConsent("accepted_necessary");
    };

    // Mientras leemos la cookie no mostramos nada (evita flash)
    if (consent === "loading") return null;

    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    return (
        <>
            {/* ── GA4: se inyecta SOLO si el usuario aceptó todas las cookies ─────
             *  strategy="afterInteractive" → no bloquea el LCP/FCP de la página.
             *  Nota de seguridad: Measurement ID proviene de variable de entorno.
             * ─────────────────────────────────────────────────────────────────── */}
            {consent === "accepted_all" && gaId && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                        strategy="afterInteractive"
                    />
                    <Script id="ga4-cookie-consent" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${gaId}', {
                                page_path: window.location.pathname,
                                anonymize_ip: true,
                                cookie_flags: 'SameSite=None;Secure'
                            });
                        `}
                    </Script>
                </>
            )}

            {/* ── Banner principal — solo visible si el usuario no ha decidido ── */}
            <AnimatePresence>
                {consent === null && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        role="dialog"
                        aria-live="polite"
                        aria-label="Banner de consentimiento de cookies"
                        className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
                    >
                        <div className="max-w-screen-xl mx-auto bg-[#1a2332] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 backdrop-blur-md overflow-hidden">
                            <div className="p-6 md:p-8">
                                {/* ── Encabezado ── */}
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        {/* Ícono cookie */}
                                        <div className="w-10 h-10 rounded-xl bg-[#ABFA54]/10 flex items-center justify-center shrink-0 text-xl">
                                            🍪
                                        </div>
                                        <div>
                                            <h2 className="text-white font-bold text-base md:text-lg leading-tight">
                                                Tu privacidad importa
                                            </h2>
                                            <p className="text-white/50 text-xs mt-0.5">
                                                Colombia — Ley 1581 de 2012
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Texto legal claro y conciso ── */}
                                <p className="text-white/70 text-sm leading-relaxed mb-4">
                                    Usamos <strong className="text-white">cookies necesarias</strong> para que el sitio funcione correctamente.
                                    Con tu permiso, también usamos cookies <strong className="text-white">analíticas</strong> (Google Analytics)
                                    para entender cómo navegas y mejorar tu experiencia. Nunca se comparten datos personales sin tu consentimiento.
                                </p>

                                {/* ── Detalles expandibles ── */}
                                <button
                                    onClick={() => setShowDetails(!showDetails)}
                                    className="text-[#ABFA54] text-xs font-semibold hover:text-[#ABFA54]/80 transition-colors mb-4 flex items-center gap-1"
                                >
                                    {showDetails ? "▲ Ocultar detalles" : "▼ Ver tipos de cookies"}
                                </button>

                                <AnimatePresence>
                                    {showDetails && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden mb-4"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {/* Cookies necesarias */}
                                                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-white text-sm font-semibold">Necesarias</span>
                                                        <span className="text-xs bg-[#ABFA54]/20 text-[#ABFA54] px-2 py-0.5 rounded-full font-medium">Siempre activas</span>
                                                    </div>
                                                    <p className="text-white/50 text-xs leading-relaxed">
                                                        Esenciales para la navegación: seguridad, sesión y funciones básicas del sitio. No se pueden desactivar.
                                                    </p>
                                                </div>
                                                {/* Cookies analíticas */}
                                                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-white text-sm font-semibold">Analíticas</span>
                                                        <span className="text-xs bg-orange-400/20 text-orange-400 px-2 py-0.5 rounded-full font-medium">Con tu permiso</span>
                                                    </div>
                                                    <p className="text-white/50 text-xs leading-relaxed">
                                                        Google Analytics 4: análisis de visitas de forma anónima. Solo se activan si aceptas todas las cookies.
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* ── Botones de acción y enlace legal ── */}
                                <div className="flex flex-col sm:flex-row items-center gap-3">
                                    {/* CTA principal: Aceptar todas */}
                                    <button
                                        onClick={handleAcceptAll}
                                        className="w-full sm:w-auto px-6 py-3 bg-[#ABFA54] hover:bg-[#9de84a] text-[#0F172A] font-bold text-sm rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#ABFA54]/20 hover:-translate-y-0.5"
                                    >
                                        Aceptar todas
                                    </button>
                                    {/* Botón secundario: Solo necesarias */}
                                    <button
                                        onClick={handleAcceptNecessary}
                                        className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all duration-200"
                                    >
                                        Solo las necesarias
                                    </button>
                                    {/* Enlace a política */}
                                    <Link
                                        href="/politica-de-cookies"
                                        className="text-white/40 hover:text-white/70 text-xs transition-colors sm:ml-auto"
                                    >
                                        Política de cookies →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Botón flotante para revisar consentimiento (siempre visible) ──
             *  Permite al usuario cambiar su decisión en cualquier momento.
             * ─────────────────────────────────────────────────────────────────── */}
            {consent !== null && (
                <button
                    onClick={() => setConsent(null)}
                    title="Gestionar preferencias de cookies"
                    className="fixed bottom-24 left-4 z-[9998] w-10 h-10 bg-[#1a2332]/90 border border-white/20 rounded-full flex items-center justify-center text-base hover:bg-[#1a2332] hover:border-[#ABFA54]/50 transition-all duration-200 shadow-lg backdrop-blur-sm"
                    aria-label="Gestionar preferencias de cookies"
                >
                    🍪
                </button>
            )}
        </>
    );
}
