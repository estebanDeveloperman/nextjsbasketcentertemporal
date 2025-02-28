"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const messages = [
    "BASKETCENTER: EXPERIENCIA, COMPETENCIA Y PASIÓN",
    "ENTRENA COMO UN PROFESIONAL, COMPITE CON LOS MEJORES",
    "MEJORA TU TÉCNICA, PERFECCIONA TU JUEGO",
];

export default function Main() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex items-center justify-center h-screen text-white text-center bg-black" style={{ marginTop: "86px !important" }}>
            {/* Video de fondo */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
                autoPlay
                loop
                muted
                preload="metadata"
            >
                <source src="https://storage.googleapis.com/la_liga_files/videos/video_bg_basket.mp4" type="video/mp4" />
                <source src="/videos/video_bg_basket.mp4" type="video/mp4" />
            </video>

            {/* Overlay Oscuro */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Contenido */}
            <div className="relative z-10 max-w-4xl mt-[-50px]">
                <h1 className="text-4xl font-semibold tracking-wide opacity-100 drop-shadow-[3px_3px_8px_rgba(0,0,0,0.7)]">
                    SOMOS BASKETCENTER
                </h1>

                <motion.h2
                    key={index} // Clave para forzar re-render en cada cambio de mensaje
                    className="text-4xl md:text-6xl font-bold uppercase mt-4 drop-shadow-[3px_3px_8px_rgba(0,0,0,0.7)]"
                    initial={{ opacity: 0, x: 50 }} // Comienza fuera de pantalla a la derecha
                    animate={{ opacity: 1, x: 0 }} // Se desliza suavemente a la posición final
                    exit={{ opacity: 0, x: -50 }} // Se va hacia la izquierda al desaparecer
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {messages[index]}
                </motion.h2>
            </div>
        </section>
    );
}
