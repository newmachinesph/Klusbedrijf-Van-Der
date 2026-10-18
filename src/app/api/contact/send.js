// src/app/api/contact/send.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { naam, telefoon, email, bericht } = req.body;

  if (!naam || !telefoon || !email) {
    return res.status(400).json({ error: "Vul alle verplichte velden in." });
  }

  // Configure your SMTP transport here
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
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
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Er is een fout opgetreden bij het verzenden van de e-mail." });
  }
}
