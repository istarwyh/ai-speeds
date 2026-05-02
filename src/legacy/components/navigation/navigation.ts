import { DEFAULT_SECTION_ID, type SectionId } from '../../../lib/config/navigation';
import { UI_TEXTS } from '../../../config/ui-texts';
import { heroicons } from '../../client/shared/config/heroicons';
import { navigationIconMap } from '../../client/shared/config/heroicons';

const cls = (id: SectionId): string => (id === DEFAULT_SECTION_ID ? 'nav-tab active' : 'nav-tab');

const getIcon = (id?: string): string => {
  if (id && id in navigationIconMap) {
    const iconKey = navigationIconMap[id as keyof typeof navigationIconMap];
    return (heroicons[iconKey as keyof typeof heroicons] as string) || heroicons.rocket;
  }
  return heroicons.rocket; // Use fallback for now
};

export const navigationComponent = `
<nav class="main-nav enhanced-nav" role="navigation" aria-label="Main navigation">
  <div class="nav-container">
<div class="nav-brand" aria-label="AI Speeds">
      <span class="brand-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AI Speeds - Mountain Climbing Path">
          <!-- Letter A - Mountain Triangle (no horizontal bar) -->
          <path d="M 16 4 L 6 28 M 16 4 L 26 28" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <!-- Letter S - One continuous winding climbing path -->
          <path d="M 7 27 C 9 25, 11 22, 14 19 C 17 16, 22 16, 23 19 C 24 22, 19 23, 16 20 C 13 17, 12 12, 16 8" stroke="#4ECDC4" stroke-width="2.5" stroke-linecap="round" fill="none"/>
          <!-- Peak achievement -->
          <circle cx="16" cy="4" r="2" fill="#7EDDD6"/>
          <circle cx="16" cy="4" r="0.8" fill="white" opacity="0.7"/>
        </svg>
      </span>
      <span class="brand-text">AI Speeds</span>
    </div>

    <div class="nav-tabs" role="tablist" aria-orientation="vertical">
      <button class="nav-item ${cls('home')}" data-section="home" data-active="${DEFAULT_SECTION_ID === 'home'}" aria-selected="${DEFAULT_SECTION_ID === 'home'}" role="tab" aria-label="${UI_TEXTS.NAVIGATION.HOME}: CC4PM 首页" data-tooltip="${UI_TEXTS.NAVIGATION.HOME}">
        <span class="nav-icon" aria-hidden="true">${getIcon('home')}</span>
        <span class="nav-text">${UI_TEXTS.NAVIGATION.HOME}</span>
      </button>
      <button class="nav-item ${cls('get-started')}" data-section="get-started" data-active="${DEFAULT_SECTION_ID === 'get-started'}" aria-selected="${DEFAULT_SECTION_ID === 'get-started'}" role="tab" aria-label="${UI_TEXTS.NAVIGATION.GET_STARTED}: Quick start guides and initial setup instructions for new users" data-tooltip="${UI_TEXTS.NAVIGATION.GET_STARTED}: Get up and running quickly!">
        <span class="nav-icon" aria-hidden="true">${getIcon('get-started')}</span>
        <span class="nav-text">${UI_TEXTS.NAVIGATION.GET_STARTED}</span>
      </button>
      <a href="/whiteboard" class="nav-item nav-tab" data-section="whiteboard" aria-selected="false" role="tab" aria-label="${UI_TEXTS.NAVIGATION.WHITEBOARD}: 自由绘制和书写的白板工具" data-tooltip="${UI_TEXTS.NAVIGATION.WHITEBOARD}: 自由绘制">
        <span class="nav-icon" aria-hidden="true">${getIcon('whiteboard')}</span>
        <span class="nav-text">${UI_TEXTS.NAVIGATION.WHITEBOARD}</span>
      </a>
    </div>

    <div class="nav-actions">
      <button
        class="nav-menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded="false"
        aria-controls="nav-tabs"
      >
        <span class="nav-menu-icon">${heroicons.adjustments}</span>
      </button>
    </div>

    <button class="nav-collapse-toggle" aria-label="Toggle sidebar" title="Toggle sidebar">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="pointer-events:none">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>
  </div>

  <!-- Mobile navigation overlay -->
  <div class="nav-overlay" aria-hidden="true">
    <div class="nav-overlay-content">
      <div class="nav-overlay-header">
        <span class="nav-overlay-title">Navigation</span>
        <button class="nav-overlay-close" aria-label="Close navigation menu">
          <span>${heroicons.adjustments}</span>
        </button>
      </div>
      <div class="nav-overlay-tabs">
        <button class="nav-item ${cls('home')}" data-section="home" aria-selected="${DEFAULT_SECTION_ID === 'home'}" role="tab" data-tooltip="${UI_TEXTS.NAVIGATION.HOME}">
          <span class="nav-icon" aria-hidden="true">${getIcon('home')}</span>
          <span class="nav-text">${UI_TEXTS.NAVIGATION.HOME}</span>
        </button>
        <button class="nav-item ${cls('get-started')}" data-section="get-started" aria-selected="${DEFAULT_SECTION_ID === 'get-started'}" role="tab" data-tooltip="${UI_TEXTS.NAVIGATION.GET_STARTED}: Get up and running quickly!">
          <span class="nav-icon" aria-hidden="true">${getIcon('get-started')}</span>
          <span class="nav-text">${UI_TEXTS.NAVIGATION.GET_STARTED}</span>
        </button>
        <a href="/whiteboard" class="nav-item" aria-label="${UI_TEXTS.NAVIGATION.WHITEBOARD}: 自由绘制">
          <span class="nav-icon" aria-hidden="true">${getIcon('whiteboard')}</span>
          <span class="nav-text">${UI_TEXTS.NAVIGATION.WHITEBOARD}</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Skip navigation link for accessibility -->
  <a href="#main-content" class="skip-navigation" aria-label="Skip to main content">Skip to main content</a>
</nav>

<style>
  /* Enhanced Navigation Styles */
  .enhanced-nav {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-right: 1px solid #e5e7eb;
    transition: all 0.3s ease;
  }

  .enhanced-nav.scrolled {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .nav-brand {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0;
    justify-content: center;
  }

  .brand-icon {
    width: 2rem;
    height: 2rem;
    color: #E57A5A;
  }

  .brand-icon svg {
    width: 100%;
    height: 100%;
  }

  .brand-text {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
  }

  @media (max-width: 768px) {
    .brand-text {
      font-size: 1rem;
    }
  }

  .nav-tabs {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    position: relative;
  }

  .nav-item {
    position: relative;
    padding: 0.5rem 0.75rem;
    border: 0;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: #6b7280;
    transition: all 0.2s ease;
    border-radius: 0.375rem;
    outline-offset: 2px;
    text-align: left;
    width: 100%;
    font-family: inherit;
  }

  .nav-item:hover {
    color: #E57A5A;
    background: rgba(229, 122, 90, 0.1);
    transform: translateY(-1px);
  }

  .nav-item:focus-visible {
    outline: 2px solid #E57A5A;
    outline-offset: 2px;
  }

  .nav-item[data-active="true"] {
    color: #E57A5A;
    background: rgba(229, 122, 90, 0.12);
    box-shadow: 0 2px 8px rgba(229, 122, 90, 0.25);
  }

  .nav-item[data-active="true"]::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: #E57A5A;
    border-radius: 1px;
  }

  .nav-icon {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.2s ease;
  }

  .nav-icon svg {
    width: 100%;
    height: 100%;
  }

  .nav-item[data-active="true"] .nav-icon {
    transform: scale(1.1);
  }

  .nav-text {
    font-weight: 500;
    flex: 1;
  }

  .nav-menu-toggle {
    display: none;
    padding: 0.5rem;
    border: 0;
    background: transparent;
    cursor: pointer;
    border-radius: 0.375rem;
    transition: background 0.2s ease;
    color: #6b7280;
  }

  .nav-menu-toggle:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .nav-menu-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
  }

  .nav-menu-icon svg {
    width: 100%;
    height: 100%;
  }

  /* Mobile navigation */
  .nav-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1001;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-overlay.active {
    opacity: 1;
    visibility: visible;
  }

  .nav-overlay-content {
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    max-width: 90%;
    height: 100vh;
    background: white;
    box-shadow: -4px 0 6px -1px rgba(0, 0, 0, 0.1);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }

  .nav-overlay.active .nav-overlay-content {
    transform: translateX(0);
  }

  .nav-overlay-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
  }

  .nav-overlay-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
  }

  .nav-overlay-close {
    padding: 0.5rem;
    border: 0;
    background: transparent;
    cursor: pointer;
    border-radius: 0.375rem;
    transition: background 0.2s ease;
  }

  .nav-overlay-close:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .nav-overlay-close svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  .nav-overlay-tabs {
    padding: 0.5rem;
  }

  .nav-overlay-tabs .nav-item {
    width: 100%;
    justify-content: flex-start;
    padding: 0.75rem;
  }

  .skip-navigation {
    position: absolute;
    top: -100px;
    left: 6px;
    background: #E57A5A;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    text-decoration: none;
    font-weight: 500;
    transition: top 0.3s ease;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    white-space: nowrap;
    z-index: 9999;
  }

  .skip-navigation:focus {
    top: 6px;
    clip: auto;
    overflow: visible;
  }

  /* Interactive enhancements */
  .nav-item[data-tooltip] {
    position: relative;
  }

  .nav-item[data-tooltip]::after {
    content: attr(data-tooltip);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateX(100%) translateY(-50%);
    padding: 0.25rem 0.5rem;
    background: #374151;
    color: white;
    font-size: 0.75rem;
    border-radius: 0.25rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
    white-space: nowrap;
    z-index: 10;
    margin-left: 0.5rem;
  }

  .nav-item[data-tooltip]:hover::after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .enhanced-nav {
      position: sticky;
      top: 0;
      background: var(--color-surface-glass);
      border-bottom: 1px solid var(--color-surface-glass-2);
      border-right: none;
      width: 100%;
      padding: 0 var(--mobile-padding);
    }

    .nav-container {
      padding: 0;
      max-width: 100vw;
    }

    .nav-brand {
      display: none;
    }

    .nav-tabs {
      flex-direction: row;
      gap: 0.5rem;
      overflow-x: auto;
      padding: 0.5rem 3rem 0.5rem 0;
      -webkit-overflow-scrolling: touch;
    }

    .nav-item {
      padding: 0.625rem 1rem;
      min-height: var(--mobile-touch-target);
      min-width: var(--mobile-touch-target);
      font-size: var(--font-size-sm);
      flex-shrink: 0;
      flex-direction: column;
      text-align: center;
      gap: 0.25rem;
      width: auto;
    }

    .nav-item::after {
      display: none;
    }

    .nav-item[data-active="true"]::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: #E57A5A;
      border-radius: 2px;
    }

    .nav-icon {
      width: 1rem;
      height: 1rem;
    }

    .nav-text {
      font-size: 0.75rem;
    }

    .nav-menu-toggle {
      position: fixed;
      top: 0.5rem;
      right: 0.5rem;
      display: block;
      z-index: 1001;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(4px);
      border: 1px solid #e5e7eb;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .skip-navigation {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .nav-tabs {
      gap: 0.125rem;
    }

    .nav-item {
      padding: 0.375rem 0.5rem;
    }

    .nav-text {
      font-size: 0.6875rem;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .nav-item:focus-visible {
      outline-width: 3px;
      outline-color: #000;
    }
  }

  /* Motion preferences */
  @media (prefers-reduced-motion: reduce) {
    .enhanced-nav,
    .nav-item,
    .nav-icon {
      transition: none;
    }
  }
</style>
`;
