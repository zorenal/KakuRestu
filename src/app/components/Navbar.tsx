'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const sections = [
        { href: '#Hours&Location', label: 'HOURS & LOCATION' },
        { href: '#Menu', label: 'MENU' },
        { href: '#Gallery', label: 'GALLERY' },
        { href: '#About', label: 'ABOUT' },
        { href: '#Contact', label: 'CONTACT' },
        { href: '#', label: 'RESERVATIONS' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 pt-5 ${scrolled ? 'bg-white shadow-md text-black' : 'bg-transparent'} transition-all duration-500 ${scrolled && 'lg:py-10 lg:text-black'}`}>
            <div className="container mx-auto flex justify-between items-center px-4">
        
            <div className="hidden sm:flex sm:items-center">
                    <Link href="/" className={`text-lg font-semibold ${scrolled ? 'text-black transition-all duration-500' : 'text-white'}`}>
                         {/* Logo */}
                    <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
             
                    </Link>
                </div>
                <div className="hidden md:flex md:items-center">
                    <ul className="flex space-x-6">
                        {sections.map((link, index) => (
                            <li
                                className={`font-semibold ${link.label === 'RESERVATIONS' ? 'bg-red-500 px-3 text-white hover:bg-red-600' : 'px-3'} ${scrolled ? 'text-black transition-all duration-500' : 'text-white'}`}
                                key={index}
                            >
                                <Link href={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="md:hidden lg:hidden">
                <MobileNavbar sections={sections} />
            </div>

        </nav>
    );
}
