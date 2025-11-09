import type { SDKCard } from '../../shared/types/ContentCard';

export const howToApplyCCCards: SDKCard[] = [
  {
    id: 'sdk-quick-install',
    title: 'SDK快速安装',
    description: '快速安装配置 Claude Code SDK，支持命令行、TypeScript 和 Python 三种使用方式',
    category: 'quick-start',
    tags: ['安装配置', '快速开始', 'CLI', 'TypeScript', 'Python'],
    tips: [
      {
        type: 'tip',
        title: '推荐方式',
        content: '对于快速原型开发推荐使用命令行方式，生产环境推荐 TypeScript 或 Python SDK',
      },
      {
        type: 'info',
        title: '环境要求',
        content: 'Node.js 18+ 是必需的，即使使用 Python SDK 也需要 NPM 依赖',
      },
    ],
  },

  {
    id: 'create-first-agent',
    title: '创建第一个Agent',
    description: '通过具体示例学习创建专业AI Agent，包括法律助手、SRE专家等实际场景',
    category: 'quick-start',
    tips: [
      {
        type: 'success',
        title: '实用建议',
        content: '从简单的单一功能 Agent 开始，逐步增加复杂度和工具集成',
      },
      {
        type: 'expert',
        title: '专业提示',
        content: '清晰的系统提示词是 Agent 表现优秀的关键，要明确定义角色、目标和约束',
      },
    ],
  },

  {
    id: 'api-authentication',
    title: 'API认证配置',
    description: '掌握多种API认证方式，包括Anthropic直连、Amazon Bedrock和Google Vertex AI',
    category: 'core-usage',
    tips: [
      {
        type: 'info',
        title: '成本考虑',
        content: '不同提供商的定价策略不同，选择认证方式时要考虑成本和地域限制',
      },
      {
        type: 'warning',
        title: '安全提醒',
        content: '生产环境中避免硬编码 API 密钥，使用环境变量和密钥管理服务',
      },
    ],
  },

  {
    id: 'multi-turn-conversations',
    title: '多轮对话管理',
    description: '学习管理复杂的多轮对话，包括会话持续、状态保持和上下文管理',
    category: 'core-usage',
    tags: ['多轮对话', '会话管理', '状态保持', '上下文管理'],
    tips: [
      {
        type: 'expert',
        title: '架构建议',
        content: '对于复杂业务流程，建议使用 Python SDK 的持久连接模式维护会话状态',
      },
      {
        type: 'tip',
        title: '性能优化',
        content: '合理控制 maxTurns 参数避免无限循环，同时保持足够的交互深度',
      },
    ],
  },

  {
    id: 'custom-system-prompts',
    title: '自定义系统提示词',
    description: '学习编写高质量的系统提示词，定义Agent的专业角色、行为模式和领域expertise',
    category: 'core-usage',
    tips: [
      {
        type: 'expert',
        title: '设计原则',
        content: '优秀的系统提示词应该明确定义"是什么"、"做什么"、"不做什么"三个关键要素',
      },
      {
        type: 'success',
        title: '测试建议',
        content: '通过多轮对话测试提示词的一致性，确保 Agent 在不同场景下的表现稳定',
      },
    ],
  },

  {
    id: 'output-format-control',
    title: '输出格式控制',
    description: '掌握Text、JSON、Stream三种输出格式，为不同应用场景选择最适合的数据交互方式',
    category: 'core-usage',
    tips: [
      {
        type: 'info',
        title: '性能考虑',
        content: '流式输出能显著改善用户体验，特别是对于长时间运行的 Agent 任务',
      },
      {
        type: 'tip',
        title: '集成建议',
        content: 'JSON 格式包含成本、耗时等元数据，便于监控和优化 Agent 性能',
      },
    ],
  },

  {
    id: 'mcp-tools-integration',
    title: 'MCP工具集成',
    description: '通过模型上下文协议(MCP)扩展Agent能力，集成Slack、JIRA、数据库等外部工具',
    category: 'advanced',
    tips: [
      {
        type: 'warning',
        title: '安全注意',
        content: 'MCP 工具需要显式授权才能使用，遵循最小权限原则配置工具访问',
      },
      {
        type: 'expert',
        title: '架构设计',
        content: '为不同业务场景设计专门的 MCP 工具组合，如 SRE 工具包、开发工具包等',
      },
    ],
  },
];
