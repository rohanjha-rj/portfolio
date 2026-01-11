import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDark(false);
            document.body.classList.add('light-mode');
        }
    }, []);

    const toggleTheme = (e) => {
        if (isAnimating) return;
        setIsAnimating(true);

        const x = e.clientX;
        const y = e.clientY;

        const ripple = document.createElement('div');
        ripple.className = 'theme-ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        document.body.appendChild(ripple);

        setTimeout(() => {
            if (isDark) {
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                document.body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            }
            setIsDark(!isDark);
        }, 400);

        setTimeout(() => {
            ripple.remove();
            setIsAnimating(false);
        }, 1000);
    };

    return (
        <div className="theme-toggle" onClick={toggleTheme}>
            {isDark ? <FaMoon /> : <FaSun />}
        </div>
    );
};

export default ThemeToggle;
