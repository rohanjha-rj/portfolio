import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import useMagnetic from '../hooks/useMagnetic';
import './Footer.css';

const MagneticSocial = ({ children, href, ariaLabel }) => {
    const { ref, springX, springY, handleMouseMove, handleMouseLeave, handleMouseEnter } = useMagnetic();

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
        >
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
            >
                {children}
            </a>
        </motion.div>
    );
};

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <h3>Rohan Kumar Jha</h3>
                <p>Computer Science and Engineering Student</p>

                <div className="social-links">
                    <MagneticSocial href="https://www.linkedin.com/in/rohanjharj/" ariaLabel="LinkedIn">
                        <FaLinkedin />
                    </MagneticSocial>
                    <MagneticSocial href="https://github.com/rohanjha-rj" ariaLabel="GitHub">
                        <FaGithub />
                    </MagneticSocial>
                    <MagneticSocial href="https://instagram.com/rohanjha.rj/" ariaLabel="Instagram">
                        <FaInstagram />
                    </MagneticSocial>
                    <MagneticSocial href="mailto:jharohan2005@gmail.com" ariaLabel="Email">
                        <FaEnvelope />
                    </MagneticSocial>
                </div>

                <p className="copyright">&copy; {new Date().getFullYear()} Rohan Kumar Jha. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
