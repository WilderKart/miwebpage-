import Image from "next/image";
import GridLines from "./GridLines";
import TextScroll from "./TextScroll";

const aboutText =
  "Ayudamos a las empresas a destacar con diseño y tecnología. Creamos marcas, páginas web y aplicaciones que generan confianza y mejores resultados.";

export function About() {
  return (
    <section className="sec d ab clip">
      <GridLines tone="dark" />
      <div className="wrap">
        <div className="g4">
          <div className="ab-l" data-a="block">
            <div className="ab-top">
              <span className="lbl" data-a="label">
                Sobre nosotros
              </span>
              <span>Cali, Colombia</span>
            </div>
            <div className="ab-img">
              <Image src="/brand/about.jpg" alt="Ilustración de una mujer mirando hacia arriba rodeada de bocetos de diseño web, marca y aplicaciones" width={1043} height={1508} sizes="(min-width: 992px) 25vw, 100vw" />
            </div>
            <p className="ab-cap" data-a="lines">
              Conectamos la tecnología con experiencias digitales intuitivas mediante diseño web de alto nivel e ingeniería estratégica.
            </p>
          </div>
          <div className="ab-r">
            <TextScroll text={aboutText} tone="dark" className="ab-text" trigger=".ab" />
            <svg className="ab-quote" viewBox="0 0 194 182" aria-hidden="true">
              <path d="M0 0H76V96C76 150 44 180 0 182V150C22 146 36 130 36 106H0Z" />
              <path d="M118 0H194V96C194 150 162 180 118 182V150C140 146 154 130 154 106H118Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
