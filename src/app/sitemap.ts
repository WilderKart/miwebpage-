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
            /* Política de privacidad */
            url: `${baseUrl}/privacidad`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            /* Términos de servicio */
            url: `${baseUrl}/terminos`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            /* Política de cookies */
            url: `${baseUrl}/politica-de-cookies`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ];
}
