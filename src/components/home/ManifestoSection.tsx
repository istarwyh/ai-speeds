export function ManifestoSection() {
  return (
    <section
      className='relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24 lg:py-32'
      aria-labelledby='manifesto-title'
    >
      <div aria-hidden='true' className='pointer-events-none absolute inset-0'>
        <div className='absolute -left-24 -top-24 size-72 rounded-full border border-slate-950/10' />
        <div className='absolute -bottom-32 right-[-4rem] size-96 rounded-full border border-slate-950/10' />
        <div className='absolute right-[18%] top-[20%] size-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.9)]' />
      </div>
      <div className='relative mx-auto max-w-site px-4 sm:px-6 lg:px-8'>
        <p className='text-sm font-bold uppercase tracking-[0.24em] text-primary-foreground/65'>Make AI Speeds Us</p>
        <h2
          id='manifesto-title'
          className='mt-6 max-w-5xl text-balance font-editorial text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl'
        >
          AI 的价值，不是让少数人跑得更快，而是让更多人拥有创造新事物的能力。
        </h2>
        <p className='mt-8 max-w-2xl text-lg leading-8 text-primary-foreground/75'>
          所以我们公开工具、方法和真实实践；尊重每一位创作者与来源；也让今天的个人探索，能够成为明天团队共同前进的基础。
        </p>
      </div>
    </section>
  );
}
