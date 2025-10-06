# SSOT Content Map Refactoring

## 概述

成功将所有模块的 Markdown 内容加载重构为 SSOT（Single Source of
Truth）架构，消除重复代码，实现零维护的内容映射管理。

## 架构设计

### 核心原则

1. **文件系统即数据源**：`content/*.md` 文件是唯一真实来源
2. **构建时生成映射**：自动扫描并生成 `generated/contentMap.ts`
3. **运行时零配置**：服务直接导入生成的映射，无需手动维护
4. **标题来自卡片数据**：从 `cardsData.ts` 获取标题，避免重复定义

### 数据流

```
文件系统 (content/*.md)
    ↓ 构建时扫描
generated/contentMap.ts
    ↓ 导入
ArticleService
    ↓ 使用
BaseArticleEventHandler → 渲染
```

## 实施细节

### 1. 构建脚本增强 (`scripts/build-client.cjs`)

#### 通用内容映射生成器

```javascript
async function generateContentMap(config) {
  const { moduleName, contentDir, generatedDir, cardsFile } = config;

  // 扫描 .md 文件
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

  // 生成导入和映射
  // 'workflow-overview.md' → 'md_workflowOverview' → 'workflow-overview': async () => md_workflowOverview

  // 校验与 cardsData 的一致性
  // 警告：卡片缺少 .md 文件
  // 警告：.md 文件没有匹配的卡片
}
```

#### 为所有模块生成映射

```javascript
async function buildClientScripts() {
  // 先生成所有模块的内容映射（SSOT）
  await generateBestPracticesContentMap();
  await generateHowToImplementContentMap();
  await generateHowToApplyCCContentMap();

  // 然后构建模块
  await buildBestPracticesModule();
  await buildHowToImplementModule();
  await buildHowToApplyCCModule();
}
```

### 2. 共享工具 (`src/client/shared/utils/contentLoader.ts`)

#### DRY 原则：统一的内容加载逻辑

```typescript
export function normalizeCardIdVariants(cardId: string): string[] {
  const normalized = cardId.trim();
  return [normalized, normalized.toLowerCase(), normalized.replace(/_/g, '-')];
}

export async function loadContentFromMap(
  cardId: string,
  contentLoaders: Record<string, () => Promise<string>>,
  moduleName: string,
): Promise<string | null> {
  const variants = normalizeCardIdVariants(cardId);

  for (const key of variants) {
    const loader = contentLoaders[key];
    if (loader) {
      try {
        return await loader();
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(
            `[${moduleName}] Failed to import markdown for`,
            key,
            err,
          );
        }
        return null;
      }
    }
  }

  if (process.env.NODE_ENV === 'development') {
    console.warn(`[${moduleName}] Missing content mapping for cardId:`, cardId);
  }

  return null;
}
```

### 3. 服务重构

#### Before（重复的硬编码映射）

```typescript
// ArticleService.ts
protected async getContentFromFile(cardId: string): Promise<string> {
  const contentMap: Record<string, () => Promise<string>> = {
    'workflow-overview': async () => (await import('../content/workflow-overview.md')).default,
    'environment-config': async () => (await import('../content/environment-config.md')).default,
    // ... 12 个硬编码条目
  };

  const contentLoader = contentMap[cardId];
  if (contentLoader) {
    return await contentLoader();
  }
  return this.getDefaultContent(cardId);
}

protected getTitleFromCardId(cardId: string): string {
  const titles = {
    'workflow-overview': '我现在的工作流',
    'environment-config': '自定义环境配置',
    // ... 12 个重复的标题定义
  };
  return titles[cardId] || cardId;
}
```

#### After（SSOT + DRY）

```typescript
// ArticleService.ts
import { contentLoaders } from '../generated/contentMap';
import { loadContentFromMap } from '../../shared/utils/contentLoader';
import { bestPracticesCards } from '../data/cardsData';

protected async getContentFromFile(cardId: string): Promise<string> {
  try {
    const content = await loadContentFromMap(cardId, contentLoaders, 'BestPractices');
    if (content) {
      return content;
    }
    return this.getDefaultContent(cardId.trim());
  } catch {
    return this.getDefaultContent(cardId.trim());
  }
}

protected getTitleFromCardId(cardId: string): string {
  // SSOT: 从 cardsData 中获取标题
  const card = bestPracticesCards.find((c) => c.id === cardId);
  return card?.title || cardId;
}
```

## 重构范围

### 已重构的模块

1. **Best Practices** (`src/client/bestPractices/`)
   - ✅ 生成 `generated/contentMap.ts`
   - ✅ 重构 `ArticleService`
   - ✅ 标题从 `bestPracticesCards` 获取

2. **How to Implement** (`src/client/howToImplement/`)
   - ✅ 生成 `generated/contentMap.ts`
   - ✅ 重构 `HowToImplementService`
   - ✅ 标题从 `howToImplementCards` 获取

3. **How to Apply CC** (`src/client/howToApplyCC/`)
   - ✅ 生成 `generated/contentMap.ts`
   - ✅ 重构 `HowToApplyCCService`
   - ✅ 标题从 `howToApplyCCCards` 获取

## 构建验证

### 构建输出

