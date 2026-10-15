import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const meatDishes = [
  {
    id: "assaduras",
    nameKey: "dish_assaduras",
    image: "/fotos-pratos-de-carne/assaduras-pratos-de-carne.webp",
  },
  {
    id: "bifanas",
    nameKey: "dish_bifanas",
    image: "/fotos-pratos-de-carne/bifanas-pratos-de-carne.webp",
  },
  {
    id: "bife-de-novilho",
    nameKey: "dish_bife_novilho",
    image: "/fotos-pratos-de-carne/bife-de-novilho-pratos-de-carne.webp",
  },
  {
    id: "lombinhos",
    nameKey: "dish_lombinhos",
    image: "/fotos-pratos-de-carne/lombinhos-pratos-de-carne.webp",
  },
  {
    id: "peito-de-frango",
    nameKey: "dish_peito_frango",
    image: "/fotos-pratos-de-carne/peitos-de-frango-pratos-de-carne.webp",
  },
];

interface MeatModalProps {
  isOpen: boolean;
  onClose: () => void;
  offset: number;
}

export default function MeatModal({ isOpen, onClose, offset }: MeatModalProps) {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox !== null) {
          setLightbox(null);
        } else {
          onClose();
        }
      }
      if (e.key === "ArrowRight" && lightbox !== null) {
        setLightbox((prev) => (prev !== null ? (prev + 1) % meatDishes.length : null));
      }
      if (e.key === "ArrowLeft" && lightbox !== null) {
        setLightbox((prev) => (prev !== null ? (prev - 1 + meatDishes.length) % meatDishes.length : null));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: "modalIn 0.3s ease" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
            <div>
              <span className="text-amber-700 text-xs font-semibold tracking-widest uppercase">
                {t("menu_cat_meat")}
              </span>
              <h2 className="font-serif text-2xl text-stone-900 mt-0.5">{t("modal_meat_title")}</h2>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-stone-200 text-stone-500 hover:border-amber-400 hover:text-amber-700 transition-all cursor-pointer"
            >
              <i className="ri-close-line text-lg" />
            </button>
          </div>

          {/* Grid */}
          <div className="overflow-y-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {meatDishes.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-amber-50/50 rounded-xl overflow-hidden border border-stone-100 hover:border-amber-200 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group"
                  onClick={() => setLightbox(index)}
                >
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={t(item.nameKey)}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <i className="ri-zoom-in-line text-stone-800 text-sm" />
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-serif text-base text-stone-900 font-semibold text-center">
                      {index + offset + 1} - {t(item.nameKey)}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-stone-100 flex items-center justify-between bg-amber-50/30">
            <p className="text-stone-400 text-xs">
              <i className="ri-information-line mr-1" />
              {t("modal_availability")}
            </p>
            <button
              onClick={onClose}
              className="text-sm font-semibold px-5 py-2 rounded-full bg-amber-700 text-white hover:bg-amber-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              {t("modal_close")}
            </button>
          </div>
        </div>

        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.96) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <i className="ri-close-line text-2xl" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) => (prev !== null ? (prev - 1 + meatDishes.length) % meatDishes.length : null));
            }}
          >
            <i className="ri-arrow-left-s-line text-3xl" />
          </button>
          <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={meatDishes[lightbox].image}
              alt={t(meatDishes[lightbox].nameKey)}
              className="max-h-[75vh] max-w-full rounded-xl object-contain"
            />
            <p className="font-serif text-white text-xl font-semibold">{lightbox + offset + 1} - {t(meatDishes[lightbox].nameKey)}</p>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) => (prev !== null ? (prev + 1) % meatDishes.length : null));
            }}
          >
            <i className="ri-arrow-right-s-line text-3xl" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightbox + 1} / {meatDishes.length}
          </div>
        </div>
      )}
    </>
  );
}