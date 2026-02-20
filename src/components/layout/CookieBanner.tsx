"use client";

/**
 * CookieBanner — Banner de consentimiento de cookies
 *
 * Diseño compacto en barra inferior con panel expandible de personalización.
 * Ofrece tres acciones: Personalizar, Rechazar todo, Aceptar todo.
 * En modo "Personalizar" muestra categorías con toggles individuales.
 *
 * Cumple con la Ley 1581 de 2012 de Colombia y buenas prácticas GDPR.
 * Activa GA4 de forma condicional solo si el usuario acepta cookies analíticas.
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

// ── Tipos de preferencias por categoría ───────────────────────────────────
interface CookiePreferences {
    necessary: boolean;  // Siempre true, no desactivable
    functional: boolean;
    analytics: boolean;
    performance: boolean;
}

type ConsentStatus = "accepted_all" | "accepted_necessary" | "custom" | null;

/** Lee el valor de una cookie por su nombre. */
function getCookie(name: string): string | null {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : null;
}

/** Escribe una cookie propia con expiración definida. */
function setCookie(name: string, value: string, days: number) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

// ── Toggle switch estilizado ───────────────────────────────────────────────
function Toggle({
    enabled,
    onChange,
    disabled = false,
}: {
    enabled: boolean;
    onChange: (v: boolean) => void;
    disabled?: boolean;
}) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={enabled}
            disabled={disabled}
            onClick={() => !disabled && onChange(!enabled)}
            className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none ${disabled
                    ? "cursor-not-allowed opacity-60"
                    : "cursor-pointer"
                } ${enabled ? "bg-[#EA580C]" : "bg-gray-600"}`}
        >
            <span
                className={`inline-block h-4 w-4 translate-x-1 transform rounded-full bg-white shadow transition-transform duration-200 ${enabled ? "translate-x-6" : "translate-x-1"
                    }`}
            />
        </button>
    );
}

// ── Fila de categoría de cookie ────────────────────────────────────────────
function CookieCategory({
    title,
    description,
    alwaysActive = false,
    enabled,
    onChange,
}: {
    title: string;
    description: string;
    alwaysActive?: boolean;
    enabled: boolean;
    onChange: (v: boolean) => void;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            {/* Fila principal */}
            <div className="flex items-center justify-between py-4 px-1">
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 text-left text-sm font-semibold text-white hover:text-[#EA580C] transition-colors"
                >
                    <span className={`text-xs transition-transform duration-200 ${open ? "rotate-90" : ""}`}>›</span>
                    {title}
                </button>
                {alwaysActive ? (
                    <span className="text-xs font-semibold text-[#EA580C] shrink-0">Siempre activas</span>
                ) : (
                    <Toggle enabled={enabled} onChange={onChange} />
                )}
            </div>
            {/* Descripción expandible */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <p className="text-xs text-white/55 leading-relaxed pb-4 px-5">
                            {description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ── Componente principal ───────────────────────────────────────────────────
export default function CookieBanner() {
    const [consent, setConsent] = useState<ConsentStatus | "loading">("loading");
    const [showCustomize, setShowCustomize] = useState(false);
    const [gaEnabled, setGaEnabled] = useState(false);
    const [prefs, setPrefs] = useState<CookiePreferences>({
        necessary: true,
        functional: false,
        analytics: false,
        performance: false,
    });

    // Al montar el componente leemos la cookie guardada
    useEffect(() => {
        const saved = getCookie(CONSENT_COOKIE_NAME) as ConsentStatus | null;
        setConsent(saved);
        if (saved === "accepted_all") {
            setGaEnabled(true);
        }
    }, []);

    /** Acepta todas las cookies incluyendo analíticas */
    const handleAcceptAll = () => {
        setCookie(CONSENT_COOKIE_NAME, "accepted_all", CONSENT_DURATION_DAYS);
        setGaEnabled(true);
        setConsent("accepted_all");
        setShowCustomize(false);
    };

    /** Rechaza todas excepto necesarias */
    const handleRejectAll = () => {
        setCookie(CONSENT_COOKIE_NAME, "accepted_necessary", CONSENT_DURATION_DAYS);
        setGaEnabled(false);
        setConsent("accepted_necessary");
        setShowCustomize(false);
    };

    /** Guarda las preferencias personalizadas */
    const handleSavePreferences = () => {
        setCookie(CONSENT_COOKIE_NAME, "custom", CONSENT_DURATION_DAYS);
        setGaEnabled(prefs.analytics);
        setConsent("custom");
        setShowCustomize(false);
    };

    /** Actualiza una preferencia individual */
    const setPreference = (key: keyof CookiePreferences, value: boolean) => {
        setPrefs((prev) => ({ ...prev, [key]: value }));
    };

    // No renderizar nada mientras se lee la cookie (evita flash)
    if (consent === "loading") return null;

    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    return (
        <>
            {/* ── GA4: se inyecta SOLO si el usuario aceptó cookies analíticas ───────
       *  strategy="afterInteractive" → no bloquea el LCP/FCP de la página.
       * ─────────────────────────────────────────────────────────────────────── */}
            {gaEnabled && gaId && (
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

            {/* ── Banner + Panel — solo visible si el usuario no ha decidido ─────── */}
            <AnimatePresence>
                {consent === null && (
                    <motion.div
                        initial={{ y: 120, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 120, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        role="dialog"
                        aria-live="polite"
                        aria-label="Banner de consentimiento de cookies"
                        className="fixed bottom-0 left-0 right-0 z-[9999]"
                    >
                        {/* ── Panel de personalización (se muestra sobre la barra) ──────── */}
                        <AnimatePresence>
                            {showCustomize && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden bg-[#0F172A] border-t border-x border-white/10 max-w-7xl mx-auto rounded-t-2xl shadow-2xl"
                                >
                                    <div className="p-6 max-h-[60vh] overflow-y-auto">
                                        {/* Encabezado del panel */}
                                        <h3 className="text-white font-bold text-base mb-1">
                                            Personalizar las preferencias de consentimiento
                                        </h3>
                                        <p className="text-white/50 text-xs leading-relaxed mb-1">
                                            Usamos cookies para ayudarte a navegar de manera eficiente y realizar ciertas funciones.
                                            Encontrará información detallada sobre cada una de las cookies bajo cada categoría de
                                            consentimiento a continuación.
                                        </p>
                                        <p className="text-white/40 text-xs mb-4">
                                            Las cookies categorizadas como &ldquo;Necesarias&rdquo; se guardan en su navegador, ya que son esenciales
                                            para permitir las funcionalidades básicas del sitio web.{" "}
                                            <Link href="/politica-de-cookies" className="text-[#EA580C] hover:underline">
                                                Mostrar más
                                            </Link>
                                        </p>

                                        {/* Categorías */}
                                        <div className="divide-y divide-white/10">
                                            <CookieCategory
                                                title="Necesaria"
                                                description="Las cookies necesarias son cruciales para las funciones básicas del sitio web y el sitio web no funcionará de la forma prevista sin ellas. Estas cookies no almacenan ningún dato de identificación personal."
                                                alwaysActive
                                                enabled={true}
                                                onChange={() => { }}
                                            />
                                            <CookieCategory
                                                title="Funcional"
                                                description="Las cookies funcionales ayudan a realizar ciertas funcionalidades, como compartir el contenido del sitio web en plataformas de redes sociales, recopilar comentarios y otras características de terceros."
                                                enabled={prefs.functional}
                                                onChange={(v) => setPreference("functional", v)}
                                            />
                                            <CookieCategory
                                                title="Analítica"
                                                description="Las cookies analíticas se utilizan para comprender cómo interactúan los visitantes con el sitio web. Estas cookies ayudan a proporcionar información sobre métricas el número de visitantes, el porcentaje de rebote, la fuente de tráfico, etc."
                                                enabled={prefs.analytics}
                                                onChange={(v) => setPreference("analytics", v)}
                                            />
                                            <CookieCategory
                                                title="El rendimiento"
                                                description="Las cookies de rendimiento se utilizan para comprender y analizar los índices de rendimiento clave del sitio web, lo que ayuda a proporcionar una mejor experiencia de usuario para los visitantes."
                                                enabled={prefs.performance}
                                                onChange={(v) => setPreference("performance", v)}
                                            />
                                        </div>

                                        {/* Botón guardar preferencias */}
                                        <div className="flex justify-end mt-5 pb-1">
                                            <button
                                                onClick={handleSavePreferences}
                                                className="px-5 py-2 border border-white/20 text-white text-sm font-semibold rounded hover:bg-white/10 transition-colors"
                                            >
                                                Guardar mis preferencias
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* ── Barra principal compacta ─────────────────────────────────── */}
                        <div className="bg-[#0F172A] border-t border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.4)]">
                            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center gap-3">
                                {/* Texto */}
                                <div className="flex-1 min-w-0">
                                    <span className="text-white text-sm font-semibold mr-2">Valoramos tu privacidad</span>
                                    <span className="text-white/55 text-xs leading-relaxed">
                                        Usamos cookies para mejorar su experiencia de navegación, mostrarle anuncios o contenidos
                                        personalizados y analizar nuestro tráfico. Al hacer clic en &ldquo;Aceptar todo&rdquo; usted da su
                                        consentimiento a nuestro uso de las cookies.
                                    </span>
                                </div>

                                {/* Botones */}
                                <div className="flex items-center gap-2 shrink-0">
                                    {/* Personalizar */}
                                    <button
                                        onClick={() => setShowCustomize(!showCustomize)}
                                        className="flex items-center gap-1.5 px-4 py-2 border border-[#EA580C] text-[#EA580C] text-xs font-semibold rounded hover:bg-[#EA580C]/10 transition-colors"
                                    >
                                        Personalizar
                                        <span
                                            className={`text-[10px] transition-transform duration-200 ${showCustomize ? "rotate-180" : ""
                                                }`}
                                        >
                                            ▼
                                        </span>
                                    </button>
                                    {/* Rechazar todo */}
                                    <button
                                        onClick={handleRejectAll}
                                        className="px-4 py-2 bg-[#1E293B] border border-white/20 text-white text-xs font-semibold rounded hover:bg-[#1E293B]/80 transition-colors"
                                    >
                                        Rechazar todo
                                    </button>
                                    {/* Aceptar todo */}
                                    <button
                                        onClick={handleAcceptAll}
                                        className="px-4 py-2 bg-[#EA580C] text-white text-xs font-bold rounded hover:bg-[#c2410c] transition-colors"
                                    >
                                        Aceptar todo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Botón flotante para revisar consentimiento a posteriori ───────────
       *  Permite al usuario cambiar su decisión en cualquier momento.
       * ─────────────────────────────────────────────────────────────────────── */}
            {consent !== null && (
                <button
                    onClick={() => setConsent(null)}
                    title="Gestionar preferencias de cookies"
                    className="fixed bottom-4 left-4 z-[9998] text-[10px] bg-[#1E293B]/90 border border-white/20 text-white/60 rounded px-2 py-1 hover:text-[#EA580C] hover:border-[#EA580C]/40 transition-all duration-200 shadow-lg backdrop-blur-sm"
                    aria-label="Gestionar preferencias de cookies"
                >
                    🍪 Cookies
                </button>
            )}
        </>
    );
}
