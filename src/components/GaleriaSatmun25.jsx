import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GaleriaSatmun25() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Atajos de teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "auto";
  }, [lightboxOpen]);

  // Supongamos que tienes fotos de ambos formatos
  const images = Array.from({ length: 40 }, (_, i) => `/images/GalSat25/st${i + 1}.JPG`);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
        GALERÍA SATMUN 2025
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-2xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div 
                className="overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={src}
                  alt={`Foto ${index + 1}`}
                  loading="lazy"
                  className="cursor-pointer w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox Adaptativo al Formato de Imagen */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md transition-all duration-300"
          onClick={closeLightbox}
        >
          {/* Contenedor Adaptativo */}
          <div
            className="relative flex items-center justify-center animate-in zoom-in duration-300 mx-4 max-w-[95vw] h-auto max-h-[90vh] transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar Minimalista y Adaptativo */}
            <button
              onClick={closeLightbox}
              className="absolute -top-10 right-0 md:-right-12 text-white hover:text-cyan-400 text-2xl transition-colors bg-black/30 md:bg-transparent p-2 md:p-0 rounded-full"
            >
              ✕
            </button>

            {/* Flechas de Navegación Estilizadas */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:-left-20 top-1/2 -translate-y-1/2 text-white text-5xl hover:scale-125 transition-transform bg-black/40 md:bg-transparent p-3 md:p-0 rounded-full sm:block"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 md:-right-20 top-1/2 -translate-y-1/2 text-white text-5xl hover:scale-125 transition-transform bg-black/40 md:bg-transparent p-3 md:p-0 rounded-full sm:block"
            >
              ›
            </button>

            {/* Contenedor de Imagen Central sin Restricción de Aspecto */}
            <div className="w-auto h-auto max-h-[85vh] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center transition-all">
              <img
                src={images[currentIndex]}
                alt={`Vista ${currentIndex + 1}`}
                className="w-auto h-auto max-w-[90vw] max-h-[80vh] object-contain rounded-2xl transition-all"
              />
            </div>
            
            {/* Contador inferior Adaptativo */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium transition-all">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
