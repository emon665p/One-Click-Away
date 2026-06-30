'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Music2, Pause, Volume2, Settings2 } from 'lucide-react';
import { useMusic } from '@/components/music/MusicProvider';

export function MusicControl() {
  const { enabled, toggle, volume, setVolume } = useMusic();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!popoverOpen || !containerRef.current) {
        return;
      }

      if (!containerRef.current.contains(event.target as Node)) {
        setPopoverOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [popoverOpen]);

  return (
    <div ref={containerRef} className="fixed bottom-5 right-5 z-50 flex items-end gap-3">
      <AnimatePresence>
        {popoverOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="w-64 rounded-3xl border border-[color:var(--border)] bg-white/95 p-4 shadow-[0_22px_65px_rgba(15,23,42,0.12)] backdrop-blur"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--accent)]">Music</p>
                <p className="text-sm font-semibold text-slate-900">Volume</p>
              </div>
              <button
                type="button"
                onClick={() => setPopoverOpen(false)}
                className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100"
                aria-label="Close music settings"
              >
                <Settings2 size={16} />
              </button>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Quiet</span>
                <span>{Math.round(volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(event) => setVolume(Number(event.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[color:var(--accent)]"
                aria-label="Adjust music volume"
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={toggle}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/95 text-[color:var(--text)] shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition hover:bg-white"
        aria-label={enabled ? 'Pause music' : 'Play music'}
      >
        {enabled ? <Pause size={24} /> : <Music2 size={24} />}
      </motion.button>

      <motion.button
        type="button"
        onClick={() => setPopoverOpen((open) => !open)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/95 text-[color:var(--text)] shadow-sm transition hover:bg-white"
        aria-label="Open music volume controls"
      >
        <Volume2 size={18} />
      </motion.button>
    </div>
  );
}
