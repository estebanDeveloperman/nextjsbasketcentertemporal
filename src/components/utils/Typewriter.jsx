"use client";
import { useState, useEffect } from "react";

export default function Typewriter({ messages, speed = 60, delay = 1000 }) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentMessage = messages[index];

        if (!deleting && charIndex < currentMessage.length) {
            setTimeout(() => {
                setText((prev) => prev + currentMessage[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, speed);
        } else if (deleting && charIndex > 0) {
            setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            }, speed / 2);
        } else {
            setTimeout(() => {
                setDeleting(!deleting);
                if (!deleting) {
                    setIndex((prev) => (prev + 1) % messages.length);
                }
            }, delay);
        }
    }, [charIndex, deleting, index]);

    return (
        <span className="relative">
            {text}
            <span className="animate-blink">|</span>

            {/* Animación del cursor */}
            <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          display: inline-block;
          animation: blink 0.8s infinite;
        }
      `}</style>
        </span>
    );
}
