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
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setOpen(false);
  };

  return (
    <nav className={` w-full flex items-center justify-between z-50 text-md sm:text-xl font-bold transition-all duration-300 ${scrolled ? " fixed top-0 left-0 p-5 text-black bg-white " : "absolute top-0 p-8 bg-transparent text-shadow text-white"}`}>
      {/* Larger Screens */}
<div className="hidden md:flex justify-between items-center w-full">
  <Link href="/" className="sm:mx-10">
    PLACEHOLDER
  </Link>
  <ul className="hidden sm:flex ml-4">
    {links.map((link, index) => (
      <li key={index} className="sm:mx-5 py-5">
        {link.label === "RESERVATIONS" ? (
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-4 py-2 hover:bg-yellow-500 hover:text-white hover:transition-all hover:duration-300"
          >
            {link.label}
          </Link>
        ) : (
          <Link
            href={link.href}
            className="hover:text-gray-300 hover:transition-all hover:duration-300"
          >
            {link.label}
          </Link>
        )}
      </li>
    ))}
  </ul>
</div>

      {/* Mobile Devices */}
      <div className="md:hidden w-screen">
        <div className="flex justify-between items-center overflow-hidden">
          <Link href="/">PLACEHOLDER</Link>
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
          <hr className="m-5"/>
          <div className='flex flex-row justify-center items-center'>
            <Link href='https://www.instagram.com/' target='_blank' className="mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </Link>
          <Link href="https://github.com/zorenal" target="_blank" className="mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              height="24"
              width="21"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </Link>
          </div>
        </ul>
      </div>
      
    </nav>
  );
}
