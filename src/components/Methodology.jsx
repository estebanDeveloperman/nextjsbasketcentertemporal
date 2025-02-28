"use client";

import React from "react";
import { FaBasketballBall, FaBolt, FaBrain, FaUsers, FaChessKnight, FaChartLine } from "react-icons/fa";

const methodologyData = [
    {
        letter: "C",
        title: "Control & Técnica",
        description: "Dominio del balón y fundamentos (sistema americano).",
        icon: <FaBasketballBall className="text-[#e43920] text-6xl mb-4" />,
    },
    {
        letter: "E",
        title: "Ejercicios Intensos",
        description: "Velocidad + Fuerza + Ambidiestría + Visión periférica + Técnica.",
        icon: <FaBolt className="text-[#e43920] text-6xl mb-4" />,
    },
    {
        letter: "N",
        title: "Neurociencia & Decisión",
        description: "Rapidez mental y lectura del juego sin balón.",
        icon: <FaBrain className="text-[#e43920] text-6xl mb-4" />,
    },
    {
        letter: "T",
        title: "Trabajo en Equipo",
        description: "Liderazgo y colectividad.",
        icon: <FaUsers className="text-[#e43920] text-6xl mb-4" />,
    },
    {
        letter: "E",
        title: "Estrategia & Táctica",
        description: "Juegos por conceptos y sistemas de juego.",
        icon: <FaChessKnight className="text-[#e43920] text-6xl mb-4" />,
    },
    {
        letter: "R",
        title: "Rendimiento",
        description: "Máxima exigencia en entrenamientos y mentalidad ganadora.",
        icon: <FaChartLine className="text-[#e43920] text-6xl mb-4" />,
    },
];

const Methodology = () => {
    return (
        <section id="methodology" className="bg-[#222222] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-[#e43920] uppercase mb-12 tracking-wide">
                    Metodología <span className="text-white">C.E.N.T.E.R.</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
                    La metodología C.E.N.T.E.R. de BasketCenter construye y potencia jugadores con un enfoque integral en técnica, táctica, físico y mentalidad competitiva.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {methodologyData.map((item, index) => (
                        <div
                            key={index}
                            className="relative group p-8 rounded-lg bg-[#333] shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center cursor-pointer"
                        >
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#e43920] text-black font-bold text-3xl w-14 h-14 flex items-center justify-center rounded-full border-4 border-[#222222] shadow-lg">
                                {item.letter}
                            </div>
                            {item.icon}
                            <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                            <p className="text-gray-300">{item.description}</p>
                            <div className="absolute inset-0 bg-[#e43920] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                        </div>
                    ))}
                </div>

                <p className="text-xl font-bold text-[#e43920] mt-16 tracking-wide">
                    Jugadores más inteligentes, fuertes y listos para competir.
                </p>
            </div>
        </section>
    );
};

export default Methodology;
