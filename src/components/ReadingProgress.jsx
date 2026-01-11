import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './ReadingProgress.css';

const ReadingProgress = () => {
    const { scrollYProgress } = useScroll();
    const [activeSection, setActiveSection] = useState('Home');

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const sections = ['Home', 'About', 'Education', 'Skills', 'Experience', 'Projects', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 300;
            sections.forEach(section => {
                const element = document.getElementById(section.toLowerCase());
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            });
            if (window.scrollY < 100) setActiveSection('Home');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="reading-progress-sidebar">
            <div className="progress-track">
                <motion.div className="progress-fill" style={{ scaleY, transformOrigin: 'top' }} />
            </div>
            <div className="section-dots">
                {sections.map(section => (
                    <div
                        key={section}
                        className={`section-dot-wrapper ${activeSection === section ? 'active' : ''}`}
                        onClick={() => document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="section-label">{section}</span>
                        <div className="dot" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReadingProgress;
