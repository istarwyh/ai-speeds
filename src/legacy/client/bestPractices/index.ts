import { BestPracticesManager } from './core/BestPracticesManager';
import { initializeApp } from './utils/initialization';
import { loadHighlightJsStyle } from '../../../lib/utils/highlight';

// Type-safe global function declarations
declare global {
  interface Window {
    initializeBestPractices: () => void;
    showBestPracticesOverview: () => void;
  }
}

let manager: BestPracticesManager;

// 全局初始化函数
function initializeBestPractices() {
  // 确保加载高亮主题样式（异步注入，不阻塞初始化）
  try {
    loadHighlightJsStyle();
  } catch {
    // Style loading failed - continue without highlighting
  }
  initializeApp(() => {
    manager = new BestPracticesManager();
    manager.initialize();

    // 暴露到全局作用域以便导航脚本调用
    window.initializeBestPractices = initializeBestPractices;
    window.showBestPracticesOverview = () => {
      if (manager) {
        manager.showOverview();
      }
    };
  });
}

// 自动初始化（如果 DOM 已就绪）
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeBestPractices);
} else {
  initializeBestPractices();
}
