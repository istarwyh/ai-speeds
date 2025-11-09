/// <reference path="../types/env.d.ts" />
import { injectMarkdownStyles } from '../../bestPractices/styles/markdownStyles';
import { SafeMarkdownRenderer } from '../../../lib/utils/markdownRenderer';
import type { BaseContentCard } from '../types/ContentCard';
import { ShareService as GenericShareService } from '../services/ShareService';
import { preloadImage } from '../utils/image';

// Animation duration constant
const EXIT_ANIMATION_DURATION = 230; // 匹配 CSS 中的动画时长

// Minimal service and renderer contracts used by the handlers
export interface IContentService {
  getArticle(id: string): Promise<{
    title: string;
    content: string;
    rawMarkdown: string;
  }>;
}

export interface IArticleRenderer {
  renderArticle(title: string, content: string): string;
  renderLoadingState(): string;
  renderErrorState(error: string): string;
  initializeCopyFeature?(container: HTMLElement, rawMarkdown?: string): void;
  destroyCopyFeature?(): void;
}

/**
 * BaseArticleEventHandler centralizes the common flow for card click ->
 * article view rendering, Markdown/hljs processing, and UX enhancements.
 *
 * Subclasses customize:
 * - how to extract cardId from click target (extractCardId)
 * - optional pre-enter animation (beforeEnterArticle)
 * - how back navigation is registered (configureBackNavigation)
 * - optional debug listeners (addDebugListeners)
 */
export abstract class BaseArticleEventHandler {
  protected containerId: string;
  protected boundClickHandler: (e: Event) => void;
  protected contentService: IContentService;
  protected articleRenderer: IArticleRenderer;
  protected onBackToOverview?: () => void;
  private _shareService?: GenericShareService<BaseContentCard>;
  private _suppressHistory = false;
  private _preloadCache = new Set<string>(); // 内存缓存，避免重复预加载
  private _navLock = false; // 短暂导航锁，避免返回时的“幽灵点击”

  constructor(
    containerId: string,
    contentService: IContentService,
    articleRenderer: IArticleRenderer,
    onBackToOverview?: () => void,
  ) {
    this.containerId = containerId;
    this.boundClickHandler = this.handleCardClick.bind(this);
    this.contentService = contentService;
    this.articleRenderer = articleRenderer;
    this.onBackToOverview = onBackToOverview;
  }

