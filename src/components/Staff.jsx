"use client"; // Necesario para habilitar el modo cliente

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import staffImages from "@/utils/staffImages";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Staff() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Animaciones al hacer scroll
  const titleControls = useAnimation();
  const carouselControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const titleElement = document.getElementById("staff-title");
      const carouselElement = document.getElementById("staff-carousel");

      if (titleElement?.getBoundingClientRect().top <= window.innerHeight * 0.8) {
        titleControls.start("visible");
      }
      if (carouselElement?.getBoundingClientRect().top <= window.innerHeight * 0.8) {
        carouselControls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [titleControls, carouselControls]);

  return (
    <section id="staff" className="bg-[#222222] py-20 text-center">
      {/* Título */}
      <motion.h4
        id="staff-title"
        initial="hidden"
        animate={titleControls}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        className="text-white text-4xl md:text-5xl font-bold uppercase mb-10"
      >
        Staff BasketCenter 2025
      </motion.h4>

      {/* Carrusel */}
      <motion.div
        id="staff-carousel"
        initial="hidden"
        animate={carouselControls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        className="relative max-w-6xl mx-auto px-4"
      >
        {/* Botones de navegación personalizados */}
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#e43920] text-white rounded-full shadow-md hover:bg-red-600 transition"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#e43920] text-white rounded-full shadow-md hover:bg-red-600 transition"
        >
          <FaChevronRight size={24} />
        </button>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 300, disableOnInteraction: false }}
          speed={1200}
          loop={true}
          grabCursor={true}
          allowTouchMove={true}
          onSwiper={setSwiperInstance} // Guarda la instancia de Swiper
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-lg"
        >
          {staffImages.map((image, index) => (
            <SwiperSlide key={index}>
              <StaffCard image={image} onClick={() => openModal(image)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Modal */}
      {modalOpen && selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </section>
  );
}

// Tarjeta del staff
function StaffCard({ image, onClick }) {
  return (
    <div
      className="relative bg-[#c54527] bg-opacity-10 backdrop-blur-md p-6 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
      onClick={onClick}
    >
      <div className="relative w-full h-80">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg"
          priority={false}
        />
      </div>
    </div>
  );
}

// Modal con imagen y experiencia profesional
function Modal({ image, onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 px-4 py-10"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-5xl bg-[#222222] rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]">

        {/* Imagen del staff */}
        <div className="md:w-1/2 flex items-center justify-center p-4">
          <Image
            src={image.src}
            alt={image.alt}
            width={950}
            height={950}
            className="object-cover rounded-lg w-full h-auto"
            priority={true}
          />
        </div>

        {/* Experiencia profesional */}
        {image.text && image.text.length > 0 && (
          <div className="md:w-1/2 p-6 text-white flex flex-col justify-start overflow-y-auto">
            <h3 className="text-2xl font-extrabold text-[#e43920] mb-4 uppercase text-left">
              Experiencia Profesional
            </h3>
            <ul className="text-lg text-left space-y-2">
              {image.text.map((item, index) => (
                <li key={index} className="opacity-90">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white text-[#c54527] text-3xl font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-[#c54527] hover:text-white transition-all duration-300 transform hover:scale-110 focus:outline-none"
          aria-label="Cerrar modal"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
