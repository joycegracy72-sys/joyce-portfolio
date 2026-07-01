"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
      >
        Joyce Gracy 
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-xl md:text-2xl max-w-2xl"
      >
        Aspiring AI & Software Engineer · Future Tech Entrepreneur
      </motion.p>
      <div className="mt-6 flex gap-4">
        <a href="#projects" className="px-6 py-2 rounded-lg bg-primary hover:scale-105 transition">
          View My Work
        </a>
        <a href="#contact" className="px-6 py-2 rounded-lg bg-secondary hover:scale-105 transition">
          Let’s Connect
        </a>
      </div>
    </section>
  );
}
