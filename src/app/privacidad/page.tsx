/**
 * Página de Política de Privacidad — /privacidad
 *
 * Requerida legalmente en Colombia por la Ley 1581 de 2012 y el Decreto 1377 de 2013
 * sobre protección de datos personales.
 *
 * También es importante para SEO: el formulario de contacto enlaza a esta página,
 * y Google valora la transparencia en el manejo de datos.
 */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Política de Privacidad — TechnoUltra",
    description:
        "Conoce cómo TechnoUltra protege y trata tus datos personales conforme a la Ley 1581 de 2012 de Colombia.",
    robots: { index: true, follow: true },
    alternates: { canonical: "https://technoultra.com/privacidad" },
};

export default function PrivacidadPage() {
    const fechaActualizacion = "20 de febrero de 2026";

    return (
        <main id="main-content" className="min-h-screen bg-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* ── Encabezado ── */}
                <header className="mb-12">
                    <span className="text-accent font-semibold uppercase tracking-widest text-sm">
                        Información Legal
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-primary mt-3 mb-4 font-display">
                        Política de Privacidad y Tratamiento de Datos
                    </h1>
                    <p className="text-slate-500">
                        Última actualización: <time dateTime="2026-02-20">{fechaActualizacion}</time>
                    </p>
                </header>

                {/* ── Contenido ── */}
                <article className="prose prose-slate max-w-none space-y-10">

                    <section aria-labelledby="responsable">
                        <h2 id="responsable" className="text-2xl font-bold text-primary mb-3">
                            1. Responsable del Tratamiento
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            <strong>TechnoUltra</strong> es el responsable del tratamiento de los datos personales
                            recopilados a través del sitio web <a href="https://technoultra.com" className="text-accent hover:underline">technoultra.com</a> y de cualquier
                            formulario de contacto disponible en la plataforma.
                        </p>
                        <ul className="text-slate-600 space-y-1 mt-3">
                            <li><strong>Razón social:</strong> TechnoUltra</li>
                            <li><strong>Correo electrónico:</strong> hola@technoultra.com</li>
                            <li><strong>País:</strong> Colombia</li>
                        </ul>
                    </section>

                    <section aria-labelledby="datos-recopilados">
                        <h2 id="datos-recopilados" className="text-2xl font-bold text-primary mb-3">
                            2. Datos Personales que Recopilamos
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Al diligenciar nuestro formulario de contacto, recopilamos la siguiente información:
                        </p>
                        <ul className="text-slate-600 space-y-1 list-disc list-inside mt-3">
                            <li>Nombre completo</li>
                            <li>Correo electrónico corporativo</li>
                            <li>Nombre de empresa</li>
                            <li>Descripción del desafío o proyecto</li>
                        </ul>
                    </section>

                    <section aria-labelledby="finalidad">
                        <h2 id="finalidad" className="text-2xl font-bold text-primary mb-3">
                            3. Finalidad del Tratamiento
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Los datos recopilados se utilizan exclusivamente para:
                        </p>
                        <ul className="text-slate-600 space-y-1 list-disc list-inside mt-3">
                            <li>Responder a tu solicitud de contacto o asesoría comercial.</li>
                            <li>Enviarte información relevante sobre nuestros servicios digitales (únicamente si lo autorizaste).</li>
                            <li>Mejorar nuestra propuesta de valor y entender las necesidades de nuestros clientes potenciales.</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-3">
                            <strong>No vendemos, alquilamos ni compartimos</strong> tus datos personales con terceros sin tu consentimiento expreso, salvo obligación legal.
                        </p>
                    </section>

                    <section aria-labelledby="base-legal">
                        <h2 id="base-legal" className="text-2xl font-bold text-primary mb-3">
                            4. Base Legal — Ley 1581 de 2012 (Colombia)
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            El tratamiento de tus datos se realiza con fundamento en el <strong>consentimiento informado</strong> que otorgas
                            al marcar la casilla de aceptación en nuestro formulario de contacto, conforme a lo dispuesto en la
                            Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013.
                        </p>
                    </section>

                    <section aria-labelledby="derechos">
                        <h2 id="derechos" className="text-2xl font-bold text-primary mb-3">
                            5. Tus Derechos
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Como titular de los datos, tienes derecho a:
                        </p>
                        <ul className="text-slate-600 space-y-1 list-disc list-inside mt-3">
                            <li><strong>Conocer</strong> los datos que tenemos sobre ti.</li>
                            <li><strong>Actualizar</strong> o corregir información inexacta.</li>
                            <li><strong>Suprimir</strong> tus datos de nuestros registros.</li>
                            <li><strong>Revocar</strong> el consentimiento en cualquier momento.</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-3">
                            Para ejercer estos derechos, escríbenos a: <a href="mailto:hola@technoultra.com" className="text-accent hover:underline">hola@technoultra.com</a>
                        </p>
                    </section>

                    <section aria-labelledby="seguridad">
                        <h2 id="seguridad" className="text-2xl font-bold text-primary mb-3">
                            6. Seguridad de los Datos
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Implementamos medidas técnicas y organizativas razonables para proteger tus datos contra
                            accesos no autorizados, pérdida accidental o alteración. Nuestro sitio funciona bajo
                            protocolo HTTPS con certificado SSL activo.
                        </p>
                    </section>

                    <section aria-labelledby="cookies">
                        <h2 id="cookies" className="text-2xl font-bold text-primary mb-3">
                            7. Cookies y Analítica
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Utilizamos Google Analytics 4 para medir el comportamiento de los usuarios de forma anónima.
                            Esta herramienta puede recopilar información sobre tus visitas (páginas vistas, tiempo en el sitio,
                            dispositivo) sin identificarte personalmente. Puedes desactivar el rastreo desde tu navegador o
                            usando extensiones como <strong>Google Analytics Opt-out</strong>.
                        </p>
                    </section>

                    <section aria-labelledby="cambios">
                        <h2 id="cambios" className="text-2xl font-bold text-primary mb-3">
                            8. Cambios a esta Política
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Nos reservamos el derecho de actualizar esta política en cualquier momento.
                            Cualquier cambio material será notificado a través de nuestro sitio web.
                            Te recomendamos revisarla periódicamente.
                        </p>
                    </section>
                </article>

                {/* ── Volver al inicio ── */}
                <div className="mt-16 pt-8 border-t border-slate-200">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:underline underline-offset-4 transition-colors"
                    >
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </main>
    );
}
