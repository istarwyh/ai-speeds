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
      <span class="brand-icon">${heroicons.rocket}</span>
      <span class="brand-text">AI Speeds</span>
    </div>

    <div class="nav-tabs" role="tablist" aria-orientation="vertical">
      <button class="nav-item ${cls('get-started')}" data-section="get-started" data-active="${DEFAULT_SECTION_ID === 'get-started'}" aria-selected="${DEFAULT_SECTION_ID === 'get-started'}" role="tab" aria-label="${UI_TEXTS.NAVIGATION.GET_STARTED}: Quick start guides and initial setup instructions for new users" data-tooltip="${UI_TEXTS.NAVIGATION.GET_STARTED}: Get up and running quickly!">
        <span class="nav-icon" aria-hidden="true">${getIcon('get-started')}</span>
        <span class="nav-text">${UI_TEXTS.NAVIGATION.GET_STARTED}</span>
      </button>
      <button class="nav-item ${cls('best-practices')}" data-section="best-practices" data-active="${DEFAULT_SECTION_ID === 'best-practices'}" aria-selected="${DEFAULT_SECTION_ID === 'best-practices'}" role="tab" aria-label="${UI_TEXTS.NAVIGATION.BEST_PRACTICES}: Learn the optimal ways to use AI Speeds effectively" data-tooltip="${UI_TEXTS.NAVIGATION.BEST_PRACTICES}: Discover best practices">
        <span class="nav-icon" aria-hidden="true">${getIcon('best-practices')}</span>
        <span class="nav-text">${UI_TEXTS.NAVIGATION.BEST_PRACTICES}</span>
      </button>
      <button class="nav-item ${cls('how-to-implement')}" data-section="how-to-implement" data-active="${DEFAULT_SECTION_ID === 'how-to-implement'}" aria-selected="${DEFAULT_SECTION_ID === 'how-to-implement'}" role="tab" aria-label="${UI_TEXTS.NAVIGATION.HOW_TO_IMPLEMENT}: Technical implementation guides for developers" data-tooltip="${UI_TEXTS.NAVIGATION.HOW_TO_IMPLEMENT}: Implementation guides">
        <span class="nav-icon" aria-hidden="true">${getIcon('how-to-implement')}</span>
        <span class="nav-text">${UI_TEXTS.NAVIGATION.HOW_TO_IMPLEMENT}</span>
      </button>
      <button class="nav-item ${cls('how-to-apply-cc')}" data-section="how-to-apply-cc" data-active="${DEFAULT_SECTION_ID === 'how-to-apply-cc'}" aria-selected="${DEFAULT_SECTION_ID === 'how-to-apply-cc'}" role="tab" aria-label="${UI_TEXTS.NAVIGATION.HOW_TO_APPLY_CC}: Apply Claude Code Router in real-world scenarios" data-tooltip="${UI_TEXTS.NAVIGATION.HOW_TO_APPLY_CC}: Real-world applications">
        <span class="nav-icon" aria-hidden="true">${getIcon('how-to-apply-cc')}</span>
        <span class="nav-text">${UI_TEXTS.NAVIGATION.HOW_TO_APPLY_CC}</span>
      </button>
      <a href="/trends/20251007" class="nav-item nav-tab" data-section="ai-trends" aria-selected="false" role="tab" aria-label="${UI_TEXTS.NAVIGATION.AI_TRENDS}: Latest trends and insights in AI technology" data-tooltip="${UI_TEXTS.NAVIGATION.AI_TRENDS}: Latest AI trends">
        <span class="nav-icon" aria-hidden="true">${getIcon('ai-trends')}</span>
        <span class="nav-text">${UI_TEXTS.NAVIGATION.AI_TRENDS}</span>
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
        <button class="nav-item ${cls('get-started')}" data-section="get-started" aria-selected="${DEFAULT_SECTION_ID === 'get-started'}" role="tab" data-tooltip="${UI_TEXTS.NAVIGATION.GET_STARTED}: Get up and running quickly!">
          <span class="nav-icon" aria-hidden="true">${getIcon('get-started')}</span>
          <span class="nav-text">${UI_TEXTS.NAVIGATION.GET_STARTED}</span>
        </button>
        <button class="nav-item ${cls('best-practices')}" data-section="best-practices" aria-selected="${DEFAULT_SECTION_ID === 'best-practices'}" role="tab" data-tooltip="${UI_TEXTS.NAVIGATION.BEST_PRACTICES}: Discover best practices">
          <span class="nav-icon" aria-hidden="true">${getIcon('best-practices')}</span>
          <span class="nav-text">${UI_TEXTS.NAVIGATION.BEST_PRACTICES}</span>
        </button>
        <button class="nav-item ${cls('how-to-implement')}" data-section="how-to-implement" aria-selected="${DEFAULT_SECTION_ID === 'how-to-implement'}" role="tab" data-tooltip="${UI_TEXTS.NAVIGATION.HOW_TO_IMPLEMENT}: Implementation guides">
          <span class="nav-icon" aria-hidden="true">${getIcon('how-to-implement')}</span>
          <span class="nav-text">${UI_TEXTS.NAVIGATION.HOW_TO_IMPLEMENT}</span>
        </button>
        <button class="nav-item ${cls('how-to-apply-cc')}" data-section="how-to-apply-cc" aria-selected="${DEFAULT_SECTION_ID === 'how-to-apply-cc'}" role="tab" data-tooltip="${UI_TEXTS.NAVIGATION.HOW_TO_APPLY_CC}: Real-world applications">
          <span class="nav-icon" aria-hidden="true">${getIcon('how-to-apply-cc')}</span>
          <span class="nav-text">${UI_TEXTS.NAVIGATION.HOW_TO_APPLY_CC}</span>
        </button>
        <a href="/trends/20251007" class="nav-item" aria-label="${UI_TEXTS.NAVIGATION.AI_TRENDS}: Latest AI trends">
          <span class="nav-icon" aria-hidden="true">${getIcon('ai-trends')}</span>
          <span class="nav-text">${UI_TEXTS.NAVIGATION.AI_TRENDS}</span>
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
    gap: 0.5rem;
    padding: 0.5rem 0;
    justify-content: center;
  }

  .brand-icon {
    width: 2rem;
    height: 2rem;
    color: #6366f1;
  }

  .brand-icon svg {
    width: 100%;
    height: 100%;
  }

  .brand-text {
    font-size: 1.25rem;
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
    gap: 0.25rem;
    position: relative;
  }

  .nav-item {
    position: relative;
    padding: 0.75rem 1rem;
    border: 0;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
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
    color: #6366f1;
    background: rgba(99, 102, 241, 0.1);
    transform: translateY(-1px);
  }

  .nav-item:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 2px;
  }

  .nav-item[data-active="true"] {
    color: #6366f1;
    background: rgba(99, 102, 241, 0.12);
    box-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);
  }

  .nav-item[data-active="true"]::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: #6366f1;
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
    top: -40px;
    left: 6px;
    background: #6366f1;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    text-decoration: none;
    font-weight: 500;
    transition: top 0.3s ease;
  }

  .skip-navigation:focus {
    top: 6px;
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
      padding: 0.5rem 0;
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
      background: #6366f1;
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
