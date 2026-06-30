'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { MusicButton } from '@/components/ui/MusicButton';
import { StepNavigation } from '@/components/steps/StepNavigation';
import { PageProgress } from '@/components/steps/PageProgress';
import { useMusic } from '@/components/music/MusicProvider';

type AppShellProps = {
  children: ReactNode;
  title: string;
  description?: string;
  currentStep: number;
  totalSteps: number;
  backHref?: string;
  nextHref?: string;
  nextLabel?: string;
  backLabel?: string;
  showMusicToggle?: boolean;
};

export function AppShell({
  children,
  title,
  description,
  currentStep,
  totalSteps,
  backHref,
  nextHref,
  nextLabel = 'Continue',
  backLabel = 'Previous',
  showMusicToggle = true,
}: AppShellProps) {
  const { enabled, toggle } = useMusic();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,143,177,0.12),_transparent_45%),linear-gradient(135deg,_#fff8fb_0%,_#fffdfd_50%,_#ffeaf4_100%)] px-4 py-6 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col">
        <header className="mb-6 flex flex-col gap-4 rounded-[24px] border border-slate-200/70 bg-white/70 px-4 py-4 shadow-sm backdrop-blur sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">Experience</p>
              <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-slate-600">Step {currentStep} of {totalSteps}</div>
              {showMusicToggle ? (
                <MusicButton enabled={enabled} onToggle={toggle} className="shrink-0" ariaLabel="Toggle ambient music" />
              ) : null}
            </div>
          </div>
          <PageProgress currentStep={currentStep} totalSteps={totalSteps} />
          {description ? <p className="text-sm leading-7 text-slate-600">{description}</p> : null}
        </header>

        <motion.main
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="flex-1"
        >
          {children}
          {(backHref || nextHref) ? (
            <div className="mt-8">
              <StepNavigation backHref={backHref} nextHref={nextHref} backLabel={backLabel} nextLabel={nextLabel} />
            </div>
          ) : null}
        </motion.main>
      </div>
    </div>
  );
}
