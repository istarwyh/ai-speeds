/// <reference path="../../types/env.d.ts" />
import type { BaseContentCard } from '../../types/ContentCard';
import { StyleManager } from './StyleManager';
import { LayoutService, type LayoutPlan, type LayoutSection } from './LayoutService';
import { ImageManager } from './ImageManager';

export interface CompactRenderContext {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  layout: LayoutPlan;
}

export class CompactRenderer {
  private styleManager: StyleManager;
  private layoutService: LayoutService;
  private imageManager: ImageManager;

  constructor() {
    this.styleManager = new StyleManager();
    this.layoutService = new LayoutService();
    this.imageManager = new ImageManager();
  }

  // 使用新布局渲染完整的卡片
  public async renderCard<T extends BaseContentCard>(
    card: T,
    canvas: HTMLCanvasElement,
    getIcon: (category: string) => string,
    deepLink: string,
    pageImageInfo?: { pageImageAspect?: number; pageImageWidth?: number; pageImageHeight?: number }
  ): Promise<void> {
    let ctx = canvas.getContext('2d')!;
    let width = canvas.width;
    let height = canvas.height;

    // 如果封面图加载失败，则在布局阶段直接移除图片区，避免保留空白
    const imgUrl = (card as any).imageUrl as string | undefined;
    let cardForLayout: any = card;
    if (imgUrl) {
      try {
        await this.imageManager.loadImage(imgUrl, { crossOrigin: 'anonymous' });
      } catch {
        cardForLayout = { ...(card as any), imageUrl: undefined };
      }
    }

    // 计算布局方案（允许根据内容收缩高度）
    let layout = this.layoutService.calculateLayout(cardForLayout, {
      maxWidth: width,
      minHeight: 0
    }, pageImageInfo);

    // 如果实际内容高度与 canvas 不一致，则调整 canvas 高度以贴合内容
    if (canvas.height !== layout.totalHeight) {
      canvas.height = layout.totalHeight;
      // 调整后需要重新获取上下文
      ctx = canvas.getContext('2d')!;
      width = canvas.width;
      height = canvas.height;
      // 重新计算布局（仍允许收缩，不强制最小高度）
      layout = this.layoutService.calculateLayout(cardForLayout, {
        maxWidth: width,
        minHeight: 0
      }, pageImageInfo);
    }

    const renderCtx: CompactRenderContext = { ctx, width, height, layout };

    // 渲染背景
    this.renderBackground(renderCtx);

    // 按布局方案渲染各个部分
    for (const section of layout.sections) {
      await this.renderSection(renderCtx, section, card as T, getIcon, deepLink);
    }

    // 渲染完成后再次确保严格裁剪到内容高度
    this.tightCrop(canvas, layout.totalHeight);
  }

  // 渲染优化的背景
  private renderBackground(renderCtx: CompactRenderContext): void {
    const { ctx, width, height } = renderCtx;
    
    // 简洁的渐变背景
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
    bgGrad.addColorStop(0, '#ffffff');
    bgGrad.addColorStop(0.7, '#fafbfc');
    bgGrad.addColorStop(1, '#f8fafc');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // 顶部品牌色条
    const brandColors = this.styleManager.getBrandColors();
    const accentGrad = ctx.createLinearGradient(0, 0, width, 0);
    accentGrad.addColorStop(0, brandColors.primary);
    accentGrad.addColorStop(0.5, brandColors.primaryLight);
    accentGrad.addColorStop(1, brandColors.accent);
    ctx.fillStyle = accentGrad;
    ctx.fillRect(0, 0, width, 4);
  }

