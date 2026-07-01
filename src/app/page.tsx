import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/SkillsSection";
import Projects from "../components/ProjectModal";
import Contact from "../components/ContactForm";
import { CursorGlow } from '@/components/Cursorglow'; // Adjust the path based on where your component lives

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <CursorGlow />
    </main>
  );
}

