import { BaseArticleEventHandler, IArticleRenderer, IContentService } from '../../shared/handlers/BaseArticleEventHandler';
import { howToImplementCards } from '../data/cardsData';
import { categoryIcons } from '../data/categoryConfig';

export class HowToImplementEventHandler extends BaseArticleEventHandler {
  constructor(
    containerId: string,
    contentService: IContentService,
    articleRenderer: IArticleRenderer
  ) {
    super(
      containerId,
      contentService,
      articleRenderer,
      () => (window as any).initializeHowToImplement()
    );
  }

  protected resolveCardById(id: string) {
    return howToImplementCards.find((c) => c.id === id) || null;
  }

  protected getIcon(category: string): string {
    return categoryIcons[category] || '📋';
  }
}