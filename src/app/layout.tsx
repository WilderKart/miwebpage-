import type { Metadata, Viewport } from "next";
import { Geist, Inter, Inter_Tight } from "next/font/google";
import { site, absoluteUrl } from "@/data/site";
import SmoothScroll from "@/components/SmoothScroll";
import Lines from "@/components/Lines";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Transition from "@/components/Transition";
import Motion from "@/components/Motion";
import "./globals.css";
import "./home.css";

const head = Inter_Tight({ variable: "--font-head", subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const ghostFont = Geist({ variable: "--font-ghost", subsets: ["latin"], weight: ["600", "700"] });

export const viewport: Viewport = {
  themeColor: "#0e0e0e",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TechnoUltra | Desarrollo web, apps, branding y servicio técnico en Cali",
    template: "%s | TechnoUltra",
  },
  description:
    "Agencia digital en Cali, Colombia: desarrollo web y aplicaciones a medida, branding, manejo de redes sociales, SEO y reparación de computadores, portátiles e impresoras.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: site.name,
    url: site.url,
    title: "TechnoUltra | Desarrollo web, apps, branding y servicio técnico en Cali",
    description:
      "Páginas web, aplicaciones a medida, branding, redes sociales, SEO y servicio técnico de computadores e impresoras en Cali y toda Colombia.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const orgLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": absoluteUrl("/#organization"),
      name: site.name,
      url: site.url,
      logo: absoluteUrl("/brand/icon.png"),
      image: absoluteUrl("/brand/icon.png"),
      description: site.description,
      telephone: site.phone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cali",
        addressRegion: "Valle del Cauca",
        addressCountry: "CO",
      },
      areaServed: ["Cali", "Palmira", "Jamundí", "Yumbo", "Colombia"],
      sameAs: [site.instagram, site.facebook, site.linkedin],
      knowsAbout: [
        "Desarrollo web",
        "Diseño UI/UX",
        "Branding",
        "SEO",
        "Redes sociales",
        "Reparación de computadores",
        "Reparación de impresoras",
      ],
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: site.url,
      name: site.name,
      inLanguage: "es-CO",
      publisher: { "@id": absoluteUrl("/#organization") },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CO" className={`${head.variable} ${body.variable} ${ghostFont.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.dataset.loader=matchMedia('(prefers-reduced-motion: reduce)').matches?'skip':'play'",
          }}
        />
      </head>
      <body>
        <a href="#contenido" className="skip">
          Saltar al contenido
        </a>
        <SmoothScroll />
        <Transition />
        <Motion />
        <Lines />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <JsonLd data={orgLd} />
      </body>
    </html>
  );
}
