# 新开发者快速开始指南

## 🎯 你应该知道的

### 项目现状

这个项目正在从 **Legacy 字符串模板系统** 迁移到 **Next.js App Router 架构**。

- ✅ **新架构**：`src/app/` + `src/components-next/` (Next.js 15 + React 19 +
  shadcn/ui)
- 📦 **Legacy 代码**：`src/legacy/` (隔离后) 或 `src/components/`,
  `src/features/` 等 (隔离前)
- 🔄 **过渡期**：使用 `LegacyPageWrapper` 适配器保持旧功能运行

### 你的开发原则

1. **所有新功能使用 Next.js 架构**
2. **不要修改 Legacy 代码**
3. **复用共享资源（API、工具、类型）**
4. **使用 shadcn/ui + Tailwind CSS**

## 🚀 快速开始

### Step 1: 隔离 Legacy 代码（首次）

如果项目还没有隔离，运行：

```bash
# 一键隔离所有旧代码
./scripts/migrate-to-legacy.sh

# 验证隔离成功
npm run dev
# 访问 http://localhost:3000 确认页面正常
```

隔离后的目录结构：

```
src/
├── app/              # ✨ 新架构 - 你的工作区
├── components-next/  # ✨ 新架构 - 你的工作区
├── legacy/           # 📦 旧代码 - 不要碰
├── api/              # ✅ 复用 - 可以用
├── lib/              # ✅ 复用 - 可以用
└── types/            # ✅ 复用 - 可以用
```

### Step 2: 理解架构

阅读架构文档：

```bash
# 理解调用关系和文件分类
cat docs/SRC_ARCHITECTURE.md

# 理解隔离策略
cat docs/LEGACY_ISOLATION_GUIDE.md
```

### Step 3: 开始开发

创建你的第一个功能：

```bash
# 1. 创建新路由
mkdir -p src/app/\(main\)/my-feature
touch src/app/\(main\)/my-feature/page.tsx

# 2. 创建组件
mkdir -p src/components-next/features
touch src/components-next/features/MyFeature.tsx

# 3. 安装需要的 shadcn/ui 组件
npx shadcn@latest add button
npx shadcn@latest add card
```

## 📝 开发模板

### 1. 创建新页面

```tsx
// src/app/(main)/my-feature/page.tsx
import { MyFeature } from '@/components-next/features/MyFeature';

export default function MyFeaturePage() {
  return <MyFeature />;
}
```

### 2. 创建客户端组件

```tsx
// src/components-next/features/MyFeature.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components-next/ui/button';
import { Card } from '@/components-next/ui/card';
import { cn } from '@/lib/utils';

export function MyFeature() {
  const [count, setCount] = useState(0);

  return (
    <div className='container mx-auto p-6'>
      <Card className='p-6'>
        <h1 className='text-2xl font-bold mb-4'>My Feature</h1>

        <div className='flex items-center gap-4'>
          <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
        </div>
      </Card>
    </div>
  );
}
```

### 3. 创建服务端组件（默认）

```tsx
// src/app/(main)/data-page/page.tsx
import { fetchProviders } from '@/api/providers';

// 服务端组件 - 可以直接 async
export default async function DataPage() {
  const providers = await fetchProviders();

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-4'>Providers</h1>
      <ul>
        {providers.map(provider => (
          <li key={provider.id}>{provider.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### 4. 使用设计令牌

```tsx
// 使用 CSS 变量（来自 designTokens.ts）
<div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
  Content
</div>

// 或者使用 Tailwind 配置的别名
<div className="bg-primary text-primary">
  Content
</div>
```

### 5. 复用 API 和工具

```tsx
'use client';

import { useEffect, useState } from 'react';
import { fetchProviders } from '@/api/providers';
import { cn } from '@/lib/utils';
import type { Provider } from '@/types/provider';

export function ProviderList() {
  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    fetchProviders().then(setProviders);
  }, []);

  return (
    <div className={cn('grid gap-4', 'md:grid-cols-2', 'lg:grid-cols-3')}>
      {providers.map(provider => (
        <div key={provider.id}>{provider.name}</div>
      ))}
    </div>
  );
}
```

## 🎨 样式指南

### Tailwind CSS 优先

```tsx
// ✅ 推荐：使用 Tailwind
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">

// ❌ 避免：内联样式
<div style={{ display: 'flex', padding: '24px' }}>
```

### 使用设计令牌

```tsx
// ✅ 推荐：使用 CSS 变量
<div className="bg-[var(--color-bg-primary)]">

// ✅ 也可以：使用 Tailwind 配置的别名（如果有）
<div className="bg-primary">

