"use client";
import Link from "next/link";
import { navLinks } from "../../../utils/types";
import Hamburger from 'hamburger-react'
import { useState, useEffect } from "react";

export default function Navbar() {
  const links: navLinks[] = [
    { href: "/menu", label: "MENU" },
    { href: "/location", label: "HOURS & LOCATION" },
    { href: "/about", label: "ABOUT" },
    { href: "https://www.opentable.com/", label: "RESERVATIONS" },
  ];


  const [isOpen, setOpen] = useState<boolean>(false);

  window.onscroll = function() {
    const navbar = document.querySelector(".nav");
    if (window.scrollY > 0) {
        navbar.classList.add("fixed", "shadow-md", "p-5");
        navbar.classList.remove("p-10");
    } else {
        navbar.classList.remove("fixed", "shadow-md", "p-5");
        navbar.classList.add("p-10");
    }
};


  const handleMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="nav flex bg-white w-screen justify-between items-center z-50 overflow-hidden p-10 font-bold transition-all duration-300">
      {/* Larger Screens */}
      <Link href="/" className="hidden md:flex sm:mx-10">
        LOGO
      </Link>
      <ul className="hidden sm:flex justify-end sm:mx-10 items-center" >
        {links.map((link, index) => (
          <li key={index} className="sm:mx-5 py-5">
            {link.label === "RESERVATIONS" ? (
              <Link href={link.href} target="_blank" rel="noopener noreferrer" className="border border-black px-4 py-2">{link.label}</Link>
            ) : (
              <Link href={link.href}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Devices */}
      <div className="md:hidden lg:hidden w-screen">
        <div className="flex justify-between items-center overflow-hidden">
          <Link href="/">Placeholder</Link>
          <Hamburger toggled={isOpen} toggle={setOpen} rounded />
        </div>

        <ul
          className={`${
            isOpen ? "max-h-screen" : "max-h-0 invisible"
          } text-center transition-all duration-500 ease-in-out overflow-hidden`}
        >
          {links.map((link, index) => (
            <li key={index} className="p-4 text-l">
              {link.label === "RESERVATIONS" ? (
                <Link href={link.href} target="_blank" rel="noopener noreferrer" onClick={handleMenu}
                className="border border-black p-2">
                  {link.label}
                </Link>
              ) : (
                <Link href={link.href} onClick={handleMenu}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <hr className="m-2"/>
          <div className='flex justify-center items-center m-5'>
            <Link href='https://www.instagram.com/' target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </Link>
          </div>
        </ul>
      </div>
      
    </nav>
  );
}
