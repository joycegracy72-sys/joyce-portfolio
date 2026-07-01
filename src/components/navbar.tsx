"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-primary">Joyce Gracy</h1>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="text-white">☰</span>
        </button>
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-primary transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden flex flex-col items-center bg-black/80"
        >
          {links.map((link) => (
            <li key={link.name} className="py-2">
              <a href={link.href} onClick={() => setOpen(false)}>{link.name}</a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
