import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { education } from '../constants';
import { useSound } from '../context/SoundContext';
import { triggerHaptic } from '../utils';
import './Education.css';
import Wave from './Wave';

const Education = () => {
    const containerRef = useRef(null);
    const { playClick, playHover } = useSound();
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
        <section id="education" className="education" ref={containerRef}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    onMouseEnter={playHover}
                >
                    Education
                </motion.h2>

                <div className="timeline">
                    <div className="timeline-progress-container">
                        <motion.div
                            className="timeline-progress-line"
                            style={{ scaleY, transformOrigin: 'top' }}
                        />
                    </div>

                    {education.map((edu, index) => (
                        <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="timeline-content tilt-effect"
                                onMouseEnter={playHover}
                                onClick={() => { playClick(); triggerHaptic('light'); }}
                            >
                                <h3>{edu.institution}</h3>
                                <p>{edu.degree}</p>
                                <p>{edu.duration}</p>
                                {edu.details && (
                                    <p style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--gray)' }}>
                                        {edu.details}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Wave direction="down" />
        </section>
    );
};

export default Education;
