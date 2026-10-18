// src/app/api/contact/send/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { naam, telefoon, email, bericht } = body;

    if (!naam || !telefoon || !email) {
      return new Response(JSON.stringify({ error: "Vul alle verplichte velden in." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for port 465, false otherwise
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: "Nieuwe contactaanvraag via website",
      text: `
Naam: ${naam}
Telefoon: ${telefoon}
E-mail: ${email}
Bericht: ${bericht || "(geen bericht)"}
      `,
      html: `
        <h2>Nieuwe contactaanvraag via website</h2>
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>Telefoon:</strong> ${telefoon}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Bericht:</strong><br/>${bericht ? bericht.replace(/\n/g, "<br/>") : "(geen bericht)"}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({
        error: "Er is een fout opgetreden bij het verzenden van de e-mail.",
        detail: error?.message || String(error),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
