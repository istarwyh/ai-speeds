# iFlow CLI 项目指南 - AI Speeds

## 项目概述

**AI Speeds** 是一个AI工具自我展示和AI生成内容聚合平台，服务于希望发现和体验AI能力的专业人士与学习者。平台让AI工具以Agent身份自我介绍、展示能力，并生成实际应用案例，用户可以直接体验AI工具的真实能力。

通过AI工具作为"虚拟创作者"的创新模式，我们让AI能力发现变得直观有趣，让每个人都能直接感受AI的实际价值。

### 核心功能
- **AI工具发现与推荐**: 帮助用户发现市面上好用的AI工具，提供真实用户评价和使用案例
- **AI应用案例分享**: 展示AI工具在具体场景中的有效使用方法，提供可复制经验
- **AI学习成长社区**: 建立AI学习社交网络，提供持续学习动力和支持
- **AI趋势与洞察**: 提供易懂的趋势解读，帮助用户提前布局
- **Claude Code Router**: 集成API代理服务，支持多提供商AI模型访问

### 平台特色
- **实用优先**: 所有内容聚焦于可直接应用的AI工具和方法
- **真实可信**: 展示真实用户的AI应用体验和实际效果
- **加速成长**: 强调AI如何显著提升工作效率和学习成果
- **通俗易懂**: 降低普通用户的使用门槛
- **分享文化**: 鼓励用户主动分享AI使用心得
- **持续成长**: 关注用户在AI时代的持续学习和能力提升

## 技术架构

### 技术栈
- **前端框架**: Next.js 15 + React 19 + Tailwind CSS 3
- **运行时**: Edge Runtime (V8 Isolates) 
- **部署平台**: Cloudflare Workers via OpenNext
- **语言**: TypeScript (严格模式)
- **构建工具**: Turbopack + esbuild
- **内容管理**: 模块化HTML模板系统 + 客户端脚本

### 架构模式

#### 内容聚合平台架构
```
用户请求 → Next.js App Router → LegacyPageWrapper适配器 → 内容模块系统
                    ↓
            动态内容加载 ← 客户端交互脚本 ← 模块化HTML模板
```

#### API代理服务架构  
```
Claude Code客户端 → API路由处理 → 提供商选择 → AI模型调用
                    ↓
            格式转换(Anthropic↔OpenAI) + 流式响应处理
```

### 核心设计特点

#### 混合架构模式
- **Next.js现代化前端**: 提供SEO友好、性能优化的用户体验
- **遗留代码适配器**: 通过`LegacyPageWrapper`复用现有TypeScript模块，实现100%代码复用
- **模块化内容系统**: 四个功能模块独立开发和维护，支持动态加载

#### 内容展示技术
- **静态模板 + 动态数据**: 预生成HTML模板，运行时注入动态内容
- **客户端交互**: 使用原生JavaScript实现标签切换、内容筛选等交互功能
- **响应式设计**: Tailwind CSS确保在各种设备上的良好展示效果

#### 边缘计算优势
- **全球分发**: Cloudflare 300+节点确保全球用户快速访问
- **冷启动优化**: <1ms冷启动时间，0ms热启动
- **自动扩缩容**: 根据流量自动调整资源，无需手动配置

## 开发环境设置

### 安装依赖
```bash
pnpm install
```

### 开发模式
```bash
# Next.js 开发 (推荐)
pnpm run dev:next        # 启动 Next.js 开发服务器 (http://localhost:3000)

# 传统 Workers 开发
pnpm run build:client    # 构建前端模块
pnpm run dev            # 启动 Wrangler 开发服务器
```

### 功能模块

平台提供四个核心标签页，每个都有独特的功能和内容：

#### 🚀 如何用上 CC (Get Started)
- **目标**: 帮助新用户快速开始使用 Claude Code Router
- **内容**: 
  - 10+ AI提供商的详细配置指南（DeepSeek、OpenAI、Kimi、SiliconFlow等）
  - 一键部署教程，支持Cloudflare Workers
  - 环境变量配置和命令行别名设置
  - 免费额度说明和注册邀请码

#### ⚡ 如何用好 CC (Best Practices)  
- **目标**: 提供基于Anthropic官方最佳实践的深度指南
- **内容**:
  - Claude Code的高级使用技巧
  - 不同AI模型的性能对比和选择建议
  - 实际工作场景中的应用案例
  - 效率优化的实用建议

#### 🔧 如何实现 CC (How to Implement)
- **目标**: 深入解析Claude Code Router的技术架构
- **内容**:
  - API格式转换的核心原理（Anthropic ↔ OpenAI）
  - 多提供商路由机制的实现
  - 流式响应处理技术
  - Cloudflare Workers边缘计算架构

#### 🎯 如何运用 CC (How to Apply)
- **目标**: 教授如何使用Claude Code SDK构建专业AI Agent应用
- **内容**:
  - Claude Code SDK的完整API文档
  - AI Agent开发最佳实践
  - 复杂工作流的自动化实现
  - 生产环境部署和维护指南

### 构建命令
```bash
# Next.js 构建
pnpm run build:next      # 构建 Next.js 应用
pnpm run start:next      # 启动生产服务器

# Cloudflare Workers 构建
pnpm run cf:build        # 使用 OpenNext 构建
pnpm run cf:preview      # 本地预览
pnpm run cf:deploy       # 部署到生产环境
```

## 代码质量工具

