import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="reveal inline-block text-amber-700 text-xs font-semibold tracking-widest uppercase mb-4" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
            {t("contact_label")}
          </span>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-stone-900 mb-3" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
            {t("contact_title")}
          </h2>
          <p className="reveal text-stone-500" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
            {t("contact_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info Column */}
          <div className="reveal flex flex-col gap-6" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 border border-stone-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 mb-4">
                <i className="ri-map-pin-line text-lg" />
              </div>
              <h4 className="font-semibold text-stone-900 mb-1">{t("contact_address_label")}</h4>
              <p className="text-stone-500 text-sm leading-relaxed">{t("contact_address")}</p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 border border-stone-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 mb-4">
                <i className="ri-phone-line text-lg" />
              </div>
              <h4 className="font-semibold text-stone-900 mb-1">{t("contact_phone_label")}</h4>
              <a
                href="tel:296442631"
                className="text-amber-700 font-semibold text-lg hover:text-amber-800 transition-colors cursor-pointer"
              >
                {t("contact_phone")}
              </a>
              <div className="mt-3">
                <a
                  href="tel:296442631"
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-phone-fill" />
                  {t("contact_call_cta")}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 border border-stone-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 mb-4">
                <i className="ri-time-line text-lg" />
              </div>
              <h4 className="font-semibold text-stone-900 mb-2">{t("contact_hours_label")}</h4>
              <p className="text-stone-600 text-sm">{t("contact_hours_1")}</p>
              <p className="text-stone-400 text-sm mt-1">{t("contact_hours_2")}</p>
            </div>
          </div>

          {/* Map Column */}
          <div className="reveal" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
            <div className="bg-white rounded-2xl overflow-hidden border border-stone-100 h-full min-h-[400px]">
              <iframe
                title="Cantinho do Cais - Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.344483733737!2d-25.32832822369666!3d37.77884841648083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc75f14659b8a925%3A0x89e02377c865b4c9!2sCantinho%20do%20Cais!5e0!3m2!1spt-PT!2spt!4v1715000000000!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}