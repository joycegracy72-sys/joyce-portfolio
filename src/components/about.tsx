"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="text-left max-w-3xl mx-auto">
      <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
        About Me
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight text-white">
        My Journey into Tech
      </h2>
      <p className="text-zinc-400 mt-6 text-base md:text-lg leading-relaxed">
        Hi, I’m Joyce, a Computer Science student from Chennai who transitioned from **Bio-Maths into technology**. 
        I’m passionate about Artificial Intelligence, software development, and building solutions that matter. 
        My long-term vision is to become a tech entrepreneur and CEO, creating impactful products while staying 
        true to my values of loyalty, resilience, and continuous growth.
      </p>
      
      {/* Premium minimal card block for your quote */}
      <div className="mt-8 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 border-l-4 border-l-blue-500 italic text-zinc-300 text-sm md:text-base">
        “Building intelligent systems and modern web experiences.”
      </div>
    </div>
  );
}