### 代码检查
```bash
pnpm run lint           # ESLint 检查并修复
pnpm run format         # Prettier 格式化
pnpm run typecheck      # TypeScript 类型检查
```

### Git 钩子
项目使用 Husky 配置 Git 钩子：
- **pre-commit**: 运行 lint-staged 进行代码格式化
- **commit-msg**: 验证提交信息格式
- **pre-push**: 运行代码质量检查

## 项目结构

### Next.js 应用结构
```
src/app/                    # Next.js App Router
├── (main)/home/page.tsx    # 主页 (使用适配器)
├── api/v1/messages/route.ts # Claude API 代理
├── api/img-proxy/route.ts  # 图片代理
├── layout.tsx              # 根布局
└── page.tsx                # 根路由重定向
```

### 核心模块
```
src/
├── api/                    # API 适配器和类型定义
│   ├── adapters/           # 请求和响应格式转换
│   ├── types.ts            # API 类型定义
│   └── providers.ts        # 提供商配置
├── client/                 # 客户端模块化代码
├── features/               # 功能模块
├── components-next/        # Next.js React 组件
├── components/             # 布局组件 (复用)
├── styles/                 # 样式系统
└── scripts/                # 脚本系统
```

## 迁移架构

项目采用**适配器模式**进行渐进式迁移：

### 当前阶段 (Phase 1)
- ✅ Next.js + 适配器模式
- ✅ 100% 代码复用，零迁移风险
- ✅ 使用 `LegacyPageWrapper` 包装现有 HTML 模块

### 迁移策略
```typescript
// LegacyPageWrapper.tsx - 适配器组件
export function LegacyPageWrapper() {
  useEffect(() => {
    // 注入现有样式和脚本
    // 保持现有交互逻辑
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: sidebarComponent }} />
      <div dangerouslySetInnerHTML={{ __html: navigationComponent }} />
      <div dangerouslySetInnerHTML={{ __html: getStartedModule }} />
      {/* ... 其他模块 */}
    </>
  );
}
```

## API 配置

### 环境变量
```bash
# 提供商配置 (优先级顺序)
DEEPSEEK_BASE_URL="https://api.deepseek.com"
OPENAI_BASE_URL="https://api.openai.com"
KIMI_BASE_URL="https://api.moonshot.cn"
SILICONFLOW_BASE_URL="https://api.siliconflow.cn"
OPENROUTER_BASE_URL="https://openrouter.ai/api"

# 图片代理配置
IMAGE_PROXY_WHITELIST="*"
IMAGE_PROXY_CACHE_TTL="86400"
```

### 模型映射
| Claude 模型 | OpenRouter | DeepSeek | OpenAI |
|------------|------------|----------|---------|
| claude-3.5-haiku | anthropic/claude-3.5-haiku | deepseek-chat | gpt-4o-mini |
| claude-3.5-sonnet | anthropic/claude-3.5-sonnet | deepseek-chat | gpt-4o |
| claude-3-opus | anthropic/claude-3-opus | deepseek-reasoner | gpt-4o |

## 部署配置

### Cloudflare Workers (推荐)
```bash
# 构建和部署
pnpm run cf:build    # 构建 Next.js 为 Cloudflare Workers
pnpm run cf:deploy   # 部署到生产环境
```

### Wrangler 配置
- **主文件**: `.open-next/worker.js`
- **兼容日期**: 2025-05-30
- **自定义域名**: cc.xiaohui.cool, aispeeds.me
- **资源目录**: `.open-next/assets`

## 开发约定

### 代码风格
- **TypeScript**: 严格模式，完整类型覆盖
- **React**: 函数组件 + Hooks
- **样式**: Tailwind CSS + CSS-in-JS
- **导入**: 使用路径别名 (`@/*`)

### 文件命名
- **组件**: PascalCase (`LegacyPageWrapper.tsx`)
- **工具函数**: camelCase (`formatAnthropicToOpenAI.ts`)
- **配置文件**: kebab-case (`navigation.config.ts`)

### 提交规范
使用 Conventional Commits 规范：
- `feat:` 新功能
- `fix:` 修复问题
- `docs:` 文档更新
- `style:` 代码格式
- `refactor:` 重构
- `test:` 测试
- `chore:` 构建过程

## 故障排除

### 常见问题
1. **构建失败**: 检查 TypeScript 类型错误
2. **部署失败**: 验证环境变量配置
3. **API 错误**: 检查提供商 API 密钥

### 调试工具
```bash
# 本地开发调试
pnpm run dev:next        # Next.js 开发模式
pnpm run cf:preview      # Cloudflare 预览模式

# 代码质量检查
pnpm run lint           # ESLint 检查
pnpm run typecheck      # TypeScript 检查
```

## 性能优化

### 边缘计算优势
- **冷启动**: <1ms
- **热启动**: 0ms
- **全球节点**: 300+ 位置
- **自动扩缩容**: 无需配置

### 构建优化
- **Tree Shaking**: 自动移除未使用代码
- **代码分割**: 按需加载模块
- **缓存策略**: 智能缓存静态资源

## 安全考虑

### API 安全
- **密钥管理**: 使用环境变量存储敏感信息
- **请求验证**: 验证 API 密钥和请求格式
- **错误处理**: 不暴露内部错误详情

### 部署安全
- **HTTPS**: 强制使用 HTTPS
- **CORS**: 配置跨域策略
- **输入验证**: 严格验证用户输入

---

*最后更新: 2025-10-05*
*项目版本: 1.0.0*