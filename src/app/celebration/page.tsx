'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import confetti from 'canvas-confetti';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useSelection } from '@/components/selection/SelectionProvider';

function formatDate(value?: string) {
  if (!value) return 'Not selected';
  return new Date(value).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function downloadICS(eventTitle: string, date?: string, time?: string, description = '') {
  if (!date || !time) return;

  const start = new Date(date);
  const [hours, modifier] = time.split(' ');
  const [hourString, minuteString] = hours.split(':');
  let hour = Number(hourString);
  if (modifier === 'PM' && hour < 12) hour += 12;
  if (modifier === 'AM' && hour === 12) hour = 0;
  start.setHours(hour, Number(minuteString), 0, 0);

  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);

  const formatICSTime = (dateTime: Date) =>
    dateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const ics = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//One Click Away//EN\r\nBEGIN:VEVENT\r\nUID:${Date.now()}@oneclickaway\r\nDTSTAMP:${formatICSTime(new Date())}\r\nDTSTART:${formatICSTime(start)}\r\nDTEND:${formatICSTime(end)}\r\nSUMMARY:${eventTitle}\r\nDESCRIPTION:${description}\r\nEND:VEVENT\r\nEND:VCALENDAR`;

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'one-click-away-event.ics';
  anchor.click();
  URL.revokeObjectURL(url);
}

export default function CelebrationPage() {
  const { vibe, date, time, food } = useSelection();
  const [showBurst, setShowBurst] = useState(false);

  useEffect(() => {
    confetti({
      particleCount: 160,
      spread: 100,
      origin: { y: 0.4 },
      colors: ['#ff8fb1', '#ffdfe7', '#ffffff'],
    });
    setShowBurst(true);
  }, []);

  const formattedDate = useMemo(() => formatDate(date), [date]);

  return (
    <AppShell
      title="Celebration"
      description="Your evening is officially set. Enjoy the anticipation and keep the details close."
      currentStep={8}
      totalSteps={8}
    >
      <div className="relative mx-auto flex min-h-[calc(100vh-18rem)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <GlassCard className="relative w-full max-w-6xl overflow-hidden p-8 sm:p-10">
          <AnimatePresence>
            {showBurst ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute inset-0"
              >
                {Array.from({ length: 9 }).map((_, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.8, 1.2, 0.9],
                      x: [0, (index - 4) * 18],
                      y: [0, -60 + Math.abs(index - 4) * 10],
                    }}
                    transition={{ duration: 1.6, ease: 'easeOut', repeat: 0 }}
                    className="absolute left-1/2 top-1/3 -translate-x-1/2 text-5xl text-[color:var(--accent)] opacity-70"
                    style={{ rotate: index * 18 }}
                  >
                    ♥
                  </motion.span>
                ))}
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="relative z-10">
            <SectionTitle
              eyebrow="Celebration"
              title="Your evening is officially set."
              description="Everything is arranged. Now it’s time to enjoy the anticipation and save the details for later."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
              <div className="rounded-[28px] border border-[color:var(--border)] bg-white/80 p-6 shadow-soft backdrop-blur">
                <div className="grid gap-6">
                  <div className="rounded-[24px] bg-[rgba(255,239,244,0.95)] p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">Vibe</p>
                    <p className="mt-3 text-2xl font-semibold text-slate-950">{vibe ?? 'Not selected'}</p>
                  </div>
                  <div className="rounded-[24px] bg-[rgba(255,255,255,0.95)] p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">Date</p>
                    <p className="mt-3 text-2xl font-semibold text-slate-950">{formattedDate}</p>
                  </div>
                  <div className="rounded-[24px] bg-[rgba(255,255,255,0.95)] p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">Time</p>
                    <p className="mt-3 text-2xl font-semibold text-slate-950">{time ?? 'Not selected'}</p>
                  </div>
                  <div className="rounded-[24px] bg-[rgba(255,239,244,0.95)] p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">Food</p>
                    <p className="mt-3 text-2xl font-semibold text-slate-950">{food ?? 'Not selected'}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-[color:var(--border)] bg-white/80 p-6 shadow-soft backdrop-blur">
                <div className="space-y-5">
                  <div className="rounded-[24px] bg-[rgba(255,243,247,0.95)] p-5 text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">Heart explosion</p>
                    <p className="mt-3 text-3xl font-semibold text-[color:var(--accent)]">💖</p>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--text-soft)]">
                      A burst of joy for your special evening.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <Link href="/welcome">
                      <Button>Restart</Button>
                    </Link>
                    <Button
                      variant="secondary"
                      onClick={() => downloadICS('One Click Away Date', date, time, `Vibe: ${vibe ?? 'N/A'}\nFood: ${food ?? 'N/A'}`)}
                    >
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
