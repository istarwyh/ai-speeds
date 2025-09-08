import { BaseArticleEventHandler, IArticleRenderer, IContentService } from '../../shared/handlers/BaseArticleEventHandler';
import { bestPracticesCards } from '../data/cardsData';
import { categoryIcons } from '../data/categoryConfig';

// Animation duration constant
const EXIT_ANIMATION_DURATION = 230; // 匹配 CSS 中的动画时长

export class EventHandler extends BaseArticleEventHandler {
  constructor(
    containerId: string,
    contentService: IContentService,
    articleRenderer: IArticleRenderer
  ) {
    super(
      containerId,
      contentService,
      articleRenderer,
      () => (window as any).initializeBestPractices()
    );
  }

  protected addDebugListeners(container: HTMLElement): void {
    container.addEventListener(
      'click',
      function (e) {
        console.log('容器收到点击事件:', {
          target: e.target,
          targetClass: (e.target as HTMLElement).className,
          targetTag: (e.target as HTMLElement).tagName,
        });
      },
      true
    );
  }

  protected async beforeEnterArticle(container: HTMLElement): Promise<void> {
    const grid = container.querySelector(
      '.overview-cards-grid'
    ) as HTMLElement | null;
    if (grid) {
      grid.classList.add('is-exiting');
      await new Promise((resolve) => setTimeout(resolve, EXIT_ANIMATION_DURATION));
    }
  }

  protected handleCardClick(e: Event): void {
    // Defer to BaseArticleEventHandler which now handles share clicks and navigation
    super.handleCardClick(e);
  }

  protected resolveCardById(id: string) {
    return bestPracticesCards.find((c) => c.id === id) || null;
  }

  protected getIcon(category: string): string {
    return categoryIcons[category] || '📋';
  }

  // 深链接模块标识，保持与 URL 参数一致
  protected getModuleName(): string {
    return 'best-practices';
  }
}
