'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import MobileNavBar from "./MobileNavbar";

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
        { href: '#', label: 'RESERVATION' }
    ];

    return (
        <nav className={`navbar-container fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-md py-2' : 'py-4 text-white '}`}>
            <div className="md:hidden lg:hidden">
                <MobileNavBar sections={sections} />
            </div>
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex-shrink-0 hidden md:block">
                    <Link href="/" className="text-lg font-semibold text-white">
                        JPG Restaurant
                    </Link>
                </div>
                <div className="hidden md:flex md:items-center">
                    <ul className="flex space-x-6">
                        {sections.map((link, index) => (
                            <li
                                className={link.label === 'RESERVATION' ? 'bg-red-500 rounded-md px-3 text-white hover:bg-red-600' : 'hover:bg-black text-white rounded-md px-3'}
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
        </nav>
    );
}
