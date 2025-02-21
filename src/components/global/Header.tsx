"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Íconos de menú
import { MdLocalGroceryStore } from "react-icons/md";

// Definir las rutas y elementos del menú
const menuItems = [
  { name: "Nosotros", href: "#about-section" },
  { name: "Staff", href: "#staff" },
  { name: "Metodología", href: "#metodologia" },
  { name: "Horarios", href: "#horarios" },
  { name: "Galería", href: "/galeria" },
  { name: "Contacto", href: "#contacto" },
  { name: "Tienda", href: "/tienda" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Función para manejar la navegación con scroll correcto
  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        // Si ya está en la home, solo hace scroll
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Si está en otra página, redirige a "/" y luego hace scroll
        router.push(`/${href}`);
      }
    } else {
      // Para enlaces normales, solo navega
      router.push(href);
    }
    setMenuOpen(false);
  };

  // Cuando llegue a la home, hace scroll automático si hay un hash en la URL
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 300);
      }
    }
  }, [pathname]);

  return (
    <header
      className="fixed z-50 w-full bg-[#222222] text-white shadow-md"
      style={{ top: 0 }}
    >
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
