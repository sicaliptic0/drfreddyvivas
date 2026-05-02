import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const NOTIFY_EMAIL = "drfreddyvivas@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev"; // dominio de prueba de Resend — funciona sin configuración extra

serve(async (req) => {
  // Supabase Database Webhooks envían un POST con el record insertado
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  // El payload de un Database Webhook tiene { type, table, record, ... }
  const record = (body.record ?? body) as Record<string, unknown>;
  const email = String(record.email ?? "desconocido");
  const consent = record.marketing_consent ? "Sí" : "No";
  const locale = String(record.locale ?? "es");
  const createdAt = String(record.created_at ?? new Date().toISOString());

  const html = `
    <h2 style="color:#1a1a2e">Nueva solicitud de acceso a la galería</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr>
        <td style="padding:6px 12px;font-weight:bold;color:#555">Correo</td>
        <td style="padding:6px 12px">${email}</td>
      </tr>
      <tr style="background:#f9f9f9">
        <td style="padding:6px 12px;font-weight:bold;color:#555">Acepta marketing</td>
        <td style="padding:6px 12px">${consent}</td>
      </tr>
      <tr>
        <td style="padding:6px 12px;font-weight:bold;color:#555">Idioma</td>
        <td style="padding:6px 12px">${locale}</td>
      </tr>
      <tr style="background:#f9f9f9">
        <td style="padding:6px 12px;font-weight:bold;color:#555">Fecha</td>
        <td style="padding:6px 12px">${createdAt}</td>
      </tr>
    </table>
    <p style="margin-top:24px;font-size:12px;color:#999">
      Enviado automáticamente desde el sitio web de Dr. Freddy Vivas.
    </p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [NOTIFY_EMAIL],
      subject: `Nueva solicitud de galería: ${email}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
    return new Response("Email error", { status: 500 });
  }

  return new Response("OK", { status: 200 });
});
