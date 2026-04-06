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
    `;
    document.head.appendChild(style);

    // 直接绑定折叠按钮事件
    const initCollapseToggle = () => {
      const collapseToggle = document.querySelector('.nav-collapse-toggle');
      const nav = document.querySelector('.main-nav');
      if (!collapseToggle || !nav) {
        return;
      }

      collapseToggle.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        nav.classList.toggle('nav-collapsed');
        document.body.classList.toggle('sidebar-collapsed');
      });
    };

    // 延迟执行确保 DOM 已渲染
    setTimeout(initCollapseToggle, 100);

    return () => {
      const styleElement = document.getElementById(styleId);
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* 侧边导航栏 */}
      <div dangerouslySetInnerHTML={{ __html: navigationComponent }} suppressHydrationWarning />

      {/* 主内容区 - iframe 嵌入 cc4pm 首页 */}
      <main className='content-wrapper' style={{ padding: 0 }}>
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
