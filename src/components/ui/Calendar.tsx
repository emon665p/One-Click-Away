import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

type CalendarProps = {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  fromDate?: Date;
  className?: string;
};

export function Calendar({ selected, onSelect, fromDate, className = '' }: CalendarProps) {
  return (
    <div className={`rounded-[20px] border border-[color:var(--border)] bg-white/70 p-3 text-[color:var(--text)] ${className}`.trim()}>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        fromDate={fromDate}
        className="rdp-nav_button rdp-button_reset"
        modifiersClassNames={{
          selected: 'bg-[color:var(--accent)] text-white',
          today: 'text-[color:var(--accent)]',
        }}
      />
    </div>
  );
}
