import { Lang } from "../contexts/LanguageContext";

export const translations = {
  en: {
    nav: { home: "Home", about: "About", work: "Work", contact: "Contact" },
    home: { title: "My Professional Journey", click: "Click for more info" },
    about: { title: "About Me" },
    contact: { title: "Contact" },
    work: { title: "Professional Experience" },
    novatech: { back: "Back to home", title: "Novatech – Milwaukee Tools Project" }
  },
  es: {
    nav: { home: "Inicio", about: "Acerca", work: "Trabajo", contact: "Contacto" },
    home: { title: "Mi Trayectoria Profesional", click: "Click para mas info" },
    about: { title: "Acerca de mí" },
    contact: { title: "Contacto" },
    work: { title: "Experiencia Profesional" },
    novatech: { back: "Volver al inicio", title: "Novatech – Proyecto para Milwaukee Tools" }
  },
};

export function t(lang: Lang, section: string, key: string): string {
  // @ts-ignore
  return translations[lang]?.[section]?.[key] || "";
}
