import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hoverEffect = true }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { 
        y: -5, 
        boxShadow: "0 10px 30px -10px rgba(6, 182, 212, 0.2)",
        borderColor: "rgba(6, 182, 212, 0.3)"
      } : {}}
      transition={{ duration: 0.3 }}
      className={`glass-card rounded-2xl p-6 transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};