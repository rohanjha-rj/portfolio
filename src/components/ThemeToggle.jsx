import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDark(false);
            document.body.classList.add('light-mode');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
        setIsDark(!isDark);
    };

    return (
        <div className="theme-toggle" onClick={toggleTheme}>
            {isDark ? <FaMoon /> : <FaSun />}
        </div>
    );
};

export default ThemeToggle;
