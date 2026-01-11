import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaFileAlt, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

const ContextMenu = () => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef(null);

    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
            setVisible(true);
            setPosition({ x: e.pageX, y: e.pageY });
        };

        const handleClick = () => setVisible(false);
        const handleScroll = () => setVisible(false);

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('click', handleClick);
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('click', handleClick);
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuStyle = {
        position: 'absolute',
        top: position.y,
        left: position.x,
        zIndex: 10000,
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    ref={menuRef}
                    style={menuStyle}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="custom-context-menu"
                >
                    <ul>
                        <li onClick={() => window.location.href = '/'}>
                            <FaHome /> Home
                        </li>
                        <li onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                            About
                        </li>
                        <li onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            Projects
                        </li>
                        <li onClick={() => window.open('/resume.pdf', '_blank')}>
                            <FaFileAlt /> Resume
                        </li>
                        <li onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            <FaEnvelope /> Contact
                        </li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContextMenu;
