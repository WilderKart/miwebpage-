import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { cn } from "@/lib/utils";

/* ─── Fuente principal ─────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ─── Metadata SEO — Optimizada para agencia digital en Colombia ────────────
 * Palabras clave primarias: agencia digital Colombia, SEO estratégico,
 * marketing digital, desarrollo web corporativo, branding estratégico.
 * Meta description ≤ 160 caracteres, orientada a beneficio del cliente.
 * ─────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://technoultra.com"),

  title: {
    template: "%s | Technoultra — Agencia Digital Colombia",
    default: "TECHNOULTRA | Agencia de Desarrollo Web, SEO y Marketing Digital en Colombia",
  },

  description:
    "Agencia digital estratégica especializada en desarrollo web, SEO avanzado, performance marketing, branding y sistemas de crecimiento para empresas que buscan clientes y visibilidad online.",

  keywords: [
    "agencia digital Colombia",
    "agencia de marketing digital",
    "SEO estratégico Colombia",
    "desarrollo web corporativo Colombia",
    "branding estratégico",
    "marketing digital empresas",
    "posicionamiento web Colombia",
    "diseño web profesional",
    "growth hacking",
    "consultoría digital Colombia",
    "performance marketing",
    "Google Ads Colombia",
    "Meta Ads Colombia",
  ],

  authors: [{ name: "TechnoUltra", url: "https://technoultra.com" }],
  creator: "TechnoUltra",
  publisher: "TechnoUltra",

  /* ── Alternates se define en page.tsx individualmente para evitar duplicidad de canonical ── */

  /* ── OpenGraph — Vista compartida en redes sociales ── */
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://technoultra.com",
    siteName: "Technoultra — Agencia Digital Colombia",
    title: "Technoultra | El Crecimiento No Es Suerte",
    description:
      "Diseñamos sistemas digitales que convierten, escalan y generan ventaja competitiva real para empresas en Colombia.",
    images: [
      {
        url: "/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Logo Technoultra — Agencia Digital",
      },
    ],
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card: "summary",
    title: "Technoultra | Agencia Digital en Colombia",
    description:
      "SEO, marketing digital y desarrollo web corporativo para empresas que quieren crecer sin dejarlo al azar.",
    images: ["/favicon/android-chrome-512x512.png"],
    creator: "@technoultra",
  },

  /* ── Robots y rastreo ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Iconos ── */
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
  },

  /* ── Verificación Search Console (reemplazar con token real) ── */
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  },
};

/* ─── JSON-LD — Datos estructurados Organization + LocalBusiness ────────────
 * Mejora cómo Google entiende y muestra TechnoUltra en resultados de búsqueda.
 * Impacta en: Knowledge Panel, resultados enriquecidos, confianza de dominio.
 * Fuente: https://schema.org/LocalBusiness
 * ─────────────────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://technoultra.com/#organization",
      name: "Technoultra",
      url: "https://technoultra.com",
      logo: {
        "@type": "ImageObject",
        url: "https://technoultra.com/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://www.linkedin.com/company/technoultra",
        "https://www.instagram.com/technoultra",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "Spanish",
        areaServed: "CO",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://technoultra.com/#business",
      name: "Technoultra — Agencia Digital",
      image: "https://technoultra.com/favicon/android-chrome-512x512.png",
      url: "https://technoultra.com",
      telephone: "+57-300-729-6067",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CO",
        addressLocality: "Cali",
        addressRegion: "Valle del Cauca",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 4.711,
        longitude: -74.0721,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios Digitales",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Estratégico" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desarrollo Web Corporativo" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marketing Digital y Ads" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding Estratégico" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://technoultra.com/#website",
      url: "https://technoultra.com",
      name: "Technoultra",
      description: "Agencia digital en Colombia — SEO, Desarrollo Web y Marketing Estratégico",
      publisher: { "@id": "https://technoultra.com/#organization" },
      inLanguage: "es-CO",
    },
  ],
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppBtn from "@/components/layout/WhatsAppBtn";
// CookieBanner: gestiona el consentimiento y activa GA4 condicionalmente
import CookieBanner from "@/components/layout/CookieBanner";
// SpeedInsights: activa métricas de rendimiento en el panel de Vercel
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className={inter.variable}>
      {/* ── Google Tag Manager — Carga oficial vía @next/third-parties —────────
       *  GTM gestiona todos los scripts de tracking desde un solo panel.
       *  Solo se inyecta si NEXT_PUBLIC_GTM_ID está definido en .env.local
       *  Formato esperado: GTM-XXXXXXX
       * ────────────────────────────────────────────────────────────────────── */}
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      <head>
        {/* ── JSON-LD Datos Estructurados — Organization + LocalBusiness + WebSite ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("min-h-screen bg-background text-foreground antialiased font-sans overflow-x-hidden")}>
        <SmoothScroll>
          <Navbar />
          <main id="main-content" className="flex-grow min-h-screen">
            {children}
          </main>
          <WhatsAppBtn />
          <Footer />
        </SmoothScroll>
        {/* ── CookieBanner — gestiona consentimiento (Ley 1581 de 2012) ───────────
         *  GA4 solo se activa si el usuario acepta todas las cookies.
         *  El banner guarda la elección en una cookie propia por 365 días.
         *  Incluye botón flotante para que el usuario cambie su preferencia.
         * ──────────────────────────────────────────────────────────────────── */}
        <CookieBanner />
        {/* SpeedInsights — recopila métricas de rendimiento reales en producción */}
        <SpeedInsights />
      </body>
    </html>
  );
}
