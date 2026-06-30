'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Sparkles } from 'lucide-react';
import { formatDate, getCountdown } from '@/lib/date';
import { useMemo } from 'react';
import { Button } from '@/components/ui/Button';

const eventDate = new Date('2026-09-14T19:30:00');

type HeroPanelProps = {
  isAccepted: boolean;
  onAccept: () => void;
};

export function HeroPanel({ isAccepted, onAccept }: HeroPanelProps) {
  const countdown = useMemo(() => getCountdown(eventDate), []);

  return (
    <section className="glass-panel mx-auto flex max-w-6xl flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl"
      >
        <div className="soft-pill mb-6 inline-flex items-center gap-2">
          <Sparkles size={16} />
          An intimate evening awaits
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl lg:text-6xl">
          One Click Away <span className="text-[color:var(--accent)]">❤️</span>
        </h1>
        <p className="mt-5 text-lg leading-8 text-[color:var(--text-soft)] sm:text-xl">
          You are cordially invited to a candlelit evening of conversation, music, and a little bit of magic.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={onAccept}>
            {isAccepted ? 'Accepted ✨' : 'Accept Invitation'}
          </Button>
          <Button variant="secondary">View Details</Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        className="w-full max-w-md rounded-[24px] border border-[color:var(--border)] bg-[color:var(--bg-secondary)]/70 p-6"
      >
        <div className="mb-6 flex items-center gap-3 text-[color:var(--accent)]">
          <CalendarDays size={20} />
          <span className="text-sm uppercase tracking-[0.25em]">Save the date</span>
        </div>
        <div className="rounded-[20px] border border-[color:var(--border)] bg-white/80 p-5">
          <p className="text-xl font-semibold text-[color:var(--text)]">{formatDate(eventDate)}</p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Mins', value: countdown.minutes },
            ].map((item) => (
              <div key={item.label} className="rounded-[18px] bg-[color:var(--bg)] p-3">
                <p className="text-2xl font-semibold text-[color:var(--text)]">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-soft)]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
