import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/SkillsSection";
import Projects from "../components/ProjectModal";
import Contact from "../components/ContactForm";
import { CursorGlow } from '@/components/Cursorglow';

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#0a0a0f",
      color: "#ffffff",
      overflowX: "hidden",
      width: "100%"
    }}>
      <CursorGlow />

      {/* Hero Section Container */}
      <div style={{ width: "100%" }}>
        <Hero />
      </div>

      {/* Elegant, Centered Structural Layout Wrapper */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px 100px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "120px",
        boxSizing: "border-box"
      }}>
        
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </div>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #18181b",
        padding: "32px 0",
        textAlign: "center",
        fontSize: "12px",
        color: "#52525b",
        backgroundColor: "#07070b"
      }}>
        <p>© 2026 Joyce Gracy Portfolio. All rights reserved.</p>
      </footer>
    </main>
  );
}