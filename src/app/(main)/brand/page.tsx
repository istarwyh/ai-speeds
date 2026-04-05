'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BrandIcon, BrandIconSimple, BrandWordmark } from '@/components/brand';
import { BRAND_COLORS } from '@/components/brand';

const BRAND_ASSETS_BASE = '/brand';

const ASSET_FILES = [
  {
    name: 'ai-speeds-logo.svg',
    label: '标准 Logo',
    desc: '带渐变的方形 Logo，适用于主要展示场景',
  },
  {
    name: 'ai-speeds-logo-horizontal.svg',
    label: '横向 Logo',
    desc: '图标 + 文字组合，适用于页眉和导航栏',
  },
  {
    name: 'ai-speeds-icon.svg',
    label: '纯图标',
    desc: '最小化图标，适用于 favicon、按钮等小尺寸场景',
  },
  {
    name: 'ai-speeds-monochrome.svg',
    label: '单色版本',
    desc: '继承 currentColor，适用于需要自定义颜色的场景',
  },
] as const;

const CODE_SNIPPETS = {
  imgTag: `<!-- 直接引用 SVG 文件 -->
<img
  src="https://aispeeds.me/brand/ai-speeds-logo.svg"
  alt="AI Speeds"
  width="200"
/>

<!-- 横向 Logo -->
<img
  src="https://aispeeds.me/brand/ai-speeds-logo-horizontal.svg"
  alt="AI Speeds"
  width="240"
/>

<!-- 小图标 -->
<img
  src="https://aispeeds.me/brand/ai-speeds-icon.svg"
  alt="AI Speeds"
  width="32"
/>`,
  brandKit: `<!-- 1. 引入 Brand Kit -->
<script src="https://aispeeds.me/brand/brand-kit.js"></script>

<!-- 2. 放置容器 -->
<div id="ai-speeds-logo"></div>

<!-- 3. 调用 API -->
<script>
  // 方形 Logo
  AISpeedsBrand.insertLogo('#ai-speeds-logo', 'square', {
    size: 120,
    link: true,
    linkUrl: 'https://aispeeds.me'
  });

  // 横向 Logo
  AISpeedsBrand.insertLogo('#header-logo', 'horizontal', {
    width: 180,
    height: 45
  });

  // 纯图标
  AISpeedsBrand.insertLogo('#icon-slot', 'icon', {
    size: 32,
    link: false
  });

  // 单色版本
  AISpeedsBrand.insertLogo('#footer-logo', 'monochrome', {
    size: 80
  });
</script>`,
  inlineSvg: `<!-- 获取 SVG 代码后内联使用 -->
<script src="https://aispeeds.me/brand/brand-kit.js"></script>
<script>
  const svg = AISpeedsBrand.getLogo('square', { size: 100 });
  document.getElementById('logo').innerHTML = svg;
</script>`,
  reactImport: `import { BrandLogo, BrandIcon, BRAND_COLORS } from '@/components/brand';

// 页面头部
<BrandLogo size="medium" />

// 小图标
<BrandIcon size={24} design="spiral" />

// 品牌颜色
<div style={{ color: BRAND_COLORS.primary }}>AI Speeds</div>`,
} as const;

