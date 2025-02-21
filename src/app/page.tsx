import Image from "next/image";
import Counter from "@/components/Counter";
import Main from "@/components/Main";
import About from "@/components/About";
import Staff from "@/components/Staff";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";

export default function HomePage() {
  return (
    <main>
      {/* <h1>Bienvenido a Basket Center</h1>
      <p>Somos la mejor escuela de básquet en Perú.</p> */}
      <Main />
      <Counter /> {/* Aquí se renderiza el contador */}
      <About />
      <Staff />
      <Achievements />
      <Sponsors />
      {/* <Gallery /> */}
      <Contact />
    </main>
  );
}
