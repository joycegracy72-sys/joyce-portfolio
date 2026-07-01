"use client";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "AI Attendance System",
    description: "A face-recognition tool that logs attendance automatically. No cards, no manual entry.",
    stack: ["Python", "OpenCV", "Face Recognition"]
  },
  {
    title: "Harm Detection Analyzer",
    description: "Scans visual feeds for dangerous situations and flags them in real time.",
    stack: ["Python", "Machine Learning"]
  },
  {
    title: "PAN Card Validation System",
    description: "A validation tool that verifies Indian PAN card formats and ensures accurate user input with error handling.",
    stack: ["Python", "Regex"]
  },
  {
    title: "Aadhaar Validation Tool",
    description: "An application that verifies Aadhaar numbers using checksum validation for secure and efficient processing.",
    stack: ["Python", "Checksum"]
  },
  {
    title: "Sorting Visualizer",
    description: "An interactive web app that visually demonstrates sorting algorithms with dynamic animations.",
    stack: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio featuring smooth animations, glassmorphism UI, and optimized performance.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"]
  }
];

export default function ProjectModal() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 text-left">
      <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
        Key Projects
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight text-white mb-2">
        Three systems built from scratch in Chennai
      </h2>
      <p className="text-zinc-400 text-sm md:text-base mb-12 max-w-2xl">
        Each project starts with a real problem, ends with working code, and proves that clean engineering solves things faster.
      </p>
      
      {/* Structural responsive grid wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  );
}