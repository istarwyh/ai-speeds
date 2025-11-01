import type { Metadata } from 'next';
import './globals.css';
import { designTokens } from '../styles/designTokens';
import type { ReactNode } from 'react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AI Speeds Me',
  description: 'Make AI Speeds Us',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>{/* Font Awesome icons will be imported as React components */}</head>
      <body>
        {/* Inject global CSS variables (design tokens) at runtime */}
        <style
          // Tokens are defined as a CSS string targeting :root
          // This keeps components token-driven without hex values
          dangerouslySetInnerHTML={{ __html: designTokens }}
        />
        {children}

        {/* WUUNU SNIPPET - DON'T CHANGE THIS (START) */}
        {process.env.NODE_ENV !== 'production' && (
          <>
            <Script id='wuunu-ws' strategy='afterInteractive'>
              {'window.__WUUNU_WS__ = "http://127.0.0.1:50587/";'}
            </Script>
            <Script
              id='wuunu-widget'
              src='https://cdn.jsdelivr.net/npm/@wuunu/widget@0.1?cacheParam=56'
              strategy='afterInteractive'
              crossOrigin='anonymous'
            />
          </>
        )}
        {/* WUUNU SNIPPET - DON'T CHANGE THIS (END) */}
      </body>
    </html>
  );
}
