import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { triggerHaptic } from './utils';
import { SoundProvider } from './context/SoundContext';

import CustomCursor from './components/CustomCursor';
import ContextMenu from './components/ContextMenu';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import ParallaxBackground from './components/ParallaxBackground';
import BackgroundSpark from './components/BackgroundSpark';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import ReadingProgress from './components/ReadingProgress';
import BackToTop from './components/BackToTop';

import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isCPOpen, setIsCPOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Keyboard shortcut for Command Palette
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCPOpen(prev => !prev);
        triggerHaptic('medium');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <SoundProvider>
      <AnimatePresence>
        {loading ? (
          <Preloader key="loader" finishLoading={() => setLoading(false)} />
        ) : (
          <motion.div
            className="app-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CustomCursor />
            <ContextMenu />
            <ParallaxBackground />
            <BackgroundSpark />
            <Navbar />
            <ReadingProgress />

            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Testimonials />
              <Contact />
            </main>

            <Footer />
            <BackToTop />

            <CommandPalette isOpen={isCPOpen} setIsOpen={setIsCPOpen} />

            {/* Global Progress Bar */}
            <motion.div className="progress-bar-top" style={{ scaleX }} />
          </motion.div>
        )}
      </AnimatePresence>
    </SoundProvider>
  );
};

export default App;