  // 根据布局段落渲染对应内容
  private async renderSection<T extends BaseContentCard>(
    renderCtx: CompactRenderContext,
    section: LayoutSection,
    card: T,
    getIcon: (category: string) => string,
    deepLink: string
  ): Promise<void> {
    const { ctx, layout } = renderCtx;
    const x = layout.padding;

    switch (section.type) {
      case 'header':
        this.renderHeaderSection(ctx, section, card, getIcon, x);
        break;
      case 'content':
        this.renderContentSection(ctx, section, x);
        break;
      case 'image':
        await this.renderImageSection(ctx, section, x, layout.contentWidth);
        break;
      case 'tips':
        this.renderTipsSection(ctx, section, x, layout.contentWidth);
        break;
      case 'tags':
        this.renderTagsSection(ctx, section, x, layout.contentWidth);
        break;
      case 'footer':
        await this.renderFooterSection(ctx, section, x, layout.contentWidth, card, deepLink);
        break;
    }
  }

  // 紧凑的头部渲染
  private renderHeaderSection<T extends BaseContentCard>(
    ctx: CanvasRenderingContext2D,
    section: LayoutSection,
    card: T,
    getIcon: (category: string) => string,
    x: number
  ): void {
    const { iconSize, titleAreaWidth } = section.content;
    const spacing = this.styleManager.getSpacing();
    const typography = this.layoutService.getTypographyConfig();

    // 渲染图标
    const icon = getIcon(card.category) || '📋';
    const iconX = x + iconSize / 2;
    const iconY = section.y + iconSize / 2;
    
    // 图标背景
    const iconGrad = ctx.createRadialGradient(iconX, iconY, 0, iconX, iconY, iconSize / 2);
    iconGrad.addColorStop(0, '#ffffff');
    iconGrad.addColorStop(1, '#e0f2fe');
    ctx.fillStyle = iconGrad;
    this.roundRect(ctx, iconX - iconSize / 2, iconY - iconSize / 2, iconSize, iconSize, 16);
    ctx.fill();

    // 图标边框
    ctx.strokeStyle = '#bae6fd';
    ctx.lineWidth = 1.5;
    this.roundRect(ctx, iconX - iconSize / 2, iconY - iconSize / 2, iconSize, iconSize, 16);
    ctx.stroke();

    // 图标文字
    ctx.font = `${iconSize * 0.6}px system-ui, -apple-system, Segoe UI, Roboto`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#0f172a';
    ctx.fillText(icon, iconX, iconY);

    // 标题区域
    const titleX = x + iconSize + spacing.lg;
    const titleY = section.y + spacing.sm;

    // 渲染标题
    ctx.font = `bold ${typography.title}px ui-sans-serif, -apple-system, system-ui`;
    ctx.fillStyle = '#0f172a';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    
    const titleLines = this.splitLines(ctx, card.title || '', titleAreaWidth, 2);
    titleLines.forEach((line, i) => {
      ctx.fillText(line, titleX, titleY + i * (typography.title + 8));
    });
    // 不再渲染难度徽章与阅读时间，保持标题下紧凑布局
  }

  // 内容区域渲染
  private renderContentSection(
    ctx: CanvasRenderingContext2D,
    section: LayoutSection,
    x: number
  ): void {
    const { text, maxLines, fontSize, lineHeight } = section.content;
    const typography = this.layoutService.getTypographyConfig();

    ctx.font = `${typography.body}px ui-sans-serif, -apple-system, system-ui`;
    ctx.fillStyle = '#374151';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    const lines = this.splitLines(ctx, text, section.content.width || 600, maxLines);
    lines.forEach((line, i) => {
      ctx.fillText(line, x, section.y + i * lineHeight);
    });
  }

