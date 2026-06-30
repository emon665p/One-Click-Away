import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -3, scale: 1.01, boxShadow: '0 24px 60px rgba(255, 143, 177, 0.16)' } : undefined}
      transition={{ type: 'spring', stiffness: 250, damping: 24 }}
      className={`glass-panel rounded-[24px] p-6 ${className}`.trim()}
    >
      {children}
    </motion.div>
  );
}
