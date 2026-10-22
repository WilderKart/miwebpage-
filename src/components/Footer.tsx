import Link from "next/link";
import { site, nav, services, wa } from "@/data/site";
import Btn from "./Btn";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="talk">
            <h2 className="h-md">Hablemos de tu próximo proyecto</h2>
            <Btn href={wa("Hola TechnoUltra, quiero agendar un diagnóstico gratis.")} tone="accent" external>
              Agendar diagnóstico gratis
            </Btn>
          </div>
          <div>
            <h4>Contacto</h4>
            <div className="footer-contact">
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <p>
                {site.city}, {site.country}
              </p>
            </div>
          </div>
          <div>
            <h4>Navegación</h4>
            <ul>
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Servicios</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicios/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Redes</h4>
            <ul>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href={site.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="wordmark" aria-hidden="true">
          <span>{site.nameTop}</span>
          <span>{site.nameBottom}</span>
        </div>
        <div className="footer-bar">
          <span>
            © 2026 {site.name} — Agencia digital en {site.city}, {site.country}.
          </span>
          <span>
            <Link href="/privacidad">Política de privacidad</Link> · <Link href="/terminos">Términos de servicio</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
