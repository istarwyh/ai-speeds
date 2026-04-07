'use client';

import { useEffect, useState } from 'react';
import { LegacyPageWrapper } from '@/components/LegacyPageWrapper';
import { homepageHtml } from '@/legacy/scripts/generated/homepageHtml';
import { navigationComponent } from '@/legacy';
import { navigationStyles } from '@/legacy/styles/navigationStyles';
import { designTokens } from '@/legacy/styles/designTokens';
import { baseStyles } from '@/legacy/styles/baseStyles';

/**
 * Home 页面 - 根据 hash 决定渲染方式
 * - 无 hash: 显示 iframe 嵌入的首页
 * - 有 hash: 显示 LegacyPageWrapper 的多 section 页面
 */
export default function HomePage() {
  const [hasHash, setHasHash] = useState(false);

  useEffect(() => {
    // 检查是否有 hash
    const checkHash = () => {
      setHasHash(!!window.location.hash);
    };
    checkHash();

    // 监听 hash 变化
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // 有 hash 时渲染 LegacyPageWrapper
  if (hasHash) {
    return <LegacyPageWrapper homepageHtml={homepageHtml} />;
  }

  // 无 hash 时渲染 iframe 首页
  return <HomePageIframe />;
}

/**
 * iframe 首页组件
 */
function HomePageIframe() {
  useEffect(() => {
    const styleId = 'nav-styles';
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      ${designTokens}
      ${baseStyles}
      ${navigationStyles}
      .homepage-main {
        margin-left: var(--sidebar-width, 180px);
        transition: margin-left 0.3s ease;
      }
      body.sidebar-collapsed .homepage-main {
        margin-left: var(--sidebar-collapsed-width, 60px);
      }
      @media (max-width: 768px) {
        .homepage-root {
          flex-direction: column;
        }
        .homepage-main {
          margin-left: 0;
          margin-top: 0;
        }
      }
    `;
    document.head.appendChild(style);

    const initNav = () => {
      const collapseToggle = document.querySelector('.nav-collapse-toggle');
      const nav = document.querySelector('.main-nav');
      if (!nav) return;

      if (collapseToggle) {
        const collapseToggleEl = collapseToggle as HTMLElement;
        if (!collapseToggleEl.dataset['listenerBound']) {
          collapseToggleEl.dataset['listenerBound'] = 'true';
          collapseToggleEl.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            nav.classList.toggle('nav-collapsed');
            document.body.classList.toggle('sidebar-collapsed');
          });
        }
      }

      const menuToggle = document.querySelector('.nav-menu-toggle') as HTMLElement | null;
      const navOverlay = document.querySelector('.nav-overlay');
      const closeButton = document.querySelector('.nav-overlay-close');
      if (menuToggle && navOverlay && !menuToggle.dataset['listenerBound']) {
        menuToggle.dataset['listenerBound'] = 'true';
        menuToggle.addEventListener('click', () => {
          navOverlay.classList.add('active');
          navOverlay.setAttribute('aria-hidden', 'false');
          menuToggle.setAttribute('aria-expanded', 'true');
          document.body.style.overflow = 'hidden';
        });
        closeButton?.addEventListener('click', () => {
          navOverlay.classList.remove('active');
          navOverlay.setAttribute('aria-hidden', 'true');
          menuToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
        navOverlay.addEventListener('click', (e: Event) => {
          if (e.target === navOverlay) {
            (closeButton as HTMLElement)?.click();
          }
        });
      }

      // 导航按钮点击事件
      document.querySelectorAll('.nav-tab, .nav-item').forEach(tabEl => {
        const tab = tabEl as HTMLElement;
        if (tab.dataset['listenerBound']) return;
        tab.dataset['listenerBound'] = 'true';
        tab.addEventListener('click', e => {
          const section = tab.dataset['section'];
          if (!section) return;
          if (tab.tagName === 'A') return;
          e.preventDefault();
          const overlay = document.querySelector('.nav-overlay');
          if (overlay?.classList.contains('active')) {
            (document.querySelector('.nav-overlay-close') as HTMLElement)?.click();
          }
          if (section === 'home') {
            window.location.href = '/';
          } else {
            window.location.href = '/home#' + section;
          }
        });
      });
    };

    setTimeout(initNav, 100);

    return () => {
      const styleElement = document.getElementById(styleId);
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  return (
    <div className='homepage-root' style={{ display: 'flex', minHeight: '100vh' }}>
      <div dangerouslySetInnerHTML={{ __html: navigationComponent }} suppressHydrationWarning />
      <main className='homepage-main' style={{ flex: 1 }}>
        <iframe
          src='/api/static/homepage?t=1'
          style={{
            width: '100%',
            height: '100vh',
            border: 'none',
            display: 'block',
          }}
          title='cc4pm homepage'
        />
      </main>
    </div>
  );
}
