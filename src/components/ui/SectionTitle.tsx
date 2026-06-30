type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionTitle({ eyebrow, title, description, className = '' }: SectionTitleProps) {
  return (
    <div className={`space-y-3 ${className}`.trim()}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">{eyebrow}</p>
      ) : null}
      <div className="space-y-1">
        <h2 className="text-heading text-slate-950">{title}</h2>
        {description ? <p className="text-body">{description}</p> : null}
      </div>
    </div>
  );
}
