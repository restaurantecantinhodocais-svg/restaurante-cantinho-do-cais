import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { galleryImages } from "@/mocks/gallery";

export default function GallerySection() {
  const { t, i18n } = useTranslation();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const getAlt = (img: typeof galleryImages[0]) => {
    const lang = i18n.language;
    if (lang === "de") return img.alt_de;
    if (lang === "en") return img.alt_en;
    return img.alt_pt;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "scale(1)";
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight" && lightbox !== null) {
        setLightbox((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
      }
      if (e.key === "ArrowLeft" && lightbox !== null) {
        setLightbox((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  // Build masonry-like grid: 3 columns
  const col1 = galleryImages.filter((_, i) => i % 3 === 0);
  const col2 = galleryImages.filter((_, i) => i % 3 === 1);
  const col3 = galleryImages.filter((_, i) => i % 3 === 2);

  const renderImage = (img: typeof galleryImages[0]) => (
    <div
      key={img.id}
      className="reveal group relative overflow-hidden rounded-xl cursor-pointer"
      style={{ opacity: 0, transform: "scale(0.95)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
      onClick={() => setLightbox(galleryImages.findIndex((g) => g.id === img.id))}
    >
      <img
        src={img.src}
        alt={getAlt(img)}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        style={{ minHeight: img.span === "tall" ? "320px" : "200px" }}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <i className="ri-zoom-in-line text-stone-800" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="reveal inline-block text-amber-700 text-xs font-semibold tracking-widest uppercase mb-4" style={{ opacity: 0, transform: "scale(0.95)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
            {t("gallery_label")}
          </span>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-stone-900 mb-3" style={{ opacity: 0, transform: "scale(0.95)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
            {t("gallery_title")}
          </h2>
          <p className="reveal text-stone-500 max-w-lg mx-auto" style={{ opacity: 0, transform: "scale(0.95)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
            {t("gallery_subtitle")}
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="hidden md:grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">{col1.map(renderImage)}</div>
          <div className="flex flex-col gap-4">{col2.map(renderImage)}</div>
          <div className="flex flex-col gap-4">{col3.map(renderImage)}</div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {galleryImages.map(renderImage)}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
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
            onClick={(e) => { e.stopPropagation(); setLightbox((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null)); }}
          >
            <i className="ri-arrow-left-s-line text-3xl" />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={getAlt(galleryImages[lightbox])}
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setLightbox((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null)); }}
          >
            <i className="ri-arrow-right-s-line text-3xl" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightbox + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}