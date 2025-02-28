"use client";

import { useEffect, useState } from "react";

// Datos del contador
const counterData = [
    { id: 1, num: 13, title: "CATEGORÍAS" },
    // { id: 2, num: 14, title: "PAÍSES DE EXPERIENCIA" },
    { id: 3, num: 4, title: "CAMPEONATOS INTERNACIONALES" },
    { id: 4, num: 6, title: "AÑOS COMPITIENDO" }
];

export default function Counter() {
    const [counts, setCounts] = useState(counterData.map(() => 0));
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const duration = 2000; // Duración de la animación en ms
        const steps = 60; // Número de pasos en la animación
        const interval = duration / steps;

        let currentStep = 0;
        const intervalId = setInterval(() => {
            if (visible) {
                currentStep++;
                setCounts(
                    counterData.map(({ num }) =>
                        Math.min(Math.round((num / steps) * currentStep), num)
                    )
                );
                if (currentStep >= steps) clearInterval(intervalId);
            }
        }, interval);

        return () => clearInterval(intervalId);
    }, [visible]);

    // Función para detectar si el elemento está en el viewport
    const handleScroll = () => {
        const rect = document.getElementById("counter-section").getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            setVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            id="counter-section"
            className="bg-[#222222] py-20 text-center text-white"
        >
            <div className="container mx-auto flex flex-wrap justify-center gap-12 font-gobold tracking-wide">
                {counterData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`w-80 h-44 flex flex-col items-center justify-center bg-white/10 rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg ${visible ? "animate-fade-up" : "opacity-0"
                            }`}
                    >
                        <h3 className="text-8xl font-bold text-white drop-shadow-lg">
                            {counts[index]}
                        </h3>
                        <h3 className="text-2xl font-semibold text-[#e43920] uppercase mt-2">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
