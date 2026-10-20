import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

const LANGUAGES = [
  { code: "pt", label: "PT", flag: "/fotos-bandeiras-idiomas/pt.png" },
  { code: "en", label: "EN", flag: "/fotos-bandeiras-idiomas/gb.png" },
  { code: "de", label: "DE", flag: "/fotos-bandeiras-idiomas/de.png" },
];

export default function HeroSection() {
  const { t } = useTranslation();
  const titleRef = useRef<HTMLDivElement>(null);
  const [currentLang, setCurrentLang] = useState(i18n.language || "pt");

  useEffect(() => {
    const syncLang = (lng: string) => setCurrentLang(lng);
    i18n.on("languageChanged", syncLang);
    return () => i18n.off("languageChanged", syncLang);
  }, []);

  const handleLangChange = (code: string) => {
    i18n.changeLanguage(code);
  };

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    const timer = setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-amber-50/50 pt-24 pb-12 md:py-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/cantinho-do-cais-home.webp"
          alt="Cantinho do Cais - Restaurante em São Brás, Açores"
          className="w-full h-full object-contain md:object-cover object-center bg-amber-50/50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div ref={titleRef} className="relative z-10 w-full text-center px-4 md:px-8">
        
        {/* =========================================
            BLOCO SUPERIOR: Título, Data e Texto
            Puxado para CIMA no mobile (-mt-24)
            ========================================= */}
        <div className="-mt-14 md:mt-0">
          {/* Title */}
          <h1 className="font-serif text-white leading-none mb-3">
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              {t("hero_title_1")}
            </span>
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-amber-400">
              {t("hero_title_2")}
            </span>
          </h1>

          {/* Badge — below the restaurant name */}
          <div className="inline-flex items-center gap-2 border border-white/30 text-white/80 text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
            {t("hero_since")}
          </div>

          {/* Subtitle */}
          <p className="text-white/80 text-base md:text-xl font-light tracking-wide max-w-xl mx-auto mb-8 px-2">
            {t("hero_subtitle")}
          </p>
        </div>

        {/* =========================================
            BLOCO INFERIOR: Idiomas e CTAs
            Empurrado para BAIXO no mobile (mt-32)
            ========================================= */}
        <div className="mt-40 md:mt-0">
          {/* Language Buttons — visible above CTAs */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLangChange(lang.code)}
                aria-label={lang.label}
                className={`flex items-center gap-1.5 font-semibold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  currentLang === lang.code
                    ? "bg-amber-600 text-white shadow-sm"
                    : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm border border-white/30"
                }`}
              >
                <img src={lang.flag} alt={lang.label} className="w-5 h-auto rounded-sm object-cover" style={{ minWidth: "20px" }} />
                <span className="text-xs font-semibold">{lang.label}</span>
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              onClick={(e) => { e.preventDefault(); handleScroll("#menu"); }}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap text-sm tracking-wide hover:scale-105"
            >
              {t("hero_cta_menu")}
            </a>
            <a
              href="#reservations"
              onClick={(e) => { e.preventDefault(); handleScroll("#reservations"); }}
              className="border border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap text-sm tracking-wide backdrop-blur-sm hover:bg-white/10"
            >
              {t("hero_cta_reserve")}
            </a>
          </div>
        </div>

      </div>

      {/* Scroll Indicator — line only, no text */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/60">
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}