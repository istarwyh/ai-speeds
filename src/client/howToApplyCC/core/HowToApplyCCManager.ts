import { BaseContentManager } from '../../shared/managers/BaseContentManager';
import { HowToApplyCCCardRenderer } from '../renderers/CardRenderer';
import { ArticleRenderer } from '../../bestPractices/renderers/ArticleRenderer';
import { HowToApplyCCEventHandler } from '../handlers/EventHandler';
import { NavigationHandler } from '../../bestPractices/handlers/NavigationHandler';
import { HowToApplyCCService } from '../services/HowToApplyCCService';
import { MarkdownParser } from '../../bestPractices/services/MarkdownParser';
import { howToApplyCCCards } from '../data/cardsData';
import type { SDKCard } from '../../shared/types/ContentCard';

export class HowToApplyCCManager extends BaseContentManager<SDKCard> {
  constructor() {
    const cardRenderer = new HowToApplyCCCardRenderer();
    const articleRenderer = new ArticleRenderer();
    const markdownParser = new MarkdownParser();
    const contentService = new HowToApplyCCService(markdownParser);
    const eventHandler = new HowToApplyCCEventHandler(
      'how-to-apply-cc-overview-cards',
      contentService,
      articleRenderer,
    );
    const navigationHandler = new NavigationHandler();

    super(
      cardRenderer,
      articleRenderer,
      eventHandler,
      navigationHandler,
      contentService,
      'how-to-apply-cc-overview-cards',
    );
  }

  protected getCards(): SDKCard[] {
    return howToApplyCCCards;
  }
}
