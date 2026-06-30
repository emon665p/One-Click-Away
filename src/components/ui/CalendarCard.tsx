import { ReactNode } from 'react';

type CalendarCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

export function CalendarCard({ title, description, children, className = '' }: CalendarCardProps) {
  return (
    <section className={`surface-card px-5 py-6 sm:px-6 ${className}`.trim()}>
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">{title}</p>
        <p className="mt-2 text-lg font-semibold text-slate-900">{description}</p>
      </div>
      {children}
    </section>
  );
}
