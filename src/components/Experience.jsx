import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: "Cyber Security and Cyber Forensics Intern",
            company: "Centre for Emerging Technologies",
            duration: "09/2025 - PRESENT",
            description: "Researched emerging cyber threats and forensic techniques, assisting in drafting security recommendations and strengthening incident response procedures."
        },
        {
            role: "Software Development Intern",
            company: "AngleTwo Innovations Pvt. Ltd.",
            duration: "08/2025 - PRESENT",
            description: "Work on real-time software projects, applying Agile methodologies and version control; collaborate with cross-functional teams, and engage in daily stand-ups and code reviews."
        },
        {
            role: "3-D Printing and Additive Manufacturing Intern",
            company: "C-DAC Kolkata",
            duration: "08/2025 - PRESENT",
            description: "Designed and optimized 3D models using CATIA V5 and slicing software, and successfully executed high-precision prototypes on advanced 3D printers, enhancing manufacturing efficiency and product quality."
        },
        {
            role: "Web Developer and Trainer",
            company: "Techglaz Labs Pvt. Ltd.",
            duration: "05/2025 - PRESENT",
            description: "Built and maintained 5+ production-ready web apps with 95%+ mobile responsiveness. Led training sessions for 80+ junior developers, resulting in 90% positive feedback and improved onboarding speed."
        }
    ];

    return (
        <section id="experience" className="experience">
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
