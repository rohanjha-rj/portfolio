import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { projects } from '../constants';
import { useSound } from '../context/SoundContext';
import { triggerHaptic } from '../utils';
import './Projects.css';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project, onClick }) => {
    const { playHover } = useSound();
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            className="glass-card project-card-premium glow-breathe"
            style={{ rotateX, rotateY, perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={playHover}
            onClick={() => { triggerHaptic('medium'); onClick(project); }}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="project-card-inner">
                <div className="project-img-premium">
                    {project.demoVideo ? (
                        <video src={project.demoVideo} autoPlay muted loop />
                    ) : (
                        project.icon
                    )}
                </div>
                <div className="project-info-premium">
                    <span className="project-status-badge">{project.status}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags-premium">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="project-tag-premium">{tag}</span>
                        ))}
                        {project.tags.length > 3 && <span className="project-tag-premium">+{project.tags.length - 3}</span>}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const { playClick, playHover } = useSound();

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.h2
                    className="title-lg shimmer-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Proof of <span className="gradient-text">Concept</span>
                </motion.h2>

                <div className="projects-filter">
                    {['all', 'web', 'ai', 'game'].map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn-premium ${filter === cat ? 'active' : ''}`}
                            onMouseEnter={playHover}
                            onClick={() => {
                                playClick();
                                triggerHaptic('light');
                                setFilter(cat);
                            }}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="projects-grid"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={setSelectedProject}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
