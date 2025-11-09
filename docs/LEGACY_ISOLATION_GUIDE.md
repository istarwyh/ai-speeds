# Legacy 代码隔离方案

## 📊 当前调用关系图

```
Next.js App Router (新架构)
├── app/layout.tsx
│   └── 注入 designTokens (复用)
│
└── app/(main)/home/page.tsx
    └── LegacyPageWrapper (适配器)
        ├── 导入 @/index (Legacy 聚合器)
        │   ├── navigationComponent
        │   ├── allStyles (所有 Legacy 样式)
        │   └── allScripts (所有 Legacy 脚本)
        │
        └── 导入功能模块
            ├── @/features/get-started
            ├── @/features/best-practices
            ├── @/features/how-to-implement
            └── @/features/how-to-apply-cc

Legacy 系统依赖链
├── src/index.ts (聚合器)
│   ├── components/layout/* (头部、侧边栏)
│   ├── components/navigation/* (导航、卡片)
│   ├── styles/index.ts → 所有样式文件
│   └── scripts/index.ts → 所有脚本文件
│
├── features/* (功能模块)
│   └── 每个模块有自己的组件和样式
│
├── client/* (客户端模块)
│   ├── bestPractices/
│   ├── howToImplement/
│   └── howToApplyCC/
│
└── scripts/generated/* (构建生成的 bundle)
    ├── bestPracticesBundle.ts
    ├── howToImplementBundle.ts
    └── howToApplyCCBundle.ts
```

## 🎯 隔离策略

### 方案：完全目录隔离 + 适配器保留

**核心思想**：

1. 将所有 Legacy 代码移到 `src/legacy/` 目录
2. 保留一个轻量级适配器供过渡使用
3. 新开发完全在 Next.js 架构下进行
4. 确保构建和运行时完全正常

## 🔧 隔离步骤

### Step 1: 创建 Legacy 目录结构

```bash
src/legacy/
├── components/          # 从 src/components 移动
├── features/            # 从 src/features 移动
├── client/              # 从 src/client 移动
├── styles/              # 从 src/styles 移动（除 designTokens）
├── scripts/             # 从 src/scripts 移动
└── index.ts             # 从 src/index.ts 移动
```

### Step 2: 保留共享资源

```bash
src/
├── api/                 # ✅ 保留 - API 逻辑复用
├── lib/                 # ✅ 保留 - 工具函数复用
├── config/              # ✅ 保留 - 配置文件复用
├── types/               # ✅ 保留 - 类型定义复用
└── styles/
    └── designTokens.ts  # ✅ 保留 - 设计令牌复用
```

### Step 3: 更新适配器

```typescript
// src/components-next/LegacyPageWrapper.tsx
'use client';

import { useEffect } from 'react';
import { navigationComponent, allStyles, allScripts } from '@/legacy';
import { getStartedModule } from '@/legacy/features/get-started';
import { bestPracticesModule } from '@/legacy/features/best-practices';
import { implementationModule } from '@/legacy/features/how-to-implement';
import { howToApplyCCModule } from '@/legacy/features/how-to-apply-cc';
import { DEFAULT_SECTION_ID } from '@/config/navigation';

// ... 其余代码不变
```

### Step 4: 更新构建配置

```javascript
// scripts/build-client.js
const path = require('path');

const entries = [
  {
    name: 'bestPracticesBundle',
    entry: path.resolve(
      __dirname,
      '../src/legacy/client/bestPractices/index.ts',
    ),
    output: path.resolve(
      __dirname,
      '../src/legacy/scripts/generated/bestPracticesBundle.ts',
    ),
  },
  // ... 其他 entries
];
```

