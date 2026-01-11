import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="cursor-dot"
                animate={{
                    x: mousePosition.x - 4, // Center the dot (8px / 2)
                    y: mousePosition.y - 4
                }}
                transition={{
                    type: "tween",
                    ease: "backOut",
                    duration: 0
                }}
            />
            <motion.div
                className="cursor-outline"
                animate={{
                    x: mousePosition.x - 20, // Center the outline (40px / 2)
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    borderWidth: isHovering ? "2px" : "1px" // Thicker border on hover
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    mass: 0.5
                }}
            />
        </>
    );
};

export default CustomCursor;
