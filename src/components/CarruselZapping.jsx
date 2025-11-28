
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CarruselZapping() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    "https://www.youtube.com/embed/OBOIkWUYqfk",
    "https://www.youtube.com/embed/0hdNPiY-zR0",
    "https://www.youtube.com/embed/Dj0H9ZPVL1g",
    "https://www.youtube.com/embed/WGIx4YJMCwY",
    "https://www.youtube.com/embed/JKW5BfQhY5A",
    "https://www.youtube.com/embed/3fSf_TPp3ng",
  ];

  return (
    <section className="py-12 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100"
        >
          🎬 Zapping
        </h2>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
          className="pb-10"
        >
          {videos.map((url, index) => (
            <SwiperSlide key={index}>
              <div
                data-aos="zoom-in"
                onClick={() => setSelectedVideo(url)}
                className="aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 cursor-pointer transition-all duration-300"
              >
                <iframe
                  className="w-full h-full pointer-events-none"
                  src={`${url}?controls=0`}
                  title={`Zapping Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal con animación suave (fade + scale) */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-[90%] md:w-[50%] aspect-video rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src={`${selectedVideo}?autoplay=1`}
                title="Zapping Video Reproducido"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Botón de cerrar */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full hover:bg-red-600 transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
