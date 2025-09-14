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
  font-size: 1.2rem;
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
`;
