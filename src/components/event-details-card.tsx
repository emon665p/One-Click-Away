'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock3, Heart, MapPin } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

export function EventDetailsCard() {
  const highlights = [
    { icon: Clock3, text: '7:30 PM sharp' },
    { icon: MapPin, text: 'The Moonlit Terrace' },
    { icon: CheckCircle2, text: 'Dress: elegant and effortless' },
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
    >
      <GlassCard hover className="p-6">
      <div className="mb-4 flex items-center gap-2 text-[color:var(--accent)]">
        <Heart size={18} />
        <span className="text-sm uppercase tracking-[0.25em]">The evening</span>
      </div>
      <h2 className="text-2xl font-semibold text-[color:var(--text)]">A beautifully curated night for two</h2>
      <p className="mt-4 leading-8 text-[color:var(--text-soft)]">
        Expect soft lighting, your favorite playlist, a thoughtful dinner, and just enough anticipation to make the moment memorable.
      </p>
      <div className="mt-6 space-y-3 text-sm text-[color:var(--text)]">
        {highlights.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3 rounded-[18px] border border-[color:var(--border)] bg-white/70 px-4 py-3">
            <Icon size={16} className="text-[color:var(--accent)]" />
            <span>{text}</span>
          </div>
        ))}
      </div>
      </GlassCard>
    </motion.article>
  );
}
