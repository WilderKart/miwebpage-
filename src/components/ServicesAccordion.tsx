"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/data/site";
import Image from "next/image";

export default function ServicesAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div role="list">
      {services.map((s, i) => {
        const isOpen = open === i;
        return (
          <div role="listitem" key={s.slug} className={`svc-item ${isOpen ? "open" : ""}`}>
            <h3>
              <button
                className="svc-btn"
                aria-expanded={isOpen}
                aria-controls={`svc-${s.slug}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="n">{s.n}.</span>
                <span className="t">
                  <span>
                    {s.title}
                    <sup>({s.n})</sup>
                  </span>
                  <span className="pm" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <div className="svc-body" id={`svc-${s.slug}`}>
              <div>
                <div className="in">
                  <div className="col">
                    <div className="svc-tiles">
                      {s.images.map((src, k) => (
                        <div className="tile" key={src}>
                          <Image src={src} alt={`${s.title}: imagen ${k + 1}`} fill sizes="(min-width: 992px) 270px, 45vw" />
                        </div>
                      ))}
                    </div>
                    <p>{s.short}</p>
                    <div className="chips">
                      {s.categories.map((c) => (
                        <span className="chip" key={c}>
                          {c}
                        </span>
                      ))}
                    </div>
                    <Link href={`/servicios/${s.slug}`} className="more link-u" tabIndex={isOpen ? 0 : -1}>
                      Ver servicio de {s.title.toLowerCase()} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
