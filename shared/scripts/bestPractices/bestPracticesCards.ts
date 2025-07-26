// 重构后的模块化 Best Practices Cards
// 真正的模块化架构 - 清洁的入口文件

import { bestPracticesCards } from './data/cardsData';
import { categoryIcons, difficultyColors, difficultyLabels } from './data/categoryConfig';
import { cardIdMapping } from './data/articleMapping';
import { markdownArticles } from './data/markdownContent';

// 生成完整的模块化脚本
export const bestPracticesOverviewCardsScript = `
// 模块化 Best Practices Overview Cards
// 架构：数据层 -> 渲染层 -> 事件处理层 -> 服务层 -> 主管理器

// ===== 数据层 =====
const bestPracticesCards = ${JSON.stringify(bestPracticesCards, null, 2)};

const categoryIcons = ${JSON.stringify(categoryIcons, null, 2)};

const difficultyColors = ${JSON.stringify(difficultyColors, null, 2)};

const difficultyText = ${JSON.stringify(difficultyLabels, null, 2)};

const markdownArticles = ${JSON.stringify(markdownArticles, null, 2)};

const cardIdMapping = ${JSON.stringify(cardIdMapping, null, 2)};

// ===== 渲染层 =====
class CardRenderer {
  renderCard(card) {
    const icon = categoryIcons[card.category] || '📋';
    const difficultyColor = difficultyColors[card.difficulty];
    const difficultyLabel = difficultyText[card.difficulty];
    
    const sectionsHtml = this.renderSections(card.sections);
    const tipsHtml = this.renderTips(card.tips);
    const tagsHtml = this.renderTags(card.tags);
    
    return \`
      <div class="practice-card overview-card" data-card-id="\${card.id}">
        <div class="overview-card__header">
          <div class="overview-card__title-section">
            <div class="overview-card__icon">\${icon}</div>
            <h3 class="overview-card__title">\${card.title}</h3>
          </div>
          <div class="overview-card__meta">
            <span class="overview-card__difficulty" style="--difficulty-color: \${difficultyColor}">
              \${difficultyLabel}
            </span>
            <span class="overview-card__read-time">📖 \${card.readTime}</span>
          </div>
        </div>
        
        <div class="overview-card__content">
          <p class="overview-card__description">\${card.description}</p>
          <div class="overview-card__overview">\${card.overview}</div>
          
          <div class="overview-card__sections">
            <h4 class="overview-card__sections-title">主要内容：</h4>
            <ul class="overview-card__sections-list">
              \${sectionsHtml}
            </ul>
          </div>

          \${tipsHtml ? \`<div class="overview-card__tips">\${tipsHtml}</div>\` : ''}
          
          <div class="overview-card__tags">
            \${tagsHtml}
          </div>
        </div>
        
        <div class="overview-card__footer">
          <button class="overview-card__action-btn" data-card-id="\${card.id}">
            查看详细内容 →
          </button>
          <div class="overview-card__updated">
            更新时间：\${card.lastUpdated}
          </div>
        </div>
      </div>
    \`;
  }

  renderCards(cards) {
    const cardsHtml = cards.map(card => this.renderCard(card)).join('');
    return \`
      <div class="overview-cards-grid">
        \${cardsHtml}
      </div>
    \`;
  }

  renderSections(sections) {
    return sections.map(section => \`
      <li class="overview-card__section-item">
        <span class="overview-card__section-title">\${section.title}</span>
        <span class="overview-card__section-desc">\${section.content}</span>
      </li>
    \`).join('');
  }

  renderTips(tips) {
    if (!tips) return '';
    return tips.map(tip => \`
      <div class="overview-card__tip overview-card__tip--\${tip.type}">
        <strong>\${tip.title}：</strong>\${tip.content}
      </div>
    \`).join('');
  }

  renderTags(tags) {
    return tags.map(tag => \`
      <span class="overview-card__tag">\${tag}</span>
    \`).join('');
  }
}

class ArticleRenderer {
  renderLoadingState() {
    return \`
      <div class="article-loading" style="text-align: center; padding: 60px 30px;">
        <div style="width: 40px; height: 40px; margin: 0 auto 20px; border: 4px solid #f3f4f6; border-top: 4px solid #667eea; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        <h2 style="color: #374151; margin-bottom: 16px;">正在加载文章内容...</h2>
        <p style="color: #6b7280; margin-bottom: 30px;">请稍候，我们正在为您准备详细内容。</p>
        <button onclick="showBestPracticesOverview()" style="background: #667eea; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">← 返回概览</button>
      </div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    \`;
  }

  renderArticle(articleId, article) {
    return \`
      <div class="article-container" style="max-width: 800px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08); overflow: hidden;">
        <div class="article-header" style="padding: 20px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
          <button onclick="showBestPracticesOverview()" style="background: rgba(255, 255, 255, 0.2); border: 1px solid rgba(255, 255, 255, 0.3); color: white; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
            ← 返回概览
          </button>
          <h1 style="margin: 15px 0 0 0; font-size: 1.5rem;">\${article.title}</h1>
        </div>
        
        <div class="article-content" style="padding: 40px 30px; line-height: 1.7; color: #374151;">
          \${article.content}
        </div>
      </div>
    \`;
  }
}

// ===== 事件处理层 =====
class EventHandler {
  constructor(containerId) {
    this.containerId = containerId;
    this.boundClickHandler = this.handleCardClick.bind(this);
  }

  bindEventListeners() {
    console.log('开始绑定事件监听器');
    
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error('未找到容器元素');
      return;
    }
    
    console.log('找到容器元素:', container);
    this.logContainerStatus(container);
    
    this.removeExistingListeners(container);
    this.addEventListeners(container);
    
    console.log('事件委托绑定完成');
  }

  logContainerStatus(container) {
    const buttons = container.querySelectorAll('.overview-card__action-btn');
    console.log('容器内找到的按钮数量:', buttons.length);
    buttons.forEach((btn, index) => {
      console.log(\`按钮 \${index + 1}:\`, {
        class: btn.className,
        cardId: btn.getAttribute('data-card-id'),
        text: btn.textContent.trim()
      });
    });
  }

  removeExistingListeners(container) {
    container.removeEventListener('click', this.boundClickHandler);
  }

  addEventListeners(container) {
    container.addEventListener('click', this.boundClickHandler);
    
    container.addEventListener('click', function(e) {
      console.log('容器收到点击事件:', {
        target: e.target,
        targetClass: e.target.className,
        targetTag: e.target.tagName
      });
    }, true);
  }

  handleCardClick(e) {
    console.log('handleCardClick被调用:', e.target);
    
    const targetButton = this.findTargetButton(e);
    
    if (targetButton) {
      this.processButtonClick(e, targetButton);
    } else {
      console.log('点击的不是按钮，也没找到对应的卡片:', e.target.className, e.target.tagName);
    }
  }

  findTargetButton(e) {
    if (e.target.classList.contains('overview-card__action-btn')) {
      console.log('直接点击按钮');
      return e.target;
    }
    
    const card = e.target.closest('.practice-card');
    if (card) {
      const button = card.querySelector('.overview-card__action-btn');
      console.log('点击卡片内元素，找到对应按钮:', button);
      return button;
    }
    
    return null;
  }

  processButtonClick(e, button) {
    console.log('确认找到目标按钮');
    e.preventDefault();
    e.stopPropagation();
    
    const cardId = button.getAttribute('data-card-id');
    console.log('点击事件被触发！卡片ID:', cardId);
    
    if (cardId) {
      this.logButtonStatus(button);
      window.showDetailedContent(cardId);
    } else {
      console.error('未找到卡片ID');
    }
  }

  logButtonStatus(button) {
    const styles = window.getComputedStyle(button);
    console.log('按钮CSS状态:', {
      pointerEvents: styles.pointerEvents,
      display: styles.display,
      visibility: styles.visibility,
      zIndex: styles.zIndex,
      position: styles.position
    });
  }
}

// ===== 服务层 =====
class MarkdownParser {
  static parseMarkdownToHtml(markdown) {
    return markdown
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
      .replace(/^\\d+\\.\\s+(.+)$/gm, '<li>$1</li>')
      .replace(/^-\\s+(.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.*<\\/li>)/s, '<ol>$1</ol>')
      .replace(/\`\`\`([\\s\\S]*?)\`\`\`/g, '<pre><code>$1</code></pre>')
      .replace(/\`([^\`]+)\`/g, '<code>$1</code>')
      .replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>')
      .split('\\n\\n')
      .map(para => para.trim() ? (para.startsWith('<') ? para : \`<p>\${para}</p>\`) : '')
      .filter(para => para)
      .join('\\n');
  }

  static extractTitleFromMarkdown(markdown) {
    const titleMatch = markdown.match(/^#\\s+(.+)$/m);
    return titleMatch ? titleMatch[1] : '未知标题';
  }
}

class ArticleService {
  constructor() {
    this.containerId = 'best-practices-overview-cards';
    this.articleRenderer = new ArticleRenderer();
  }

  async loadArticleContent(articleId) {
    this.showLoadingState();
    
    try {
      // 异步读取真实的 markdown 文件内容
      const article = await this.getArticleFromMarkdownData(articleId);
      this.displayArticle(articleId, article);
    } catch (error) {
      console.error('加载文章失败:', error);
      this.displayError(articleId, error.message);
    }
  }

  async getArticleFromMarkdownData(articleId) {
    const markdownArticle = markdownArticles[articleId];
    if (!markdownArticle) {
      throw new Error(\`文章 \${articleId} 未找到\`);
    }
    
    // 读取真实的 markdown 文件
    const markdownPath = \`/modules/best-practices/articles/\${markdownArticle.filePath}\`;
    const response = await fetch(markdownPath);
    
    if (!response.ok) {
      throw new Error(\`无法加载文章文件: \${markdownPath}\`);
    }
    
    const markdownContent = await response.text();
    const htmlContent = MarkdownParser.parseMarkdownToHtml(markdownContent);
    
    return {
      title: markdownArticle.title,
      content: htmlContent
    };
  }

  showLoadingState() {
    const container = document.getElementById(this.containerId);
    if (!container) return;
    
    container.innerHTML = this.articleRenderer.renderLoadingState();
  }

  async fetchArticleFromMarkdown(articleId) {
    const markdownPath = \`/modules/best-practices/articles/\${articleId}.md\`;
    const response = await fetch(markdownPath);
    
    if (!response.ok) {
      throw new Error('文章文件未找到');
    }
    
    const markdownContent = await response.text();
    const htmlContent = MarkdownParser.parseMarkdownToHtml(markdownContent);
    const articleTitle = MarkdownParser.extractTitleFromMarkdown(markdownContent);
    
    return {
      title: articleTitle,
      content: htmlContent
    };
  }

  displayArticle(articleId, article) {
    const container = document.getElementById(this.containerId);
    if (!container) return;
    
    container.innerHTML = this.articleRenderer.renderArticle(articleId, article);
  }

  displayError(articleId, errorMessage) {
    const container = document.getElementById(this.containerId);
    if (!container) return;
    
    container.innerHTML = \`
      <div class="article-error" style="text-align: center; padding: 60px 30px; background: white; border-radius: 12px; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);">
        <div style="color: #ef4444; font-size: 48px; margin-bottom: 20px;">⚠️</div>
        <h2 style="color: #dc2626; margin-bottom: 16px;">文章加载失败</h2>
        <p style="color: #6b7280; margin-bottom: 20px;">错误信息：\${errorMessage}</p>
        <p style="color: #6b7280; margin-bottom: 30px;">请稍后重试，或联系管理员解决此问题。</p>
        <button onclick="showBestPracticesOverview()" style="background: #667eea; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px;">← 返回概览</button>
      </div>
    \`;
  }

}

// ===== 导航处理层 =====
class NavigationHandler {
  static showDetailedContent(cardId) {
    console.log('显示详细内容:', cardId);
    const articleId = cardIdMapping[cardId] || cardId;
    const articleService = new ArticleService();
    articleService.loadArticleContent(articleId);
  }

  static showBestPracticesOverview() {
    console.log('返回最佳实践概览页面');
    const manager = new BestPracticesManager();
    manager.renderBestPracticesOverviewCards();
    setTimeout(() => {
      manager.bindEventListeners();
    }, 100);
  }
}

// ===== 主管理器 =====
class BestPracticesManager {
  constructor() {
    this.containerId = 'best-practices-overview-cards';
    this.cardRenderer = new CardRenderer();
    this.eventHandler = new EventHandler(this.containerId);
    this.articleService = new ArticleService();
  }

  renderBestPracticesOverviewCards() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.log('Container not found: best-practices-overview-cards');
      return;
    }

    const cardsHtml = this.cardRenderer.renderCards(bestPracticesCards);
    container.innerHTML = cardsHtml;
    
    console.log('Best Practices Overview Cards rendered successfully');
  }

  bindEventListeners() {
    this.eventHandler.bindEventListeners();
  }

  initialize() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          this.renderBestPracticesOverviewCards();
          console.log('模块化架构渲染完成');
          this.bindEventListeners();
        }, 500);
      });
    } else {
      setTimeout(() => {
        this.renderBestPracticesOverviewCards();
        console.log('模块化架构渲染完成');
        this.bindEventListeners();
      }, 500);
    }
  }
}

// ===== 全局函数设置 =====
window.showDetailedContent = NavigationHandler.showDetailedContent;
window.showBestPracticesOverview = NavigationHandler.showBestPracticesOverview;

// ===== 初始化 =====
const bestPracticesManager = new BestPracticesManager();
bestPracticesManager.initialize();
`;

export function initializeBestPracticesOverviewCards(): void {
  console.log('Initializing Best Practices Overview Cards - 真正的模块化架构');
}