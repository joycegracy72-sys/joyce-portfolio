"use client";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
}

export default function ProjectCard({ title, description, stack }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-xl bg-white/10 backdrop-blur-md p-6 shadow-lg flex flex-col gap-4"
    >
      {/* Title */}
      <h3 className="text-xl font-semibold">{title}</h3>

      {/* Description */}
      <p className="text-gray-300">{description}</p>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full bg-primary/30 text-white/80 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 mt-4">
        <button className="px-4 py-2 rounded-lg bg-secondary hover:scale-105 transition">
          GitHub
        </button>
        <button className="px-4 py-2 rounded-lg bg-accent hover:scale-105 transition">
          Live Demo
        </button>
      </div>
    </motion.div>
  );
}
