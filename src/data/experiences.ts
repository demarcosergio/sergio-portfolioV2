export interface Experience {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
}

export const experiences: Experience[] = [
    {
        title: "Full-Stack Developer",
        company: "Qualitara – Milwaukee Tools",
        period: "Jun 2023 – Presente",
        responsibilities: [
            "Desarrollé APIs reutilizables en .NET",
            "Implementé interfaces dinámicas en Next.js",
            "Administré infraestructura Azure",
            "Mentoricé a desarrolladores junior",
        ],
    },
    {
        title: ".NET Senior Developer",
        company: "Selehann – iDocket",
        period: "Abr 2022 – Jun 2023",
        responsibilities: [
            "Migré servicios a .NET Core",
            "Diseñé microservicios usando WCF",
            "Mejoré la arquitectura para escalabilidad",
        ],
    },
    {
        title: ".NET Senior Developer",
        company: "The Bridge – Grace Kennedy Financial",
        period: "Feb 2021 – Abr 2022",
        responsibilities: [
            "Desarrollé APIs para soluciones fintech",
            "Diseñé arquitectura con Cosmos DB",
            "Colaboré en plataformas web y móviles",
        ],
    },
    {
        title: "Technical Lead / .NET Developer",
        company: "Urbetrack",
        period: "Abr 2019 – Feb 2021",
        responsibilities: [
            "Lideré equipos de desarrollo",
            "Implementé procesamiento en tiempo real",
            "Administré flujos ágiles y DevOps",
        ],
    },
    // Agregamos los restantes si querés incluirlos también
];
