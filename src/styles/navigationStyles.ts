export const navigationStyles = `
/* Navigation Styles */
.main-nav {
  background: transparent;
  border-bottom: none;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

/* Mobile: make header fixed and allow hide/show via transform */
@media (max-width: 768px) {
  .main-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(0);
    transition: transform 0.2s ease-in-out;
  }
  .main-nav.nav--hidden {
    transform: translateY(-100%);
  }
  /* Offset page content under the fixed nav */
  body.mobile-nav-space .container {
    margin-top: var(--mobile-nav-height, 70px);
    transition: margin-top 0.2s ease-in-out;
  }
  body.mobile-nav-space.nav-hidden .container {
    margin-top: 0;
  }
  
  /* 移动端触摸优化 */
  .nav-container {
    padding: 0 var(--mobile-padding);
  }
  
  .nav-tab {
    padding: 0.625rem 1rem; /* 压缩高度：10px 16px */
    min-height: var(--mobile-touch-target);
    min-width: var(--mobile-touch-target);
    font-size: var(--font-size-sm);
  }
  
  .nav-tabs {
    gap: 0.5rem; /* 增加间距避免误触 */
  }
  
  .nav-icon {
    width: 16px;
    height: 16px;
  }
  
  .nav-text {
    font-size: 0.8125rem; /* 压缩文字大小 */
  }
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.nav-tabs {
  display: flex;
  gap: 0;
}

.nav-tab {
  background: none;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
  position: relative;
  min-height: var(--desktop-touch-target);
}

.nav-tab:hover {
  color: var(--color-text-primary);
  background: transparent;
  border-bottom-color: var(--color-surface-glass-2);
}

.nav-tab.active {
  color: var(--color-text-primary);
  border-bottom-color: var(--color-primary);
  background: transparent;
}

.nav-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icon svg {
  width: 100%;
  height: 100%;
}

.nav-text {
  font-size: 0.95rem;
}

/* When nav is hidden on mobile, allow content to reclaim space */
@media (max-width: 768px) {
  body.mobile-nav-space.nav-hidden .practices-page {
    top: 0;
    transition: top 0.2s ease-in-out;
  }
}

/* 小屏幕手机优化 (iPhone SE 等) */
@media (max-width: 375px) {
  .nav-tab {
    padding: 0.5rem 0.75rem; /* 进一步压缩 */
    font-size: 0.75rem;
  }
  
  .nav-icon {
    font-size: 0.9rem;
  }
  
  .nav-text {
    font-size: 0.75rem;
  }
}
`;
