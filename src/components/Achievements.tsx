"use client"; // Habilita el modo cliente
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaTrophy, FaBasketballBall } from "react-icons/fa";
import { motion } from "framer-motion";
import achievements from "@/utils/achievements.json";
import Image from "next/image";

const AchievementCard = React.memo(({ logro }: { logro: any }) => {
  return (
    <VerticalTimelineElement
      date={logro.year}
      iconStyle={{
        background: logro.year === "2024" ? "#e43920" : "#222222",
        color: "#fff",
      }}
      icon={logro.year === "2024" ? <FaTrophy /> : <FaBasketballBall />}
      contentStyle={{
        background: "#333",
        color: "#ddd",
        border: "2px solid #e43920",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        padding: "20px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #e43920",
      }}
    >
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-[#e43920] mb-4"
      >
        {logro.year}
      </motion.h3>

      <ul className="list-none space-y-2">
        {logro.events.map((evento: string, i: number) => (
          <li key={i} className="text-white text-sm md:text-base">
            {evento}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
});

const Achievements = () => {
  return (
    <section
      id="logros"
      className="relative bg-[#222222] text-white py-20 px-4"
    >
      {/* Imagen de fondo como marca de agua */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center opacity-90"
        style={{
          backgroundImage: "url('/images/background/fondo3.jpg')",
          backgroundSize: "90% auto", // 50% del ancho, auto en altura
          backgroundRepeat: "repeat-y", // Se repite solo en dirección vertical
        }}
      />

      {/* Contenido encima del fondo */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-bold text-[#ffffff] mb-10"
        >
          🏀 TIMELINE <span className="text-[#e43920]">BASKETCENTER</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <VerticalTimeline>
            {achievements.map((logro, index) => (
              <AchievementCard key={index} logro={logro} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
