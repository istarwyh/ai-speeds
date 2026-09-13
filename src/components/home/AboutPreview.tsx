import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { getFeatureById } from '@/config/features';

export function AboutPreview() {
  const brand = getFeatureById('brand');

  return (
    <section className='bg-bg-primary py-20 sm:py-24 lg:py-32' aria-labelledby='about-preview-title'>
      <div className='mx-auto grid max-w-site gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:px-8'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink'>About AI Speeds</p>
          <h2
            id='about-preview-title'
            className='mt-4 text-balance font-editorial text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl'
          >
            Founder-led today. Built to create together.
          </h2>
        </div>

        <div className='rounded-[2rem] border border-floating-border bg-bg-warm p-6 shadow-sm sm:p-8'>
          <p className='text-lg leading-8 text-text-secondary'>
            AI Speeds
            不是一个人的作品陈列柜，而是围绕共同使命持续生长的品牌与编辑空间。短期内容主要由创始贡献者发起；长期可以承载团队、合作方、受邀贡献者和经过审核的精选资源。
          </p>
          <p className='mt-5 text-base leading-7 text-text-secondary'>
            无论谁参与，原创、共创与精选都会被明确区分，具体作者、维护者、演讲者、合作方与来源也会独立署名。
          </p>
          <Link
            href={brand.href}
            className='mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl text-sm font-semibold text-text-primary transition hover:text-primary-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
          >
            查看品牌资料
            <ArrowUpRight size={16} aria-hidden='true' />
          </Link>
        </div>
      </div>
    </section>
  );
}
