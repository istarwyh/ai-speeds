import type { BaseContentCard } from '../types/ContentCard';
import html2canvas from 'html2canvas';

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
    const canvas = await this.renderCanvas(cardElement);
    const blob = await this.canvasToBlob(canvas);

    const overlay = this.createOverlay();
    const modal = this.createModal(canvas);

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const cleanup = () => {
      overlay.remove();
      opts?.onClose?.();
    };

    this.attachEventListeners(overlay, modal, blob, card, cleanup);

    // Focus for accessibility
    const closeBtn = modal.querySelector('.share-preview-close') as HTMLButtonElement;
    closeBtn?.focus();
  }

  /**
   * 使用 html2canvas 渲染 React 组件为 Canvas
   */
  private async renderCanvas(element: HTMLElement): Promise<HTMLCanvasElement> {
    // 确保字体加载完成
    try {
      await (document as any).fonts?.ready;
    } catch {
      // Ignore font loading errors
    }

    // 使用 html2canvas 转换 DOM 为 Canvas
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2, // 2x for retina displays
      logging: false,
      useCORS: true, // 允许跨域图片
      allowTaint: false,
      imageTimeout: 15000,
      removeContainer: true,
    });

    return canvas;
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
      backdrop-filter: blur(4px);
    `;
    return overlay;
  }

  /**
   * 创建弹窗
   */
  private createModal(canvas: HTMLCanvasElement): HTMLDivElement {
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
    header.innerHTML = `
      <div style="font-size: 18px; font-weight: 600; color: #0f172a;">分享预览</div>
      <button class="share-preview-close" aria-label="关闭预览" style="
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
      " onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='none'">×</button>
    `;

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
    `;
    canvas.style.cssText = `
      max-width: 100%;
      height: auto;
      display: block;
      border-radius: 8px;
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
    copyBtn.textContent = '复制到剪贴板';
    copyBtn.style.cssText =
      buttonStyle + 'background: #0ea5e9; color: white;' + 'onmouseover="this.style.background=\'#0284c7\'"';
    copyBtn.onmouseover = () => (copyBtn.style.background = '#0284c7');
    copyBtn.onmouseout = () => (copyBtn.style.background = '#0ea5e9');

    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'share-action';
    downloadBtn.textContent = '下载图片';
    downloadBtn.style.cssText = buttonStyle + 'background: #f1f5f9; color: #0f172a;';
    downloadBtn.onmouseover = () => (downloadBtn.style.background = '#e2e8f0');
    downloadBtn.onmouseout = () => (downloadBtn.style.background = '#f1f5f9');

    const copyLinkBtn = document.createElement('button');
    copyLinkBtn.className = 'share-action';
    copyLinkBtn.textContent = '复制链接';
    copyLinkBtn.style.cssText = buttonStyle + 'background: #f1f5f9; color: #0f172a;';
    copyLinkBtn.onmouseover = () => (copyLinkBtn.style.background = '#e2e8f0');
    copyLinkBtn.onmouseout = () => (copyLinkBtn.style.background = '#f1f5f9');

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'share-action subtle';
    cancelBtn.textContent = '取消';
    cancelBtn.style.cssText = buttonStyle + 'background: transparent; color: #64748b;';
    cancelBtn.onmouseover = () => (cancelBtn.style.background = '#f1f5f9');
    cancelBtn.onmouseout = () => (cancelBtn.style.background = 'transparent');

    actions.append(copyBtn, downloadBtn, copyLinkBtn, cancelBtn);
    modal.append(header, body, actions);

    return modal;
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
    modal.querySelector('.share-action.primary')?.addEventListener('click', async () => {
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
    const downloadBtn = Array.from(modal.querySelectorAll('.share-action')).find(btn => btn.textContent === '下载图片');
    downloadBtn?.addEventListener('click', () => {
      this.triggerDownload(blob, (card.title as string) || 'share-card');
      this.toast('已开始下载');
      cleanup();
    });

    // Copy link
    const copyLinkBtn = Array.from(modal.querySelectorAll('.share-action')).find(btn => btn.textContent === '复制链接');
    copyLinkBtn?.addEventListener('click', async () => {
      try {
        const link = this.buildDeepLink(card);
        await navigator.clipboard.writeText(link);
        this.toast('链接已复制');
      } catch {
        this.toast('复制链接失败');
      }
    });

    // Cancel
    modal.querySelector('.share-action.subtle')?.addEventListener('click', cleanup);
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
