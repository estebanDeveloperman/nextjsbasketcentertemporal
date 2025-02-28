"use client";

import { useState } from "react";
import { FaBasketballBall, FaCalendarAlt, FaVenusMars, FaClock, FaMapMarkerAlt, FaMapPin } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md"
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
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#e43920] mb-2 mt-5 flex items-center justify-center gap-3">
                <FaBasketballBall className="animate-bounce" />
                HORARIOS DE ENTRENAMIENTO
                <FaBasketballBall className="animate-bounce" />
            </h2>
            <p className="text-center text-2xl mb-2 flex items-center justify-center gap-2">
                <FaClock className="text-[#e43920]" /> Clase de prueba gratuita, mide tu talento
            </p>
            <p className="flex justify-center gap-2 text-gray-300 mb-6">
                <MdOutlinePlace className="h-5 w-5 text-[#e43920]" />
                <a
                    href="https://www.google.com/maps/place/Colegio+Juana+Alarco+de+Dammert,+Av.+Alfredo+Benavides+2315,+Santiago+de+Surco+15048/@-12.1267822,-77.0112208,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c7ffb41dbeab:0xd541e3bb30d66aa3!8m2!3d-12.1267822!4d-77.0086459!16s%2Fg%2F11hg2l_bv1?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e43920] hover:underline"
                >
                    Av. Alfredo Benavides 2315, Miraflores 15048
                </a>
            </p>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="relative">
                    <FaVenusMars className="absolute left-3 top-3 text-[#e43920]" />
                    <select
                        onChange={(e) => setSelectedGender(e.target.value)}
                        value={selectedGender}
                        className="bg-[#222222] text-white border-2 border-[#e43920] pl-10 pr-4 py-2 rounded-lg outline-none hover:bg-[#333333] transition"
                    >
                        <option value="">Todos los Géneros</option>
                        <option value="Damas">Damas</option>
                        <option value="Varones">Varones</option>
                    </select>
                </div>

                <div className="relative">
                    <FaMapPin className="absolute left-3 top-3 text-[#e43920]" />
                    <select
                        onChange={(e) => setSelectedAge(e.target.value)}
                        value={selectedAge}
                        className="bg-[#222222] text-white border-2 border-[#e43920] pl-10 pr-4 py-2 rounded-lg outline-none hover:bg-[#333333] transition"
                    >
                        <option value="">Todos los Años</option>
                        {[...new Set(entrenamientos.flatMap((c) => c.nacimiento))].sort((a, b) => b - a).map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
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
                                className="bg-[#222222] border-2 border-[#e43920] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 cursor-pointer"
                            >
                                <h3 className="text-xl font-bold flex items-center mb-3 text-[#e43920]">
                                    <FaBasketballBall className="mr-2" />
                                    {item.categoria} {item.genero}
                                </h3>
                                <p className="text-white flex items-center">
                                    <FaMapPin className="mr-2 text-[#e43920]" /> Año: {item.nacimiento.join(" / ")}
                                </p>
                                <p className="text-white flex items-center">
                                    <FaClock className="mr-2 text-[#e43920]" /> Hora: {item.horaInicio} / {item.horaFin}
                                </p>
                                <p className="text-white flex items-center">
                                    <FaCalendarAlt className="mr-2 text-[#e43920]" /> Días: {item.dias.join(" - ")}
                                </p>
                                <div className="mt-4 text-center">
                                    <a href={whatsappLink} target="_blank" className="bg-[#e43920] text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition duration-300">
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
