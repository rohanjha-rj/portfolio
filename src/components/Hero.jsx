import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
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
                        className="gradient-text"
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
                        Computer Science & Engineering Student | Web Developer | Workshop Instructor
                    </motion.p>
                    <motion.div
                        className="hero-btns"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href="#projects" className="btn glow-on-hover">View My Work</a>
                        <a href="#contact" className="btn btn-outline glow-on-hover">Contact Me</a>
                        <a href="#" className="btn download-btn glow-on-hover" id="downloadResume">
                            <FaDownload style={{ marginRight: '8px' }} /> Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
