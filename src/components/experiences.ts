export interface Experience {
    company: string;
    client?: string;
    position: string;
    period: string;
    responsibilities: string[];
}

export const experiences: Experience[] = [
    {
        company: "Qualitara",
        client: "Milwaukee Tools",
        position: "Full-Stack Developer",
        period: "Jun 2023 – Present",
        responsibilities: [
            "Built reusable .NET APIs and TypeScript-based Next.js interfaces.",
            "Managed Azure infrastructure.",
            "Mentored junior developers and enforced best practices across the SDLC."
        ]
    },
    {
        company: "Selehann",
        client: "iDocket",
        position: ".NET Senior Developer",
        period: "Apr 2022 – Jun 2023",
        responsibilities: [
            "Led migration from .NET to .NET Core.",
            "Designed microservices using WCF and AWS.",
            "Improved performance and code quality through architectural decisions."
        ]
    },
    {
        company: "The Bridge",
        client: "Grace Kennedy Financial Group",
        position: ".NET Senior Developer",
        period: "Feb 2021 – Apr 2022",
        responsibilities: [
            "Developed APIs and Cosmos DB architecture for fintech solutions.",
            "Contributed to React (web) and Flutter (mobile) platforms on Azure."
        ]
    },
    {
        company: "Urbetrack",
        position: "Technical Lead / .NET Developer",
        period: "Apr 2019 – Feb 2021",
        responsibilities: [
            "Led teams on satellite tracking projects.",
            "Built .NET Core APIs and real-time data processors.",
            "Managed Agile workflows and DevOps pipelines."
        ]
    },
    {
        company: "Globant",
        client: "JPMorgan Chase",
        position: ".NET Developer",
        period: "Sep 2017 – Apr 2019",
        responsibilities: [
            "Developed features using MVC, WebAPI, and SQL Server.",
            "Provided Level 3 support for US and India teams."
        ]
    },
    {
        company: "Just Solutions",
        position: "Junior Developer",
        period: "Nov 2016 – Sep 2017",
        responsibilities: [
            "Worked on full-stack development using WebForms, MVC, SQL Server, and MongoDB."
        ]
    },
    {
        company: "Formanova S.R.L",
        position: "Sales Executive",
        period: "Feb 2015 – Nov 2016",
        responsibilities: [
            "Managed B2B sales and product distribution.",
            "Acted as liaison between suppliers and retailers."
        ]
    },
    {
        company: "Argentinian Army",
        position: "Aircraft Technician Soldier",
        period: "Jan 2014 – Feb 2015",
        responsibilities: [
            "Performed helicopter maintenance.",
            "Handled part classification and logistics."
        ]
    },
    {
        company: "Soluciones Proxy",
        position: "IT Consultant - Freelance",
        period: "Jan 2014 – Feb 2015",
        responsibilities: [
            "Provided IT support and security services for small businesses."
        ]
    },
    {
        company: "NCR Argentina",
        position: "Help Desk Representative",
        period: "Jan 2012 – Jan 2014",
        responsibilities: [
            "Provided Level 2 support for Linux-based POS systems.",
            "Maintained documentation across support channels."
        ]
    }
];
