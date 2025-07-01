"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useContext } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { translations } from "@/data/translations";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: translations[lang].nav.home, href: "/" },
    { name: translations[lang].nav.about, href: "/about" },
    { name: translations[lang].nav.work, href: "/work" },
    { name: translations[lang].nav.contact, href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md ${
        theme === "light"
          ? "bg-white/80 border-b border-gray-200"
          : "bg-gray-900/80 border-b border-gray-700"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-lg text-gray-900 dark:text-white">
          Sergio Demarco
        </Link>
        <nav className="hidden sm:flex gap-6 flex-1 justify-center">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`text-sm transition-colors ${pathname === href ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              {name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="text-sm text-gray-400 hover:text-white"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="text-sm text-gray-400 hover:text-white"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </nav>
        <button className="sm:hidden text-gray-200" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="sm:hidden px-4 pb-4 flex flex-col gap-2">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className={`py-2 text-sm ${pathname === href ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              {name}
            </Link>
          ))}
          <div className="flex gap-4 mt-2">
            <button
              onClick={toggleTheme}
              className="text-sm text-gray-400 hover:text-white"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="text-sm text-gray-400 hover:text-white"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
