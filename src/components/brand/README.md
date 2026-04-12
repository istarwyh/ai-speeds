# AI Speeds Brand Components

统一的品牌标识组件库，提供一致的视觉体验。

## 快速开始

```tsx
import { BrandLogo, BrandIcon, BRAND_COLORS } from '@/components/brand';

// 页面头部
<BrandLogo size="medium" />

// 小图标
<BrandIcon size={24} design="spiral" />

// 使用品牌颜色
<div style={{ color: BRAND_COLORS.primary }}>
  AI Speeds
</div>
```

## 组件列表

- **BrandLogo**: 完整的品牌标识（图标+文字）
- **BrandIcon**: 纯图标组件
- **BrandWordmark**: 文字标识
- **BrandFavicon**: Favicon专用
- **BRAND_COLORS**: 品牌色彩常量

## 推荐使用

- 默认使用 `design="spiral"` (A+S山峰设计)
- 主要界面使用 `variant="default"`
- 单色场景使用 `variant="monochrome"`
