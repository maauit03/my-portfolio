
import Hero from './components/Hero';
import Hologram from './components/Models/Hologram';
import Navbar from './components/Navbar';
import StartButton from './components/StartButton/StartButton';
import Timeline from './components/Timeline';
export default function Home() {
  return (
    <main className="">
      <div className="flex justify-center mt-8">
      <Navbar/>
      </div>
      <Hologram/>
      <section className="min-h-screen bg-zinc-750 text-white font-mono">
        <Hero/> 
        <Timeline />
      </section>
      
    </main>
  );
}
