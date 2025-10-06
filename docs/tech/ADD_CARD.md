# 新增客户端模块卡片操作指南

本指南定义向 `src/client/`
下任何模块新增一张卡片的标准流程（SOP）。你阅读本指南并收到一段 Markdown 内容后，应严格按此文执行，完成卡片新增。

## 适用范围

- **所有客户端模块**：`src/client/{moduleName}/`
- **当前支持的模块**：
  - `bestPractices/` - 最佳实践指南
  - `howToImplement/` - 实现指导系统
  - `howToApplyCC/` - Claude Code SDK 应用指南
- **未来扩展**：任何遵循相同架构模式的新模块
- **内容类型**：单篇 Markdown 文章 + 概览卡片元数据

## 前置条件

- 已确定**目标模块**（`bestPractices`、`howToImplement`、`howToApplyCC`
  或新模块）
- 已准备好文章 Markdown 内容（支持中英文，带适当小标题）
- 具备卡片必要元信息：
  - 必填：`id`、`title`、`category`
  - 可选：`description`、`imageUrl`、`tags`、`tips`、`difficulty`、`readTime`、`overview`、`sections`、`lastUpdated`、`version`

## 模块分类与类型系统

### 支持的模块及其分类

| 模块             | 卡片类型        | 分类选项                                                                                                 |
| ---------------- | --------------- | -------------------------------------------------------------------------------------------------------- |
| `bestPractices`  | `PracticeCard`  | `workflow` \| `configuration` \| `mcp-commands` \| `context` \| `automation` \| `concurrency` \| `tools` |
| `howToImplement` | `ImplementCard` | `conversation` \| `system-prompt` \| `integration` \| `configuration` \| `implementation` \| `examples`  |
| `howToApplyCC`   | `SDKCard`       | `quick-start` \| `core-usage` \| `advanced` \| `examples` \| `best-practices` \| `integration`           |

### 类型定义位置

- **统一类型定义**：`src/client/shared/types/ContentCard.ts`
- **分类图标配置**：`src/client/{moduleName}/data/categoryConfig.ts`

### 新增分类流程

如需为某个模块新增分类，需同时：

1. 在对应模块的 `categoryConfig.ts` 的 `categoryIcons` 对象中新增图标映射
2. 在 `src/client/shared/types/ContentCard.ts`
   中对应的卡片类型联合类型中加入新分类字面量

## 命名规范

- 文件名与 `id` 建议一致，使用 kebab-case
- 例：`software-engineering-with-claude`

## 实施步骤

### 1. **新增 Markdown 文章文件**

- **路径**：`src/client/{moduleName}/content/`
- **文件名**：`<id>.md`
- **示例**：
  ```text
  src/client/bestPractices/content/data-analysis.md
  src/client/howToImplement/content/claude-code-conversation-example-2.md
  src/client/howToApplyCC/content/advanced-mcp-integration.md
  ```

### 2. **注册卡片元数据（概览展示）**

- **文件**：`src/client/{moduleName}/data/cardsData.ts`
- **数组变量**：根据模块选择对应的导出数组：
  - `bestPractices` → `bestPracticesCards`
  - `howToImplement` → `howToImplementCards`
  - `howToApplyCC` → `howToApplyCCCards`

- **示例模板**（根据模块选择对应的卡片类型）：

#### Best Practices 模块示例：

```ts
{
  id: 'data-analysis',
  title: 'CAIBAO-DA 专业数据分析师',
  description: '四阶段数据分析工作流程：数据理解、探索分析、可视化设计、商业洞察与行动建议',
  category: 'tools', // PracticeCard 分类
  difficulty: 'intermediate',
  readTime: '12 分钟',
  tags: ['数据分析', '可视化', 'Python', 'Plotly', '商业洞察'],
  tips: [
    { type: 'info', title: '标准流程', content: '遵循四阶段工作流程，确保分析的专业性和完整性' }
  ],
  lastUpdated: '当前时间'
}
```

#### How to Implement 模块示例：

```ts
{
  id: 'advanced-conversation-patterns',
  title: '高级对话模式设计',
  description: '学习设计复杂的多轮对话流程和状态管理模式',
  category: 'conversation', // ImplementCard 分类
  tips: [
    { type: 'expert', title: '设计要点', content: '状态机模式是管理复杂对话流程的关键' }
  ]
}
```

#### How to Apply CC 模块示例：

```ts
{
  id: 'production-deployment',
  title: '生产环境部署',
  description: '将 Claude Code SDK 集成到生产系统的完整指南',
  category: 'advanced', // SDKCard 分类
  tips: [
    { type: 'warning', title: '安全提醒', content: '生产环境务必使用环境变量管理 API 密钥' }
  ]
}
```

### 3. **建立 id→Markdown 内容映射（文章加载）**

- **文件**：`src/client/{moduleName}/services/{ModuleName}Service.ts`
- **方法**：在对应服务类的 `getContentFromFile` 方法的 `contentMap` 中新增一条
- **服务类映射**：
  - `bestPractices` → `ArticleService`
  - `howToImplement` → `HowToImplementService`
  - `howToApplyCC` → `HowToApplyCCService`

**示例**：

```ts
// 在 contentMap 对象中添加
'data-analysis': async () => (await import('../content/data-analysis.md')).default,
```

> 说明（SSOT）：标题将从 `cardsData.ts` 自动解析，无需在 `ArticleService` 中维护
> `titles` 映射。

### 4. **构建与本地验证**

- **构建**：

```bash
npm run build:client
```

- **本地预览**（Cloudflare Workers 开发服务器）：

```bash
npm run dev
```

- **验收点**：
  - 对应模块概览页出现新卡片（标题、图片、信息完整）
  - 点击卡片进入文章页，右上角"返回概览"按钮可用
  - 移动端展示正常，无遮挡

