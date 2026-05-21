'use client';

import { useState, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import { BrandIcon, BrandIconSimple, BrandWordmark, BRAND_COLORS } from '@/components/brand';

const BRAND_ASSETS_BASE = '/brand';

const ASSET_FILES = [
  {
    name: 'ai-speeds-logo.svg',
    label: '标准标识',
    desc: '主视觉场景使用，适合官网、封面和介绍页。',
  },
  {
    name: 'ai-speeds-logo-horizontal.svg',
    label: '横向标识',
    desc: '图标加文字，适合页眉、导航栏和合作展示。',
  },
  {
    name: 'ai-speeds-icon.svg',
    label: '纯图标',
    desc: '适合 favicon、按钮、小尺寸入口。',
  },
  {
    name: 'ai-speeds-monochrome.svg',
    label: '单色版本',
    desc: '继承 currentColor，适合页脚和低调露出。',
  },
] as const;

const CODE_SNIPPETS = {
  imgTag: `<!-- 直接引用 SVG 文件 -->
<img
  src="https://aispeeds.me/brand/ai-speeds-logo.svg"
  alt="AI Speeds"
  width="200"
/>

<!-- 横向标识 -->
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
  brandKit: `<!-- 1. 引入品牌脚本 -->
<script src="https://aispeeds.me/brand/brand-kit.js"></script>

<!-- 2. 放置容器 -->
<div id="ai-speeds-logo"></div>

<!-- 3. 插入标识 -->
<script>
  AISpeedsBrand.insertLogo('#ai-speeds-logo', 'square', {
    size: 120,
    link: true,
    linkUrl: 'https://aispeeds.me'
  });
</script>`,
  inlineSvg: `<!-- 获取 SVG 后内联使用 -->
<script src="https://aispeeds.me/brand/brand-kit.js"></script>
<script>
  const svg = AISpeedsBrand.getLogo('square', { size: 100 });
  document.getElementById('logo').innerHTML = svg;
</script>`,
  reactImport: `import { BrandLogo, BrandIcon, BRAND_COLORS } from '@/components/brand';

<BrandLogo size="medium" />
<BrandIcon size={24} design="spiral" />

<div style={{ color: BRAND_COLORS.primary }}>AI Speeds</div>`,
} as const;

const displayFont: CSSProperties = {
  fontFamily: ['Songti SC', 'Noto Serif CJK SC', 'Source Han Serif SC', 'serif'].join(', '),
};

const brandColors = [
  { name: '路径青', hex: BRAND_COLORS.primary, usage: '路径、强调线条', text: 'text-slate-950' },
  { name: '山峰蓝', hex: BRAND_COLORS.secondary, usage: '结构、信任感', text: 'text-white' },
  { name: '高光青', hex: BRAND_COLORS.accent, usage: '峰顶、亮点', text: 'text-slate-950' },
  { name: '深蓝灰', hex: BRAND_COLORS.dark, usage: '深色背景', text: 'text-white' },
  { name: '浅蓝灰', hex: BRAND_COLORS.light, usage: '浅色底板', text: 'text-slate-950' },
] as const;

const rules = [
  { mark: '✓', title: '最小尺寸', text: '图标不小于 16px，方形标识不小于 32px，横向标识不小于 120px 宽。' },
  { mark: '✓', title: '保留留白', text: '标识周围至少保留自身高度 1/4 的安全距离。' },
  { mark: '✓', title: '优先默认款', text: '常规场景优先使用 spiral 设计和 default 变体。' },
  { mark: '×', title: '不要变形', text: '不要拉伸、压缩或改动 SVG 原始比例。' },
  { mark: '×', title: '不要重绘', text: '不要修改标识结构、路径关系或品牌配色。' },
] as const;

export default function BrandPage() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    void globalThis.navigator?.clipboard?.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2000);
  };

  return (
    <main className='relative min-h-screen overflow-hidden bg-[#f7f0e6] px-4 py-10 text-slate-950 sm:px-6 lg:px-10'>
      <div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute left-[-12rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#e57a5a]/20 blur-3xl' />
        <div className='absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-cyan-300/25 blur-3xl' />
        <div className='absolute bottom-[-14rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-amber-200/30 blur-3xl' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.09)_1px,transparent_0)] bg-[length:28px_28px] opacity-40' />
      </div>

      <div className='relative mx-auto max-w-7xl'>
        <header className='grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-stretch'>
          <div className='rounded-[2.5rem] border border-white/70 bg-white/70 p-6 shadow-2xl shadow-slate-900/5 backdrop-blur sm:p-8 lg:p-10'>
            <div className='mb-8 flex items-center gap-3'>
              <Link
                href='/'
                className='flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-3 py-2 text-sm font-black text-slate-700 transition hover:border-[#e57a5a] hover:text-slate-950'
              >
                <BrandIcon size={22} />
                AI Speeds
              </Link>
              <span className='text-sm font-semibold text-slate-400'>品牌套件</span>
            </div>
            <p className='text-xs font-black tracking-[0.32em] text-[#d4614a]'>品牌套件</p>
            <h1
              className='mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-6xl'
              style={displayFont}
            >
              一套可复制、可下载、可嵌入的品牌资产。
            </h1>
            <p className='mt-5 max-w-2xl text-lg leading-8 text-slate-600'>
              这里放 AI Speeds 的标识、品牌色、引用代码和使用规范。拿走即可用，少踩样式坑。
            </p>
          </div>

          <div className='relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8'>
            <div className='absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/25 blur-2xl' />
            <div className='absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-[#e57a5a]/30 blur-2xl' />
            <div className='relative'>
              <p className='text-xs font-black uppercase tracking-[0.32em] text-[#e57a5a]'>核心标识</p>
              <div className='mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-8'>
                <div className='flex justify-center'>
                  <BrandIcon size={96} variant='gradient' />
                </div>
                <div className='mt-8 flex justify-center rounded-3xl bg-white p-5'>
                  <BrandWordmark size={170} />
                </div>
              </div>
              <p className='mt-6 text-sm leading-7 text-white/65'>A 是山峰，S 是攀登路径，表达用 AI 更快抵达目标。</p>
            </div>
          </div>
        </header>

        <div className='mt-8 grid items-start gap-6 lg:grid-cols-[0.92fr_1.08fr]'>
          <div className='space-y-6'>
            <SectionCard eyebrow='预览' title='标识形态'>
              <div className='grid gap-4 sm:grid-cols-2'>
                <LogoPreview title='标准' desc='主视觉和介绍页'>
                  <BrandIcon size={72} variant='default' />
                </LogoPreview>
                <LogoPreview title='渐变' desc='更强视觉强调'>
                  <BrandIcon size={72} variant='gradient' />
                </LogoPreview>
                <LogoPreview title='单色' desc='适合低调露出'>
                  <BrandIcon size={72} variant='monochrome' className='text-slate-950' />
                </LogoPreview>
                <LogoPreview title='小图标' desc='favicon 与按钮'>
                  <BrandIconSimple size={56} />
                </LogoPreview>
              </div>
              <div className='mt-4 rounded-3xl border border-slate-200 bg-white p-6'>
                <div className='flex items-center justify-center'>
                  <BrandWordmark size={200} />
                </div>
                <p className='mt-4 text-center text-sm font-semibold text-slate-500'>
                  横向组合适合导航栏、页脚和合作露出。
                </p>
              </div>
            </SectionCard>

            <SectionCard eyebrow='尺寸' title='常用规格'>
              <div className='flex flex-wrap items-end justify-center gap-7 rounded-3xl border border-slate-200 bg-white p-6'>
                {[16, 24, 32, 48, 64].map(size => (
                  <div key={size} className='flex flex-col items-center gap-3'>
                    <BrandIcon size={size} variant='default' />
                    <span className='text-xs font-bold text-slate-500'>{size}px</span>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard eyebrow='规范' title='使用规则'>
              <div className='space-y-3'>
                {rules.map(rule => (
                  <div key={rule.title} className='flex gap-3 rounded-3xl border border-slate-200 bg-white p-4'>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-black ${
                        rule.mark === '✓' ? 'bg-slate-950 text-white' : 'bg-[#e57a5a] text-slate-950'
                      }`}
                    >
                      {rule.mark}
                    </span>
                    <div>
                      <p className='text-sm font-black text-slate-950'>{rule.title}</p>
                      <p className='mt-1 text-sm leading-6 text-slate-600'>{rule.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          <div className='space-y-6'>
            <SectionCard eyebrow='下载' title='品牌资源'>
              <p className='mb-5 text-sm leading-7 text-slate-600'>
                所有 SVG 都托管在{' '}
                <code className='rounded-full bg-slate-100 px-2 py-1 text-xs font-bold'>{BRAND_ASSETS_BASE}/</code>{' '}
                目录，可直接引用或下载。
              </p>
              <div className='grid gap-4 sm:grid-cols-2'>
                {ASSET_FILES.map(asset => (
                  <AssetCard key={asset.name} asset={asset} copiedLabel={copiedLabel} onCopy={copyToClipboard} />
                ))}
              </div>
            </SectionCard>

            <SectionCard eyebrow='色彩' title='品牌色'>
              <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-5'>
                {brandColors.map(color => (
                  <button
                    key={color.name}
                    type='button'
                    onClick={() => copyToClipboard(color.hex, color.name)}
                    className='group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl'
                  >
                    <div
                      className={`flex h-28 flex-col justify-end p-4 ${color.text}`}
                      style={{ backgroundColor: color.hex }}
                    >
                      <span className='text-xs font-black'>{copiedLabel === color.name ? '已复制' : color.hex}</span>
                    </div>
                    <div className='p-4'>
                      <p className='text-sm font-black text-slate-950'>{color.name}</p>
                      <p className='mt-1 text-xs leading-5 text-slate-500'>{color.usage}</p>
                    </div>
                  </button>
                ))}
              </div>
            </SectionCard>

            <SectionCard eyebrow='接入' title='外部网站集成'>
              <div className='space-y-4'>
                <IntegrationBlock index='1' title='直接引用 SVG' desc='最简单，零依赖。适合静态页、文档和外部落地页。'>
                  <CodeBlock
                    code={CODE_SNIPPETS.imgTag}
                    label='img-tag'
                    copiedLabel={copiedLabel}
                    onCopy={copyToClipboard}
                  />
                </IntegrationBlock>
                <IntegrationBlock index='2' title='JavaScript 品牌脚本' desc='适合需要动态插入标识的网站。'>
                  <CodeBlock
                    code={CODE_SNIPPETS.brandKit}
                    label='brand-kit'
                    copiedLabel={copiedLabel}
                    onCopy={copyToClipboard}
                  />
                </IntegrationBlock>
                <IntegrationBlock index='3' title='内联 SVG' desc='少一次请求，可直接控制 DOM。'>
                  <CodeBlock
                    code={CODE_SNIPPETS.inlineSvg}
                    label='inline-svg'
                    copiedLabel={copiedLabel}
                    onCopy={copyToClipboard}
                  />
                </IntegrationBlock>
              </div>
            </SectionCard>

            <SectionCard eyebrow='内部' title='React 项目使用'>
              <p className='mb-4 text-sm leading-7 text-slate-600'>项目内部统一从 @/components/brand 导入品牌组件。</p>
              <CodeBlock
                code={CODE_SNIPPETS.reactImport}
                label='react-import'
                copiedLabel={copiedLabel}
                onCopy={copyToClipboard}
              />
            </SectionCard>
          </div>
        </div>
      </div>
    </main>
  );
}

