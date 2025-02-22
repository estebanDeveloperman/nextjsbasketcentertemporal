"use client"; // Necesario para habilitar el modo cliente si usas animaciones o interacciones
import React from "react";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-8">
      {/* Contenedor principal */}
      <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row justify-evenly items-center gap-6">
        {/* Logo y nombre del club */}
        <div className="flex items-center gap-3">
          <Image
            src="https://storage.googleapis.com/la_liga_files/videos/logo_bc-min.png"
            alt="Basketcenter Logo"
            width={52}
            height={52}
            className="object-contain rounded-full"
            priority={true} // Prioriza la carga si está visible al inicio
          />
          <Image
            src="https://storage.googleapis.com/la_liga_files/basketcenter/logos/FIBALOGO.png"
            alt="FIBA LOGO"
            width={95}
            height={95}
            className="object-contain"
            priority={true} // Prioriza la carga si está visible al inicio
          />
          {/* <h2 className="text-xl font-bold text-[#e43920]">BasketCenter</h2> */}
        </div>

        {/* Información de contacto */}
        <div className="flex flex-col gap-1 text-sm text-gray-300">
          <p className="flex items-center gap-2">
            <FaPhone className="text-[#e43920]" /> +51 926 868 587
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-[#e43920]" /> clubbasketcenter@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#e43920]" /> Av. Alfredo Benavides
            2315, Miraflores
          </p>
        </div>

        {/* Redes sociales */}
        {/* <div className="flex gap-4">
          <a
            href="https://web.facebook.com/basketcenter.pe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white hover:text-[#e43920] transition-colors duration-300"
          >
            <FaFacebook size={24} />
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
        </div> */}
      </div>

      {/* Derechos reservados */}
      <p className="mt-6 text-xs text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Basketcenter. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
