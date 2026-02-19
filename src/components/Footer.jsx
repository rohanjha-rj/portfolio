import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useSound } from '../context/SoundContext';
import { triggerHaptic } from '../utils';
import './Footer.css';

const Footer = () => {
    const { playClick, playHover } = useSound();

    const socials = [
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rohanjharj/", label: "LinkedIn" },
        { icon: <FaGithub />, href: "https://github.com/rohanjha-rj", label: "GitHub" },
        { icon: <FaInstagram />, href: "https://instagram.com/rohanjha.rj/", label: "Instagram" },
        { icon: <FaEnvelope />, href: "mailto:jharohan2005@gmail.com", label: "Email" }
    ];

    return (
        <footer>
            <div className="container footer-content">
                <h3>ROHAN<span>JHA</span></h3>
                <p>Computer Science & Engineering Student</p>

                <div className="footer-socials">
                    {socials.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-btn"
                            aria-label={social.label}
                            onMouseEnter={playHover}
                            onClick={() => { playClick(); triggerHaptic('light'); }}
                            whileHover={{ y: -5 }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                <p className="footer-copyright">
                    &copy; {new Date().getFullYear()} Rohan Kumar Jha. Crafted with passion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
