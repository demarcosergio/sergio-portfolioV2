// src/components/ExperienceCard.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Experience } from "@/data/experiences";

interface Props {
    experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
    const controls = useAnimation();
    const [flipped, setFlipped] = useState(false);

    const handleClick = async () => {
        setFlipped(!flipped);
        await controls.start({ rotateY: flipped ? 0 : 180 });
    };

    return (
        <motion.div
            className="relative w-full h-64 sm:h-72 md:h-80 bg-transparent cursor-pointer perspective"
            onClick={handleClick}
        >
            <motion.div
                animate={controls}
                initial={{ rotateY: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute w-full h-full rounded-xl shadow-xl transform-style-preserve-3d"
            >
                {/* Front side */}
                <div className="absolute backface-hidden w-full h-full bg-[#0b66c2] text-white p-6 rounded-xl flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold">{experience.title}</h3>
                        <p className="text-sm opacity-80 mt-1">{experience.company}</p>
                        <p className="text-sm mt-4">{experience.period}</p>
                    </div>
                    <p className="text-right text-sm italic">Click para más info</p>
                </div>

                {/* Back side */}
                <div className="absolute backface-hidden w-full h-full bg-white text-gray-800 p-6 rounded-xl rotate-y-180 overflow-auto">
                    <h4 className="text-lg font-semibold mb-2">Responsabilidades</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                        {experience.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
}

// Agrega estas clases en tu Tailwind config si no las tenés:
// perspective: {
//   perspective: "1000px",
// },
// "transform-style-preserve-3d": {
//   transformStyle: "preserve-3d",
// },
// "backface-hidden": {
//   backfaceVisibility: "hidden",
// },
// "rotate-y-180": {
//   transform: "rotateY(180deg)",
// }
