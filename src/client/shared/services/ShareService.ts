/// <reference path="../types/env.d.ts" />
import type { BaseContentCard } from '../types/ContentCard';
import { StyleManager } from './share/StyleManager';
import { CanvasRenderer, type RenderContext } from './share/CanvasRenderer';
import { LayoutCalculator, type CanvasSize, type ImageDisplayInfo } from './share/LayoutCalculator';
import { ImageManager } from './share/ImageManager';
import { LayoutService } from './share/LayoutService';
import { CompactRenderer } from './share/CompactRenderer';

export type ShareResult = { method: 'clipboard' | 'download'; ok: boolean };

export type ShareServiceOptions<T extends BaseContentCard = BaseContentCard> = {
  // Optional module name for deep link building, e.g. 'best-practices'
  moduleName?: string;
  // Optional custom deep link builder. If provided, takes precedence.
  deepLinkBuilder?: (card: T) => string;
};

export class ShareService<T extends BaseContentCard = BaseContentCard> {
  private styleManager: StyleManager;
  private canvasRenderer: CanvasRenderer;
  private layoutCalculator: LayoutCalculator;
  private imageManager: ImageManager;
  private layoutService: LayoutService;
  private compactRenderer: CompactRenderer;
  private readonly getIcon: (category: string) => string;
  private readonly options: ShareServiceOptions<T>;

  constructor(getIcon: (category: string) => string, options: ShareServiceOptions<T> = {}) {
    this.getIcon = getIcon;
    this.options = options;
    this.styleManager = new StyleManager();
    this.canvasRenderer = new CanvasRenderer();
    this.layoutCalculator = new LayoutCalculator();
    this.imageManager = new ImageManager();
    this.layoutService = new LayoutService();
    this.compactRenderer = new CompactRenderer();
  }

