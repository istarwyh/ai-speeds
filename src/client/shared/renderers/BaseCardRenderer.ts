import type { BaseContentCard, ContentSection, ContentTip } from '../types/ContentCard';
import { defaultDifficultyConfig, type DifficultyConfig } from '../config/cardConfig';

// 通用卡片渲染器 - 符合 SOLID 原则的单一职责
export class BaseCardRenderer<T extends BaseContentCard> {
  protected categoryIcons: Record<string, string> = {};
  protected difficultyConfig: DifficultyConfig;

  constructor(
    categoryIcons: Record<string, string> = {},
    difficultyConfig: DifficultyConfig = defaultDifficultyConfig
  ) {
    this.categoryIcons = categoryIcons;
    this.difficultyConfig = difficultyConfig;
  }

  // HTML转义工具函数 - 防止XSS攻击
  protected escapeHtml(text: string): string {
    const htmlEscapes: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return text.replace(/[&<>"']/g, match => htmlEscapes[match]);
  }

  public renderCards(cards: T[]): string {
    return cards.map(card => this.renderCard(card)).join('');
  }

  public renderCard(card: T): string {
    const icon = this.categoryIcons[card.category] || '📋';
    const difficultyColor = card.difficulty
      ? this.difficultyConfig.colors[card.difficulty]
      : undefined;
    const difficultyLabel = card.difficulty
      ? this.difficultyConfig.labels[card.difficulty]
      : undefined;

    const sectionsHtml = this.renderSections(card.sections);

    const difficultyHtml = difficultyLabel
      ? `<span class="overview-card__difficulty"${difficultyColor ? ` style="--difficulty-color: ${difficultyColor}"` : ''}>
          ${this.escapeHtml(difficultyLabel)}
        </span>`
      : '';

    const readTimeHtml = card.readTime
      ? `<span class="overview-card__read-time">📖 ${this.escapeHtml(card.readTime)}</span>`
      : '';

    const overviewHtml = card.overview
      ? `<div class="overview-card__overview">${this.escapeHtml(card.overview)}</div>`
      : '';

    const sectionsBlockHtml = sectionsHtml
      ? `<div class="overview-card__sections">
          <h4 class="overview-card__sections-title">主要内容：</h4>
          <ul class="overview-card__sections-list">
            ${sectionsHtml}
          </ul>
        </div>`
      : '';

    const descriptionHtml = card.description
      ? `<p class="overview-card__description">${this.escapeHtml(card.description)}</p>`
      : '';

    const versionHtml = card.version
      ? `<span class="overview-card__version">v${this.escapeHtml(card.version)}</span>`
      : '';
    const updatedHtml = card.lastUpdated
      ? `<span class="overview-card__updated">更新于 ${this.escapeHtml(card.lastUpdated)}</span>`
      : '';
    const metaInfoHtml = versionHtml || updatedHtml
      ? `<div class="overview-card__meta-info">${versionHtml}${updatedHtml}</div>`
      : '';

    const coverHtml = card.imageUrl
      ? `<div class="overview-card__cover"><img src="${this.escapeHtml(card.imageUrl)}" alt="${this.escapeHtml(card.title)}" loading="lazy" /></div>`
      : '';

    return `
      <div class="content-card overview-card" data-card-id="${this.escapeHtml(card.id)}">
        <div class="overview-card__header">
          <div class="overview-card__title-section">
            <div class="overview-card__icon">${icon}</div>
            <h3 class="overview-card__title">${this.escapeHtml(card.title)}</h3>
          </div>
          <div class="overview-card__meta">
            ${difficultyHtml}
            ${readTimeHtml}
          </div>
        </div>
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
    if (!sections || sections.length === 0) return '';
    return sections.map(section => `
      <li class="overview-card__section-item">
        <span class="overview-card__section-title">${this.escapeHtml(section.title)}</span>
        <span class="overview-card__section-content">${this.escapeHtml(section.content)}</span>
      </li>
    `).join('');
  }

  protected renderTips(tips?: ContentTip[]): string {
    if (!tips || tips.length === 0) return '';

    return tips.map(tip => `
      <div class="overview-card__tip overview-card__tip--${this.escapeHtml(tip.type)}">
        <strong class="overview-card__tip-title">${this.escapeHtml(tip.title)}:</strong>
        <span class="overview-card__tip-content">${this.escapeHtml(tip.content)}</span>
      </div>
    `).join('');
  }

  protected renderTipsBlock(tips?: ContentTip[]): string {
    const tipsHtml = this.renderTips(tips);
    return tipsHtml ? `<div class="overview-card__tips">${tipsHtml}</div>` : '';
  }

  protected renderTags(tags?: string[]): string {
    if (!tags || tags.length === 0) return '';
    return tags.map(tag => `
      <span class="overview-card__tag">${this.escapeHtml(tag)}</span>
    `).join('');
  }

  protected renderTagsBlock(tags?: string[]): string {
    const tagsHtml = this.renderTags(tags);
    return tagsHtml ? `<div class="overview-card__tags">${tagsHtml}</div>` : '';
  }
}