import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { useSound } from '../context/SoundContext';
import { triggerHaptic } from '../utils';
import './Testimonials.css';

const Testimonials = () => {
    const { playClick, playHover } = useSound();

    const testimonials = [
        {
            text: "Rohan is an exceptional developer and mentor. His ability to explain complex concepts in simple terms helped our team quickly ramp up on new technologies.",
            author: "Sanjay Kumar",
            role: "Project Manager, Techglaz Labs",
            initials: "SK"
        },
        {
            text: "The workshops conducted by Rohan were engaging and informative. He has a natural talent for teaching and inspiring students to learn web development.",
            author: "Anjali Patel",
            role: "Club President, Campus TV & Radio",
            initials: "AP"
        }
    ];

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <motion.h2
                    className="title-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center' }}
                >
                    Kind <span className="gradient-text">Words</span>
                </motion.h2>

                <div className="testimonials-grid-premium">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-card testimonial-card-premium"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={playHover}
                            onClick={() => { playClick(); triggerHaptic('light'); }}
                        >
                            <div className="testimonial-quote-icon">
                                <FaQuoteLeft />
                            </div>
                            <p className="testimonial-content-text">"{item.text}"</p>
                            <div className="testimonial-author-premium">
                                <div className="testimonial-avatar-premium">{item.initials}</div>
                                <h4 className="testimonial-author-name">{item.author}</h4>
                                <p className="testimonial-author-role">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
