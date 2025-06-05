'use client'
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import { SkillsSection } from './components/Skills';
export default function Home() {

  return (
    <main>
      {/* Top section with Path (left) and centered Navbar */}
    <div className="relative flex items-center mt-4 mb-8 h-16 z-100">
      <div className="fixed z-50">
        <Navbar />
      </div>
    </div>
      {/* Main content section */}
<section className="min-h-screen bg-zinc-800 text-white font-mono">
  <div id="aboutme" className="scroll-mt-24">
    <AboutMe />
  </div>

  <div id="projects" className="scroll-mt-30">
    <Projects />
  </div>

  <div id="skills" className="scroll-mt-24">
    <SkillsSection />
  </div>

  <div id="education" className="scroll-mt-24">
    <Timeline type="education" />
  </div>

  <div id="work" className="scroll-mt-24">
    <Timeline type="work" />
  </div>

  <div id="contact" className="scroll-mt-24">
    <Contact />
  </div>
</section>

    </main>

  );
}
