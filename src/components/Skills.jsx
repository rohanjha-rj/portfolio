import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaServer, FaTools, FaGlobe } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        {
            category: "Languages",
            icon: <FaCode />,
            items: [
                { name: "C / C++", percentage: 90 },
                { name: "Java", percentage: 80 },
                { name: "JavaScript", percentage: 95 },
                { name: "Python", percentage: 75 }
            ]
        },
        {
            category: "Frontend",
            icon: <FaPaintBrush />,
            items: [
                { name: "HTML5", percentage: 95 },
                { name: "CSS3", percentage: 90 },
                { name: "React.js", percentage: 85 }
            ]
        },
        {
            category: "Backend",
            icon: <FaServer />,
            items: [
                { name: "Node.js", percentage: 80 },
                { name: "Express.js", percentage: 75 }
            ]
        },
        {
            category: "Tools",
            icon: <FaTools />,
            items: [
                { name: "Git / GitHub", percentage: 90 },
                { name: "VS Code", percentage: 85 },
                { name: "Figma", percentage: 80 },
                { name: "Canva / Photoshop", percentage: 75 },
                { name: "Catia V5", percentage: 70 }
            ]
        },
        {
            category: "Web & Others",
            icon: <FaGlobe />,
            items: [
                { name: "Responsive Design", percentage: 90 },
                { name: "SEO Basics", percentage: 75 },
                { name: "Public Speaking", percentage: 85 },
                { name: "3D Printing", percentage: 80 }
            ]
        }
    ];

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

                <div className="skills-container">
                    {skillsData.map((category, index) => (
                        <motion.div
                            className="skill-category tilt-effect"
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3>{category.icon} {category.category}</h3>
                            {category.items.map((skill, idx) => (
                                <div className="skill-item" key={idx}>
                                    <div className="skill-name">
                                        <span>{skill.name}</span>
                                        <span>{skill.percentage}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <motion.div
                                            className="skill-progress"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.percentage}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            viewport={{ once: true }}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
