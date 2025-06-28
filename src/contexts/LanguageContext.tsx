import { createContext, useState, ReactNode } from "react";

export type Lang = "en" | "es";

interface LanguageContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
