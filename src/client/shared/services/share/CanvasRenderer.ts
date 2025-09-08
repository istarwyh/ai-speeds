/// <reference path="../../types/env.d.ts" />
import type { BaseContentCard } from '../../types/ContentCard';
import { StyleManager, type ColorScheme, type GradientConfig } from './StyleManager';

export interface RenderContext {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  padding: number;
}

export interface TextMetrics {
  width: number;
  height: number;
  lines: string[];
}

export class CanvasRenderer {
  private styleManager: StyleManager;

  constructor() {
    this.styleManager = new StyleManager();
  }

  // Enhanced gradient creation
  public createGradient(ctx: CanvasRenderingContext2D, config: GradientConfig, bounds: { x: number; y: number; width: number; height: number }): CanvasGradient {
    let gradient: CanvasGradient;
    
    if (config.type === 'linear') {
      gradient = ctx.createLinearGradient(bounds.x, bounds.y, bounds.x + bounds.width, bounds.y + bounds.height);
    } else {
      const centerX = bounds.x + bounds.width / 2;
      const centerY = bounds.y + bounds.height / 2;
      const radius = Math.max(bounds.width, bounds.height) / 2;
      gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    }

    config.colors.forEach((color, index) => {
      const stop = config.stops?.[index] ?? index / (config.colors.length - 1);
      gradient.addColorStop(stop, color);
    });

    return gradient;
  }

  // Enhanced background rendering with multiple layers
  public renderBackground(renderCtx: RenderContext): void {
    const { ctx, width, height } = renderCtx;
    
    // Base gradient background
    const bgGradient = this.createGradient(ctx, this.styleManager.getBackgroundGradient(), { x: 0, y: 0, width, height });
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // Subtle texture overlay
    this.addTextureOverlay(ctx, width, height);
  }

  // Enhanced header with improved visual hierarchy
  public renderHeader(renderCtx: RenderContext): number {
    const { ctx, width } = renderCtx;
    const spacing = this.styleManager.getSpacing();
    const headerHeight = 200;

    // Header gradient
    const headerGradient = this.createGradient(ctx, this.styleManager.getHeaderGradient(), { x: 0, y: 0, width, height: headerHeight });
    ctx.fillStyle = headerGradient;
    ctx.fillRect(0, 0, width, headerHeight);

    // Top accent with gradient
    const brandColors = this.styleManager.getBrandColors();
    const accentGrad = ctx.createLinearGradient(0, 0, width, 0);
    accentGrad.addColorStop(0, brandColors.primary);
    accentGrad.addColorStop(0.5, brandColors.primaryLight);
    accentGrad.addColorStop(1, brandColors.accent);
    ctx.fillStyle = accentGrad;
    ctx.fillRect(0, 0, width, 6);

    // Subtle shadow at bottom of header
    const shadowGrad = ctx.createLinearGradient(0, headerHeight - 20, 0, headerHeight);
    shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    shadowGrad.addColorStop(1, this.styleManager.getShadowConfig().subtle);
    ctx.fillStyle = shadowGrad;
    ctx.fillRect(0, headerHeight - 20, width, 20);

    return headerHeight;
  }

  // Enhanced icon rendering with better visual effects
  public renderIcon(renderCtx: RenderContext, icon: string, x: number, y: number, radius: number): void {
    const { ctx } = renderCtx;
    const spacing = this.styleManager.getSpacing();

    // Icon background with enhanced gradient
    const iconGradient = this.createGradient(ctx, this.styleManager.getIconGradient(), { x: x - radius, y: y - radius, width: radius * 2, height: radius * 2 });
    ctx.fillStyle = iconGradient;
    this.roundRect(ctx, x - radius, y - radius, radius * 2, radius * 2, this.styleManager.getBorderRadius().xl);
    ctx.fill();

    // Subtle inner shadow
    ctx.save();
    ctx.globalCompositeOperation = 'multiply';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
    this.roundRect(ctx, x - radius + 2, y - radius + 2, radius * 2 - 4, radius * 2 - 4, this.styleManager.getBorderRadius().lg);
    ctx.fill();
    ctx.restore();

    // Enhanced border with gradient
    const brandColors = this.styleManager.getBrandColors();
    ctx.strokeStyle = brandColors.primary;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.3;
    this.roundRect(ctx, x - radius, y - radius, radius * 2, radius * 2, this.styleManager.getBorderRadius().xl);
    ctx.stroke();
    ctx.globalAlpha = 1;

    // Icon emoji with enhanced styling
    const fontSize = this.styleManager.getFontSizes();
    ctx.font = `${fontSize.title}px system-ui, -apple-system, Segoe UI, Roboto`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#0f172a';
    
    // Add subtle text shadow
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
    ctx.shadowBlur = 2;
    ctx.shadowOffsetY = 1;
    ctx.fillText(icon, x, y + 2);
    ctx.restore();
  }

