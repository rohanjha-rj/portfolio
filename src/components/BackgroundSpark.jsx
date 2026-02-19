import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const BackgroundSpark = () => {
    // Generate a fixed set of particles
    const particles = useMemo(() => {
        return Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 10,
            color: Math.random() > 0.5 ? 'var(--primary)' : 'var(--secondary)',
        }));
    }, []);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: -1,
            overflow: 'hidden',
        }}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        width: p.size,
                        height: p.size,
                        borderRadius: '50%',
                        background: p.color,
                        opacity: 0.15,
                        filter: 'blur(1px)',
                        boxShadow: `0 0 10px ${p.color === 'var(--primary)' ? 'var(--primary-glow)' : 'var(--secondary-glow)'}`,
                    }}
                    initial={{ left: `${p.x}%`, top: `${p.y}%` }}
                    animate={{
                        left: [`${p.x}%`, `${(p.x + 10) % 100}%`, `${p.x}%`],
                        top: [`${p.y}%`, `${(p.y + 15) % 100}%`, `${p.y}%`],
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundSpark;
