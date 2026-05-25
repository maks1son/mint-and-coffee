"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0D0A]/80 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-cormorant)] text-xl font-medium italic text-white tracking-wide"
        >
          mint <span className="text-[#E1A624] not-italic">&</span> coffee
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Атмосфера", href: "#gallery" },
            { label: "Где нас найти", href: "#location" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/50 hover:text-white/90 transition-colors tracking-wide font-[family-name:var(--font-dm-sans)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#location"
          className="text-sm font-[family-name:var(--font-dm-sans)] tracking-widest uppercase text-white/50 hover:text-[#87A987] transition-colors"
        >
          ↓ Адрес
        </a>
      </nav>
    </header>
  );
}
