"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

interface ProjectModalProps {
  isOpen: boolean;
  project: {
    title: string;
    description: string;
    stack: string[];
    role: string;
    outcome: string;
    metric: string;
    challenges?: string;
    solutions?: string;
  };
  onClose: () => void;
}

export default function ProjectModal({
  isOpen,
  project,
  onClose,
}: ProjectModalProps) {
  // Prevent page scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-black/90 backdrop-blur-xl p-8 shadow-2xl"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 pointer-events-none rounded-2xl" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-100 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent mb-2">
              {project.title}
            </h2>
            <p className="text-slate-400">{project.metric}</p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Engineering Bottleneck */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-purple-400 mb-3">
                The Engineering Bottleneck
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.challenges ||
                  "Built with cutting-edge technology stack to solve real-world problems."}
              </p>
            </div>

            {/* Solution Blueprint */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-blue-400 mb-3">
                The Solution Blueprint
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.solutions ||
                  project.outcome ||
                  "Delivered production-grade solution with measurable impact."}
              </p>
            </div>
          </div>

          {/* Project details */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">
                Role
              </p>
              <p className="text-slate-100 font-medium">{project.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">
                Impact
              </p>
              <p className="text-slate-100 font-medium">{project.outcome}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:bg-white/10 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
