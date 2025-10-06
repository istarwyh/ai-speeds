import { BaseContentService } from '../../shared/services/BaseContentService';
import type { PracticeCard } from '../types/PracticeCard';
import { bestPracticesCards } from '../data/cardsData';
import { contentLoaders } from '../generated/contentMap';
import { loadContentFromMap } from '../../shared/utils/contentLoader';

export type { Article } from '../../shared/services/BaseContentService';

export class ArticleService extends BaseContentService<PracticeCard> {
  protected async getContentFromFile(cardId: string): Promise<string> {
    const content = await loadContentFromMap(cardId, contentLoaders, 'BestPractices');
    if (content) {
      return content;
    }
    return this.getDefaultContent(cardId.trim());
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

