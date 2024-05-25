import Link from "next/link";
import { navLinks } from "../../../utils/types";

export default function Navbar() {
  
const links: navLinks[] = [ 
    { href: "/menu", label: "MENU" },
    { href: "/location", label: "HOURS & LOCATION" },
    // { href: "/gallery", label: "GALLERY" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
    { href: "/", label: "RESERVATIONS" },
];

return (
<nav className="fixed flex bg-white w-screen justify-between items-center z-50">
  <Link href="/" className="mx-10"> LOGO </Link>
  <ul className="flex justify-end mx-10 items-center">
    {links.map((link, index) => (
      <li key={index} className="mx-10">
        <Link href={link.href}>{link.label}</Link>
      </li>
    ))}
  </ul>
</nav>
  )
}
