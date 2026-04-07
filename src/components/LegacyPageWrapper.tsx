'use client';

import { useEffect } from 'react';
import { navigationComponent, allStyles, allScripts } from '@/legacy';
import { getStartedModule } from '@/legacy/features/get-started';
import { bestPracticesModule } from '@/legacy/features/best-practices';
import { implementationModule } from '@/legacy/features/how-to-implement';
import { howToApplyCCModule } from '@/legacy/features/how-to-apply-cc';
import { DEFAULT_SECTION_ID } from '@/config/navigation';

interface LegacyPageWrapperProps {
  homepageHtml: string;
}

declare global {
  interface Window {
    initNavigation?: () => void;
  }
}

/**
 * 遗留页面包装器 - 复用现有的所有模块和组件
 * 采用客户端渲染以保持现有的交互逻辑
 *
 * 这是一个适配器组件，将现有的 HTML 字符串模板系统
 * 适配到 Next.js React 架构中
 */
export function LegacyPageWrapper({ homepageHtml }: LegacyPageWrapperProps) {
  useEffect(() => {
    // 注入样式
    const styleId = 'legacy-styles';
    const initialSectionId = window.location.hash.slice(1) || DEFAULT_SECTION_ID;
    const styleContent = `
        /* Anti-FOUC: hide all sections by default and show only the default section */
        .content-section, .practices-page { display: none; }
        #${initialSectionId} { display: block; }
        ${allStyles}
      `;
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = styleContent;
    document.head.appendChild(style);

    // 等待 DOM 完全渲染后再执行脚本
    // 使用 requestAnimationFrame 确保 DOM 已渲染
    const rafId = window.requestAnimationFrame(() => {
      try {
        // 替换 DOMContentLoaded 事件监听为立即执行
        const modifiedScripts = allScripts.replace(
          /document\.addEventListener\(['"]DOMContentLoaded['"],\s*(\w+)\)/g,
          '$1()',
        );

        // 使用 Function 而不是 eval 以获得更好的作用域控制
        const scriptFunc = new Function(modifiedScripts);
        scriptFunc();

        // 确保导航初始化正确执行
        // 延迟调用以确保所有脚本都已加载
        setTimeout(() => {
          if (typeof window.initNavigation === 'function') {
            window.initNavigation();
          }
        }, 100);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error executing legacy scripts:', error);
      }
    });

    // 清理函数
    return () => {
      window.cancelAnimationFrame(rafId);
      // 移除样式
      const styleElement = document.getElementById(styleId);
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  return (
    <>
      {/* 导航栏 - 左侧边栏 */}
      <div dangerouslySetInnerHTML={{ __html: navigationComponent }} />

      {/* 主内容区 - 复用所有功能模块 */}
      <div className='content-wrapper'>
        {/* Home section - 使用 iframe 嵌入首页 */}
        <div
          id='home'
          className='content-section'
          style={{ height: '100vh', width: '100%' }}
        >
          <iframe
            src='/api/static/homepage?t=1'
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
            }}
            title='cc4pm homepage'
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: getStartedModule }} suppressHydrationWarning />
        <div dangerouslySetInnerHTML={{ __html: bestPracticesModule }} suppressHydrationWarning />
        <div dangerouslySetInnerHTML={{ __html: implementationModule }} suppressHydrationWarning />
        <div dangerouslySetInnerHTML={{ __html: howToApplyCCModule }} suppressHydrationWarning />
      </div>
    </>
  );
}
