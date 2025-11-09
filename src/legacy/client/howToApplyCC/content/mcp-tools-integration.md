# MCP工具集成

通过模型上下文协议(MCP)扩展Agent能力，集成Slack、JIRA、数据库等外部工具。

## MCP协议基础

MCP(Model Context Protocol)允许AI Agent安全地调用外部工具和服务：

### 核心概念

- **MCP服务器**: 提供工具功能的服务端
- **工具定义**: 描述工具的名称、参数和返回值
- **权限控制**: 细粒度的工具访问控制

### 常用工具配置

## Slack集成

```typescript
import { ClaudeCodeSDK } from '@anthropic/claude-code-sdk';

const slackAgent = new ClaudeCodeSDK({
  apiKey: process.env.ANTHROPIC_API_KEY,
  mcpServers: [
    {
      name: 'slack',
      url: 'http://localhost:3001',
      tools: ['send_message', 'list_channels', 'get_user_info'],
      auth: {
        token: process.env.SLACK_BOT_TOKEN,
      },
    },
  ],
});

// 使用示例
await slackAgent.run('在#general频道发布系统更新通知');
```

## JIRA集成

```typescript
const jiraAgent = new ClaudeCodeSDK({
  mcpServers: [
    {
      name: 'jira',
      url: 'http://localhost:3002',
      tools: [
        'create_issue',
        'update_issue',
        'get_issue_details',
        'list_projects',
        'add_comment'
      ],
      auth: {
        email: process.env.JIRA_EMAIL,
        token: process.env.JIRA_API_TOKEN,
        domain: process.env.JIRA_DOMAIN
      }
    }
  ]
});

// 自动化任务管理
await jiraAgent.run("
根据这个PR创建JIRA任务：
- 标题：修复用户登录问题
- 描述：优化登录流程的性能
- 分配给：后端团队
- 优先级：高
");
```

## 数据库连接

### PostgreSQL集成

```typescript
const dbAgent = new ClaudeCodeSDK({
  mcpServers: [
    {
      name: 'postgresql',
      url: 'http://localhost:3003',
      tools: [
        'execute_query',
        'get_schema_info',
        'create_table',
        'backup_database'
      ],
      auth: {
        connection_string: process.env.DATABASE_URL
      }
    }
  ]
});

// 数据库操作示例
await dbAgent.run("
查询过去7天用户注册数据，生成分析报告
");
```

## 工具权限控制

### 白名单机制

```typescript
const secureAgent = new ClaudeCodeSDK({
  mcpServers: [
    {
      name: 'restricted_tools',
      allowedTools: ['read_file', 'list_directories', 'search_code'],
      disallowedTools: ['write_file', 'execute_command', 'delete_files'],
    },
  ],
});
```

### 角色基础权限

```typescript
const roleBasedPermissions = {
  developer: ['code_tools', 'git_operations', 'testing_tools'],
  manager: ['reporting_tools', 'project_management', 'analytics_tools'],
  admin: ['system_tools', 'user_management', 'configuration_tools'],
};
```

## 自定义MCP服务器

### 业务专属工具

```typescript
// 创建企业专用MCP服务器
const customMcpServer = {
  name: 'enterprise_tools',
  tools: [
    {
      name: 'deploy_application',
      description: '部署应用到生产环境',
      parameters: {
        app_name: 'string',
        environment: 'string',
        version: 'string',
      },
    },
    {
      name: 'monitor_system',
      description: '监控系统健康状态',
      parameters: {
        metrics: 'array',
        time_range: 'string',
      },
    },
  ],
};
```

### 工具包组合

```typescript
// SRE专用工具包
const sreToolKit = {
  monitoring: ['datadog', 'prometheus', 'grafana'],
  deployment: ['kubernetes', 'docker', 'helm'],
  incident: ['pagerduty', 'statuspage', 'slack'],
};

// 开发工具包
const devToolKit = {
  testing: ['jest', 'playwright', 'cypress'],
  linting: ['eslint', 'prettier', 'sonarqube'],
  documentation: ['swagger', 'storybook'],
};
```

MCP工具需要显式授权才能使用，遵循最小权限原则配置工具访问。为不同业务场景设计专门的 MCP 工具组合，如 SRE 工具包、开发工具包等。安全控制是 MCP 集成的核心要素，确保所有工具调用都经过适当授权和审计。
