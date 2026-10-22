import { pageMeta } from "@/lib/meta";
import { site } from "@/data/site";
import PageHero from "@/components/PageHero";

export const metadata = pageMeta({
  title: "Términos de servicio",
  description: "Términos y condiciones de los servicios de TechnoUltra: desarrollo web, marketing digital y servicio técnico en Cali.",
  path: "/terminos",
});

export default function Terminos() {
  return (
    <>
      <PageHero word="Términos" title="Términos y condiciones de servicio" crumbs={[{ label: "Términos" }]} />
      <section className="section light inner-pad" style={{ paddingTop: 100 }}>
        <div className="wrap">
          <div className="post-layout">
            <div className="legal">
              <p>Última actualización: octubre de 2026. Al contratar o usar los servicios de {site.name} aceptas estos términos.</p>
              <h2>Servicios</h2>
              <p>Ofrecemos diseño UI/UX, identidad de marca, desarrollo web, estrategia digital y servicio técnico de equipos. El alcance, los tiempos y el valor de cada proyecto se definen en una propuesta o cotización por escrito.</p>
              <h2>Pagos y entregables</h2>
              <p>Las condiciones de pago se acuerdan en cada cotización. Los entregables se consideran aceptados cuando el cliente los aprueba o transcurre el plazo de revisión acordado.</p>
              <h2>Propiedad intelectual</h2>
              <p>Una vez cancelado el valor acordado, el cliente recibe los derechos de uso de los entregables finales. Conservamos el derecho de mostrar el proyecto en nuestro portafolio, salvo pacto en contrario.</p>
              <h2>Servicio técnico y garantía</h2>
              <p>Cada reparación incluye diagnóstico y garantía sobre el trabajo y los repuestos instalados, según lo indicado en la orden de servicio. La garantía no cubre daños por mal uso, líquidos o manipulación por terceros.</p>
              <h2>Responsabilidad</h2>
              <p>Los resultados de marketing y posicionamiento dependen del mercado, la competencia y factores externos, por lo que no se garantizan posiciones ni cifras específicas.</p>
              <h2>Contacto</h2>
              <p>{site.email} · {site.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
