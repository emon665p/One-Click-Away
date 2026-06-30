import { motion } from 'framer-motion';

type FloatingHeartsProps = {
  count?: number;
  className?: string;
  size?: number;
  variant?: 'soft' | 'bold';
};

const hearts = ['♡', '♥'];

export function FloatingHearts({ count = 8, className = '', size = 18, variant = 'soft' }: FloatingHeartsProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`.trim()}>
      {Array.from({ length: count }).map((_, index) => {
        const left = 6 + ((index * 13) % 84);
        const top = 6 + ((index * 19) % 78);
        const delay = index * 0.26;
        const color = variant === 'bold' ? 'rgba(255, 120, 160, 0.95)' : 'rgba(255, 143, 177, 0.9)';

        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: [0, 0.85, 0], y: [0, -28, -12], scale: [0.95, 1.08, 1] }}
            transition={{ duration: 5.2 + index * 0.28, repeat: Number.POSITIVE_INFINITY, repeatType: 'mirror', delay, ease: 'easeOut' }}
            className="absolute text-center leading-none"
            style={{ left: `${left}%`, top: `${top}%`, fontSize: size, color }}
          >
            {hearts[index % hearts.length]}
          </motion.span>
        );
      })}
    </div>
  );
}
