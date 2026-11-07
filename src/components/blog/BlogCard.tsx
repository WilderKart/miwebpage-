import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/data/site";
import { authorOf } from "@/data/team";

const fmt = (iso: string) => new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(iso));

// Tarjeta del blog (autor + fecha, imagen a color y título), con las medidas de la referencia.
export default function BlogCard({ p, h, sizes }: { p: Post; h: number; sizes?: string }) {
  const a = authorOf(p.author);
  return (
    <Link href={`/blog/${p.slug}`} className="bc" data-cursor="Leer">
      <div className="bc-author">
        <div className="bc-aw">
          <span className="av">
            <Image src={a.photo} alt={a.name} fill sizes="36px" />
          </span>
          <div>
            <div className="bc-an">{a.name}</div>
            <div className="bc-ap">{a.role}</div>
          </div>
        </div>
        <time className="bc-date" dateTime={p.date}>
          {fmt(p.date)}
        </time>
      </div>
      <div className="bc-img" style={{ height: h }}>
        <Image src={p.image} alt={p.imageAlt} fill sizes={sizes ?? "(min-width: 992px) 424px, 100vw"} />
      </div>
      <div className="bc-t">{p.title}</div>
    </Link>
  );
}
