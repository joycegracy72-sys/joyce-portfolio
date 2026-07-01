"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

interface SkillCategory {
  name: string;
  color: "purple" | "blue" | "green" | "pink";
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    color: "purple",
    skills: ["Python", "C", "C++", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    name: "Frontend",
    color: "blue",
    skills: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
  },
  {
    name: "AI & Data",
    color: "green",
    skills: ["ML Concepts", "OpenCV", "Pattern Recognition", "Data Analysis"],
  },
  {
    name: "Tools & Mindset",
    color: "pink",
    skills: ["Git", "GitHub", "Problem Solving", "System Design"],
  },
];

const colorMap = {
  purple: {
    header: "text-purple-400",
    border: "border-purple-500/30 hover:border-purple-500/60",
    bg: "bg-purple-500/10 hover:bg-purple-500/20",
  },
  blue: {
    header: "text-blue-400",
    border: "border-blue-500/30 hover:border-blue-500/60",
    bg: "bg-blue-500/10 hover:bg-blue-500/20",
  },
  green: {
    header: "text-green-400",
    border: "border-green-500/30 hover:border-green-500/60",
    bg: "bg-green-500/10 hover:bg-green-500/20",
  },
  pink: {
    header: "text-pink-400",
    border: "border-pink-500/30 hover:border-pink-500/60",
    bg: "bg-pink-500/10 hover:bg-pink-500/20",
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-5xl mx-auto">
      <Reveal>
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent mb-2">
            Skills & Expertise
          </h2>
          <p className="text-slate-400">Comprehensive technical foundation across multiple domains</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <Reveal key={category.name}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-black/80 backdrop-blur-xl p-6 transition-all duration-300"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 pointer-events-none rounded-2xl" />

              <div className="relative z-10">
                {/* Category header */}
                <h3
                  className={`text-lg font-bold mb-4 ${
                    colorMap[category.color].header
                  }`}
                >
                  {category.name}
                </h3>

                {/* Skills chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 rounded-lg border bg-white/5 text-sm font-medium text-slate-200 transition-all duration-300 cursor-default ${
                        colorMap[category.color].border
                      } ${colorMap[category.color].bg}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
