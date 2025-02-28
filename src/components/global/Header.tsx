"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

// Definir las rutas y elementos del menú
const menuItems = [
  { name: "Nosotros", href: "#about-section" },
  { name: "Staff", href: "#staff" },
  { name: "Metodología", href: "#methodology" },
  { name: "Horarios", href: "#horarios" },
  { name: "Galería", href: "/galeria" },
  { name: "Contacto", href: "#contacto" },
  { name: "Tienda", href: "/tienda" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/${href}`);
      }
    } else {
      router.push(href);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 300);
      }
    }
  }, [pathname]);

  return (
    <header className="fixed z-50 w-full bg-[#000000] text-white shadow-md top-0">
      {/* Barra superior con redes sociales */}
      <div className="bg-[#e43920] text-white py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="flex gap-4">
            <Link
              href="https://wa.me/51926868587"
              target="_blank"
              aria-label="WhatsApp"
              className="hover:text-gray-200 transition"
            >
              <FaWhatsapp size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/clubbasketcenter/"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-gray-200 transition"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://web.facebook.com/basketcenter.pe"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-gray-200 transition"
            >
              <FaFacebook size={20} />
            </Link>
            <span className="text-xs md:text-sm font-semibold">
              ¡Síguenos en redes sociales! Contáctanos para tu clase de prueba
              gratuita
            </span>
          </div>
        </div>
      </div>

      {/* Barra de navegación principal */}
      <nav
        className="container mx-auto flex items-center justify-between p-4 lg:px-8"
        aria-label="Menú principal"
      >
        {/* Logo y Nombre */}
        <div className="flex items-center gap-3">
          <Image
            src="https://storage.googleapis.com/la_liga_files/videos/logo_bc-min.png"
            alt="Logo de Basket Center"
            width={55}
            height={55}
            priority
          />
          <span className="text-2xl font-bold text-[#e43920] tracking-wide">
            BASKETCENTER
          </span>
        </div>

        {/* Menú en Desktop */}
        <ul className="hidden md:flex gap-10 text-lg font-bold">
          {menuItems.map((item) => (
            <li key={item.name} className="flex items-center">
              <button
                onClick={() => handleNavigation(item.href)}
                className="hover:text-[#e43920] transition duration-300"
                aria-label={`Ir a la sección ${item.name}`}
              >
                {item.name === "Tienda" ? <MdLocalGroceryStore /> : item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Botón de menú hamburguesa en Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
          aria-label={`${menuOpen ? "Cerrar menú" : "Abrir menú"}`}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Menú desplegable en Mobile */}
      {menuOpen && (
        <ul className="absolute top-16 right-4 bg-[#222222] w-48 p-4 rounded-lg shadow-lg flex flex-col gap-4 text-center md:hidden">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavigation(item.href)}
                className="block py-2 text-lg hover:text-[#e43920] transition duration-300"
                aria-label={`Ir a la sección ${item.name}`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
