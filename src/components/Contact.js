"use client";
import { Phone, Mail, MapPin, Send } from "lucide-react";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    naam: "",
    telefoon: "",
    email: "",
    bericht: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch("/api/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess("Uw aanvraag is succesvol verzonden. We nemen zo snel mogelijk contact met u op.");
        setForm({ naam: "", telefoon: "", email: "", bericht: "" });
      } else {
        const data = await res.json();
        setError(data.error || "Er is een fout opgetreden. Probeer het later opnieuw.");
      }
    } catch (err) {
      setError("Er is een fout opgetreden. Probeer het later opnieuw.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Vraag een vrijblijvende offerte aan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vul het formulier in of neem direct contact met ons op. We reageren binnen 24 uur.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Info Card 1: Phone */}
          <div className="space-y-6">
            <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 gap-y-2 rounded-xl border p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Telefoon</h3>
              <p className="text-gray-600 mb-3">Bereikbaar ma-vr 8:00-18:00</p>
              <a href="tel:0200000000" className="text-blue-600 hover:underline">020 000 0000</a>
            </div>
            {/* Info Card 2: Mail */}
            <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 gap-y-2 rounded-xl border p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">E-mail</h3>
              <p className="text-gray-600 mb-3">We reageren binnen 24 uur</p>
              <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a>
            </div>
            {/* Info Card 3: MapPin */}
            <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 gap-y-2 rounded-xl border p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Werkgebied</h3>
              <p className="text-gray-600">
                Amsterdam en omgeving<br />Binnen 30 km gratis inspectie
              </p>
            </div>
          </div>
          {/* Contact Form */}
          <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border md:col-span-2 p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="naam" className="block text-gray-700 mb-2">Naam *</label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    required
                    placeholder="Uw naam"
                    value={form.naam}
                    onChange={handleChange}
                    disabled={loading}
                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                  />
                </div>
                <div>
                  <label htmlFor="telefoon" className="block text-gray-700 mb-2">Telefoon *</label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    required
                    placeholder="020 000 0000"
                    value={form.telefoon}
                    onChange={handleChange}
                    disabled={loading}
                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="uw@email.nl"
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                  className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                />
              </div>
              <div>
                <label htmlFor="bericht" className="block text-gray-700 mb-2">Bericht</label>
                <textarea
                  id="bericht"
                  name="bericht"
                  rows={6}
                  placeholder="Vertel ons over uw situatie en wanneer wij contact met u mogen opnemen..."
                  value={form.bericht}
                  onChange={handleChange}
                  disabled={loading}
                  className="resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                ></textarea>
              </div>
              <button
                data-slot="button"
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full group"
              >
                {loading ? "Versturen..." : "Verstuur aanvraag"}
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              {success && (
                <p className="text-green-600 text-center">{success}</p>
              )}
              {error && (
                <p className="text-red-600 text-center">{error}</p>
              )}
              <p className="text-sm text-gray-500 text-center">
                Door dit formulier te verzenden gaat u akkoord met onze privacy voorwaarden.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
