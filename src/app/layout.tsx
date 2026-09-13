import type { Metadata } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';
import { CANONICAL_SITE_URL } from '@/config/site-url';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_SITE_URL),
  title: 'AI Speeds - Make AI Speeds Us',
  description: 'Make AI Speeds Us',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'AI Speeds',
    locale: 'zh_CN',
    title: 'AI Speeds - Make AI Speeds Us',
    description: 'Make AI Speeds Us',
  },
  twitter: {
    card: 'summary',
    title: 'AI Speeds - Make AI Speeds Us',
    description: 'Make AI Speeds Us',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const wuunuWebSocketUrl = process.env.NODE_ENV !== 'production' ? process.env['WUUNU_WS_URL'] : undefined;
  const serializedWuunuWebSocketUrl = wuunuWebSocketUrl
    ? JSON.stringify(wuunuWebSocketUrl).replaceAll('<', '\\u003c')
    : undefined;

  return (
    <html lang='zh-CN' suppressHydrationWarning>
      <head>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </head>
      <body>
        {children}

        {serializedWuunuWebSocketUrl && (
          <>
            <Script id='wuunu-ws' strategy='afterInteractive'>
              {`window.__WUUNU_WS__ = ${serializedWuunuWebSocketUrl};`}
            </Script>
            <Script
              id='wuunu-widget'
              src='https://cdn.jsdelivr.net/npm/@wuunu/widget@0.1.22'
              strategy='afterInteractive'
              crossOrigin='anonymous'
            />
          </>
        )}
      </body>
    </html>
  );
}