## 内容撰写建议

- 文章使用清晰层级的小标题（## / ###），适度分段
- 可使用代码块、列表、Mermaid 图（由统一渲染器处理）
- 避免过度冗长，突出“做法与原因”

## 常见错误与排查

- 导入路径错误：确认 `contentMap` 中相对路径与文件名一致
- 分类缺图标/未在类型中注册：
  - 检查 `src/client/bestPractices/data/categoryConfig.ts` 中的 `categoryIcons`
    对象
  - 检查 `src/client/shared/types/ContentCard.ts` 中的 `PracticeCard.category`
    联合类型
- 构建未更新：确保执行 `npm run build:client`
- TypeScript 类型错误：确保新增的属性符合 `PracticeCard` 接口定义

## Definition of Done（完成判定）

### 通用完成标准

- ✅ **文章文件已落位**：`src/client/{moduleName}/content/<id>.md`
- ✅ **卡片元数据已注册**：在对应的 `cardsData.ts`
  中新增卡片项，符合对应的卡片接口
- ✅ **内容映射已建立**：在对应的服务类中添加 `contentMap`
  映射（及可选标题映射）
- ✅ **构建验证通过**：`npm run build:client` 无 TypeScript 错误
- ✅ **手动验收通过**：概览展示、跳转阅读、返回导航、移动端视图

### 模块特定验收

- **Best Practices**：访问 `/best-practices` 页面验证
- **How to Implement**：访问 `/how-to-implement` 页面验证
- **How to Apply CC**：访问 `/how-to-apply-cc` 页面验证

### 质量检查清单

- [ ] 使用了正确的卡片类型（PracticeCard/ImplementCard/SDKCard）
- [ ] 分类属于该模块的有效分类选项
- [ ] 提示信息（tips）内容有价值且类型正确
- [ ] 难度等级与内容复杂度匹配
- [ ] 标签（tags）准确反映内容要点
- [ ] 描述简洁明了，突出核心价值
- [ ] Markdown 内容结构清晰，格式正确

## 项目架构说明

本项目采用**双层前端架构**：

### 开发层 (`src/client/`)

- **TypeScript 开发环境**，具备完整的类型安全和模块化架构
- 每个模块遵循一致的目录结构：
  ```
  src/client/bestPractices/
  ├── core/           # 业务逻辑管理器 (BestPracticesManager)
  ├── data/           # 静态数据和配置 (cardsData, categoryConfig)
  ├── handlers/       # 事件处理逻辑
  ├── renderers/      # UI 渲染组件
  ├── services/       # 数据服务和 API 层 (ArticleService)
  ├── types/          # 类型定义（重新导出共享类型）
  └── index.ts        # 模块初始化入口
  ```

### 运行时层 (`modules/`)

- **生产就绪的 HTML 模板**，包含编译后的 JavaScript
- 通过构建脚本自动生成，优化用于 Cloudflare Workers 边缘执行

### 共享架构 (`src/client/shared/`)

- **统一的类型系统**：`ContentCard.ts` 定义所有卡片类型
- **共享服务基类**：`BaseContentService` 提供通用内容管理逻辑
- **通用组件和工具**：跨模块复用的渲染器、工具函数等

## AI 执行说明

当你（AI）被要求根据一段给定 Markdown 内容新增卡片时：

### 执行前确认

1. **确定目标模块**：根据内容性质选择合适的模块
   - `bestPractices` - 工作流程、工具使用、最佳实践
   - `howToImplement` - 技术实现、系统设计、对话示例
   - `howToApplyCC` - SDK 使用、API 集成、应用开发

2. **模块识别指南**：
   - 包含"工作流"、"最佳实践"、"提升效率" → `bestPractices`
   - 包含"实现方案"、"技术细节"、"对话示例" → `howToImplement`
   - 包含"SDK"、"API"、"集成"、"开发指南" → `howToApplyCC`

### 标准执行流程

1. **选择 `id`**（若用户未提供则从标题归一化生成 kebab-case）
2. **确定分类**：参考对应模块的分类选项（见上方模块分类表格）
3. **提取元信息**：分析内容生成 `title`、`description`、`tags` 等
4. **生成提示信息**：根据内容提炼 1–3 条 `tips`（类型可用
   `info|success|warning|tip|expert`）
5. **设置难度等级**：根据内容复杂度选择 `beginner|intermediate|advanced|expert`
6. **估算阅读时间**：基于内容长度提供 `readTime` 估计
7. **完成三步操作**：
   - 在 `src/client/{moduleName}/data/cardsData.ts` 中添加卡片元数据
   - 在 `src/client/{moduleName}/services/{ServiceName}.ts`
     中添加内容映射（仅 contentMap；标题由 `cardsData.ts` 自动解析）
   - 执行 `npm run build:client` 验证构建
8. **提供验收清单**：复述修改点并提供人工验收步骤

### 重要提醒

- **模块选择优先级**：优先考虑内容的主要用途和目标受众
- **遵循现有架构**：不要破坏现有的 TypeScript 类型系统和模块化结构
- **保持一致性**：新增内容应与目标模块现有卡片的风格和质量标准保持一致
- **类型安全**：确保使用正确的卡片类型和分类选项
- **验证构建**：确保所有修改都能通过 TypeScript 编译和构建流程

### 新模块扩展指导

如果未来需要添加新模块，应遵循以下模式：

1. 在 `src/client/shared/types/ContentCard.ts` 中定义新的卡片类型
2. 创建 `src/client/{newModule}/data/categoryConfig.ts` 定义分类图标
3. 实现继承自 `BaseContentService` 的服务类
4. 更新本文档的模块支持表格和相关说明