  // Enhanced difficulty badge rendering
  public renderDifficultyBadge(renderCtx: RenderContext, difficulty: string, x: number, y: number): { width: number; height: number } {
    const { ctx } = renderCtx;
    const fontSize = this.styleManager.getFontSizes();
    const spacing = this.styleManager.getSpacing();
    const radius = this.styleManager.getBorderRadius();

    const diffText = this.styleManager.mapDifficulty(difficulty);
    const diffColor = this.styleManager.getDifficultyColor(difficulty);

    ctx.font = `bold ${fontSize.caption}px ui-sans-serif, -apple-system, system-ui`;
    const textWidth = ctx.measureText(diffText).width;
    const badgeW = textWidth + spacing.lg;
    const badgeH = spacing.xl;

    // Enhanced badge background with gradient
    const badgeGrad = ctx.createLinearGradient(x, y, x, y + badgeH);
    badgeGrad.addColorStop(0, diffColor);
    badgeGrad.addColorStop(1, this.adjustColorBrightness(diffColor, -0.1));
    ctx.fillStyle = badgeGrad;
    this.roundRect(ctx, x, y, badgeW, badgeH, radius.md);
    ctx.fill();

    // Subtle highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    this.roundRect(ctx, x, y, badgeW, badgeH / 2, radius.md);
    ctx.fill();

    // Badge text with shadow
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 1;
    ctx.shadowOffsetY = 1;
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(diffText, x + badgeW / 2, y + badgeH / 2);
    ctx.restore();

    return { width: badgeW, height: badgeH };
  }

  // Enhanced tip rendering with better visual hierarchy
  public renderTip(renderCtx: RenderContext, text: string, x: number, y: number, maxWidth: number, tipType: string = 'tip'): number {
    const { ctx } = renderCtx;
    const spacing = this.styleManager.getSpacing();
    const radius = this.styleManager.getBorderRadius();
    const fontSize = this.styleManager.getFontSizes();

    const lineHeight = spacing.xl + spacing.sm;
    const padding = spacing.md;
    const lines = this.splitLines(ctx, text, maxWidth - padding * 2);
    const boxHeight = lines.length * lineHeight + padding * 2;

    const tipColors = this.styleManager.getTipColors(tipType);

    // Enhanced tip background with gradient
    const tipGrad = ctx.createLinearGradient(x, y, x, y + boxHeight);
    tipGrad.addColorStop(0, tipColors.background);
    tipGrad.addColorStop(1, this.adjustColorOpacity(tipColors.background, 0.5));
    ctx.fillStyle = tipGrad;
    this.roundRect(ctx, x, y, maxWidth, boxHeight, radius.md);
    ctx.fill();

    // Enhanced left border with gradient
    const borderGrad = ctx.createLinearGradient(x, y, x, y + boxHeight);
    borderGrad.addColorStop(0, tipColors.border);
    borderGrad.addColorStop(1, this.adjustColorBrightness(tipColors.border, -0.2));
    ctx.fillStyle = borderGrad;
    this.roundRect(ctx, x, y, 6, boxHeight, 3);
    ctx.fill();

    // Text with enhanced styling
    ctx.fillStyle = tipColors.text;
    ctx.font = `${fontSize.body}px ui-sans-serif, -apple-system, system-ui`;
    let textY = y + padding + fontSize.body;
    
    lines.forEach((line) => {
      ctx.fillText(line, x + padding + spacing.sm, textY);
      textY += lineHeight;
    });

    return y + boxHeight;
  }

