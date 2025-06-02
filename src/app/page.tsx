
import Hero from './components/Hero';
import Hologram from './components/Models/Hologram';
import Navbar from './components/Navbar';
import Path from './components/Path';
import StartButton from './components/StartButton/StartButton';
import Timeline from './components/Timeline';
export default function Home() {
  return (
    <main className="">
      <div className="flex items-strech mt-8">
      <div className="ml-8 w-auto"><Path/></div>
      <div className='place-self-center'>
        <Navbar/>      
      </div>
      </div>
      <Hologram/>
      <section className="min-h-screen bg-zinc-750 text-white font-mono">
        <img src="" alt="" />
        <Hero/> 
        <Timeline />
      </section>
      
    </main>
  );
}
