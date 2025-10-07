import type { Metadata } from 'next';
import './globals.css';
import { designTokens } from '../styles/designTokens';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'AI Speeds Me',
  description: 'Make AI Speeds Us',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
          crossOrigin='anonymous'
        />
      </head>
      <body>
        {/* Inject global CSS variables (design tokens) at runtime */}
        <style
          // Tokens are defined as a CSS string targeting :root
          // This keeps components token-driven without hex values
          dangerouslySetInnerHTML={{ __html: designTokens }}
        />
        {children}
      </body>
    </html>
  );
}
