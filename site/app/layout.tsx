import type { Metadata } from 'next';
import { Space_Grotesk, Geist, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
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
  description: 'Full-stack developer building web systems, automation, and AI-powered tooling.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${geist.variable} ${jetbrainsMono.variable} dark`}>
      <body className="antialiased selection:bg-surface-container-highest selection:text-on-surface" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
