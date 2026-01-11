import React, { useState, useEffect } from 'react';

const triggerHaptic = (style = 'light') => {
  if (!window.navigator.vibrate) return;

  switch (style) {
    case 'light': window.navigator.vibrate(10); break;
    case 'medium': window.navigator.vibrate(20); break;
    case 'heavy': window.navigator.vibrate(50); break;
    case 'success': window.navigator.vibrate([10, 30, 10]); break;
    default: window.navigator.vibrate(10);
  }
};

import { SoundProvider } from './context/SoundContext';
import CustomCursor from './components/CustomCursor';
import ContextMenu from './components/ContextMenu';
import ParallaxBackground from './components/ParallaxBackground';
import Preloader from './components/Preloader';

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import BackToTop from './components/BackToTop';
import CommandPalette from './components/CommandPalette';
import ReadingProgress from './components/ReadingProgress';

function App() {
  const [loading, setLoading] = useState(true);
  const [isCPOpen, setIsCPOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Handle Command Palette Shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCPOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Dynamic Favicon & Title
  useEffect(() => {
    const originalTitle = document.title;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Miss you! 😢";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Favicon Theme Sync
  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');
    const updateFavicon = () => {
      const isDarkMode = !document.body.classList.contains('light-mode');
      // If we had two icons, we'd swap them here. For now, let's change a color filter or similar if using SVG
      // Alternatively, we can use a base64 encoded colored dot
      const color = isDarkMode ? '%238b5cf6' : '%233b82f6';
      if (favicon) {
        favicon.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='${color}'/></svg>`;
      }
    };

    updateFavicon();
    const observer = new MutationObserver(updateFavicon);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <SoundProvider>
      <div className="App">
        <CustomCursor />
        <ContextMenu />
        <ReadingProgress />
        <CommandPalette isOpen={isCPOpen} setIsOpen={setIsCPOpen} />
        <div className="grain-overlay"></div>
        <ParallaxBackground />

        <AnimatePresence mode="wait">
          {loading && <Preloader setLoading={setLoading} />}
        </AnimatePresence>

        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="progress-bar"
              style={{
                scaleX,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "5px",
                background: "linear-gradient(90deg, var(--primary), var(--secondary))",
                transformOrigin: "0%",
                zIndex: 9999
              }}
            />
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
            <ThemeToggle />
            <BackToTop />
          </motion.div>
        )}
      </div>
    </SoundProvider>
  );
}

export default App;
