'use client';

import { motion } from 'framer-motion';
import { AppShell } from '@/components/layout/AppShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { TimeButton } from '@/components/ui/TimeButton';
import { useSelection } from '@/components/selection/SelectionProvider';

const times = ['6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'];

export default function SelectTimePage() {
  const { time, setTime } = useSelection();

  return (
    <AppShell
      title="Choose the time"
      description="Select the hour that feels most natural for the evening."
      currentStep={5}
      totalSteps={8}
      backHref="/select-date"
      nextHref="/food-selection"
      nextLabel="Choose food"
    >
      <div className="mx-auto flex min-h-[calc(100vh-18rem)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <GlassCard className="w-full max-w-4xl p-8 sm:p-10">
          <SectionTitle
            eyebrow="Choose the time"
            title="Select the hour that feels most natural."
            description="A calm, rounded selection experience lets the moment feel effortless and intimate."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {times.map((option) => (
              <motion.div key={option} whileHover={{ y: -4, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                <TimeButton
                  label={option}
                  active={time === option}
                  onClick={() => setTime(option)}
                  className="w-full justify-center rounded-full px-5 py-4 text-base"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 rounded-[24px] border border-[color:var(--border)] bg-white/70 p-5 text-sm leading-7 text-[color:var(--text-soft)]">
            <p className="font-medium text-slate-900">Selected time</p>
            <p className="mt-2 text-base text-[color:var(--text)]">{time ?? 'No time selected yet'}</p>
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
