# AI Speeds 品牌标识使用指南

## 概述

AI Speeds 拥有统一的品牌标识系统，包含多种组件和变体，适用于不同的使用场景。

## 品牌组件

### 1. BrandIcon - 品牌图标

主要的品牌图标组件，支持多种变体：

```tsx
import { BrandIcon } from '@/components/brand';

<BrandIcon size={32} variant='default' design='spiral' />;
```

**参数说明：**

- `size`: 图标尺寸 (默认: 32)
- `variant`: 颜色变体
  - `default`: 彩色版本 (推荐)
  - `monochrome`: 单色版本
  - `gradient`: 渐变版本
- `design`: 设计样式
  - `spiral`: A+S 山峰攀登路径 (默认推荐)
  - `letterform`: A+S 字母形式
  - `lightning`: 闪电设计 (原始版本)

### 2. BrandLogo - 品牌标识

包含图标和文字的完整品牌标识：

```tsx
import { BrandLogo } from '@/components/brand';

<BrandLogo size='medium' showText={true} variant='default' />;
```

**参数说明：**

- `size`: 整体尺寸
  - `small`: 小尺寸 (24px图标)
  - `medium`: 中等尺寸 (32px图标)
  - `large`: 大尺寸 (48px图标)
- `showText`: 是否显示文字 (默认: true)
- `variant`: 颜色变体 (同 BrandIcon)

### 3. BrandWordmark - 文字标识

纯文字版本的品牌标识：

```tsx
import { BrandWordmark } from '@/components/brand';

<BrandWordmark size={120} />;
```

### 4. BrandFavicon - 网站图标

专门用于favicon的简化版本：

```tsx
import { BrandFavicon } from '@/components/brand';

<BrandFavicon size={32} />;
```

## 使用场景和建议

### 页面头部/导航栏

```tsx
<BrandLogo size='medium' variant='default' />
```

### 页脚

```tsx
<BrandLogo size='small' variant='monochrome' />
```

### Favicon

使用 `public/favicon.svg` 文件，已自动配置

### 按钮或小图标

```tsx
<BrandIcon size={24} variant='default' design='spiral' />
```

### 品牌展示页面

```tsx
<BrandWordmark size={180} />
```

## 品牌颜色

```tsx
import { BRAND_COLORS } from '@/components/brand';

// 主要颜色
BRAND_COLORS.primary; // #4ECDC4 (Teal)
BRAND_COLORS.secondary; // #2563eb (Blue)
BRAND_COLORS.accent; // #7EDDD6 (Light Teal)
BRAND_COLORS.dark; // #0f172a (Dark)
BRAND_COLORS.light; // #f8fafc (Light)
```

## 设计理念

**A+S 山峰攀登设计 (推荐):**

- 字母A: 山峰三角形，代表向上攀登
- 字母S: 连续的攀登路径，代表速度和进步
- 顶点: 成就的象征
- 颜色: Teal + Blue，现代科技感

这个设计象征着"AI Speeds"帮助用户在AI时代不断攀登、加速前进。

## 最佳实践

1. **一致性**: 在同一产品中保持设计和变体的一致性
2. **可读性**: 确保在小尺寸下仍然清晰可辨
3. **对比度**: 确保与背景有足够的对比度
4. **留白**: 保持适当的留白空间
5. **变体选择**:
   - 主要界面使用 `spiral` 设计
   - 需要单色时使用 `monochrome` 变体
   - 特殊展示可使用 `gradient` 变体

## 文件结构

```
src/components/brand/
├── index.ts           # 统一导出
├── BrandIcon.tsx      # 主图标组件
├── BrandLogo.tsx      # 完整标识组件
├── BrandFavicon.tsx   # Favicon组件
├── BrandConstants.ts  # 品牌常量
└── BrandWordmark.tsx  # 文字标识 (在BrandIcon中)
```

## 更新和维护

如需更新品牌标识，请：

1. 修改 `BrandIcon.tsx` 中的SVG路径
2. 更新 `public/favicon.svg` 保持一致
3. 检查所有使用场景的显示效果
4. 更新此文档
