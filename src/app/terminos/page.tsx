import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Términos de Servicio | Technoultra",
    description: "Términos y condiciones de uso de los servicios de Technoultra. Versión extendida de 16 puntos.",
};

export default function TerminosPage() {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen font-sans">
            <div className="container mx-auto px-6 max-w-4xl">
                <header className="mb-12 border-b border-slate-100 pb-8">
                    <span className="text-accent uppercase tracking-widest text-sm font-bold block mb-2">Información Legal</span>
                    <h1 className="text-3xl md:text-4xl font-bold text-primary font-display tracking-tight leading-tight mb-4 uppercase">
                        TÉRMINOS DE SERVICIO
                    </h1>
                    <p className="text-slate-500 text-sm italic">Última actualización: 20 de febrero de 2026</p>
                </header>

                <article className="prose prose-slate prose-lg max-w-none space-y-12 text-slate-700 leading-relaxed">

                    {/* 1. IDENTIFICACIÓN */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 border-l-4 border-accent pl-4 uppercase">1. IDENTIFICACIÓN DEL PRESTADOR</h2>
                        <p className="mb-6">El presente documento regula el acceso, navegación y contratación de servicios a través del sitio web <span className="font-semibold text-slate-900">technoultra.com</span>, operado bajo el nombre comercial <span className="font-bold text-slate-900 underline decoration-accent">Technoultra</span>, propiedad de:</p>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <ul className="space-y-1 list-none p-0 m-0">
                                <li className="font-bold text-slate-900">Wilder Caicedo</li>
                                <li className="text-slate-600">Persona Natural</li>
                                <li><span className="font-bold text-slate-900">NIT:</span> 1130640245-6</li>
                                <li><span className="font-bold text-slate-900">Domicilio:</span> República de Colombia</li>
                                <li><span className="font-bold text-slate-900">Correo electrónico:</span> studio@technoultra.com</li>
                            </ul>
                        </div>
                        <p className="mt-6 font-medium italic text-primary">El acceso al sitio web o la contratación de servicios implica la aceptación plena e incondicional de los presentes Términos de Servicio.</p>
                    </section>

                    {/* 2. OBJETO Y ALCANCE */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 border-l-4 border-accent pl-4 uppercase">2. OBJETO Y ALCANCE DE LOS SERVICIOS</h2>
                        <p>Technoultra presta servicios profesionales en estrategia digital, marketing, tecnología y desarrollo, incluyendo pero no limitándose a:</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mt-8">
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-900 mb-2">A. Arquitectura Digital</h3>
                                <ul className="list-disc pl-5 text-sm space-y-1 text-slate-500">
                                    <li>Desarrollo estratégico</li>
                                    <li>Web corporativa</li>
                                    <li>Ecommerce</li>
                                    <li>Landing pages</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-900 mb-2">B. Performance & Ads</h3>
                                <ul className="list-disc pl-5 text-sm space-y-1 text-slate-500">
                                    <li>Google Ads</li>
                                    <li>Meta Ads</li>
                                    <li>LinkedIn Ads</li>
                                    <li>Publicidad programática</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-900 mb-2">C. SEO Estratégico</h3>
                                <ul className="list-disc pl-5 text-sm space-y-1 text-slate-500">
                                    <li>Auditoría técnica</li>
                                    <li>SEO Local</li>
                                    <li>SEO para Ecommerce</li>
                                    <li>Linkbuilding</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-900 mb-2">D. Growth Systems</h3>
                                <ul className="list-disc pl-5 text-sm space-y-1 text-slate-500">
                                    <li>Funnels de venta</li>
                                    <li>CRM & Automation</li>
                                    <li>Email Marketing</li>
                                    <li>IA aplicada a procesos comerciales</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-900 mb-2">E. Brand Strategy</h3>
                                <ul className="list-disc pl-5 text-sm space-y-1 text-slate-500">
                                    <li>Naming e Identidad</li>
                                    <li>Rebranding</li>
                                    <li>Reputación Online</li>
                                    <li>Diseño UI/UX</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-900 mb-2">F. Content Marketing</h3>
                                <ul className="list-disc pl-5 text-sm space-y-1 text-slate-500">
                                    <li>Estrategia editorial</li>
                                    <li>Copywriting</li>
                                    <li>Calendarios de contenido</li>
                                    <li>Blog corporativo</li>
                                </ul>
                            </div>
                        </div>

                        <p className="mt-10 p-4 border border-slate-100 bg-slate-50 rounded-xl text-sm italic">
                            El alcance específico, entregables, cronograma y valores serán definidos mediante propuesta comercial, orden de servicio o contrato independiente debidamente aceptado por las partes.
                        </p>
                    </section>

                    {/* 3. NATURALEZA */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 border-l-4 border-accent pl-4 uppercase">3. NATURALEZA DE LA RELACIÓN</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Technoultra actúa como proveedor independiente de servicios profesionales.</li>
                            <li>No existe relación laboral, sociedad, mandato, agencia exclusiva ni representación legal entre las partes.</li>
                            <li>La información publicada en el sitio web tiene carácter informativo y no constituye oferta contractual vinculante hasta que exista aceptación expresa y acuerdo formal.</li>
                        </ul>
                    </section>

                    {/* 4. ALCANCE CONTRACTUAL */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 border-l-4 border-accent pl-4 uppercase">4. ALCANCE CONTRACTUAL Y MODIFICACIONES</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Cualquier modificación al alcance original deberá formalizarse por escrito.</li>
                            <li>Solicitudes adicionales podrán generar costos adicionales y ajustes en los tiempos de entrega.</li>
                        </ul>
                    </section>

                    {/* 5. LIMITACIÓN DE RESULTADOS */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 border-l-4 border-accent pl-4 uppercase">5. LIMITACIÓN DE RESULTADOS</h2>
                        <p>Los servicios ofrecidos tienen naturaleza estratégica, técnica y creativa.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            {[
                                "Incremento específico de ventas",
                                "Retorno de inversión determinado",
                                "Posicionamiento en primer lugar en buscadores",
                                "Resultados financieros concretos",
                                "Volumen específico de tráfico o conversiones"
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-3 items-center text-sm font-medium text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 shadow-sm">
                                    <span className="italic shrink-0">No garantiza:</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 italic text-sm">
                            Los resultados dependen de factores externos como mercado, competencia, presupuesto, algoritmos de plataformas, comportamiento del consumidor y condiciones económicas.
                        </p>
                    </section>

                    {/* 6. PLATAFORMAS TERCEROS */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 border-l-4 border-accent pl-4 uppercase">6. PLATAFORMAS Y SERVICIOS DE TERCEROS</h2>
                        <p className="mb-6">Muchos servicios implican el uso de plataformas externas (Google, Meta, LinkedIn, hostings, CRMs, pasarelas de pago, etc.).</p>
                        <p className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Technoultra no será responsable por:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0 m-0 text-sm italic">
                            <li>• Cambios en políticas de dichas plataformas</li>
                            <li>• Suspensiones o bloqueos de cuentas</li>
                            <li>• Fallas técnicas de terceros</li>
                            <li>• Actualizaciones algorítmicas</li>
                            <li>• Pérdida de datos atribuible a proveedores</li>
                        </ul>
                        <p className="mt-8 font-semibold text-primary underline underline-offset-4 decoration-accent">El cliente reconoce que estas plataformas operan bajo sus propios términos y condiciones.</p>
                    </section>

                    {/* 7. PROPIEDAD INTELECTUAL */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 border-l-4 border-accent pl-4 uppercase">7. PROPIEDAD INTELECTUAL</h2>
                        <p>Todo el contenido del sitio web, metodologías, procesos estratégicos, estructuras y sistemas desarrollados por Technoultra son propiedad exclusiva del titular.</p>
                        <div className="mt-6 space-y-4 bg-slate-900 text-white p-8 rounded-3xl text-sm leading-relaxed">
                            <p className="font-bold underline uppercase text-accent mb-4">En proyectos contratados:</p>
                            <ul className="list-disc pl-6 space-y-3 opacity-90">
                                <li>La transferencia de derechos patrimoniales se realizará únicamente en los términos establecidos en el contrato específico.</li>
                                <li>Hasta que el pago total sea efectuado, los derechos permanecerán en cabeza de Technoultra.</li>
                                <li>Propuestas, estrategias y documentos preliminares no podrán ser utilizados sin autorización expresa.</li>
                                <li>Technoultra podrá incluir los proyectos en su portafolio profesional, salvo que exista acuerdo de confidencialidad firmado.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 8. OBLIGACIONES CLIENTE */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 border-l-4 border-accent pl-4 uppercase">8. OBLIGACIONES DEL CLIENTE</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Proporcionar información veraz y completa.</li>
                            <li>Entregar materiales y accesos necesarios oportunamente.</li>
                            <li>Cumplir con los pagos en las fechas acordadas.</li>
                            <li>Garantizar que posee derechos sobre marcas, contenidos y materiales suministrados.</li>
                            <li>Cumplir normativas legales aplicables a su actividad comercial.</li>
                        </ul>
                        <p className="p-4 bg-amber-50 rounded-xl text-sm italic border-l-4 border-amber-400">
                            El cliente mantendrá indemne a Technoultra frente a cualquier reclamación derivada del uso de contenido proporcionado por él. Retrasos atribuibles al cliente no constituirán incumplimiento por parte de Technoultra.
                        </p>
                    </section>

                    {/* 9. PAGOS */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 border-l-4 border-accent pl-4 uppercase">9. PAGOS, MORA Y SUSPENSIÓN</h2>
                        <div className="space-y-4 text-sm font-medium">
                            <div className="border border-slate-100 p-4 rounded-xl flex gap-3 items-center">
                                <span className="text-slate-900 uppercase text-xs font-bold w-40 shrink-0">Anticipos:</span>
                                <span>No son reembolsables.</span>
                            </div>
                            <div className="border border-slate-100 p-4 rounded-xl flex gap-3 items-center">
                                <span className="text-slate-900 uppercase text-xs font-bold w-40 shrink-0">Devoluciones:</span>
                                <span>Los pagos por servicios ejecutados no serán objeto de devolución.</span>
                            </div>
                            <div className="border border-slate-100 p-4 rounded-xl flex gap-3 items-center">
                                <span className="text-slate-900 uppercase text-xs font-bold w-40 shrink-0">Mora (+5 días):</span>
                                <span>Podrá generar suspensión de servicios y cargos administrativos por reactivación.</span>
                            </div>
                        </div>
                    </section>

                    {/* 10. RESPONSABILIDAD FINANCIERA */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 border-l-4 border-accent pl-4 uppercase">10. LIMITACIÓN DE RESPONSABILIDAD FINANCIERA</h2>
                        <p className="mb-4">En caso de reclamación, la responsabilidad máxima de Technoultra se limitará al valor efectivamente pagado por el cliente por el servicio específico que origine la controversia.</p>
                        <p className="font-bold text-primary mb-4 underline decoration-accent text-sm">En ningún caso se responderá por:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0 m-0 text-sm italic font-semibold text-slate-500">
                            <li>• Lucro cesante</li>
                            <li>• Daños indirectos o consecuenciales</li>
                            <li>• Daño reputacional</li>
                            <li>• Pérdida de oportunidad comercial</li>
                            <li>• Multas impuestas por terceros</li>
                        </ul>
                    </section>

                    {/* 11 & 12 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <section>
                            <h2 className="text-lg font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">11. CONFIDENCIALIDAD</h2>
                            <p className="text-sm">La información estratégica proporcionada por el cliente será tratada de manera confidencial. Esta obligación subsistirá incluso después de finalizada la relación contractual.</p>
                        </section>
                        <section>
                            <h2 className="text-lg font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">12. FUERZA MAYOR</h2>
                            <p className="text-sm">Technoultra no será responsable por fallas derivadas de eventos fuera de su control: fallas eléctricas, ataques informáticos, problemas de conectividad, desastres naturales o actos gubernamentales.</p>
                        </section>
                    </div>

                    {/* 13 & 14 & 15 */}
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-lg font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">13. TERMINACIÓN</h2>
                            <p className="text-sm">Cualquiera de las partes podrá terminar la relación conforme a lo estipulado en el contrato particular. La terminación no exime del pago de obligaciones pendientes.</p>
                        </section>
                        <section>
                            <h2 className="text-lg font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4 text-accent">14. INDEMNIDAD</h2>
                            <p className="text-sm italic font-medium">El cliente se obliga a mantener indemne a Technoultra frente a reclamaciones, sanciones o procesos derivados del incumplimiento normativo o contenido suministrado por él.</p>
                        </section>
                        <section>
                            <h2 className="text-lg font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">15. PROTECCIÓN DE DATOS</h2>
                            <p className="text-sm">El tratamiento de datos personales se regirá por la <a href="/privacidad" className="text-accent underline hover:text-accent/80 transition-colors font-bold">Política de Privacidad</a> publicada en el sitio web, conforme a la Ley 1581 de 2012.</p>
                        </section>
                    </div>

                    {/* 16. JURISDICCIÓN */}
                    <footer className="bg-primary text-white p-10 rounded-3xl mt-20">
                        <h2 className="text-xl font-bold mb-4 uppercase">16. JURISDICCIÓN Y LEY APLICABLE</h2>
                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-1 bg-accent rounded-full shrink-0" />
                            <p className="text-sm opacity-90 leading-relaxed font-medium">
                                Estos Términos se rigen por la legislación de la República de Colombia. Cualquier controversia será sometida a los jueces competentes del territorio colombiano.
                            </p>
                        </div>
                    </footer>

                </article>
            </div>
        </div>
    );
}
