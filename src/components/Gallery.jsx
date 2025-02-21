"use client";
import Image from "next/image";
import galleryData from "@/utils/gallery.json";

export default function Gallery() {
    return (
        <section id="galeria" className="bg-[#222222] py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-10 uppercase tracking-wide">
                    Galería de <span className="text-[#e43920]">BasketCenter</span>
                </h2>

                {/* Contenedor de la galería con Grid Layout */}
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {galleryData.map((image, index) => (
                        <div
                            key={index}
                            className="relative w-full overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover w-full h-auto rounded-xl"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
