import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { testimonials } from "@/mocks/testimonials";

export default function TestimonialsSection() {
  const { t, i18n } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const getText = (item: typeof testimonials[0]) => {
    const lang = i18n.language;
    if (lang === "de") return item.text_de;
    if (lang === "en") return item.text_en;
    return item.text_pt;
  };

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  });

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

  const item = testimonials[current];

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="reveal relative" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
            <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] bg-amber-50">
              <img
                src={item.avatar}
                alt={item.name}
                className={`w-full h-full object-cover object-top transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent" />
            </div>
            {/* Rating badge */}
            <div className="absolute top-5 left-5 bg-white rounded-xl px-4 py-3 shadow-sm">
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map((s) => (
                  <i key={s} className="ri-star-fill text-amber-500 text-sm" />
                ))}
              </div>
              <p className="text-stone-700 text-xs font-semibold">5.0 / 5.0</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col gap-6">
            <div className="reveal" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
              <span className="inline-block text-amber-700 text-xs font-semibold tracking-widest uppercase mb-4">
                {t("testimonials_label")}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                {t("testimonials_title_1")}
                <br />
                <span className="text-stone-400">{t("testimonials_title_2")}</span>
              </h2>
            </div>

            {/* Quote */}
            <div
              className={`reveal transition-all duration-300 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
              style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
            >
              <i className="ri-double-quotes-l text-5xl text-amber-200 leading-none" />
              <p className="text-stone-700 text-lg leading-relaxed mt-2 mb-6">
                {getText(item)}
              </p>
            </div>

            {/* Navigation */}
            <div className="reveal flex items-center gap-4 pt-2" style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
              <button
                onClick={prev}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-stone-300 text-stone-600 hover:border-amber-600 hover:text-amber-700 transition-all cursor-pointer"
                aria-label={t("testimonials_prev")}
              >
                <i className="ri-arrow-left-s-line text-xl" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-stone-900 text-white hover:bg-amber-700 transition-all cursor-pointer"
                aria-label={t("testimonials_next")}
              >
                <i className="ri-arrow-right-s-line text-xl" />
              </button>
              {/* Dots */}
              <div className="flex items-center gap-2 ml-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      i === current ? "w-6 h-2 bg-amber-600" : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}