// ❌ 避免：硬编码颜色
<div className="bg-blue-500">
```

### 响应式设计

```tsx
// ✅ 推荐：移动优先
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// ✅ 推荐：使用 Tailwind 断点
<div className="text-sm md:text-base lg:text-lg">
```

## 🔧 常用命令

```bash
# 开发服务器
npm run dev

# 构建 Legacy 客户端代码
npm run build:client

# 构建 Next.js 应用
npm run build

# 启动生产服务器
npm start

# 类型检查
npm run type-check

# Lint
npm run lint

# 添加 shadcn/ui 组件
npx shadcn@latest add [component-name]
```

## 📚 shadcn/ui 组件使用

### 安装组件

```bash
# 查看可用组件
npx shadcn@latest add

# 安装单个组件
npx shadcn@latest add button

# 安装多个组件
npx shadcn@latest add button card dialog
```

### 使用组件

```tsx
import { Button } from '@/components-next/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components-next/ui/card';

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

## 🚫 禁止操作

### ❌ 不要修改 Legacy 代码

```bash
# ❌ 不要修改这些目录
src/legacy/components/
src/legacy/features/
src/legacy/client/
src/legacy/styles/
src/legacy/scripts/
```

### ❌ 不要导入 Legacy 代码

```tsx
// ❌ 错误：直接导入 Legacy
import { something } from '@/legacy/features/...';

// ✅ 正确：只在适配器中导入
// src/components-next/LegacyPageWrapper.tsx
```

### ❌ 不要混用架构

```tsx
// ❌ 错误：在 React 组件中使用字符串模板
export function MyComponent() {
  return <div dangerouslySetInnerHTML={{ __html: legacyHtml }} />;
}

// ✅ 正确：使用 React 组件
export function MyComponent() {
  return <div>Content</div>;
}
```

## 🔄 迁移 Legacy 功能

如果需要迁移某个 Legacy 功能到新架构：

### Step 1: 创建新路由

```bash
# 例如迁移 "如何用好 CC"
mkdir -p src/app/\(main\)/best-practices
touch src/app/\(main\)/best-practices/page.tsx
```

### Step 2: 用 React 重写

```tsx
// src/components-next/features/BestPractices.tsx
'use client';

export function BestPractices() {
  // 用 React 重写 Legacy 逻辑
  return (
    <div className='container mx-auto p-6'>
      <h1>如何用好 CC</h1>
      {/* 新的 React 实现 */}
    </div>
  );
}
```

### Step 3: 更新路由

```tsx
// src/app/(main)/best-practices/page.tsx
import { BestPractices } from '@/components-next/features/BestPractices';

export default function BestPracticesPage() {
  return <BestPractices />;
}
```

### Step 4: 从适配器移除

```tsx
// src/components-next/LegacyPageWrapper.tsx
// 删除或注释掉旧模块的导入和渲染
// import { bestPracticesModule } from '@/legacy/features/best-practices';
```

### Step 5: 测试并删除

```bash
# 测试新功能
npm run dev
# 访问新路由验证功能

# 删除旧代码
rm -rf src/legacy/features/best-practices
rm -rf src/legacy/client/bestPractices
```

## 📖 学习资源

### 官方文档

- [Next.js App Router](https://nextjs.org/docs/app)
- [React 19 文档](https://react.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

### 项目文档

- `docs/SRC_ARCHITECTURE.md` - 架构说明
- `docs/LEGACY_ISOLATION_GUIDE.md` - 隔离指南
- `README.md` - 项目概述

## 🆘 常见问题

### Q: 页面显示空白？

A: 检查是否运行了隔离脚本，确保 `src/legacy/` 存在且构建成功。

```bash
./scripts/migrate-to-legacy.sh
npm run build:client
npm run dev
```

### Q: 导入路径报错？

A: 检查 `tsconfig.json` 的路径配置：

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/legacy/*": ["./src/legacy/*"]
    }
  }
}
```

### Q: 样式不生效？

A: 确保使用了正确的 CSS 变量或 Tailwind 类名：

```tsx
// ✅ 正确
<div className="bg-[var(--color-bg-primary)]">

// ❌ 错误（变量名不存在）
<div className="bg-[var(--bg-primary)]">
```

### Q: 如何调试 Legacy 代码？

A: 不要调试，直接迁移到新架构。如果必须修复 bug：

1. 在 `src/legacy/` 中修复
2. 运行 `npm run build:client` 重新构建
3. 测试修复
4. 尽快迁移到新架构

## 🎯 下一步

1. ✅ 运行隔离脚本
2. ✅ 阅读架构文档
3. ✅ 创建第一个新功能
4. ✅ 学习 shadcn/ui 组件
5. ✅ 开始迁移 Legacy 功能

**记住：所有新开发都在 `src/app/` 和 `src/components-next/` 下进行！**
