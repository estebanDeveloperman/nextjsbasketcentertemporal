"use client";

import { useState } from "react";
import { FaBasketballBall, FaCalendarAlt, FaVenusMars, FaClock, FaMapMarkerAlt, FaMapPin } from "react-icons/fa";

const categories = [
    { category: "Pre Minibasket", age: "8 - 10", gender: "Femenino", frequency: "Lu - Mie - Vie" },
    { category: "Pre Minibasket", age: "8 - 10", gender: "Masculino", frequency: "Ma - Jue" },
    { category: "Minibasket", age: "11 - 12", gender: "Femenino", frequency: "Lu - Mie - Vie" },
    { category: "Minibasket", age: "11 - 12", gender: "Masculino", frequency: "Ma - Jue" },
    { category: "Menores", age: "13", gender: "Femenino", frequency: "Lu - Mie - Vie" },
    { category: "Menores", age: "13", gender: "Masculino", frequency: "Ma - Jue" },
    { category: "Medianas", age: "14 - 15", gender: "Femenino", frequency: "Lu - Mie - Vie" },
    { category: "Medianos", age: "14 - 15", gender: "Masculino", frequency: "Ma - Jue" },
    { category: "Mayores", age: "16 - 17", gender: "Femenino", frequency: "Lu - Mie - Vie" },
    { category: "Mayores", age: "16 - 17", gender: "Masculino", frequency: "Ma - Jue" },
    { category: "Juveniles", age: "17 - 19", gender: "Masculino", frequency: "Lu - Mie - Vie" },
];

export default function Schedule() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedAge, setSelectedAge] = useState("");

    // Filtrar categorías según los filtros seleccionados
    const filteredCategories = categories.filter((item) => {
        return (
            (!selectedCategory || item.category === selectedCategory) &&
            (!selectedGender || item.gender === selectedGender) &&
            (!selectedAge || item.age.includes(selectedAge))
        );
    });

    return (
        <div id="horarios" className="bg-[#222222] text-white py-10 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#e43920] mb-2 mt-5 flex items-center justify-center gap-3">
                <FaBasketballBall className="animate-bounce" />
                HORARIOS DE ENTRENAMIENTO
                <FaBasketballBall className="animate-bounce" />
            </h2>
            <p className="text-center text-2xl mb-6 flex items-center justify-center gap-2">
                <FaClock className="text-[#e43920]" /> Clase de prueba gratuita, mide tu talento
            </p>


            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="relative">
                    <FaBasketballBall className="absolute left-3 top-3 text-gray-400" />
                    <select
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        value={selectedCategory}
                        className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg outline-none hover:bg-gray-700 transition"
                    >
                        <option value="">Todas las Categorías</option>
                        {[...new Set(categories.map((c) => c.category))].map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="relative">
                    <FaVenusMars className="absolute left-3 top-3 text-gray-400" />
                    <select
                        onChange={(e) => setSelectedGender(e.target.value)}
                        value={selectedGender}
                        className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg outline-none hover:bg-gray-700 transition"
                    >
                        <option value="">Todos los Géneros</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Masculino">Masculino</option>
                    </select>
                </div>

                <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                    <select
                        onChange={(e) => setSelectedAge(e.target.value)}
                        value={selectedAge}
                        className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg outline-none hover:bg-gray-700 transition"
                    >
                        <option value="">Todas las Edades</option>
                        {[...new Set(categories.map((c) => c.age))].map((age) => (
                            <option key={age} value={age}>{age}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Cards de categorías */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((item, index) => {
                        const whatsappMessage = `Hola, vengo de la página web de Basketcenter y quiero solicitar mi clase de prueba gratuita, Categoría ${item.category}`;
                        const whatsappLink = `https://wa.me/51926868587?text=${encodeURIComponent(whatsappMessage)}`;

                        return (
                            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 cursor-pointer">
                                <h3 className="text-xl font-bold flex items-center mb-3 text-[#e43920]">
                                    <FaBasketballBall className="mr-2" />
                                    {item.category}
                                </h3>
                                <p className="text-gray-300 flex items-center">
                                    <FaCalendarAlt className="mr-2 text-[#e43920]" /> Edad: {item.age}
                                </p>
                                <p className="text-gray-300 flex items-center">
                                    <FaVenusMars className="mr-2 text-[#e43920]" /> Género: {item.gender}
                                </p>
                                <p className="text-gray-300 flex items-center">
                                    <FaClock className="mr-2 text-[#e43920]" /> Frecuencia: {item.frequency}
                                </p>

                                <div className="mt-4 text-center">
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#e43920] text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition duration-300"
                                    >
                                        Solicitar Clase de Prueba
                                    </a>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-lg text-gray-400 col-span-3">
                        No hay horarios disponibles con los filtros seleccionados.
                    </p>
                )}
            </div>

            {/* Ubicación */}
            <div className="mt-10 text-lg flex justify-center items-center">
                <FaMapPin className="mr-2 text-[#e43920]" />
                <strong>Colegio Juana Alarco de Dammert</strong>
            </div>
            <p className="text-lg flex justify-center items-center">
                <FaMapMarkerAlt className="mr-2 text-[#e43920]" /> Av. Alfredo Benavides 2315 - Miraflores
            </p>
        </div>
    );
}
