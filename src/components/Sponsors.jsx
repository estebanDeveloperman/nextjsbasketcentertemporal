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
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          loopAdditionalSlides={sponsorsData.length} // Mantiene el loop fluido
          spaceBetween={20}
          autoplay={{
            delay: 1, // Movimiento continuo sin pausas
            disableOnInteraction: false, // No se detiene con clics
            pauseOnMouseEnter: false, // No se detiene al pasar el mouse
          }}
          speed={2500} // Hace que el carrusel se mueva lentamente y sin cortes
          allowTouchMove={false} // Bloquea el control manual del usuario
          breakpoints={{
            640: { slidesPerView: "auto" },
            768: { slidesPerView: "auto" },
            1024: { slidesPerView: "auto" },
            1280: { slidesPerView: "auto" },
          }}
          className="pb-10"
        >
          {[...sponsorsData, ...sponsorsData].map((sponsor, index) => (
            <SwiperSlide key={index} className="flex justify-center !w-[300px] !h-[160px]">
              <motion.div
                className="p-4 rounded-lg flex justify-center items-center w-[300px] h-[160px] cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={300}
                  height={160}
                  className="w-[300px] h-[160px] object-contain"
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
