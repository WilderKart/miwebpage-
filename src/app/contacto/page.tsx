import { pageMeta } from "@/lib/meta";
import { site } from "@/data/site";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { FaqSection } from "@/components/Sections";

export const metadata = pageMeta({
  title: "Contacto | Cotiza tu proyecto web o servicio técnico en Cali",
  description:
    "Contacta a TechnoUltra en Cali: cotiza tu página web, aplicación, branding o servicio técnico de computadores e impresoras. WhatsApp +57 300 729 6067.",
  path: "/contacto",
});

export default function Contacto() {
  return (
    <>
      <PageHero word="Contacto" title="Contáctanos: cuéntanos tu proyecto o solicita servicio técnico" crumbs={[{ label: "Contacto" }]} />
      <section className="section light inner-pad" style={{ paddingTop: 100 }}>
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-info">
              <div>
                <h3>WhatsApp y teléfono</h3>
                <a href={site.phoneHref}>{site.phone}</a>
              </div>
              <div>
                <h3>Correo</h3>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div>
                <h3>Ubicación</h3>
                <p>
                  {site.city}, {site.region}, {site.country}
                </p>
              </div>
              <div>
                <h3>Redes</h3>
                <p>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-u">Instagram</a>
                  {" · "}
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="link-u">Facebook</a>
                  {" · "}
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link-u">LinkedIn</a>
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <FaqSection />
    </>
  );
}
