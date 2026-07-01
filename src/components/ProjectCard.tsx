"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ title, description, stack, role, outcome, metric, demoStatus }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        group relative overflow-hidden rounded-2xl
        border border-white/10
        bg-white/5 backdrop-blur-xl
        p-6 transition-all duration-500
        hover:-translate-y-2
        hover:border-purple-400/40
        hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
      "
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>

        {/* Tech stack badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white/80 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-5 text-xs text-white/50 flex flex-col gap-1">
          <span><strong>Role:</strong> {role}</span>
          <span><strong>Outcome:</strong> {outcome}</span>
          <span><strong>Metric:</strong> {metric}</span>
          <span><strong>Status:</strong> {demoStatus}</span>
        </div>
      </div>
    </motion.div>
  );
}
