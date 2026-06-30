'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Calendar } from '@/components/ui/Calendar';
import { GlassCard } from '@/components/ui/GlassCard';

type RSVPCardProps = {
  isAccepted: boolean;
  onAccept: () => void;
};

export function RSVPCard({ isAccepted, onAccept }: RSVPCardProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date(2026, 8, 14));

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
    >
      <GlassCard hover className="p-6">
      <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]">Your response</p>
      <h3 className="mt-3 text-2xl font-semibold text-[color:var(--text)]">We would love to celebrate with you</h3>
      <p className="mt-4 leading-8 text-[color:var(--text-soft)]">
        {isAccepted
          ? 'Your presence has been beautifully noted. We cannot wait to share this evening with you.'
          : 'Tap below to confirm your place and let the celebration begin.'}
      </p>

      <div className="mt-6">
        <Calendar selected={selectedDate} onSelect={setSelectedDate} />
      </div>

      <div className="mt-6">
        <Button onClick={onAccept} variant="secondary" className="w-full">
          {isAccepted ? 'Reserved for you' : 'Confirm attendance'}
        </Button>
      </div>
      </GlassCard>
    </motion.aside>
  );
}
