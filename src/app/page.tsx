"use client";

import { useState } from "react";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import ScrollProgress from "../components/ScrollProgress";
import PageTransition from "../components/PageTransition";
import CursorGlow from "../components/CursorGlow"; // NEW
import AnimatedBackground from "../components/AnimatedBackground"; // NEW

const PROJECTS = [
  {
    title: "AI-Based Attendance System",
    description: "Face recognition-based attendance system using Python and OpenCV.",
    stack: ["Python", "OpenCV", "Face Recognition"],
    role: "Developer",
    outcome: "AI + data pipeline integration",
    metric: "Student Project",
    demoStatus: "Details on request",
  },
  {
    title: "Harm Detection Analyzer",
    description: "Rule-based text analysis system for detecting harmful patterns.",
    stack: ["Python", "Regex", "Pattern Recognition"],
    role: "Developer",
    outcome: "GRASP 2026 participation",
    metric: "Hackathon Project",
    demoStatus: "Details on request",
  },
  {
    title: "PAN Card Validation System",
    description: "Regex-based validation tool for PAN card format checking.",
    stack: ["JavaScript", "Regex", "Validation"],
    role: "Developer",
    outcome: "Input validation utility",
    metric: "Student Project",
    demoStatus: "Details on request",
  },
  {
    title: "Aadhaar Validation Tool",
    description: "Input validation system using logic and regex patterns.",
    stack: ["JavaScript", "Validation"],
    role: "Developer",
    outcome: "Format correctness checks",
    metric: "Student Project",
    demoStatus: "Details on request",
  },
  {
    title: "Sorting Visualizer",
    description: "Visual representation of sorting algorithms.",
    stack: ["JavaScript", "HTML", "CSS"],
    role: "Developer",
    outcome: "Algorithm understanding",
    metric: "Student Project",
    demoStatus: "Details on request",
  },
  {
    title: "Portfolio Website",
    description: "Next.js portfolio showcasing skills and projects.",
    stack: ["Next.js", "Tailwind CSS"],
    role: "Developer",
    outcome: "Showcase",
    metric: "Live portfolio",
    demoStatus: "Details on request",
  },
];

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("joycegracy72@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="
        px-5 py-2 rounded-xl text-sm font-medium
        border border-white/10
        bg-white/5 backdrop-blur
        hover:border-purple-500/40 hover:bg-white/10
        transition
      "
    >
      {copied ? "Copied ✓" : "Copy Email"}
    </button>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <ScrollProgress />
      <AnimatedBackground /> {/* Ambient animated background */}
      <CursorGlow /> {/* Cursor glow effect */}

      <main className="min-h-screen bg-[#0a0a0f] text-white px-6 lg:px-24 py-12 scroll-smooth">

        {/* HERO */}
        <section className="max-w-5xl mx-auto">
          <Reveal>
            <div className="
              relative rounded-3xl border border-white/10
              bg-gradient-to-br from-white/5 to-white/[0.02]
              backdrop-blur-xl p-12 overflow-hidden
              shadow-[0_0_40px_rgba(168,85,247,0.15)]
            ">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 animate-pulse" />

              <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight 
                  bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 
                  bg-clip-text text-transparent">
                  Joyce Gracy
                </h1>

                <p className="mt-3 text-lg text-white/80 font-light">
                  Computer Science Engineering Student
                </p>

                <p className="mt-5 text-white/60 max-w-2xl">
                  Aspiring AI & Data Science Engineer building real-world software systems with focus on computer vision and full-stack development.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:joycegracy72@gmail.com"
                    className="
                      px-5 py-2 rounded-xl text-sm font-medium
                      bg-gradient-to-r from-purple-500 to-pink-500 text-white
                      hover:opacity-90 transition
                    "
                  >
                    Email me
                  </a>

                  <CopyEmailButton />

                  <a
                    href="https://github.com/joycegracy72-sys"
                    target="_blank"
                    className="px-5 py-2 rounded-xl text-sm border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/joycegracy"
                    target="_blank"
                    className="px-5 py-2 rounded-xl text-sm border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ABOUT */}
        <section className="mt-20 max-w-5xl mx-auto">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-lg hover:scale-[1.01] transition">
              <h2 className="text-3xl font-semibold">About</h2>

              <p className="mt-4 text-white/60">
                I am a Computer Science Engineering student transitioning from Biology-Mathematics background into software engineering. I focus on building practical AI systems and web applications.
              </p>
            </div>
          </Reveal>
        </section>

        {/* PROJECTS */}
        <section className="mt-20 max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-semibold mb-10">Projects</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((p) => (
                <div
                  key={p.title}
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
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
                  <ProjectCard {...p} />
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section className="mt-20 max-w-4xl mx-auto pb-20">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center shadow-lg">
              <h3 className="text-xl font-semibold">Contact</h3>

              <p className="mt-3 text-white/60">
                Let’s connect and build something meaningful.
              </p>

              <div className="mt-6 flex justify-center gap-3 flex-wrap">
                <CopyEmailButton />
                <a className="text-white/70 hover:text-white" href="https://github.com/joycegracy72-sys">GitHub</a>
                <a className="text-white/70 hover:text-white" href="https://www.linkedin.com/in/joycegracy">LinkedIn</a>
              </div>
            </div>
          </Reveal>
        </section>

      </main>
    </PageTransition>
  );
}
