import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Log environment variables (masked for security)
    console.log('Environment check:', {
      hasApiKey: !!import.meta.env.RESEND_API_KEY,
      apiKeyPrefix: import.meta.env.RESEND_API_KEY?.substring(0, 8) + '...',
      emailFrom: import.meta.env.EMAIL_FROM,
      emailTo: import.meta.env.EMAIL_TO,
    });

    // Initialize Resend client at runtime (not at build time)
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    // Parse form data
    const body = await request.json();
    const { nombre, email, telefono, asunto, mensaje } = body;

    console.log('Form data received:', { nombre, email, asunto });

    // Validate required fields
    if (!nombre || !email || !asunto || !mensaje) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Por favor, completa todos los campos obligatorios.',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Por favor, ingresa un email válido.',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Map asunto to readable text
    const asuntoMap: Record<string, string> = {
      compra: 'Compra de propiedad',
      venta: 'Venta de propiedad',
      arriendo: 'Arriendo',
      tasacion: 'Tasación',
      consulta: 'Consulta general',
      otro: 'Otro',
    };

    const asuntoTexto = asuntoMap[asunto] || asunto;

    // Send email using Resend
    console.log('Attempting to send email via Resend...');
    const { data, error } = await resend.emails.send({
      from: import.meta.env.EMAIL_FROM || 'noreply@yourdomain.com',
      to: import.meta.env.EMAIL_TO || 'info@propiedades.com',
      subject: `Nuevo mensaje de contacto: ${asuntoTexto}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Mensaje de Contacto</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f4f4f4; border-radius: 10px; padding: 30px; margin-bottom: 20px;">
            <h1 style="color: #2563eb; margin-top: 0;">Nuevo Mensaje de Contacto</h1>
            <p style="font-size: 16px; color: #666;">Has recibido un nuevo mensaje desde el formulario de contacto de tu sitio web.</p>
          </div>

          <div style="background-color: #fff; border: 1px solid #ddd; border-radius: 10px; padding: 20px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Información del Contacto</h2>

            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #2563eb;">Nombre:</strong> ${nombre}</p>
              <p style="margin: 10px 0;"><strong style="color: #2563eb;">Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
              ${telefono ? `<p style="margin: 10px 0;"><strong style="color: #2563eb;">Teléfono:</strong> <a href="tel:${telefono}" style="color: #2563eb; text-decoration: none;">${telefono}</a></p>` : ''}
              <p style="margin: 10px 0;"><strong style="color: #2563eb;">Asunto:</strong> ${asuntoTexto}</p>
            </div>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
              <h3 style="color: #2563eb; margin-top: 0;">Mensaje:</h3>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
                ${mensaje}
              </div>
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 14px;">
            <p>Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
            <p style="margin-top: 10px;">
              <a href="mailto:${email}" style="display: inline-block; background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">Responder por Email</a>
              ${telefono ? `<a href="https://wa.me/${telefono.replace(/[^0-9]/g, '')}" style="display: inline-block; background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Contactar por WhatsApp</a>` : ''}
            </p>
          </div>
        </body>
        </html>
      `,
      text: `
Nuevo Mensaje de Contacto

Nombre: ${nombre}
Email: ${email}
${telefono ? `Teléfono: ${telefono}\n` : ''}Asunto: ${asuntoTexto}

Mensaje:
${mensaje}

---
Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
      `.trim(),
    });

    console.log('Resend response:', { data, error, hasData: !!data, hasError: !!error });

    if (error) {
      console.error('Error sending email with Resend:', JSON.stringify(error, null, 2));
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.',
          error: error?.message || 'Error desconocido',
          details: error,
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: '¡Mensaje enviado correctamente! Te contactaremos pronto.',
        data,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error inesperado. Por favor, intenta de nuevo más tarde.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
