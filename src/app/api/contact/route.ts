import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Inicialización del cliente de Resend con la variable de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Esquema de validación para el formulario de contacto (Backend - Zero Trust)
 */
const contactSchema = z.object({
    name: z.string().min(2, "Nombre requerido"),
    email: z.string().email("Email inválido"),
    company: z.string().optional(),
    phone: z.string().optional(),
    message: z.string().min(10, "Mensaje muy corto"),
});

/**
 * POST /api/contact
 * Envía el formulario de contacto usando Resend a studio@technoultra.com
 */
export async function POST(req: Request) {
    try {
        const body = await req.json();

        // 1. Validación estricta con Zod
        const result = contactSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: "Datos de formulario inválidos", details: result.error.format() },
                { status: 400 }
            );
        }

        const { name, email, company, phone, message } = result.data;

        // 2. Envío de correo real con Resend
        // Simplificado para máxima compatibilidad con dominios recién verificados
        console.log("Intentando enviar correo a través de Resend...");

        const { data, error } = await resend.emails.send({
            from: "studio@technoultra.com",
            to: ["studio@technoultra.com"],
            subject: `Lead: ${name} - ${company || "Empresa"}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 12px; color: #333;">
                    <h2 style="color: #FF5016; margin-top: 0;">Nuevo Lead de Technoultra</h2>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Empresa:</strong> ${company || "N/A"}</p>
                    <p><strong>Celular/WP:</strong> ${phone || "No proporcionado"}</p>
                    <div style="background: #fcfcfc; border: 1px solid #f0f0f0; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <h3 style="font-size: 14px; margin-top: 0; color: #666;">MENSAJE:</h3>
                        <p style="margin-bottom: 0;">${message}</p>
                    </div>
                    <p style="font-size: 11px; color: #aaa; margin-top: 30px; text-align: center;">Enviado desde el formulario de technoultra.com</p>
                </div>
            `,
        });

        if (error) {
            console.error("Fallo detectado en Resend:", JSON.stringify(error, null, 2));

            // Fallback agresivo si el dominio falla: Usar el dominio por defecto de Resend
            const fallbackResult = await resend.emails.send({
                from: "Technoultra <onboarding@resend.dev>",
                to: ["studio@technoultra.com"],
                subject: `REINTENTO LEAD: ${name}`,
                replyTo: email,
                html: `<p>Fallo el envío desde dominio principal. Lead: ${name} (${email}). Cel: ${phone || "N/A"}. Mensaje: ${message}</p>`,
            });

            if (fallbackResult.error) {
                console.error("Fallo también el reintento:", fallbackResult.error);
                throw new Error("Servicio de correo completamente no disponible");
            }

            return NextResponse.json(
                { message: "Enviado vía fallback", id: fallbackResult.data?.id },
                { status: 200 }
            );
        }

        console.log("Éxito en Resend! ID del mensaje:", data?.id);
        return NextResponse.json(
            { message: "Lead enviado exitosamente", id: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error en API de contacto:", error);
        return NextResponse.json(
            { error: "Error interno al procesar el formulario" },
            { status: 500 }
        );
    }
}
