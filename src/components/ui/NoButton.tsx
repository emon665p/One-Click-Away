'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

type NoButtonProps = {
  onConfirm?: () => void;
};

const randomPosition = () => ({
  left: `${10 + Math.floor(Math.random() * 70)}%`,
  top: `${10 + Math.floor(Math.random() * 60)}%`,
});

export function NoButton({ onConfirm }: NoButtonProps) {
  const [position, setPosition] = useState<{ left: string; top: string }>(() => ({ left: '50%', top: '50%' }));
  const [attempts, setAttempts] = useState(0);
  const [canClick, setCanClick] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = typeof window !== 'undefined' && (window.matchMedia('(hover: none)').matches || window.innerWidth < 768);
    setIsMobile(mobile);
  }, []);

  useEffect(() => {
    if (!isMobile && attempts >= 1) {
      setCanClick(true);
    }
  }, [attempts, isMobile]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setPosition((prev) => ({
        left: prev.left === '50%' ? '80%' : '20%',
        top: prev.top === '50%' ? '30%' : '70%',
      }));
      setAttempts((count) => count + 1);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isMobile && attempts < 3) {
      event.preventDefault();
      setAttempts((count) => count + 1);
      setPosition(randomPosition());
      return;
    }

    if (!isMobile && !canClick) {
      event.preventDefault();
      setAttempts((count) => count + 1);
      return;
    }

    onConfirm?.();
  };

  const buttonText = canClick || (!isMobile && attempts >= 1) ? 'No' : 'No';

  return (
    <div className="relative h-32 w-full overflow-hidden rounded-[24px] border border-[color:var(--border)] bg-white/80 p-3">
      <motion.button
        type="button"
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className="absolute inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,143,177,0.2)]"
        style={{
          left: position.left,
          top: position.top,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {buttonText}
      </motion.button>
    </div>
  );
}
