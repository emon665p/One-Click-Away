'use client';

import { Music2, VolumeX } from 'lucide-react';
import { useMemo, useState } from 'react';

type MusicButtonProps = {
  enabled?: boolean;
  onToggle?: () => void;
  size?: number;
  className?: string;
  ariaLabel?: string;
};

export function MusicButton({ enabled, onToggle, size = 18, className = '', ariaLabel = 'Toggle background music' }: MusicButtonProps) {
  const [internalEnabled, setInternalEnabled] = useState(true);
  const isEnabled = useMemo(() => (enabled === undefined ? internalEnabled : enabled), [enabled, internalEnabled]);

  const handleClick = () => {
    if (onToggle) {
      onToggle();
      return;
    }

    setInternalEnabled((value) => !value);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/85 text-[color:var(--text)] shadow-sm transition hover:bg-white ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {isEnabled ? <Music2 size={size} /> : <VolumeX size={size} />}
    </button>
  );
}
