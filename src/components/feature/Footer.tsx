import { useTranslation } from "react-i18next";

const NAV_LINKS = [
  { key: "nav_home", href: "#hero" },
  { key: "nav_about", href: "#about" },
  { key: "nav_menu", href: "#menu" },
  { key: "nav_gallery", href: "#gallery" },
  { key: "nav_testimonials", href: "#testimonials" },
  { key: "nav_contact", href: "#contact" },
];

export default function Footer() {
  const { t } = useTranslation();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/logo-cantinho-do-cais-sem-fundo.png"
              alt="Cantinho do Cais"
              className="h-48 w-auto object-contain mb-4"
            />
            <p className="text-stone-400 text-sm leading-relaxed">{t("footer_tagline")}</p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="tel:296442631"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-stone-700 text-stone-400 hover:text-amber-500 hover:border-amber-500 transition-colors cursor-pointer"
              >
                <i className="ri-phone-line text-sm" />
              </a>
              <span
                className="w-9 h-9 flex items-center justify-center rounded-full border border-stone-700 text-stone-400 cursor-default"
                title="Email em breve"
              >
                <i className="ri-mail-line text-sm" />
              </span>
              <span
                className="w-9 h-9 flex items-center justify-center rounded-full border border-stone-700 text-stone-400 cursor-default"
                title="Facebook em breve"
              >
                <i className="ri-facebook-line text-sm" />
              </span>
              <span
                className="w-9 h-9 flex items-center justify-center rounded-full border border-stone-700 text-stone-400 cursor-default"
                title="Instagram em breve"
              >
                <i className="ri-instagram-line text-sm" />
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}>{t("footer_nav_title")}</a>
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-stone-400 hover:text-amber-500 text-sm transition-colors cursor-pointer"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div id="contact">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              {t("footer_info_title")}
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line mt-0.5 text-amber-500" />
                <span>{t("contact_address")}</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-amber-500" />
                <a href="tel:296442631" className="hover:text-amber-500 transition-colors cursor-pointer">296 442 631</a>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-time-line mt-0.5 text-amber-500" />
                <div>
                  <p>{t("contact_hours_1")}</p>
                  <p>{t("contact_hours_2")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col items-center sm:items-start text-stone-500 text-xs gap-1">
            <p>{t("footer_copyright")}</p>
            <p>{t("footer_developed_by")}</p>
          </div>
          <div className="flex items-center gap-4 text-xs text-stone-500">
            <a href="#" rel="nofollow" className="hover:text-amber-500 transition-colors cursor-pointer">{t("footer_privacy")}</a>
            <span>·</span>
            <a href="#" rel="nofollow" className="hover:text-amber-500 transition-colors cursor-pointer">{t("footer_terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}