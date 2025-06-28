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
        period: "Jun 2023 – Present",
        responsibilities: [
            "Built reusable .NET APIs",
            "Implemented dynamic Next.js interfaces",
            "Managed Azure infrastructure",
            "Mentored junior developers",
        ],
    },
    {
        title: ".NET Senior Developer",
        company: "Selehann – iDocket",
        period: "Apr 2022 – Jun 2023",
        responsibilities: [
            "Migrated services to .NET Core",
            "Designed microservices with WCF",
            "Improved architecture for scalability",
        ],
    },
    {
        title: ".NET Senior Developer",
        company: "The Bridge – Grace Kennedy Financial",
        period: "Feb 2021 – Apr 2022",
        responsibilities: [
            "Developed APIs for fintech solutions",
            "Designed architecture with Cosmos DB",
            "Collaborated on web and mobile platforms",
        ],
    },
    {
        title: "Technical Lead / .NET Developer",
        company: "Urbetrack",
        period: "Apr 2019 – Feb 2021",
        responsibilities: [
            "Led development teams",
            "Implemented real-time processing",
            "Managed Agile flows and DevOps",
        ],
    },
    // Agregamos los restantes si querés incluirlos también
];
