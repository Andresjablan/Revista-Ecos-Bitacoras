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

  const images = Array.from({ length: 40 }, (_, i) => `/images/GalSat25/st${i + 1}.JPG`);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Lógica de precarga
  const nextIdx = (currentIndex + 1) % images.length;
  const prevIdx = (currentIndex - 1 + images.length) % images.length;

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
          breakpoints={{ 320: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="rounded-2xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-800" onClick={() => openLightbox(index)}>
                <img src={src} alt={`Foto ${index + 1}`} loading="lazy" className="cursor-pointer w-full h-80 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox Estilo Reel con Flechas Limpias */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md" onClick={closeLightbox}>
          
          {/* Precarga Invisible */}
          <link rel="preload" as="image" href={images[nextIdx]} />
          <link rel="preload" as="image" href={images[prevIdx]} />

          <div className="relative flex items-center justify-center animate-in fade-in zoom-in duration-300 mx-4 transition-all" onClick={(e) => e.stopPropagation()}>
            
            {/* Botón Cerrar Simple */}
            <button onClick={closeLightbox} className="absolute -top-12 -right-2 text-white/50 hover:text-white text-3xl transition-colors">✕</button>

            {/* Contenedor de Imagen y Flechas */}
            <div className="relative group w-fit h-fit transition-all flex items-center">
              
              {/* Flecha Izquierda (Solo el carácter) */}
              <button
                onClick={prevImage}
                className="absolute -left-12 md:-left-16 z-20 text-white/40 hover:text-white text-7xl font-thin transition-all hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] hidden sm:block"
              >
                ‹
              </button>

              <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-black">
                <img
                  key={currentIndex} // Clave para reiniciar animación de entrada al cambiar foto
                  src={images[currentIndex]}
                  alt={`Vista ${currentIndex + 1}`}
                  className="w-auto h-auto max-w-[90vw] max-h-[80vh] object-contain animate-in fade-in duration-500"
                />
              </div>

              {/* Flecha Derecha (Solo el carácter) */}
              <button
                onClick={nextImage}
                className="absolute -right-12 md:-right-16 z-20 text-white/40 hover:text-white text-7xl font-thin transition-all hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] hidden sm:block"
              >
                ›
              </button>
            </div>
            
            {/* Contador */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase font-bold">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
