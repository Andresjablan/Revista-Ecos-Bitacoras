// import React, { useState, useEffect, useRef } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Keyboard } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// export default function GaleriaSatmun25() {
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   //  Atajos de teclado para lightbox
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!lightboxOpen) return;

//       switch (e.key) {
//         case "ArrowRight":
//           nextImage();
//           break;
//         case "ArrowLeft":
//           prevImage();
//           break;
//         case "Escape":
//           closeLightbox();
//           break;
//         default:
//           break;
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [lightboxOpen, currentIndex]);

//   const images = Array.from({ length: 40 }, (_, i) => `/images/GalSat25/st${i + 1}.JPG`);

//   const openLightbox = (index) => {
//     setCurrentIndex(index);
//     setLightboxOpen(true);
//   };

//   const closeLightbox = () => setLightboxOpen(false);
//   const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
//   const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <section
//       className="py-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
//       data-aos="fade-up"
//     >
//       {/*  Título  */}
//       <h2
//         className="text-4xl font-extrabold text-center mb-10 
//                    bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-cyan-400 dark:to-blue-500 
//                    bg-clip-text text-transparent drop-shadow-md"
//       >
//         GALERÍA SATMUN 2025
//       </h2>

//       {/*  Carrusel principal */}
//       <div className="max-w-6xl mx-auto px-4">
//         <Swiper
//           modules={[Navigation, Pagination, Keyboard]}
//           spaceBetween={15}
//           slidesPerView={3}
//           navigation
//           pagination={{ clickable: true }}
//           keyboard={{ enabled: true }} //  Flechas del teclado activadas
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="rounded-2xl shadow-md"
//         >
//           {images.map((src, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 data-aos="zoom-in"
//                 src={src}
//                 alt={`Foto ${index + 1}`}
//                 loading="lazy"
//                 onClick={() => openLightbox(index)}
//                 className="cursor-pointer w-full h-64 object-cover rounded-xl 
//                            border border-gray-300 dark:border-gray-700 
//                            hover:scale-105 transition-transform duration-300"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Lightbox con control por teclado */}
//       {lightboxOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center 
//                      bg-black/80 dark:bg-black/90 backdrop-blur-sm"
//           onClick={closeLightbox}
//         >
//           <div
//             className="relative max-w-4xl w-full mx-4"
//             onClick={(e) => e.stopPropagation()}
//             data-aos="zoom-in"
//           >
//             {/* Botón cerrar */}
//             <button
//               onClick={closeLightbox}
//               className="absolute top-4 right-4 text-white dark:text-gray-100 
//                          text-3xl font-bold p-2 rounded-full 
//                          bg-black/40 dark:bg-white/20 hover:bg-black/60 dark:hover:bg-white/30 
//                          transition-colors duration-300"
//             >
//               ✕
//             </button>

//             {/* Flecha izquierda */}
//             <button
//               onClick={prevImage}
//               className="absolute left-2 top-1/2 transform -translate-y-1/2 
//                          text-white text-4xl font-bold px-2 bg-black/30 
//                          rounded-full hover:bg-black/50 transition"
//             >
//               ‹
//             </button>

//             {/* Imagen */}
//             <img
//               src={images[currentIndex]}
//               alt={`Vista completa ${currentIndex + 1}`}
//               className="w-full max-h-[75vh] object-contain rounded-lg shadow-lg mx-auto"
//             />

//             {/* Flecha derecha */}
//             <button
//               onClick={nextImage}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 
//                          text-white text-4xl font-bold px-2 bg-black/30 
//                          rounded-full hover:bg-black/50 transition"
//             >
//               ›
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }



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

  // Atajos de teclado para lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "Escape":
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  // Bloquear scroll al abrir lightbox
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

  return (
    <section
      className="py-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      data-aos="fade-up"
    >
      {/*  Título  */}
      <h2
        className="text-4xl font-extrabold text-center mb-10 
                   bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-cyan-400 dark:to-blue-500 
                   bg-clip-text text-transparent drop-shadow-md"
      >
        GALERÍA SATMUN 2025
      </h2>

      {/*  Carrusel principal */}
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          spaceBetween={15}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-2xl shadow-md"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                data-aos="zoom-in"
                src={src}
                alt={`Foto ${index + 1}`}
                loading="lazy"
                onClick={() => openLightbox(index)}
                className="cursor-pointer w-full h-64 object-cover rounded-xl 
                           border border-gray-300 dark:border-gray-700 
                           hover:scale-105 transition-transform duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox con control por teclado */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center 
                     bg-black/80 dark:bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
          >
            {/* Botón cerrar */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white dark:text-gray-100 
                         text-3xl font-bold p-2 rounded-full 
                         bg-black/40 dark:bg-white/20 hover:bg-black/60 dark:hover:bg-white/30 
                         transition-colors duration-300"
            >
              ✕
            </button>

            {/* Flecha izquierda */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 
                         text-white text-4xl font-bold px-2 bg-black/30 
                         rounded-full hover:bg-black/50 transition"
            >
              ‹
            </button>

            {/* Imagen */}
            <img
              src={images[currentIndex]}
              alt={`Vista completa ${currentIndex + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg mx-auto"
            />

            {/* Flecha derecha */}
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 
                         text-white text-4xl font-bold px-2 bg-black/30 
                         rounded-full hover:bg-black/50 transition"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
