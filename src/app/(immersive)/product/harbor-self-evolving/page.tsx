import type { Metadata } from 'next';

const HARBOR_SELF_EVOLVING_URL = 'https://istarwyh.github.io/harbor-self-evolving/zh/';

export const metadata: Metadata = {
  title: 'Harbor Self-Evolving | AI Speeds',
  description: '面向 DeepSeek Harness Agent 的持续评测与受控自进化。',
  alternates: {
    canonical: 'https://aispeeds.me/product/harbor-self-evolving',
  },
};

export default function HarborSelfEvolvingPage() {
  return (
    <main className='h-[100dvh] w-full overflow-hidden bg-bg-primary'>
      <iframe
        src={HARBOR_SELF_EVOLVING_URL}
        title='Harbor Self-Evolving'
        className='block h-full w-full border-0'
        referrerPolicy='strict-origin-when-cross-origin'
      />
      <noscript>
        <a href={HARBOR_SELF_EVOLVING_URL}>打开 Harbor Self-Evolving 中文站</a>
      </noscript>
    </main>
  );
}
