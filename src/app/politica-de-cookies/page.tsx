import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Política de Cookies | Technoultra",
    description: "Conoce qué cookies usamos en Technoultra, para qué sirven y cómo puedes gestionarlas. Cumplimiento Ley 1581 de 2012.",
    robots: { index: true, follow: true },
};

/**
 * Página de Política de Cookies — Technoultra
 *
 * Cumple con la Ley 1581 de 2012 de Colombia.
 * Informa al usuario sobre los tipos de cookies utilizados,
 * su propósito y cómo puede gestionar su consentimiento.
 *
 * Impacta en: SEO, cumplimiento legal, enlace desde CookieBanner.
 */
export default function PoliticaDeCookiesPage() {
    return (
        <main className="min-h-screen bg-white py-24">
            <div className="container mx-auto px-6 max-w-3xl">
                {/* Encabezado */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-8 group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        Volver al inicio
                    </Link>
                    <span className="block text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">
                        Última actualización: febrero 2026
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                        Política de Cookies
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        En Technoultra usamos cookies para garantizar el correcto funcionamiento de nuestro sitio
                        y mejorar tu experiencia. A continuación te explicamos qué son, cuáles usamos y cómo puedes gestionarlas.
                    </p>
                </div>

                {/* Sección 1 */}
                <Section title="1. ¿Qué son las cookies?">
                    <p>
                        Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (PC, móvil o tablet)
                        cuando los visitas. Permiten recordar tus preferencias, analizar el uso del sitio y personalizar el contenido.
                    </p>
                </Section>

                {/* Sección 2 */}
                <Section title="2. Tipos de cookies que usamos">
                    <div className="space-y-6">
                        <CookieType
                            name="Cookies necesarias"
                            badge="Siempre activas"
                            badgeColor="text-green-700 bg-green-100"
                            description="Son indispensables para que el sitio funcione correctamente. Incluyen cookies de seguridad, sesión y funcionalidades básicas. No pueden desactivarse."
                            examples={[
                                { name: "technoultra_cookie_consent", purpose: "Guarda tu elección de cookies para no preguntarte de nuevo.", duration: "365 días" },
                            ]}
                        />
                        <CookieType
                            name="Cookies analíticas"
                            badge="Solo con tu permiso"
                            badgeColor="text-orange-700 bg-orange-100"
                            description="Nos ayudan a entender cómo los usuarios navegan por el sitio para mejorar su estructura y contenido. Toda la información es anónima."
                            examples={[
                                { name: "_ga, _ga_*", purpose: "Google Analytics 4 — Mide visitas, páginas vistas y comportamiento de forma anónima.", duration: "2 años" },
                            ]}
                        />
                    </div>
                </Section>

                {/* Sección 3 */}
                <Section title="3. ¿Cómo gestionar tu consentimiento?">
                    <p className="mb-4">
                        Puedes cambiar tus preferencias de cookies en cualquier momento haciendo clic en el ícono 🍪 que aparece
                        en la esquina inferior izquierda del sitio. También puedes gestionar las cookies directamente desde la
                        configuración de tu navegador:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-slate-600">
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Safari</a></li>
                        <li><a href="https://support.microsoft.com/es-es/topic/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Microsoft Edge</a></li>
                    </ul>
                </Section>

                {/* Sección 4 */}
                <Section title="4. Base legal">
                    <p>
                        El uso de cookies en este sitio se rige por la <strong>Ley 1581 de 2012</strong> de Colombia (Protección de Datos Personales)
                        y el <strong>Decreto 1377 de 2013</strong>. Solo activamos cookies no esenciales con tu consentimiento explícito,
                        el cual puedes retirar en cualquier momento.
                    </p>
                </Section>

                {/* Sección 5 */}
                <Section title="5. Contacto">
                    <p>
                        Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos en:{" "}
                        <a href="mailto:studio@technoultra.com" className="text-orange-500 hover:underline">
                            studio@technoultra.com
                        </a>
                    </p>
                    <p className="mt-3">
                        Consulta también nuestra{" "}
                        <Link href="/privacidad" className="text-orange-500 hover:underline">
                            Política de Privacidad
                        </Link>
                        .
                    </p>
                </Section>
            </div>
        </main>
    );
}

/* ─── Sub-componentes de UI ───────────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-10 pb-10 border-b border-slate-100 last:border-none">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{title}</h2>
            <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
        </section>
    );
}

interface CookieExample {
    name: string;
    purpose: string;
    duration: string;
}

function CookieType({ name, badge, badgeColor, description, examples }: {
    name: string;
    badge: string;
    badgeColor: string;
    description: string;
    examples: CookieExample[];
}) {
    return (
        <div className="border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
                <h3 className="font-bold text-slate-900 text-base">{name}</h3>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeColor}`}>{badge}</span>
            </div>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{description}</p>
            <div className="overflow-x-auto">
                <table className="w-full text-xs text-slate-600">
                    <thead>
                        <tr className="border-b border-slate-100">
                            <th className="text-left py-2 font-semibold text-slate-800 pr-4">Cookie</th>
                            <th className="text-left py-2 font-semibold text-slate-800 pr-4">Propósito</th>
                            <th className="text-left py-2 font-semibold text-slate-800">Duración</th>
                        </tr>
                    </thead>
                    <tbody>
                        {examples.map((ex) => (
                            <tr key={ex.name} className="border-b border-slate-50">
                                <td className="py-2 pr-4 font-mono text-slate-700">{ex.name}</td>
                                <td className="py-2 pr-4">{ex.purpose}</td>
                                <td className="py-2">{ex.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
