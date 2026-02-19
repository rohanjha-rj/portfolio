import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaCheck, FaCopy } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { useSound } from '../context/SoundContext';
import { triggerHaptic } from '../utils';
import './Contact.css';

const ContactCard = ({ icon, label, value, onClick, copied }) => {
    const { playHover } = useSound();
    return (
        <motion.div
            className="glass-card contact-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onMouseEnter={playHover}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            <div className="contact-card-icon">{icon}</div>
            <div className="contact-card-content">
                <h4>{label}</h4>
                <p>{value} {copied && <FaCheck size={12} style={{ color: 'var(--primary)', marginLeft: '0.5rem' }} />}</p>
            </div>
            {onClick && !copied && <FaCopy size={14} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />}
        </motion.div>
    );
};

const Contact = () => {
    const { playClick, playHover } = useSound();
    const [status, setStatus] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('jharohan2005@gmail.com');
        setCopied(true);
        triggerHaptic('success');
        playClick();
        setTimeout(() => setCopied(false), 2000);
    };

    const submitForm = async (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.reset();
                setStatus("SUCCESS");
                triggerHaptic('success');
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#6366f1', '#06b6d4', '#f43f5e']
                });
                playClick();
            } else {
                setStatus("ERROR");
                triggerHaptic('error');
            }
        } catch (error) {
            setStatus("ERROR");
            triggerHaptic('error');
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.h2
                    className="title-lg shimmer-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Let's Build <span className="gradient-text">Something Great</span>
                </motion.h2>

                <div className="contact-wrapper">
                    <div className="contact-info-list">
                        <ContactCard
                            icon={<FaPhone />}
                            label="Phone"
                            value="9304199676"
                        />
                        <ContactCard
                            icon={<FaEnvelope />}
                            label="Email"
                            value="jharohan2005@gmail.com"
                            onClick={handleCopyEmail}
                            copied={copied}
                        />
                        <ContactCard
                            icon={<FaMapMarkerAlt />}
                            label="Location"
                            value="Bhagalpur, India"
                        />

                        <div className="social-grid-premium">
                            <a href="https://www.linkedin.com/in/rohanjharj/" target="_blank" rel="noopener noreferrer" className="social-btn-premium" onMouseEnter={playHover} onClick={() => triggerHaptic('light')}><FaLinkedin /></a>
                            <a href="https://github.com/rohanjha-rj" target="_blank" rel="noopener noreferrer" className="social-btn-premium" onMouseEnter={playHover} onClick={() => triggerHaptic('light')}><FaGithub /></a>
                            <a href="https://instagram.com/rohanjha.rj/" target="_blank" rel="noopener noreferrer" className="social-btn-premium" onMouseEnter={playHover} onClick={() => triggerHaptic('light')}><FaInstagram /></a>
                        </div>
                    </div>

                    <motion.div
                        className="glass-card contact-form-premium"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={submitForm} action="https://formspree.io/f/mrbqpkdo" method="POST">
                            <div className="form-row">
                                <div className="field-group">
                                    <label>Name</label>
                                    <input type="text" name="name" required className="input-premium" placeholder="John Doe" />
                                </div>
                                <div className="field-group">
                                    <label>Email</label>
                                    <input type="email" name="email" required className="input-premium" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="field-group">
                                <label>Message</label>
                                <textarea name="message" required className="input-premium" placeholder="Your message here..."></textarea>
                            </div>

                            {status === "SUCCESS" ? (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    style={{ color: "var(--primary)", fontWeight: "bold" }}
                                >
                                    Message sent successfully!
                                </motion.p>
                            ) : (
                                <button type="submit" className="btn-premium btn-primary" onMouseEnter={playHover} onClick={() => triggerHaptic('medium')}>
                                    Send Message
                                </button>
                            )}
                            {status === "ERROR" && <p style={{ color: "var(--accent)" }}>Failed to send message. Please try again.</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
