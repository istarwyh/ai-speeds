import type { BaseContentCard } from '../types/ContentCard';
import html2canvas from 'html2canvas';
import { resolveProxiedUrl } from '../utils/image';

export type ShareResult = { method: 'clipboard' | 'download'; ok: boolean };

export type ShareServiceOptions<T extends BaseContentCard = BaseContentCard> = {
  moduleName?: string;
  deepLinkBuilder?: (card: T) => string;
};

/**
 * ShareService - React 最佳实践重构版本
 * 使用 html2canvas 将 React 组件转换为图片
 */
export class ShareService<T extends BaseContentCard = BaseContentCard> {
  private readonly options: ShareServiceOptions<T>;

  constructor(options: ShareServiceOptions<T> = {}) {
    this.options = options;
  }

  // 移除/清空外部资源，作为兜底方案（图片缺失但不阻塞分享）
  private stripAssets(container: HTMLElement): void {
    try {
      container.querySelectorAll('img, picture, source').forEach(el => el.remove());
      container.querySelectorAll<HTMLElement>('*').forEach(el => {
        el.style.backgroundImage = 'none';
      });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn('ShareService.stripAssets failed:', error);
      }
    }
  }

  // 移除动画和过渡效果,确保克隆元素完全可见
  private stripAnimations(container: HTMLElement): void {
    try {
      container.querySelectorAll<HTMLElement>('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
        el.style.transform = 'none';
        // 确保所有元素都是可见的
        const computedOpacity = window.getComputedStyle(el).opacity;
        if (computedOpacity === '0') {
          el.style.opacity = '1';
        }
      });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn('ShareService.stripAnimations failed:', error);
      }
    }
  }

  // 将外部资源统一改写为本地代理，避免 CORS 污染
  private rewriteAssets(container: HTMLElement): void {
    try {
      // <img>
      const imgs = container.querySelectorAll('img');
      imgs.forEach(img => {
        const src = img.getAttribute('src') || '';
        if (!src) {
          return;
        }
        img.crossOrigin = 'anonymous';
        if (img.hasAttribute('srcset')) {
          img.removeAttribute('srcset');
        }
        img.setAttribute('src', resolveProxiedUrl(src));
      });

      // <source srcset>
      const sources = container.querySelectorAll('source');
      sources.forEach(source => {
        const srcset = source.getAttribute('srcset');
        if (!srcset) {
          return;
        }
        const rewritten = srcset
          .split(',')
          .map(item => {
            const parts = item.trim().split(/\s+/);
            if (!parts[0]) {
              return item;
            }
            parts[0] = resolveProxiedUrl(parts[0]);
            return parts.join(' ');
          })
          .join(', ');
        source.setAttribute('srcset', rewritten);
      });

      // background-image（使用计算样式，覆盖为内联样式）
      const all = container.querySelectorAll<HTMLElement>('*');
      all.forEach(el => {
        const bg = window.getComputedStyle(el).backgroundImage || '';
        if (!bg || bg === 'none') {
          return;
        }
        const rewritten = bg.replace(/url\(("|')?(.*?)(\1)?\)/g, (_m, _q, url) => `url(${resolveProxiedUrl(url)})`);
        if (rewritten !== bg) {
          el.style.backgroundImage = rewritten;
        }
      });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn('ShareService.rewriteAssets failed:', error);
      }
    }
  }

  /**
   * 分享卡片 - 从 React 组件元素生成图片
   */
  public async shareCard(cardElement: HTMLElement): Promise<ShareResult> {
    const canvas = await this.renderCanvas(cardElement);
    const blob = await this.canvasToBlob(canvas);

    try {
      if (await this.tryClipboard(blob)) {
        this.toast('已复制到剪贴板');
        return { method: 'clipboard', ok: true };
      }
      throw new Error('Clipboard API not supported');
    } catch {
      this.triggerDownload(blob, 'share-card');
      this.toast('已下载图片（剪贴板不可用）');
      return { method: 'download', ok: true };
    }
  }

  /**
   * 打开预览弹窗
   */
  public async openPreview(cardElement: HTMLElement, card: T, opts?: { onClose?: () => void }): Promise<void> {
    try {
      const canvas = await this.renderCanvas(cardElement);
      const blob = await this.canvasToBlob(canvas);

      const overlay = this.createOverlay();
      const { modal, buttons } = this.createModal(canvas);

      overlay.appendChild(modal);
      document.body.appendChild(overlay);

      const cleanup = () => {
        overlay.remove();
        opts?.onClose?.();
      };

      this.attachEventListeners(overlay, modal, blob, card, cleanup, buttons);

      // Focus for accessibility
      const closeBtn = modal.querySelector('.share-preview-close') as HTMLButtonElement;
      closeBtn?.focus();
    } catch (err) {
      this.toast('预览生成失败，请稍后重试');
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn('openPreview failed:', err);
      }
    }
  }

  /**
   * 使用 html2canvas 渲染 React 组件为 Canvas
   */
  private async renderCanvas(element: HTMLElement): Promise<HTMLCanvasElement> {
    // 确保字体加载完成
    try {
      await (document as any).fonts?.ready;
    } catch {}

    // 获取原始元素的尺寸和样式
    const rect = element.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(element);

    // Debug: 输出元素尺寸信息
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('renderCanvas - element:', element);
      // eslint-disable-next-line no-console
      console.log('renderCanvas - rect:', rect);
      // eslint-disable-next-line no-console
      console.log('renderCanvas - computedStyle.display:', computedStyle.display);
    }

    const snapshot = async (target: HTMLElement): Promise<HTMLCanvasElement> =>
      html2canvas(target, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: process.env.NODE_ENV === 'development',
        useCORS: true,
        allowTaint: false,
        imageTimeout: 15000,
        removeContainer: true,
        width: rect.width,
        height: rect.height,
        onclone: (_clonedDoc: Document, clonedElement: HTMLElement) => {
          // 确保克隆文档中的元素可见且样式正确
          clonedElement.style.visibility = 'visible';
          clonedElement.style.opacity = '1';
          clonedElement.style.display = computedStyle.display;

          if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.log('onclone - clonedElement:', clonedElement);
            // eslint-disable-next-line no-console
            console.log('onclone - computed width:', window.getComputedStyle(clonedElement).width);
            // eslint-disable-next-line no-console
            console.log('onclone - computed height:', window.getComputedStyle(clonedElement).height);
            // eslint-disable-next-line no-console
            console.log('onclone - innerHTML length:', clonedElement.innerHTML.length);
          }
        },
      });

    // 离屏克隆方案，规避跨域图片和 DOM 分离问题
    const offscreen = document.createElement('div');
    // 关键修复:使用opacity:0代替visibility:hidden,确保Tailwind CSS类和响应式样式正确应用
    offscreen.style.cssText =
      'position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-9999;overflow:hidden;';

    const clone = element.cloneNode(true) as HTMLElement;
    // 保留原始元素的关键样式（只复制核心布局属性,减少性能开销）
    clone.style.width = `${rect.width}px`;
    clone.style.height = `${rect.height}px`;
    clone.style.display = computedStyle.display;
    clone.style.position = 'relative';
    clone.style.visibility = 'visible'; // 确保克隆元素可见
    clone.style.opacity = '1'; // 强制可见,覆盖动画的opacity:0
    clone.style.animation = 'none'; // 移除动画,避免opacity:0
    clone.style.transform = 'none'; // 重置transform,避免动画偏移

    offscreen.appendChild(clone);
    document.body.appendChild(offscreen);

    // 移除所有动画,确保元素完全可见
    this.stripAnimations(offscreen);

    // Rewrite assets to avoid CORS taint
    this.rewriteAssets(offscreen);

    // 等待所有图片加载完成
    const images = offscreen.querySelectorAll('img');
    await Promise.all(
      Array.from(images).map(img => {
        if (img.complete) {
          return Promise.resolve();
        }
        return new Promise<void>(resolve => {
          const timeout = setTimeout(() => resolve(), 3000);
          img.onload = () => {
            clearTimeout(timeout);
            resolve();
          };
          img.onerror = () => {
            clearTimeout(timeout);
            resolve();
          };
        });
      }),
    );

    try {
      return await snapshot(clone);
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('html2canvas failed, retrying without external assets:', err);
      }
      // 如果代理资源仍失败，移除外部资源后重试
      this.stripAssets(offscreen);
      return await snapshot(clone);
    } finally {
      offscreen.remove();
    }
  }

  /**
   * Canvas 转 Blob
   */
  private async canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob> {
    return new Promise<Blob>(resolve => {
      canvas.toBlob(blob => resolve(blob as Blob), 'image/png', 0.95);
    });
  }

  /**
   * 尝试复制到剪贴板
   */
  private async tryClipboard(blob: Blob): Promise<boolean> {
    try {
      // @ts-ignore - ClipboardItem may not be available in all browsers
      if (navigator.clipboard && window.ClipboardItem) {
        // @ts-ignore
        const item = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([item]);
        return true;
      }
    } catch {
      // Clipboard API not supported or permission denied
    }
    return false;
  }

  /**
   * 触发下载
   */
  private triggerDownload(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const safeFilename = filename.replace(/[\n\t\s]+/g, '_').slice(0, 60);
    a.download = `${safeFilename}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  /**
   * 创建遮罩层
   */
  private createOverlay(): HTMLDivElement {
    const overlay = document.createElement('div');
    overlay.className = 'share-preview-overlay';
    overlay.tabIndex = -1;
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    `;
    return overlay;
  }

  /**
   * 创建弹窗
   */
  private createModal(canvas: HTMLCanvasElement): {
    modal: HTMLDivElement;
    buttons: {
      copyBtn: HTMLButtonElement;
      downloadBtn: HTMLButtonElement;
      copyLinkBtn: HTMLButtonElement;
      cancelBtn: HTMLButtonElement;
    };
  } {
    const modal = document.createElement('div');
    modal.className = 'share-preview-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', '分享预览');
    modal.style.cssText = `
      background: white;
      border-radius: 16px;
      max-width: 90vw;
      max-height: 90vh;
      overflow: auto;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      position: relative;
      z-index: 10000;
    `;

    const header = document.createElement('div');
    header.className = 'share-preview-header';
    header.style.cssText = `
      padding: 20px 24px;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `;

    const title = document.createElement('div');
    title.style.cssText = 'font-size: 18px; font-weight: 600; color: #0f172a;';
    title.textContent = '分享预览';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'share-preview-close';
    closeBtn.setAttribute('aria-label', '关闭预览');
    closeBtn.textContent = '×';
    closeBtn.style.cssText = `
      background: none;
      border: none;
      font-size: 28px;
      line-height: 1;
      cursor: pointer;
      color: #64748b;
      padding: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      transition: all 0.2s;
    `;
    closeBtn.onmouseover = () => (closeBtn.style.background = '#f1f5f9');
    closeBtn.onmouseout = () => (closeBtn.style.background = 'none');

    header.appendChild(title);
    header.appendChild(closeBtn);

    const body = document.createElement('div');
    body.className = 'share-preview-body';
    body.style.cssText = `
      padding: 24px;
      display: flex;
      justify-content: center;
    `;
    const canvasWrapper = document.createElement('div');
    canvasWrapper.style.cssText = `
      max-width: 100%;
      overflow: auto;
      display: flex;
      justify-content: center;
    `;
    canvas.style.cssText = `
      width: auto;
      height: auto;
      max-width: min(${canvas.width / 2}px, 90vw - 48px);
      max-height: calc(90vh - 200px);
      display: block;
      border-radius: 8px;
      object-fit: contain;
    `;
    canvasWrapper.appendChild(canvas);
    body.appendChild(canvasWrapper);

    const actions = document.createElement('div');
    actions.className = 'share-preview-actions';
    actions.style.cssText = `
      padding: 20px 24px;
      border-top: 1px solid #e2e8f0;
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    `;

    const buttonStyle = `
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    `;

    const copyBtn = document.createElement('button');
    copyBtn.className = 'share-action primary';
    copyBtn.setAttribute('data-action', 'copy');
    copyBtn.textContent = '复制到剪贴板';
    copyBtn.style.cssText = buttonStyle + 'background: #0ea5e9; color: white;';
    copyBtn.onmouseover = () => (copyBtn.style.background = '#0284c7');
    copyBtn.onmouseout = () => (copyBtn.style.background = '#0ea5e9');

    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'share-action';
    downloadBtn.setAttribute('data-action', 'download');
    downloadBtn.textContent = '下载图片';
    downloadBtn.style.cssText = buttonStyle + 'background: #f1f5f9; color: #0f172a;';
    downloadBtn.onmouseover = () => (downloadBtn.style.background = '#e2e8f0');
    downloadBtn.onmouseout = () => (downloadBtn.style.background = '#f1f5f9');

    const copyLinkBtn = document.createElement('button');
    copyLinkBtn.className = 'share-action';
    copyLinkBtn.setAttribute('data-action', 'copy-link');
    copyLinkBtn.textContent = '复制链接';
    copyLinkBtn.style.cssText = buttonStyle + 'background: #f1f5f9; color: #0f172a;';
    copyLinkBtn.onmouseover = () => (copyLinkBtn.style.background = '#e2e8f0');
    copyLinkBtn.onmouseout = () => (copyLinkBtn.style.background = '#f1f5f9');

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'share-action subtle';
    cancelBtn.setAttribute('data-action', 'cancel');
    cancelBtn.textContent = '取消';
    cancelBtn.style.cssText = buttonStyle + 'background: transparent; color: #64748b;';
    cancelBtn.onmouseover = () => (cancelBtn.style.background = '#f1f5f9');
    cancelBtn.onmouseout = () => (cancelBtn.style.background = 'transparent');

    actions.append(copyBtn, downloadBtn, copyLinkBtn, cancelBtn);
    modal.append(header, body, actions);

    return {
      modal,
      buttons: { copyBtn, downloadBtn, copyLinkBtn, cancelBtn },
    };
  }

  /**
   * 绑定事件监听器
   */
  private attachEventListeners(
    overlay: HTMLElement,
    modal: HTMLElement,
    blob: Blob,
    card: T,
    cleanup: () => void,
    buttons: {
      copyBtn: HTMLButtonElement;
      downloadBtn: HTMLButtonElement;
      copyLinkBtn: HTMLButtonElement;
      cancelBtn: HTMLButtonElement;
    },
  ): void {
    // Close on overlay click
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        cleanup();
      }
    });

    // Close button
    modal.querySelector('.share-preview-close')?.addEventListener('click', cleanup);

    // Escape key
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        cleanup();
        document.removeEventListener('keydown', onKey);
      }
    };
    document.addEventListener('keydown', onKey);

    // Copy to clipboard
    buttons.copyBtn.addEventListener('click', async () => {
      const ok = await this.tryClipboard(blob);
      if (ok) {
        this.toast('已复制到剪贴板');
        cleanup();
      } else {
        this.toast('剪贴板不可用，已自动下载');
        this.triggerDownload(blob, (card.title as string) || 'share-card');
        cleanup();
      }
    });

    // Download
    buttons.downloadBtn.addEventListener('click', () => {
      this.triggerDownload(blob, (card.title as string) || 'share-card');
      this.toast('已开始下载');
      cleanup();
    });

    // Copy link
    buttons.copyLinkBtn.addEventListener('click', async () => {
      try {
        const link = this.buildDeepLink(card);
        await navigator.clipboard.writeText(link);
        this.toast('链接已复制');
      } catch {
        this.toast('复制链接失败');
      }
    });

    // Cancel
    buttons.cancelBtn.addEventListener('click', cleanup);
  }

  /**
   * 构建深度链接
   */
  private buildDeepLink(card: T): string {
    try {
      if (this.options.deepLinkBuilder) {
        return this.options.deepLinkBuilder(card);
      }
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

  /**
   * 显示提示消息
   */
  private toast(message: string): void {
    const el = document.createElement('div');
    el.textContent = message;
    el.style.cssText = `
      position: fixed;
      left: 50%;
      top: 16px;
      transform: translateX(-50%);
      background: rgba(17, 24, 39, 0.9);
      color: #fff;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 14px;
      z-index: 10000;
      pointer-events: none;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1800);
  }
}
