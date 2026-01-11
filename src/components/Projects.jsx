import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaChartLine, FaWallet, FaGamepad, FaCalendarAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Smart Water Footprint Chatbot",
            category: "ai",
            status: "Ongoing",
            description: "Created a chatbot with 80% NLP accuracy for water consumption tracking using JavaScript and JSON logic.",
            tags: ["JavaScript", "NLP", "JSON"],
            icon: <FaRobot />
        },
        {
            id: 2,
            title: "Stock Market Simulator",
            category: "web",
            status: "Live",
            description: "Simulated 10+ real-time stock interactions with historical data and a virtual portfolio manager.",
            tags: ["JavaScript", "React", "API"],
            icon: <FaChartLine />
        },
        {
            id: 3,
            title: "Expense Tracker Web App",
            category: "web",
            status: "Live",
            description: "Developed a daily budgeting tool with custom filtering and category-based breakdowns. Tracked 200+ mock transactions and achieved 85% test coverage.",
            tags: ["HTML/CSS", "JavaScript", "Testing"],
            icon: <FaWallet />
        },
        {
            id: 4,
            title: "Space Shooter Pro",
            category: "game",
            status: "Live",
            description: "Built a 2D space shooting game featuring multiple levels, power-ups, boss battles, and weapon attachments for an engaging gameplay experience.",
            tags: ["Game Dev", "Collision Detection", "Physics"],
            icon: <FaGamepad />
        },
        {
            id: 5,
            title: "TimeTable Generator",
            category: "web",
            status: "Live",
            description: "Built a web-based timetable generator using logic-based scheduling algorithms to handle faculty preferences, backup slots, and constraints across 8 semesters and 5 branches.",
            tags: ["Algorithms", "Scheduling", "Web"],
            icon: <FaCalendarAlt />
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-filter">
                    {['all', 'web', 'ai', 'game'].map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat === 'all' ? 'All' : cat === 'web' ? 'Web Apps' : cat === 'ai' ? 'AI/ML' : 'Games'}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="projects-grid"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="project-card project-card-3d"
                                key={project.id}
                            >
                                <div className="project-img">
                                    {project.icon}
                                </div>
                                <div className="project-content">
                                    <span className="project-status">{project.status}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, idx) => (
                                            <span className="project-tag" key={idx}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
