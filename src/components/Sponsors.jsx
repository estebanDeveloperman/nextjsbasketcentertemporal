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
          className="text-4xl md:text-5xl font-bold text-left text-white mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#e43920]">Nuestros</span> Sponsors
        </motion.h2>

        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          slidesPerView={2}
          loop={true}
          loopAdditionalSlides={10}
          spaceBetween={20}
          autoplay={{
            delay: 0, // Sin pausas
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={2000} // Velocidad ajustada para desplazamiento fluido
          allowTouchMove={false} // Evita que el usuario lo detenga
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="pb-10"
        >
          {[...sponsorsData, ...sponsorsData].map((sponsor, index) => (
            <SwiperSlide key={index} className="!w-[180px] flex justify-center">
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center w-full h-auto aspect-[16/9] cursor-pointer"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={180}
                  height={90}
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
