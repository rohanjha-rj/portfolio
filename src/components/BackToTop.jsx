import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const val = (winScroll / height) * 100;
        setScrollProgress(val);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    // SVG Circle Props
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <div
            className={`back-to-top ${visible ? 'active' : ''}`}
            onClick={scrollToTop}
        >
            <svg width="100%" height="100%" viewBox="0 0 50 50" className="progress-ring">
                <circle
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="3"
                    fill="transparent"
                    r={radius}
                    cx="25"
                    cy="25"
                />
                <circle
                    stroke="var(--secondary)"
                    strokeWidth="3"
                    fill="transparent"
                    r={radius}
                    cx="25"
                    cy="25"
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: strokeDashoffset,
                        transition: 'stroke-dashoffset 0.1s linear'
                    }}
                />
            </svg>
            <div className="arrow-icon">
                <FaArrowUp />
            </div>
        </div>
    );
};

export default BackToTop;
