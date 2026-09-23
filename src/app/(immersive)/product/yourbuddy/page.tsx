import type { Metadata } from 'next';

const YOURBUDDY_URL = 'https://istarwyh.github.io/yourbuddy/';

export const metadata: Metadata = {
  title: 'YourBuddy | AI Speeds',
  description: '让每个人，都有自己的 AI 工作台。',
  alternates: {
    canonical: 'https://aispeeds.me/product/yourbuddy',
  },
};

export default function YourBuddyPage() {
  return (
    <main className='relative h-[100dvh] w-full overflow-hidden bg-bg-primary'>
      <iframe
        src={YOURBUDDY_URL}
        title='YourBuddy'
        className='block h-full w-full border-0'
        referrerPolicy='strict-origin-when-cross-origin'
        sandbox='allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads'
        allow='clipboard-write; fullscreen'
        allowFullScreen
      />
      <a
        href={YOURBUDDY_URL}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='在新窗口打开 YourBuddy'
        className='absolute bottom-4 right-4 z-10 inline-flex min-h-11 items-center rounded-pill border border-floating-border bg-floating-surface px-4 py-2 text-sm font-semibold text-text-primary shadow-floating backdrop-blur-floating transition hover:border-primary hover:bg-floating-surface-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
      >
        新窗口打开
      </a>
      <noscript>
        <a href={YOURBUDDY_URL}>打开 YourBuddy 中文站</a>
      </noscript>
    </main>
  );
}
