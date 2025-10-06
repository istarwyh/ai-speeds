import { BaseContentService } from '../../shared/services/BaseContentService';
import type { ImplementCard } from '../../shared/types/ContentCard';
import { howToImplementCards } from '../data/cardsData';
import { contentLoaders } from '../generated/contentMap';
import { loadContentFromMap } from '../../shared/utils/contentLoader';

export class HowToImplementService extends BaseContentService<ImplementCard> {
  protected async getContentFromFile(cardId: string): Promise<string> {
    const content = await loadContentFromMap(cardId, contentLoaders, 'HowToImplement');
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
    // SSOT: 从 cardsData 中获取标题
    const card = howToImplementCards.find(c => c.id === cardId);
    return card?.title || cardId;
  }
}
