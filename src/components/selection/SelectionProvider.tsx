'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { SelectionContextType, SelectionState } from '@/lib/selection';

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

const initialState: SelectionState = {
  vibe: undefined,
  date: undefined,
  time: undefined,
  food: undefined,
};

type SelectionProviderProps = {
  children: ReactNode;
};

export function SelectionProvider({ children }: SelectionProviderProps) {
  const [selection, setSelection] = useState<SelectionState>(initialState);

  const value = useMemo(
    () => ({
      ...selection,
      setVibe: (value: string) => setSelection((current) => ({ ...current, vibe: value })),
      setDate: (value: string) => setSelection((current) => ({ ...current, date: value })),
      setTime: (value: string) => setSelection((current) => ({ ...current, time: value })),
      setFood: (value: string) => setSelection((current) => ({ ...current, food: value })),
    }),
    [selection],
  );

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>;
}

export function useSelection() {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error('useSelection must be used within SelectionProvider');
  }
  return context;
}
