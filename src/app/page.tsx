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
                Joyce Gracy (Jo)
              </h1>
              <p className="mt-3 text-cyan-300 font-medium">
                Computer Science Engineering Student
              </p>
              <p className="mt-4 text-slate-300 max-w-2xl">
                Aspiring AI & Data Science Engineer building real-world software projects.
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
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/40">
              <h2 className="text-2xl font-semibold text-white">About</h2>
              <p className="mt-4 text-slate-300">
                Hi, I’m Joyce Gracy. I am a Computer Science Engineering student who transitioned from a Biology-Mathematics background into technology.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-cyan-300">Building skills in</h3>
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
          </Reveal>
        </section>

        {/* SKILLS */}
        <section className="mt-12 max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/85 p-6 shadow-xl shadow-slate-950/30">
              <h2 className="text-2xl font-semibold text-white">Skills</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-cyan-300">Programming Languages</h3>
                  <p className="mt-3 text-slate-200">Python, C, C++, SQL, JavaScript</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-cyan-300">Web Development</h3>
                  <p className="mt-3 text-slate-200">HTML5, CSS3, Responsive Web Design, Basic Node.js, Express</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-cyan-300">AI & Data Concepts</h3>
                  <p className="mt-3 text-slate-200">OpenCV (basic), Face Recognition (LBPH), Data Logic Systems, Pattern-based classification</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-cyan-300">Tools & Soft Skills</h3>
                  <p className="mt-3 text-slate-200">Git, GitHub, Microsoft Office; Problem Solving, Analytical Thinking, Adaptability</p>
                </div>
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