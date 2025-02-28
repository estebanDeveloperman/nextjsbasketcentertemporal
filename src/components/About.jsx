"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const About = () => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const rect = document.getElementById("about-section")?.getBoundingClientRect();
            if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
                setInView(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Ejecutar inmediatamente para detectar si ya está en vista al cargar la página
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section id="about-section" className="bg-[#222222] py-20">
            <div className="container mx-auto flex flex-wrap justify-evenly items-center gap-6 max-w-screen-xl">
                {/* Sección de texto a la izquierda */}
                <article
                    className={`text-white max-w-md transform ${inView ? "animate-slide-left" : "opacity-0"}`}
                >
                    <h3 className="font-bitcrusher tracking-wide text-4xl font-semibold text-[#e43920] uppercase tracking-wider">
                        ¿QUIÉNES SOMOS?
                    </h3>
                    <h3 className="text-5xl font-bold my-4 font-bitcrusher tracking-wide">NUESTRO EQUIPO</h3>
                    <p className="text-xl text-white/90 leading-relaxed">
                        En Basketcenter, formamos jugadores con mentalidad ganadora. Nuestro compromiso es
                        brindar un entrenamiento de calidad, respaldado por entrenadores con amplia experiencia
                        nacional e internacional. Creemos en el trabajo duro, la disciplina y la pasión como
                        pilares del desarrollo de cada atleta. Competimos en las mejores ligas y preparamos a
                        nuestros jugadores para enfrentar cualquier desafío dentro y fuera de la cancha.
                    </p>
                </article>

                {/* Imagen a la derecha */}
                <div
                    className={`flex justify-center flex-1 max-w-lg transform ${inView ? "animate-slide-right" : "opacity-0"}`}
                >
                    {/* Imagen optimizada */}
                    <Image
                        src="https://storage.googleapis.com/la_liga_files/videos/foto_about_basketcenter-min.jpg"
                        alt="Nuestro Equipo"
                        width={600} // Ancho máximo recomendado
                        height={400} // Altura máxima recomendada
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px"
                        className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;