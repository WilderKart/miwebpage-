const stack: { name: string; tools: string; note: string }[] = [
  { name: "Desarrollo Frontend", tools: "React, Next.js, TypeScript, Tailwind CSS", note: "(Velocidad extrema)" },
  { name: "Backend & Datos", tools: "Node.js, Supabase, Prisma ORM", note: "(Escalabilidad segura)" },
  { name: "Diseño UI/UX", tools: "Figma, Adobe Creative Cloud", note: "(Precisión visual)" },
  { name: "Infraestructura Cloud", tools: "Vercel, Hostinger, Git / GitHub", note: "(Estabilidad 24/7)" },
  { name: "Optimización & Datos", tools: "Google Analytics, SEO Técnico, Ads", note: "(Crecimiento medible)" },
];

// Stack tecnológico: título gigante con contador y tabla de herramientas por área (mismo formato que la referencia).
export default function Stack() {
  return (
    <section className="sec k cv" id="stack" aria-labelledby="stack-title">
      <div className="wrap">
        <div className="cv-wrap">
          <div className="cv-head">
            <span className="lbl" data-a="label">
              Stack tecnológico
            </span>
            <div className="cv-hw">
              <h2 className="cv-h1" id="stack-title" data-a="words">
                Stack Ultra
              </h2>
              <div className="cv-n" aria-hidden="true">
                ({String(stack.length).padStart(2, "0")})
              </div>
            </div>
          </div>
          <div className="cv-content">
            <div className="cv-left">
              <i className="cv-line" />
              <div className="cv-k">EL MOTOR DETRÁS DE CADA PROYECTO</div>
              <p className="cv-desc">
                No usamos plantillas genéricas. Desarrollamos sitios web, tiendas online y aplicaciones a medida con el mismo ecosistema que usan las empresas más innovadoras: sitios ultrarrápidos, máxima seguridad y una arquitectura lista para escalar junto con tu negocio.
              </p>
            </div>
            <ul className="cv-right cv-stack">
              <li className="cv-sline" aria-hidden="true" />
              {stack.map((s) => (
                <li key={s.name} className="cv-srow-wrap" data-a="fade">
                  <div className="cv-srow">
                    <h3 className="cv-k">{s.name}</h3>
                    <span className="cv-tools">{s.tools}</span>
                    <span className="cv-note">{s.note}</span>
                  </div>
                  <i className="cv-line" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
