import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Testimonials
                </motion.h2>

                <div className="testimonials-container">
                    {testimonials.map((item, index) => (
                        <motion.div
                            className="testimonial tilt-effect"
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="quote-icon">
                                <FaQuoteLeft />
                            </div>
                            <div className="testimonial-text">
                                <p>{item.text}</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">{item.initials}</div>
                                <div>
                                    <h4>{item.author}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
