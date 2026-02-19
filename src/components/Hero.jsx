import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { useSound } from '../context/SoundContext';
import { triggerHaptic } from '../utils';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const { playClick, playHover } = useSound();

    const words = ["CS Undergraduate", "Web Developer", "Designer", "Tech Enthusiast"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 40 : 120);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="home" className="hero">
            <div className="hero-glow"></div>

            <div className="container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="hero-badge">Available for Work</span>
                    </motion.div>

                    <motion.span
                        className="hero-greeting shimmer-text"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Hello, Design Universe
                    </motion.span>
                    <motion.h1
                        className="hero-name shimmer-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        ROHAN<span>JHA</span>
                    </motion.h1>

                    <motion.h1
                        className="title-xl main-title"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        TRANSFORMING <span className="gradient-text">IDEAS</span> <br />
                        INTO DIGITAL <span className="glow-text">REALITY</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Hi, I'm <span className="highlight">Rohan Kumar Jha</span>, a {text}
                        <span className="cursor-blink">|</span>
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <a
                            href="#projects"
                            className="btn-premium btn-primary"
                            onMouseEnter={playHover}
                            onClick={() => { playClick(); triggerHaptic('medium'); }}
                        >
                            View Projects <FaArrowRight size={14} />
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="btn-premium btn-outline"
                            onMouseEnter={playHover}
                            onClick={() => { playClick(); triggerHaptic('heavy'); }}
                        >
                            <FaDownload size={14} /> Resume
                        </a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
