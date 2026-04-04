# 白板功能技术方案

## 需求概述

在项目中新增一个白板功能 tab，允许用户在浏览器中自由绘制和书写，数据存储在本地浏览器存储中。

## 技术选型

### 白板库选择：tldraw

**选择理由：**

- **现代化架构**：基于 React 18+，完美适配 Next.js 14
- **开箱即用**：提供完整的 UI 和交互，无需从零构建
- **功能完善**：支持画笔、形状、文字、橡皮擦、选择、移动等常见工具
- **性能优异**：基于 Canvas 渲染，支持大量元素流畅交互
- **本地存储**：内置持久化机制，支持 localStorage/IndexedDB
- **TypeScript 原生支持**：类型安全，开发体验好
- **活跃维护**：由 tldraw 团队持续维护更新

**替代方案对比：**

- **excalidraw**：功能强大但 UI 风格固定，定制性较差
- **fabric.js**：底层库，需要大量自定义 UI 开发
- **konva.js**：同样需要自建 UI，开发成本高

### 依赖包

```json
{
  "tldraw": "^2.4.0"
}
```

## 架构设计

### 目录结构

```
src/
├── app/
│   └── (main)/
│       └── whiteboard/
│           └── page.tsx          # 白板页面
├── components/
│   └── features/
│       └── whiteboard/
│           ├── WhiteboardCanvas.tsx   # 白板画布组件
│           └── index.ts
└── config/
    └── navigation.ts             # 导航配置（需更新）
```

### 数据流

```
用户绘制
    ↓
tldraw Editor State
    ↓
自动持久化到 localStorage
    ↓
页面刷新时自动恢复
```

### 存储方案

**使用 tldraw 内置持久化：**

- **存储位置**：`localStorage`
- **存储键**：`tldraw_whiteboard_data`
- **存储内容**：JSON 格式的绘制数据（shapes, bindings, assets）
- **容量限制**：localStorage 通常 5-10MB，足够白板使用

**数据结构示例：**

```typescript
{
  "document": {
    "shapes": [...],      // 所有绘制的形状
    "bindings": [...],    // 形状之间的连接关系
    "assets": [...]       // 图片等资源
  },
  "session": {
    "camera": {...},      // 视图位置和缩放
    "selectedIds": []     // 当前选中的元素
  }
}
```

## 实现细节

### 1. 白板组件 (`WhiteboardCanvas.tsx`)

```typescript
'use client'

import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

export function WhiteboardCanvas() {
  return (
    <div className="h-full w-full">
      <Tldraw
        persistenceKey="whiteboard"
        // 自动保存到 localStorage
      />
    </div>
  )
}
```

**关键特性：**

- `persistenceKey`：指定存储键，自动启用持久化
- 全屏布局，占满父容器
- 自动保存，无需手动实现

### 2. 页面组件 (`/app/(main)/whiteboard/page.tsx`)

```typescript
import { WhiteboardCanvas } from '@/components/features/whiteboard'

export default function WhiteboardPage() {
  return (
    <div className="h-[calc(100vh-4rem)] w-full">
      <WhiteboardCanvas />
    </div>
  )
}

export const metadata = {
  title: '白板 - AI Speeds',
  description: '自由绘制和书写的白板工具'
}
```

**布局说明：**

- 高度：`calc(100vh - 4rem)` 减去顶部导航栏高度
- 宽度：100% 占满容器
- 无需额外样式，tldraw 自带完整 UI

### 3. 导航配置更新 (`navigation.ts`)

```typescript
export const navigationItems = [
  // ... 现有配置
  {
    label: '白板',
    href: '/whiteboard',
    icon: 'Pencil', // 或 'PenTool'
  },
];
```

## UI/UX 设计

### 工具栏

tldraw 内置工具栏包含：

- **选择工具**：移动、缩放、旋转元素
- **画笔工具**：自由绘制
- **橡皮擦**：擦除内容
- **形状工具**：矩形、圆形、箭头、线条
- **文字工具**：添加文本
- **便签工具**：添加便签卡片

### 样式定制

通过 CSS 变量适配项目主题：

