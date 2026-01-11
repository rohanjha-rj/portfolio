import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../constants';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>

                <div className="skills-marquee-container">
                    <div className="marquee-wrapper">
                        {/* We duplicate the content to create seamless loop */}
                        {[...Array(2)].map((_, i) => (
                            <div className="marquee-content" key={i}>
                                {skillsData.map((category) =>
                                    category.items.map((skill, idx) => (
                                        <div className="skill-pill" key={`${category.category}-${idx}`}>
                                            {category.icon} <span>{skill.name}</span>
                                        </div>
                                    ))
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Keep the categorized view but simplified as a secondary view or remove if totally replacing. 
                    The user asked for "Infinite Skills Marquee instead of static progress bars", so I will replace the bars but keep the category cards 
                    OR just put pure marquee. 
                    Let's utilize the marquee for the "wow" factor but maybe inside the cards? 
                    Actually, a global marquee of all skills looks cooler. 
                    Let's do rows of marquees.
                */}

                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <motion.div
                            className="skill-card tilt-effect"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="skill-category-title">{category.icon} {category.category}</h3>
                            <div className="skill-tags">
                                {category.items.map((skill, idx) => (
                                    <span className="skill-tag" key={idx}>{skill.name}</span>
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
