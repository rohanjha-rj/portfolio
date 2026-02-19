import React from 'react';
import { motion } from 'framer-motion';
import { useSound } from '../context/SoundContext';
import { triggerHaptic } from '../utils';
import { education } from '../constants';
import './About.css';

const StatBox = ({ value, label, delay = 0 }) => {
    const { playHover } = useSound();
    return (
        <motion.div
            className="glass-card bento-box box-stats"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            onMouseEnter={playHover}
        >
            <span className="stat-val">{value}</span>
            <span className="stat-label">{label}</span>
        </motion.div>
    );
};

const About = () => {
    const { playClick, playHover } = useSound();

    return (
        <section id="about" className="about">
            <div className="container">
                <motion.h2
                    className="title-lg shimmer-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Personal <span className="gradient-text">Odyssey</span>
                </motion.h2>

                <div className="bento-grid">
                    {/* Main Bio */}
                    <motion.div
                        className="bento-item glass-card box-bio glow-breathe"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            Detail-driven web developer and workshop instructor with 2+ years of experience
                            building responsive applications and mentoring over 100 students.
                        </p>
                        <p>
                            Specialized in frontend development, UI/UX optimization, and technical education.
                            I love creating interfaces that are as intuitive as they are beautiful.
                        </p>
                        <a
                            href="#contact"
                            className="btn-premium btn-outline"
                            style={{ alignSelf: 'flex-start', marginTop: '1rem' }}
                            onMouseEnter={playHover}
                            onClick={() => { playClick(); triggerHaptic('medium'); }}
                        >
                            Let's Talk
                        </a>
                    </motion.div>

                    {/* Image/Initials */}
                    <motion.div
                        className="glass-card bento-box box-img"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        R.J.
                    </motion.div>

                    {/* Stats */}
                    <StatBox value="2+" label="Years Exp" delay={0.3} />
                    <StatBox value="100+" label="Mentored" delay={0.4} />

                    {/* Education */}
                    <motion.div
                        className="glass-card bento-box box-edu"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ marginBottom: '1.5rem' }}>Education</h3>
                        {education.map((edu, index) => (
                            <div key={index} className="edu-item">
                                <h4>{edu.institution}</h4>
                                <p>{edu.degree}</p>
                                <p>{edu.duration}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* More Stats or Info */}
                    <StatBox value="25+" label="Apps Built" delay={0.6} />
                    <StatBox value="10+" label="Hackathons" delay={0.7} />
                </div>
            </div>
        </section>
    );
};

export default About;
