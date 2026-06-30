import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  icon?: ReactNode;
  disabled?: boolean;
};

export function Button({
  children,
  type = 'button',
  onClick,
  variant = 'primary',
  className = '',
  icon,
  disabled = false,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition';
  const variants = {
    primary: 'bg-[color:var(--accent)] text-white shadow-[0_10px_25px_rgba(255,143,177,0.25)]',
    secondary: 'border border-[color:var(--border)] bg-white/80 text-[color:var(--text)]',
    ghost: 'border border-[color:var(--border)] bg-transparent text-[color:var(--text)]',
  };

  return (
    <motion.button
      type={type}
      whileHover={{ y: -2, scale: 1.01, boxShadow: '0 12px 30px rgba(255, 143, 177, 0.2)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`.trim()}
    >
      {icon}
      {children}
    </motion.button>
  );
}
