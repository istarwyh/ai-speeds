/// <reference path="../../types/env.d.ts" />
import type { BaseContentCard } from '../../types/ContentCard';
import { StyleManager } from './StyleManager';

export interface LayoutSection {
  type: 'header' | 'title' | 'meta' | 'content' | 'image' | 'tips' | 'tags' | 'footer';
  y: number;
  height: number;
  content?: any;
}

export interface LayoutPlan {
  sections: LayoutSection[];
  totalHeight: number;
  contentWidth: number;
  padding: number;
}

export interface LayoutConstraints {
  maxWidth: number;
  minHeight: number;
  maxHeight?: number;
  aspectRatio?: number;
}

export class LayoutService {
  private styleManager: StyleManager;
  private readonly basePadding = 48; // 减少基础内边距
  private readonly sectionGap = 24; // 统一的段落间距
  private readonly elementGap = 16; // 元素间的小间距

  constructor() {
    this.styleManager = new StyleManager();
  }

  // 计算优化的布局方案
  public calculateLayout<T extends BaseContentCard>(
    card: T,
    constraints: LayoutConstraints,
    pageImageInfo?: { pageImageAspect?: number; pageImageWidth?: number; pageImageHeight?: number },
  ): LayoutPlan {
    const { maxWidth, minHeight } = constraints;
    const contentWidth = maxWidth - this.basePadding * 2;
    const sections: LayoutSection[] = [];
    let currentY = this.basePadding;

    // 1. 紧凑的头部区域（图标 + 标题 + 元信息在一行）
    const headerSection = this.calculateHeaderSection(card, contentWidth, currentY);
    sections.push(headerSection);
    currentY = headerSection.y + headerSection.height + this.sectionGap;

    // 2. 描述/概览内容
    if ((card as any).description || (card as any).overview) {
      const contentSection = this.calculateContentSection(card, contentWidth, currentY);
      sections.push(contentSection);
      currentY = contentSection.y + contentSection.height + this.sectionGap;
    }

    // 3. 封面图片（如果有）
    if ((card as any).imageUrl) {
      const imageSection = this.calculateImageSection(card, contentWidth, currentY, pageImageInfo);
      sections.push(imageSection);
      currentY = imageSection.y + imageSection.height + this.sectionGap;
    }

    // 4. 提示框区域
    const tips = card.tips || [];
    if (tips.length > 0) {
      const tipsSection = this.calculateTipsSection(tips, contentWidth, currentY);
      sections.push(tipsSection);
      currentY = tipsSection.y + tipsSection.height + this.sectionGap;
    }

    // 5. 底部区域（左侧品牌 + 下方标签，右侧QR码）
    const footerSection = this.calculateFooterSection(contentWidth, currentY, maxWidth, card.tags || []);
    sections.push(footerSection);
    // 移除额外底部外边距，实现贴近内容的裁剪
    const bottomMargin = 0;
    currentY = footerSection.y + footerSection.height + bottomMargin;

    const totalHeight = Math.max(minHeight, currentY);

    return {
      sections,
      totalHeight,
      contentWidth,
      padding: this.basePadding,
    };
  }

  // 紧凑的头部设计：图标、标题、难度标签在同一视觉区域
  private calculateHeaderSection<T extends BaseContentCard>(
    card: T,
    contentWidth: number,
    startY: number,
  ): LayoutSection {
    const iconSize = 64; // 稍微增大图标
    const titleFontSize = this.styleManager.getFontSizes().title;
    const spacing = this.styleManager.getSpacing();

    // 标题区域宽度（为图标和间距预留空间）
    const titleAreaWidth = contentWidth - iconSize - spacing.lg;

    // 估算标题行数（简化计算）
    const avgCharWidth = titleFontSize * 0.6;
    const titleLength = (card.title || '').length;
    const estimatedTitleLines = Math.ceil((titleLength * avgCharWidth) / titleAreaWidth);
    const titleHeight = Math.min(estimatedTitleLines, 2) * (titleFontSize + 8);

    // 不再展示元信息（难度标签、阅读时间），不预留高度
    const metaHeight = 0;

    // 头部总高度 = 图标高度和(标题高度 + 元信息高度)的最大值
    const headerHeight = Math.max(iconSize, titleHeight + metaHeight + spacing.sm);

    return {
      type: 'header',
      y: startY,
      height: headerHeight,
      content: {
        iconSize,
        titleAreaWidth,
        titleHeight,
        metaHeight,
      },
    };
  }

