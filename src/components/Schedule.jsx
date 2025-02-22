import React from "react";

const Schedule = () => {
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

    return (
        <div id="horarios" className="bg-[#222222] text-white py-10 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#e43920] mb-2 mt-5">
                HORARIOS DE ENTRENAMIENTO
            </h2>
            <p className="text-center text-2xl mb-6">
                Clase de prueba gratuita, mide tu talento
            </p>
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
                        {categories.map((item, index) => {
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
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Schedule;
