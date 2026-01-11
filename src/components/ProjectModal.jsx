import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="project-modal-overlay" onClick={onClose}>
                    <motion.div
                        className="project-modal-card"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={onClose}><FaTimes /></button>

                        <div className="modal-body">
                            <div className="modal-img-container">
                                {project.demoVideo ? (
                                    <video src={project.demoVideo} autoPlay muted loop />
                                ) : (
                                    <div className="modal-placeholder-img">
                                        {project.icon}
                                    </div>
                                )}
                            </div>

                            <div className="modal-info">
                                <span className="modal-status">{project.status}</span>
                                <h2>{project.title}</h2>
                                <p className="modal-desc">{project.description}</p>

                                <div className="modal-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="modal-tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="modal-actions">
                                    <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="btn glow-on-hover">
                                        Live Demo <FaExternalLinkAlt />
                                    </a>
                                    <a href={project.github || "#"} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                        View Code <FaGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
