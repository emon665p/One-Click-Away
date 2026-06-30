'use client';

import { motion } from 'framer-motion';
import { AppShell } from '@/components/layout/AppShell';
import { FloatingHearts } from '@/components/ui/FloatingHearts';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

export default function StoryPage() {
  return (
    <AppShell
      title="Our Story"
      description="A gentle narrative moment before the invitation takes shape."
      currentStep={2}
      totalSteps={8}
      backHref="/welcome"
      nextHref="/choose-vibe"
      nextLabel="Choose mood"
    >
      <div className="relative mx-auto flex min-h-[calc(100vh-18rem)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <FloatingHearts count={8} className="hidden lg:block" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-3xl"
        >
          <GlassCard className="p-8 sm:p-10">
            <SectionTitle
              eyebrow="Our Story"
              title="A quiet, thoughtful evening designed just for you."
              description="Every moment is meant to feel intimate, warm, and beautifully effortless. This story is the beginning of an evening shaped by soft light, gentle motion, and a sense of being truly welcomed."
            />
            <div className="mt-8 space-y-6 text-[color:var(--text-soft)]">
              <p className="text-lg leading-8 sm:text-xl">
                This page is a gentle invitation to linger, imagine, and receive the evening with calm anticipation.
              </p>
              <p className="text-base leading-8 sm:text-lg">
                No hurry. No noise. Just a luxurious moment of storytelling before the next step in our experience unfolds.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </AppShell>
  );
}
