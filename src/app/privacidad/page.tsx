import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidad | Technoultra",
    description: "Política de privacidad y tratamiento de datos personales en cumplimiento con la Ley 1581 de 2012 (Colombia). Versión extendida.",
    alternates: {
        canonical: "/privacidad",
    }
};

export default function PrivacidadPage() {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <header className="mb-12 border-b border-slate-100 pb-8">
                    <span className="text-accent uppercase tracking-widest text-sm font-bold block mb-4 font-sans">Información Legal</span>
                    <h1 className="text-3xl md:text-4xl font-bold text-primary font-display tracking-tight leading-tight mb-4 uppercase">
                        POLÍTICA DE PRIVACIDAD Y TRATAMIENTO DE DATOS PERSONALES
                    </h1>
                    <div className="flex flex-col gap-1">
                        <span className="text-slate-900 font-bold text-lg">TECHNOULTRA</span>
                        <p className="text-slate-500 text-sm italic">Última actualización: 20 de febrero de 2026</p>
                    </div>
                </header>

                <article className="prose prose-slate prose-lg max-w-none space-y-12 text-slate-700 leading-relaxed font-sans">

                    {/* A. IDENTIFICACIÓN */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">A. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO</h2>
                        <p className="mb-6">
                            En cumplimiento de lo dispuesto en el artículo 15 de la Constitución Política de Colombia, la Ley 1581 de 2012 y el Decreto 1377 de 2013, se informa que el responsable del tratamiento de los datos personales es:
                        </p>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <ul className="space-y-2 list-none p-0 m-0">
                                <li><span className="font-bold text-slate-900 w-40 inline-block uppercase text-sm">Nombre:</span> Wilder Caicedo</li>
                                <li><span className="font-bold text-slate-900 w-40 inline-block uppercase text-sm">Nombre comercial:</span> Technoultra</li>
                                <li><span className="font-bold text-slate-900 w-40 inline-block uppercase text-sm">Tipo:</span> Persona Natural</li>
                                <li><span className="font-bold text-slate-900 w-40 inline-block uppercase text-sm">NIT:</span> 1130640245-6</li>
                                <li><span className="font-bold text-slate-900 w-40 inline-block uppercase text-sm">Domicilio:</span> Colombia</li>
                                <li><span className="font-bold text-slate-900 w-40 inline-block uppercase text-sm">Correo:</span> studio@technoultra.com</li>
                                <li><span className="font-bold text-slate-900 w-40 inline-block uppercase text-sm">Sitio web:</span> technoultra.com</li>
                            </ul>
                        </div>
                        <p className="mt-6 italic text-sm">
                            Technoultra actuará como Responsable del Tratamiento de los datos personales que recolecte directamente a través de su sitio web y canales digitales.
                        </p>
                    </section>

                    {/* B. DEFINICIONES */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">B. DEFINICIONES</h2>
                        <p className="mb-6 text-sm">Para efectos de la presente política, se aplican las definiciones establecidas en el artículo 3 de la Ley 1581 de 2012:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { term: "Autorización", desc: "Consentimiento previo, expreso e informado del Titular para llevar a cabo el tratamiento de datos personales." },
                                { term: "Dato Personal", desc: "Información vinculada o que pueda asociarse a una persona natural determinada o determinable." },
                                { term: "Dato Sensible", desc: "Información que afecta la intimidad del Titular o cuyo uso indebido puede generar discriminación." },
                                { term: "Responsable del Tratamiento", desc: "Persona que decide sobre la base de datos y/o el tratamiento." },
                                { term: "Encargado del Tratamiento", desc: "Persona que realiza el tratamiento por cuenta del Responsable." },
                                { term: "Titular", desc: "Persona natural cuyos datos son objeto de tratamiento." },
                                { term: "Tratamiento", desc: "Cualquier operación sobre datos personales como recolección, almacenamiento, uso o supresión." },
                                { term: "Transferencia", desc: "Envío de datos a un tercero que actúa como Responsable." },
                                { term: "Transmisión", desc: "Comunicación de datos a un Encargado para tratamiento por cuenta del Responsable." }
                            ].map((item, idx) => (
                                <div key={idx} className="border-b border-slate-100 pb-4">
                                    <h3 className="font-bold text-sm text-slate-900 mb-1">{item.term}:</h3>
                                    <p className="text-xs text-slate-500 leading-normal m-0">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* C. ALCANCE */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">C. ALCANCE</h2>
                        <p>La presente política aplica a todas las bases de datos que contengan información personal recolectada por Technoultra a través de:</p>
                        <ul className="list-disc pl-6 space-y-1 font-medium italic">
                            <li>Formularios web</li>
                            <li>Correo electrónico</li>
                            <li>Plataformas digitales</li>
                            <li>Canales de contacto profesionales</li>
                        </ul>
                    </section>

                    {/* D. DATOS QUE SE RECOLECTAN */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">D. DATOS QUE SE RECOLECTAN</h2>
                        <p>Technoultra podrá recolectar:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Nombre completo</li>
                            <li>Correo electrónico</li>
                            <li>Nombre de empresa</li>
                            <li>Teléfono (si es suministrado voluntariamente)</li>
                            <li>Información relacionada con proyectos o necesidades empresariales</li>
                        </ul>
                        <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-sm italic">
                            Technoultra no solicita datos sensibles ni información financiera a través de su sitio web.
                        </div>
                    </section>

                    {/* E. FINALIDADES */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">E. FINALIDADES DEL TRATAMIENTO</h2>
                        <p>Los datos serán utilizados para:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Responder solicitudes comerciales o de asesoría.</li>
                            <li>Elaborar propuestas, cotizaciones o diagnósticos estratégicos.</li>
                            <li>Gestionar relaciones contractuales.</li>
                            <li>Enviar información relacionada con servicios digitales, cuando exista autorización.</li>
                            <li>Cumplir obligaciones legales o contractuales.</li>
                            <li>Realizar análisis estadísticos internos y mejoras del servicio.</li>
                        </ul>
                        <p className="mt-6 font-bold text-primary text-center bg-slate-50 p-4 rounded-lg border border-slate-200">En ningún caso Technoultra venderá o comercializará bases de datos.</p>
                    </section>

                    {/* F. AUTORIZACIÓN */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">F. AUTORIZACIÓN</h2>
                        <p>La autorización se entiende otorgada cuando el Titular:</p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Marca la casilla de aceptación en el formulario web.</li>
                            <li>Envía voluntariamente su información por correo electrónico.</li>
                        </ol>
                        <p className="mt-4 font-semibold text-accent uppercase tracking-tighter text-sm">El silencio no constituye autorización.</p>
                    </section>

                    {/* G. TRANSFERENCIA INTERNACIONAL */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">G. TRANSFERENCIA Y TRANSMISIÓN INTERNACIONAL</h2>
                        <p>Technoultra puede utilizar herramientas tecnológicas de terceros para hosting, analítica web, gestión de correos electrónicos y automatización.</p>
                        <p>El sitio puede utilizar herramientas como <span className="font-semibold">Google Analytics 4</span> proporcionado por Google.</p>
                        <p className="font-medium text-slate-600 bg-slate-50 p-4 rounded-xl border-l-4 border-slate-200">En consecuencia, los datos pueden almacenarse en servidores ubicados fuera de Colombia bajo estándares internacionales de seguridad.</p>
                    </section>

                    {/* H. SEGURIDAD */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">H. SEGURIDAD DE LA INFORMACIÓN</h2>
                        <p>Technoultra implementa medidas técnicas y organizativas razonables para proteger los datos contra acceso no autorizado, alteración, pérdida o uso indebido.</p>
                        <p className="text-sm text-slate-500 italic mt-4">
                            No obstante, el Titular reconoce que ningún sistema es completamente invulnerable. Technoultra no será responsable por accesos indebidos derivados de causas no imputables directamente al Responsable.
                        </p>
                    </section>

                    {/* I. VERACIDAD */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">I. VERACIDAD DE LA INFORMACIÓN</h2>
                        <p>El Titular declara que la información suministrada es veraz, completa y actualizada. Technoultra no será responsable por información falsa, inexacta o incompleta proporcionada por el Titular.</p>
                    </section>

                    {/* J. DERECHOS */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">J. DERECHOS DE LOS TITULARES</h2>
                        <p>El Titular tiene derecho a:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-sm list-none p-0">
                            <li className="flex gap-2">✔ <span>Conocer, actualizar y rectificar sus datos.</span></li>
                            <li className="flex gap-2">✔ <span>Solicitar prueba de la autorización otorgada.</span></li>
                            <li className="flex gap-2">✔ <span>Ser informado sobre el uso dado a sus datos.</span></li>
                            <li className="flex gap-2">✔ <span>Revocar la autorización.</span></li>
                            <li className="flex gap-2">✔ <span>Solicitar la supresión de los datos cuando sea procedente.</span></li>
                            <li className="flex gap-2">✔ <span>Presentar quejas ante la SIC.</span></li>
                        </ul>
                    </section>

                    {/* K. PROCEDIMIENTO */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">K. PROCEDIMIENTO PARA CONSULTAS Y RECLAMOS</h2>
                        <p className="mb-6">Las solicitudes deberán enviarse a: <span className="font-bold text-slate-900 border-b-2 border-accent">studio@technoultra.com</span></p>
                        <div className="space-y-8">
                            <div className="bg-slate-50 p-5 rounded-2xl">
                                <h3 className="font-bold text-primary mb-2">1. Consultas</h3>
                                <p className="text-sm">Serán resueltas en máximo diez (10) días hábiles contados desde su recepción. Si no es posible responder en ese término, se informará al interesado antes del vencimiento, indicando la nueva fecha de respuesta, que no podrá superar cinco (5) días hábiles adicionales.</p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-2xl">
                                <h3 className="font-bold text-primary mb-2">2. Reclamos</h3>
                                <p className="text-sm mb-4">Deberán contener: Nombre e identificación, descripción clara de los hechos, dirección de contacto y documentos soporte.</p>
                                <ul className="list-disc pl-6 text-xs text-slate-500 space-y-2">
                                    <li>Si el reclamo está incompleto, se requerirá al Titular dentro de cinco (5) días hábiles para subsanar.</li>
                                    <li>Si no se recibe respuesta en dos (2) meses, se entenderá desistido.</li>
                                    <li>El reclamo será resuelto en un máximo de quince (15) días hábiles.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* L & M */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <section>
                            <h2 className="text-xl font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">L. DATOS SENSIBLES</h2>
                            <p className="text-sm">Technoultra no recolecta datos sensibles. En caso excepcional de requerirlos, se solicitará autorización expresa conforme al artículo 6 de la Ley 1581 de 2012.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">M. DATOS DE MENORES</h2>
                            <p className="text-sm">El sitio web y los servicios de Technoultra no están dirigidos a menores de edad. En caso de que se recolecten datos de menores, se requerirá autorización del representante legal.</p>
                        </section>
                    </div>

                    {/* N & O */}
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4 uppercase border-l-4 border-accent pl-4">N. VIGENCIA Y ACTUALIZACIONES</h2>
                        <p className="text-sm italic">La presente política rige desde su publicación y permanecerá vigente mientras exista tratamiento de datos personales. Technoultra podrá modificarla en cualquier momento, publicando la versión actualizada en su sitio web.</p>
                    </section>

                    <section className="bg-primary text-white p-8 rounded-3xl">
                        <h2 className="text-xl font-bold mb-4 uppercase">O. NORMATIVIDAD APLICABLE</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs list-none p-0 opacity-80">
                            <li>• Artículo 15 de la Constitución Política de Colombia</li>
                            <li>• Ley 1581 de 2012</li>
                            <li>• Ley 1266 de 2008</li>
                            <li>• Decreto 1377 de 2013</li>
                            <li>• Demás normas relativas</li>
                        </ul>
                    </section>
                </article>
            </div>
        </div>
    );
}
