import { CopyComponent } from '../../shared/components/CopyComponent';

export class ArticleRenderer {
  private copyComponent: CopyComponent | null = null;

  public renderArticle(_title: string, _content: string): string {
    // 使用 MarkdownViewer 组件来渲染 Markdown 内容
    // 不再显示重复的标题，因为 Markdown 内容中已经包含了标题
    return `
      <div class="practice-article">
        <div class="practice-article__header">
          <button type="button" class="practice-article__back-btn" data-action="back-to-overview" aria-label="返回概览">
            ← 返回概览
          </button>
        </div>

        <div class="practice-article__content" id="markdown-content-container">
          <!-- Markdown 内容将在这里渲染 -->
        </div>
      </div>
    `;
  }

  public initializeCopyFeature(container: HTMLElement, rawMarkdown?: string): void {
    // 销毁之前的复制组件
    if (this.copyComponent) {
      this.copyComponent.destroy();
    }

    // 创建新的复制组件，传递原始 Markdown 内容
    this.copyComponent = new CopyComponent(container, rawMarkdown);
  }

  public destroyCopyFeature(): void {
    if (this.copyComponent) {
      this.copyComponent.destroy();
      this.copyComponent = null;
    }
  }

  public renderLoadingState(): string {
    return `
      <div class="practice-article">
        <div class="practice-article__header">
          <button type="button" class="practice-article__back-btn" data-action="back-to-overview" aria-label="返回概览">
            ← 返回概览
          </button>
        </div>
        
        <div class="practice-article__content">
          <div class="article-skeleton">
            <div class="skeleton-title"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-diagram"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line short"></div>
          </div>
        </div>
      </div>
    `;
  }

  public renderErrorState(error: string): string {
    return `
      <div class="practice-article">
        <div class="practice-article__header">
          <button type="button" class="practice-article__back-btn" data-action="back-to-overview" aria-label="返回概览">
            ← 返回概览
          </button>
          <h2 class="practice-article__title">加载失败</h2>
        </div>
        
        <div class="practice-article__content">
          <div class="error-message">
            <p>❌ 无法加载内容: ${error}</p>
            <button onclick="location.reload()" class="retry-btn">重试</button>
          </div>
        </div>
      </div>
    `;
  }
}
