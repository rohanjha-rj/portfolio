import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../constants';
import { useSound } from '../context/SoundContext';
import { triggerHaptic } from '../utils';
import './Skills.css';

const Skills = () => {
    const { playClick, playHover } = useSound();

    // Flatten skills for the marquee
    const allSkills = skillsData.flatMap(cat => cat.items.map(item => ({ ...item, icon: cat.icon })));

    return (
        <section id="skills" className="skills">
            <div className="container">
                <motion.h2
                    className="title-lg shimmer-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    The <span className="gradient-text">Arsenal</span>
                </motion.h2>

                {/* Modern Marquee */}
                <div className="skills-marquee-container">
                    <div className="marquee-wrapper">
                        {[...Array(2)].map((_, i) => (
                            <div className="marquee-content" key={i}>
                                {allSkills.map((skill, idx) => (
                                    <div
                                        className="skill-pill-premium"
                                        key={idx}
                                        onMouseEnter={playHover}
                                        onClick={() => triggerHaptic('light')}
                                    >
                                        <span className="pill-icon">{skill.icon}</span>
                                        <span className="pill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-grid-premium">
                    {skillsData.map((category, index) => (
                        <motion.div
                            className="glass-card bento-box skill-category-card"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={playHover}
                            onClick={() => { playClick(); triggerHaptic('medium'); }}
                        >
                            <div className="card-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3>{category.category}</h3>
                            </div>
                            <div className="skill-list-modern">
                                {category.items.map((skill, idx) => (
                                    <div key={idx} className="skill-item-modern">
                                        <div className="skill-info-modern">
                                            <span>{skill.name}</span>
                                            <span className="skill-perc">{skill.percentage}%</span>
                                        </div>
                                        <div className="skill-progress-bg">
                                            <motion.div
                                                className="skill-progress-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.percentage}%` }}
                                                transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
