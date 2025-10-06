'use client';

import { useState } from 'react';
import { BrandIcon, BrandIconSimple, BrandWordmark } from '@/components-next/BrandIcon';

export default function StyleGuidePage() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    void globalThis.navigator?.clipboard?.writeText(text);
    setCopiedToken(label);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const brand = [
    { name: 'Primary', cls: 'bg-primary', hex: '#2563eb', cssVar: '--color-primary', text: 'text-white' },
    {
      name: 'Primary Dark',
      cls: 'bg-primary-dark',
      hex: '#1d4ed8',
      cssVar: '--color-primary-dark',
      text: 'text-white',
    },
    {
      name: 'Primary Light',
      cls: 'bg-primary-light',
      hex: '#3b82f6',
      cssVar: '--color-primary-light',
      text: 'text-white',
    },
    { name: 'Secondary', cls: 'bg-secondary', hex: '#7c3aed', cssVar: '--color-secondary', text: 'text-white' },
    { name: 'Accent', cls: 'bg-accent', hex: '#06b6d4', cssVar: '--color-accent', text: 'text-white' },
  ];

  const feedback = [
    { name: 'Success', cls: 'bg-success', hex: '#10b981', cssVar: '--color-success', text: 'text-white' },
    { name: 'Warning', cls: 'bg-warning', hex: '#f59e0b', cssVar: '--color-warning', text: 'text-white' },
    { name: 'Error', cls: 'bg-error', hex: '#ef4444', cssVar: '--color-error', text: 'text-white' },
  ];

  const teal = [
    { name: 'Teal 400', cls: 'bg-teal-400', hex: '#7eddd6', cssVar: '--color-teal-400', text: 'text-gray-900' },
    { name: 'Teal 500', cls: 'bg-teal-500', hex: '#4ecdc4', cssVar: '--color-teal-500', text: 'text-white' },
    { name: 'Teal 600', cls: 'bg-teal-600', hex: '#3ba29c', cssVar: '--color-teal-600', text: 'text-white' },
  ];

  const surfaces = [
    { name: 'BG Primary', cls: 'bg-bg-primary', hex: '#ffffff', cssVar: '--color-bg-primary', border: true },
    { name: 'BG Secondary', cls: 'bg-bg-secondary', hex: '#f8fafc', cssVar: '--color-bg-secondary', border: true },
    { name: 'BG Tertiary', cls: 'bg-bg-tertiary', hex: '#f1f5f9', cssVar: '--color-bg-tertiary', border: true },
    { name: 'BG Accent', cls: 'bg-bg-accent', hex: '#eff6ff', cssVar: '--color-bg-accent', border: true },
    { name: 'BG Warm', cls: 'bg-bg-warm', hex: '#fffcf8', cssVar: '--color-bg-warm', border: true },
  ];

  const textColors = [
    { name: 'Text Primary', cls: 'text-text-primary', hex: '#0f172a', cssVar: '--color-text-primary' },
    { name: 'Text Secondary', cls: 'text-text-secondary', hex: '#475569', cssVar: '--color-text-secondary' },
    { name: 'Text Muted', cls: 'text-text-muted', hex: '#64748b', cssVar: '--color-text-muted' },
    { name: 'Text Inverse', cls: 'text-text-inverse', hex: '#ffffff', cssVar: '--color-text-inverse' },
  ];

  const borders = [
    { name: 'Border Light', hex: '#e2e8f0', cssVar: '--color-border-light' },
    { name: 'Border Medium', hex: '#cbd5e1', cssVar: '--color-border-medium' },
    { name: 'Border Dark', hex: '#94a3b8', cssVar: '--color-border-dark' },
  ];

  const practices = [
    {
      name: 'Practices Accent',
      cls: 'bg-practices-accent',
      hex: '#06b6d4',
      cssVar: '--color-practices-accent',
      text: 'text-white',
    },
    {
      name: 'Practices Primary',
      cls: 'bg-practices-primary',
      hex: '#2563eb',
      cssVar: '--color-practices-primary',
      text: 'text-white',
    },
    {
      name: 'Practices Secondary',
      cls: 'bg-practices-secondary',
      hex: '#6366f1',
      cssVar: '--color-practices-secondary',
      text: 'text-white',
    },
  ];

  const ColorSwatch = ({
    name,
    cls,
    hex,
    cssVar,
    text = 'text-white',
  }: {
    name: string;
    cls: string;
    hex: string;
    cssVar: string;
    text?: string;
  }) => (
    <div className='flex flex-col gap-2'>
      <div
        className={`h-24 w-full rounded-lg shadow-md ${cls} ${text} flex flex-col items-center justify-center p-3 relative group`}
      >
        <span className='text-xs font-mono opacity-90'>{hex}</span>
        <button
          onClick={() => copyToClipboard(cssVar, name)}
          className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 bg-black/20 hover:bg-black/40 rounded text-xs'
          title='Copy CSS variable'
        >
          {copiedToken === name ? '✓' : '📋'}
        </button>
      </div>
      <span className='text-sm font-medium text-text-primary'>{name}</span>
      <div className='flex items-center gap-2'>
        <code className='text-xs text-text-muted font-mono flex-1'>{cls}</code>
        <button
          onClick={() => copyToClipboard(cls, `${name}-class`)}
          className='text-xs text-text-muted hover:text-text-primary transition-colors'
          title='Copy Tailwind class'
        >
          {copiedToken === `${name}-class` ? '✓' : '📋'}
        </button>
      </div>
      <div className='flex items-center gap-2'>
        <code className='text-xs text-teal-600 font-mono flex-1'>{cssVar}</code>
        <button
          onClick={() => copyToClipboard(cssVar, `${name}-var`)}
          className='text-xs text-text-muted hover:text-text-primary transition-colors'
          title='Copy CSS variable'
        >
          {copiedToken === `${name}-var` ? '✓' : '📋'}
        </button>
      </div>
    </div>
  );

  const SurfaceSwatch = ({
    name,
    cls,
    hex,
    cssVar,
    border,
  }: {
    name: string;
    cls: string;
    hex: string;
    cssVar: string;
    border?: boolean;
  }) => (
    <div className='flex flex-col gap-2'>
      <div
        className={`h-24 w-full rounded-lg ${cls} ${border ? 'border-2 border-border-medium' : ''} flex items-center justify-center relative group`}
      >
        <span className='text-xs font-mono text-text-muted'>{hex}</span>
        <button
          onClick={() => copyToClipboard(cssVar, name)}
          className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 bg-border-medium hover:bg-border-dark rounded text-xs'
          title='Copy CSS variable'
        >
          {copiedToken === name ? '✓' : '📋'}
        </button>
      </div>
      <span className='text-sm font-medium text-text-primary'>{name}</span>
      <div className='flex items-center gap-2'>
        <code className='text-xs text-text-muted font-mono flex-1'>{cls}</code>
        <button
          onClick={() => copyToClipboard(cls, `${name}-class`)}
          className='text-xs text-text-muted hover:text-text-primary transition-colors'
          title='Copy class'
        >
          {copiedToken === `${name}-class` ? '✓' : '📋'}
        </button>
      </div>
      <div className='flex items-center gap-2'>
        <code className='text-xs text-teal-600 font-mono flex-1'>{cssVar}</code>
        <button
          onClick={() => copyToClipboard(cssVar, `${name}-var`)}
          className='text-xs text-text-muted hover:text-text-primary transition-colors'
          title='Copy variable'
        >
          {copiedToken === `${name}-var` ? '✓' : '📋'}
        </button>
      </div>
    </div>
  );

  const TextSwatch = ({ name, cls, hex, cssVar }: { name: string; cls: string; hex: string; cssVar: string }) => (
    <div className='flex flex-col gap-2 bg-bg-primary rounded-lg border border-border-light p-4'>
      <p className={`text-2xl font-semibold ${cls}`}>The quick brown fox</p>
      <span className='text-sm font-medium text-text-primary'>{name}</span>
      <div className='flex items-center gap-2'>
        <code className='text-xs text-text-muted font-mono flex-1'>{cls}</code>
        <button
          onClick={() => copyToClipboard(cls, `${name}-class`)}
          className='text-xs text-text-muted hover:text-text-primary transition-colors'
          title='Copy class'
        >
          {copiedToken === `${name}-class` ? '✓' : '📋'}
        </button>
      </div>
      <div className='flex items-center gap-2'>
        <code className='text-xs text-teal-600 font-mono flex-1'>{cssVar}</code>
        <button
          onClick={() => copyToClipboard(cssVar, `${name}-var`)}
          className='text-xs text-text-muted hover:text-text-primary transition-colors'
          title='Copy variable'
        >
          {copiedToken === `${name}-var` ? '✓' : '📋'}
        </button>
      </div>
      <div className='flex items-center gap-2'>
        <span className='text-xs text-text-muted font-mono'>{hex}</span>
      </div>
    </div>
  );

  return (
    <main className='min-h-screen bg-bg-secondary text-text-primary'>
      <div className='mx-auto max-w-6xl p-8'>
        <header className='mb-8'>
          <h1 className='text-3xl font-semibold'>Design Style Guide</h1>
          <p className='text-text-secondary mt-2'>
            Token-driven live guide. All colors, radii, and shadows map to CSS variables from the design token system.
          </p>
        </header>

        {/* Brand Icon */}
        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>Brand Icon - AI Speeds</h2>
          <div className='bg-bg-primary rounded-xl border border-border-light p-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Default variant */}
              <div className='flex flex-col items-center gap-4'>
                <div className='bg-bg-secondary rounded-lg p-6 border border-border-light'>
                  <BrandIcon size={64} variant='default' />
                </div>
                <div className='text-center'>
                  <p className='text-sm font-medium text-text-primary'>Default</p>
                  <p className='text-xs text-text-muted'>Full color with AI nodes</p>
                </div>
              </div>

              {/* Gradient variant */}
              <div className='flex flex-col items-center gap-4'>
                <div className='bg-bg-secondary rounded-lg p-6 border border-border-light'>
                  <BrandIcon size={64} variant='gradient' />
                </div>
                <div className='text-center'>
                  <p className='text-sm font-medium text-text-primary'>Gradient</p>
                  <p className='text-xs text-text-muted'>Teal to blue gradient</p>
                </div>
              </div>

              {/* Monochrome variant */}
              <div className='flex flex-col items-center gap-4'>
                <div className='bg-bg-secondary rounded-lg p-6 border border-border-light'>
                  <BrandIcon size={64} variant='monochrome' className='text-text-primary' />
                </div>
                <div className='text-center'>
                  <p className='text-sm font-medium text-text-primary'>Monochrome</p>
                  <p className='text-xs text-text-muted'>Single color variant</p>
                </div>
              </div>

              {/* Simple/Favicon */}
              <div className='flex flex-col items-center gap-4'>
                <div className='bg-bg-secondary rounded-lg p-6 border border-border-light'>
                  <BrandIconSimple size={48} />
                </div>
                <div className='text-center'>
                  <p className='text-sm font-medium text-text-primary'>Simple</p>
                  <p className='text-xs text-text-muted'>For favicon (16x16)</p>
                </div>
              </div>

              {/* Wordmark */}
              <div className='flex flex-col items-center gap-4 md:col-span-2'>
                <div className='bg-bg-secondary rounded-lg p-6 border border-border-light w-full flex items-center justify-center'>
                  <BrandWordmark size={180} />
                </div>
                <div className='text-center'>
                  <p className='text-sm font-medium text-text-primary'>Wordmark</p>
                  <p className='text-xs text-text-muted'>Icon + text for headers</p>
                </div>
              </div>
            </div>

            {/* Design concept */}
            <div className='mt-8 pt-6 border-t border-border-light'>
              <h3 className='text-sm font-semibold text-text-primary mb-3'>Design Concept</h3>
              <ul className='space-y-2 text-sm text-text-secondary'>
                <li className='flex items-start gap-2'>
                  <span className='text-accent'>⚡</span>
                  <span>
                    <strong className='text-text-primary'>Lightning bolt:</strong> Represents speed and acceleration
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-accent'>🔗</span>
                  <span>
                    <strong className='text-text-primary'>Circuit nodes:</strong> AI and neural network connections
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-accent'>🎨</span>
                  <span>
                    <strong className='text-text-primary'>Teal accent (#4ECDC4):</strong> Modern, tech-forward feel
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-accent'>✨</span>
                  <span>
                    <strong className='text-text-primary'>Minimal design:</strong> Works at all sizes from 16px to large
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Color Swatches */}
        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>Brand Colors</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
            {brand.map(c => (
              <ColorSwatch key={c.name} {...c} />
            ))}
          </div>
        </section>

        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>Feedback Colors</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
            {feedback.map(c => (
              <ColorSwatch key={c.name} {...c} />
            ))}
          </div>
        </section>

        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>Accent (Teal) Scale</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
            {teal.map(c => (
              <ColorSwatch key={c.name} {...c} />
            ))}
          </div>
        </section>

        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>Surface Colors</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
            {surfaces.map(c => (
              <SurfaceSwatch key={c.name} {...c} />
            ))}
          </div>
        </section>

        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>Text Colors</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {textColors.map(c => (
              <TextSwatch key={c.name} {...c} />
            ))}
          </div>
        </section>

        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>Border Colors</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
            {borders.map(b => (
              <div key={b.name} className='flex flex-col gap-2'>
                <div
                  className='h-24 w-full rounded-lg bg-bg-primary border-4 flex items-center justify-center'
                  style={{ borderColor: b.hex }}
                >
                  <span className='text-xs font-mono text-text-muted'>{b.hex}</span>
                </div>
                <span className='text-sm font-medium text-text-primary'>{b.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>Best Practices Page Colors</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
            {practices.map(c => (
              <ColorSwatch key={c.name} {...c} />
            ))}
          </div>
        </section>

        {/* Typography & Example Components */}
        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>Typography</h2>
          <div className='space-y-2 bg-bg-primary rounded-lg border border-border-light p-4'>
            <h1 className='text-4xl font-bold'>Display</h1>
            <h2 className='text-3xl font-bold'>Headline</h2>
            <h3 className='text-2xl font-semibold'>Page Title</h3>
            <h4 className='text-xl font-semibold'>Section Header</h4>
            <p className='text-base'>Body default</p>
            <p className='text-sm text-text-secondary'>Body small</p>
            <p className='text-xs text-text-muted'>Caption</p>
          </div>
        </section>

        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>Shadows</h2>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
            <div className='flex flex-col gap-2'>
              <div className='h-24 w-full rounded-lg bg-bg-primary shadow-sm flex items-center justify-center'>
                <span className='text-xs font-mono text-text-muted'>shadow-sm</span>
              </div>
              <span className='text-sm font-medium text-text-primary'>Small</span>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='h-24 w-full rounded-lg bg-bg-primary shadow-md flex items-center justify-center'>
                <span className='text-xs font-mono text-text-muted'>shadow-md</span>
              </div>
              <span className='text-sm font-medium text-text-primary'>Medium</span>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='h-24 w-full rounded-lg bg-bg-primary shadow-lg flex items-center justify-center'>
                <span className='text-xs font-mono text-text-muted'>shadow-lg</span>
              </div>
              <span className='text-sm font-medium text-text-primary'>Large</span>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='h-24 w-full rounded-lg bg-bg-primary shadow-xl flex items-center justify-center'>
                <span className='text-xs font-mono text-text-muted'>shadow-xl</span>
              </div>
              <span className='text-sm font-medium text-text-primary'>Extra Large</span>
            </div>
          </div>
        </section>

        <section className='mb-10'>
          <h2 className='text-xl font-semibold mb-4'>Border Radius</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6'>
            {['sm', 'md', 'lg', 'xl', '2xl', '3xl'].map(size => (
              <div key={size} className='flex flex-col gap-2'>
                <div className={`h-20 w-full bg-primary rounded-${size} flex items-center justify-center`}>
                  <span className='text-xs font-mono text-white'>rounded-{size}</span>
                </div>
                <span className='text-sm font-medium text-text-primary'>{size}</span>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-16'>
          <h2 className='text-xl font-semibold mb-6'>Component Examples</h2>

          {/* Buttons */}
          <div className='mb-8'>
            <h3 className='text-lg font-medium mb-4 text-text-secondary'>Buttons</h3>
            <div className='flex flex-wrap gap-4'>
              <button className='px-6 py-3 rounded-xl text-white bg-primary hover:bg-primary-dark transition-colors shadow-md font-medium'>
                Primary Button
              </button>
              <button className='px-6 py-3 rounded-xl text-white bg-secondary hover:opacity-90 transition-opacity shadow-md font-medium'>
                Secondary Button
              </button>
              <button className='px-6 py-3 rounded-xl text-white bg-accent hover:bg-teal-600 transition-colors shadow-md font-medium'>
                Accent Button
              </button>
              <button className='px-6 py-3 rounded-xl text-white bg-success hover:opacity-90 transition-opacity shadow-md font-medium'>
                Success
              </button>
              <button className='px-6 py-3 rounded-xl text-white bg-warning hover:opacity-90 transition-opacity shadow-md font-medium'>
                Warning
              </button>
              <button className='px-6 py-3 rounded-xl text-white bg-error hover:opacity-90 transition-opacity shadow-md font-medium'>
                Error
              </button>
              <button className='px-6 py-3 rounded-xl text-text-primary bg-bg-primary border-2 border-primary hover:bg-bg-tertiary transition-colors font-medium'>
                Outline
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className='mb-8'>
            <h3 className='text-lg font-medium mb-4 text-text-secondary'>Cards</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {/* Card 1 - Primary */}
              <div className='bg-bg-primary rounded-2xl shadow-lg border border-border-light overflow-hidden hover:shadow-xl transition-shadow'>
                <div className='h-32 bg-gradient-to-br from-primary to-primary-dark'></div>
                <div className='p-4 flex flex-col gap-3'>
                  <div className='flex items-start justify-between gap-2'>
                    <h3 className='text-base font-semibold'>AI Content Tool</h3>
                    <span className='px-2 py-1 rounded-md text-xs text-white bg-primary'>AI</span>
                  </div>
                  <p className='text-sm text-text-secondary'>
                    Create amazing content with AI assistance using advanced models.
                  </p>
                  <button className='mt-2 w-full px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors'>
                    Try Now
                  </button>
                </div>
              </div>

              {/* Card 2 - Accent */}
              <div className='bg-bg-primary rounded-2xl shadow-lg border border-border-light overflow-hidden hover:shadow-xl transition-shadow'>
                <div className='h-32 bg-gradient-to-br from-teal-500 to-teal-600'></div>
                <div className='p-4 flex flex-col gap-3'>
                  <div className='flex items-start justify-between gap-2'>
                    <h3 className='text-base font-semibold'>Design System</h3>
                    <span className='px-2 py-1 rounded-md text-xs text-white bg-accent'>New</span>
                  </div>
                  <p className='text-sm text-text-secondary'>
                    Token-driven design system with comprehensive components.
                  </p>
                  <button className='mt-2 w-full px-4 py-2 rounded-lg bg-accent text-white hover:bg-teal-600 transition-colors'>
                    Explore
                  </button>
                </div>
              </div>

              {/* Card 3 - Secondary */}
              <div className='bg-bg-primary rounded-2xl shadow-lg border border-border-light overflow-hidden hover:shadow-xl transition-shadow'>
                <div className='h-32 bg-gradient-to-br from-secondary to-purple-700'></div>
                <div className='p-4 flex flex-col gap-3'>
                  <div className='flex items-start justify-between gap-2'>
                    <h3 className='text-base font-semibold'>Analytics Dashboard</h3>
                    <span className='px-2 py-1 rounded-md text-xs text-white bg-secondary'>Pro</span>
                  </div>
                  <p className='text-sm text-text-secondary'>Track performance metrics and insights in real-time.</p>
                  <button className='mt-2 w-full px-4 py-2 rounded-lg bg-secondary text-white hover:opacity-90 transition-opacity'>
                    View Stats
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Form Elements */}
          <div>
            <h3 className='text-lg font-medium mb-4 text-text-secondary'>Form Elements</h3>
            <div className='bg-bg-primary rounded-xl border border-border-light p-6 space-y-4'>
              <div>
                <label className='block text-sm font-medium text-text-primary mb-2'>Input Field</label>
                <input
                  type='text'
                  placeholder='Enter text...'
                  className='w-full px-4 py-3 rounded-lg border border-border-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-text-primary mb-2'>Textarea</label>
                <textarea
                  placeholder='Enter description...'
                  rows={3}
                  className='w-full px-4 py-3 rounded-lg border border-border-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none'
                />
              </div>
              <div className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  id='check1'
                  className='w-5 h-5 rounded border-border-medium text-primary focus:ring-2 focus:ring-primary/20'
                />
                <label htmlFor='check1' className='text-sm text-text-primary'>
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
