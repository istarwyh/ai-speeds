/// <reference path="../../types/env.d.ts" />
import type { BaseContentCard } from '../../types/ContentCard';

export interface CanvasSize {
  width: number;
  height: number;
}

export interface ElementBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ImageDisplayInfo {
  pageImageAspect?: number;
  pageImageWidth?: number;
  pageImageHeight?: number;
}

export class LayoutCalculator {
  private readonly defaultWidth = 1080;
  private readonly defaultHeight = 1440;
  private readonly padding = 72;

  // Calculate optimal canvas size based on page element
  public computeCanvasSize(matchEl?: HTMLElement): CanvasSize {
    try {
      if (matchEl) {
        const rect = matchEl.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          const aspect = rect.height / rect.width;
          const dpr = Math.max(2, Math.ceil((window as any).devicePixelRatio || 2));
          const width = Math.min(1440, Math.max(720, Math.round(rect.width * dpr)));
          
          // Enhanced height calculation with better spacing
          const qrReserve = this.padding + 220 + 32; // padding + qrSize + enhanced gap
          const minHeight = Math.max(1200, Math.round(width * 0.9));
          const height = Math.max(minHeight, Math.round(width * aspect) + qrReserve);
          
          if (process.env.NODE_ENV === 'development') {
            console.debug(`Canvas size: ${width}x${height} (aspect: ${aspect.toFixed(2)}) from page: ${rect.width.toFixed(1)}x${rect.height.toFixed(1)} (dpr:${dpr})`);
          }
          
          return { width, height };
        }
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Failed to compute canvas size from element:', error);
      }
    }
    return { width: this.defaultWidth, height: this.defaultHeight };
  }

  // Analyze page image display for consistent rendering
  public analyzePageImageDisplay(matchEl?: HTMLElement, imageUrl?: string): ImageDisplayInfo {
    try {
      if (!matchEl || !imageUrl) return {};
      
      const coverEl = matchEl.querySelector('.overview-card__cover') as HTMLElement;
      const imgEl = coverEl?.querySelector('img') as HTMLImageElement;
      
      if (imgEl && imgEl.complete && imgEl.naturalWidth > 0) {
        const rect = imgEl.getBoundingClientRect();
        
        if (rect.width > 0 && rect.height > 0) {
          const pageImageAspect = rect.height / rect.width;
          
          if (process.env.NODE_ENV === 'development') {
            console.debug(`Image analysis:`, {
              naturalSize: `${imgEl.naturalWidth}x${imgEl.naturalHeight}`,
              displaySize: `${rect.width.toFixed(1)}x${rect.height.toFixed(1)}`,
              pageAspect: pageImageAspect.toFixed(3),
              naturalAspect: (imgEl.naturalHeight / imgEl.naturalWidth).toFixed(3)
            });
          }
          
          return {
            pageImageAspect,
            pageImageWidth: rect.width,
            pageImageHeight: rect.height
          };
        }
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Failed to analyze page image display:', error);
      }
    }
    
    return {};
  }

  // Calculate content height for dynamic canvas sizing
  public async measureContentHeight<T extends BaseContentCard>(
    card: T,
    width: number,
    pageImageInfo?: ImageDisplayInfo,
    getIcon?: (category: string) => string
  ): Promise<number> {
    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 2;
    const ctx = canvas.getContext('2d')!;

    try { 
      await (document as any).fonts?.ready; 
    } catch {}

    let y = this.padding;
    
    // Header area
    const headerHeight = 200;
    y += headerHeight - this.padding; // Adjust for header overlap

    // Icon and title area
    const iconRadius = 44;
    const titleX = this.padding + iconRadius + iconRadius + 24;
    const titleMaxWidth = width - titleX - this.padding;

    // Title measurement
    ctx.font = 'bold 48px ui-sans-serif, -apple-system, system-ui, Segoe UI, Roboto';
    const titleLines = this.splitLines(ctx, card.title || '', titleMaxWidth, 2);
    y += 8 + 24 + Math.min(titleLines.length, 2) * 56;

    // Meta area (difficulty + read time)
    // 不再展示难度与阅读时间，改为保留更小的过渡间距
    y += 24;

    // Description/Overview
    const bodyMaxWidth = width - this.padding * 2;
    ctx.font = '32px ui-sans-serif, -apple-system, system-ui';
    
    if ((card as any).description) {
      const lines = this.splitLines(ctx, (card as any).description, bodyMaxWidth, 3);
      y += 24 + Math.min(lines.length, 3) * 44;
    } else if ((card as any).overview) {
      const lines = this.splitLines(ctx, (card as any).overview, bodyMaxWidth, 3);
      y += 24 + Math.min(lines.length, 3) * 44;
    }

    // Cover image
    if ((card as any).imageUrl) {
      y += 12;
      let coverHeight = 0;
      
      if (pageImageInfo?.pageImageWidth && pageImageInfo?.pageImageHeight) {
        const pageAspect = pageImageInfo.pageImageHeight / pageImageInfo.pageImageWidth;
        coverHeight = Math.round((width - this.padding * 2) * pageAspect);
      } else {
        // Fallback to reasonable default or load image for natural aspect
        coverHeight = 220;
      }
      
      y += coverHeight + 12;
    }

    // Tips
    const tips = (card.tips || []);
    if (tips.length) {
      y += 24;
      ctx.font = '28px ui-sans-serif, -apple-system, system-ui';
      const lineHeight = 40;
      const padding = 16;
      
      tips.forEach((tip) => {
        const text = tip.title + '：' + tip.content;
        const lines = this.splitLines(ctx, text, bodyMaxWidth - padding * 2);
        const boxHeight = lines.length * lineHeight + padding * 2;
        y += boxHeight + 16;
      });
    }

    // Tags
    const tags = (card.tags || []);
    if (tags.length) {
      y += 16;
      ctx.font = '26px ui-sans-serif, -apple-system, system-ui';
      
      let currentX = this.padding;
      let currentY = y;
      const tagHeight = 40;
      const lineGap = 12;
      const paddingX = 18;
      
      tags.forEach((tag) => {
        const tagWidth = ctx.measureText(tag).width + paddingX * 2;
        if (currentX + tagWidth > this.padding + bodyMaxWidth) {
          currentX = this.padding;
          currentY += tagHeight + lineGap;
        }
        currentX += tagWidth + 12;
      });
      
      y = currentY + tagHeight + 16;
    }

    // QR area reserve
    const qrSize = 220;
    const contentBottom = y + 24;
    const brandAreaHeight = 60; // Enhanced brand area
    const requiredHeight = contentBottom + qrSize + this.padding + brandAreaHeight;
    
    return Math.ceil(requiredHeight);
  }

  // Calculate element positioning
  public calculateIconPosition(padding: number, radius: number): { x: number; y: number } {
    return {
      x: padding + radius,
      y: padding + radius
    };
  }

  public calculateTitleBounds(iconPos: { x: number; y: number }, iconRadius: number, canvasWidth: number, padding: number): ElementBounds {
    const titleX = iconPos.x + iconRadius + 24;
    return {
      x: titleX,
      y: iconPos.y - iconRadius,
      width: canvasWidth - titleX - padding,
      height: iconRadius * 2
    };
  }

  public calculateQRPosition(canvasWidth: number, canvasHeight: number, qrSize: number, padding: number, contentBottom: number): { x: number; y: number } {
    const qrX = canvasWidth - padding - qrSize;
    let qrY = canvasHeight - padding - qrSize - 60; // Reserve space for brand area
    
    // Ensure QR doesn't overlap content
    if (qrY < contentBottom) {
      qrY = contentBottom + 24;
    }
    
    return { x: qrX, y: qrY };
  }

  // Utility method for text line splitting
  private splitLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, maxLines?: number): string[] {
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let current = '';

    for (let i = 0; i < words.length; i++) {
      const test = current ? `${current} ${words[i]}` : words[i];
      if (ctx.measureText(test).width <= maxWidth) {
        current = test;
      } else {
        if (current) lines.push(current);
        current = words[i];
        if (maxLines && lines.length >= maxLines - 1) {
          while (ctx.measureText(current + '…').width > maxWidth && current.length > 0) {
            current = current.slice(0, -1);
          }
          current = current + '…';
          break;
        }
      }
    }
    if (current) lines.push(current);
    return lines;
  }

  // Getters for layout constants
  public get defaultCanvasSize(): CanvasSize {
    return { width: this.defaultWidth, height: this.defaultHeight };
  }

  public get layoutPadding(): number {
    return this.padding;
  }
}
