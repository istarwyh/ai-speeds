import type { ImplementCard } from '../../shared/types/ContentCard';
import { getImageUrl } from '../../shared/config/assets';

export const howToImplementCards: ImplementCard[] = [
  {
    id: 'claude-code-system-prompt-cn',
    title: 'Claude Code 系统提示词(中文)',
    category: 'system-prompt',
    tips: [
      {
        type: 'warning',
        title: '注意事项',
        content: '系统提示词包含了 Claude Code 的核心逻辑，理解后可以更精准地提出需求',
      },
    ],
  },
  {
    id: 'claude-code-implementation',
    title: 'Claude Code 逆向介绍',
    imageUrl: getImageUrl('claude-code-implementation'),
    category: 'implementation',
    tips: [
      {
        type: 'success',
        title: '阅读建议',
        content: '不是真的要实现，但确实好奇凭什么CC表现更好',
      },
    ],
  },
  {
    id: 'claude-code-output-format-example-1',
    title: 'Claude Code 输出格式示例',
    imageUrl: getImageUrl('claude-code-git-integration'),
    description: '展示 Claude Code 输出格式和响应模式的具体示例',
    category: 'examples',
    tips: [
      {
        type: 'tip',
        title: '格式规范',
        content: '大语言模型名副其实，一切都是文本的游戏',
      },
    ],
  },

  {
    id: 'claude-code-system-prompt-en',
    title: 'Claude Code System Prompt (English)',
    category: 'system-prompt',
    overview:
      'Comprehensive English system prompt documentation with all tool definitions, usage rules, and behavioral constraints.',
    tips: [
      {
        type: 'info',
        title: 'Advanced Usage',
        content: 'Understanding the system prompt deeply helps you customize and optimize AI assistant behavior',
      },
    ],
  },
  {
    id: 'claude-code-minusx-insights',
    title: 'CC为什么这么好: MinusX 深度解析',
    category: 'implementation',
    imageUrl: 'https://xiaohui-zhangjiakou.oss-cn-zhangjiakou.aliyuncs.com/image/202508312056917.png',
    tips: [
      { type: 'expert', title: '架构洞察', content: 'Claude Code 在每个分叉路口都选择架构简单性' },
      {
        type: 'warning',
        title: '调试优先',
        content: '可调试性 >> 复杂的 LangChain 图节点混合架构，这是关键的设计权衡',
      },
    ],
  },
];
