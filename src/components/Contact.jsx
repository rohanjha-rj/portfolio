import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaShareAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
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
                            <div className="contact-icon">
                                <FaPhone />
                            </div>
                            <div className="contact-details">
                                <h3>Phone</h3>
                                <p>9304199676</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-info-item"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>
                            <div className="contact-details">
                                <h3>Email</h3>
                                <p>jharohan2005@gmail.com</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-info-item"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="contact-icon">
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
                            <div className="contact-icon">
                                <FaShareAlt />
                            </div>
                            <div className="contact-details">
                                <h3>Social Media</h3>
                                <div className="social-links-contact">
                                    <a href="#"><FaLinkedin /></a>
                                    <a href="#"><FaGithub /></a>
                                    <a href="#"><FaTwitter /></a>
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
                        <form id="contactForm">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" required className="glow-on-hover" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" required className="glow-on-hover" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" required className="glow-on-hover"></textarea>
                            </div>

                            <button type="submit" className="btn glow-on-hover">Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
