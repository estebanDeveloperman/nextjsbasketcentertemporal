"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaBullhorn,
  FaFire,
  FaDumbbell,
  FaLaptopCode,
  FaBasketballBall,
} from "react-icons/fa";
import { motion } from "framer-motion";
import achievements from "@/utils/achievements.json";

const getEventIcon = (evento: string) => {
  if (evento.includes("1er Lugar") || evento.includes("Campeón"))
    return (
      <FaTrophy className="text-yellow-400 text-2xl md:text-3xl drop-shadow-lg" />
    );
  if (evento.includes("2do Lugar") || evento.includes("Subcampeón"))
    return (
      <FaMedal className="text-gray-300 text-2xl md:text-3xl drop-shadow-lg" />
    );
  if (evento.includes("3er Lugar") || evento.includes("Tercer Lugar"))
    return (
      <FaAward className="text-orange-400 text-2xl md:text-3xl drop-shadow-lg" />
    );
  if (evento.includes("📢"))
    return (
      <FaBullhorn className="text-red-500 text-2xl md:text-3xl drop-shadow-lg" />
    );
  if (evento.includes("🔥"))
    return (
      <FaFire className="text-orange-400 text-2xl md:text-3xl drop-shadow-lg" />
    );
  if (evento.includes("💪"))
    return (
      <FaDumbbell className="text-blue-500 text-2xl md:text-3xl drop-shadow-lg" />
    );
  if (evento.includes("💻"))
    return (
      <FaLaptopCode className="text-green-400 text-2xl md:text-3xl drop-shadow-lg" />
    );
  return (
    <FaBasketballBall className="text-white text-2xl md:text-3xl drop-shadow-lg" />
  );
};

const AchievementCard = React.memo(({ logro }: { logro: any }) => {
  const isRecent = logro.year === "2024";
  const icon = isRecent ? <FaTrophy /> : <FaBasketballBall />;

  return (
    <VerticalTimelineElement
      date={logro.year}
      iconStyle={{
        background: isRecent ? "#e43920" : "#222222",
        color: "#fff",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
      }}
      icon={icon}
      contentStyle={{
        background: "#333",
        color: "#ddd",
        border: "2px solid #e43920",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        padding: "24px",
        transition: "all 0.3s ease-in-out",
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

      <ul className="list-none space-y-4">
        {logro.events.map((evento: string, i: number) => (
          <li
            key={i}
            className="flex items-center gap-4 text-white text-lg md:text-xl hover:scale-110 transition-transform cursor-pointer"
          >
            {getEventIcon(evento)}
            <span className="hover:text-[#e43920] transition-colors">
              {evento.replace(/^[^ ]+ /, "")}
            </span>
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
      className="relative bg-[#222222] text-white py-20 px-6 overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center opacity-90"
        style={{
          backgroundImage:
            "url('https://storage.googleapis.com/la_liga_files/basketcenter/background/fondo4.jpg')",
          backgroundSize: "90% 100%",
          backgroundRepeat: "repeat-y",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-bold text-[#ffffff] mb-10 flex items-center justify-center gap-4"
        >
          <FaBasketballBall className="text-[#e43920] animate-bounce" />
          TIMELINE <span className="text-[#e43920]">BASKETCENTER</span>
          <FaBasketballBall className="text-[#e43920] animate-bounce" />
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