function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className='group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-xl shadow-slate-900/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10'>
      <div className='absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#e57a5a]/10 transition group-hover:scale-125' />
      <div className='relative'>
        <p className='text-xs font-black uppercase tracking-[0.32em] text-[#d4614a]'>{eyebrow}</p>
        <h2 className='mt-3 text-2xl font-black tracking-tight text-slate-950' style={displayFont}>
          {title}
        </h2>
        <div className='mt-5'>{children}</div>
      </div>
    </section>
  );
}

function LogoPreview({ title, desc, children }: { title: string; desc: string; children: ReactNode }) {
  return (
    <div className='rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm'>
      <div className='flex h-28 items-center justify-center rounded-3xl bg-slate-50'>{children}</div>
      <p className='mt-4 text-sm font-black text-slate-950'>{title}</p>
      <p className='mt-1 text-xs text-slate-500'>{desc}</p>
    </div>
  );
}

function AssetCard({
  asset,
  copiedLabel,
  onCopy,
}: {
  asset: (typeof ASSET_FILES)[number];
  copiedLabel: string | null;
  onCopy: (text: string, label: string) => void;
}) {
  const assetPath = `${BRAND_ASSETS_BASE}/${asset.name}`;

  return (
    <div className='rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl'>
      <div className='flex h-28 items-center justify-center rounded-3xl bg-slate-50 p-4'>
        <img src={assetPath} alt={asset.label} className='max-h-16 max-w-full' />
      </div>
      <p className='mt-4 text-sm font-black text-slate-950'>{asset.label}</p>
      <p className='mt-1 min-h-10 text-xs leading-5 text-slate-500'>{asset.desc}</p>
      <button
        type='button'
        onClick={() => onCopy(assetPath, asset.name)}
        className='mt-4 flex w-full items-center justify-between rounded-full bg-slate-950 px-4 py-2 text-left text-xs font-bold text-white transition hover:bg-[#d4614a]'
      >
        <span className='truncate'>{asset.name}</span>
        <span className='shrink-0'>{copiedLabel === asset.name ? '已复制' : '复制'}</span>
      </button>
    </div>
  );
}

