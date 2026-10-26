import FaqBlock from "@/components/home/FaqBlock";
import Link from "next/link";
import Image from "next/image";
import { projects, posts, process, faqs, wa, type Post } from "@/data/site";
import Reveal from "./Reveal";
import Btn from "./Btn";
import Art, { type Tone } from "./Art";
import JsonLd from "./JsonLd";

export function CtaBand({ title = "¿Listo para tu próximo proyecto?" }: { title?: string }) {
  return (
    <section className="cta light">
      <div className="wrap">
        <Reveal className="cta-box">
          <h2>{title}</h2>
          <div style={{ display: "grid", gap: 12 }}>
            <Btn href={wa("Hola TechnoUltra, quiero cotizar un proyecto.")} tone="accent" external>
              Escríbenos por WhatsApp
            </Btn>
            <Btn href="/contacto" tone="white">
              Ir al formulario
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProjectGrid({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="proj-list">
      {list.map((p, i) => (
        <Reveal key={p.slug} delay={(i % 2) * 0.1}>
          <Link href={`/proyectos/${p.slug}`} className="proj" data-cursor="Ver proyecto" data-img={p.image}>
            <div className="thumb">
              <Image src={p.image} alt={`Proyecto ${p.name}: ${p.category}`} fill sizes="(min-width: 760px) 50vw, 100vw" style={{ objectFit: "cover", objectPosition: "top" }} />
            </div>
            <div className="meta">
              <span>{p.name}</span>
              <span>
                / {p.month} {p.year}
              </span>
            </div>
            <p className="cat">{p.category}</p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

const postTones: Tone[] = ["a", "d", "e", "b"];

export function PostCard({ p, i = 0 }: { p: Post; i?: number }) {
  const date = new Date(p.date + "T12:00:00");
  return (
    <Reveal delay={(i % 3) * 0.08}>
      <Link href={`/blog/${p.slug}`} className="post">
        <Art tone={postTones[i % postTones.length]} variant={i + 1} className="thumb" />
        <div className="m">
          <span>{p.category}</span>
          <span>{date.toLocaleDateString("es-CO", { day: "numeric", month: "short", year: "numeric" })}</span>
        </div>
        <h3>{p.title}</h3>
      </Link>
    </Reveal>
  );
}

export function PostGrid({ limit }: { limit?: number }) {
  const list = limit ? posts.slice(0, limit) : posts;
  return (
    <div className="blog-grid">
      {list.map((p, i) => (
        <PostCard key={p.slug} p={p} i={i} />
      ))}
    </div>
  );
}

export function ProcessGrid() {
  return (
    <div className="proc-grid">
      {process.map((s, i) => (
        <Reveal key={s.n} delay={i * 0.07}>
          <div className="step">
            <span className="n">{s.n}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function FaqSection({ items = faqs }: { items?: { q: string; a: string }[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <FaqBlock items={items} />
      <JsonLd data={ld} />
    </>
  );
}

