'use client';

import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="flex flex-col items-center gap-4 rounded-[24px] border border-[color:var(--border)] bg-[color:var(--bg-secondary)]/95 p-8 shadow-xl"
      >
        <div className="h-16 w-16 rounded-full bg-[color:var(--accent)]/20" />
        <p className="text-lg font-semibold text-[color:var(--text)]">Preparing your invitation...</p>
      </motion.div>
    </div>
  );
}
