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

export default function Home() {
  return (
    <PageTransition>
      <ScrollProgress />

      <main className="min-h-screen bg-black text-white px-6 py-12 lg:px-20">
        {/* HERO */}
        <section className="max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-white/6 bg-white/3 p-8">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Joyce Gracy
              </h1>
              <p className="mt-2 text-lg text-slate-200">Computer Science Engineering Student</p>

              <p className="mt-4 text-slate-300 max-w-2xl">
                Focus: AI, Data Science, Full Stack Development
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a className="rounded-md bg-cyan-600/90 px-4 py-2 text-sm font-medium text-white shadow-sm" href="mailto:joycegracy72@gmail.com">Email</a>
                <a className="rounded-md border border-white/10 px-4 py-2 text-sm text-white/90" href="https://github.com/joycegracy72-sys" target="_blank" rel="noreferrer">GitHub</a>
                <a className="rounded-md border border-white/10 px-4 py-2 text-sm text-white/90" href="https://www.linkedin.com/in/joycegracy" target="_blank" rel="noreferrer">LinkedIn</a>
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
            <div className="rounded-2xl border border-white/6 bg-white/3 p-6">
              <h2 className="text-2xl font-semibold">Skills</h2>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {SKILLS.map((s) => (
                  <div key={s} className="rounded-lg bg-white/6 px-3 py-2 text-sm font-medium text-slate-200">{s}</div>
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
            <div className="rounded-2xl border border-white/6 bg-white/3 p-6 text-center">
              <h3 className="text-xl font-semibold">Contact</h3>
              <p className="mt-3 text-slate-300">Email: <a className="text-cyan-300 underline" href="mailto:joycegracy72@gmail.com">joycegracy72@gmail.com</a></p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <a href="https://github.com/joycegracy72-sys" target="_blank" rel="noreferrer" className="text-slate-200">GitHub</a>
                <a href="https://www.linkedin.com/in/joycegracy" target="_blank" rel="noreferrer" className="text-slate-200">LinkedIn</a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </PageTransition>
  );
}