function IntegrationBlock({
  index,
  title,
  desc,
  children,
}: {
  index: string;
  title: string;
  desc: string;
  children: ReactNode;
}) {
  return (
    <div className='rounded-3xl border border-slate-200 bg-white p-4'>
      <div className='flex items-start gap-3'>
        <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white'>
          {index}
        </span>
        <div>
          <h3 className='text-sm font-black text-slate-950'>{title}</h3>
          <p className='mt-1 text-sm leading-6 text-slate-600'>{desc}</p>
        </div>
      </div>
      <div className='mt-4'>{children}</div>
    </div>
  );
}

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
    <div className='overflow-hidden rounded-3xl border border-slate-900/10 bg-slate-950 shadow-2xl shadow-slate-950/10'>
      <div className='flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-white/60'>
        <div className='flex items-center gap-2'>
          <span className='h-2.5 w-2.5 rounded-full bg-[#ff6b57]' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#f6c85f]' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#46d07d]' />
          <span className='ml-2 font-semibold tracking-wide'>代码</span>
        </div>
        <button
          type='button'
          onClick={() => onCopy(code, label)}
          className='rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:border-white/40 hover:bg-white/15 hover:text-white'
        >
          {copiedLabel === label ? '已复制' : '复制'}
        </button>
      </div>
      <pre className='overflow-x-auto whitespace-pre-wrap p-5 text-sm leading-7 text-cyan-100'>
        <code>{code}</code>
      </pre>
    </div>
  );
}
