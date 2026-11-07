import Link from "next/link";
import { posts, blogCategories } from "@/data/site";
import GridLines from "@/components/home/GridLines";
import BlogCard from "./BlogCard";

// Listado del blog: barra de temas (enlaces reales, aptos para SEO) y rejilla de tres columnas.
export default function BlogIndex({ category }: { category?: string }) {
  const list = category ? posts.filter((p) => p.category === category) : posts;
  return (
    <section className="sec l bi">
      <GridLines />
      <div className="wrap">
        <div className="bi-bar">
          <nav className="bi-cats" aria-label="Temas del blog">
            <Link href="/blog" className={!category ? "on" : ""} aria-current={!category ? "page" : undefined}>
              Todos
            </Link>
            {blogCategories.map((c) => (
              <Link key={c.slug} href={`/blog/categoria/${c.slug}`} className={category === c.label ? "on" : ""} aria-current={category === c.label ? "page" : undefined}>
                {c.label}
              </Link>
            ))}
          </nav>
          <span className="bi-count">{list.length} artículos</span>
        </div>
        <div className="bi-list">
          {list.map((p) => (
            <BlogCard key={p.slug} p={p} h={340} />
          ))}
        </div>
      </div>
    </section>
  );
}
