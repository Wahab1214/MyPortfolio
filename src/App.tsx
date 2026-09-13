import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import CursorGlow from '@/components/CursorGlow';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen show={loading} onComplete={() => {}} />
      <CursorGlow />

      <main className="relative bg-ink-950">
        {/* Ambient background grid */}
        <div className="pointer-events-none fixed inset-0 bg-grid opacity-[0.15]" />

        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