  // 图片区域渲染
  private async renderImageSection(
    ctx: CanvasRenderingContext2D,
    section: LayoutSection,
    x: number,
    width: number
  ): Promise<void> {
    const { imageUrl } = section.content;
    const radius = this.styleManager.getBorderRadius().md;

    try {
      const img = await this.imageManager.loadImage(imageUrl, { crossOrigin: 'anonymous' });

      // 获取图片的原始尺寸
      const sw = (img as any).naturalWidth || (img as HTMLImageElement).width;
      const sh = (img as any).naturalHeight || (img as HTMLImageElement).height;

      // 目标区域：固定为布局计算出的矩形（等于卡片内容区宽度）
      // 这样可确保“分享卡片中的图片宽度和卡片宽度一样宽”，并与页面卡片保持相同的显示比例
      const destX = x;
      const destY = section.y;
      const destW = width;
      const destH = section.height;

      // 背景（使用原始section区域）
      ctx.fillStyle = '#f8fafc';
      this.roundRect(ctx, x, section.y, width, section.height, radius);
      ctx.fill();

      // 图片（使用计算后的区域）
      ctx.save();
      this.roundRect(ctx, destX, destY, destW, destH, radius);
      ctx.clip();

      // 始终使用 cover 策略绘制：填满目标矩形，同时保持原始宽高比，必要时居中裁剪
      const scale = Math.max(destW / sw, destH / sh);
      const srcW = Math.round(destW / scale);
      const srcH = Math.round(destH / scale);
      const srcX = Math.floor((sw - srcW) / 2);
      const srcY = Math.floor((sh - srcH) / 2);
      ctx.drawImage(img, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
      
      ctx.restore();

      // 微妙的内阴影（仅在实际图片区域）
      ctx.save();
      ctx.globalCompositeOperation = 'multiply';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      this.roundRect(ctx, destX + 1, destY + 1, destW - 2, destH - 2, radius - 1);
      ctx.fill();
      ctx.restore();

    } catch {
      // 按需求：图片加载失败时，不再绘制占位符或文字，保持原布局
      return;
    }
  }

  // 提示框区域渲染
  private renderTipsSection(
    ctx: CanvasRenderingContext2D,
    section: LayoutSection,
    x: number,
    width: number
  ): void {
    const { tips, fontSize, lineHeight, tipPadding, tipGap } = section.content;
    const spacing = this.layoutService.getSpacingConfig();
    let currentY = section.y;

    tips.forEach((tip: any, index: number) => {
      const text = tip.title + '：' + tip.content;
      
      // 确保文本不会超出背景框，预留足够的内边距
      const maxTextWidth = width - (tipPadding * 2) - 12; // 额外预留 12px 避免贴边
      ctx.font = `${fontSize}px ui-sans-serif, -apple-system, system-ui`;
      const lines = this.splitLines(ctx, text, maxTextWidth);
      const tipHeight = lines.length * lineHeight + tipPadding * 2;

      // 彩色淡雅背景（根据索引循环使用不同颜色）
      const colorSchemes = [
        { start: '#fef7f0', end: '#fed7aa', accent: '#fb923c' }, // 橙色系
        { start: '#f0f9ff', end: '#bae6fd', accent: '#0ea5e9' }, // 蓝色系
        { start: '#f0fdf4', end: '#bbf7d0', accent: '#22c55e' }, // 绿色系
        { start: '#fdf4ff', end: '#e9d5ff', accent: '#a855f7' }, // 紫色系
        { start: '#fffbeb', end: '#fde68a', accent: '#f59e0b' }  // 黄色系
      ];
      const colorScheme = colorSchemes[index % colorSchemes.length];
      
      const tipGrad = ctx.createLinearGradient(x, currentY, x, currentY + tipHeight);
      tipGrad.addColorStop(0, colorScheme.start);
      tipGrad.addColorStop(1, colorScheme.end);
      ctx.fillStyle = tipGrad;
      this.roundRect(ctx, x, currentY, width, tipHeight, 8);
      ctx.fill();

      // 外边框（使用对应的强调色，透明度降低）
      ctx.strokeStyle = colorScheme.accent + '40'; // 25% 透明度
      ctx.lineWidth = 1;
      this.roundRect(ctx, x, currentY, width, tipHeight, 8);
      ctx.stroke();

      // 左侧彩色导引条
      ctx.fillStyle = colorScheme.accent + '80'; // 50% 透明度
      this.roundRect(ctx, x, currentY, 4, tipHeight, 2);
      ctx.fill();

      // 文字（统一黑色）
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';

      lines.forEach((line, i) => {
        // 确保文字在背景框内，从左侧导引条后开始
        ctx.fillText(line, x + tipPadding + 8, currentY + tipPadding + i * lineHeight);
      });

      currentY += tipHeight + (tipGap ?? spacing.elementGap);
    });
  }

  // 标签区域渲染
  private renderTagsSection(
    ctx: CanvasRenderingContext2D,
    section: LayoutSection,
    x: number,
    width: number
  ): void {
    const { tags, tagHeight, fontSize } = section.content;
    const spacing = this.layoutService.getSpacingConfig();

    ctx.font = `${fontSize}px ui-sans-serif, -apple-system, system-ui`;
    let currentX = x;
    let currentY = section.y;

    tags.forEach((tag: string) => {
      const textWidth = ctx.measureText(tag).width;
      const tagWidth = textWidth + spacing.elementGap;

      if (currentX + tagWidth > x + width) {
        currentX = x;
        currentY += tagHeight + spacing.tightGap;
      }

      // 标签背景
      const tagGrad = ctx.createLinearGradient(currentX, currentY, currentX, currentY + tagHeight);
      tagGrad.addColorStop(0, '#f8fafc');
      tagGrad.addColorStop(1, '#e2e8f0');
      ctx.fillStyle = tagGrad;
      this.roundRect(ctx, currentX, currentY, tagWidth, tagHeight, 16);
      ctx.fill();

      // 标签边框
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 0.5;
      this.roundRect(ctx, currentX, currentY, tagWidth, tagHeight, 16);
      ctx.stroke();

      // 标签文字
      ctx.fillStyle = '#475569';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(tag, currentX + tagWidth / 2, currentY + tagHeight / 2);

      currentX += tagWidth + spacing.tightGap;
    });
  }

  // 底部区域渲染（QR码 + 品牌信息整合）
  private async renderFooterSection<T extends BaseContentCard>(
    ctx: CanvasRenderingContext2D,
    section: LayoutSection,
    x: number,
    width: number,
    card: T,
    deepLink: string
  ): Promise<void> {
    const { qrSize, brandHeight, leftColumnWidth, tags = [], tagHeight = 32, fontSize = 20, tagGap = 8, brandTagsGap = 15, footerXPad = 12, footerTopPad = 12, footerBottomPad = 6 } = section.content;
    const spacing = this.layoutService.getSpacingConfig();
    const brandColors = this.styleManager.getBrandColors();

    // 底部分割线
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, section.y);
    ctx.lineTo(x + width, section.y);
    ctx.stroke();

    const footerY = section.y + footerTopPad;

    // 左侧：品牌信息
    const brandText = 'aispeeds.me';
    ctx.font = `bold ${this.layoutService.getTypographyConfig().body}px ui-sans-serif, -apple-system, system-ui`;
    ctx.fillStyle = brandColors.text;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(brandText, x + footerXPad, footerY + brandHeight / 2);

    // 右侧：紧凑的QR码
    const qrX = x + width - footerXPad - qrSize;
    const qrY = footerY;

    try {
      const qrImg = await this.imageManager.loadQRImage(deepLink, qrSize);
      
      // QR码背景（严格在 footer 高度内）
      ctx.fillStyle = '#ffffff';
      this.roundRect(ctx, qrX, qrY, qrSize, qrSize, 8);
      ctx.fill();

      // QR码边框
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      this.roundRect(ctx, qrX, qrY, qrSize, qrSize, 8);
      ctx.stroke();

      // QR码图片
      ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);

    } catch {
      // QR码占位符
      ctx.fillStyle = '#f1f5f9';
      this.roundRect(ctx, qrX, qrY, qrSize, qrSize, 8);
      ctx.fill();

      ctx.font = `${this.layoutService.getTypographyConfig().small}px ui-sans-serif, -apple-system, system-ui`;
      ctx.fillStyle = '#94a3b8';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('QR码', qrX + qrSize / 2, qrY + qrSize / 2);
    }

