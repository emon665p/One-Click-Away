import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type StepCardProps = {
  children: ReactNode;
  title: string;
  description?: string;
};

export function StepCard({ children, title, description }: StepCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="rounded-[28px] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8"
    >
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">Step</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h2>
        {description ? <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}