export default function BrandPage() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    void globalThis.navigator?.clipboard?.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2000);
  };

  return (
    <main className='min-h-screen bg-bg-secondary text-text-primary'>
      <div className='mx-auto max-w-6xl p-8'>
        {/* Header */}
        <header className='mb-8'>
          <div className='flex items-center gap-3 mb-4'>
            <Link
              href='/'
              className='flex items-center gap-2 text-text-muted transition-colors hover:text-text-primary'
            >
              <BrandIcon size={24} />
              <span className='text-sm font-semibold italic'>AI Speeds</span>
            </Link>
            <span className='text-text-muted'>|</span>
            <span className='text-sm font-medium text-text-secondary'>Brand Kit</span>
          </div>
          <h1 className='text-3xl font-semibold'>Brand Kit</h1>
          <p className='text-text-secondary mt-2'>
            AI Speeds 品牌标识资源与外部集成指南。下载 SVG 文件或使用 JavaScript Brand Kit 在任何网站中嵌入品牌标识。
          </p>
        </header>

        {/* ── Logo 预览 ── */}
        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>Logo 预览</h2>
          <div className='bg-bg-primary rounded-xl border border-border-light p-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Default */}
              <div className='flex flex-col items-center gap-4'>
                <div className='bg-bg-secondary rounded-lg p-6 border border-border-light'>
                  <BrandIcon size={64} variant='default' />
                </div>
                <div className='text-center'>
                  <p className='text-sm font-medium text-text-primary'>Default</p>
                  <p className='text-xs text-text-muted'>A+S 山峰攀登路径</p>
                </div>
              </div>

              {/* Gradient */}
              <div className='flex flex-col items-center gap-4'>
                <div className='bg-bg-secondary rounded-lg p-6 border border-border-light'>
                  <BrandIcon size={64} variant='gradient' />
                </div>
                <div className='text-center'>
                  <p className='text-sm font-medium text-text-primary'>Gradient</p>
                  <p className='text-xs text-text-muted'>渐变版本</p>
                </div>
              </div>

              {/* Monochrome */}
              <div className='flex flex-col items-center gap-4'>
                <div className='bg-bg-secondary rounded-lg p-6 border border-border-light'>
                  <BrandIcon size={64} variant='monochrome' className='text-text-primary' />
                </div>
                <div className='text-center'>
                  <p className='text-sm font-medium text-text-primary'>Monochrome</p>
                  <p className='text-xs text-text-muted'>单色版本</p>
                </div>
              </div>

              {/* Simple */}
              <div className='flex flex-col items-center gap-4'>
                <div className='bg-bg-secondary rounded-lg p-6 border border-border-light'>
                  <BrandIconSimple size={48} />
                </div>
                <div className='text-center'>
                  <p className='text-sm font-medium text-text-primary'>Simple</p>
                  <p className='text-xs text-text-muted'>Favicon 专用 (16px)</p>
                </div>
              </div>

              {/* Wordmark */}
              <div className='flex flex-col items-center gap-4 md:col-span-2'>
                <div className='bg-bg-secondary rounded-lg p-6 border border-border-light w-full flex items-center justify-center'>
                  <BrandWordmark size={180} />
                </div>
                <div className='text-center'>
                  <p className='text-sm font-medium text-text-primary'>Wordmark</p>
                  <p className='text-xs text-text-muted'>图标 + 文字组合</p>
                </div>
              </div>
            </div>

            {/* Size Comparison */}
            <div className='mt-8 pt-6 border-t border-border-light'>
              <h3 className='text-lg font-medium text-text-primary mb-4'>尺寸规格</h3>
              <div className='flex items-center justify-center gap-8 bg-bg-secondary rounded-lg p-8 border border-border-light'>
                {[16, 24, 32, 48, 64].map(s => (
                  <div key={s} className='flex flex-col items-center gap-2'>
                    <BrandIcon size={s} variant='default' />
                    <span className='text-xs text-text-muted'>{s}px</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 可下载资源 ── */}
        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>可下载资源</h2>
          <p className='text-sm text-text-secondary mb-4'>
            所有 SVG 文件托管在{' '}
            <code className='text-xs font-mono bg-bg-tertiary px-1.5 py-0.5 rounded'>{BRAND_ASSETS_BASE}/</code>{' '}
            目录下，可直接通过 URL 引用。
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {ASSET_FILES.map(asset => (
              <div
                key={asset.name}
                className='bg-bg-primary rounded-xl border border-border-light p-5 flex flex-col gap-3 hover:shadow-md transition-shadow'
              >
                <div className='bg-bg-secondary rounded-lg p-4 flex items-center justify-center h-24 border border-border-light'>
                  <img src={`${BRAND_ASSETS_BASE}/${asset.name}`} alt={asset.label} className='max-h-16 max-w-full' />
                </div>
                <div>
                  <p className='text-sm font-medium text-text-primary'>{asset.label}</p>
                  <p className='text-xs text-text-muted mt-1'>{asset.desc}</p>
                </div>
                <div className='flex items-center gap-2 mt-auto'>
                  <code className='text-xs font-mono text-teal-600 flex-1 truncate'>{asset.name}</code>
                  <button
                    onClick={() => copyToClipboard(`${BRAND_ASSETS_BASE}/${asset.name}`, asset.name)}
                    className='text-xs text-text-muted hover:text-text-primary transition-colors shrink-0'
                    title='复制路径'
                  >
                    {copiedLabel === asset.name ? '✓' : '📋'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 品牌色彩 ── */}
        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>品牌色彩</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
            {(
              [
                { name: 'Teal 500', hex: BRAND_COLORS.primary, cls: 'bg-teal-500', text: 'text-white' },
                { name: 'Blue 600', hex: BRAND_COLORS.secondary, cls: 'bg-primary', text: 'text-white' },
                { name: 'Teal 400', hex: BRAND_COLORS.accent, cls: 'bg-teal-400', text: 'text-gray-900' },
                { name: 'Slate 900', hex: BRAND_COLORS.dark, cls: 'bg-text-primary', text: 'text-white' },
                { name: 'Slate 50', hex: BRAND_COLORS.light, cls: 'bg-bg-secondary', text: 'text-text-primary' },
              ] as const
            ).map(c => (
              <div key={c.name} className='flex flex-col gap-2'>
                <div
                  className={`h-24 w-full rounded-lg shadow-md ${c.cls} ${c.text} flex flex-col items-center justify-center p-3 relative group`}
                >
                  <span className='text-xs font-mono opacity-90'>{c.hex}</span>
                  <button
                    onClick={() => copyToClipboard(c.hex, c.name)}
                    className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 bg-black/20 hover:bg-black/40 rounded text-xs'
                    title='复制颜色值'
                  >
                    {copiedLabel === c.name ? '✓' : '📋'}
                  </button>
                </div>
                <span className='text-sm font-medium text-text-primary'>{c.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 外部集成指南 ── */}
        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>外部网站集成</h2>
          <p className='text-sm text-text-secondary mb-6'>
            以下三种方式均可在任意网站中使用 AI Speeds 品牌标识，选择最适合你技术栈的方式即可。
          </p>

          <div className='space-y-6'>
            {/* 方式一 */}
            <div className='bg-bg-primary rounded-xl border border-border-light overflow-hidden'>
              <div className='flex items-center gap-3 px-6 py-4 border-b border-border-light bg-bg-tertiary'>
                <span className='px-2 py-0.5 rounded-md text-xs font-semibold text-white bg-teal-500'>1</span>
                <h3 className='text-base font-semibold text-text-primary'>直接引用 SVG</h3>
                <span className='text-xs text-text-muted ml-auto'>最简单 · 零依赖</span>
              </div>
              <div className='p-6'>
                <p className='text-sm text-text-secondary mb-4'>
                  将 SVG 文件地址替换为你的部署域名即可使用，适用于任何支持 HTML 的环境。
                </p>
                <CodeBlock
                  code={CODE_SNIPPETS.imgTag}
                  label='img-tag'
                  copiedLabel={copiedLabel}
                  onCopy={copyToClipboard}
                />
              </div>
            </div>

            {/* 方式二 */}
            <div className='bg-bg-primary rounded-xl border border-border-light overflow-hidden'>
              <div className='flex items-center gap-3 px-6 py-4 border-b border-border-light bg-bg-tertiary'>
                <span className='px-2 py-0.5 rounded-md text-xs font-semibold text-white bg-primary'>2</span>
                <h3 className='text-base font-semibold text-text-primary'>JavaScript Brand Kit</h3>
                <span className='text-xs text-text-muted ml-auto'>最灵活 · 动态插入</span>
              </div>
              <div className='p-6'>
                <p className='text-sm text-text-secondary mb-4'>
                  引入 <code className='text-xs font-mono bg-bg-tertiary px-1.5 py-0.5 rounded'>brand-kit.js</code> 后，
                  通过 <code className='text-xs font-mono bg-bg-tertiary px-1.5 py-0.5 rounded'>AISpeedsBrand</code>{' '}
                  全局对象调用 API。 支持 4 种 Logo 类型、自定义尺寸、自动链接包装和内置 hover 动画。
                </p>
                <CodeBlock
                  code={CODE_SNIPPETS.brandKit}
                  label='brand-kit'
                  copiedLabel={copiedLabel}
                  onCopy={copyToClipboard}
                />
                <div className='mt-4 bg-bg-accent rounded-lg p-4 border border-border-light'>
                  <h4 className='text-sm font-semibold text-text-primary mb-2'>API 参数一览</h4>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-text-secondary font-mono'>
                    <div>
                      <span className='text-teal-600'>type</span>: &apos;square&apos; | &apos;horizontal&apos; |
                      &apos;icon&apos; | &apos;monochrome&apos;
                    </div>
                    <div>
                      <span className='text-teal-600'>size</span>: number (方形/图标尺寸)
                    </div>
                    <div>
                      <span className='text-teal-600'>width / height</span>: number (横向尺寸)
                    </div>
                    <div>
                      <span className='text-teal-600'>link</span>: boolean (包装为链接)
                    </div>
                    <div>
                      <span className='text-teal-600'>linkUrl</span>: string (链接地址)
                    </div>
                    <div>
                      <span className='text-teal-600'>className</span>: string (自定义 CSS 类)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 方式三 */}
            <div className='bg-bg-primary rounded-xl border border-border-light overflow-hidden'>
              <div className='flex items-center gap-3 px-6 py-4 border-b border-border-light bg-bg-tertiary'>
                <span className='px-2 py-0.5 rounded-md text-xs font-semibold text-white bg-secondary'>3</span>
                <h3 className='text-base font-semibold text-text-primary'>内联 SVG</h3>
                <span className='text-xs text-text-muted ml-auto'>最高性能 · 可定制</span>
              </div>
              <div className='p-6'>
                <p className='text-sm text-text-secondary mb-4'>
                  通过 <code className='text-xs font-mono bg-bg-tertiary px-1.5 py-0.5 rounded'>getLogo()</code>{' '}
                  方法获取 SVG 源码后直接注入 DOM，避免额外网络请求。
                </p>
                <CodeBlock
                  code={CODE_SNIPPETS.inlineSvg}
                  label='inline-svg'
                  copiedLabel={copiedLabel}
                  onCopy={copyToClipboard}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── React 项目内部使用 ── */}
        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>React 项目内部使用</h2>
          <div className='bg-bg-primary rounded-xl border border-border-light overflow-hidden'>
            <div className='px-6 py-4 border-b border-border-light bg-bg-tertiary'>
              <p className='text-sm text-text-secondary'>
                在 AI Speeds 项目内部，所有品牌组件通过
                <code className='text-xs font-mono bg-bg-secondary mx-1 px-1.5 py-0.5 rounded'>@/components/brand</code>
                统一导入。
              </p>
            </div>
            <div className='p-6'>
              <CodeBlock
                code={CODE_SNIPPETS.reactImport}
                label='react-import'
                copiedLabel={copiedLabel}
                onCopy={copyToClipboard}
              />
            </div>
          </div>
        </section>

        {/* ── 使用规范 ── */}
        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>使用规范</h2>
          <div className='bg-bg-primary rounded-xl border border-border-light p-6'>
            <ul className='space-y-3 text-sm text-text-secondary'>
              <li className='flex items-start gap-2'>
                <span className='text-teal-500 shrink-0'>✓</span>
                <span>
                  <strong className='text-text-primary'>最小尺寸</strong> — 图标 ≥ 16px，方形 Logo ≥ 32px，横向 Logo ≥
                  120px 宽
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-teal-500 shrink-0'>✓</span>
                <span>
                  <strong className='text-text-primary'>留白</strong> — Logo 周围保持至少 Logo 高度 1/4 的间距
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-teal-500 shrink-0'>✓</span>
                <span>
                  <strong className='text-text-primary'>默认样式</strong> — 推荐使用 spiral 设计 + default
                  变体，保持品牌一致性
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-teal-500 shrink-0'>✓</span>
                <span>
                  <strong className='text-text-primary'>单色场景</strong> — 页脚等低对比度场景使用 monochrome 版本，继承{' '}
                  <code className='text-xs font-mono bg-bg-tertiary px-1 py-0.5 rounded'>currentColor</code>
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-error shrink-0'>✗</span>
                <span>
                  <strong className='text-text-primary'>禁止修改</strong> — 不要修改 Logo 颜色、比例或结构
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-error shrink-0'>✗</span>
                <span>
                  <strong className='text-text-primary'>禁止拉伸</strong> — 保持 SVG 原始宽高比
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ── 代码块子组件 ── */
function CodeBlock({
  code,
  label,
  copiedLabel,
  onCopy,
}: {
  code: string;
  label: string;
  copiedLabel: string | null;
  onCopy: (text: string, label: string) => void;
}) {
  return (
    <div className='relative group'>
      <pre className='bg-text-primary text-bg-secondary rounded-lg p-4 text-xs font-mono overflow-x-auto leading-relaxed'>
        {code}
      </pre>
      <button
        onClick={() => onCopy(code, label)}
        className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded text-xs text-bg-secondary'
        title='复制代码'
      >
        {copiedLabel === label ? '已复制 ✓' : '复制'}
      </button>
    </div>
  );
}
