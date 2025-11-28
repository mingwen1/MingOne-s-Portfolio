import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-neon selection:text-black">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Gallery />
      </main>
      <Contact />
    </div>
  );
};

export default App;