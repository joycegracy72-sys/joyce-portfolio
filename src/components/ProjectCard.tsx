"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  role: string;
  outcome: string;
  metric: string;
  demoStatus: string;
  onSelect?: () => void;
};

export default function ProjectCard({
  title,
  description,
  stack,
  role,
  outcome,
  metric,
  demoStatus,
  onSelect = () => {},
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      onClick={onSelect}
      className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/10 backdrop-blur-xl transition duration-300 hover:border-cyan-300/30 hover:bg-white/15"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10 opacity-80 pointer-events-none" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-cyan-100">Project</span>
          <span className="rounded-full bg-slate-900/90 px-3 py-1 text-[11px] font-semibold text-white">{metric}</span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/10 px-3 py-3 text-[11px] uppercase tracking-[0.28em] text-slate-200">
            Role: <span className="font-semibold text-white">{role}</span>
          </div>
          <div className="rounded-2xl bg-white/10 px-3 py-3 text-[11px] uppercase tracking-[0.28em] text-slate-200">
            Outcome: <span className="font-semibold text-white">{outcome}</span>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-slate-300">
          {demoStatus}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.35em] text-slate-400">Click for details</span>
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 group-hover:scale-105">
            View details
          </span>
        </div>
      </div>
    </motion.article>
  );
}
