import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import { SelectionProvider } from '@/components/selection/SelectionProvider';
import { MusicProvider } from '@/components/music/MusicProvider';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { MusicPlayer } from '@/components/music/MusicPlayer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'One Click Away ❤️',
  description: 'A luxury interactive invitation experience with premium motion and elegant styling.',
  metadataBase: new URL('https://one-click-away.example'),
  openGraph: {
    title: 'One Click Away ❤️',
    description: 'A luxury interactive date invitation experience with elegant motion and responsive design.',
    type: 'website',
    url: 'https://one-click-away.example/',
    siteName: 'One Click Away',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'One Click Away invitation experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Click Away ❤️',
    description: 'A luxury interactive date invitation experience with elegant motion and responsive design.',
  },
  alternates: {
    canonical: 'https://one-click-away.example/',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <MusicProvider>
          <SelectionProvider>
            <ClientLayout>
              {children}
            </ClientLayout>
            <MusicPlayer />
          </SelectionProvider>
        </MusicProvider>
      </body>
    </html>
  );
}
