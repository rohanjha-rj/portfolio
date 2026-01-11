import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="animated-bg"></div>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>
                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p>Detail-driven web developer and workshop instructor with 2+ years of experience building responsive applications and mentoring over 100 students.</p>
                        <p>Specialized in frontend development, UI/UX optimization, and technical education. Adept at leading hackathon teams, delivering interactive workshops, and designing interfaces.</p>
                        <p>When I'm not coding, you can find me teaching peers through code and design, or working on minimal interfaces that require zero explanation.</p>

                        <div className="stats-grid">
                            <div className="stat-box tilt-effect">
                                <div className="stat-number">2+</div>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-box tilt-effect">
                                <div className="stat-number">100+</div>
                                <p>Students Mentored</p>
                            </div>
                            <div className="stat-box tilt-effect">
                                <div className="stat-number">25+</div>
                                <p>Web Apps Built</p>
                            </div>
                            <div className="stat-box tilt-effect">
                                <div className="stat-number">10+</div>
                                <p>Hackathons</p>
                            </div>
                        </div>

                        <a href="#contact" className="btn glow-on-hover" style={{ marginTop: '30px' }}>Get In Touch</a>
                    </motion.div>
                    <motion.div
                        className="about-img"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="about-img-placeholder">R.J.</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
