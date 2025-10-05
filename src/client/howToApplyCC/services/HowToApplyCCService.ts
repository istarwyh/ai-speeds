import { BaseContentService } from '../../shared/services/BaseContentService';
import type { SDKCard } from '../../shared/types/ContentCard';
import type { MarkdownParser } from '../../bestPractices/services/MarkdownParser';
import { howToApplyCCCards } from '../data/cardsData';
import { contentLoaders } from '../generated/contentMap';
import { loadContentFromMap } from '../../shared/utils/contentLoader';

export class HowToApplyCCService extends BaseContentService<SDKCard> {
  constructor(markdownParser: MarkdownParser) {
    super(markdownParser, false);
  }
  protected async getContentFromFile(cardId: string): Promise<string> {
    try {
      const content = await loadContentFromMap(cardId, contentLoaders, 'HowToApplyCC');
      if (content) {
        return content;
      }
      return this.getDefaultContent(cardId.trim());
    } catch {
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
    // SSOT: 从 cardsData 中获取标题
    const card = howToApplyCCCards.find((c) => c.id === cardId);
    return card?.title || cardId;
  }
}
