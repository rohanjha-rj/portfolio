import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaShareAlt, FaLinkedin, FaGithub, FaInstagram, FaCopy, FaCheck } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { useSound } from '../context/SoundContext';
import './Contact.css';

const Contact = () => {
    const { playClick, playHover } = useSound();
    const [status, setStatus] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('jharohan2005@gmail.com');
        setCopied(true);
        playClick();
        setTimeout(() => setCopied(false), 2000);
    };

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#8b5cf6', '#06b6d4', '#f472b6']
                });
                playClick();
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-content">
                    <div className="contact-info">
                        <motion.div
                            className="contact-info-item"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="contact-icon" onMouseEnter={playHover}>
                                <FaPhone />
                            </div>
                            <div className="contact-details">
                                <h3>Phone</h3>
                                <p>9304199676</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-info-item email-copy-wrapper"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="contact-icon" onMouseEnter={playHover}>
                                <FaEnvelope />
                            </div>
                            <div className="contact-details">
                                <h3>Email</h3>
                                <p onClick={handleCopyEmail} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    jharohan2005@gmail.com
                                    {copied ? <FaCheck style={{ color: 'var(--success)' }} /> : <FaCopy className="copy-icon" />}
                                </p>
                                {copied && <span className="copy-tooltip">Copied!</span>}
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-info-item"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="contact-icon" onMouseEnter={playHover}>
                                <FaMapMarkerAlt />
                            </div>
                            <div className="contact-details">
                                <h3>Location</h3>
                                <p>Bhagalpur, India</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-info-item"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="contact-icon" onMouseEnter={playHover}>
                                <FaShareAlt />
                            </div>
                            <div className="contact-details">
                                <h3>Social Media</h3>
                                <div className="social-links-contact">
                                    <a href="https://www.linkedin.com/in/rohanjharj/" target="_blank" rel="noopener noreferrer" onMouseEnter={playHover}><FaLinkedin /></a>
                                    <a href="https://github.com/rohanjha-rj" target="_blank" rel="noopener noreferrer" onMouseEnter={playHover}><FaGithub /></a>
                                    <a href="https://instagram.com/rohanjha.rj/" target="_blank" rel="noopener noreferrer" onMouseEnter={playHover}><FaInstagram /></a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="contact-form"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <form
                            onSubmit={submitForm}
                            action="https://formspree.io/f/mrbqpkdo"
                            method="POST"
                        >
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" required className="glow-on-hover" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" required className="glow-on-hover" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" required className="glow-on-hover"></textarea>
                            </div>

                            {status === "SUCCESS" ? (
                                <p style={{ color: "var(--secondary)", fontWeight: "bold" }}>Thanks for contacting! We will get back to you soon.</p>
                            ) : (
                                <button type="submit" className="btn glow-on-hover">Send Message</button>
                            )}
                            {status === "ERROR" && <p style={{ color: "var(--error)" }}>Ooops! There was an error.</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
