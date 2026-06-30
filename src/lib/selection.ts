export type SelectionState = {
  vibe?: string;
  date?: string;
  time?: string;
  food?: string;
};

export type SelectionContextType = SelectionState & {
  setVibe: (value: string) => void;
  setDate: (value: string) => void;
  setTime: (value: string) => void;
  setFood: (value: string) => void;
};
