"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Experience } from "@/data/experiences";

interface Props {
    experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return (
        <motion.div
            layout
            className="bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer"
            onClick={toggle}
        >
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{experience.company}</p>
                    <p className="text-sm mt-2 text-gray-300">{experience.period}</p>
                </div>
                <ChevronDown className={`mt-1 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
            </div>
            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 list-disc list-inside text-sm text-gray-300 space-y-1"
                    >
                        {experience.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
