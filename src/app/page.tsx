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
    title: "Sorting Visualizer / Algorithm Project",
    description: "Visual representation of sorting algorithms like bubble and selection sort.",
    stack: ["JavaScript", "HTML", "CSS"],
    role: "Developer",
    outcome: "Algorithm understanding",
    metric: "Student Project",
    demoStatus: "Details on request",
  },
  {
    title: "Personal Portfolio Website",
    description: "This website built using Next.js and Tailwind CSS to showcase skills and projects.",
    stack: ["Next.js", "Tailwind CSS"],
    role: "Developer",
    outcome: "Portfolio showcase",
    metric: "Live portfolio",
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
      className="px-6 py-3 rounded-lg font-semibold text-slate-100 border border-slate-700 bg-slate-900/50 backdrop-blur hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300"
    >
      {copied ? "Copied! ✓" : "Copy email"}
    </button>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <ScrollProgress />

      <main className="min-h-screen bg-black text-slate-50 px-6 py-12 lg:px-24">
        {/* HERO */}
        <section className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-black/80 backdrop-blur-xl p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 pointer-events-none rounded-2xl" />
              <div className="relative z-10">
                <h1 className="text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Joyce Gracy
                </h1>
                <p className="mt-3 text-lg font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Computer Science Engineering Student
                </p>
                <p className="mt-4 text-slate-300 max-w-2xl leading-relaxed">
                  Aspiring AI & Data Science Engineer building production-grade software and real-world solutions.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    className="px-6 py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                    href="mailto:joycegracy72@gmail.com"
                  >
                    Email me
                  </a>
                  <CopyEmailButton />
                  <a
                    className="px-6 py-3 rounded-lg font-semibold text-slate-100 border border-slate-700 bg-slate-900/50 backdrop-blur hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300"
                    href="https://github.com/joycegracy72-sys"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="px-6 py-3 rounded-lg font-semibold text-slate-100 border border-slate-700 bg-slate-900/50 backdrop-blur hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300"
                    href="https://www.linkedin.com/in/joycegracy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ABOUT */}
        <section className="mt-16 max-w-5xl mx-auto">
          <Reveal>
            <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-black/80 backdrop-blur-xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5 pointer-events-none" />
              <div className="relative z-10">
              <h2 className="text-3xl font-bold text-slate-100">About</h2>
              <p className="mt-4 text-slate-300">
                Hi, I’m Joyce Gracy. I am a Computer Science Engineering student who transitioned from a Biology-Mathematics background into technology.
              </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/80 backdrop-blur p-6">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Building skills in</h3>
                  <ul className="mt-3 space-y-2 text-slate-200">
                    <li>• Web development</li>
                    <li>• AI fundamentals</li>
                    <li>• Data handling and logic-based systems</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-cyan-300">What I enjoy</h3>
                  <p className="mt-3 text-slate-200">
                    I enjoy building real projects such as attendance systems, validation tools, and logic-based analyzers.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-slate-300">
                My goal is to grow into AI engineering and full-stack development roles while continuously improving my problem-solving and software building skills.
              </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SKILLS */}
        <section className="mt-16 max-w-5xl mx-auto">
          <Reveal>
            <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-black/80 backdrop-blur-xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-blue-600/5 pointer-events-none" />
              <div className="relative z-10">
              <h2 className="text-3xl font-bold text-slate-100">Skills & Expertise</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800/50 bg-gradient-to-br from-slate-950/90 to-slate-900/50 backdrop-blur p-6 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-purple-400">Programming</h3>
                  <p className="mt-3 text-slate-200">Python, C, C++, SQL, JavaScript</p>
                </div>
                <div className="rounded-xl border border-slate-800/50 bg-gradient-to-br from-slate-950/90 to-slate-900/50 backdrop-blur p-6 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-blue-400">Web Stack</h3>
                  <p className="mt-4 text-slate-300">HTML5, CSS3, JavaScript, Node.js, Express, Next.js</p>
                </div>
                <div className="rounded-xl border border-slate-800/50 bg-gradient-to-br from-slate-950/90 to-slate-900/50 backdrop-blur p-6 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-purple-400">AI & ML</h3>
                  <p className="mt-4 text-slate-300">OpenCV, Face Recognition (LBPH), Pattern Classification, Data Logic</p>
                </div>
                <div className="rounded-xl border border-slate-800/50 bg-gradient-to-br from-slate-950/90 to-slate-900/50 backdrop-blur p-6 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-blue-400">Tools & Mindset</h3>
                  <p className="mt-4 text-slate-300">Git, GitHub, MS Office, Problem Solving, Analytical Thinking</p>
                </div>
              </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* PROJECTS */}
        <section className="mt-16 max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
              <p className="mt-2 text-slate-400">Real-world solutions and learning projects</p>
            </div>

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