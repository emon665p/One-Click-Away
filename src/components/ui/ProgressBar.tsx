type ProgressBarProps = {
  value: number;
  max?: number;
  label?: string;
};

export function ProgressBar({ value, max = 100, label }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="w-full">
      {label ? <p className="mb-2 text-sm text-[color:var(--text-soft)]">{label}</p> : null}
      <div className="h-2 overflow-hidden rounded-full bg-[color:var(--bg-secondary)]">
        <div className="h-full rounded-full bg-[color:var(--accent)] transition-all" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
