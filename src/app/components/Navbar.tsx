import { useRouter } from "next/router";
import Link from "next/link";
export default function Navbar() {
  const links = [ 
    { href: "/location", label: "HOURS & LOCATION" },
    { href: "/menu", label: "MENU" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
    { href: "/", label: "RESERVATIONS" },
  ];

  return (
<nav className="flex bg-white w-screen justify-between items-center">
  <Link href="/"> Logo </Link>
  <ul className="flex justify-end items-center">
    {links.map((link, index) => (
      <li key={index}>
        <Link href={link.href}>{link.label}</Link>
      </li>
    ))}
  </ul>
</nav>
  )
}
