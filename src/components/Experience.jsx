import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../constants';
import { useSound } from '../context/SoundContext';
import { triggerHaptic } from '../utils';
import './Experience.css';

const Experience = () => {
    const { playClick, playHover } = useSound();

    return (
        <section id="experience" className="experience">
            <div className="container">
                <motion.h2
                    className="title-lg shimmer-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Professional <span className="gradient-text">Journey</span>
                </motion.h2>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="experience-item-wrapper"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="experience-node"></div>
                            <div
                                className="glass-card experience-item-premium"
                                onMouseEnter={playHover}
                                onClick={() => { playClick(); triggerHaptic('light'); }}
                            >
                                <div className="exp-header">
                                    <h3 className="exp-role">{exp.role}</h3>
                                    <span className="exp-duration">{exp.duration}</span>
                                </div>
                                <span className="exp-company">{exp.company}</span>
                                <p className="exp-desc">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
