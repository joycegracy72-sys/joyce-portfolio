"use client";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

const projects = [
  { title: "AI Attendance System", description: "Facial recognition-based attendance management system.", stack: ["Python","OpenCV"] },
  { title: "Harm Detection Analyzer", description: "Detects potentially harmful content using ML.", stack: ["Python"] },
  { title: "PAN Card Validation System", description: "Validates Indian PAN card formats.", stack: ["Python"] },
  { title: "Aadhaar Validation Tool", description: "Verifies Aadhaar numbers using checksum.", stack: ["Python"] },
  { title: "Sorting Visualizer", description: "Interactive visualizer for sorting algorithms.", stack: ["HTML","CSS","JavaScript"] },
  { title: "Portfolio Website", description: "Personal portfolio showcasing projects and skills.", stack: ["Next.js","Tailwind CSS"] },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
