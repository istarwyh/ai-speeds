import { DEFAULT_SECTION_ID, type SectionId } from '../../lib/config/navigation';
import { UI_TEXTS } from '../../config/ui-texts';

const cls = (id: SectionId): string => (id === DEFAULT_SECTION_ID ? 'nav-tab active' : 'nav-tab');

export const navigationComponent = `
<nav class="main-nav">
  <div class="nav-container">
    <div class="nav-tabs">
      <button class="${cls('get-started')}" data-section="get-started">
        <span class="nav-icon">🚀</span>
        <span class="nav-text">${UI_TEXTS.NAVIGATION.GET_STARTED}</span>
      </button>
      <button class="${cls('best-practices')}" data-section="best-practices">
        <span class="nav-icon">⚡</span>
        <span class="nav-text">${UI_TEXTS.NAVIGATION.BEST_PRACTICES}</span>
      </button>
      <button class="${cls('how-to-implement')}" data-section="how-to-implement">
        <span class="nav-icon">🔧</span>
        <span class="nav-text">${UI_TEXTS.NAVIGATION.HOW_TO_IMPLEMENT}</span>
      </button>
      <button class="${cls('how-to-apply-cc')}" data-section="how-to-apply-cc">
        <span class="nav-icon">🎯</span>
        <span class="nav-text">${UI_TEXTS.NAVIGATION.HOW_TO_APPLY_CC}</span>
      </button>
      <button class="nav-tab" onclick="window.location.href='/trends/20251007'">
        <span class="nav-icon">📈</span>
        <span class="nav-text">${UI_TEXTS.NAVIGATION.AI_TRENDS}</span>
      </button>
    </div>
  </div>
</nav>`;
