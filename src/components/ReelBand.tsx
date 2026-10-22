"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const rot = [-4, 3, -2, 5, -5, 2, -3, 4];

// Tarjetas inclinadas que se desplazan en horizontal mientras se hace scroll.
export default function ReelBand() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        track.current,
        { x: "8vw" },
        {
          x: () => -(track.current!.scrollWidth - window.innerWidth * 0.9),
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 0.6, invalidateOnRefresh: true },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  const cards = [...projects, ...projects];

  return (
    <section className="reel-band" ref={root} aria-label="Muestra de proyectos">
      <div className="reel-track" ref={track}>
        {cards.map((p, i) => (
          <div className="reel-card" key={`${p.slug}-${i}`} style={{ "--r": `${rot[i % rot.length]}deg` } as React.CSSProperties}>
            <Image src={p.image} alt={`Captura del proyecto ${p.name}`} fill sizes="520px" />
          </div>
        ))}
      </div>
    </section>
  );
}
