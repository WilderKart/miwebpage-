import { pageMeta } from "@/lib/meta";
import { site } from "@/data/site";
import PageHero from "@/components/PageHero";

export const metadata = pageMeta({
  title: "Política de privacidad y tratamiento de datos",
  description:
    "Política de privacidad y tratamiento de datos personales de TechnoUltra conforme a la Ley 1581 de 2012 de Colombia.",
  path: "/privacidad",
});

export default function Privacidad() {
  return (
    <>
      <PageHero word="Privacidad" title="Política de privacidad y tratamiento de datos personales" crumbs={[{ label: "Privacidad" }]} />
      <section className="section light inner-pad" style={{ paddingTop: 100 }}>
        <div className="wrap">
          <div className="post-layout">
            <div className="legal">
              <p>
                Última actualización: octubre de 2026. {site.name} (en adelante, “nosotros”), con sede en {site.city}, {site.country}, es responsable del tratamiento de los datos personales que recibe a través de este sitio, conforme a la Ley 1581 de 2012 y sus decretos reglamentarios.
              </p>
              <h2>Datos que recopilamos</h2>
              <p>Nombre, empresa, correo electrónico, teléfono o WhatsApp y el mensaje que nos envías a través de formularios o canales de contacto.</p>
              <h2>Finalidades</h2>
              <ul>
                <li>Responder tus consultas y enviarte cotizaciones.</li>
                <li>Prestar los servicios contratados (desarrollo, marketing digital y servicio técnico).</li>
                <li>Enviar información comercial relacionada con nuestros servicios, si lo autorizas.</li>
              </ul>
              <h2>Tus derechos</h2>
              <p>Puedes conocer, actualizar, rectificar y suprimir tus datos, y revocar la autorización otorgada, escribiéndonos a {site.email}.</p>
              <h2>Seguridad y terceros</h2>
              <p>Aplicamos medidas razonables para proteger tu información. No vendemos tus datos. Podemos usar proveedores de alojamiento y analítica que traten datos por nuestra cuenta.</p>
              <h2>Contacto</h2>
              <p>
                Para consultas sobre esta política: {site.email} · {site.phone}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
