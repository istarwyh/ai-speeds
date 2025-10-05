import { BaseContentService } from '../../shared/services/BaseContentService';
import type { PracticeCard } from '../types/PracticeCard';
import { bestPracticesCards } from '../data/cardsData';
import { contentLoaders } from '../generated/contentMap';

export type { Article } from '../../shared/services/BaseContentService';

export class ArticleService extends BaseContentService<PracticeCard> {
  protected async getContentFromFile(cardId: string): Promise<string> {
    try {
      const normalized = cardId.trim();

      // Try exact, normalized, and a couple of safe variants
      const variants = [
        normalized,
        normalized.toLowerCase(),
        normalized.replace(/_/g, '-'),
      ];
      let contentLoader: (() => Promise<string>) | undefined;
      for (const key of variants) {
        if (contentLoaders[key]) {
          contentLoader = contentLoaders[key];
          break;
        }
      }
      if (!contentLoader && process.env.NODE_ENV === 'development') {
        // Help diagnose missing mapping during development
        // eslint-disable-next-line no-console
        console.warn('[ArticleService] Missing content mapping for cardId:', cardId);
      }
      if (contentLoader) {
        try {
          return await contentLoader();
        } catch (err) {
          if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.warn('[ArticleService] Failed to import markdown for', normalized, err);
          }
          return this.getDefaultContent(normalized);
        }
      }

      return this.getDefaultContent(normalized);
    } catch {
      // Failed to load content - use default
      return this.getDefaultContent(cardId.trim());
    }
  }

  protected getDefaultContent(cardId: string): string {
    const title = this.getTitleFromCardId(cardId);
    return `# ${title}

        内容正在开发中...

        请稍后查看完整内容。`;
  }

  protected getTitleFromCardId(cardId: string): string {
    const card = bestPracticesCards.find((c) => c.id === cardId);
    return card?.title || cardId;
  }
}

