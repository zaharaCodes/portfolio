import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import './App.css';

// Loading Screen Component
const Loader = () => (
  <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-[100]">
    <div className="text-center">
      {/* Logo Animation */}
      <div className="relative mb-8">
        <div className="w-20 h-20 border-4 border-blue-500/20 rounded-full mx-auto"></div>
        <div className="w-20 h-20 border-4 border-transparent border-t-blue-500 rounded-full animate-spin absolute top-0 left-1/2 -translate-x-1/2"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            FZ
          </span>
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="text-gray-400 text-sm tracking-widest uppercase animate-pulse">
        Loading Portfolio...
      </div>
      
      {/* Progress Dots */}
      <div className="flex gap-2 justify-center mt-4">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-blue-500"
            style={{
              animation: `bounce 1.4s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-gray-950 min-h-screen overflow-x-hidden">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;