import { motion } from 'framer-motion';

type TimeButtonProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

export function TimeButton({ label, active = false, onClick, className = '' }: TimeButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        active ? 'bg-[color:var(--accent)] text-white' : 'border border-[color:var(--border)] bg-white/80 text-[color:var(--text)]'
      } ${className}`.trim()}
    >
      {label}
    </motion.button>
  );
}
