"use client";

import { useState } from "react";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import ScrollProgress from "../components/ScrollProgress";
import PageTransition from "../components/PageTransition";

const SKILLS = [
  "Python",
  "C",
  "C++",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "Next.js",
  "Tailwind CSS",
  "OpenCV",
  "ML Concepts",
  "Git",
  "GitHub",
];

const PROJECTS = [
  {
    title: "AI Attendance System",
    description: "Face recognition based attendance using OpenCV.",
    stack: ["Python", "OpenCV", "ML"],
    role: "Developer",
    outcome: "Prototype",
    metric: "Student Project",
    demoStatus: "Details on request",
  },
  {
    title: "Harm Detection Analyzer",
    description: "Rule-based text classifier for harmful content detection.",
    stack: ["Python", "NLP", "Regex"],
    role: "Developer",
    outcome: "Prototype",
    metric: "Student Project",
    demoStatus: "Details on request",
  },
  {
    title: "PAN Card Validation System",
    description: "Regex-based PAN validation and formatting tool.",
    stack: ["JavaScript", "Regex"],
    role: "Developer",
    outcome: "Utility",
    metric: "Student Project",
    demoStatus: "Details on request",
  },
  {
    title: "Aadhaar Validation Tool",
    description: "Basic validation utilities for Aadhaar numbers.",
    stack: ["JavaScript", "Validation"],
    role: "Developer",
    outcome: "Utility",
    metric: "Student Project",
    demoStatus: "Details on request",
  },
  {
    title: "Sorting Visualizer",
    description: "Interactive visualizer for common sorting algorithms.",
    stack: ["JavaScript", "HTML", "CSS"],
    role: "Developer",
    outcome: "Learning Tool",
    metric: "Student Project",
    demoStatus: "Details on request",
  },
  {
    title: "Portfolio Website",
    description: "This portfolio showcasing projects and skills.",
    stack: ["Next.js", "Tailwind CSS"],
    role: "Developer",
    outcome: "Showcase",
    metric: "Student Project",
    demoStatus: "Details on request",
  },
];

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("joycegracy72@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={handleCopy}
      className="rounded-md border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20"
    >
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <ScrollProgress />

      <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12 lg:px-20">
        {/* HERO */}
        <section className="max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/85 p-8 shadow-xl shadow-slate-950/30">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                Joyce Gracy
              </h1>
              <p className="mt-3 text-cyan-300 font-medium">
                Computer Science student building production-ready web apps powered by Computer Vision and NLP.
              </p>
              <p className="mt-4 text-slate-300 max-w-2xl">
                Focus: AI, Data Science, Full Stack Development
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a className="rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-slate-950 shadow-sm shadow-cyan-500/20 transition hover:bg-cyan-500" href="mailto:joycegracy72@gmail.com">Email</a>
                <CopyEmailButton />
                <a className="rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300" href="https://github.com/joycegracy72-sys" target="_blank" rel="noreferrer">GitHub</a>
                <a className="rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300" href="https://www.linkedin.com/in/joycegracy" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ABOUT */}
        <section className="mt-12 max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-white/6 bg-white/3 p-6">
              <h2 className="text-2xl font-semibold">About</h2>
              <p className="mt-3 text-slate-300">
                I build practical AI and web solutions that bridge models and user-facing applications. I focus on computer vision, basic machine learning concepts, and full-stack development using modern tools.
              </p>
            </div>
          </Reveal>
        </section>

        {/* SKILLS */}
        <section className="mt-12 max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/85 p-6 shadow-xl shadow-slate-950/30">
              <h2 className="text-2xl font-semibold text-white">Skills</h2>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {SKILLS.map((s) => (
                  <div key={s} className="rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm font-medium text-cyan-100 shadow-sm shadow-cyan-500/10">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* PROJECTS */}
        <section className="mt-12 max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-semibold">Projects</h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <ProjectCard
                  key={p.title}
                  title={p.title}
                  description={p.description}
                  stack={p.stack}
                  role={p.role}
                  outcome={p.outcome}
                  metric={p.metric}
                  demoStatus={p.demoStatus}
                />
              ))}
            </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section className="mt-12 max-w-4xl mx-auto pb-20">
          <Reveal>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/85 p-6 text-center shadow-xl shadow-slate-950/30">
              <h3 className="text-xl font-semibold text-white">Contact</h3>
              <p className="mt-3 text-slate-300">
                Email: <a className="text-cyan-300 underline" href="mailto:joycegracy72@gmail.com">joycegracy72@gmail.com</a>
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <CopyEmailButton />
                <a className="text-slate-200 transition hover:text-cyan-300" href="https://github.com/joycegracy72-sys" target="_blank" rel="noreferrer">GitHub</a>
                <a className="text-slate-200 transition hover:text-cyan-300" href="https://www.linkedin.com/in/joycegracy" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </PageTransition>
  );
}