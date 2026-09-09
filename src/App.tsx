import React, { useCallback, useEffect, useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { NeuralNetwork } from './components/NeuralNetwork';
import { NameIntro } from './components/NameIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrintableResume } from './components/PrintableResume';

const App: React.FC = () => {
  const [ambientPos, setAmbientPos] = useState({ x: -1000, y: -1000 });
  const [introDone, setIntroDone] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setAmbientPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Print View Component: Rendered and formatted during paper print executions */}
      <PrintableResume />

      {!introDone && <NameIntro onComplete={handleIntroComplete} />}

      {/* Standard Interactive Screen View Wrapper */}
      <div className="screen-container" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>

        {/* Custom cursor tracking dot + ring */}
        <CustomCursor />

        {/* HTML5 Canvas Neural Constellation background */}
        <NeuralNetwork />

        {/* Ambient Mouse-following radial glow background */}
        <div
          className="radial-ambient"
          style={{
            left: `${ambientPos.x}px`,
            top: `${ambientPos.y}px`,
          }}
        />

        {/* Technical fine grid line overlay */}
        <div className="tech-grid" />

        <div style={{ opacity: introDone ? 1 : 0, transition: 'opacity 0.5s ease 0.1s' }}>
          <Navbar />
        </div>

        {/* Content sections stack */}
        <main style={{ position: 'relative', zIndex: 10 }}>
          <Hero ready={introDone} />

          <div style={{ background: 'linear-gradient(180deg, transparent, rgba(10, 11, 18, 0.5) 10%, rgba(10, 11, 18, 0.5) 90%, transparent)' }}>
            <About />
            <Experience />
            <Projects />
            <TechStack />
            <Skills />
            <Contact />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default App;