  // Enhanced tag rendering with better visual effects
  public renderTags(renderCtx: RenderContext, tags: string[], x: number, y: number, maxWidth: number): number {
    const { ctx } = renderCtx;
    const fontSize = this.styleManager.getFontSizes();
    const spacing = this.styleManager.getSpacing();
    const radius = this.styleManager.getBorderRadius();

    ctx.font = `${fontSize.caption + 2}px ui-sans-serif, -apple-system, system-ui`;
    let currentX = x;
    let currentY = y;
    const tagHeight = spacing.xl;
    const lineGap = spacing.sm;

    tags.forEach((tag, index) => {
      const textWidth = ctx.measureText(tag).width;
      const tagWidth = textWidth + spacing.lg;

      if (currentX + tagWidth > x + maxWidth) {
        currentX = x;
        currentY += tagHeight + lineGap;
      }

      // Enhanced tag background with gradient
      const tagGrad = ctx.createLinearGradient(currentX, currentY, currentX, currentY + tagHeight);
      tagGrad.addColorStop(0, '#f8fafc');
      tagGrad.addColorStop(1, '#e2e8f0');
      ctx.fillStyle = tagGrad;
      this.roundRect(ctx, currentX, currentY, tagWidth, tagHeight, radius.xl);
      ctx.fill();

      // Subtle border
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1;
      this.roundRect(ctx, currentX, currentY, tagWidth, tagHeight, radius.xl);
      ctx.stroke();

      // Tag text
      ctx.fillStyle = '#475569';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(tag, currentX + tagWidth / 2, currentY + tagHeight / 2);

      currentX += tagWidth + spacing.sm;
    });

    return currentY + tagHeight;
  }

  // Enhanced brand area rendering
  public renderBrandArea(renderCtx: RenderContext, brandText: string, x: number, y: number): void {
    const { ctx } = renderCtx;
    const fontSize = this.styleManager.getFontSizes();
    const spacing = this.styleManager.getSpacing();
    const radius = this.styleManager.getBorderRadius();
    const brandColors = this.styleManager.getBrandColors();

    ctx.font = `bold ${fontSize.body}px ui-sans-serif, -apple-system, system-ui`;
    const textWidth = ctx.measureText(brandText).width;
    const bgWidth = textWidth + spacing.lg;
    const bgHeight = spacing.xl + spacing.md;

    // Enhanced brand background with gradient
    const brandGrad = ctx.createLinearGradient(x, y, x + bgWidth, y);
    brandGrad.addColorStop(0, brandColors.background);
    brandGrad.addColorStop(1, 'rgba(14, 165, 233, 0.12)');
    ctx.fillStyle = brandGrad;
    this.roundRect(ctx, x, y, bgWidth, bgHeight, radius.md);
    ctx.fill();

    // Subtle border
    ctx.strokeStyle = brandColors.primary;
    ctx.globalAlpha = 0.2;
    ctx.lineWidth = 1;
    this.roundRect(ctx, x, y, bgWidth, bgHeight, radius.md);
    ctx.stroke();
    ctx.globalAlpha = 1;

    // Brand text with enhanced styling
    ctx.fillStyle = brandColors.text;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(brandText, x + bgWidth / 2, y + bgHeight / 2);
  }

  // Utility methods
  private addTextureOverlay(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // Add subtle noise texture
    ctx.save();
    ctx.globalAlpha = 0.02;
    ctx.fillStyle = '#000000';
    
    for (let i = 0; i < width * height / 10000; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      ctx.fillRect(x, y, 1, 1);
    }
    
    ctx.restore();
  }

  private adjustColorBrightness(color: string, factor: number): string {
    // Simple color brightness adjustment
    if (color.startsWith('#')) {
      const hex = color.slice(1);
      const num = parseInt(hex, 16);
      const r = Math.max(0, Math.min(255, (num >> 16) + factor * 255));
      const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + factor * 255));
      const b = Math.max(0, Math.min(255, (num & 0x0000FF) + factor * 255));
      return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    }
    return color;
  }

  private adjustColorOpacity(color: string, opacity: number): string {
    if (color.startsWith('rgba(')) {
      return color.replace(/[\d\.]+\)$/g, `${opacity})`);
    }
    return color;
  }

  public splitLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, maxLines?: number): string[] {
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

  public roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.closePath();
  }
}
