"use client";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

// Custom smooth scroll with fade effect and speed control (same as Header.js)
function handleSmoothScroll(id) {
  if (typeof window === "undefined") return;
  const target = document.getElementById(id);
  const pageContent = document.getElementById("page-content");
  if (!target) return;

  // Fade out
  if (pageContent) {
    pageContent.classList.add("fade-out");
  }

  setTimeout(() => {
    // Custom smooth scroll (700ms)
    const startY = window.scrollY;
    const endY = target.getBoundingClientRect().top + window.scrollY;
    const duration = 700;
    let startTime = null;

    function scrollStep(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 0.5 * (1 - Math.cos(Math.PI * progress)); // easeInOut
      window.scrollTo(0, startY + (endY - startY) * ease);
      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      } else {
        // Fade in
        if (pageContent) {
          pageContent.classList.remove("fade-out");
          pageContent.classList.add("fade-in");
          setTimeout(() => {
            pageContent.classList.remove("fade-in");
          }, 400);
        }
      }
    }
    window.requestAnimationFrame(scrollStep);
  }, 200); // fade out duration
}

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white"
    >
      <style>{`
        #page-content.fade-out {
          opacity: 0;
          transition: opacity 0.4s;
        }
        #page-content.fade-in {
          opacity: 1;
          transition: opacity 0.4s;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
              ✓ Erkend en gecertificeerd elektricien
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
              Meterkast vervangen door de specialist
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Uw meterkast verouderd of onveilig? Wij vervangen uw meterkast snel, veilig en conform de laatste normen. Scherpe prijzen vanaf €450.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Binnen 48 uur op locatie",
                "Conform alle veiligheidsnormen",
                "5 jaar garantie op materiaal en arbeid",
                "Vaste prijs, geen verrassingen",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="button"
                onClick={() => handleSmoothScroll("contact")}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 group"
              >
                Gratis offerte aanvragen
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
              <Button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4"
              >
                Bel direct: 020 000 0000
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
