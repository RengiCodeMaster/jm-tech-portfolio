import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Process from './components/Process';
import Plans from './components/Plans';
import About from './components/About';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
    <main className="text-white font-sans selection:bg-primary selection:text-black relative">
      <Background />
      <Navbar />
      
      <div className="relative z-10 flex flex-col gap-0">
        <Hero />
        <Services />
        <Solutions />
        <Process />
        <Plans />
        <About />
        <Contact />
      </div>
    </main>
  );
}

export default App;