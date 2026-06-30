import { ChefHat } from 'lucide-react';

type FoodCardProps = {
  title: string;
  description: string;
  tag: string;
  selected?: boolean;
  className?: string;
};

export function FoodCard({ title, description, tag, selected = false, className = '' }: FoodCardProps) {
  return (
    <div
      className={`w-full rounded-[20px] border p-4 text-left transition ${
        selected
          ? 'border-[color:var(--accent)] bg-[color:var(--bg-secondary)] shadow-[0_18px_50px_rgba(255,143,177,0.15)]'
          : 'border-[color:var(--border)] bg-white/80 hover:shadow-[0_18px_50px_rgba(255,143,177,0.08)]'
      } ${className}`.trim()}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[color:var(--accent)]">
          <ChefHat size={16} />
          <h4 className="font-semibold text-[color:var(--text)]">{title}</h4>
        </div>
        <span className="rounded-full bg-[color:var(--bg-secondary)] px-3 py-1 text-xs text-[color:var(--accent)]">{tag}</span>
      </div>
      <p className="text-sm leading-7 text-[color:var(--text-soft)]">{description}</p>
    </div>
  );
}
