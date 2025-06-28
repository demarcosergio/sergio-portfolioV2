import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function Work() {
    const { lang } = useContext(LanguageContext);
    const workExperience = [
        {
            id: 1,
            period: "April 2022 – Present",
            company: "Novatech (for Milwaukee Tools)",
            role: "Full-Stack Developer",
            tech: ".NET, Next.js, Azure",
            tasks:
                "Desarrollo de endpoints en .NET, creación de frontends dinámicos basados en diseños Figma, gestión de infraestructura Azure y mentoría de desarrolladores junior.",
        },
        {
            id: 2,
            period: "April 2022 – June 2023",
            company: "Selehann (for iDocket)",
            role: ".NET Senior Developer",
            tech: ".NET, .NET Core, ASP Web, AWS, MySQL",
            tasks:
                "Diseño y migración de microservicios a .NET Core, definición de arquitectura y mejora de procesos de desarrollo.",
        },
        {
            id: 3,
            period: "February 2021 – April 2022",
            company: "The Bridge (for Grace Kennedy Financial Group)",
            role: ".NET Senior Developer",
            tech: ".NET, .NET Core, React, NodeJS, Azure, Docker",
            tasks:
                "Diseño de APIs, desarrollo de endpoints para equipos de front-end y construcción de soluciones escalables en la nube, incluyendo integración con criptomonedas.",
        },
        {
            id: 4,
            period: "April 2019 – February 2021",
            company: "Urbetrack",
            role: "Tech Leader & .NET Developer",
            tech: ".NET, .NET Core, ASP, RabbitMQ, React, Angular, NodeJS, SQL",
            tasks:
                "Liderazgo de equipo en soluciones de tracking satelital, desarrollo de Web APIs y gestión de proyectos ágiles.",
        },
        {
            id: 5,
            period: "September 2017 – April 2019",
            company: "Globant (for JPMorgan Chase)",
            role: ".NET Senior Developer",
            tech: ".NET, .NET Core, SQL",
            tasks:
                "Desarrollo de nuevas funciones en MVC, mantenimiento de sistemas para usuarios internacionales y análisis de datos.",
        },
    ];

    return (
        <main className="min-h-screen bg-white p-6 pt-8 sm:pt-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">
                    {translations[lang].work.title}
                </h1>
                <div className="space-y-8">
                    {workExperience.map((job) => (
                        <div key={job.id} className="bg-gray-50 p-6 rounded-lg shadow">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        {job.company}
                                    </h2>
                                    <p className="text-gray-600">{job.role}</p>
                                </div>
                                <span className="text-sm text-gray-500">{job.period}</span>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-700">
                                    <span className="font-semibold">Tech:</span> {job.tech}
                                </p>
                                <p className="mt-2 text-gray-700">{job.tasks}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
