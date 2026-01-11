import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaHome, FaUser, FaCode, FaEnvelope, FaFileAlt, FaMoon, FaSun } from 'react-icons/fa';
import ReactDOM from 'react-dom';
import './CommandPalette.css';

const CommandPalette = ({ isOpen, setIsOpen }) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);

    const commands = [
        { id: 'home', label: 'Go to Home', icon: <FaHome />, action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); } },
        { id: 'about', label: 'About Me', icon: <FaUser />, action: () => { document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); } },
        { id: 'projects', label: 'View Projects', icon: <FaCode />, action: () => { document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); } },
        { id: 'contact', label: 'Contact Me', icon: <FaEnvelope />, action: () => { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); } },
        { id: 'resume', label: 'Download Resume', icon: <FaFileAlt />, action: () => { /* Add resume Link */ setIsOpen(false); } },
    ];

    const filteredCommands = query === ''
        ? commands
        : commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()));

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'ArrowDown') {
            setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
        } else if (e.key === 'ArrowUp') {
            setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        } else if (e.key === 'Enter') {
            filteredCommands[selectedIndex]?.action();
        } else if (e.key === 'Escape') {
            setIsOpen(false);
        }
    }, [filteredCommands, selectedIndex, setIsOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="command-palette-overlay" onClick={() => setIsOpen(false)}>
            <motion.div
                className="command-palette-modal"
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="cp-search">
                    <FaSearch className="cp-search-icon" />
                    <input
                        autoFocus
                        placeholder="Type a command or search..."
                        value={query}
                        onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
                    />
                    <div className="cp-shortcut">ESC</div>
                </div>

                <div className="cp-results">
                    {filteredCommands.length > 0 ? (
                        filteredCommands.map((command, idx) => (
                            <div
                                key={command.id}
                                className={`cp-item ${idx === selectedIndex ? 'active' : ''}`}
                                onMouseEnter={() => setSelectedIndex(idx)}
                                onClick={command.action}
                            >
                                <span className="cp-item-icon">{command.icon}</span>
                                <span className="cp-item-label">{command.label}</span>
                                {idx === selectedIndex && <span className="cp-item-enter">RETURN</span>}
                            </div>
                        ))
                    ) : (
                        <div className="cp-no-results">No commands found.</div>
                    )}
                </div>

                <div className="cp-footer">
                    <span><kbd>↑↓</kbd> to navigate</span>
                    <span><kbd>↵</kbd> to select</span>
                </div>
            </motion.div>
        </div>,
        document.body
    );
};

export default CommandPalette;
