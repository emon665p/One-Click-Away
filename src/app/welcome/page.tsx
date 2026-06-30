'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { FloatingHearts } from '@/components/ui/FloatingHearts';
import { GlassCard } from '@/components/ui/GlassCard';

export default function WelcomePage() {
  return (
    <AppShell
      title="Welcome"
      description="Start the invitation journey with a warm, elegant introduction."
      currentStep={1}
      totalSteps={8}
      nextHref="/story"
      nextLabel="Begin"
    >
      <div className="relative mx-auto flex min-h-[calc(100vh-18rem)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <FloatingHearts count={10} className="hidden md:block" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-3xl"
        >
          <GlassCard className="p-8 sm:p-10">
            <div className="space-y-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">Welcome</p>
              <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">I wanted to ask you something...</h1>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-[color:var(--text-soft)] sm:text-xl">
                But a normal message didn't feel special. So I built this.
              </p>
              <div className="flex justify-center">
                <Link href="/story">
                  <Button type="button" className="px-8 py-3 text-base" variant="primary">
                    Continue →
                  </Button>
                </Link>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </AppShell>
  );
}
