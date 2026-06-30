import confetti from 'canvas-confetti';

export function Confetti() {
  const trigger = () => {
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.7 },
    });
  };

  return (
    <button
      type="button"
      onClick={trigger}
      className="rounded-full border border-[color:var(--border)] bg-white/80 px-4 py-2 text-sm text-[color:var(--text)]"
    >
      Trigger Confetti
    </button>
  );
}
