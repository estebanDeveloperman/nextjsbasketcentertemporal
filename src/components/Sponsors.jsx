// Sponsors.tsx
"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import sponsorsData from "@/utils/sponsors";
import "swiper/css";
import "swiper/css/free-mode";

const Sponsors = () => {
  return (
    <section id="sponsors" className="bg-[#222222] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-white mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#e43920]">Nuestros</span> Sponsors
        </motion.h2>
        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          slidesPerView="auto"
          loop={true}
          loopAdditionalSlides={10}
          spaceBetween={30}
          autoplay={{
            delay: 1, // Establece un retraso muy pequeño para que sea continuo
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // Evita que se detenga al pasar el mouse
          }}
          speed={5000} // Velocidad de desplazamiento
          allowTouchMove={false}
          className="pb-10"
        >
          {/* Duplicar los elementos para crear un efecto infinito más fluido */}
          {[...sponsorsData, ...sponsorsData].map((sponsor, index) => (
            <SwiperSlide key={index} className="!w-[350px] flex justify-center">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center w-full h-auto aspect-[16/9] cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={350}
                  height={155}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Sponsors;