'use client';

import { motion } from 'framer-motion';
import { AppShell } from '@/components/layout/AppShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { useSelection } from '@/components/selection/SelectionProvider';

const vibes = [
  { title: 'Cozy', description: 'Warm candlelight, plush textures, and quiet comfort.' },
  { title: 'Relaxed', description: 'Soft rhythms, gentle pacing, and effortless ease.' },
  { title: 'Romantic', description: 'Tender moments, glowing details, and intimate charm.' },
  { title: 'Adventure', description: 'Playful discovery, lively energy, and inspired surprise.' },
];

export default function ChooseVibePage() {
  const { vibe, setVibe } = useSelection();

  return (
    <AppShell
      title="Choose the vibe"
      description="Pick the mood that sets the tone for the entire evening."
      currentStep={3}
      totalSteps={8}
      backHref="/story"
      nextHref="/select-date"
      nextLabel="Select date"
    >
      <div className="mx-auto flex min-h-[calc(100vh-18rem)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <GlassCard className="w-full max-w-6xl p-8 sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--accent)]">Choose the vibe</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Which atmosphere feels right?</h1>
            <p className="mt-4 text-lg leading-8 text-[color:var(--text-soft)] sm:text-xl">
              Pick the single mood that best matches the evening you want to create.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {vibes.map((option) => {
              const selected = vibe === option.title;
              return (
                <motion.button
                  key={option.title}
                  type="button"
                  onClick={() => setVibe(option.title)}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className={`group relative overflow-hidden rounded-[28px] border px-6 py-7 text-left transition-all duration-300 ${
                    selected
                      ? 'border-[color:var(--accent)] bg-[rgba(255,239,244,0.95)] shadow-luxe ring-1 ring-[rgba(255,143,177,0.25)]'
                      : 'border-[color:var(--border)] bg-white/80 hover:border-[color:var(--accent)] hover:bg-white hover:shadow-soft'
                  }`}
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[color:var(--accent)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="text-xl font-semibold text-slate-950">{option.title}</h2>
                      {selected ? <span className="rounded-full bg-[color:var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">Selected</span> : null}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[color:var(--text-soft)]">{option.description}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
