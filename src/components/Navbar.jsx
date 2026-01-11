import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTimes, FaBars } from 'react-icons/fa';
import useMagnetic from '../hooks/useMagnetic';
import './Navbar.css';

const MagneticLink = ({ children, href, onClick, onMouseEnter, onMouseLeave, hoveredLink, item }) => {
    const { ref, springX, springY, handleMouseMove, handleMouseLeave, handleMouseEnter } = useMagnetic();

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => { handleMouseEnter(); if (onMouseEnter) onMouseEnter(); }}
            onMouseLeave={() => { handleMouseLeave(); if (onMouseLeave) onMouseLeave(); }}
            style={{ x: springX, y: springY }}
        >
            <a href={href} onClick={onClick}>
                {children}
                {hoveredLink === item && (
                    <motion.span
                        layoutId="nav-spotlight"
                        className="nav-spotlight"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
            </a>
        </motion.div>
    );
};

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="container">
                <nav className="navbar">
                    <a href="#" className="logo" onClick={closeMobileMenu}>
                        <FaCode className="nav-icon" />
                        Rohan<span>.</span>
                    </a>

                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>

                    <ul className={click ? 'nav-links active' : 'nav-links'}>
                        {['About', 'Education', 'Skills', 'Experience', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                            <li key={item}>
                                <MagneticLink
                                    item={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={closeMobileMenu}
                                    onMouseEnter={() => setHoveredLink(item)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    hoveredLink={hoveredLink}
                                >
                                    {item}
                                </MagneticLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
