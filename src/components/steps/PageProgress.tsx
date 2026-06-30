type PageProgressProps = {
  currentStep: number;
  totalSteps: number;
};

export function PageProgress({ currentStep, totalSteps }: PageProgressProps) {
  const progress = Math.max(0, Math.min(100, (currentStep / totalSteps) * 100));

  return (
    <div className="w-full">
      <div className="mb-2 h-2 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-[color:var(--accent)] transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
      <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
        <span>Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>
    </div>
  );
}
