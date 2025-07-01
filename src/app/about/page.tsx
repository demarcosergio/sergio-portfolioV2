"use client";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const aboutContent = {
  en: {
    sections: [
      {
        title: "Professional Summary",
        paragraphs: [
          "Full-Stack Developer with 7+ years of experience delivering scalable web applications and cloud-based solutions using .NET and modern JavaScript frameworks.",
          "Proven ability to build robust APIs, manage cloud infrastructure (Azure/AWS), and lead cross-functional teams in Agile environments.",
          "Skilled in both frontend and backend development, with a strong focus on clean architecture, performance, and maintainability."
        ]
      },
      {
        title: "Personal Information",
        paragraphs: [
          "Name: Sergio Demarco",
          "Birth Date: 10/01/1994",
          "Nationality: Argentine",
          "Marital Status: Married"
        ]
      },
      {
        title: "Education",
        paragraphs: [
          "(2017 – Dec 2020): Technical degree in mobile and web application development, Universidad Nacional de La Matanza, Buenos Aires.",
          "(2011 – Dec 2012): Aeronautical Technician, Technician School 'Jorge Newbery' N°8, Buenos Aires.",
          "(2007 – Dec 2011): Mechanic in Aircraft Maintenance, Technician School 'Jorge Newbery' N°8, Buenos Aires.",
          "(2014 – Jun 2016): Cyber Security, Educación IT, Buenos Aires."
        ]
      },
      {
        title: "Languages",
        paragraphs: ["English: C1", "Spanish: Native", "Italian: A2"]
      },
      {
        title: "Skills and Technologies",
        paragraphs: [
          ".NET, C#, TypeScript, JavaScript, React, Next.js, Angular, Node.js, ASP.NET, MVC, WebAPI, SQL Server, MongoDB, Cosmos DB, Azure, AWS, Docker, Git, WCF, Microservices, RabbitMQ, Agile, Team leadership, CI/CD."
        ]
      },
      {
        title: "Other Information",
        paragraphs: [
          "Aircraft Maintenance License Nº: 95237",
          "Driver's License: Argentina (B1) and Florida (USA)"
        ]
      }
    ],
    download: {
      title: "Download CV",
      description: "You can download my full resume in PDF format.",
      button: "Download CV"
    }
  },
  es: {
    sections: [
      {
        title: "Resumen Profesional",
        paragraphs: [
          "Desarrollador Full-Stack con más de 7 años de experiencia en la entrega de aplicaciones web escalables y soluciones en la nube utilizando .NET y frameworks modernos de JavaScript.",
          "Capacidad probada para crear APIs robustas, administrar infraestructura cloud (Azure/AWS) y liderar equipos multifuncionales en entornos Ágiles.",
          "Competente en desarrollo frontend y backend, con fuerte enfoque en arquitectura limpia, rendimiento y mantenibilidad."
        ]
      },
      {
        title: "Información Personal",
        paragraphs: [
          "Nombre: Sergio Demarco",
          "Fecha de Nacimiento: 10/01/1994",
          "Nacionalidad: Argentina",
          "Estado Civil: Casado"
        ]
      },
      {
        title: "Educación",
        paragraphs: [
          "(2017 – Dic 2020): Tecnicatura en desarrollo de aplicaciones móviles y web, Universidad Nacional de La Matanza, Buenos Aires.",
          "(2011 – Dic 2012): Técnico Aeronáutico, Escuela Técnica 'Jorge Newbery' N°8, Buenos Aires.",
          "(2007 – Dic 2011): Mecánico en Mantenimiento de Aeronaves, Escuela Técnica 'Jorge Newbery' N°8, Buenos Aires.",
          "(2014 – Jun 2016): Ciberseguridad, Educación IT, Buenos Aires."
        ]
      },
      {
        title: "Idiomas",
        paragraphs: ["Inglés: C1", "Español: Nativo", "Italiano: A2"]
      },
      {
        title: "Habilidades y Tecnologías",
        paragraphs: [
          ".NET, C#, TypeScript, JavaScript, React, Next.js, Angular, Node.js, ASP.NET, MVC, WebAPI, SQL Server, MongoDB, Cosmos DB, Azure, AWS, Docker, Git, WCF, Microservicios, RabbitMQ, Agile, Liderazgo de equipos, CI/CD."
        ]
      },
      {
        title: "Otros Datos de Interés",
        paragraphs: [
          "Licencia de Mecánico en Mantenimiento de Aeronaves Nº: 95237",
          "Licencia de Conducir: Argentina (B1) y Florida (USA)"
        ]
      }
    ],
    download: {
      title: "Descargar CV",
      description: "Puedes descargar mi curriculum completo en formato PDF.",
      button: "Descargar CV"
    }
  }
};

export default function About() {
  const { lang } = useContext(LanguageContext);
  const content = aboutContent[lang];
  return (
    <main className="min-h-screen p-6 pt-8 sm:pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-neutral-100 mb-8">{translations[lang].about.title}</h1>
        <div className="space-y-6 text-lg text-gray-700 dark:text-neutral-300">
          {content.sections.map((section, idx) => (
            <section key={idx} className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-200">{section.title}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-200">{content.download.title}</h2>
            <p className="mt-4">{content.download.description}</p>
            <a
              href="/cv.pdf"
              download
              className="mt-4 inline-block bg-[var(--primary)] text-white px-4 py-2 rounded hover:opacity-90"
            >
              {content.download.button}
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