  // 内容区域：描述或概览，限制行数避免过长
  private calculateContentSection<T extends BaseContentCard>(
    card: T,
    contentWidth: number,
    startY: number,
  ): LayoutSection {
    const fontSize = this.styleManager.getFontSizes().body;
    const lineHeight = fontSize + 8;
    const maxLines = 4; // 限制最大行数，保持紧凑

    const text = (card as any).description || (card as any).overview || '';
    const avgCharWidth = fontSize * 0.5;
    const estimatedLines = Math.ceil((text.length * avgCharWidth) / contentWidth);
    const actualLines = Math.min(estimatedLines, maxLines);

    const contentHeight = actualLines * lineHeight;

    return {
      type: 'content',
      y: startY,
      height: contentHeight,
      content: {
        text,
        maxLines,
        fontSize,
        lineHeight,
      },
    };
  }

  // 图片区域：保持合理的宽高比
  private calculateImageSection<T extends BaseContentCard>(
    card: T,
    contentWidth: number,
    startY: number,
    pageImageInfo?: { pageImageAspect?: number; pageImageWidth?: number; pageImageHeight?: number },
  ): LayoutSection {
    let imageHeight = 240; // 默认高度

    // 如果有页面图片比例信息，使用它；否则使用合理的默认比例
    if (pageImageInfo?.pageImageAspect && pageImageInfo.pageImageAspect > 0) {
      imageHeight = Math.round(contentWidth * pageImageInfo.pageImageAspect);
    } else {
      // 使用16:9的比例作为默认值，这是一个常见且美观的比例
      imageHeight = Math.round(contentWidth * (9 / 16));
    }

    // 限制最大和最小高度，避免极端比例
    imageHeight = Math.max(180, Math.min(400, imageHeight));

    return {
      type: 'image',
      y: startY,
      height: imageHeight,
      content: {
        imageUrl: (card as any).imageUrl,
        aspectRatio: pageImageInfo?.pageImageAspect,
        fillWidth: true, // 新增：标记图片需要占满整个宽度
      },
    };
  }

  // 提示框区域：紧凑排列
  private calculateTipsSection(tips: any[], contentWidth: number, startY: number): LayoutSection {
    // 提升字体大小与行高，避免“被压缩”的观感
    const fontSize = this.styleManager.getFontSizes().caption + 2; // 26px
    const lineHeight = Math.round(fontSize * 1.5); // 更舒展的行距，避免压缩感
    const tipPadding = this.styleManager.getSpacing().md;
    const tipGap = this.styleManager.getSpacing().md; // 增大提示之间的间距

    let totalHeight = 0;

    tips.forEach(tip => {
      const text = tip.title + '：' + tip.content;
      const avgCharWidth = fontSize * 0.5;
      const estimatedLines = Math.ceil((text.length * avgCharWidth) / (contentWidth - tipPadding * 2));
      const tipHeight = estimatedLines * lineHeight + tipPadding * 2;
      totalHeight += tipHeight + tipGap;
    });

    totalHeight -= tipGap; // 移除最后一个间距

    return {
      type: 'tips',
      y: startY,
      height: totalHeight,
      content: {
        tips,
        fontSize,
        lineHeight,
        tipPadding,
        tipGap,
      },
    };
  }

  // 标签区域：紧凑的标签布局
  private calculateTagsSection(tags: string[], contentWidth: number, startY: number): LayoutSection {
    const fontSize = this.styleManager.getFontSizes().small;
    const tagHeight = 32;
    const tagPadding = this.styleManager.getSpacing().sm;
    const tagGap = this.styleManager.getSpacing().xs;

    // 简化计算：假设标签会换行
    const avgTagWidth = fontSize * 6; // 平均标签宽度估算
    const tagsPerLine = Math.floor(contentWidth / (avgTagWidth + tagGap));
    const lines = Math.ceil(tags.length / tagsPerLine);
    const totalHeight = lines * tagHeight + (lines - 1) * tagGap;

    return {
      type: 'tags',
      y: startY,
      height: totalHeight,
      content: {
        tags,
        tagHeight,
        fontSize,
      },
    };
  }

