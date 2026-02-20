/**
 * Sitemap dinámico — generado automáticamente por Next.js en /sitemap.xml
 *
 * Esta función se ejecuta en build time (o en cada request en modo dev).
 * Impacta directamente en la indexación de Google — URLs sin sitemap tardan más en aparecer.
 *
 * Para añadir nuevas páginas: agregar un objeto al array retornado.
 * Documentación: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://technoultra.com";
    const lastModified = new Date();

    return [
        {
            /* Página principal — máxima prioridad */
            url: baseUrl,
            lastModified,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            /* Sección de servicios — alta prioridad comercial */
            url: `${baseUrl}/#servicios`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            /* Sección de metodología — autoridad y credibilidad */
            url: `${baseUrl}/#metodologia`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            /* Sección de contacto — conversión directa */
            url: `${baseUrl}/#contacto`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            /* Política de privacidad — requerida legalmente (Ley 1581 de 2012, Colombia) */
            url: `${baseUrl}/privacidad`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
