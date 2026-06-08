import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { menuCategories } from "@/mocks/menu";
import StartersModal from "./StartersModal";
import FishModal from "./FishModal";
import MeatModal from "./MeatModal";
import VegetarianModal from "./VegetarianModal";
import KidsModal from "./KidsModal";
import DessertsModal from "./DessertsModal";

export default function MenuSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [startersOpen, setStartersOpen] = useState(false);
  const [fishOpen, setFishOpen] = useState(false);
  const [meatOpen, setMeatOpen] = useState(false);
  const [vegetarianOpen, setVegetarianOpen] = useState(false);
  const [kidsOpen, setKidsOpen] = useState(false);
  const [dessertsOpen, setDessertsOpen] = useState(false);

  const openCategory = (id: string) => {
    if (id === "starters") setStartersOpen(true);
    else if (id === "fish") setFishOpen(true);
    else if (id === "meat") setMeatOpen(true);
    else if (id === "vegetarian") setVegetarianOpen(true);
    else if (id === "kids") setKidsOpen(true);
    else if (id === "desserts") setDessertsOpen(true);
  };

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
    <section id="menu" ref={sectionRef} className="py-24 md:py-32 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block text-amber-700 text-sm md:text-base font-semibold tracking-widest uppercase mb-4" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
            {t("menu_label")}
          </span>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-stone-900 leading-tight mb-4" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
            {t("menu_title_1")}
            <br />
            <span className="text-amber-700">{t("menu_title_2")}</span>
          </h2>
          <p className="reveal text-stone-500 max-w-xl mx-auto" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
            {t("menu_subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((cat) => (
            <div
              key={cat.id}
              className="reveal group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-amber-200 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
            >
              {/* Image */}
              <div
                className="relative h-56 md:h-64 overflow-hidden cursor-pointer"
                onClick={() => openCategory(cat.id)}
              >
                <img
                  src={cat.image}
                  alt={t(cat.nameKey)}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-xl text-stone-900 font-semibold mb-1">{t(cat.nameKey)}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{t(cat.descKey)}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-400">
                    {t("menu_from")} <strong className="text-amber-700">{t(cat.priceKey)}</strong>
                  </span>
                  <button
                    className="text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap border border-stone-300 text-stone-700 hover:border-amber-600 hover:text-amber-700"
                    onClick={() => openCategory(cat.id)}
                  >
                    {t("menu_view")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <StartersModal isOpen={startersOpen} onClose={() => setStartersOpen(false)} offset={0} />
        <FishModal isOpen={fishOpen} onClose={() => setFishOpen(false)} offset={8} />
        <MeatModal isOpen={meatOpen} onClose={() => setMeatOpen(false)} offset={17} />
        <VegetarianModal isOpen={vegetarianOpen} onClose={() => setVegetarianOpen(false)} offset={22} />
        <KidsModal isOpen={kidsOpen} onClose={() => setKidsOpen(false)} offset={25} />
        <DessertsModal isOpen={dessertsOpen} onClose={() => setDessertsOpen(false)} offset={28} />

        {/* Decorative divider */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-xs bg-stone-200" />
          <i className="ri-restaurant-line text-amber-600 text-xl" />
          <div className="h-px flex-1 max-w-xs bg-stone-200" />
        </div>
      </div>
    </section>
  );
}