"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Bolt, Phone } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Diensten", id: "diensten" },
  { label: "Voordelen", id: "voordelen" },
  { label: "Werkproces", id: "proces" },
  { label: "Contact", id: "contact" },
];

// Custom smooth scroll with fade effect and speed control
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuWrapperRef = useRef(null);

  // Close menu on outside click or ESC
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e) {
      if (
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
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
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              {/* Zap Icon */}
              <Bolt className="lucide lucide-zap w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <div className="text-blue-600">Klusbedrijf van der Groef</div>
              <div className="text-xs text-gray-600">Meterkast Specialist</div>
            </div>
          </div>
          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => handleSmoothScroll(link.id)}
                aria-label={link.label}
              >
                {link.label}
              </button>
            ))}
          </nav>
          {/* Contact and CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              {/* Phone Icon */}
              <Phone className="lucide lucide-phone w-4 h-4" aria-hidden="true" />
              <span>020 000 0000</span>
            </div>
            <Button
              type="button"
              onClick={() => handleSmoothScroll("contact")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3"
            >
              Offerte aanvragen
            </Button>
          </div>
          {/* Mobile menu button and dropdown */}
          <div className="lg:hidden relative" ref={menuWrapperRef}>
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6" aria-hidden="true">
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </button>
            {menuOpen && (
              <div
                className="fixed left-0 right-0 top-[64px] z-50 bg-white border-t border-gray-200 shadow-lg animate-fade-in lg:hidden"
                style={{ minHeight: "calc(100vh - 64px)" }}
              >
                <nav className="flex flex-col py-2 px-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      type="button"
                      className="text-left px-5 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      onClick={() => {
                        handleSmoothScroll(link.id);
                        setMenuOpen(false);
                      }}
                      aria-label={link.label}
                    >
                      {link.label}
                    </button>
                  ))}
                  <hr className="my-1" />
                  <div className="px-5 py-2 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="lucide lucide-phone w-4 h-4" aria-hidden="true" />
                      <span>020 000 0000</span>
                    </div>
                    <Button
                      type="button"
                      className="w-full mt-2"
                      onClick={() => {
                        handleSmoothScroll("contact");
                        setMenuOpen(false);
                      }}
                    >
                      Offerte aanvragen
                    </Button>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