```bash
$ pnpm run build:client:direct

🔨 开始构建客户端脚本...
📝 已生成最佳实践内容映射: .../bestPractices/generated/contentMap.ts
📝 已生成How to Implement内容映射: .../howToImplement/generated/contentMap.ts
📝 已生成How to Apply CC内容映射: .../howToApplyCC/generated/contentMap.ts
⚠️ How to Apply CC以下 .md 文件没有匹配的卡片 id: security-audit-agent, sre-agent-example
📦 打包最佳实践模块...
📝 最佳实践模块已打包到: .../bestPracticesBundle.ts
📊 打包大小: 376.45 KB
📦 打包How to Implement 模块...
📝 How to Implement 模块已打包到: .../howToImplementBundle.ts
📊 打包大小: 598.95 KB
📦 打包How to Apply CC 模块...
📝 How to Apply CC 模块已打包到: .../howToApplyCCBundle.ts
📊 打包大小: 334.62 KB
✅ 客户端脚本构建完成！
```

### 校验警告

构建系统会自动校验 `cardsData.ts` 中的 `id` 与 `content/*.md` 文件的匹配性：

- ⚠️ **卡片缺少 .md 文件**：提示需要创建对应的 Markdown 文件
- ⚠️ **.md 文件没有匹配的卡片**：提示可能是孤立文件或需要添加卡片

## 开发工作流

### 添加新文章

1. **创建 Markdown 文件**

   ```bash
   # 文件名使用 kebab-case
   touch src/client/bestPractices/content/new-practice.md
   ```

2. **添加卡片数据**

   ```typescript
   // src/client/bestPractices/data/cardsData.ts
   export const bestPracticesCards: PracticeCard[] = [
     {
       id: 'new-practice', // 必须与文件名匹配（小写、kebab-case）
       title: '新实践',
       category: 'workflow',
       // ...
     },
   ];
   ```

3. **重新构建**

   ```bash
   pnpm run build:client
   ```

4. **验证**
   - 构建脚本会自动生成映射
   - 如果 `id` 与文件名不匹配，会显示警告
   - 服务会自动加载新内容，无需修改代码

### 更新现有文章

1. **直接编辑 Markdown 文件**

   ```bash
   vim src/client/bestPractices/content/workflow-overview.md
   ```

2. **重新构建**

   ```bash
   pnpm run build:client
   ```

3. **无需修改代码**
   - 映射自动更新
   - 标题来自 `cardsData.ts`，保持一致

## 优势总结

### 1. 零维护

- ❌ **Before**: 每次添加文章需要手动更新 3 处代码
  - `contentMap` 中添加导入
  - `titles` 映射中添加标题
  - `cardsData.ts` 中添加卡片

- ✅ **After**: 只需 2 步
  - 创建 `.md` 文件
  - 在 `cardsData.ts` 中添加卡片（标题在这里定义）

### 2. DRY（Don't Repeat Yourself）

- ❌ **Before**: 标题在 `cardsData.ts` 和 `ArticleService` 中重复定义
- ✅ **After**: 标题只在 `cardsData.ts` 中定义一次

### 3. 类型安全

- ✅ 生成的 `contentMap.ts` 有完整的 TypeScript 类型
- ✅ 编译时检查导入路径
- ✅ IDE 自动补全和跳转

### 4. 构建时校验

- ✅ 自动检测 `id` 与文件名不匹配
- ✅ 警告孤立的 `.md` 文件
- ✅ 警告缺少内容的卡片

### 5. 性能优化

- ✅ 构建时打包，运行时零开销
- ✅ esbuild `.md` loader 将内容内联到 bundle
- ✅ 支持 tree-shaking（未使用的内容会被移除）

## 后续优化建议

### 1. 添加 Git Hook

```bash
# .husky/pre-commit
pnpm run build:client
git add src/*/generated/contentMap.ts
```

### 2. CI/CD 集成

```yaml
# .github/workflows/build.yml
- name: Generate content maps
  run: pnpm run build:client

- name: Verify no uncommitted changes
  run: git diff --exit-code src/*/generated/
```

### 3. 开发模式优化

考虑在开发模式下跳过生成，直接使用动态导入（需要权衡热重载体验）。

### 4. 文档生成

可以扩展构建脚本，生成内容目录（TOC）或索引页面。

## 相关文件

### 核心文件

- `scripts/build-client.cjs` - 构建脚本和内容映射生成器
- `src/client/shared/utils/contentLoader.ts` - 共享的内容加载工具

### 生成文件（Git 忽略）

- `src/client/bestPractices/generated/contentMap.ts`
- `src/client/howToImplement/generated/contentMap.ts`
- `src/client/howToApplyCC/generated/contentMap.ts`

### 服务文件

- `src/client/bestPractices/services/ArticleService.ts`
- `src/client/howToImplement/services/HowToImplementService.ts`
- `src/client/howToApplyCC/services/HowToApplyCCService.ts`

## 总结

这次重构成功实现了：

1. ✅ **SSOT**: 文件系统是内容的唯一真实来源
2. ✅ **DRY**: 消除了所有重复的映射和标题定义
3. ✅ **零维护**: 添加新文章无需修改服务代码
4. ✅ **类型安全**: 完整的 TypeScript 支持
5. ✅ **构建时校验**: 自动检测不一致
6. ✅ **性能优化**: 构建时打包，运行时高效

这是 Cloudflare
Workers 环境下模块化开发的最佳实践，为后续功能扩展奠定了坚实基础。
