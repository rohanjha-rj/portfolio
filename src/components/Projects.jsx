import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { projects } from '../constants';
import { useSound } from '../context/SoundContext';
import './Projects.css';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project, onOpen, isAnyHovered, activeProjectIndex, index }) => {
    const { playHover, playClick } = useSound();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
    const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

    const [isHovered, setIsHovered] = useState(false);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - (left + width / 2));
        mouseY.set(clientY - (top + height / 2));
    }

    const isNextProject = activeProjectIndex !== null && index === activeProjectIndex + 1;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
                opacity: (isAnyHovered && !isHovered && !isNextProject) ? 0.4 : 1,
                scale: isHovered ? 1.05 : 1,
                boxShadow: isNextProject ? '0 0 20px rgba(139, 92, 246, 0.3)' : 'none'
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`project-card project-card-3d group ${isNextProject ? 'predictive-highlight' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
                setIsHovered(true);
                playHover();
                onOpen(null, index);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                mouseX.set(0);
                mouseY.set(0);
                onOpen(null, null);
            }}
            onClick={() => {
                if (window.navigator.vibrate) window.navigator.vibrate(15);
                playClick();
                onOpen(project);
            }}
            style={{ rotateX, rotateY, cursor: 'pointer' }}
        >
            <motion.div
                className="spotlight-overlay"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          450px circle at ${useTransform(mouseX, x => x + 160)}px ${useTransform(mouseY, y => y + 250)}px,
                          rgba(139, 92, 246, 0.15),
                          transparent 80%
                        )
                      `,
                }}
            />
            <div className="project-img">
                <motion.div
                    className="depth-layer"
                    style={{ x: useTransform(mouseX, x => x * 0.1), y: useTransform(mouseY, y => y * 0.1) }}
                >
                    {isHovered && project.demoVideo ? (
                        <video
                            src={project.demoVideo}
                            autoPlay
                            muted
                            loop
                            className="project-video-preview"
                        />
                    ) : (
                        project.icon
                    )}
                </motion.div>
                <div className="project-img-overlay" />
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
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeProjectIndex, setActiveProjectIndex] = useState(null);

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    const handleProjectAction = (project, index) => {
        if (project === null) {
            setActiveProjectIndex(index);
        } else {
            setSelectedProject(project);
        }
    };

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
                            onClick={() => {
                                if (window.navigator.vibrate) window.navigator.vibrate(10);
                                setFilter(cat);
                            }}
                        >
                            {cat === 'all' ? 'All' : cat === 'web' ? 'Web Apps' : cat === 'ai' ? 'AI/ML' : 'Games'}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="projects-grid"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <ProjectCard
                                key={project.id || idx}
                                project={project}
                                index={idx}
                                activeProjectIndex={activeProjectIndex}
                                isAnyHovered={activeProjectIndex !== null}
                                onOpen={handleProjectAction}
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
