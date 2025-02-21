"use client";
import Image from "next/image";
import storeData from "@/utils/store";
import ShopButton from "@/components/utils/ShopButton";

export default function TiendaPage() {
  return (
    <section className="bg-[#222222] py-20 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
          CENTER<span className="text-[#e43920]"> STORE</span>
        </h2>

        {/* Grid de productos */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {storeData.map((product, index) => (
            <div
              key={index}
              className="bg-[#ffffff] rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Imagen del producto */}
              <div className="relative w-full h-56">
                <Image
                  src={product.src}
                  alt={product.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                  priority={index < 3} // Prioriza las primeras 3 imágenes
                />
              </div>

              {/* Contenido */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-[#222222]">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-[#e43920] my-2">
                  S/. {product.price}
                </p>
                {/* <button className="bg-[#e43920] text-white py-2 px-4 rounded-lg hover:bg-[#c12f1b] transition duration-300"> */}
                <ShopButton />
                {/* </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
