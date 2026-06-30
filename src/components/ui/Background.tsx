import { ReactNode } from 'react';

type BackgroundProps = {
  children: ReactNode;
};

export function Background({ children }: BackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-luxury-gradient text-[color:var(--text)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[rgba(255,214,229,0.55)] blur-3xl animate-float-slow" />
        <div className="absolute right-10 top-24 h-56 w-56 rounded-full bg-[rgba(255,255,255,0.55)] blur-2xl animate-tilt" />
        <div className="absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-[rgba(255,164,186,0.22)] blur-3xl animate-float-slow delay-1000" />
        <div className="absolute left-20 top-3/4 h-28 w-28 rounded-full bg-[rgba(255,255,255,0.45)] blur-2xl animate-float-slow" />
        <div className="absolute right-16 bottom-24 h-32 w-32 rounded-full bg-[rgba(255,143,177,0.18)] blur-3xl animate-float-slow delay-2000" />
        <div className="absolute left-[12%] top-[12%] h-14 w-14 rounded-full bg-[rgba(255,249,252,0.8)] blur-xl animate-pulse-soft" />
        <div className="absolute left-[78%] top-[14%] h-16 w-16 rounded-full bg-[rgba(255,255,255,0.65)] blur-xl animate-pulse-soft delay-500" />
        <div className="absolute right-[18%] top-[58%] h-20 w-20 rounded-full bg-[rgba(255,215,232,0.45)] blur-xl animate-pulse-soft delay-1000" />
        <div className="absolute left-10 top-[55%] h-4 w-4 rounded-full bg-white/80 opacity-70 animate-particle" />
        <div className="absolute left-[25%] top-[40%] h-3 w-3 rounded-full bg-white/70 opacity-80 animate-particle delay-500" />
        <div className="absolute left-[70%] top-[30%] h-2 w-2 rounded-full bg-white/60 opacity-80 animate-particle delay-1000" />
        <div className="absolute left-[60%] top-[78%] h-3 w-3 rounded-full bg-white/70 opacity-70 animate-particle delay-1500" />
        <div className="absolute right-24 top-[18%] h-3 w-3 rounded-full bg-white/70 opacity-70 animate-particle delay-700" />

        <div className="absolute left-[20%] top-[65%] heart" />
        <div className="absolute left-[58%] top-[20%] heart animate-heart-hover delay-700" />
        <div className="absolute right-[14%] top-[52%] heart animate-heart-hover delay-1200" />
      </div>

      <main className="relative z-10 px-4 py-10 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
