'use client';

import { useEffect } from 'react';
import { navigationComponent, allStyles, allScripts } from '@/index';
import { getStartedModule } from '@/features/get-started';
import { bestPracticesModule } from '@/features/best-practices';
import { implementationModule } from '@/features/how-to-implement';
import { howToApplyCCModule } from '@/features/how-to-apply-cc';
import { DEFAULT_SECTION_ID } from '@/config/navigation';

/**
 * 遗留页面包装器 - 复用现有的所有模块和组件
 * 采用客户端渲染以保持现有的交互逻辑
 *
 * 这是一个适配器组件，将现有的 HTML 字符串模板系统
 * 适配到 Next.js React 架构中
 */
export function LegacyPageWrapper() {
  useEffect(() => {
    // 注入样式
    const styleId = 'legacy-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        /* Anti-FOUC: hide all sections by default and show only the default section */
        .content-section, .practices-page { display: none; }
        #${DEFAULT_SECTION_ID} { display: block; }
        ${allStyles}
      `;
      document.head.appendChild(style);
    }

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
        <div dangerouslySetInnerHTML={{ __html: getStartedModule }} />
        <div dangerouslySetInnerHTML={{ __html: bestPracticesModule }} />
        <div dangerouslySetInnerHTML={{ __html: implementationModule }} />
        <div dangerouslySetInnerHTML={{ __html: howToApplyCCModule }} />
      </div>
    </>
  );
}
