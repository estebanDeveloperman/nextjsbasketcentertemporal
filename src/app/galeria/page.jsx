"use client";
import { useState } from "react";
import Image from "next/image";
import galleryData from "@/utils/professionalGallery";

const categories = [
  { key: "liga", label: "Liga de Lima" },
  { key: "nacional", label: "Nacional" },
  { key: "internacional", label: "Internacional" },
  { key: "campeonatos", label: "Campeonatos" },
  { key: "basketcenter", label: "Videos" },
];

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("liga");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="galeria" className="bg-[#222222] py-20 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título */}
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          <span className="text-[#e43920]">GALERÍA</span> BASKETCENTER
        </h2>

        {/* Tabs de Categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-5 py-2 rounded-lg font-semibold transition-all ${selectedCategory === key
                ? "bg-[#e43920] text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Galería de Imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryData[selectedCategory].map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="object-cover w-full h-60 transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Imagen */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-3 -right-3 text-white text-2xl bg-black/70 hover:bg-black/90 p-2 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width || 800} // Mantiene tamaño original si está disponible
              height={selectedImage.height || 600}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
