import { ReactNode } from 'react';

type AnimatedBackgroundProps = {
  children: ReactNode;
};

export function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-luxury-gradient text-[color:var(--text)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12%] top-10 h-72 w-72 rounded-full bg-[rgba(255,214,229,0.55)] blur-3xl animate-float-slow" />
        <div className="absolute right-[-6%] top-28 h-80 w-80 rounded-full bg-[rgba(255,255,255,0.6)] blur-3xl animate-tilt" />
        <div className="absolute left-[30%] top-[10%] h-56 w-56 rounded-full bg-[rgba(255,164,186,0.22)] blur-3xl animate-float-slow delay-1000" />
        <div className="absolute right-[18%] top-[55%] h-28 w-28 rounded-full bg-[rgba(255,143,177,0.18)] blur-3xl animate-float-slow delay-1600" />
        <div className="absolute left-[14%] top-[68%] h-14 w-14 rounded-full bg-white/75 blur-2xl animate-pulse-soft" />
        <div className="absolute right-[12%] top-[22%] h-16 w-16 rounded-full bg-white/70 blur-2xl animate-pulse-soft delay-600" />
        <div className="absolute right-[35%] top-[70%] h-3 w-3 rounded-full bg-white/80 opacity-70 animate-particle" />
        <div className="absolute left-[22%] top-[45%] h-2 w-2 rounded-full bg-white/70 opacity-80 animate-particle delay-500" />
        <div className="absolute left-[72%] top-[30%] h-3 w-3 rounded-full bg-white/60 opacity-80 animate-particle delay-1000" />
        <div className="absolute left-[16%] top-[24%] h-3 w-3 rounded-full bg-white/70 opacity-70 animate-particle delay-1200" />
        <div className="absolute left-[25%] top-[12%] h-16 w-16 rounded-full bg-[rgba(255,244,246,0.7)] blur-2xl animate-pulse-soft delay-800" />
        <div className="absolute right-[18%] top-[45%] heart animate-heart-hover" />
        <div className="absolute left-[10%] top-[50%] heart animate-heart-hover delay-700" />
        <div className="absolute left-[65%] top-[68%] heart animate-heart-hover delay-1200" />
      </div>
      <div className="relative z-10 px-4 py-10 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
}
