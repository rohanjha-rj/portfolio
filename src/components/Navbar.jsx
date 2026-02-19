import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useSound } from '../context/SoundContext';
import { triggerHaptic } from '../utils';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const { playClick, playHover } = useSound();

    const handleClick = () => {
        triggerHaptic('light');
        playClick();
        setClick(!click);
    };

    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Testimonials', 'Contact'];

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="container">
                <nav className="navbar">
                    <a href="#" className="logo" onClick={closeMobileMenu}>
                        ROHAN<span>JHA</span>
                    </a>

                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>

                    <ul className={click ? 'nav-links active' : 'nav-links'}>
                        {navItems.map((item) => (
                            <li
                                key={item}
                                onMouseEnter={() => {
                                    playHover();
                                    setHoveredLink(item);
                                }}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => {
                                        triggerHaptic('light');
                                        playClick();
                                        closeMobileMenu();
                                    }}
                                >
                                    {item}
                                    <AnimatePresence>
                                        {hoveredLink === item && (
                                            <motion.span
                                                layoutId="nav-spotlight"
                                                className="nav-spotlight"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
