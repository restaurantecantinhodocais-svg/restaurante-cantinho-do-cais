import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

const LANGUAGES = [
  { code: "pt", label: "PT", flag: "/Fotos Bandeiras Idiomas/pt.png" },
  { code: "en", label: "EN", flag: "/Fotos Bandeiras Idiomas/gb.png" },
  { code: "de", label: "DE", flag: "/Fotos Bandeiras Idiomas/de.png" },
];

const NAV_LINKS = [
  { key: "nav_home", href: "#hero" },
  { key: "nav_about", href: "#about" },
  { key: "nav_menu", href: "#menu" },
  { key: "nav_gallery", href: "#gallery" },
  { key: "nav_testimonials", href: "#testimonials" },
  { key: "nav_contact", href: "#contact" },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language || "pt");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncLang = (lng: string) => setCurrentLang(lng);
    i18n.on("languageChanged", syncLang);
    return () => i18n.off("languageChanged", syncLang);
  }, []);

  const handleLangChange = (code: string) => {
    i18n.changeLanguage(code);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="/logo-cantinho-do-cais_sem_fundo.png"
            alt="Cantinho do Cais"
            className="h-14 w-auto object-contain"
          />
          <span
            className={`font-semibold text-base tracking-wide whitespace-nowrap transition-colors duration-300 ${
              scrolled ? "text-stone-800" : "text-white"
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cantinho do Cais
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer whitespace-nowrap relative group ${
                scrolled ? "text-stone-700 hover:text-amber-700" : "text-white/90 hover:text-white"
              }`}
            >
              {t(link.key)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center gap-1.5">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLangChange(lang.code)}
                aria-label={lang.label}
                className={`flex items-center justify-center gap-1.5 font-semibold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  currentLang === lang.code
                    ? "bg-amber-600 text-white shadow-sm"
                    : scrolled
                    ? "bg-stone-100 text-stone-600 hover:bg-amber-50 hover:text-amber-700"
                    : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm"
                }`}
              >
                <img src={lang.flag} alt={lang.label} className="w-5 h-auto rounded-sm object-cover" style={{ minWidth: "20px" }} />
                <span className="text-xs font-semibold">{lang.label}</span>
              </button>
            ))}
          </div>

          {/* Reserve CTA - Call directly */}
          <a
            href="tel:296442631"
            className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
          >
            <i className="ri-phone-line" />
            {t("nav_reserve")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden w-10 h-10 flex items-center justify-center cursor-pointer ${
            scrolled ? "text-stone-700" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <i className={`text-xl ${mobileOpen ? "ri-close-line" : "ri-menu-3-line"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-stone-900/95 backdrop-blur-md`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-white font-medium py-2 border-b border-white/20 cursor-pointer"
            >
              {t(link.key)}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLangChange(lang.code)}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                  currentLang === lang.code
                    ? "bg-amber-600 text-white border-amber-600"
                    : "text-white border-white/40 hover:border-amber-400"
                }`}
              >
                <img src={lang.flag} alt={lang.label} className="w-5 h-auto rounded-sm object-cover" style={{ minWidth: "20px" }} />
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
          <a
            href="tel:296442631"
            className="bg-amber-600 text-white text-center font-semibold py-3 rounded-full cursor-pointer whitespace-nowrap mt-1 inline-flex items-center justify-center gap-2"
          >
            <i className="ri-phone-line" />
            {t("nav_reserve")}
          </a>
        </div>
      </div>
    </nav>
  );
}