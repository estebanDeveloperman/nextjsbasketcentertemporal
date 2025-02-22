"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
    const [showMessage, setShowMessage] = useState(false);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        // Hace que el mensaje aparezca con animación al cargar
        setTimeout(() => {
            setShowMessage(true);
        }, 350);

        // Oculta el mensaje después de 3.5 segundos
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    // Mensaje automático de WhatsApp
    const whatsappMessage = "Hola, vengo de la página web de Basketcenter, quiero solicitar mi clase de prueba gratuita.";
    const whatsappLink = `https://wa.me/51926868587?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center">
            {/* Mensaje animado */}
            <div
                className={`bg-[#25D366] text-white px-4 py-2 text-1xl md:text-2xl rounded-lg shadow-xl whitespace-nowrap font-bold
                    absolute right-14 transition-all duration-500 transform ${showMessage || hover ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
                `}
            >
                ¡Clase Gratis!
            </div>

            {/* Botón de WhatsApp */}
            <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center group"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                aria-label="Contáctenos por WhatsApp"
            >
                <div className="bg-[#25D366] text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110">
                    <FaWhatsapp size={32} />
                </div>
            </Link>
        </div>
    );
}
