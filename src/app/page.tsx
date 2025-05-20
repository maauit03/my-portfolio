import Hero from './components/Hero';
import Timeline from './components/Timeline';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white font-mono">
      <Hero/>
      <Timeline />
    </main>
  );
}
