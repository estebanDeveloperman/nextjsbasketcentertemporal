import Image from "next/image";
import Counter from "@/components/Counter";
import Main from "@/components/Main";
import About from "@/components/About";
import Staff from "@/components/Staff";
import Achievements from "@/components/Achievements";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import Methodology from "@/components/Methodology";

export default function HomePage() {
  return (
    <main>
      {/* <h1>Bienvenido a Basket Center</h1>
      <p>Somos la mejor escuela de básquet en Perú.</p> */}
      <Main />
      <Counter />
      <About />
      <Methodology />
      <Staff />
      <Achievements />
      <Schedule />
      <Sponsors />      
      <Contact />
    </main>
  );
}
