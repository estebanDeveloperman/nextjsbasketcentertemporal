"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { MdLocalGroceryStore } from "react-icons/md";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const menuItems = [
  { name: "NOSOTROS", href: "#about-section" },
  { name: "STAFF", href: "#staff" },
  { name: "METODOLOGÍA", href: "#methodology" },
  { name: "HORARIOS", href: "#horarios" },
  { name: "GALERÍA", href: "/galeria" },
  { name: "CONTACTO", href: "#contacto" },
  { name: "TIENDA", href: "/tienda" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

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

  return (
    <header
      className={`fixed z-50 w-full bg-[#000000] text-white shadow-md top-0 transition-transform duration-700 ${
        animate ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Barra de navegación principal */}
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8 font-gobold">
        {/* Logo y Nombre */}
        <div className="flex items-center gap-2">
          <Image
            src="https://storage.googleapis.com/la_liga_files/videos/logo_bc-min.png"
            alt="Logo de Basket Center"
            width={50}
            height={50}
            priority
          />
          <span className="text-2xl font-bold text-[#ffffff] tracking-wide">
            BASKETCENTER
          </span>
        </div>

        {/* Menú en Desktop */}
        <ul className="hidden md:flex gap-6 text-lg font-bold">
          {menuItems.map((item) => (
            <li key={item.name} className="flex items-center">
              <button
                onClick={() => handleNavigation(item.href)}
                className="hover:text-[#e43920] transition duration-300"
              >
                {item.name === "TIENDA" ? (
                  <MdLocalGroceryStore size={24} />
                ) : (
                  item.name
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Redes sociales en el header */}
        <div className="hidden md:flex items-center gap-4">
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
          <Link
            href="https://www.tiktok.com/@clubbasketcenter"
            target="_blank"
            aria-label="Tiktok"
            className="hover:text-[#e43920] transition"
          >
            <FaTiktok size={20} />
          </Link>
          <Link
            href="https://www.youtube.com/@clubbasketcenter/featured"
            target="_blank"
            aria-label="YouTube"
            className="hover:text-[#e43920] transition"
          >
            <FaYoutube size={20} />
          </Link>
        </div>

        {/* Botón de menú hamburguesa en Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
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
              >
                {item.name}
              </button>
            </li>
          ))}
          {/* Redes sociales en Mobile */}
          <div className="flex justify-center gap-4 mt-4">
            <Link
              href="https://wa.me/51926868587"
              target="_blank"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/clubbasketcenter/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://web.facebook.com/basketcenter.pe"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              href="https://www.tiktok.com/@clubbasketcenter"
              target="_blank"
              aria-label="Tiktok"
            >
              <FaTiktok size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@clubbasketcenter/featured"
              target="_blank"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </Link>
          </div>
        </ul>
      )}
    </header>
  );
}
