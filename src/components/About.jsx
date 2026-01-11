import React from 'react';
import { motion, animate } from 'framer-motion';
import './About.css';
import Wave from './Wave';
import Skeleton from './Skeleton';

const AnimatedCounter = ({ from, to }) => {
    const nodeRef = React.useRef();

    React.useEffect(() => {
        const node = nodeRef.current;
        const controls = animate(from, to, {
            duration: 2,
            onUpdate(value) {
                if (node) node.textContent = Math.round(value) + "+";
            }
        });
        return () => controls.stop();
    }, [from, to]);

    return <span ref={nodeRef} className="stat-number-text" />;
};

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
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ margin: "-50px" }}
                        >
                            Detail-driven web developer and workshop instructor with 2+ years of experience building responsive applications and mentoring over 100 students.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ margin: "-50px" }}
                        >
                            Specialized in frontend development, UI/UX optimization, and technical education. Adept at leading hackathon teams, delivering interactive workshops, and designing interfaces.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ margin: "-50px" }}
                        >
                            When I'm not coding, you can find me teaching peers through code and design, or working on minimal interfaces that require zero explanation.
                        </motion.p>

                        <div className="stats-grid">
                            <div className="stat-box tilt-effect">
                                <AnimatedCounter from={0} to={2} />
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-box tilt-effect">
                                <AnimatedCounter from={0} to={100} />
                                <p>Students Mentored</p>
                            </div>
                            <div className="stat-box tilt-effect">
                                <AnimatedCounter from={0} to={25} />
                                <p>Web Apps Built</p>
                            </div>
                            <div className="stat-box tilt-effect">
                                <AnimatedCounter from={0} to={10} />
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
            <Wave direction="down" />
        </section>
    );
};

export default About;
