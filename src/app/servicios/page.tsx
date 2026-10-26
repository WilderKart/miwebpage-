import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageMeta } from "@/lib/meta";
import { services } from "@/data/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { CtaBand, FaqSection } from "@/components/Sections";

export const metadata = pageMeta({
  title: "Servicios | Desarrollo web, branding, redes y servicio técnico en Cali",
  description:
    "Servicios de TechnoUltra en Cali: diseño UI/UX, identidad de marca, desarrollo web, estrategia digital y SEO, y reparación de computadores, portátiles e impresoras.",
  path: "/servicios",
});

export default function Servicios() {
  return (
    <>
      <PageHero
        word="Servicios"
        title="Servicios de desarrollo web, marca, marketing digital y soporte técnico en Cali"
        crumbs={[{ label: "Servicios" }]}
      />
      <section className="section light inner-pad" style={{ paddingTop: 100 }}>
        <div className="wrap">
          {services.map((s) => (
            <Reveal key={s.slug}>
              <article className="svc-row">
                <span className="n">({s.n})</span>
                <h2>
                  <Link href={`/servicios/${s.slug}`}>{s.title}</Link>
                </h2>
                <Link href={`/servicios/${s.slug}`} className="circle-btn go" aria-label={`Ver servicio de ${s.title}`}>
                  <ArrowUpRight size={22} aria-hidden="true" />
                </Link>
                <div className="tile">
                  <Image src={s.images[0]} alt={`${s.title}: imagen del servicio`} fill sizes="(min-width: 992px) 640px, 100vw" />
                </div>
                <div className="txt">
                  <p>{s.short}</p>
                  <div className="chips">
                    {s.categories.map((c) => (
                      <span className="chip" key={c}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <FaqSection />
      <CtaBand />
    </>
  );
}
