import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const starters = [
  {
    id: "camarao",
    nameKey: "dish_camarao",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/140877c2-6537-4bf7-8f3a-7a599d361a13_1780830613395.png?v=749eacdf2943bbf9447c670fc4e19f29",
  },
  {
    id: "favas-guisadas",
    nameKey: "dish_favas_guisadas",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/7c635e18-7db8-4d88-97e2-ffbd00b3d511_1780830727593.png?v=fa5718db7219efba0eda3276e78388b7",
  },
  {
    id: "iscas-de-aturn",
    nameKey: "dish_iscas_atum",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/187e7e08-5e57-4aab-ae92-57a826d4db07_IMG_20260605_224409.png?v=5fe462ec526c794d102d89c8aa921a84",
  },
  {
    id: "lapas-grelhadas",
    nameKey: "dish_lapas_grelhadas",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/d29a1e40-e8ae-4ee3-8403-25712066371b_1780833731713.png?v=129b720fe175a07c29ebb02820c37bc3",
  },
  {
    id: "mexilhoes-grelhados",
    nameKey: "dish_mexilhoes_grelhados",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/c1c7c2a2-531c-4f92-9f6e-6fdbb1fd205b_1780769623691.png?v=a0d41805f21493ac156fbc2da011cbf2",
  },
  {
    id: "queijo-curado",
    nameKey: "dish_queijo_curado",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/fe3be4a7-df5c-48da-a626-f7f15bd412cf_1780834028018.png?v=1fbffec8ef565b3769cd68f04f5f40db",
  },
  {
    id: "queijo-fresco",
    nameKey: "dish_queijo_fresco",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/cb28b13c-e780-4be8-836c-0eb7b65ccb49_1780833608655.png?v=6e56e5f65ed631d02dcfcb1ad27bd1ee",
  },
  {
    id: "sopa-de-peixe",
    nameKey: "dish_sopa_peixe",
    image: "https://storage.readdy-site.link/project_files/9aa1dc26-bdac-4eb1-9493-30950be68091/7b7a843f-c74b-449f-acce-71332d5cf893_1780833157765.png?v=950f90f4b027282bd3bf88d524606c4e",
  },
];

interface StartersModalProps {
  isOpen: boolean;
  onClose: () => void;
  offset: number;
}

export default function StartersModal({ isOpen, onClose, offset }: StartersModalProps) {
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
        setLightbox((prev) => (prev !== null ? (prev + 1) % starters.length : null));
      }
      if (e.key === "ArrowLeft" && lightbox !== null) {
        setLightbox((prev) => (prev !== null ? (prev - 1 + starters.length) % starters.length : null));
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
                {t("menu_cat_starters")}
              </span>
              <h2 className="font-serif text-2xl text-stone-900 mt-0.5">{t("modal_starters_title")}</h2>
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
              {starters.map((item, index) => (
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
                  <div className="p-4">
                    <h3 className="font-serif text-lg text-stone-900 font-semibold text-center">{index + offset + 1} - {t(item.nameKey)}</h3>
                    {item.id === "iscas-de-aturn" && (
                      <p className="text-stone-400 text-xs mt-1 text-center">{t("dish_note_sob_consulta")}</p>
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
              setLightbox((prev) => (prev !== null ? (prev - 1 + starters.length) % starters.length : null));
            }}
          >
            <i className="ri-arrow-left-s-line text-3xl" />
          </button>
          <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={starters[lightbox].image}
              alt={t(starters[lightbox].nameKey)}
              className="max-h-[75vh] max-w-full rounded-xl object-contain"
            />
            <p className="font-serif text-white text-xl font-semibold">{lightbox + offset + 1} - {t(starters[lightbox].nameKey)}</p>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) => (prev !== null ? (prev + 1) % starters.length : null));
            }}
          >
            <i className="ri-arrow-right-s-line text-3xl" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightbox + 1} / {starters.length}
          </div>
        </div>
      )}
    </>
  );
}
