"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Componente para la mini web de Novatech
  const NovatechMiniWeb = () => (
    <motion.div
      className="bg-[#f7f7f9] shadow-lg rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={fadeInUp}
    >
      {/* Header simulando controles de navegador */}
      <div className="bg-gray-200 p-3 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-auto">
          <span className="text-sm text-gray-700">www.novatech.com</span>
        </div>
      </div>
      {/* Contenido simulando una mini web */}
      <div className="p-6">
        <motion.h2
          className="text-2xl font-bold text-[#171717] mb-4"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Proyecto Novatech
        </motion.h2>
        <motion.p
          className="text-[#757575] mb-2"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full-Stack Development for Milwaukee Tools. Desarrollo de endpoints en .NET y frontends dinámicos en Next.js integrados con Azure.
        </motion.p>
        <motion.p
          className="text-[#757575]"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Esta mini web simula el contenido de un proyecto real, mostrando de forma dinámica la experiencia de usuario y la interfaz diseñada.
        </motion.p>
        <motion.div
          className="mt-6 h-32 overflow-y-auto border-t border-gray-300 pt-4"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-[#757575]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nibh eget ullamcorper tristique, purus nunc maximus lorem, et feugiat sem turpis in urna.
          </p>
        </motion.div>
        <motion.div
          className="mt-6"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Link href="/projects/novatech" className="text-indigo-600 hover:underline">
            Ver Proyecto
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );

  // Otros proyectos se muestran como cards simples
  const otherProjects = [
    {
      id: 2,
      title: "Selehann",
      description:
        ".NET Senior Developer for iDocket. Migración de microservicios a .NET Core, garantizando rendimiento y escalabilidad.",
    },
    {
      id: 3,
      title: "The Bridge",
      description:
        ".NET Senior Developer for Grace Kennedy Financial Group. Creación de APIs, dashboards con React y soluciones escalables en Azure.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Sección Hero */}
      <motion.section
        className="pt-8 sm:pt-36 pb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-6xl font-bold text-[#171717]"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sergio Demarco
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-[#757575]"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Innovating digital experiences.
          </motion.p>
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg text-[#757575]"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Desarrollador y diseñador apasionado por crear experiencias digitales únicas que combinan innovación y estética. Con experiencia en .NET, Next.js y Azure, he liderado proyectos de gran impacto internacional.
          </motion.p>
          <motion.div
            className="mt-8"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/work"
              className="inline-block bg-linkedin text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Ver más
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Sección Proyectos Destacados */}
      <motion.section
        className="pb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-[#171717] text-center mb-8"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Proyectos Destacados
          </motion.h2>
          <div className="space-y-8">
            {/* Proyecto Novatech con mini web simulada */}
            <NovatechMiniWeb />
            {/* Cards para otros proyectos */}
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.id}
                className="bg-[#f7f7f9] shadow-lg rounded-lg p-6 transition transform hover:-translate-y-1 hover:shadow-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i + 1) * 0.2 }}
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-bold text-[#171717]">
                  {project.title}
                </h3>
                <p className="mt-3 text-[#171717]">{project.description}</p>
                <div className="mt-4">
                  <Link
                    href={`/projects/${project.title.toLowerCase().replace(" ", "")}`}
                    className="text-indigo-600 hover:underline"
                  >
                    Conocer más
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