```css
.tldraw {
  --color-background: theme('colors.background');
  --color-text: theme('colors.foreground');
  /* 更多主题变量... */
}
```

### 响应式设计

- **桌面端**：完整工具栏 + 大画布
- **移动端**：tldraw 自动适配触摸操作，工具栏收起

## 性能优化

### 1. 代码分割

```typescript
// 动态导入白板组件
const WhiteboardCanvas = dynamic(
  () =>
    import('@/components/features/whiteboard').then(m => m.WhiteboardCanvas),
  { ssr: false },
);
```

**原因：**

- tldraw 包体积较大（~500KB gzipped）
- 仅在访问 `/whiteboard` 时加载
- 减少首页加载时间

### 2. 渲染优化

- tldraw 使用 Canvas 渲染，性能优于 SVG
- 内置虚拟化，仅渲染可见区域
- 支持数千个元素流畅交互

### 3. 存储优化

- 自动压缩存储数据
- 定期清理未使用的 assets
- 监控 localStorage 使用量

## 安全性考虑

### 1. XSS 防护

- tldraw 自动转义用户输入
- 文本内容不会被解析为 HTML

### 2. 存储安全

- 数据仅存储在用户本地
- 不上传到服务器
- 用户可随时清除数据

### 3. 隐私保护

- 无需登录即可使用
- 不收集用户绘制内容
- 符合隐私保护原则

## 扩展性设计

### 未来可能的功能

1. **导出功能**
   - 导出为 PNG/SVG/PDF
   - tldraw 内置支持

2. **分享功能**
   - 生成分享链接
   - 需要后端支持

3. **协作功能**
   - 多人实时协作
   - 需要 WebSocket + 后端

4. **模板库**
   - 预设常用模板
   - 快速开始绘制

5. **云端同步**
   - 跨设备同步
   - 需要用户登录 + 后端存储

## 测试计划

### 功能测试

- [ ] 绘制工具正常工作
- [ ] 数据持久化正常
- [ ] 页面刷新后数据恢复
- [ ] 清除数据功能正常

### 兼容性测试

- [ ] Chrome/Edge（Chromium）
- [ ] Firefox
- [ ] Safari
- [ ] 移动端浏览器

### 性能测试

- [ ] 首次加载时间 < 2s
- [ ] 绘制响应延迟 < 16ms（60fps）
- [ ] 大量元素（1000+）流畅度

## 实施步骤

1. **安装依赖**

   ```bash
   pnpm add tldraw
   ```

2. **创建组件**
   - `WhiteboardCanvas.tsx`
   - `page.tsx`

3. **更新导航**
   - 修改 `navigation.ts`
   - 添加白板图标

4. **样式调整**
   - 适配项目主题
   - 确保响应式布局

5. **测试验证**
   - 功能测试
   - 性能测试
   - 跨浏览器测试

## 风险评估

### 技术风险

| 风险                      | 影响 | 概率 | 缓解措施                 |
| ------------------------- | ---- | ---- | ------------------------ |
| tldraw 版本升级破坏性变更 | 中   | 低   | 锁定版本，定期测试升级   |
| localStorage 容量限制     | 低   | 中   | 监控使用量，提示用户清理 |
| 浏览器兼容性问题          | 中   | 低   | 充分测试，提供降级方案   |

### 用户体验风险

| 风险           | 影响 | 概率 | 缓解措施                 |
| -------------- | ---- | ---- | ------------------------ |
| 首次加载慢     | 中   | 中   | 代码分割，显示加载状态   |
| 数据丢失       | 高   | 低   | 提示用户定期导出备份     |
| 移动端操作不便 | 中   | 中   | 优化触摸交互，简化工具栏 |

## 总结

本方案采用 tldraw 作为白板库，具有以下优势：

- ✅ **快速实现**：开箱即用，开发周期短
- ✅ **功能完善**：涵盖所有常见绘图工具
- ✅ **性能优异**：Canvas 渲染，流畅体验
- ✅ **易于维护**：活跃社区，持续更新
- ✅ **扩展性强**：支持未来功能扩展

预计开发时间：**2-3 小时**

---

**文档版本**：v1.0  
**创建日期**：2026-04-04  
**作者**：AI Assistant
