import { BaseContentService } from '../../shared/services/BaseContentService';
import type { PracticeCard } from '../types/PracticeCard';

export { Article } from '../../shared/services/BaseContentService';

export class ArticleService extends BaseContentService<PracticeCard> {
  protected async getContentFromFile(cardId: string): Promise<string> {
    try {
      const contentMap: Record<string, () => Promise<string>> = {
        'workflow-overview': async () => (await import('../content/workflow-overview.md')).default,
        'environment-config': async () => (await import('../content/environment-config.md')).default,
        'mcp-commands': async () => (await import('../content/mcp-commands.md')).default,
        'core-workflow': async () => (await import('../content/core-workflow.md')).default,
        'context-management': async () => (await import('../content/context-management.md')).default,
        'automation-batch': async () => (await import('../content/automation-batch.md')).default,
        'concurrent-claude': async () => (await import('../content/concurrent-claude.md')).default,
        'software-engineering-with-claude': async () =>
          (await import('../content/software-engineering-with-claude.md')).default,
        'intelligent-undo': async () => (await import('../content/intelligent-undo.md')).default,
        'agent-linus-torvalds': async () => (await import('../content/agent-linus-torvalds.md')).default,
        'tdd-analyze-requirements': async () => (await import('../content/tdd-analyze-requirements.md')).default,
        'data-analysis': async () => (await import('../content/data-analysis.md')).default,
      };

      const contentLoader = contentMap[cardId];
      if (contentLoader) {
        return await contentLoader();
      }

      return this.getDefaultContent(cardId);
    } catch {
      // Failed to load content - use default
      return this.getDefaultContent(cardId);
    }
  }

  protected getDefaultContent(cardId: string): string {
    return `# ${this.getTitleFromCardId(cardId)}

        内容正在开发中...

        请稍后查看完整内容。`;
  }

  protected getTitleFromCardId(cardId: string): string {
    const titles: Record<string, string> = {
      'workflow-overview': '我现在的工作流',
      'environment-config': '自定义环境配置',
      'mcp-commands': 'MCP 与常用命令',
      'core-workflow': '核心工作流程',
      'context-management': '上下文管理',
      'automation-batch': '自动化与批处理',
      'concurrent-claude': '多 Claude 并发干活',
      'software-engineering-with-claude': '软件工程与 Claude',
      'intelligent-undo': '智能撤销工具',
      'agent-linus-torvalds': 'Linus Torvalds Agent',
      'tdd-analyze-requirements': 'Vibe coding with TDD（简单版）',
      'data-analysis': 'CAIBAO-DA 专业数据分析师',
    };

    return titles[cardId] || cardId;
  }
}
