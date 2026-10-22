import { pageMeta } from "@/lib/meta";
import PageHero from "@/components/PageHero";
import { CtaBand, PostGrid } from "@/components/Sections";

export const metadata = pageMeta({
  title: "Blog | Guías de desarrollo web, SEO, branding y servicio técnico",
  description:
    "Artículos de TechnoUltra sobre desarrollo web, SEO local en Cali, branding para pymes y mantenimiento de computadores e impresoras.",
  path: "/blog",
});

export default function Blog() {
  return (
    <>
      <PageHero word="Blog" title="Guías y artículos sobre páginas web, SEO, branding y tecnología" crumbs={[{ label: "Blog" }]} />
      <section className="section light inner-pad" style={{ paddingTop: 100 }}>
        <div className="wrap">
          <PostGrid />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
