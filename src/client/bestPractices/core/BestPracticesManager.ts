import { BaseContentManager } from '../../shared/managers/BaseContentManager';
import { CardRenderer } from '../renderers/CardRenderer';
import { ArticleRenderer } from '../renderers/ArticleRenderer';
import { EventHandler } from '../handlers/EventHandler';
import { NavigationHandler } from '../handlers/NavigationHandler';
import { ArticleService } from '../services/ArticleService';
import { MarkdownParser } from '../services/MarkdownParser';
import { bestPracticesCards } from '../data/cardsData';
import type { PracticeCard } from '../types/PracticeCard';

export class BestPracticesManager extends BaseContentManager<PracticeCard> {
  private readonly bpEventHandler: EventHandler;

  constructor() {
    const cardRenderer = new CardRenderer();
    const articleRenderer = new ArticleRenderer();
    const markdownParser = new MarkdownParser();
    const articleService = new ArticleService(markdownParser);
    const eventHandler = new EventHandler(
      'best-practices-overview-cards',
      articleService,
      articleRenderer
    );
    const navigationHandler = new NavigationHandler();
    
    super(
      cardRenderer,
      articleRenderer,
      eventHandler,
      navigationHandler,
      articleService,
      'best-practices-overview-cards'
    );

    this.bpEventHandler = eventHandler;
  }

  public initialize(): void {
    super.initialize();
    this.setupDeepLinkRouting();
  }

  protected getCards(): PracticeCard[] {
    return bestPracticesCards;
  }

  // —— Deep link and popstate handling ——
  private setupDeepLinkRouting(): void {
    // Initial URL parse
    this.applyRouteFromLocation();

    // Sync back/forward navigation
    window.addEventListener('popstate', () => {
      this.applyRouteFromLocation((history.state as any) || null);
    });
  }

  private applyRouteFromLocation(state?: any): void {
    try {
      const params = new URLSearchParams(window.location.search);
      const moduleName = state?.module || params.get('module');
      if (moduleName !== 'best-practices') return; // ignore others

      const view = state?.view || params.get('view') || 'overview';
      const cardId = state?.cardId || params.get('cardId') || '';

      if (view === 'article' && cardId) {
        void this.bpEventHandler.openArticleFromHistory(cardId);
      } else {
        this.ensureOverviewReady();
      }
    } catch (e) {
      // Fallback: ensure overview shows
      this.ensureOverviewReady();
    }
  }

  private ensureOverviewReady(): void {
    this.showOverview();
    // Re-bind listeners after re-render
    this.bindEventListeners();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
