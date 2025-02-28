"use client"; // Necesario para habilitar el modo cliente
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { send } from "@emailjs/browser";

const Contact = () => {
    const titleControls = useAnimation();
    const formControls = useAnimation();
    const infoControls = useAnimation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const titleElement = document.getElementById("contact-title");
            const formElement = document.getElementById("contact-form");
            const infoElement = document.getElementById("contact-info");

            if (titleElement) {
                const rect = titleElement.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.8) {
                    titleControls.start("visible");
                }
            }

            if (formElement) {
                const rect = formElement.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.8) {
                    formControls.start("visible");
                }
            }

            if (infoElement) {
                const rect = infoElement.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.8) {
                    infoControls.start("visible");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Ejecutar inmediatamente para detectar si ya está en vista al cargar la página
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [titleControls, formControls, infoControls]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        // emailJS -> service ID, template ID, public key
        const serviceId = 'service_d6rqp1s'
        const templateId = 'template_3m37g3q'
        const publicKey = 'In3fh0jv3lfHYhMTX'

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Web BasketCenter',
            message: message
        }

        try {
            await send(serviceId, templateId, templateParams, publicKey);
            console.log("Email enviado correctamente");
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error enviando email", error);
        } finally {
            setIsLoading(false); // Desactivar estado de carga
        }
    }

    return (
        <section id="contacto" className="bg-[#222222] text-white py-16">
            {/* Contenedor principal */}
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Título */}
                <motion.h2
                    id="contact-title"
                    initial="hidden"
                    animate={titleControls}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    className="text-4xl md:text-6xl font-bold text-center text-white mb-8 uppercase font-bitcrusher tracking-wide flex items-center justify-center gap-3"
                >
                    CONTACTO
                </motion.h2>


                {/* Contenido: Formulario + Información de contacto */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Formulario */}
                    <motion.div
                        id="contact-form"
                        initial="hidden"
                        animate={formControls}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }, // Duración reducida a 0.5s
                        }}
                        className="flex-1 min-w-[300px]"
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Campo de nombre */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    required
                                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43920]"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            {/* Campo de correo */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Correo"
                                    required
                                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43920]"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {/* Campo de mensaje */}
                            <div>
                                <textarea
                                    placeholder="Escríbenos tu mensaje..."
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43920]"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            {/* Botón de envío */}
                            <button
                                type="submit"
                                disabled={isLoading} // Deshabilitar el botón durante el envío
                                className={`w-full bg-[#e43920] text-white font-bold py-3 rounded-lg transition-colors duration-300 ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#a63b20]"
                                    }`}
                            >
                                {isLoading ? "Enviando..." : "Enviar Mensaje"}
                            </button>
                        </form>
                    </motion.div>

                    {/* Información de contacto */}
                    <motion.div
                        id="contact-info"
                        initial="hidden"
                        animate={infoControls}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }, // Duración reducida a 0.5s
                        }}
                        className="flex-1 min-w-[300px] space-y-4"
                    >
                        {/* Dirección */}
                        <p className="flex items-center gap-2 text-gray-300">
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
                        {/* Correo */}
                        <p className="flex items-center gap-2 text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-[#e43920]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            clubbasketcenter@gmail.com
                        </p>
                        {/* Teléfono */}
                        <p className="flex items-center gap-2 text-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-[#e43920]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            +51 926 868 587
                        </p>
                        {/* Redes sociales */}
                        <div className="flex gap-4 mt-5">
                            <a
                                href="https://web.facebook.com/basketcenter.pe"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="text-white hover:text-[#e43920] transition-colors duration-300"
                            >
                                <FaFacebookF size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/clubbasketcenter/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-white hover:text-[#e43920] transition-colors duration-300"
                            >
                                <FaInstagram size={24} />
                            </a>

                            <a
                                href="https://www.tiktok.com/@clubbasketcenter"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-white hover:text-[#e43920] transition-colors duration-300"
                            >
                                <FaTiktok size={24} />
                            </a>
                            <a
                                href="https://www.youtube.com/@clubbasketcenter/featured"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-white hover:text-[#e43920] transition-colors duration-300"
                            >
                                <FaYoutube size={24} />
                            </a>
                            <a
                                href="https://wa.me/51926868587"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-white hover:text-[#e43920] transition-colors duration-300"
                            >
                                <FaWhatsapp size={24} />
                            </a>
                        </div>
                        {/* Botón de WhatsApp destacado */}
                        {/* <a
                            href="https://wa.me/51926868587"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-lg hover:bg-[#1eb247] transition-colors duration-300 mt-4"
                            style={{ width: "200px" }}
                        >
                            <FaWhatsapp size={24} />
                            WhatsApp
                        </a> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;