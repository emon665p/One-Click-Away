import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,143,177,0.14),_transparent_45%),linear-gradient(135deg,_#fff8fb_0%,_#fffdfd_50%,_#ffeaf4_100%)] px-6 py-16 text-[color:var(--text)]">
      <div className="glass-panel max-w-md p-8 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--accent)]">Not found</p>
        <h1 className="mt-3 text-3xl font-semibold">This page slipped away</h1>
        <p className="mt-4 text-[color:var(--text-soft)]">The moment you were looking for is still waiting on the invitation page.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-white">
          Return home
        </Link>
      </div>
    </main>
  );
}
