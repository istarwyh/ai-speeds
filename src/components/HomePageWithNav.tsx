'use client';

import { useEffect, useState } from 'react';
import { BrandLogo } from '@/components/brand';
import { GetStartedSection } from '@/components/features/get-started/GetStartedSection';
import { DEFAULT_SECTION_ID, type SectionId } from '@/config/navigation';
import { UI_TEXTS } from '@/config/ui-texts';

const sidebarStorageKey = 'homepage-sidebar-collapsed';

const navItems: Array<{ label: string; section: SectionId }> = [
  { label: UI_TEXTS.NAVIGATION.HOME, section: 'home' },
  { label: UI_TEXTS.NAVIGATION.GET_STARTED, section: 'get-started' },
];

function readHashSection(): SectionId {
  return window.location.hash.slice(1) === 'get-started' ? 'get-started' : DEFAULT_SECTION_ID;
}

export function HomePageWithNav() {
  const [activeSection, setActiveSection] = useState<SectionId>(DEFAULT_SECTION_ID);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setActiveSection(readHashSection());
    const stored = window.localStorage.getItem(sidebarStorageKey);
    setSidebarCollapsed(stored === null ? true : stored === 'true');

    const onHashChange = () => setActiveSection(readHashSection());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const selectSection = (section: SectionId) => {
    setActiveSection(section);
    setMobileOpen(false);

    if (section === DEFAULT_SECTION_ID) {
      window.history.pushState(null, '', '/');
      return;
    }

    window.history.pushState(null, '', `/home#${section}`);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(current => {
      const next = !current;
      window.localStorage.setItem(sidebarStorageKey, String(next));
      return next;
    });
  };

  return (
    <div className='min-h-screen bg-bg-secondary text-text-primary'>
      <button
        type='button'
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(true)}
        className='fixed left-4 top-4 z-40 rounded-2xl border border-border-light bg-bg-primary px-4 py-3 text-sm font-semibold text-text-primary shadow-lg md:hidden'
      >
        菜单
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-30 hidden flex-col border-r border-border-light bg-bg-primary p-4 shadow-xl backdrop-blur transition-all md:flex ${
          sidebarCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div className='flex items-center justify-between gap-3'>
          <button
            type='button'
            onClick={() => selectSection('home')}
            className='min-w-0 rounded-2xl p-2 text-left transition hover:bg-bg-tertiary'
          >
            <BrandLogo size='medium' showText={!sidebarCollapsed} />
          </button>
          {!sidebarCollapsed && (
            <button
              type='button'
              onClick={toggleSidebar}
              className='rounded-xl border border-border-light px-3 py-2 text-xs font-semibold text-text-secondary transition hover:border-primary hover:text-text-primary'
              aria-label='收起侧边栏'
            >
              ←
            </button>
          )}
        </div>

        {sidebarCollapsed && (
          <button
            type='button'
            onClick={toggleSidebar}
            className='mt-4 rounded-xl border border-border-light px-3 py-2 text-xs font-semibold text-text-secondary transition hover:border-primary hover:text-text-primary'
            aria-label='展开侧边栏'
          >
            →
          </button>
        )}

        <nav className='mt-8 flex flex-col gap-2'>
          {navItems.map(item => (
            <button
              key={item.section}
              type='button'
              onClick={() => selectSection(item.section)}
              className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                activeSection === item.section
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary'
              } ${sidebarCollapsed ? 'text-center' : ''}`}
            >
              {sidebarCollapsed ? item.label.slice(0, 2) : item.label}
            </button>
          ))}
          <a
            href='/whiteboard'
            className={`rounded-2xl px-4 py-3 text-sm font-semibold text-text-secondary transition hover:bg-bg-tertiary hover:text-text-primary ${sidebarCollapsed ? 'text-center' : ''}`}
          >
            {sidebarCollapsed ? '白板' : UI_TEXTS.NAVIGATION.WHITEBOARD}
          </a>
          <a
            href='/playground'
            className={`rounded-2xl px-4 py-3 text-sm font-semibold text-text-secondary transition hover:bg-bg-tertiary hover:text-text-primary ${sidebarCollapsed ? 'text-center' : ''}`}
          >
            {sidebarCollapsed ? '测试' : UI_TEXTS.NAVIGATION.PLAYGROUND}
          </a>
        </nav>
      </aside>

      {mobileOpen && (
        <div
          className='fixed inset-0 z-50 bg-black/40 p-4 backdrop-blur md:hidden'
          onClick={() => setMobileOpen(false)}
        >
          <div
            className='rounded-3xl border border-border-light bg-bg-primary p-4 shadow-xl'
            onClick={event => event.stopPropagation()}
          >
            <div className='flex items-center justify-between gap-4'>
              <BrandLogo size='medium' />
              <button
                type='button'
                onClick={() => setMobileOpen(false)}
                className='rounded-xl border border-border-light px-3 py-2 text-sm font-semibold text-text-secondary'
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
                  className='rounded-2xl bg-bg-secondary px-4 py-3 text-left font-semibold text-text-primary'
                >
                  {item.label}
                </button>
              ))}
              <a
                href='/whiteboard'
                onClick={() => setMobileOpen(false)}
                className='rounded-2xl bg-bg-secondary px-4 py-3 font-semibold text-text-primary'
              >
                {UI_TEXTS.NAVIGATION.WHITEBOARD}
              </a>
              <a
                href='/playground'
                onClick={() => setMobileOpen(false)}
                className='rounded-2xl bg-bg-secondary px-4 py-3 font-semibold text-text-primary'
              >
                {UI_TEXTS.NAVIGATION.PLAYGROUND}
              </a>
            </div>
          </div>
        </div>
      )}

      <main className={`transition-all ${sidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}`}>
        {activeSection === 'home' ? <Cc4pmHomepageFrame /> : <GetStartedSection />}
      </main>
    </div>
  );
}

function Cc4pmHomepageFrame() {
  return (
    <iframe src='/static/cc4pm-homepage' title='cc4pm 首页' className='block h-screen w-full border-0 bg-bg-primary' />
  );
}
