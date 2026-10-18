"use client";
import {
  Award,
  Clock,
  Euro,
  FileCheck,
  HeartHandshake,
  Phone,
} from "lucide-react";

export default function Voordelen() {
  return (
    <section id="voordelen" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            Waarom Klusbedrijf van der Groef?
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Uw specialist voor meterkastvervanging
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Met jarenlange ervaring en honderden tevreden klanten bent u bij ons verzekerd van kwaliteit en service.
          </p>
        </div>
        {/* Voordelen cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Gecertificeerd vakmanschap</h3>
            <p className="text-gray-600">
              Al onze monteurs zijn gecertificeerd en werken volgens de laatste NEN 1010 normen.
            </p>
          </div>
          {/* Card 2 */}
          <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Snelle service</h3>
            <p className="text-gray-600">
              Binnen 48 uur op locatie voor een vrijblijvende offerte. Spoedservice beschikbaar.
            </p>
          </div>
          {/* Card 3 */}
          <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Euro className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Scherpe prijzen</h3>
            <p className="text-gray-600">
              Transparante prijzen vanaf €450 zonder verrassingen. U weet van tevoren waar u aan toe bent.
            </p>
          </div>
          {/* Card 4 */}
          <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Conform alle normen</h3>
            <p className="text-gray-600">
              Al onze werkzaamheden worden uitgevoerd volgens de geldende NEN 1010 normen.
            </p>
          </div>
          {/* Card 5 */}
          <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">5 jaar garantie</h3>
            <p className="text-gray-600">
              Volledige garantie op materiaal en arbeid. Uw zekerheid voor jarenlang veilig gebruik.
            </p>
          </div>
          {/* Card 6 */}
          <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Altijd bereikbaar</h3>
            <p className="text-gray-600">
              Telefonisch bereikbaar voor vragen en advies. Ook avond- en weekendservice.
            </p>
          </div>
        </div>
        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-blue-600 mb-2">500+</div>
            <div className="text-gray-700">Tevreden klanten</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-blue-600 mb-2">15+</div>
            <div className="text-gray-700">Jaar ervaring</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-blue-600 mb-2">98%</div>
            <div className="text-gray-700">Klanttevredenheid</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-blue-600 mb-2">24/7</div>
            <div className="text-gray-700">Bereikbaar</div>
          </div>
        </div>
      </div>
    </section>
  );
}
