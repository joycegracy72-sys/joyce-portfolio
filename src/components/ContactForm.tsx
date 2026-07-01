"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto text-center">
      <Reveal>
        <motion.h2 className="text-3xl font-bold mb-6">Contact</motion.h2>
        <div className="flex justify-center gap-6">
          <a href="mailto:joyce@example.com" className="px-6 py-2 rounded-lg bg-primary hover:scale-105 transition">Email</a>
          <a href="https://github.com/joyce" target="_blank" className="px-6 py-2 rounded-lg bg-secondary hover:scale-105 transition">GitHub</a>
          <a href="https://linkedin.com/in/joycegracy" target="_blank" className="px-6 py-2 rounded-lg bg-accent hover:scale-105 transition">LinkedIn</a>
        </div>
      </Reveal>
    </section>
  );
}
