import React, { useState, useEffect } from 'react';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
                        <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
                        <li><a href="#education" onClick={closeMobileMenu}>Education</a></li>
                        <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
                        <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
                        <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
                        <li><a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a></li>
                        <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
