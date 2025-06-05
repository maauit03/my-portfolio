'use client'
import { useRef } from 'react';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
export default function Home() {
    const skillsRef = useRef<HTMLDivElement | null>(null);

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
    <Skills />
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
