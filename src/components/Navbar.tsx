"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";

const DesktopNavbar = () => {
    const pathname = usePathname();
    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="hidden sm:block fixed top-12 left-1/2 -translate-x-1/2 z-50">
            <div className="flex gap-2 bg-white/80 backdrop-blur-md shadow-xl rounded-full py-2 px-4 border border-gray-300">
                {navItems.map(({ name, href }) => (
                    <Link
                        key={name}
                        href={href}
                        className={`px-4 py-1.5 text-sm rounded-full transition ${pathname === href ? "bg-linkedin text-white" : "text-gray-700 hover:text-black"
                            }`}
                    >
                        {name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

const Navbar = () => {
    return (
        <>
            <MobileNavbar />
            <DesktopNavbar />
        </>
    );
};

export default Navbar;
