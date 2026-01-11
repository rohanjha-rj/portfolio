import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDownload } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './Hero.css';
import Wave from './Wave';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["CS Undergraduate", "Web Developer", "Designer", "Tech Enthusiast"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className="hero">
            <div className="floating-icons">
                <motion.div
                    className="floating-icon"
                    style={{ top: '20%', left: '10%' }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FaHtml5 />
                </motion.div>
                <motion.div
                    className="floating-icon"
                    style={{ top: '60%', left: '5%' }}
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <FaCss3Alt />
                </motion.div>
                <motion.div
                    className="floating-icon"
                    style={{ top: '30%', right: '15%' }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <FaJs />
                </motion.div>
                <motion.div
                    className="floating-icon"
                    style={{ top: '70%', right: '10%' }}
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                    <FaReact />
                </motion.div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <motion.h1
                        className="gradient-text glitch"
                        data-text="Rohan Kumar Jha"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Rohan Kumar Jha
                    </motion.h1>
                    <motion.p
                        className="typewriter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        I am a <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{text}</span>
                        <span className="cursor">|</span>
                    </motion.p>
                    <motion.div
                        className="hero-btns"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href="#projects" className="btn glow-on-hover">View My Work</a>
                        <a href="#contact" className="btn btn-outline glow-on-hover">Contact Me</a>
                        <a href="/resume.pdf" download className="btn download-btn glow-on-hover" id="downloadResume">
                            <FaDownload style={{ marginRight: '8px' }} /> Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>
            <Wave direction="down" />
        </section>
    );
};

export default Hero;