### Step 5: 更新 TypeScript 路径

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/legacy/*": ["./src/legacy/*"],
      "@/components/*": ["./src/components-next/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/api/*": ["./src/api/*"]
    }
  }
}
```

## 🚀 一键隔离脚本

创建自动化迁移脚本：

```bash
#!/bin/bash
# scripts/migrate-to-legacy.sh

set -e

echo "🚀 开始 Legacy 代码隔离..."

# 1. 创建 legacy 目录
echo "📁 创建 legacy 目录..."
mkdir -p src/legacy

# 2. 移动 Legacy 代码
echo "📦 移动 Legacy 代码..."
mv src/components src/legacy/components
mv src/features src/legacy/features
mv src/client src/legacy/client
mv src/scripts src/legacy/scripts
mv src/index.ts src/legacy/index.ts

# 3. 移动 Legacy 样式（保留 designTokens）
echo "🎨 移动 Legacy 样式..."
mkdir -p src/legacy/styles
mv src/styles/*.ts src/legacy/styles/ 2>/dev/null || true
# 恢复 designTokens
git checkout src/styles/designTokens.ts

# 4. 创建 components-next 目录（如果不存在）
echo "✨ 确保 components-next 目录存在..."
mkdir -p src/components-next

# 5. 更新导入路径
echo "🔄 更新导入路径..."
find src/components-next -type f -name "*.tsx" -o -name "*.ts" | while read file; do
  sed -i '' 's|@/index|@/legacy|g' "$file"
  sed -i '' 's|@/features/|@/legacy/features/|g' "$file"
  sed -i '' 's|@/components/|@/legacy/components/|g' "$file"
  sed -i '' 's|@/styles/|@/legacy/styles/|g' "$file"
  sed -i '' 's|@/scripts/|@/legacy/scripts/|g' "$file"
done

# 6. 更新 legacy/index.ts 中的导入
echo "🔧 更新 legacy/index.ts..."
sed -i '' "s|from './components/|from './legacy/components/|g" src/legacy/index.ts
sed -i '' "s|from './styles'|from './legacy/styles'|g" src/legacy/index.ts
sed -i '' "s|from './scripts'|from './legacy/scripts'|g" src/legacy/index.ts

# 7. 更新构建脚本路径
echo "🛠️ 更新构建脚本..."
sed -i '' 's|../src/client/|../src/legacy/client/|g' scripts/build-client.js
sed -i '' 's|../src/scripts/generated/|../src/legacy/scripts/generated/|g' scripts/build-client.js

# 8. 重新构建客户端代码
echo "🔨 重新构建客户端代码..."
npm run build:client

# 9. 验证构建
echo "✅ 验证构建..."
npm run build

echo "🎉 Legacy 代码隔离完成！"
echo ""
echo "📋 后续步骤："
echo "1. 检查 src/legacy/ 目录确认代码已移动"
echo "2. 运行 npm run dev 测试应用"
echo "3. 开始在 src/app/ 和 src/components-next/ 下进行新开发"
echo ""
echo "⚠️ 注意事项："
echo "- 旧代码现在在 src/legacy/ 目录下"
echo "- 新开发请使用 Next.js 最佳实践"
echo "- 适配器 LegacyPageWrapper 会继续工作"
echo "- 可以逐步迁移 legacy 功能到新架构"
```

## ✅ 验证清单

隔离完成后，请验证：

- [ ] `npm run build:client` 成功
- [ ] `npm run build` 成功
- [ ] `npm run dev` 启动正常
- [ ] 访问 http://localhost:3000 页面正常显示
- [ ] 导航功能正常工作
- [ ] 所有四个模块（如何用上/用好/实现/应用 CC）正常显示
- [ ] 控制台无错误

## 🎯 新开发指南

### 推荐的新架构开发模式

```
src/
├── app/                          # Next.js App Router
│   ├── (main)/                   # 主应用路由组
│   │   ├── dashboard/            # 新功能：仪表板
│   │   │   └── page.tsx
│   │   └── settings/             # 新功能：设置
│   │       └── page.tsx
│   │
│   └── api/                      # API 路由
│       └── v1/                   # API 版本
│
├── components-next/              # React 组件（shadcn/ui）
│   ├── ui/                       # shadcn/ui 组件
│   ├── features/                 # 功能组件
│   └── layouts/                  # 布局组件
│
├── lib/                          # 工具函数
│   ├── utils/                    # 通用工具
│   └── hooks/                    # React Hooks
│
├── api/                          # API 逻辑（复用）
└── legacy/                       # 旧代码（隔离）
    └── ... (不要修改)
```

### 开发原则

1. **新功能完全使用 Next.js 架构**
   - 使用 App Router
   - 使用 Server Components（默认）
   - 需要交互时使用 'use client'

2. **组件使用 shadcn/ui**
   - `npx shadcn@latest add button`
   - 放在 `src/components-next/ui/`

3. **样式使用 Tailwind CSS**
   - 基于 `src/styles/designTokens.ts` 的设计令牌
   - 使用 CSS 变量：`bg-[var(--color-bg-primary)]`

4. **不要修改 legacy 目录**
   - 所有新开发在 `src/app/` 和 `src/components-next/`
   - 如需复用 legacy 功能，先迁移到新架构

## 🔄 逐步迁移策略

当你准备迁移某个 legacy 功能时：

1. **创建新的 Next.js 页面**

   ```bash
   src/app/(main)/best-practices/page.tsx
   ```

2. **使用 React 组件重写**

   ```typescript
   // src/components-next/features/BestPractices.tsx
   'use client';

   export function BestPractices() {
     // 使用 React 重写逻辑
   }
   ```

3. **更新路由**
   - 从 LegacyPageWrapper 中移除该模块
   - 添加新的路由链接

4. **测试并删除旧代码**
   - 确保新功能完全正常
   - 从 `src/legacy/` 删除对应代码

## 📚 参考资源

- [Next.js App Router 文档](https://nextjs.org/docs/app)
- [shadcn/ui 组件库](https://ui.shadcn.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- 项目文档：`docs/QUICK_START_NEW_DEV.md`