  // —— 视口预热：卡片进入视口即预热分享所需资源 ——
  protected wireViewportPrewarm(container: HTMLElement): void {
    try {
      if (!('IntersectionObserver' in window)) {
        return;
      }
      const cards = container.querySelectorAll('.overview-card');
      const seen = new Set<string>();
      const observer = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }
            const el = entry.target as HTMLElement;
            const id = el.getAttribute('data-card-id');
            if (!id || seen.has(id)) {
              observer.unobserve(el);
              continue;
            }
            seen.add(id);
            observer.unobserve(el);
            // 低优先级触发，避免与主渲染竞争
            const run = () => void this.preloadForShare(id);
            if ('requestIdleCallback' in window) {
              (window as any).requestIdleCallback(run, { timeout: 800 });
            } else {
              setTimeout(run, 0);
            }
          }
        },
        {
          root: null,
          rootMargin: '200px 0px',
          threshold: 0.15,
        },
      );
      cards.forEach(el => observer.observe(el));
    } catch {
      // 忽略预热异常
    }
  }

  // —— 预加载分享相关资源（封面与二维码）——
  protected wireSharePreload(container: HTMLElement): void {
    try {
      const buttons = container.querySelectorAll('.overview-card__share-btn');
      buttons.forEach(btn => {
        const el = btn as HTMLElement;
        let fired = false;
        const run = () => {
          if (fired) {
            return;
          }
          fired = true;
          const id = el.getAttribute('data-card-id');
          if (id) {
            void this.preloadForShare(id);
          }
        };
        el.addEventListener('mouseenter', run, { once: true });
        el.addEventListener('focus', run, { once: true });
        el.addEventListener('touchstart', run, { once: true, passive: true });
      });
    } catch {}
  }

  protected async preloadForShare(cardId: string): Promise<void> {
    try {
      // 检查缓存，避免重复预加载
      if (this._preloadCache.has(cardId)) {
        return;
      }
      this._preloadCache.add(cardId);

      const card = this.resolveCardById(cardId);
      if (!card) {
        return;
      }

      // 性能监控
      const startTime = performance.now();

      // 1) 预热封面图（走 /img-proxy 以命中边缘缓存）
      if ((card as any).imageUrl) {
        try {
          await preloadImage((card as any).imageUrl);
        } catch (error) {
          if (process.env.NODE_ENV === 'development') {
            console.warn('Cover image preload failed for card:', cardId, error);
          }
        }
      }

      // 2) 预热二维码图（直接命中二维码服务的缓存）
      const link = (() => {
        try {
          const url = new URL(window.location.href);
          url.searchParams.set('module', this.getModuleName());
          url.searchParams.set('view', 'article');
          url.searchParams.set('cardId', cardId);
          return url.toString();
        } catch {
          return window.location.href;
        }
      })();
      const size = 220;
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(link)}`;
      await new Promise<void>(resolve => {
        try {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve();
          img.onerror = () => {
            if (process.env.NODE_ENV === 'development') {
              console.warn('QR code preload failed for card:', cardId);
            }
            resolve();
          };
          // 避免与关键渲染竞争
          const start = () => (img.src = qrUrl);
          if ('requestIdleCallback' in window) {
            (window as any).requestIdleCallback(start, { timeout: 500 });
          } else {
            setTimeout(start, 0);
          }
        } catch (error) {
          if (process.env.NODE_ENV === 'development') {
            console.warn('QR code preload setup failed for card:', cardId, error);
          }
          resolve();
        }
      });

      // 性能日志
      if (process.env.NODE_ENV === 'development') {
        const duration = performance.now() - startTime;
        console.debug(`Share preload completed for card ${cardId} in ${duration.toFixed(2)}ms`);
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Share preload failed for card:', cardId, error);
      }
    }
  }

  // Subclasses must provide a single source of truth for card lookup and icon mapping
  protected abstract resolveCardById(id: string): BaseContentCard | null;
  protected abstract getIcon(category: string): string;
  // 用于深链接的模块标识（避免缩写，保持可解释性）
  protected abstract getModuleName(): string;

  public bindEventListeners(): void {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error(`未找到容器元素: ${this.containerId}`);
      return;
    }

    this.removeExistingListeners(container);
    this.addEventListeners(container);
  }

  protected removeExistingListeners(container: HTMLElement): void {
    container.removeEventListener('click', this.boundClickHandler);
  }

  protected addEventListeners(container: HTMLElement): void {
    container.addEventListener('click', this.boundClickHandler);
    this.addDebugListeners(container);
    this.wireViewportPrewarm(container);
  }

  // Hook: subclasses may add extra debug listeners; default no-op

  protected addDebugListeners(_container: HTMLElement): void {}

  protected handleCardClick(e: Event): void {
    const event = e as MouseEvent;
    const target = event.target as HTMLElement;

    // If user clicked the back button, handle immediately regardless of view state
    const backEl = target.closest('[data-action="back-to-overview"]') as HTMLElement | null;
    if (backEl) {
      event.preventDefault();
      event.stopPropagation();
      (event as any).stopImmediatePropagation?.();
      this.handleBackToOverview();
      return;
    }

    // 返回过渡期间抑制点击
    if (this._navLock) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Avoid interactions when this container is already in article view
    const containerEl = event.currentTarget as HTMLElement | null;
    const isInArticleView = containerEl?.querySelector('.practice-article');
    if (isInArticleView) {
      return;
    }

    // Intercept share button clicks (DRY across modules)
    const shareBtn = target.closest('.overview-card__share-btn') as HTMLElement | null;
    if (shareBtn) {
      event.stopPropagation();
      event.preventDefault();
      const cardId = shareBtn.getAttribute('data-card-id');
      if (!cardId) {
        return;
      }
      // Opportunistically ensure assets are warm before opening preview
      void this.preloadForShare(cardId);
      const card = this.resolveCardById(cardId);
      if (!card) {
        return;
      }
      // lazy init
      this._shareService =
        this._shareService ||
        new GenericShareService<BaseContentCard>({
          moduleName: this.getModuleName(),
        });
      const cardEl = shareBtn.closest('.overview-card') as HTMLElement | null;
      if (cardEl && cardEl.isConnected) {
        void this._shareService.openPreview(cardEl, card);
      }
      return;
    }

    const cardId = this.extractCardId(target);
    if (!cardId) {
      return;
    }

    this.showDetailedContent(cardId);
  }

  // 提供可公开调用的方法用于根据 cardId 打开文章（用于深链接入口）
  public openArticle(cardId: string): Promise<void> {
    return this.showDetailedContent(cardId);
  }

  // 从浏览器历史导航进入时打开文章，不再 pushState，避免破坏历史栈
  public async openArticleFromHistory(cardId: string): Promise<void> {
    this._suppressHistory = true;
    try {
      await this.showDetailedContent(cardId);
    } finally {
      this._suppressHistory = false;
    }
  }

  // Default: click on whole card, fallback to action button
  protected extractCardId(target: HTMLElement): string | null {
    const cardEl = target.closest('.overview-card') as HTMLElement | null;
    if (cardEl) {
      const cardId = cardEl.getAttribute('data-card-id');
      if (!cardId) {
        console.error('卡片缺少 data-card-id 属性');
        return null;
      }
      return cardId;
    }

    const button = target.closest('.overview-card__action-btn') as HTMLElement | null;
    if (button) {
      const cardId = button.getAttribute('data-card-id');
      if (!cardId) {
        console.error('按钮缺少 data-card-id 属性');
        return null;
      }
      return cardId;
    }
    return null;
  }

  protected async showDetailedContent(cardId: string): Promise<void> {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error(`未找到容器元素: ${this.containerId}`);
      return;
    }

    try {
      // Optional pre-enter animation
      await this.beforeEnterArticle(container);

      // Styles for Markdown/hljs
      injectMarkdownStyles();

      // Loading state
      container.innerHTML = this.articleRenderer.renderLoadingState();
      // Wire back button immediately so users don't need to click twice
      this.configureBackNavigation();

      // Fetch content
      const article = await this.contentService.getArticle(cardId);

      // Static article shell
      const articleHtml = this.articleRenderer.renderArticle(article.title, article.content);
      container.innerHTML = articleHtml;

      // Render Markdown safely scoped to this container to avoid cross-module ID collisions
      const markdownContainer = container.querySelector('#markdown-content-container') as HTMLElement | null;
      if (markdownContainer) {
        const renderer = new SafeMarkdownRenderer();
        const renderedHtml = renderer.render(article.rawMarkdown);
        markdownContainer.innerHTML = `<div class="markdown-content">${renderedHtml}</div>`;
        renderer.highlightCode(markdownContainer);

        // UX enhancements
        this.addEnhancedFeatures(markdownContainer);
      }

      // Initialize copy feature for the entire article container
      if (this.articleRenderer.initializeCopyFeature) {
        this.articleRenderer.initializeCopyFeature(container, article.rawMarkdown);
      }

      // Back navigation wiring
      this.configureBackNavigation();

      // 深链接：打开文章后更新 URL 查询参数
      if (!this._suppressHistory) {
        this.updateHistoryForArticle(cardId);
      }
    } catch (error) {
      console.error('加载文章失败:', error);
      const message = error instanceof Error ? error.message : String(error);
      const errorHtml = this.articleRenderer.renderErrorState(message);
      container.innerHTML = errorHtml;
    }
  }

  // Hook: subclasses may animate/prepare before article view is entered

  protected async beforeEnterArticle(_container: HTMLElement): Promise<void> {
    // default no-op
  }

  // Back navigation using direct DOM event listeners instead of global window functions
  protected configureBackNavigation(): void {
    const containerEl = document.getElementById(this.containerId);
    if (!containerEl || !this.onBackToOverview) {
      return;
    }

    const backButton = containerEl.querySelector('[data-action="back-to-overview"]') as HTMLButtonElement | null;

    if (!backButton) {
      return;
    }

    // Remove any existing event listeners to avoid duplicates
    const existingHandler = (backButton as any)._backHandler;
    if (existingHandler) {
      backButton.removeEventListener('click', existingHandler);
      backButton.removeEventListener('pointerdown', existingHandler);
      backButton.removeEventListener('mousedown', existingHandler);
      backButton.removeEventListener('touchstart', existingHandler as EventListener, { passive: false });
    }

    // Remove any inline onclick to avoid invoking global handlers from other modules
    backButton.removeAttribute('onclick');

    // Create new handler and store reference for cleanup
    const backHandler = (ev: Event) => {
      ev.preventDefault();
      ev.stopPropagation();
      (ev as any).stopImmediatePropagation?.();
      if (this._navLock) {
        return;
      }
      this._navLock = true;

      // Cancel the next click anywhere (capture) to avoid ghost-click on new view
      const cancelNextClick = (evt: Event) => {
        evt.preventDefault();
        evt.stopPropagation();
        (evt as any).stopImmediatePropagation?.();
        document.removeEventListener('click', cancelNextClick, true);
      };
      document.addEventListener('click', cancelNextClick, true);

      this.handleBackToOverview();
      // 释放锁：动画时长 + 缓冲
      setTimeout(() => {
        this._navLock = false;
      }, EXIT_ANIMATION_DURATION + 150);
    };
    (backButton as any)._backHandler = backHandler;
    // Prefer pointerdown to避免 mouseup 在新视图触发“幽灵点击”
    backButton.addEventListener('pointerdown', backHandler);
    // Fallbacks
    backButton.addEventListener('mousedown', backHandler);
    backButton.addEventListener('touchstart', backHandler, { passive: false });
    backButton.addEventListener('click', backHandler);
  }

  protected handleBackToOverview(): void {
    if (!this.onBackToOverview) {
      return;
    }

    // Clean up copy feature before returning to overview
    if (this.articleRenderer.destroyCopyFeature) {
      this.articleRenderer.destroyCopyFeature();
    }

    const containerEl = document.getElementById(this.containerId);
    if (containerEl) {
      const articleEl = containerEl.querySelector('.practice-article') as HTMLElement | null;
      if (articleEl) {
        articleEl.classList.add('is-exiting');
        setTimeout(() => {
          // 先更新 URL,避免重新初始化时根据旧的 article 深链接再次打开文章
          this.updateHistoryForOverview();
          if (this.onBackToOverview) {
            this.onBackToOverview();
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, EXIT_ANIMATION_DURATION);
        return;
      }
    }
    // Fallback：同样先更新 URL 再返回
    this.updateHistoryForOverview();
    this.onBackToOverview();
  }

  // Shared enhancements below
  protected addEnhancedFeatures(container: HTMLElement): void {
    this.addCopyButtonsToCodeBlocks(container);
    this.addCodeBlockScrollIndicators(container);
    this.addReadingProgress();
    this.addBackToTopButton();
  }

  protected addCopyButtonsToCodeBlocks(container: HTMLElement): void {
    const codeBlocks = container.querySelectorAll('pre');
    codeBlocks.forEach(block => {
      if (!block.querySelector('.copy-button')) {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = '复制';
        copyButton.onclick = () => this.copyCodeBlock(block as HTMLElement, copyButton);
        block.appendChild(copyButton);
      }
    });
  }

  protected addCodeBlockScrollIndicators(container: HTMLElement): void {
    // Only apply on mobile devices (max-width: 768px)
    if (window.innerWidth > 768) {
      return;
    }

    const codeBlocks = container.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
      const preElement = block.querySelector('pre');
      if (!preElement) {
        return;
      }

      // Add scroll event listener to detect when user starts scrolling
      preElement.addEventListener(
        'scroll',
        () => {
          // Add scrolled class when user scrolls more than 10 pixels
          if (preElement.scrollLeft > 10) {
            block.classList.add('scrolled');
          }
        },
        { passive: true },
      );

      // Also check on initial load if content is already scrolled
      if (preElement.scrollLeft > 10) {
        block.classList.add('scrolled');
      }
    });
  }

  protected copyCodeBlock(block: HTMLElement, button: HTMLElement): void {
    const code = block.querySelector('code');
    if (code) {
      navigator.clipboard
        .writeText(code.textContent || '')
        .then(() => {
          button.textContent = '已复制';
          button.classList.add('copied');
          setTimeout(() => {
            button.textContent = '复制';
            button.classList.remove('copied');
          }, 2000);
        })
        .catch(() => {
          button.textContent = '复制失败';
          setTimeout(() => {
            button.textContent = '复制';
          }, 2000);
        });
    }
  }

  protected addReadingProgress(): void {
    const existingProgress = document.querySelector('.reading-progress');
    if (existingProgress) {
      existingProgress.remove();
    }

    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);

    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();
  }

  protected addBackToTopButton(): void {
    const existingButton = document.querySelector('.back-to-top');
    if (existingButton) {
      existingButton.remove();
    }

    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    backToTopButton.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    document.body.appendChild(backToTopButton);

    const toggleBackToTop = () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop();
  }

  // —— URL 深链接辅助方法 ——
  private updateHistoryForArticle(cardId: string): void {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('module', this.getModuleName());
      url.searchParams.set('view', 'article');
      url.searchParams.set('cardId', cardId);
      window.history.pushState({ module: this.getModuleName(), view: 'article', cardId }, '', url.toString());
    } catch {}
  }

  private updateHistoryForOverview(): void {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('module', this.getModuleName());
      url.searchParams.set('view', 'overview');
      url.searchParams.delete('cardId');
      window.history.pushState({ module: this.getModuleName(), view: 'overview' }, '', url.toString());
    } catch {}
  }
}
