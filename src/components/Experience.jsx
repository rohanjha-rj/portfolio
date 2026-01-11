import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { experiences } from '../constants';
import './Experience.css';

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" className="experience" ref={containerRef}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Work Experience
                </motion.h2>

                <div className="experience-container">
                    {/* Progress Line */}
                    <div className="timeline-progress-container">
                        <motion.div
                            className="timeline-progress-line"
                            style={{ scaleY, transformOrigin: 'top' }}
                        />
                    </div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            className="experience-item tilt-effect"
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="experience-header">
                                <h3>{exp.role}</h3>
                                <span className="experience-duration">{exp.duration}</span>
                            </div>
                            <p className="experience-company"><strong>{exp.company}</strong></p>
                            <p className="experience-description">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
