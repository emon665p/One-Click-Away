'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Calendar } from '@/components/ui/Calendar';
import { CalendarCard } from '@/components/ui/CalendarCard';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useSelection } from '@/components/selection/SelectionProvider';

export default function SelectDatePage() {
  const { date, setDate } = useSelection();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(date ? new Date(date) : undefined);

  useEffect(() => {
    if (!date) {
      const fallback = new Date();
      fallback.setDate(fallback.getDate() + 14);
      setSelectedDate(fallback);
      setDate(fallback.toISOString());
    }
  }, [date, setDate]);

  const today = useMemo(() => {
    const value = new Date();
    value.setHours(0, 0, 0, 0);
    return value;
  }, []);

  const handleSelect = (value: Date | undefined) => {
    if (!value) return;
    setSelectedDate(value);
    setDate(value.toISOString());
  };

  return (
    <AppShell
      title="Choose a date"
      description="Select the evening that feels right, with a calm and elegant calendar experience."
      currentStep={4}
      totalSteps={8}
      backHref="/choose-vibe"
      nextHref="/select-time"
      nextLabel="Choose time"
    >
      <div className="mx-auto flex min-h-[calc(100vh-18rem)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <GlassCard className="w-full max-w-5xl p-8 sm:p-10">
          <div className="text-center">
            <SectionTitle
              eyebrow="Choose the date"
              title="Pick a day that feels right."
              description="The calendar is designed to feel calm and luxurious, with past dates gently disabled so the focus stays on your perfect choice."
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <CalendarCard title="Select a date" description="Choose a day for the evening." className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-[20px] border border-[color:var(--border)] bg-white/60 p-3 shadow-sm"
              >
                <div className="rounded-[18px] border border-white/70 bg-[rgba(255,249,252,0.9)] p-3 sm:p-4">
                  <div className="flex items-center justify-between px-2 pb-3 text-sm font-medium text-[color:var(--text-soft)]">
                    <span>Luxury calendar</span>
                    <span>{selectedDate ? selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'}</span>
                  </div>
                  <div className="rounded-[18px] border border-[color:var(--border)] bg-white/80 p-2 sm:p-3">
                    <Calendar selected={selectedDate} onSelect={handleSelect} fromDate={today} />
                  </div>
                </div>
              </motion.div>
            </CalendarCard>

            <CalendarCard title="Selected day" description="Your chosen evening begins here." className="flex flex-col justify-between">
              <div className="space-y-4">
                <div className="rounded-[22px] border border-[color:var(--border)] bg-[rgba(255,249,252,0.9)] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">Chosen date</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-950">
                    {selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) : 'No date selected'}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--text-soft)]">
                    A beautiful date creates the foundation for the evening ahead.
                  </p>
                </div>
                <div className="rounded-[20px] border border-[color:var(--border)] bg-white/70 p-5 text-sm leading-7 text-[color:var(--text-soft)]">
                  Past dates are unavailable to keep the flow focused on the future and the feeling of anticipation.
                </div>
              </div>
            </CalendarCard>
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
