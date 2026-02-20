/**
 * robots.txt dinámico — generado automáticamente por Next.js en /robots.txt
 *
 * Indica a los crawlers de buscadores qué pueden y no pueden rastrear.
 * La referencia al sitemap acelera la indexación de nuevas páginas.
 *
 * Documentación: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                /* Permitir todo a Google y Bing */
                userAgent: ["Googlebot", "Bingbot"],
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
            {
                /* Regla general para todos los demás crawlers */
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
        ],
        /* Referencia al sitemap para indexación más rápida */
        sitemap: "https://technoultra.com/sitemap.xml",
        host: "https://technoultra.com",
    };
}
