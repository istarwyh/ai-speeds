/**
 * AI Speeds Brand Kit
 *
 * 可在其他网站使用的品牌标识JavaScript库
 * 提供简单的API来插入AI Speeds品牌标识
 */

(function (global) {
  'use strict';

  // AI Speeds Brand Kit
  const AISpeedsBrand = {
    version: '1.0.0',

    // Brand colors
    colors: {
      primary: '#4ECDC4',
      secondary: '#2563eb',
      accent: '#7EDDD6',
      dark: '#0f172a',
      light: '#f8fafc',
    },

    // Logo SVG templates
    logos: {
      // Square logo with gradient
      square: function (size = 200) {
        return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aiSpeedsGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="${this.colors.primary}" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="${this.colors.secondary}" />
            </linearGradient>
          </defs>
          <path d="M 16 4 L 6 28 M 16 4 L 26 28" stroke="url(#aiSpeedsGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M 7 27 C 9 25, 11 22, 14 19 C 17 16, 22 16, 23 19 C 24 22, 19 23, 16 20 C 13 17, 12 12, 16 8" stroke="url(#aiSpeedsGradient)" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
          <circle cx="16" cy="4" r="2" fill="${this.colors.accent}" />
          <circle cx="16" cy="4" r="0.8" fill="white" opacity="0.7" />
        </svg>`;
      },

      // Horizontal logo with text
      horizontal: function (width = 240, height = 60) {
        return `<svg width="${width}" height="${height}" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aiSpeedsGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="${this.colors.primary}" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="${this.colors.secondary}" />
            </linearGradient>
          </defs>
          <g transform="translate(2, 4)">
            <path d="M 16 4 L 6 28 M 16 4 L 26 28" stroke="url(#aiSpeedsGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M 7 27 C 9 25, 11 22, 14 19 C 17 16, 22 16, 23 19 C 24 22, 19 23, 16 20 C 13 17, 12 12, 16 8" stroke="url(#aiSpeedsGradient)" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            <circle cx="16" cy="4" r="2" fill="${this.colors.accent}" />
            <circle cx="16" cy="4" r="0.8" fill="white" opacity="0.7" />
          </g>
          <text x="48" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="600" fontStyle="italic" fill="${this.colors.dark}">AI Speeds</text>
        </svg>`;
      },

      // Icon only (minimal)
      icon: function (size = 32) {
        return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 16 4 L 6 28 M 16 4 L 26 28" stroke="${this.colors.secondary}" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M 7 27 C 9 25, 11 22, 14 19 C 17 16, 22 16, 23 19 C 24 22, 19 23, 16 20 C 13 17, 12 12, 16 8" stroke="${this.colors.primary}" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <circle cx="16" cy="4" r="2.5" fill="${this.colors.accent}" />
          <circle cx="16" cy="4" r="1" fill="white" opacity="0.8" />
        </svg>`;
      },

      // Monochrome version
      monochrome: function (size = 200) {
        return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 16 4 L 6 28 M 16 4 L 26 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M 7 27 C 9 25, 11 22, 14 19 C 17 16, 22 16, 23 19 C 24 22, 19 23, 16 20 C 13 17, 12 12, 16 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
          <circle cx="16" cy="4" r="2" fill="currentColor" />
          <circle cx="16" cy="4" r="0.8" fill="white" opacity="0.7" />
        </svg>`;
      },
    },

    // Insert logo into element
    insertLogo: function (selector, type = 'square', options = {}) {
      const element = typeof selector === 'string' ? document.querySelector(selector) : selector;
      if (!element) {
        return false;
      }

      const defaults = {
        size: 200,
        width: 240,
        height: 60,
        className: '',
        link: true,
        linkUrl: 'https://aispeeds.me',
      };

      const config = Object.assign(defaults, options);

      let svg;
      switch (type) {
        case 'horizontal':
          svg = this.logos.horizontal(config.width, config.height);
          break;
        case 'icon':
          svg = this.logos.icon(config.size);
          break;
        case 'monochrome':
          svg = this.logos.monochrome(config.size);
          break;
        default:
          svg = this.logos.square(config.size);
      }

      const wrapper = document.createElement('div');
      wrapper.className = `ai-speeds-brand ${config.className}`.trim();
      wrapper.innerHTML = svg;

      if (config.link) {
        const link = document.createElement('a');
        link.href = config.linkUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.appendChild(wrapper);
        element.appendChild(link);
      } else {
        element.appendChild(wrapper);
      }

      return true;
    },

    // Get logo as HTML string
    getLogo: function (type = 'square', options = {}) {
      const defaults = {
        size: 200,
        width: 240,
        height: 60,
        className: '',
      };

      const config = Object.assign(defaults, options);

      switch (type) {
        case 'horizontal':
          return this.logos.horizontal(config.width, config.height);
        case 'icon':
          return this.logos.icon(config.size);
        case 'monochrome':
          return this.logos.monochrome(config.size);
        default:
          return this.logos.square(config.size);
      }
    },

    // Create CSS for brand styling
    getCSS: function () {
      return `
.ai-speeds-brand {
  display: inline-block;
  line-height: 0;
}

.ai-speeds-brand svg {
  display: block;
  max-width: 100%;
  height: auto;
}

.ai-speeds-brand:hover svg {
  transform: scale(1.05);
  transition: transform 0.2s ease;
}
      `.trim();
    },
  };

  // Auto-inject CSS if not already present
  if (!document.querySelector('#ai-speeds-brand-css')) {
    const style = document.createElement('style');
    style.id = 'ai-speeds-brand-css';
    style.textContent = AISpeedsBrand.getCSS();
    document.head.appendChild(style);
  }

  // Export to global
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = AISpeedsBrand;
  } else {
    global.AISpeedsBrand = AISpeedsBrand;
  }
})(typeof window !== 'undefined' ? window : this);
