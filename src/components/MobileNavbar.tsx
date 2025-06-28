"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
    const pathname = usePathname();
    const containerRef = useRef<HTMLDivElement>(null);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Contact", href: "/contact" },
    ];

    // Efecto para centrar el elemento activo con transición suave
    useEffect(() => {
        if (containerRef.current) {
            const activeEl = containerRef.current.querySelector(".active-nav") as HTMLElement;
            if (activeEl) {
                const containerWidth = containerRef.current.offsetWidth;
                const offsetLeft = activeEl.offsetLeft;
                const itemWidth = activeEl.offsetWidth;
                const scrollPosition = offsetLeft + itemWidth / 2 - containerWidth / 2;
                containerRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
            }
        }
    }, [pathname]);

    return (
        <nav className="fixed bottom-0 left-0 w-full z-50 sm:hidden">
            <div
                ref={containerRef}
                className="flex overflow-x-auto snap-x snap-mandatory transition-all duration-500"
            >
                {/* Espaciador izquierdo para centrar */}
                <div className="flex-shrink-0" style={{ width: "50vw" }} />
                {navItems.map(({ name, href }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={name}
                            href={href}
                            className={`flex-shrink-0 snap-center text-center py-3 rounded-full mx-1 transition-all duration-300 ${isActive
                                    ? "active-nav w-1/2 bg-black text-white opacity-100"
                                    : "w-1/2 bg-gray-200 text-gray-700 opacity-80"
                                }`}
                        >
                            {name}
                        </Link>
                    );
                })}
                {/* Espaciador derecho para completar el scroll */}
                <div className="flex-shrink-0" style={{ width: "50vw" }} />
            </div>
        </nav>
    );
};

export default MobileNavbar;
