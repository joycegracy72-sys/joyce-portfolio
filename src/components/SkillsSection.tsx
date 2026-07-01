"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const coreSkills = [
  "Python","C","C++","SQL","HTML","CSS","JavaScript","TypeScript","Tailwind CSS","Next.js","Git","GitHub"
];

const emergingSkills = [
  "Artificial Intelligence Fundamentals","Prompt Engineering","Data Science","Web Development"
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto text-center">
      <Reveal>
        <motion.h2 className="text-3xl font-bold mb-10">Skills</motion.h2>
        <h3 className="text-xl font-semibold mb-6">Core Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {coreSkills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl bg-white/10 backdrop-blur-md p-6 shadow-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-6">Emerging Interests</h3>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {emergingSkills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl bg-white/10 backdrop-blur-md p-6 shadow-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
