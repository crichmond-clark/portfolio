import type { Metadata } from 'next';
import { Syne, Geist, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'crichmondclark.dev - Portfolio',
  description: 'Fusing deep digital textures with refined minimalism.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${syne.variable} ${geist.variable} ${jetbrainsMono.variable} dark`}>
      <body className="antialiased selection:bg-surface-container-highest selection:text-on-surface" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
