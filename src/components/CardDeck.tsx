"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
    {
        title: "Full-Stack Developer",
        company: "Qualitara / Milwaukee Tools",
        period: "Jun 2023 – Present",
        summary:
            "Built reusable .NET APIs and TypeScript-based Next.js interfaces, managed Azure infrastructure, and mentored junior developers.",
    },
    {
        title: ".NET Senior Developer",
        company: "Selehann / iDocket",
        period: "Apr 2022 – Jun 2023",
        summary:
            "Oversaw the migration to .NET Core, designed microservices with WCF and AWS, and led architecture improvements.",
    },
    {
        title: ".NET Senior Developer",
        company: "The Bridge / Grace Kennedy",
        period: "Feb 2021 – Apr 2022",
        summary:
            "Built APIs and Cosmos DB structures for fintech projects using React and Flutter on Azure.",
    },
    {
        title: "Technical Lead / .NET Developer",
        company: "Urbetrack",
        period: "Apr 2019 – Feb 2021",
        summary:
            "Directed teams in satellite tracking systems, created real-time APIs, and managed Agile delivery and DevOps pipelines.",
    },
    {
        title: ".NET Developer",
        company: "Globant / JPMorgan",
        period: "Sep 2017 – Apr 2019",
        summary:
            "Developed WebAPI/MVC features and provided Level 3 support for US/India users.",
    },
    {
        title: "Junior Developer",
        company: "Just Solutions",
        period: "Nov 2016 – Sep 2017",
        summary:
            "Contributed full-stack using WebForms, MVC, SQL Server, and MongoDB.",
    },
];

export default function CardDeck() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="bg-black py-20 px-4 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">
                    Experiencia Laboral
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`relative group bg-[#0b0b0c] border border-[#2c2c2e] p-6 rounded-xl cursor-pointer transition-all duration-500 overflow-hidden shadow-lg ${activeIndex === index ? "ring-2 ring-[#0b66c2] scale-[1.02]" : "hover:ring-1 hover:ring-[#0b66c2]"
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-semibold text-white">
                                    {exp.title}
                                </h3>
                                <Briefcase size={20} className="text-[#0b66c2]" />
                            </div>
                            <p className="text-sm text-gray-400 mb-4">{exp.company} – {exp.period}</p>
                            <p className="text-gray-300 text-base leading-relaxed">
                                {exp.summary}
                            </p>
                            <ChevronRight
                                className={`absolute right-4 bottom-4 transition-transform duration-300 ${activeIndex === index ? "translate-x-1 text-[#0b66c2]" : "group-hover:translate-x-1"
                                    }`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
