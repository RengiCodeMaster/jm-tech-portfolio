import React from 'react';
import { motion } from 'framer-motion';

const TechHalo: React.FC = () => {
    return (
        <div className="relative w-[500px] h-[500px] flex items-center justify-center opacity-70 pointer-events-none select-none">
            {/* Outer Ring - Dashed Slow Rotation */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-primary/20 w-full h-full"
            />

            {/* Middle Ring - Reverse Rotation */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[80%] h-[80%] rounded-full border border-secondary/20 border-t-transparent border-l-transparent"
            />

            {/* Inner Ring - Pulsing */}
            <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[60%] h-[60%] rounded-full bg-primary/5 blur-xl"
            />

            {/* Decorative Orbits */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-[120%] h-[120%]"
            >
                <div className="absolute top-1/2 left-0 w-3 h-3 bg-secondary rounded-full blur-[2px] shadow-[0_0_10px_var(--secondary)]" />
            </motion.div>

            {/* Cybernetic Accents (SVG) */}
            <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="url(#grad1)" strokeWidth="0.5" fill="none" strokeDasharray="10 20" opacity="0.4" />
                <path d="M50,5 A45,45 0 0,1 95,50" stroke="url(#grad2)" strokeWidth="1" fill="none" opacity="0.6" />
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Tech Data Particles */}
            <div className="absolute top-10 right-20 text-[10px] font-mono text-primary/40">SYS.READY</div>
            <div className="absolute bottom-10 left-20 text-[10px] font-mono text-secondary/40">NET.SECURE</div>
        </div>
    );
};

export default TechHalo;
