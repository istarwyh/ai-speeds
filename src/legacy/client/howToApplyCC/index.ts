import { HowToApplyCCManager } from './core/HowToApplyCCManager';

// Type-safe global function declarations
declare global {
  interface Window {
    initializeHowToApplyCC: () => void;
    showHowToApplyCCOverview: () => void;
  }
}

let manager: HowToApplyCCManager;

export function initializeHowToApplyCC(): void {
  // Initialization started

  manager = new HowToApplyCCManager();
  manager.initialize();

  // 暴露到全局作用域以便页面调用 - 现在使用类型安全的方式
  window.initializeHowToApplyCC = initializeHowToApplyCC;
  window.showHowToApplyCCOverview = () => {
    if (manager) {
      manager.showOverview();
    }
  };

  // Initialization completed
}

// 自动初始化（如果在浏览器环境中）
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHowToApplyCC);
  } else {
    initializeHowToApplyCC();
  }
}
