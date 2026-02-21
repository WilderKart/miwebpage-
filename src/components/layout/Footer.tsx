/**
 * Footer — Pie de página de TechnoUltra
 *
 * Este componente es crítico para SEO local:
 * - Incluye NAP (Nombre, Dirección, Teléfono) consistente con el JSON-LD del layout.
 * - Los enlaces internos mejoran la arquitectura del sitio y distribuyen PageRank.
 * - Los íconos tienen aria-label para accesibilidad y rastreo semántico.
 *
 * Impacta en: SEO local, autoridad interna, indexación, Google Business Profile.
 */

import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8" aria-label="Pie de página TechnoUltra">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* ── Marca y descripción ── */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-bold tracking-tighter mb-4 uppercase">
                            TECHNO<span className="text-accent">ULTRA</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Agencia digital en Colombia con sede en Cali. Diseñamos estrategias de marketing, SEO y desarrollo web que generan clientes reales y crecimiento medible.
                        </p>

                        {/* ── Datos de contacto ── */}
                        <address className="not-italic space-y-3 text-sm text-gray-400">
                            <a
                                href="https://wa.me/573007296067"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contactar por WhatsApp"
                                className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"
                            >
                                <FaWhatsapp className="text-accent shrink-0" />
                                +57 300 729 6067
                            </a>
                            <a
                                href="mailto:studio@technoultra.com"
                                aria-label="Enviar email a Technoultra"
                                className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"
                            >
                                <FaEnvelope className="text-accent shrink-0" />
                                studio@technoultra.com
                            </a>
                            <span className="flex items-start gap-2">
                                <FaMapMarkerAlt className="text-accent shrink-0 mt-0.5" />
                                Cali, Colombia
                            </span>
                        </address>
                    </div>

                    {/* ── Servicios — enlaces internos optimizados ── */}
                    <nav aria-label="Servicios de TechnoUltra">
                        <h4 className="font-bold text-lg mb-4 text-gray-200">Servicios</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/#servicios" className="hover:text-accent transition-colors">
                                    Arquitectura Web Corporativa
                                </Link>
                            </li>
                            <li>
                                <Link href="/#servicios" className="hover:text-accent transition-colors">
                                    SEO Estratégico
                                </Link>
                            </li>
                            <li>
                                <Link href="/#servicios" className="hover:text-accent transition-colors">
                                    Marketing Digital y Ads
                                </Link>
                            </li>
                            <li>
                                <Link href="/#servicios" className="hover:text-accent transition-colors">
                                    Branding Estratégico
                                </Link>
                            </li>
                            <li>
                                <Link href="/#servicios" className="hover:text-accent transition-colors">
                                    Performance y Analítica
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* ── Compañía — navegación interna ── */}
                    <nav aria-label="Páginas de TechnoUltra">
                        <h4 className="font-bold text-lg mb-4 text-gray-200">Compañía</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/#metodologia" className="hover:text-accent transition-colors">
                                    Nuestra Metodología
                                </Link>
                            </li>
                            <li>
                                <Link href="/#manifiesto" className="hover:text-accent transition-colors">
                                    Cómo lo hacemos
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contacto" className="hover:text-accent transition-colors">
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacidad" className="hover:text-accent transition-colors">
                                    Política de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link href="/terminos" className="hover:text-accent transition-colors">
                                    Términos de Servicio
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* ── Redes sociales ── */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-gray-200">Síguenos</h4>
                        <div className="flex gap-4 mb-6">
                            <a
                                href="https://www.linkedin.com/company/technoultra"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TechnoUltra en LinkedIn"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://www.instagram.com/technoultra"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TechnoUltra en Instagram"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.facebook.com/technoultra"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TechnoUltra en Facebook"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                            >
                                <FaFacebookF />
                            </a>
                        </div>

                        {/* CTA secundario en footer — Link en lugar de <a> para cumplir regla ESLint Next.js */}
                        <Link
                            href="tel:+573007296067"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-accent border border-accent/30 rounded-xl px-4 py-2 hover:bg-accent hover:text-white transition-all cursor-pointer"
                        >
                            <FaPhone className="text-xs" />
                            Agendar diagnóstico gratis
                        </Link>
                    </div>
                </div>

                {/* ── Barra inferior ── */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Technoultra — Agencia Digital Colombia. Todos los derechos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacidad" className="hover:text-white transition-colors">
                            Política de Privacidad
                        </Link>
                        <Link href="/terminos" className="hover:text-white transition-colors">
                            Términos de Servicio
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
