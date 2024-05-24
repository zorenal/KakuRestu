import { useState } from "react";
import Link from "next/link";

interface Section {
    href: string;
    label: string;
}

interface MobileNavbarProps {
    sections: Section[];
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ sections }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSectionClick = () => {
        setIsOpen(false); // Close the menu when a section is clicked
    };

    return (
        <nav className="fixed top-0 right-0 w-full bg-white z-50 p-8 overflow-hidden h-auto ">
            <div className="flex items-center justify-between">
              
                <Link href="/" className="flex items-center">
                         {/* Logo */}
                    <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
             
                    </Link>
                {/* Menu toggle button */}
                <button
                    onClick={toggleMenu}
                    className="absolute top-8 right-8 md:hidden focus:outline-none"
                >
                    <svg
                        className="h-8 w-8 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>
            <ul className={`flex flex-col space-y-4 mt-5 ${isOpen ? 'block' : 'hidden'}`}>
                {sections.map((link, index) => (
                    <li
                        key={index}
                        className={`font-semibold ${link.label === 'RESERVATIONS' ? 'bg-red-500 px-3 text-white hover:bg-red-600' : 'px-3'}`}
                    >
                        <Link href={link.href} className="block" onClick={handleSectionClick}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MobileNavbar;
