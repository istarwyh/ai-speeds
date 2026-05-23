'use client';

import { useEffect, useState } from 'react';
import { BrandLogo } from '@/components/brand';
import { AiWireframeSection } from '@/components/features/ai-wireframe/AiWireframeSection';
import { GetStartedSection } from '@/components/features/get-started/GetStartedSection';
import { DEFAULT_SECTION_ID, SECTION_IDS, type SectionId } from '@/config/navigation';
import { UI_TEXTS } from '@/config/ui-texts';

const navItems: Array<{ label: string; section: SectionId }> = [
  { label: UI_TEXTS.NAVIGATION.HOME, section: 'home' },
  { label: UI_TEXTS.NAVIGATION.GET_STARTED, section: 'get-started' },
  { label: UI_TEXTS.NAVIGATION.AI_WIREFRAME, section: 'ai-wireframe' },
];

const utilityLinks = [
  { label: UI_TEXTS.NAVIGATION.WHITEBOARD, href: '/whiteboard' },
  { label: UI_TEXTS.NAVIGATION.PLAYGROUND, href: '/playground' },
];

function isSectionId(value: string): value is SectionId {
  return SECTION_IDS.some(section => section === value);
}

function readHashSection(): SectionId {
  const hashSection = window.location.hash.slice(1);
  return isSectionId(hashSection) ? hashSection : DEFAULT_SECTION_ID;
}

export function HomePageWithNav() {
  const [activeSection, setActiveSection] = useState<SectionId>(DEFAULT_SECTION_ID);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveSection(readHashSection());

    const onHashChange = () => setActiveSection(readHashSection());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const selectSection = (section: SectionId) => {
    setActiveSection(section);
    setMenuOpen(false);

    if (section === DEFAULT_SECTION_ID) {
      window.history.pushState(null, '', '/');
      return;
    }

    window.history.pushState(null, '', `/home#${section}`);
  };

  return (
    <div className='min-h-screen bg-bg-secondary text-text-primary'>
      <button
        type='button'
        aria-controls='homepage-menu'
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}
        className='fixed right-4 top-4 z-40 flex items-center gap-2 rounded-full border border-border-light/80 bg-bg-primary/85 px-4 py-2 text-sm font-semibold text-text-primary shadow-lg shadow-slate-950/10 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-primary hover:bg-bg-primary sm:right-6 sm:top-6'
      >
        <span className='h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_var(--color-primary)]' />
        菜单
      </button>

      {menuOpen && (
        <div className='fixed inset-0 z-50 bg-text-primary/10 p-4 backdrop-blur-sm' onClick={() => setMenuOpen(false)}>
          <div
            id='homepage-menu'
            role='dialog'
            aria-modal='true'
            className='ml-auto mt-14 w-full max-w-sm rounded-3xl border border-border-light bg-bg-primary/95 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:mr-2 sm:mt-2'
            onClick={event => event.stopPropagation()}
          >
            <div className='flex items-center justify-between gap-4'>
              <BrandLogo size='medium' />
              <button
                type='button'
                onClick={() => setMenuOpen(false)}
                className='rounded-full border border-border-light px-3 py-2 text-sm font-semibold text-text-secondary transition hover:border-primary hover:text-text-primary'
              >
                关闭
              </button>
            </div>
            <div className='mt-6 grid gap-2'>
              {navItems.map(item => (
                <button
                  key={item.section}
                  type='button'
                  onClick={() => selectSection(item.section)}
                  className={`rounded-2xl px-4 py-3 text-left font-semibold transition ${
                    activeSection === item.section
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-bg-secondary text-text-primary hover:bg-bg-tertiary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {utilityLinks.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className='rounded-2xl bg-bg-secondary px-4 py-3 font-semibold text-text-primary transition hover:bg-bg-tertiary'
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className='min-h-screen'>
        {activeSection === 'home' ? (
          <Cc4pmHomepageFrame />
        ) : activeSection === 'get-started' ? (
          <GetStartedSection />
        ) : (
          <AiWireframeSection />
        )}
      </main>
    </div>
  );
}

function Cc4pmHomepageFrame() {
  return (
    <iframe
      src='/static/cc4pm-homepage.html'
      title='cc4pm 首页'
      className='block h-[100dvh] w-full border-0 bg-bg-primary'
    />
  );
}
