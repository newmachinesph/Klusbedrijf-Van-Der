"use client";
import { Phone, Calendar, Wrench, CircleCheckBig } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Process() {
  return (
    <section id="proces" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            Werkproces
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Hoe werkt het?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In 4 simpele stappen naar een veilige nieuwe meterkast
          </p>
        </div>
        {/* Steps grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Phone className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-blue-600">Stap 1</span>
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900">Contact & advies</h3>
                  <p className="text-gray-600">
                    Bel of mail ons voor een vrijblijvend gesprek. Wij geven u direct deskundig advies over uw situatie.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent -z-10"></div>
            </div>
            {/* Step 2 */}
            <div className="relative">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-blue-600">Stap 2</span>
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900">Offerte & planning</h3>
                  <p className="text-gray-600">
                    Binnen 48 uur komen wij langs voor een inspectie. U ontvangt een heldere offerte met vaste prijs.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-[calc(100%+2rem)] right-full w-full h-0.5 bg-gradient-to-l from-blue-300 to-transparent -z-10"></div>
            </div>
            {/* Step 3 */}
            <div className="relative">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <Wrench className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-blue-600">Stap 3</span>
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900">Vakkundige installatie</h3>
                  <p className="text-gray-600">
                    Op de afgesproken datum vervangen wij uw meterkast. Netjes, snel en conform alle veiligheidsnormen.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent -z-10"></div>
            </div>
            {/* Step 4 */}
            <div className="relative">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-300 rounded-2xl flex items-center justify-center shadow-lg">
                    <CircleCheckBig className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-blue-600">Stap 4</span>
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900">Oplevering & garantie</h3>
                  <p className="text-gray-600">
                    Na installatie testen we alles grondig. U ontvangt 5 jaar garantie op materiaal en arbeid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA block */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl mb-4">Klaar voor een veilige meterkast?</h3>
          <p className="text-xl mb-8 text-blue-100">Vraag vandaag nog een vrijblijvende offerte aan</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="md"
              asChild
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              <a href="#contact">Offerte aanvragen</a>
            </Button>
            <Button
              size="md"
              asChild
              variant="secondary"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors border-2 border-white/20 text-lg font-semibold"
            >
              <a href="tel:0200000000">Bel direct: 020 000 0000</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
