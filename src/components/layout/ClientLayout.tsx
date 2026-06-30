'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { MusicControl } from '@/components/music/MusicControl';

type ClientLayoutProps = {
  children: ReactNode;
};

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="min-h-screen"
      >
        {children}
        <MusicControl />
      </motion.div>
    </AnimatePresence>
  );
}
