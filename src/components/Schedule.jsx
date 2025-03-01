"use client";

import { useState } from "react";
import { FaBasketballBall, FaCalendarAlt, FaVenusMars, FaClock, FaMapMarkerAlt, FaMapPin } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import entrenamientos from "@/utils/scheduleTrain.js";

export default function Schedule() {
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedAge, setSelectedAge] = useState("");

    // Filtrar entrenamientos según Año y Género
    const filteredTrainings = entrenamientos.filter((item) => {
        return (
            (!selectedGender || item.genero === selectedGender) &&
            (!selectedAge || item.nacimiento.includes(parseInt(selectedAge)))
        );
    });

    return (
        <div id="horarios" className="bg-[#222222] text-white py-10 px-4">
            <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-2 mt-5 flex items-center justify-center gap-3 font-bitcrusher tracking-wide">
                <FaBasketballBall className="animate-bounce text-[#E43920]" />
                HORARIOS DE ENTRENAMIENTO
                <FaBasketballBall className="animate-bounce text-[#E43920]" />
            </h2>
            {/* <p className="flex justify-center gap-2 mb-1">
                <MdOutlinePlace className="h-5 w-5 text-white" />
                <a
                    href="https://www.google.com/maps/place/Colegio+Juana+Alarco+de+Dammert,+Av.+Alfredo+Benavides+2315,+Santiago+de+Surco+15048/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                >
                    Av. Alfredo Benavides 2315, Miraflores 15048
                </a>
            </p> */}
            <p className="text-center text-2xl mb-6 flex items-center justify-center gap-2">
                <FaClock className="text-white" /> Clase de prueba gratuita, mide tu talento
            </p>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="relative">
                    <FaMapPin className="absolute left-3 top-3 text-white" />
                    <select
                        onChange={(e) => setSelectedAge(e.target.value)}
                        value={selectedAge}
                        className="bg-black text-white border-2 border-white pl-10 pr-4 py-2 rounded-lg outline-none hover:bg-[#111111] transition"
                    >
                        <option value="">Categoría / Año de Nacimiento</option>
                        {[...new Map(entrenamientos.map((c) => [c.categoria, c.nacimiento])).entries()].map(([categoria, años]) => (
                            <option key={categoria} value={años[0]}>
                                {categoria} / {años.join("-")}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="relative">
                    <FaVenusMars className="absolute left-3 top-3 text-white" />
                    <select
                        onChange={(e) => setSelectedGender(e.target.value)}
                        value={selectedGender}
                        className="bg-black text-white border-2 border-white pl-10 pr-4 py-2 rounded-lg outline-none hover:bg-[#111111] transition"
                    >
                        <option value="">Género</option>
                        <option value="Damas">Damas</option>
                        <option value="Varones">Varones</option>
                    </select>
                </div>
            </div>

            {/* Cards de entrenamiento */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                {filteredTrainings.length > 0 ? (
                    filteredTrainings.map((item, index) => {
                        const whatsappMessage = `Hola, vengo de la página web de Basketcenter y quiero solicitar mi clase de prueba gratuita, Categoría ${item.categoria} ${item.genero}`;
                        const whatsappLink = `https://wa.me/51926868587?text=${encodeURIComponent(whatsappMessage)}`;

                        return (
                            <div
                                key={index}
                                className="bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer border border-black"
                            >
                                <h3 className="text-xl font-bold flex items-center mb-3 text-white">
                                    <FaBasketballBall className="mr-2 text-white" />
                                    {item.categoria} {item.genero}
                                </h3>
                                <p className="text-white flex items-center">
                                    <FaMapPin className="mr-2 text-white" /> Año: {item.nacimiento.join(" / ")}
                                </p>
                                <p className="text-white flex items-center">
                                    <FaClock className="mr-2 text-white" /> Hora: {item.horaInicio} / {item.horaFin}
                                </p>
                                <p className="text-white flex items-center whitespace-nowrap overflow-hidden text-[clamp(12px, 2vw, 16px)]">
                                    <FaCalendarAlt className="mr-2 text-white" />
                                    Días: {item.dias.join(" - ")}
                                </p>
                                <div className="mt-4 text-center">
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        className="bg-[#E43920] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#C5301A] transition duration-300"
                                    >
                                        Solicitar Clase de Prueba
                                    </a>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-lg text-gray-400 col-span-3">No hay horarios disponibles.</p>
                )}
            </div>
        </div>
    );
}
