'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Section {
    href: string;
    label: string;
}

export default function MobileNavbar({ sections }:  { sections: Section[] }) {
    const [isOpen, setIsOpen] = useState(false);
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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={` ${isOpen ?  'fixed top-0 w-full bg-black text-black' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                    <Link href='/' className={`text-2xl font-bold ${scrolled ? 'text-white' : 'text-black'} ${isOpen ? 'text-white' : 'text-white'}`}>JPG</Link>
                    </div>
                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <svg className={`h-10 w-10 ${scrolled ? `text-white` : `text-black`} ${isOpen ? 'text-white' : 'text-white'}`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="sm:hidden bg-black bg-opacity-90">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    {sections.map((section: Section, index: number) => (
    <ul
        className={section.label === 'RESERVATION' ? 'bg-red-500 rounded-md px-3 text-white hover:bg-red-600' : 'text-white hover:bg-gray-700 rounded-md px-3'}
        key={index}
    >
        <Link href={section.href}>
            {section.label}
        </Link>
    </ul>
))}

                    </div>
                </div>
            )}
        </nav>
    );
}

