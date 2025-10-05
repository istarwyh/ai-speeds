import { BaseContentService } from '../../shared/services/BaseContentService';
import type { SDKCard } from '../../shared/types/ContentCard';
import type { MarkdownParser } from '../../bestPractices/services/MarkdownParser';

export class HowToApplyCCService extends BaseContentService<SDKCard> {
  constructor(markdownParser: MarkdownParser) {
    super(markdownParser, false);
  }
  protected async getContentFromFile(cardId: string): Promise<string> {
    try {
      const contentMap: Record<string, () => Promise<string>> = {
        'sdk-quick-install': async () => (await import('../content/sdk-quick-install.md')).default,
        'create-first-agent': async () => (await import('../content/create-first-agent.md')).default,
        'api-authentication': async () => (await import('../content/api-authentication.md')).default,
        'multi-turn-conversations': async () => (await import('../content/multi-turn-conversations.md')).default,
        'custom-system-prompts': async () => (await import('../content/custom-system-prompts.md')).default,
        'output-format-control': async () => (await import('../content/output-format-control.md')).default,
        'mcp-tools-integration': async () => (await import('../content/mcp-tools-integration.md')).default,
        'security-audit-agent': async () => (await import('../content/security-audit-agent.md')).default,
        'sre-agent-example': async () => (await import('../content/sre-agent-example.md')).default,
      };

      const contentLoader = contentMap[cardId];
      if (contentLoader) {
        return await contentLoader();
      }

      return this.getDefaultContent(cardId);
    } catch {
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
      'sdk-quick-install': 'SDK快速安装',
      'create-first-agent': '创建第一个Agent',
      'api-authentication': 'API认证配置',
      'multi-turn-conversations': '多轮对话管理',
      'custom-system-prompts': '自定义系统提示词',
      'output-format-control': '输出格式控制',
      'mcp-tools-integration': 'MCP工具集成',
      'security-audit-agent': '安全审计代理',
      'sre-agent-example': 'SRE 代理示例',
    };

    return titles[cardId] || cardId;
  }
}
