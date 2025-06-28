// Actualización de la mini web de Novatech con mejoras de UI/UX y animación del cursor
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const NovatechMiniWeb = () => (
    <motion.div
        className="group bg-[#f7f7f9] shadow-lg rounded-xl overflow-hidden transition transform hover:-translate-y-1 hover:shadow-2xl border border-gray-200 hover:border-[#0b66c2] cursor-pointer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
    >
        {/* Header */}
        <div className="bg-gray-200 px-4 py-2 flex items-center">
            <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-auto">
                <span className="text-sm text-gray-700 font-mono">www.novatech.com</span>
            </div>
        </div>

        {/* Contenido */}
        <div className="p-6 space-y-4 group-hover:bg-white transition-colors duration-300">
            <motion.h2
                className="text-2xl font-semibold text-[#171717]"
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Proyecto Novatech
            </motion.h2>
            <motion.p
                className="text-[#555]"
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Full-Stack Development for Milwaukee Tools. Desarrollo de endpoints en .NET y frontends dinámicos en Next.js integrados con Azure.
            </motion.p>
            <motion.p
                className="text-[#555]"
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                Esta mini web simula el contenido de un proyecto real, mostrando de forma dinámica la experiencia de usuario y la interfaz diseñada.
            </motion.p>
            <motion.div
                className="mt-4 h-32 overflow-y-auto border-t border-gray-300 pt-4 pr-2 custom-scrollbar"
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <p className="text-[#757575] text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nibh eget ullamcorper tristique, purus nunc maximus lorem, et feugiat sem turpis in urna. Aenean luctus, nisi a viverra iaculis, enim lorem posuere nisl.
                </p>
            </motion.div>
            <motion.div
                className="pt-4"
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 1.0 }}
            >
                <Link
                    href="/projects/novatech"
                    className="text-[#0b66c2] hover:underline font-medium"
                >
                    Ver Proyecto
                </Link>
            </motion.div>
        </div>
    </motion.div>
);

export default NovatechMiniWeb;
