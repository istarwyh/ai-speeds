# cc4pm 首页问题修复记录

> 修复时间: 2026-04-06  
> 涉及文件: `src/legacy/styles/navigationStyles.ts`,
> `src/legacy/scripts/scripts/navigation.ts`,
> `src/legacy/components/navigation/navigation.ts`

---

## 问题描述

用户报告 cc4pm 首页嵌入存在两个问题：

1. **左侧留白** - 首页顶部和左侧存在空白区域
2. **折叠按钮失灵** - 侧边栏底部的折叠按钮点击无反应

---

## 问题分析

### 1. 左侧留白问题

**根本原因**：当 home section（cc4pm iframe）激活时：

- `updateHomeActiveState()` 调用 `collapseSidebar()`，将侧边栏宽度设为 60px
- `.content-wrapper.home-active` 只设置了 `padding: 0`，但没有覆盖
  `margin-left: 60px`
- `#home` 元素继承了 `.content-section` 的 `padding: 2rem 0`（32px 上下边距）

**具体表现**：

- iframe 左侧有 60px 空白（侧边栏占位）
- iframe 上下有 32px 空白（content-section 内边距）

### 2. 折叠按钮失灵问题

**根本原因**：`.nav-collapse-toggle` 按钮存在**双重事件绑定**：

1. HTML 模板中的 `onclick` 内联事件处理器
2. JavaScript 中的 `addEventListener` 绑定

**触发机制**：

- `initNavigation()` 在 `LegacyPageWrapper.tsx` 中被调用**两次**
  - 第一次：通过 DOMContentLoaded 替换立即执行
  - 第二次：通过 setTimeout 100ms 延迟执行（作为兜底）
- 每次调用都会绑定一次事件监听器
- 点击时触发两次 `toggleSidebarCollapse()` → 双重切换 → 状态复原 → 看起来没反应

---

## 解决方案

### 1. 修复左侧留白

**文件**: `src/legacy/styles/navigationStyles.ts`

```css
/* Fullscreen mode for home section */
.content-wrapper.home-active {
  padding: 0 !important;
  margin-left: 0 !important;
}

.content-wrapper.home-active #home.content-section {
  padding: 0 !important;
  min-height: 100vh;
}
```

**说明**：

- 为 `.content-wrapper.home-active` 添加 `margin-left: 0 !important`
  消除侧边栏占位
- 为 `#home.content-section` 添加 `padding: 0 !important` 消除上下内边距
- 设置 `min-height: 100vh` 确保全屏高度

### 2. 修复折叠按钮

**步骤 1**: 移除重复的 inline onclick

**文件**: `src/legacy/components/navigation/navigation.ts`

```html
<!-- 修复前 -->
<button
  class="nav-collapse-toggle"
  aria-label="Toggle sidebar"
  title="Toggle sidebar"
  onclick="..."
>
  <!-- 修复后 -->
  <button
    class="nav-collapse-toggle"
    aria-label="Toggle sidebar"
    title="Toggle sidebar"
  ></button>
</button>
```

**步骤 2**: 添加防重复绑定守护

**文件**: `src/legacy/scripts/scripts/navigation.ts`

```javascript
// Collapse toggle button (guard against double-bind from repeated initNavigation calls)
const collapseToggle = document.querySelector('.nav-collapse-toggle');
if (collapseToggle && !collapseToggle.dataset.listenerBound) {
  collapseToggle.dataset.listenerBound = 'true';
  collapseToggle.addEventListener(
    'click',
    function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleSidebarCollapse();
    },
    true,
  );
}
```

**说明**：

- 使用 `dataset.listenerBound` 标记防止重复绑定
- 即使 `initNavigation()` 被多次调用，也只会绑定一次事件监听器

---

## 验证结果

### 1. 留白修复验证

- ✅ iframe 现在填满整个视口宽度
- ✅ 无左侧 60px 空白
- ✅ 无上下 32px 空白
- ✅ 侧边栏以 fixed 定位覆盖在 iframe 上方

### 2. 折叠按钮验证

- ✅ 点击底部折叠按钮可正常展开/收起侧边栏
- ✅ `nav-collapsed` 类正确切换
- ✅ 侧边栏宽度在 250px 和 60px 间切换
- ✅ 按钮图标旋转动画正常

---

## 技术要点总结

### CSS 层级管理

- 使用 `!important` 谨慎覆盖样式
- 理解 fixed 定位与 margin 的关系
- 全屏 iframe 容器的样式处理

### JavaScript 事件管理

- 防止事件监听器重复绑定的模式
- dataset 作为标记位的妙用
- React 组件中脚本初始化时机的处理

### 调试技巧

- 使用 Chrome DevTools 的 Computed Styles 查看最终样式
- 通过 DOM 快照验证元素状态变化
- 手动执行 JavaScript 验证逻辑正确性

---

## 后续建议

1. **统一脚本初始化**：考虑重构 `LegacyPageWrapper.tsx` 中的脚本执行逻辑，避免
   `initNavigation()` 多次调用
2. **样式重构**：将 `.content-section`
   的通用样式与特定 section 的样式分离，提高可维护性
3. **测试覆盖**：为关键交互（如侧边栏切换）添加自动化测试，防止回归

---

## 相关文件

- `src/components/LegacyPageWrapper.tsx` - 主页面包装器
- `src/legacy/styles/navigationStyles.ts` - 导航样式
- `src/legacy/scripts/scripts/navigation.ts` - 导航脚本
- `src/legacy/components/navigation/navigation.ts` - 导航组件模板