    // 左侧：品牌下方的标签区域（与 QR 垂直对齐）
    if (Array.isArray(tags) && tags.length > 0) {
      ctx.font = `${fontSize}px ui-sans-serif, -apple-system, system-ui`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      let currentX = x + footerXPad;
      let currentY = footerY + brandHeight + brandTagsGap; // 稍微在品牌下方

      tags.forEach((tag: string) => {
        const textWidth = ctx.measureText(tag).width;
        const paddingX = 12;
        const chipWidth = Math.ceil(textWidth) + paddingX * 2;

        if (currentX + chipWidth > x + footerXPad + (leftColumnWidth ?? width - (qrSize + footerXPad * 2))) {
          currentX = x + footerXPad;
          currentY += tagHeight + tagGap;
        }

        // 标签背景
        const tagGrad = ctx.createLinearGradient(currentX, currentY - tagHeight / 2, currentX, currentY + tagHeight / 2);
        tagGrad.addColorStop(0, '#f8fafc');
        tagGrad.addColorStop(1, '#e2e8f0');
        ctx.fillStyle = tagGrad;
        this.roundRect(ctx, currentX, currentY - tagHeight / 2, chipWidth, tagHeight, 16);
        ctx.fill();

        // 标签边框
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 0.5;
        this.roundRect(ctx, currentX, currentY - tagHeight / 2, chipWidth, tagHeight, 16);
        ctx.stroke();

        // 标签文字
        ctx.fillStyle = '#475569';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(tag, currentX + chipWidth / 2, currentY);

        currentX += chipWidth + tagGap;
      });
    }
  }

  // 渲染难度徽章
  private renderDifficultyBadge(
    ctx: CanvasRenderingContext2D,
    difficulty: string,
    x: number,
    y: number
  ): { width: number; height: number } {
    const diffText = this.styleManager.mapDifficulty(difficulty);
    const diffColor = this.styleManager.getDifficultyColor(difficulty);
    const typography = this.layoutService.getTypographyConfig();
    const spacing = this.styleManager.getSpacing();

    ctx.font = `bold ${typography.caption}px ui-sans-serif, -apple-system, system-ui`;
    const textWidth = ctx.measureText(diffText).width;
    const badgeW = textWidth + spacing.md;
    const badgeH = 28;

    // 徽章背景
    const badgeGrad = ctx.createLinearGradient(x, y, x, y + badgeH);
    badgeGrad.addColorStop(0, diffColor);
    badgeGrad.addColorStop(1, this.adjustColorBrightness(diffColor, -0.1));
    ctx.fillStyle = badgeGrad;
    this.roundRect(ctx, x, y, badgeW, badgeH, 14);
    ctx.fill();

    // 高光
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    this.roundRect(ctx, x, y, badgeW, badgeH / 2, 14);
    ctx.fill();

    // 徽章文字
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(diffText, x + badgeW / 2, y + badgeH / 2);

    return { width: badgeW, height: badgeH };
  }

  // 工具方法

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

  private roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.closePath();
  }

  private adjustColorBrightness(color: string, factor: number): string {
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

  // 确保画布严格裁剪到内容高度，移除任何可能残留的额外空白
  private tightCrop(canvas: HTMLCanvasElement, finalHeight: number) {
    try {
      const finalWidth = canvas.width;
      if (canvas.height === finalHeight) return;
      const off = document.createElement('canvas');
      off.width = finalWidth;
      off.height = finalHeight;
      const offCtx = off.getContext('2d')!;
      offCtx.drawImage(canvas, 0, 0, finalWidth, finalHeight, 0, 0, finalWidth, finalHeight);
      // Reset original canvas to the tight size and blit back
      canvas.width = finalWidth;
      canvas.height = finalHeight;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(off, 0, 0);
    } catch {}
  }
}
