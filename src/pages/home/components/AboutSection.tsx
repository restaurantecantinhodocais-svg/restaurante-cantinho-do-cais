import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
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
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { numKey: "about_stat_1_num", labelKey: "about_stat_1_label" },
    { numKey: "about_stat_2_num", labelKey: "about_stat_2_label" },
    { numKey: "about_stat_3_num", labelKey: "about_stat_3_label" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative reveal" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
            <div className="relative rounded-2xl overflow-hidden h-[500px] md:h-[600px]">
              <img
                src="/sr-jorge-historia.png"
                alt="Sala de Refeições do Cantinho do Cais"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl p-5 shadow-lg max-w-[200px]">
              <div className="flex items-center gap-1 mb-2">
                {[1,2,3,4,5].map((s) => (
                  <i key={s} className="ri-star-fill text-amber-500 text-sm" />
                ))}
              </div>
              <p className="text-stone-700 text-xs font-medium leading-relaxed">"{t("about_quote_text")}"</p>
              
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col gap-6">
            <div className="reveal" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
              <span className="inline-block border border-amber-600 text-amber-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                {t("about_label")}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                {t("about_title_1")}
                <br />
                <span className="text-amber-700">{t("about_title_2")}</span>
              </h2>
            </div>

            <div className="reveal space-y-4" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
              <p className="text-stone-600 leading-relaxed">{t("about_p1")}</p>
              <p className="text-stone-600 leading-relaxed">{t("about_p2")}</p>
              <p className="text-stone-600 leading-relaxed">{t("about_p3")}</p>
              <p className="text-stone-600 leading-relaxed">{t("about_p4")}</p>
            </div>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-4 pt-4" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
              {stats.map((stat) => (
                <div key={stat.numKey} className="text-center p-4 bg-white rounded-xl border border-stone-100">
                  <p className="font-serif text-3xl font-bold text-amber-700">{t(stat.numKey)}</p>
                  <p className="text-stone-500 text-xs mt-1 leading-tight">{t(stat.labelKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
