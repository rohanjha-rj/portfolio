import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>

                <div className="timeline">
                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-content tilt-effect">
                            <h3>Bhagalpur College of Engineering</h3>
                            <p>B.Tech in Computer Science and Engineering</p>
                            <p>CGPA: 8.3/10</p>
                            <p>2023–2027</p>
                            <p style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--gray)' }}>
                                Focus on Data Structures, Algorithms, Web Development, and System Design.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
