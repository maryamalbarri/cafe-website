"use client";
import { useEffect, useState } from "react";
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleScroll(); // Check scroll position on initial render

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);

        section?.scrollIntoView({
            behavior: "smooth",
        });
    };
    
    return (
        <nav className={`sticky top-0 z-50 flex flex-col items-center px-6 backdrop-blur-md transition-all duration-500 md:flex-row md:justify-center md:px-10
        ${
            scrolled ? "gap-2 py-3" : "gap-3 py-4"
        }
        `}>
            <div className={`font-brand transition-all duration-500 ${
                scrolled
                ? "text-2xl md:left-6"
                : "text-5xl md:left-10"
            } md:absolute`}
            >
                Café</div>
            <div className="flex w-fit items-center rounded-full border px-4 py-2 border-black/10 backdrop-blur-md">
            <div className="flex items-center gap-8 text-sm">
                {scrolled && (
                    <button 
                onClick={() => scrollToSection("hero")}
                className="rounded-full px-4 py-2 text-sm transition-opacity hover:opacity-60"
                >
                    Home
                </button>
                )}
                <button
                    onClick={() => scrollToSection("menu")}
                    className="transition-opacity hover:opacity-60">
                        Menu
                </button>
                <button 
                onClick={() => scrollToSection("about")}
                className="transition-opacity hover:opacity-60"
                >
                    About
                </button>
                <button 
                onClick={() => scrollToSection("contact")}
                className="transition-opacity hover:opacity-60"
                >
                    Contact
                </button>
            </div>
            </div>
            
        </nav>

    );
}