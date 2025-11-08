import type { BaseContentCard, ContentSection, ContentTip } from '../types/ContentCard';
import { heroicons, categoryIconMap } from '../config/heroicons';

// 通用卡片渲染器 - 符合 SOLID 原则的单一职责
export class BaseCardRenderer<T extends BaseContentCard> {
  protected categoryIcons: Record<string, string> = {};

  constructor(categoryIcons: Record<string, string> = {}) {
    this.categoryIcons = categoryIcons;
  }

  // 获取 SVG 图标
  protected getSvgIcon(category: string): string {
    const iconKey = categoryIconMap[category];
    if (iconKey && heroicons[iconKey]) {
      return heroicons[iconKey];
    }
    // 降级: 使用旧的 emoji 图标
    return this.categoryIcons[category] || '📋';
  }

  public renderCards(cards: T[]): string {
    return cards.map((card, index) => this.renderCard(card, index)).join('');
  }

  public renderCard(card: T, index?: number): string {
    const iconSvg = this.getSvgIcon(card.category);

    const sectionsHtml = this.renderSections(card.sections);

    const overviewHtml = card.overview ? `<div class="overview-card__overview">${card.overview}</div>` : '';

    const sectionsBlockHtml = sectionsHtml
      ? `<div class="overview-card__sections">
            <h4 class="overview-card__sections-title">主要内容：</h4>
            <ul class="overview-card__sections-list">
              ${sectionsHtml}
            </ul>
          </div>`
      : '';

    const descriptionHtml = card.description ? `<p class="overview-card__description">${card.description}</p>` : '';

    const versionHtml = card.version ? `<span class="overview-card__version">v${card.version}</span>` : '';
    const updatedHtml = card.lastUpdated
      ? `<span class="overview-card__updated">更新于 ${card.lastUpdated}</span>`
      : '';
    const metaInfoHtml =
      versionHtml || updatedHtml ? `<div class="overview-card__meta-info">${versionHtml}${updatedHtml}</div>` : '';

    const coverHtml = card.imageUrl
      ? `<div class="overview-card__cover"><img src="${card.imageUrl}" alt="${card.title}" loading="lazy" decoding="async" fetchpriority="low" /></div>`
      : '';

    // 动态设置动画延迟
    const animationDelay = typeof index === 'number' ? index * 0.02 : 0;
    const styleAttr = `style="--card-index: ${animationDelay}s"`;

    return `
      <div class="content-card overview-card" data-card-id="${card.id}" ${styleAttr}>
        <div class="overview-card__header">
          <div class="overview-card__title-section">
            <div class="overview-card__icon">${iconSvg}</div>
            <h3 class="overview-card__title">${card.title}</h3>
          </div>
        </div>
        <button class="overview-card__share-btn" data-card-id="${card.id}" aria-label="分享此卡片" title="分享">
          <svg class="icon icon-share" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <circle cx="18" cy="5" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="6" cy="12" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="18" cy="19" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
                ${coverHtml}

        <div class="overview-card__content">
          ${descriptionHtml}
          ${overviewHtml}
          ${sectionsBlockHtml}

          ${this.renderTipsBlock(card.tips)}

          ${this.renderTagsBlock(card.tags)}
        </div>

        ${metaInfoHtml ? `<div class="overview-card__footer">${metaInfoHtml}</div>` : ''}

      </div>
    `;
  }

  protected renderSections(sections?: ContentSection[]): string {
    if (!sections || sections.length === 0) {
      return '';
    }
    return sections
      .map(
        section => `
      <li class="overview-card__section-item">
        <span class="overview-card__section-title">${section.title}</span>
        <span class="overview-card__section-content">${section.content}</span>
      </li>
    `,
      )
      .join('');
  }

  protected renderTips(tips?: ContentTip[]): string {
    if (!tips || tips.length === 0) {
      return '';
    }

    return tips
      .map(
        tip => `
      <div class="overview-card__tip overview-card__tip--${tip.type}">
        <strong class="overview-card__tip-title">${tip.title}:</strong>
        <span class="overview-card__tip-content">${tip.content}</span>
      </div>
    `,
      )
      .join('');
  }

  protected renderTipsBlock(tips?: ContentTip[]): string {
    const tipsHtml = this.renderTips(tips);
    return tipsHtml ? `<div class="overview-card__tips">${tipsHtml}</div>` : '';
  }

  protected renderTags(tags?: string[]): string {
    if (!tags || tags.length === 0) {
      return '';
    }
    return tags
      .map(
        tag => `
      <span class="overview-card__tag">${tag}</span>
    `,
      )
      .join('');
  }

  protected renderTagsBlock(tags?: string[]): string {
    const tagsHtml = this.renderTags(tags);
    return tagsHtml ? `<div class="overview-card__tags">${tagsHtml}</div>` : '';
  }
}
