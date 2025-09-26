import { BaseContentService } from '../../shared/services/BaseContentService';
import type { MarkdownParser } from '../../bestPractices/services/MarkdownParser';
import sdkQuickInstall from '../content/sdk-quick-install.md';
import createFirstAgent from '../content/create-first-agent.md';
import apiAuthentication from '../content/api-authentication.md';
import multiTurnConversations from '../content/multi-turn-conversations.md';
import customSystemPrompts from '../content/custom-system-prompts.md';
import outputFormatControl from '../content/output-format-control.md';
import mcpToolsIntegration from '../content/mcp-tools-integration.md';
import sreAgentExample from '../content/sre-agent-example.md';
import securityAuditAgent from '../content/security-audit-agent.md';

export class HowToApplyCCService extends BaseContentService {
  constructor(markdownParser: MarkdownParser) {
    super(markdownParser, false); // 第二个参数是 disableCache
  }

  protected async getContentFromFile(cardId: string): Promise<string> {
    // 构建时导入所有 Markdown，避免运行时通过 HTTP 获取
    const contentMap: Record<string, string> = {
      'sdk-quick-install': sdkQuickInstall,
      'create-first-agent': createFirstAgent,
      'api-authentication': apiAuthentication,
      'multi-turn-conversations': multiTurnConversations,
      'custom-system-prompts': customSystemPrompts,
      'output-format-control': outputFormatControl,
      'mcp-tools-integration': mcpToolsIntegration,
      'sre-agent-example': sreAgentExample,
      'security-audit-agent': securityAuditAgent,
    };

    const content = contentMap[cardId];
    if (content) {
      return content;
    }

    throw new Error(`Content not found for cardId: ${cardId}`);
  }

  protected getDefaultContent(cardId: string): string {
    return `# 内容不可用\n\n未找到卡片: ${cardId}`;
  }

  protected getTitleFromCardId(cardId: string): string {
    const titles: Record<string, string> = {
      'sdk-quick-install': 'SDK快速安装',
      'create-first-agent': '创建你的第一个 Agent',
      'api-authentication': 'API 认证方法',
      'multi-turn-conversations': '多轮对话管理',
      'custom-system-prompts': '自定义系统提示词',
      'output-format-control': '输出格式控制',
      'mcp-tools-integration': 'MCP 工具集成',
      'permission-security': '权限与安全控制',
      'sre-agent-example': 'SRE Agent 实践示例',
      'security-audit-agent': '安全审计 Agent',
    };

    return titles[cardId] || cardId;
  }
}
