'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type MusicContextType = {
  enabled: boolean;
  volume: number;
  toggle: () => void;
  setEnabled: (value: boolean) => void;
  setVolume: (value: number) => void;
};

const MusicContext = createContext<MusicContextType | undefined>(undefined);

type MusicProviderProps = {
  children: ReactNode;
};

export function MusicProvider({ children }: MusicProviderProps) {
  const [enabled, setEnabled] = useState(false);
  const [volume, setVolume] = useState(0.55);

  const value = useMemo(
    () => ({
      enabled,
      volume,
      toggle: () => setEnabled((current) => !current),
      setEnabled,
      setVolume,
    }),
    [enabled, volume],
  );

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>;
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within MusicProvider');
  }
  return context;
}
