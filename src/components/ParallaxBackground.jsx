import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
    const { scrollYProgress } = useScroll();

    // Create varying speeds for different shapes
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -800]);

    const shapeStyle = {
        position: 'fixed',
        borderRadius: '50%',
        zIndex: -1, // Behind everything
        filter: 'blur(80px)',
        opacity: 0.4,
    };

    return (
        <div className="parallax-bg-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1, overflow: 'hidden' }}>
            {/* Shape 1: Top Left */}
            <motion.div
                animate={{
                    background: [
                        'radial-gradient(circle, var(--primary), transparent)',
                        'radial-gradient(circle, var(--accent), transparent)',
                        'radial-gradient(circle, var(--secondary), transparent)',
                        'radial-gradient(circle, var(--primary), transparent)',
                    ],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{
                    ...shapeStyle,
                    top: '-10%',
                    left: '-10%',
                    width: '600px',
                    height: '600px',
                    y: y1,
                }}
            />

            {/* Shape 2: Bottom Right */}
            <motion.div
                animate={{
                    background: [
                        'radial-gradient(circle, var(--secondary), transparent)',
                        'radial-gradient(circle, var(--primary), transparent)',
                        'radial-gradient(circle, var(--accent), transparent)',
                        'radial-gradient(circle, var(--secondary), transparent)',
                    ],
                    scale: [1, 0.8, 1.1, 1],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{
                    ...shapeStyle,
                    bottom: '-10%',
                    right: '-10%',
                    width: '500px',
                    height: '500px',
                    y: y2,
                }}
            />

            {/* Shape 3: Mid Center */}
            <motion.div
                animate={{
                    background: [
                        'radial-gradient(circle, var(--accent), transparent)',
                        'radial-gradient(circle, var(--secondary), transparent)',
                        'radial-gradient(circle, var(--primary), transparent)',
                        'radial-gradient(circle, var(--accent), transparent)',
                    ],
                    scale: [1, 1.3, 1, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    ...shapeStyle,
                    top: '40%',
                    left: '60%',
                    width: '300px',
                    height: '300px',
                    y: y3,
                }}
            />
        </div>
    );
};

export default ParallaxBackground;
