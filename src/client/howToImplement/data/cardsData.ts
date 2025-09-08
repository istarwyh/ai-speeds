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
        content: '系统提示词包含了 Claude Code 的核心逻辑，理解后可以更精准地提出需求' 
      }
    ]
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
        content: '不是真的要实现，但确实好奇凭什么CC表现更好' 
      }
    ]
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
        content: '大语言模型名副其实，一切都是文本的游戏' 
      }
    ]
  },

  {
    id: 'claude-code-system-prompt-en',
    title: 'Claude Code System Prompt (English)',
    category: 'system-prompt',
    overview: 'Comprehensive English system prompt documentation with all tool definitions, usage rules, and behavioral constraints.',
    tips: [
      { 
        type: 'info', 
        title: 'Advanced Usage', 
        content: 'Understanding the system prompt deeply helps you customize and optimize AI assistant behavior' 
      }
    ]
  },
  {
    id: 'claude-code-conversation-example-1',
    title: 'Claude Code 对话示例',
    description: '真实的 Claude Code 使用对话记录，展示完整的开发流程和交互模式',
    category: 'conversation',
    difficulty: 'beginner',
    readTime: '15 分钟',
    tags: ['对话示例', '实际案例', '工作流程', 'Python开发'],
    overview: '通过真实对话记录了解 Claude Code 的工作方式，学习如何与 AI 协作开发俄罗斯方块游戏。',
    sections: [
      { title: '对话流程分析', content: '从需求提出到代码完成的完整交互过程', type: 'text' },
      { title: '工具使用示例', content: 'TodoWrite、LS、Write、Edit 等工具的实际应用', type: 'code' },
      { title: '任务分解策略', content: '如何将复杂任务拆分为可管理的步骤', type: 'list' }
    ],
    tips: [
      { 
        type: 'success', 
        title: '学习要点', 
        content: '注意观察 Claude Code 如何使用 TodoWrite 工具来规划和跟踪任务进度' 
      }
    ]
  },
  {
    id: 'claude-code-minusx-insights',
    title: 'CC为什么这么好: MinusX 深度解析',
    category: 'implementation',
    imageUrl: 'https://xiaohui-zhangjiakou.oss-cn-zhangjiakou.aliyuncs.com/image/202508312056917.png',
    tips: [
      { type: 'expert', title: '架构洞察', content: 'Claude Code 在每个分叉路口都选择架构简单性' },
      { type: 'warning', title: '调试优先', content: '可调试性 >> 复杂的 LangChain 图节点混合架构，这是关键的设计权衡' },
    ]
  }
];