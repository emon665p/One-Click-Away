'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

const MAX_ESCAPE_ATTEMPTS = 7;
const PROXIMITY_THRESHOLD = 100;

export default function FinalQuestionPage() {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [escapeAttempts, setEscapeAttempts] = useState(0);
  const [isClickable, setIsClickable] = useState(false);
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-120, 120], [-8, 8]);

  useEffect(() => {
    if (escapeAttempts >= MAX_ESCAPE_ATTEMPTS) {
      setIsClickable(true);
    }
  }, [escapeAttempts]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextX = event.clientX - rect.left - rect.width / 2;
    const nextY = event.clientY - rect.top - rect.height / 2;
    x.set(nextX);
    y.set(nextY);
  };

  const moveNoButton = () => {
    if (isClickable || typeof window === 'undefined' || !buttonRef.current || !parentRef.current) {
      return;
    }

    const nextAttempt = escapeAttempts + 1;
    setEscapeAttempts(nextAttempt);

    if (nextAttempt >= MAX_ESCAPE_ATTEMPTS) {
      setIsClickable(true);
      return;
    }

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const parentRect = parentRef.current.getBoundingClientRect();
    const maxX = parentRect.width - buttonRect.width - 16;
    const maxY = parentRect.height - buttonRect.height - 16;
    const nextX = 8 + Math.random() * Math.max(0, maxX);
    const nextY = 8 + Math.random() * Math.max(0, maxY);

    setTargetPosition({ x: nextX, y: nextY });
  };

  const handleNoApproach = (clientX: number, clientY: number) => {
    if (isClickable || !buttonRef.current) {
      return;
    }

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;
    const distance = Math.hypot(clientX - buttonCenterX, clientY - buttonCenterY);

    if (distance <= PROXIMITY_THRESHOLD) {
      moveNoButton();
    }
  };

  const handleNoTouchStart = () => {
    if (isClickable) {
      return;
    }

    moveNoButton();
  };

  const handleYesClick = () => {
    router.push('/celebration');
  };

  return (
    <AppShell
      title="Final question"
      description="A playful final step before the evening is confirmed."
      currentStep={7}
      totalSteps={8}
      backHref="/food-selection"
      nextHref="/celebration"
      nextLabel="Celebrate"
    >
      <div className="mx-auto flex min-h-[calc(100vh-18rem)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <GlassCard className="w-full max-w-5xl p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
                setTargetPosition({ x: 0, y: 0 });
              }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 6, -6, 0] }}
                transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                className="relative flex h-56 w-56 items-center justify-center rounded-full bg-[rgba(255,239,244,0.95)] shadow-luxe sm:h-72 sm:w-72"
                style={{ x, y, rotate }}
              >
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                  className="text-[6rem] text-[color:var(--accent)] sm:text-[8rem]"
                >
                  ♥
                </motion.div>
                <div className="absolute inset-0 rounded-full border border-[rgba(255,143,177,0.2)]" />
              </motion.div>
            </motion.div>

            <div className="text-center lg:text-left">
              <SectionTitle
                eyebrow="Final question"
                title="Will you go on a date with me?"
                description="A simple yes would mean the world, but the no button has a mind of its own."
              />

              <div ref={parentRef} className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start" onMouseMove={(event) => handleNoApproach(event.clientX, event.clientY)}>
                <motion.button
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleYesClick}
                  className="rounded-full bg-[color:var(--accent)] px-8 py-3 text-base font-semibold text-white shadow-[0_18px_45px_rgba(255,143,177,0.25)]"
                >
                  Yes
                </motion.button>
                <motion.button
                  ref={buttonRef}
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ x: targetPosition.x, y: targetPosition.y }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  onMouseMove={(event) => handleNoApproach(event.clientX, event.clientY)}
                  onTouchStart={handleNoTouchStart}
                  onClick={() => {
                    if (!isClickable) {
                      moveNoButton();
                      return;
                    }
                  }}
                  disabled={!isClickable}
                  className="rounded-full border border-[color:var(--border)] bg-white/80 px-8 py-3 text-base font-semibold text-[color:var(--text)] shadow-sm"
                >
                  No
                </motion.button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