  public async shareCard(card: T): Promise<ShareResult> {
    const canvas = await this.renderCanvas(card);
    const blob = await new Promise<Blob>((resolve) =>
      canvas.toBlob((b) => resolve(b as Blob), 'image/png', 0.95)
    );
    try {
      // ClipboardItem may not exist in Safari
      // @ts-ignore
      if (navigator.clipboard && window.ClipboardItem) {
        // @ts-ignore
        const item = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([item]);
        this.toast('已复制到剪贴板');
        return { method: 'clipboard', ok: true };
      }
      throw new Error('Clipboard API not supported');
    } catch {
      // Fallback to download
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const safeTitle = (card.title || 'share').replace(/[\n\t\s]+/g, '_').slice(0, 60);
      a.download = `${safeTitle}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      this.toast('已下载图片（剪贴板不可用）');
      return { method: 'download', ok: true };
    }
  }

  // Open a preview modal to let users confirm and choose action
  public async openPreview(card: T, opts?: { matchElement?: HTMLElement }): Promise<void> {
    // Analyze page image display for consistent rendering
    const pageImageInfo = this.layoutCalculator.analyzePageImageDisplay(opts?.matchElement, (card as any).imageUrl);

    // Calculate optimal canvas size based on page element
    const baseSize = this.layoutCalculator.computeCanvasSize(opts?.matchElement);

    // Measure content height to ensure no clipping
    const measuredHeight = await this.layoutCalculator.measureContentHeight(card, baseSize.width, pageImageInfo, this.getIcon);
    const finalSize = { width: baseSize.width, height: Math.max(baseSize.height, measuredHeight) };

    const canvas = await this.renderCanvas(card, finalSize, pageImageInfo);
    const blob = await new Promise<Blob>((resolve) =>
      canvas.toBlob((b) => resolve(b as Blob), 'image/png', 0.95)
    );

    const overlay = document.createElement('div');
    overlay.className = 'share-preview-overlay';
    overlay.tabIndex = -1;

    const modal = document.createElement('div');
    modal.className = 'share-preview-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', '分享预览');

    const header = document.createElement('div');
    header.className = 'share-preview-header';
    header.innerHTML = `
      <div class="share-preview-title">分享预览</div>
      <button class="share-preview-close" aria-label="关闭预览" title="关闭">×</button>
    `;

    const body = document.createElement('div');
    body.className = 'share-preview-body';
    // Use the canvas directly for crisp preview; scale to match on-page card CSS width
    const previewWrapper = document.createElement('div');
    previewWrapper.className = 'share-preview-canvas-wrap';
    // Set canvas CSS width to the on-page card width (or sensible fallback), keep height auto
    try {
      const rect = opts?.matchElement?.getBoundingClientRect();
      const dpr = Math.max(2, Math.ceil((window as any).devicePixelRatio || 2));
      const desiredCssWidth = rect ? Math.round(rect.width) : Math.round(finalSize.width / dpr);
      const cssWidth = Math.min(720, desiredCssWidth); // do not exceed modal's intended preview width
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = 'auto';
    } catch {}
    previewWrapper.appendChild(canvas);
    body.appendChild(previewWrapper);

    const actions = document.createElement('div');
    actions.className = 'share-preview-actions';
    const copyBtn = document.createElement('button');
    copyBtn.className = 'share-action primary';
    copyBtn.textContent = '复制到剪贴板';
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'share-action';
    downloadBtn.textContent = '下载图片';
    const copyLinkBtn = document.createElement('button');
    copyLinkBtn.className = 'share-action';
    copyLinkBtn.textContent = '复制链接';
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'share-action subtle';
    cancelBtn.textContent = '取消';
    actions.append(copyBtn, downloadBtn, copyLinkBtn, cancelBtn);

    modal.append(header, body, actions);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const cleanup = () => overlay.remove();

    // Close interactions
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) cleanup();
    });
    header.querySelector('.share-preview-close')?.addEventListener('click', cleanup);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        cleanup();
        document.removeEventListener('keydown', onKey);
      }
    };
    document.addEventListener('keydown', onKey);

    // Actions
    copyBtn.addEventListener('click', async () => {
      const ok = await this.tryClipboard(blob);
      if (ok) {
        this.toast('已复制到剪贴板');
        cleanup();
      } else {
        this.toast('剪贴板不可用，已自动下载');
        this.triggerDownload(blob, card.title);
        cleanup();
      }
    });
    downloadBtn.addEventListener('click', () => {
      this.triggerDownload(blob, card.title);
      this.toast('已开始下载');
      cleanup();
    });
    copyLinkBtn.addEventListener('click', async () => {
      try {
        const link = this.buildDeepLink(card);
        await navigator.clipboard.writeText(link);
        this.toast('链接已复制');
      } catch {
        this.toast('复制链接失败');
      }
    });
    cancelBtn.addEventListener('click', cleanup);

    // Focus for accessibility
    (header.querySelector('.share-preview-close') as HTMLButtonElement)?.focus();
  }

  private async tryClipboard(blob: Blob): Promise<boolean> {
    try {
      // @ts-ignore
      if (navigator.clipboard && window.ClipboardItem) {
        // @ts-ignore
        const item = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([item]);
        return true;
      }
    } catch {
      // ignore
    }
    return false;
  }

  private triggerDownload(blob: Blob, title?: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const safeTitle = (title || 'share').replace(/[\n\t\s]+/g, '_').slice(0, 60);
    a.download = `${safeTitle}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  private async renderCanvas(
    card: T,
    size?: CanvasSize,
    pageImageInfo?: ImageDisplayInfo
  ): Promise<HTMLCanvasElement> {
    const canvas = document.createElement('canvas');
    const finalSize = size ?? this.layoutCalculator.defaultCanvasSize;
    canvas.width = finalSize.width;
    canvas.height = finalSize.height;

    // Ensure fonts loaded for consistent rendering
    try { await (document as any).fonts?.ready; } catch {}

    // Use the new CompactRenderer for improved layout
    await this.compactRenderer.renderCard(card, canvas, this.getIcon, pageImageInfo);

    return canvas;
  }


  // 分析页面中图片的实际显示尺寸和比例
  private analyzePageImageDisplay(matchEl?: HTMLElement, imageUrl?: string): {
    pageImageAspect?: number;
    pageImageWidth?: number;
    pageImageHeight?: number;
  } {
    try {
      if (!matchEl || !imageUrl) return {};
      
      const coverEl = matchEl.querySelector('.overview-card__cover') as HTMLElement;
      const imgEl = coverEl?.querySelector('img') as HTMLImageElement;
      
      if (imgEl && imgEl.complete && imgEl.naturalWidth > 0) {
        const rect = imgEl.getBoundingClientRect();
        const pageImageAspect = rect.height / rect.width;
        
        // 确保获取的是有效的显示尺寸
        if (rect.width > 0 && rect.height > 0) {
          if (process.env.NODE_ENV === 'development') {
            console.debug(`Page image display analysis:`, {
              naturalSize: `${imgEl.naturalWidth}x${imgEl.naturalHeight}`,
              displaySize: `${rect.width.toFixed(1)}x${rect.height.toFixed(1)}`,
              pageAspect: pageImageAspect.toFixed(3),
              naturalAspect: (imgEl.naturalHeight / imgEl.naturalWidth).toFixed(3),
              cssStyle: `height: ${getComputedStyle(imgEl).height}, object-fit: ${getComputedStyle(imgEl).objectFit}`
            });
          }
          
          return {
            pageImageAspect,
            pageImageWidth: rect.width,
            pageImageHeight: rect.height
          };
        }
      }
      
      // 如果图片还没有加载完成，等待一下再尝试
      if (imgEl && !imgEl.complete) {
        if (process.env.NODE_ENV === 'development') {
          console.debug('Image not fully loaded, analysis may be incomplete');
        }
      }
      
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to analyze page image display:', error);
      }
    }
    
    return {};
  }

  private async loadImage(url: string): Promise<HTMLImageElement> {
    await new Promise<void>((resolve) => setTimeout(resolve, 0)); // yield
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('image load failed'));
      img.src = this.resolveImageUrl(url);
    });
  }

  private resolveImageUrl(url: string): string {
    try {
      const abs = new URL(url, window.location.href);
      if (abs.origin !== window.location.origin && abs.protocol === 'https:') {
        return `/img-proxy?src=${encodeURIComponent(abs.toString())}`;
      }
      return abs.toString();
    } catch {
      // If URL parsing fails, fall back to original. Upstream load will error and trigger placeholder.
      return url;
    }
  }

  private buildDeepLink(card: T): string {
    try {
      if (this.options.deepLinkBuilder) return this.options.deepLinkBuilder(card);
      const url = new URL(window.location.href);
      const moduleName = this.options.moduleName || 'best-practices';
      url.searchParams.set('module', moduleName);
      url.searchParams.set('view', 'article');
      url.searchParams.set('cardId', (card as any).id || '');
      return url.toString();
    } catch {
      return window.location.href;
    }
  }

  private toast(message: string) {
    const el = document.createElement('div');
    el.textContent = message;
    el.style.position = 'fixed';
    el.style.left = '50%';
    el.style.top = '16px';
    el.style.transform = 'translateX(-50%)';
    el.style.background = 'rgba(17, 24, 39, 0.9)';
    el.style.color = '#fff';
    el.style.padding = '8px 12px';
    el.style.borderRadius = '8px';
    el.style.fontSize = '14px';
    el.style.zIndex = '9999';
    el.style.pointerEvents = 'none';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1800);
  }
}
