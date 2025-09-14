import { DEFAULT_SECTION_ID, type SectionId } from '../../lib/config/navigation';

const cls = (id: SectionId): string =>
  id === DEFAULT_SECTION_ID ? 'nav-tab active' : 'nav-tab';

export const navigationComponent = `
<nav class="main-nav">
  <div class="nav-container">
    <div class="nav-tabs">
      <button class="${cls('get-started')}" data-section="get-started">
        <span class="nav-icon">🚀</span>
        <span class="nav-text">如何用上 CC</span>
      </button>
      <button class="${cls('best-practices')}" data-section="best-practices">
        <span class="nav-icon">⚡</span>
        <span class="nav-text">如何用好 CC</span>
      </button>
      <button class="${cls('how-to-implement')}" data-section="how-to-implement">
        <span class="nav-icon">🔧</span>
        <span class="nav-text">如何实现 CC</span>
      </button>
      <button class="${cls('how-to-apply-cc')}" data-section="how-to-apply-cc">
        <span class="nav-icon">🎯</span>
        <span class="nav-text">如何运用 CC</span>
      </button>
    </div>
  </div>
</nav>`;
