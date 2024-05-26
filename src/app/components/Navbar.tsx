"use client";
import Link from "next/link";
import { navLinks } from "../../../utils/types";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Navbar() {
  const links: navLinks[] = [
    { href: "/menu", label: "MENU" },
    { href: "/location", label: "HOURS & LOCATION" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
    { href: "/", label: "RESERVATIONS" },
  ];

  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed flex bg-white w-screen justify-between items-center z-50 overflow-hidden p-5 font-bold ">
      {/* Larger Screens */}
      <Link href="/" className="hidden md:flex sm:mx-10">
        LOGO
      </Link>
      <ul className="hidden md:flex justify-end sm:mx-10 items-center">
        {links.map((link, index) => (
          <li key={index} className="md:mx-5">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Devices */}
      <div className="md:hidden lg:hidden w-screen">
        <div className="flex justify-between items-center">
          <Link href="/">LOGO</Link>
          <Hamburger toggled={isOpen} toggle={setOpen} rounded />
        </div>

        <ul
          className={`${
            isOpen ? "max-h-screen" : "max-h-0"
          }   text-center transition-all duration-700 ease-in-out overflow-hidden`}
        >
          {links.map((link, index) => (
            <li key={index} className="p-4 text-l">
              <Link href={link.href} onClick={handleMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
    </nav>
  );
}
