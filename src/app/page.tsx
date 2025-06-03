
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Hologram from './components/Models/Hologram';
import Navbar from './components/Navbar';
import Path from './components/Path';
import Skills from './components/Skills';
import StartButton from './components/StartButton/StartButton';
import Timeline from './components/Timeline';
export default function Home() {
  return (
    <main className="">
      {/* Top section with Path (left) and centered Navbar */}
      <div className="relative flex items-center mt-8 mb-8 h-16">
        {/* Left element */}
        <div className="ml-8 z-10">
          <Path />
        </div>
        {/* Centered Navbar */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Navbar />
        </div>
      </div>


      {/* Main content section */}
      <section className="min-h-screen bg-zinc-800 text-white font-mono">
        <AboutMe/>
        <div className='mt-8'>
        <Hero />
        </div>
        <Skills/>
        <Timeline />
      </section>
    </main>
  );
}
