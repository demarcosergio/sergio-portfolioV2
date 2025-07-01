export interface Experience {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
    role?: string;
    tech?: string;
    tasks?: string;
}

export const experiences: Experience[] = [
    {
        title: "Full-Stack Developer",
        company: "Qualitara – Milwaukee Tools",
        period: "Jun 2023 – Present",
        role: "Full-Stack Developer",
        tech: ".NET, Next.js, Azure",
        responsibilities: [
            "Built reusable .NET APIs",
            "Implemented dynamic Next.js interfaces",
            "Managed Azure infrastructure",
            "Mentored junior developers",
        ],
        tasks:
            "Desarrollo de endpoints en .NET, creación de frontends dinámicos basados en diseños Figma, gestión de infraestructura Azure y mentoría de desarrolladores junior.",
    },
    {
        title: ".NET Senior Developer",
        company: "Selehann – iDocket",
        period: "Apr 2022 – Jun 2023",
        role: ".NET Senior Developer",
        tech: ".NET, .NET Core, ASP Web, AWS, MySQL",
        responsibilities: [
            "Migrated services to .NET Core",
            "Designed microservices with WCF",
            "Improved architecture for scalability",
        ],
        tasks:
            "Diseño y migración de microservicios a .NET Core, definición de arquitectura y mejora de procesos de desarrollo.",
    },
    {
        title: ".NET Senior Developer",
        company: "The Bridge – Grace Kennedy Financial",
        period: "Feb 2021 – Apr 2022",
        role: ".NET Senior Developer",
        tech: ".NET, .NET Core, React, NodeJS, Azure, Docker",
        responsibilities: [
            "Developed APIs for fintech solutions",
            "Designed architecture with Cosmos DB",
            "Collaborated on web and mobile platforms",
        ],
        tasks:
            "Diseño de APIs, desarrollo de endpoints para equipos de front-end y construcción de soluciones escalables en la nube, incluyendo integración con criptomonedas.",
    },
    {
        title: "Technical Lead / .NET Developer",
        company: "Urbetrack",
        period: "Apr 2019 – Feb 2021",
        role: "Tech Leader & .NET Developer",
        tech: ".NET, .NET Core, ASP, RabbitMQ, React, Angular, NodeJS, SQL",
        responsibilities: [
            "Led development teams",
            "Implemented real-time processing",
            "Managed Agile flows and DevOps",
        ],
        tasks:
            "Liderazgo de equipo en soluciones de tracking satelital, desarrollo de Web APIs y gestión de proyectos ágiles.",
    },
    {
        title: ".NET Senior Developer",
        company: "Globant – JPMorgan Chase",
        period: "Sep 2017 – Apr 2019",
        role: ".NET Senior Developer",
        tech: ".NET, .NET Core, SQL",
        responsibilities: [
            "Developed MVC features",
            "Maintained systems for international users",
            "Performed data analysis",
        ],
        tasks:
            "Desarrollo de nuevas funciones en MVC, mantenimiento de sistemas para usuarios internacionales y análisis de datos.",
    },
    {
        title: "Junior Developer",
        company: "Just Solutions",
        period: "Nov 2016 – Sep 2017",
        role: "Junior Developer",
        tech: "WebForms, MVC, SQL Server, MongoDB",
        responsibilities: [
            "Contributed to full-stack features",
            "Worked with WebForms, MVC, SQL Server and MongoDB",
        ],
        tasks: "Contribución full-stack usando WebForms, MVC, SQL Server y MongoDB.",
    },
];
