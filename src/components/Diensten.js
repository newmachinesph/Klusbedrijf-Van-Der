"use client";
import {
  Zap,
  Shield,
  Plug,
  Wrench,
  House,
  Building2,
  ClipboardCheck,
} from "lucide-react";

export default function Diensten() {
  return (
    <section id="diensten" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            Onze diensten
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Specialist in meterkastvervanging
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van advies tot installatie en keuring. Alles uit één hand voor een veilige elektrische installatie.
          </p>
        </div>
        {/* Dienst cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Meterkast vervangen</h3>
            <p className="text-gray-600 mb-4">
              Complete vervanging van uw oude meterkast inclusief groepenverdeling en aardlekschakelaars.
            </p>
            <div className="text-blue-600">Vanaf €450</div>
          </div>
          {/* Card 2 */}
          <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Uitbreiding meterkast</h3>
            <p className="text-gray-600 mb-4">
              Extra groepen toevoegen voor nieuwe apparaten, laadpaal of zonnepanelen.
            </p>
            <div className="text-blue-600">Vanaf €100</div>
          </div>
          {/* Card 3 */}
          <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Plug className="w-6 h-6 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Inductie aansluiting</h3>
            <p className="text-gray-600 mb-4">
              Professionele aansluiting van uw inductiekookplaat conform alle veiligheidseisen.
            </p>
            <div className="text-blue-600">Vanaf €200</div>
          </div>
          {/* Card 4 */}
          <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Wrench className="w-6 h-6 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Storing verhelpen</h3>
            <p className="text-gray-600 mb-4">
              Spoedservice voor storingen aan uw elektra of meterkast.
            </p>
            <div className="text-blue-600">Vanaf €85/uur</div>
          </div>
          {/* Card 5 */}
          <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <House className="w-6 h-6 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Particuliere woningen</h3>
            <p className="text-gray-600 mb-4">
              Specialisatie in meterkastvervanging voor woningen en appartementen.
            </p>
            <div className="text-blue-600">Op maat</div>
          </div>
          {/* Card 6 */}
          <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Zakelijke projecten</h3>
            <p className="text-gray-600 mb-4">
              Meterkastvervanging voor bedrijfspanden en verhuurde objecten.
            </p>
            <div className="text-blue-600">Op maat</div>
          </div>
          {/* Card 7 */}
          <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <ClipboardCheck className="w-6 h-6 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Elektra aanleggen</h3>
            <p className="text-gray-600 mb-4">
              Nieuwe elektra aanleggen of bestaande installatie uitbreiden.
            </p>
            <div className="text-blue-600">Op maat</div>
          </div>
        </div>
        {/* Waarom uw meterkast vervangen? */}
        <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl mb-8 text-gray-900 text-center">
            Waarom uw meterkast vervangen?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Reason 1 */}
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">1</span>
              </div>
              <div>
                <div className="text-gray-900 mb-1">Veiligheid</div>
                <p className="text-gray-600">
                  Oude meterkasten voldoen vaak niet meer aan de huidige veiligheidsnormen en kunnen gevaarlijk zijn.
                </p>
              </div>
            </div>
            {/* Reason 2 */}
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">2</span>
              </div>
              <div>
                <div className="text-gray-900 mb-1">Capaciteit</div>
                <p className="text-gray-600">
                  Moderne apparaten vragen meer vermogen. Een nieuwe meterkast biedt voldoende groepen.
                </p>
              </div>
            </div>
            {/* Reason 3 */}
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">3</span>
              </div>
              <div>
                <div className="text-gray-900 mb-1">Verkoop & verhuur</div>
                <p className="text-gray-600">
                  Bij verkoop of verhuur moet de meterkast vaak voldoen aan de laatste normen voor veiligheid.
                </p>
              </div>
            </div>
            {/* Reason 4 */}
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white">4</span>
              </div>
              <div>
                <div className="text-gray-900 mb-1">Energietransitie</div>
                <p className="text-gray-600">
                  Voor zonnepanelen, laadpaal of warmtepomp heeft u een moderne meterkast nodig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
