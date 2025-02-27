"use client";

import { useState } from "react";

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

    // Filtrar categorías basadas en las selecciones
    const filteredCategories = categories.filter((item) => {
        return (
            (!selectedCategory || item.category === selectedCategory) &&
            (!selectedGender || item.gender === selectedGender) &&
            (!selectedAge || item.age.includes(selectedAge))
        );
    });

    return (
        <div id="horarios" className="bg-[#222222] text-white py-10 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#e43920] mb-2 mt-5">
                HORARIOS DE ENTRENAMIENTO
            </h2>
            <p className="text-center text-2xl mb-6">Clase de prueba gratuita, mide tu talento</p>

            {/* Controles de filtrado */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    value={selectedCategory}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none"
                >
                    <option value="">Todas las Categorías</option>
                    {[...new Set(categories.map((c) => c.category))].map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                <select
                    onChange={(e) => setSelectedGender(e.target.value)}
                    value={selectedGender}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none"
                >
                    <option value="">Todos los Géneros</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                </select>

                <select
                    onChange={(e) => setSelectedAge(e.target.value)}
                    value={selectedAge}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none"
                >
                    <option value="">Todas las Edades</option>
                    {[...new Set(categories.map((c) => c.age))].map((age) => (
                        <option key={age} value={age}>
                            {age}
                        </option>
                    ))}
                </select>
            </div>

            {/* Tabla de horarios */}
            <div className="overflow-x-auto max-w-6xl mx-auto px-4">
                <table className="w-full border-collapse text-left">
                    <thead>
                        <tr className="bg-[#e43920] text-white">
                            <th className="p-3">CATEGORÍA</th>
                            <th className="p-3">EDAD</th>
                            <th className="p-3">GÉNERO</th>
                            <th className="p-3">FRECUENCIA</th>
                            <th className="p-3 text-center">CLASE DE PRUEBA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map((item, index) => {
                                const whatsappMessage = `Hola, vengo de la página web de Basketcenter y quiero solicitar mi clase de prueba gratuita, Categoría ${item.category}`;
                                const whatsappLink = `https://wa.me/51926868587?text=${encodeURIComponent(whatsappMessage)}`;

                                return (
                                    <tr
                                        key={index}
                                        className={`border-b border-gray-600 ${index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"} hover:bg-gray-600 transition duration-300`}
                                    >
                                        <td className="p-3">{item.category}</td>
                                        <td className="p-3">{item.age}</td>
                                        <td className="p-3">{item.gender}</td>
                                        <td className="p-3">{item.frequency}</td>
                                        <td className="p-3 text-center">
                                            <a
                                                href={whatsappLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-[#e43920] text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition duration-300"
                                            >
                                                REGISTRO
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center p-5 text-lg text-gray-400">
                                    No hay horarios disponibles con los filtros seleccionados.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
