"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto text-center">
      <Reveal>
        <motion.h2 className="text-3xl font-bold mb-6">About Me</motion.h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi, I’m Joyce a Computer Science student from Chennai who transitioned
          from Bio-Maths into technology. I’m passionate about Artificial
          Intelligence, software development, and building solutions that matter.
          My long-term vision is to become a tech entrepreneur and CEO, creating
          impactful products while staying true to my values of loyalty,
          resilience, and continuous growth.
        </p>
        <p className="mt-4 text-gray-400 italic">
          “Building intelligent systems and modern web experiences.”
        </p>
      </Reveal>
    </section>
  );
}
