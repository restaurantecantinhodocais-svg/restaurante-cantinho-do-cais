import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const fishDishes = [
  {
    id: "atum",
    nameKey: "dish_atum",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/2c4a9e48-a4cf-4434-9854-d4d9a76e1219_IMG_20260605_224316.png?v=0a711b00d559cd99444600ea7b59353b",
  },
  {
    id: "bacalhau",
    nameKey: "dish_bacalhau",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/1e3ff7bd-70fe-4ac1-b8a3-a67349936eb4_1780763955871.png?v=06c9a87b08403e5652c6b63d39559e17",
  },
  {
    id: "chicharros-fritos",
    nameKey: "dish_chicharros_fritos",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/b3d1a0c9-a9a0-4262-8707-b7b1b653ee96_IMG_20260605_224151.png?v=370437f698ad48eddaf32c2d88bcbf7f",
  },
  {
    id: "filetes-fritos",
    nameKey: "dish_filetes_fritos",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/3c027cbb-fcdf-40eb-b7ee-f2f7b809559f_IMG_20260605_224208.png?v=96b86ce7c30aec0cd63425ccd8056cb6",
  },
  {
    id: "lulas",
    nameKey: "dish_lulas",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/1a64e05e-8553-4196-acf9-ef3eea39db2f_IMG_20260605_224342.png?v=b90924936aa6e8dd0c96352daeb377bd",
  },
  {
    id: "molho-de-peixe",
    nameKey: "dish_molho_peixe",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/6a1b793d-e533-4d43-9cf3-36b98690e635_1780760999362.png?v=091850f118b8988017c7c983d0924e42",
  },
  {
    id: "peixe-grelhado",
    nameKey: "dish_peixe_grelhado",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/d7f1840e-cb6d-4260-81d9-acb972d31e3c_IMG_20260605_224246.png?v=6a55255c77ce8a1448dc37ed02d89b00",
  },
  {
    id: "polvo-assado",
    nameKey: "dish_polvo_assado",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/b0e28b5e-dad3-45a3-be03-8ae229e39d54_IMG_20260606_144905.png?v=d20aa6668f3dda003727d2950df0510a",
  },
  {
    id: "polvo-guisado",
    nameKey: "dish_polvo_guisado",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/04b5914f-0fe3-4ca3-bdb7-9e6efa170370_IMG_20260606_144940.png?v=ec68f37cdb04dcbfadb382b8b7e3212f",
  },
];

interface FishModalProps {
  isOpen: boolean;
  onClose: () => void;
  offset: number;
}

export default function FishModal({ isOpen, onClose, offset }: FishModalProps) {
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
        setLightbox((prev) => (prev !== null ? (prev + 1) % fishDishes.length : null));
      }
      if (e.key === "ArrowLeft" && lightbox !== null) {
        setLightbox((prev) => (prev !== null ? (prev - 1 + fishDishes.length) % fishDishes.length : null));
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
          className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: "modalIn 0.3s ease" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
            <div>
              <span className="text-amber-700 text-xs font-semibold tracking-widest uppercase">
                {t("menu_cat_fish")}
              </span>
              <h2 className="font-serif text-2xl text-stone-900 mt-0.5">{t("modal_fish_title")}</h2>
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
              {fishDishes.map((item, index) => (
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
                    {item.id === "polvo-assado" && (
                      <p className="text-stone-400 text-xs mt-1 text-center">{t("dish_note_por_encomenda")}</p>
                    )}
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
              setLightbox((prev) => (prev !== null ? (prev - 1 + fishDishes.length) % fishDishes.length : null));
            }}
          >
            <i className="ri-arrow-left-s-line text-3xl" />
          </button>
          <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={fishDishes[lightbox].image}
              alt={t(fishDishes[lightbox].nameKey)}
              className="max-h-[75vh] max-w-full rounded-xl object-contain"
            />
            <p className="font-serif text-white text-xl font-semibold">{lightbox + offset + 1} - {t(fishDishes[lightbox].nameKey)}</p>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) => (prev !== null ? (prev + 1) % fishDishes.length : null));
            }}
          >
            <i className="ri-arrow-right-s-line text-3xl" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightbox + 1} / {fishDishes.length}
          </div>
        </div>
      )}
    </>
  );
}
