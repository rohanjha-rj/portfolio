import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useSound } from '../context/SoundContext';
import { triggerHaptic } from '../utils';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const { playClick, playHover } = useSound();

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="project-modal-overlay" onClick={onClose}>
                    <motion.div
                        className="project-modal-card-premium"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close-premium"
                            onMouseEnter={playHover}
                            onClick={() => { playClick(); triggerHaptic('medium'); onClose(); }}
                        >
                            <FaTimes />
                        </button>

                        <div className="modal-media-premium">
                            {project.demoVideo ? (
                                <video src={project.demoVideo} autoPlay muted loop />
                            ) : (
                                project.icon
                            )}
                        </div>

                        <div className="modal-details-premium">
                            <span className="project-status-badge">{project.status}</span>
                            <h2>{project.title}</h2>
                            <p className="modal-description">{project.description}</p>

                            <div className="modal-tags-premium">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="project-tag-premium">{tag}</span>
                                ))}
                            </div>

                            <div className="modal-actions-premium">
                                <a
                                    href={project.link || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-premium btn-primary"
                                    onMouseEnter={playHover}
                                    onClick={() => { playClick(); triggerHaptic('medium'); }}
                                >
                                    Live Demo <FaExternalLinkAlt size={14} />
                                </a>
                                <a
                                    href={project.github || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-premium btn-outline"
                                    onMouseEnter={playHover}
                                    onClick={() => { playClick(); triggerHaptic('medium'); }}
                                >
                                    <FaGithub size={14} /> Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
