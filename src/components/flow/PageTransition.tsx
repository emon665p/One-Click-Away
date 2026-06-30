"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
  keyName: string;
};

export function PageTransition({ children, keyName }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyName}
        initial={{ opacity: 0, y: 24, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -24, scale: 0.985 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
