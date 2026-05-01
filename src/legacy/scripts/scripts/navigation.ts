import { DEFAULT_SECTION_ID } from '../../../lib/config/navigation';
import { UI_TEXTS } from '../../../config/ui-texts';

export const navigationScript = `
// Navigation tab switching
function initNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab, .nav-item');
  const contentSections = document.querySelectorAll('.content-section, .practices-page');

  function animateTabTransition(tab) {
    if (!tab) return;

    // Add transition class
    tab.classList.add('nav-transitioning');

    // Remove class after animation
    setTimeout(() => {
      tab.classList.remove('nav-transitioning');
    }, 300);
  }

  // Sidebar collapse/expand helpers
  function collapseSidebar() {
    const nav = document.querySelector('.main-nav');
    if (nav) nav.classList.add('nav-collapsed');
    document.body.classList.add('sidebar-collapsed');
  }

  function expandSidebar() {
    const nav = document.querySelector('.main-nav');
    if (nav) nav.classList.remove('nav-collapsed');
    document.body.classList.remove('sidebar-collapsed');
  }

  function toggleSidebarCollapse() {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;
    if (nav.classList.contains('nav-collapsed')) {
      expandSidebar();
    } else {
      collapseSidebar();
    }
  }

  function updateHomeActiveState(sectionId) {
    const contentWrapper = document.querySelector('.content-wrapper');
    if (!contentWrapper) return;
    if (sectionId === 'home') {
      contentWrapper.classList.add('home-active');
      collapseSidebar();
    } else {
      contentWrapper.classList.remove('home-active');
      expandSidebar();
    }
  }

  // Collapse toggle button (guard against double-bind from repeated initNavigation calls)
  const collapseToggle = document.querySelector('.nav-collapse-toggle');
  if (collapseToggle && !collapseToggle.dataset.listenerBound) {
    collapseToggle.dataset.listenerBound = 'true';
    collapseToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleSidebarCollapse();
    }, true);
  }

  function showSection(sectionId) {
    // Re-query DOM elements to ensure we have the latest state
    const currentNavTabs = document.querySelectorAll('.nav-tab, .nav-item');
    const currentSections = document.querySelectorAll('.content-section, .practices-page');

    // Remove active class from all tabs
    currentNavTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('data-active', 'false');
      t.setAttribute('aria-selected', 'false');
    });

    // Add active class to corresponding tab
    const activeTab = document.querySelector('[data-section="' + sectionId + '"');
    if (activeTab) {
      activeTab.classList.add('active');
      activeTab.setAttribute('data-active', 'true');
      activeTab.setAttribute('aria-selected', 'true');
    }

    // Hide all content sections
    currentSections.forEach(section => {
      section.style.display = 'none';
    });

    // Show corresponding content section
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.style.display = 'block';
    }

    // Update sidebar collapse state based on section
    updateHomeActiveState(sectionId);

    // Animate transition
    if (activeTab) {
      animateTabTransition(activeTab);
    }
  }

  // Navigation event handlers
  navTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const targetSection = tab.dataset.section;
      const isLink = tab.tagName === 'A' || tab.hasAttribute('onclick');

      if (!isLink) {
        e.preventDefault();

        // Animate icon hover effect
        const navIcon = tab.querySelector('.nav-icon');
        if (navIcon) {
          navIcon.style.transform = 'scale(1.1) rotate(5deg)';
          setTimeout(() => {
            navIcon.style.transform = '';
          }, 150);
        }

        showSection(targetSection);
        // Update URL hash
        window.location.hash = targetSection;
      }
    });

    // Keyboard navigation support
    tab.addEventListener('keydown', (e) => {
      const tabs = Array.from(navTabs);
      const currentIndex = tabs.indexOf(tab);

      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault();
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
          tabs[prevIndex]?.focus();
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault();
          const nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
          tabs[nextIndex]?.focus();
          break;
        case 'Enter':
        case ' ': // Space
          e.preventDefault();
          tab.click();
          break;
        case 'Home':
          e.preventDefault();
          tabs[0]?.focus();
          break;
        case 'End':
          e.preventDefault();
          tabs[tabs.length - 1]?.focus();
          break;
      }
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.nav-menu-toggle');
  const navOverlay = document.querySelector('.nav-overlay');
  const closeButton = document.querySelector('.nav-overlay-close');
  const overlayContent = document.querySelector('.nav-overlay-content');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navOverlay?.classList.add('active');
      navOverlay?.setAttribute('aria-hidden', 'false');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';

      // Focus first item in overlay
      const firstButton = document.querySelector('.nav-overlay-tabs .nav-item');
      if (firstButton) {
        setTimeout(() => firstButton.focus(), 100);
      }
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      navOverlay?.classList.remove('active');
      navOverlay?.setAttribute('aria-hidden', 'true');
      menuToggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      menuToggle?.focus();
    });
  }

  // Close overlay when clicking outside (not on content)
  navOverlay?.addEventListener('click', (e) => {
    if (e.target === navOverlay) {
      closeButton?.click();
    }
  });

  // Prevent overlay close when clicking inside content
  overlayContent?.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Close overlay on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navOverlay?.classList.contains('active')) {
      closeButton?.click();
    }
  });

  // Focus management for overlay
  if (navOverlay) {
    const focusableElements = navOverlay.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    navOverlay.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    });
  }

  // Handle initial hash or default to configured section
  const hash = window.location.hash.slice(1); // Remove # from hash
  const initialSection = hash || '${DEFAULT_SECTION_ID}';
  showSection(initialSection);

  // Handle hash changes (back/forward navigation)
  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.slice(1) || '${DEFAULT_SECTION_ID}';
    showSection(newHash);
  });

  // Add scroll behavior
  let lastScrollY = window.scrollY || 0;
  function handleScroll() {
    const currentScrollY = window.scrollY || 0;
    const nav = document.querySelector('.enhanced-nav');

    if (nav) {
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        // Scrolling down
        nav.classList.add('scrolled');
      } else if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Scrolling up or at top
        nav.classList.remove('scrolled');
      }
      lastScrollY = currentScrollY;
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Auto-focus active tab
  const activeTab = document.querySelector('.nav-item[data-active="true"]');
  if (activeTab) {
    setTimeout(() => activeTab.focus(), 100);
  }

  // Add fade-in animation
  const nav = document.querySelector('.enhanced-nav');
  if (nav) {
    nav.style.opacity = '0';
    nav.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      nav.style.transition = 'all 0.3s ease';
      nav.style.opacity = '1';
      nav.style.transform = 'translateY(0)';
    }, 100);
  }

  // Update navigation state on tab changes
  // Note: This function is no longer needed as showSection handles all state updates
  // Keeping it for potential future use but not calling it on init to avoid conflicts
  function updateNavigationState() {
    const sections = document.querySelectorAll('.content-section, .practices-page');
    
    // Find the active section by checking which tab is active
    let activeSectionId = null;
    const tabs = document.querySelectorAll('.nav-tab, .nav-item');
    tabs.forEach(tab => {
      if (tab.classList.contains('active') || tab.getAttribute('data-active') === 'true') {
        activeSectionId = tab.dataset.section;
      }
    });

    // Show/hide sections based on active section
    if (activeSectionId) {
      sections.forEach(section => {
        section.style.display = section.id === activeSectionId ? 'block' : 'none';
      });
    }
  }

  // Don't call updateNavigationState on init - showSection already handles this
}

// Copy command function (unchanged)
function copyCommand(button) {
  const commandBlock = button.closest('.command-block');
  const command = commandBlock.dataset.command;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(command).then(() => {
      showCopySuccess(button);
    }).catch(() => {
      fallbackCopyTextToClipboard(command, button);
    });
  } else {
    fallbackCopyTextToClipboard(command, button);
  }
}

// Show copy success feedback
function showCopySuccess(button) {
  const originalText = button.innerHTML;
  button.innerHTML = '✓';
  button.style.color = '#28a745';

  setTimeout(() => {
    button.innerHTML = originalText;
    button.style.color = '';
  }, 2000);
}

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text, button) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showCopySuccess(button);
    }
  } catch (err) {
    console.error('Failed to copy command:', err);
  }

  document.body.removeChild(textArea);
}

// Enhanced navigation functions for article display
function toggleFooterVisibility(isArticleView) {
  const footer = document.querySelector('.practices-footer');
  if (footer) {
    footer.style.display = isArticleView ? 'none' : 'block';
  }
}

function updateBreadcrumb(isArticleView, articleTitle = '') {
  const header = document.querySelector('.practices-page__header');
  if (!header) return;

  if (isArticleView && articleTitle) {
    const breadcrumb = document.createElement('div');
    breadcrumb.className = 'practices-page__breadcrumb';
    breadcrumb.innerHTML = \`
      <button class="breadcrumb-back" onclick="window.history.back()">
        ${UI_TEXTS.BUTTONS.BACK_TO_OVERVIEW}
      </button>
      <span class="breadcrumb-path">${UI_TEXTS.NAVIGATION.GET_STARTED}${UI_TEXTS.BREADCRUMB.SEPARATOR}\${articleTitle}</span>
    \`;

    // Remove existing breadcrumb if any
    const existing = header.querySelector('.practices-page__breadcrumb');
    if (existing) {
      existing.remove();
    }

    header.appendChild(breadcrumb);
  } else {
    // Remove breadcrumb when showing overview
    const breadcrumb = header.querySelector('.practices-page__breadcrumb');
    if (breadcrumb) {
      breadcrumb.remove();
    }
  }
}

// Mobile header auto-hide on scroll (only applies on small screens)
function initMobileHeaderAutoHide() {
  const nav = document.querySelector('.main-nav');
  if (!nav) return;

  const mq = window.matchMedia('(max-width: 768px)');
  let lastY = window.scrollY || 0;
  let enabled = false;

  function setNavHeightVar() {
    // Measure actual nav height to avoid magic numbers (supports stacked tabs)
    const h = nav instanceof HTMLElement ? nav.offsetHeight : 0;
    document.body.style.setProperty('--mobile-nav-height', h + 'px');
  }

  function showNav() {
    if (!nav) return;
    nav.classList.remove('nav--hidden');
    document.body.classList.remove('nav-hidden');
  }

  function hideNav() {
    if (!nav) return;
    nav.classList.add('nav--hidden');
    document.body.classList.add('nav-hidden');
  }

  function onScroll() {
    if (!enabled) return;
    const y = window.scrollY || 0;
    const dy = y - lastY;
    lastY = y;

    // Ignore tiny jitter
    if (Math.abs(dy) < 5) return;

    // Always show near the very top
    if (y < 10) {
      showNav();
      return;
    }

    // If scrolling down and sufficiently past top, hide. If scrolling up, show.
    if (dy > 0 && y > 50) {
      hideNav();
    } else if (dy < 0) {
      showNav();
    }
  }

  function enable() {
    if (enabled) return;
    enabled = true;
    document.body.classList.add('mobile-nav-space');
    setNavHeightVar();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', setNavHeightVar);
    window.addEventListener('orientationchange', setNavHeightVar);
    // Re-measure after layout settles
    setTimeout(setNavHeightVar, 100);
  }

  function disable() {
    if (!enabled) return;
    enabled = false;
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', setNavHeightVar);
    window.removeEventListener('orientationchange', setNavHeightVar);
    document.body.classList.remove('mobile-nav-space', 'nav-hidden');
    if (nav) nav.classList.remove('nav--hidden');
    document.body.style.removeProperty('--mobile-nav-height');
  }

  function onMQChange(e) {
    if (e.matches) enable(); else disable();
  }

  // Initialize properly after ensuring DOM is ready
  function initialize() {
    if (mq.matches) enable();
    if (mq.addEventListener) mq.addEventListener('change', onMQChange);
    else if (mq.addListener) mq.addListener(onMQChange);
  }

  // Attach to enhanced navigation if available
  const enhancedNav = document.querySelector('.enhanced-nav');
  if (enhancedNav) {
    // Enhanced nav handles its own mobile behavior
    return;
  }

  // Ensure initialization happens after DOM is fully ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
}

// Make functions globally available
window.copyCommand = copyCommand;
window.toggleFooterVisibility = toggleFooterVisibility;
window.updateBreadcrumb = updateBreadcrumb;
window.initNavigation = initNavigation;
window.initMobileHeaderAutoHide = initMobileHeaderAutoHide;

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', initNavigation);

// Initialize mobile header auto-hide
if (typeof window !== 'undefined') {
  initMobileHeaderAutoHide();
}
`;