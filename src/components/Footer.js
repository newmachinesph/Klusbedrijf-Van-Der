"use client";
import { Bolt, Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { useCallback } from "react";

const sectionLinks = [
  { label: "Home", id: "home" },
  { label: "Diensten", id: "diensten" },
  { label: "Voordelen", id: "voordelen" },
  { label: "Werkproces", id: "proces" },
  { label: "Contact", id: "contact" },
];

function handleSmoothScroll(id) {
  if (typeof window !== "undefined") {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Branding & Social */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Bolt className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <div className="text-white">Klusbedrijf van der Groef</div>
                <div className="text-xs text-gray-400">Meterkast Specialist</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Uw betrouwbare partner voor meterkastvervanging en elektrotechnische installaties.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Snelle links</h3>
            <ul className="space-y-2">
              {sectionLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    onClick={e => {
                      e.preventDefault();
                      handleSmoothScroll(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Meterkast vervangen</li>
              <li className="text-gray-400">Meterkast uitbreiden</li>
              <li className="text-gray-400">Inductie aansluiting</li>
              <li className="text-gray-400">Storing verhelpen</li>
              <li className="text-gray-400">Elektra aanleggen</li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-gray-400">Telefoon</div>
                  <a href="tel:0200000000" className="text-white hover:text-blue-600 transition-colors">020 000 0000</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-gray-400">E-mail</div>
                  <a href="mailto:info@example.com" className="text-white hover:text-blue-600 transition-colors">info@example.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-gray-400">Werkgebied</div>
                  <div className="text-white">Amsterdam en omgeving</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Klusbedrijf van der Groef. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacybeleid</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Algemene voorwaarden</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie beleid</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
