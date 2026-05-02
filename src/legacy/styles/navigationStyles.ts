export const navigationStyles = `
/* Navigation Styles */
:root {
  --sidebar-width: 130px;
  --sidebar-collapsed-width: 60px;
  --active-border-width: 3px;
}

.main-nav {
  background: var(--color-surface-glass);
  border-right: 1px solid var(--color-surface-glass-2);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--sidebar-width);
  z-index: 100;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
}

/* Collapsed sidebar - icon only mode */
.main-nav.nav-collapsed {
  width: var(--sidebar-collapsed-width);
  overflow-x: hidden;
}

.main-nav.nav-collapsed .nav-text,
.main-nav.nav-collapsed .brand-text {
  display: none;
}

.main-nav.nav-collapsed .nav-brand {
  justify-content: center;
  padding: 0.5rem 0;
}

.main-nav.nav-collapsed .nav-tab,
.main-nav.nav-collapsed .nav-item {
  justify-content: center;
  padding: 0.75rem;
  gap: 0;
}

.main-nav.nav-collapsed .nav-tab.active {
  border-left: none;
  padding-left: 0.75rem;
  background: var(--color-surface-glass-2);
  border-bottom: var(--active-border-width) solid var(--color-primary);
}

.main-nav.nav-collapsed .nav-container {
  padding: var(--space-6) 0.25rem;
}

/* Collapse toggle button */
.nav-collapse-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin: auto 0.5rem 0.5rem 0.5rem;
  border: 1px solid var(--color-surface-glass-2, #e5e7eb);
  background: transparent;
  cursor: pointer;
  border-radius: 0.375rem;
  color: #6b7280;
  transition: all 0.2s ease;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}

.nav-collapse-toggle:hover {
  background: rgba(229, 122, 90, 0.1);
  color: #E57A5A;
}

.nav-collapse-toggle svg {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
  pointer-events: none;
}

.main-nav.nav-collapsed .nav-collapse-toggle svg {
  transform: rotate(180deg);
}

.nav-container {
  padding: var(--space-4) var(--space-2);
  flex: 1;
}

.nav-tabs {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.nav-tab {
  background: transparent;
  border: none;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: var(--radius-md);
  position: relative;
  min-height: var(--desktop-touch-target);
  text-align: left;
  width: 100%;
}

.nav-tab:hover {
  color: var(--color-text-primary);
  background: var(--color-surface-glass-2);
}

.nav-tab.active {
  color: var(--color-primary);
  background: var(--color-surface-glass-2);
  border-left: var(--active-border-width) solid var(--color-primary);
  padding-left: calc(1rem - var(--active-border-width));
}

.nav-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.nav-icon svg {
  width: 100%;
  height: 100%;
}

.nav-text {
  font-size: 0.8rem;
  flex: 1;
}

/* Content area adjustment for sidebar */
.content-wrapper {
  margin-left: var(--sidebar-width);
  flex: 1;
  padding: var(--space-6);
  transition: margin-left 0.3s ease;
}

/* Collapsed sidebar content adjustment */
body.sidebar-collapsed .content-wrapper {
  margin-left: var(--sidebar-collapsed-width);
}

/* Home iframe section - fullscreen */
.home-iframe-container {
  width: 100%;
  height: 100vh;
  border: none;
  border-radius: 0;
  overflow: hidden;
}

.home-iframe-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Fullscreen mode for home section */
.content-wrapper.home-active {
  padding: 0 !important;
  margin-left: 0 !important;
}

.content-wrapper.home-active #home.content-section {
  padding: 0 !important;
  min-height: 100vh;
}

body.sidebar-collapsed .content-wrapper.home-active .home-iframe-container {
  height: 100vh;
  border-radius: 0;
}

/* Mobile: make header fixed and allow hide/show via transform */
@media (max-width: 768px) {
  .main-nav,
  .main-nav.nav-collapsed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    width: 100% !important;
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--color-surface-glass-2);
    transform: translateY(0);
    transition: transform 0.2s ease-in-out;
    flex-direction: column;
    overflow-x: hidden;
  }

  .main-nav.nav--hidden {
    transform: translateY(-100%);
  }

  /* 移动端始终显示导航文本和品牌 */
  .main-nav.nav-collapsed .nav-text,
  .main-nav.nav-collapsed .brand-text {
    display: inline;
  }

  .main-nav.nav-collapsed .nav-tab,
  .main-nav.nav-collapsed .nav-item {
    justify-content: center;
    flex-direction: column;
    gap: 0.25rem;
  }

  /* 移动端隐藏品牌区域 */
  .nav-brand {
    display: none !important;
  }

  /* 移动端内容区：固定导航不占流式布局，重置左边距 */
  .content-wrapper {
    margin-left: 0 !important;
    margin-top: var(--mobile-nav-height, 70px);
    width: 100%;
    overflow-x: hidden;
  }

  .nav-container {
    padding: 0 var(--mobile-padding);
  }

  .nav-tabs {
    flex-direction: row;
    gap: 0.5rem;
    overflow-x: auto;
  }

  .nav-tab {
    padding: 0.625rem 1rem;
    min-height: var(--mobile-touch-target);
    min-width: var(--mobile-touch-target);
    font-size: var(--font-size-sm);
    flex-shrink: 0;
  }

  .nav-tab.active {
    border-left: none;
    border-bottom: var(--active-border-width) solid var(--color-primary);
    padding-left: 1rem;
    padding-bottom: calc(0.625rem - var(--active-border-width));
  }

  .nav-icon {
    width: 16px;
    height: 16px;
  }

  .nav-text {
    font-size: 0.8125rem;
  }

  .content-wrapper {
    margin-left: 0;
    margin-top: var(--mobile-nav-height, 70px);
    transition: margin-top 0.2s ease-in-out;
  }

  body.mobile-nav-space.nav-hidden .content-wrapper {
    margin-top: 0;
  }

  /* 移动端隐藏侧边栏折叠按钮 */
  .nav-collapse-toggle {
    display: none;
  }
}

/* 小屏幕手机优化 (iPhone SE 等) */
@media (max-width: 375px) {
  .nav-tab {
    padding: 0.5rem 0.75rem;
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
