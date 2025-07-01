"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function NovatechPage() {
    const { lang } = useContext(LanguageContext);
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main className="min-h-screen px-6 py-20">
            <div className="max-w-5xl mx-auto space-y-12">
                <Link href="/" className="text-indigo-600 hover:underline">&larr; {translations[lang].novatech.back}</Link>

                <motion.h1
                    className="text-4xl font-bold text-neutral-100"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.8 }}
                >
                    {translations[lang].novatech.title}
                </motion.h1>

                <motion.p
                    className="text-lg text-neutral-300"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Participé como Full-Stack Developer desarrollando endpoints reutilizables en .NET, conectados con un frontend moderno en Next.js. También gestioné la infraestructura en Azure, optimizando seguridad y escalabilidad.
                </motion.p>

                <motion.div
                    className="bg-gray-800 rounded-lg shadow-md p-6"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-xl font-semibold text-neutral-100 mb-2">Tecnologías clave</h2>
                    <ul className="list-disc list-inside text-neutral-300 space-y-1">
                        <li>.NET & .NET Core</li>
                        <li>Next.js + TypeScript</li>
                        <li>Azure (App Services, Functions, CI/CD)</li>
                        <li>Figma, GitHub, Postman</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="text-sm text-gray-400"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <p>* Este proyecto fue parte de mi trabajo como contractor remoto para el mercado estadounidense.</p>
                </motion.div>
            </div>
        </main>
    );
}
