import { BaseArticleEventHandler, IArticleRenderer, IContentService } from '../../shared/handlers/BaseArticleEventHandler';
import { howToApplyCCCards } from '../data/cardsData';
import { applyCCCategoryConfig } from '../data/categoryConfig';

export class HowToApplyCCEventHandler extends BaseArticleEventHandler {
  constructor(
    containerId: string,
    contentService: IContentService,
    articleRenderer: IArticleRenderer
  ) {
    super(
      containerId,
      contentService,
      articleRenderer,
      () => (window as any).initializeHowToApplyCC()
    );
  }

  protected resolveCardById(id: string) {
    return howToApplyCCCards.find((c) => c.id === id) || null;
  }

  protected getIcon(category: string): string {
    return applyCCCategoryConfig[category] || '📋';
  }
}