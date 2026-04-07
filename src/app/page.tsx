'use client';

import { useEffect } from 'react';
import { navigationComponent } from '@/legacy';
import { navigationStyles } from '@/legacy/styles/navigationStyles';
import { designTokens } from '@/legacy/styles/designTokens';
import { baseStyles } from '@/legacy/styles/baseStyles';

export default function RootPage() {
  useEffect(() => {
    // 只注入导航相关样式
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
      /* 首页 iframe 容器的侧边栏响应式边距 */
      .homepage-main {
        margin-left: var(--sidebar-width, 180px);
        transition: margin-left 0.3s ease;
      }
      body.sidebar-collapsed .homepage-main {
        margin-left: var(--sidebar-collapsed-width, 60px);
      }
      /* 移动端：导航栏变为顶部水平栏，取消左边距 */
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

    // 绑定折叠按钮和导航事件
    const initNav = () => {
      const collapseToggle = document.querySelector('.nav-collapse-toggle');
      const nav = document.querySelector('.main-nav');
      if (!nav) {
        return;
      }

      // 折叠按钮
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

      // 移动端菜单按钮
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

      // 导航按钮 - 跳转到对应页面
      document.querySelectorAll('.nav-tab, .nav-item').forEach(tabEl => {
        const tab = tabEl as HTMLElement;
        if (tab.dataset['listenerBound']) {
          return;
        }
        tab.dataset['listenerBound'] = 'true';
        tab.addEventListener('click', e => {
          const section = tab.dataset['section'];
          if (!section) {
            return;
          }
          // 外部链接由浏览器处理
          if (tab.tagName === 'A') {
            return;
          }
          e.preventDefault();
          // 关闭移动端菜单
          const overlay = document.querySelector('.nav-overlay');
          if (overlay?.classList.contains('active')) {
            (document.querySelector('.nav-overlay-close') as HTMLElement)?.click();
          }
          if (section === 'home') {
            window.location.hash = '';
          } else {
            // 跳转到 /home#section
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
      {/* 侧边导航栏 */}
      <div dangerouslySetInnerHTML={{ __html: navigationComponent }} suppressHydrationWarning />

      {/* 主内容区 - iframe 嵌入 cc4pm 首页 */}
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