  // 底部区域：QR码和品牌信息的整合设计
  private calculateFooterSection(
    contentWidth: number,
    startY: number,
    totalWidth: number,
    tags: string[],
  ): LayoutSection {
    const spacing = this.styleManager.getSpacing();
    const qrSize = 120; // QR码尺寸
    const brandHeight = 32;
    const footerXPad = 12; // 左右内边距
    const footerTopPad = 12; // 顶部内边距
    const footerBottomPad = 0; // 底部内边距（最紧凑）

    // 左列最大宽度（右边保留给 QR，左右各预留 footerXPad）
    const leftColumnWidth = contentWidth - (qrSize + footerXPad * 2);

    // 计算左列标签高度（若存在）
    const fontSize = this.styleManager.getFontSizes().small; // 标签字体
    const tagHeight = 32;
    const tagGap = spacing.xs;

    let tagsHeight = 0;
    if (tags.length > 0) {
      const avgTagWidth = fontSize * 6;
      const tagsPerLine = Math.max(1, Math.floor(leftColumnWidth / (avgTagWidth + tagGap)));
      const lines = Math.ceil(tags.length / tagsPerLine);
      tagsHeight = lines * tagHeight + (lines - 1) * tagGap;
    }

    // 品牌与标签之间的间距（固定 15px，避免受全局 xs 变更影响）
    const brandTagsGap = 30;

    // 整个左列内容高度
    const leftColumnHeight = tags.length > 0 ? brandHeight + brandTagsGap + tagsHeight : brandHeight;

    // Footer 高度取左列与右侧 QR 的最大值，加上下内边距
    const footerHeight = Math.max(qrSize, leftColumnHeight) + footerTopPad + footerBottomPad;

    return {
      type: 'footer',
      y: startY,
      height: footerHeight,
      content: {
        qrSize,
        brandHeight,
        leftColumnWidth,
        tags,
        tagHeight,
        fontSize,
        tagGap,
        brandTagsGap,
        footerXPad,
        footerTopPad,
        footerBottomPad,
        layout: 'horizontal',
      },
    };
  }

  // 获取优化的间距配置
  public getSpacingConfig() {
    return {
      basePadding: this.basePadding,
      sectionGap: this.sectionGap,
      elementGap: this.elementGap,
      tightGap: 8, // 紧密间距
      microGap: 4, // 微小间距
    };
  }

  // 获取字体层次配置
  public getTypographyConfig() {
    const baseFontSize = this.styleManager.getFontSizes();
    return {
      title: baseFontSize.title,
      subtitle: baseFontSize.subtitle,
      body: baseFontSize.body - 2, // 稍微减小正文字体
      caption: baseFontSize.caption,
      small: baseFontSize.small,
      micro: 18, // 新增微小字体
    };
  }

  // 计算响应式尺寸
  public calculateResponsiveSize(
    baseWidth: number,
    baseHeight: number,
    targetWidth: number,
  ): { width: number; height: number } {
    const scale = targetWidth / baseWidth;
    return {
      width: targetWidth,
      height: Math.round(baseHeight * scale),
    };
  }

  // 验证布局是否合理
  public validateLayout(layout: LayoutPlan): { valid: boolean; issues: string[] } {
    const issues: string[] = [];

    // 检查高度是否合理
    if (layout.totalHeight > 2000) {
      issues.push('布局高度过大，可能影响加载性能');
    }

    if (layout.totalHeight < 800) {
      issues.push('布局高度过小，可能显示不完整');
    }

    // 检查段落间距是否一致
    const gaps: number[] = [];
    for (let i = 1; i < layout.sections.length; i++) {
      const gap = layout.sections[i].y - (layout.sections[i - 1].y + layout.sections[i - 1].height);
      gaps.push(gap);
    }

    const avgGap = gaps.reduce((a, b) => a + b, 0) / gaps.length;
    const hasInconsistentGaps = gaps.some(gap => Math.abs(gap - avgGap) > 8);

    if (hasInconsistentGaps) {
      issues.push('段落间距不一致，影响视觉连贯性');
    }

    return {
      valid: issues.length === 0,
      issues,
    };
  }
}
