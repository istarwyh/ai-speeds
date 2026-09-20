---
name: site-shell-and-homepage-refactor-technical-plan
status: in-progress
created: 2026-09-13T02:39:57Z
updated: 2026-09-13T12:39:19Z
---

# AI Speeds 全局站点 Shell 与首页重构技术方案

## 1. 文档状态

本文定义 AI Speeds 参考 `lovstudio.ai` 页面结构后的长期重构方案，重点覆盖：

- 全局 Header 与响应式导航。
- 站点信息架构。
- Site、Tool、Immersive、Legacy 四类页面 Shell。
- 从原 iframe 首页向原生 React 页面迁移。
- 现有 Hash Section 向真实路由迁移。
- 设计 Token、搜索、SEO、无障碍和性能边界。
- 分阶段实施、验证和回滚策略。

截至 2026-09-13，本地核心实现和 Cloudflare
Preview 功能验证已经完成：Feature、Navigation、Contributor、Share
Provenance 与 Search 基础、共享 Site / Tool / Immersive / Legacy
Shell、原生使命首页、Route
Group 迁移、旧 Hash 兼容、SEO 与主要无障碍修复均已落地。六项手工本地静态与构建门禁通过；最终焦点恢复源码再次通过 Next.js 与 OpenNext 构建，并在最新 Preview 中通过 Search 实际打开者恢复、移动与桌面普通关闭、只改变宽度的 1023px
↔ 1024px 断点关闭、Portal 与 Body Lock 清理、Console /
Network 以及聚焦 Lighthouse 验证。

本文仍保持
`in-progress`：生产发布与稳定观察期尚未获授权，cc4pm 静态首页回滚链继续保留；Share 详情页的预定义冷移动 LCP 平均为 16,762ms，高于 11,923.2ms 目标；cc4pm 详细内容迁移、首页剩余 Palette
/ RGB Token 收敛、Style Guide Catalog 补齐、Public Work 嵌套标题层级和 Curated
`licensed` 授权依据校验也仍是明确未完成项。上述结果不能用其他通过项掩盖。

参考原则：借鉴 Lovstudio 的站点结构与交互模型，不复制其品牌、账号业务或视觉资产。

本次重构的北极星不是单纯统一页面，而是建立一个可以长期积累品牌认知、创作成果、协作关系与优质知识资源的 AI
Speeds 公共阵地。

## 2. 背景与问题定义

### 2.1 使命

AI Speeds 的长期使命是：

> **帮助人们拥抱 AI 时代带来的巨大生产力和范式跃进。**

站点中的产品、工具、文章、分享、案例和资源策展都应服务于这一使命。判断一个新栏目或新内容是否应进入 AI
Speeds，不只看它是否与 AI 有关，还要看它是否能够帮助访问者：

- 理解 AI 带来的工作方式变化。
- 学会使用新的工具和方法。
- 将 AI 转化为真实生产力。
- 看到可复用的实践、作品与案例。
- 连接能够共同创造的人、团队和合作方。

### 2.2 长期品牌定位

AI
Speeds 不是只承载单一创作者的个人作品集，也不是允许任意内容上传的通用 UGC 平台。目标定位是：

> **一个由明确使命驱动、创始贡献者发起、允许团队和合作方共同建设，并通过编辑策展收录优质外部资源的开放创作品牌与内容平台。**

贡献结构按阶段演进：

```text
短期
└── 以创始贡献者的产品、工具、方法和分享为主

中期
├── 团队共同创作与维护
├── 合作方联合项目、案例与内容
└── 邀请贡献者的分享与作品

长期
├── 原创产品与工具
├── 团队和合作方共创成果
├── 社区贡献与公开实践
└── 经过明确来源标注和编辑判断的优质资源收藏
```

因此，技术模型从第一版开始就不能把作者、所有者或贡献者硬编码为单一自然人。页面可以在短期主要展示创始贡献者，但数据结构必须支持个人、团队和组织，并清楚区分原创、协作与策展内容。

### 2.3 重构前技术背景（历史基线）

以下“当前”均指本轮 Shell 重构开始前的实现，不描述 7.5 和 21.8 所记录的最终落地状态。

重构前的 AI Speeds 已经包含多类公开页面和工具：

```text
/
/whiteboard
/playground
/recording-summary
/shares
/shares/[slug]
/shares/[slug]/deck
/brand
```

首页还通过 Hash 切换：

```text
/#get-started
/#ai-wireframe
```

重构前功能数量已经超出单一营销页的范围，但页面仍以“全屏 iframe + 可拖拽浮动菜单”为中心：

```text
src/app/page.tsx
└── HomePageWithNav
    ├── 可拖拽浮动菜单
    └── 三选一内容
        ├── cc4pm iframe
        ├── GetStartedSection
        └── AiWireframeSection
```

这导致以下长期问题：

1. 没有跨路由共享的站点 Header 和 Footer。
2. 品牌、产品、工具和内容资源之间没有稳定的信息层级。
3. 首页正文位于 iframe，和外层 Next.js 页面拥有不同的 DOM、滚动、字体、Token、URL 与交互状态。
4. `/playground`、`/whiteboard`、`/shares`、`/brand` 等页面分别实现局部 Header。
5. Hash 被用作轻量路由系统，无法完整获得 App
   Router 的 Metadata、布局和独立分享能力。
6. 重构前至少有四套并行视觉系统，运行时样式缺少单一权威源。
7. 新增产品或内容时只能继续扩大浮动菜单，难以形成可发现、可搜索的长期站点。

## 3. 重构目标

### 3.1 核心目标

1. 将 AI Speeds 建立为承载长期创作和公共影响力的上层品牌与平台。
2. 让产品、工具、内容和资源共同表达“帮助人们拥抱 AI 生产力与范式跃进”的使命。
3. 近期支持创始贡献者主导，长期支持个人、团队、合作方和邀请贡献者共同建设。
4. 区分原创、协作和策展内容，保留清晰的作者、贡献者、来源与权利信息。
5. 建立稳定的全局信息架构与分组导航。
6. 为普通内容页提供一致的 Site Shell。
7. 为工具页提供紧凑且不干扰工作区的 Tool Shell。
8. 为演示等沉浸式页面保留独立控制界面。
9. 将首页从 iframe 迁移到原生 Next.js / React 组件。
10. 保留现有 cc4pm 内容价值和关键交互，不机械复制静态 HTML。
11. 让页面内容进入初始服务端 HTML，改善 SEO、可访问性和维护性。
12. 让导航、搜索、Sitemap、贡献者和页面元信息由类型化公开数据驱动。
13. 保留现有 URL，并为旧 Hash 链接提供兼容迁移。
14. 让未来增加一个产品、一次共创或一条精选资源时，不需要重新设计整个站点。

### 3.2 非目标

本轮不应：

- 一比一复制 Lovstudio 的 Logo、字体、内容、插画或配色。
- 在没有真实账户能力时添加积分、通知、头像或虚假登录状态。
- 重写 AI API Proxy 服务层。
- 重写 Whiteboard、Playground、Recording Summary、AI Wireframe 的业务功能。
- 改变 Public Shares 的内容注册表、R2 不可变发布模型或 Deck 核心交互。
- 将普通全局 Header 强行包裹到 Deck Viewer 等全屏页面。
- 一次性重写所有页面视觉。
- 在第一阶段引入新的后端搜索服务。
- 把 AI Speeds 固化成只能展示单一自然人作品的个人主页。
- 在尚无真实内容时提前暴露空的团队、合作方或收藏栏目。
- 将外部优质资源重新包装成 AI Speeds 原创内容。
- 在没有明确来源、署名和权利边界时复制或托管第三方完整内容。
- 建设任何人都可以直接发布内容的开放式 UGC 系统。
- 直接编辑构建生成的 `public/static/cc4pm-homepage.html` 作为长期实现。

## 4. Lovstudio 结构调研基线

以下数据来自 2026-09-13 对 `lovstudio.ai`
的桌面、平板、移动、登录和未登录状态实测。参考站未来可能变化，本文记录的是本次方案所依据的结构基线。

### 4.1 页面结构

Lovstudio 首页使用共享 Sticky
Header、六个编辑型内容 Section、大型 Footer 和固定反馈入口：

```text
Global Header
├── Community Hero
├── Product Showcase
├── Manifesto
├── Tools and Skills
├── Public Work / Case Studies
├── Founder / About
└── Site Footer
```

其长期扩展能力主要来自：

- 品牌 Shell 与页面内容分离。
- 一级内容域稳定。
- 大型产品故事和内容集合分开表达。
- 功能页使用真实路由。
- 搜索、账号和外部产品位于独立工具层。
- 移动端重新组织完整导航，而不是删除导航。

### 4.2 Header 实测规格

| 项目                  | 实测结果                   |
| --------------------- | -------------------------- |
| 定位                  | `position: sticky; top: 0` |
| Header 层级           | 约 `z-index: 40`           |
| `sm` 以上主行高度     | 64px                       |
| `sm` 以下主行高度     | 56px                       |
| 内容最大宽度          | 1152px，约等于 `max-w-6xl` |
| `sm` 以上水平 Padding | 16px                       |
| `sm` 以下水平 Padding | 12px                       |
| 背景                  | 约 80% 不透明的暖灰白      |
| Backdrop Blur         | 约 12px                    |
| 底边框                | 1px 暖灰色                 |
| 滚动行为              | 不缩小、不隐藏、不切换样式 |

截图中的 128px 物理高度对应 DPR 2 下约 64px CSS 高度。

Header 内部是三段式正常流布局：

```text
品牌区               一级导航与外部站点               搜索与账户工具
```

中间导航不是通过绝对定位强制放在视口中心。

### 4.3 参考断点

| 断点          | Lovstudio 行为                       | AI Speeds 采用策略       |
| ------------- | ------------------------------------ | ------------------------ |
| `xl / 1280px` | 显示版本号                           | 第一阶段不显示版本号     |
| `lg / 1024px` | 完整桌面导航与紧凑菜单切换           | 采用相同导航断点         |
| `md / 768px`  | 公告条长短文案切换                   | 仅预留，不默认启用公告条 |
| `sm / 640px`  | Header 64/56px、Padding 16/12px 切换 | 采用相同尺寸断点         |

### 4.4 桌面导航行为

- 一级导航高约 36px。
- 当前项使用品牌色文字和 2px 下划线。
- 分组菜单点击打开，不使用 Hover-only 打开。
- 菜单支持 Escape、键盘操作和焦点返回。
- 内外部导航使用分割线区分。
- Dropdown 使用白色表面、浅边框、14–16px 圆角和短距离淡入缩放动画。
- 普通 Dropdown 不使用全屏遮罩。

### 4.5 移动导航行为

低于 1024px 后：

- 完整横向导航隐藏。
- 品牌和搜索仍保留。
- 已登录状态由头像触发“导航 + 账户”合并菜单。
- 未登录状态由 Hamburger 触发完整站点菜单。
- 菜单是右对齐浮层，不是宽度占满的侧边 Drawer。
- 内容过长时菜单内部滚动并锁定 Body Scroll。

AI Speeds 当前没有账户系统，因此采用未登录模式：

```text
AI Speeds                              搜索   菜单
```

### 4.6 全局搜索行为

- 所有视口都保留 Search Trigger。
- 支持 `Meta+K` 和 `Control+K`。
- 打开后自动聚焦输入框。
- Escape 关闭并恢复焦点。
- 桌面最大宽度约 672px。
- 移动端左右各保留 16px。
- Dialog 内部滚动，外部 Body 锁定。
- 使用 Dialog、Combobox、Listbox 语义。

## 5. 实施前基线与当前保留回滚链

除 5.4–5.5 明确说明当前保留状态的内容外，本节其余“当前”均指重构开始前的历史基线。

### 5.1 Root Layout

实施前与当前的 `src/app/layout.tsx` 均负责：

- 全局 Metadata。
- `<html lang='zh-CN'>`。
- `<body>{children}</body>`。
- 开发环境集成脚本。

它没有全局视觉 Shell。后续必须完整保留文件中明确标记不可修改的开发集成区块。

### 5.2 实施前根首页

实施前的 `src/app/page.tsx` 仅渲染：

```tsx
<HomePageWithNav />
```

`src/components/HomePageWithNav.tsx` 同时承担：

- Hash Section 状态。
- 浮动菜单打开状态。
- Hover 延迟关闭。
- Escape 和 Outside Pointer 关闭。
- Pointer Capture 拖拽。
- Local Storage 坐标持久化。
- Viewport Clamp。
- 菜单展开方向和最大高度计算。
- 页面内容互斥切换。
- iframe 首页渲染。

它不是可复用的全局站点导航组件。

### 5.3 实施前 iframe 首页

实施前根首页使用：

```tsx
<iframe
  src='/static/cc4pm-homepage.html'
  className='block h-[100dvh] w-full border-0 bg-bg-primary'
/>
```

iframe 内部有独立的：

- HTML Document。
- Poppins / Lora 字体。
- CSS Variables。
- 响应式断点。
- Intersection Observer。
- Architecture Renderer。
- Accordion。
- Counter Animation。
- Clipboard 逻辑。
- Terminal Typewriter。

外层 CSS、Tailwind、URL Fragment、焦点管理和滚动状态不会自动传入 iframe。

### 5.4 静态首页是构建生成物

`public/static/cc4pm-homepage.html` 不是应直接维护的源文件。

`package.json` 中以下命令都会先运行 `prepare:homepage`：

```text
pnpm run dev
pnpm run build
pnpm run cf:build
```

`prepare:homepage` 对应 `scripts/prepare-cc4pm-homepage.mjs`，当前行为是：

1. 从 `node_modules/@cc4pm/homepage/index.html` 读取源页面。
2. 通过正则删除 `<!-- NAV --> ... </header>`。
3. 注入本项目的 iframe 移动端覆盖样式。
4. 注入 `noindex,follow` Robots Metadata。
5. 将 Navbar Scroll 访问改为 Null-safe Optional Chaining。
6. 覆盖写入 `public/static/cc4pm-homepage.html`。

因此：

- 直接修改 `public/static/cc4pm-homepage.html` 会在下次开发或构建时被覆盖。
- 当前 Navbar DOM 缺失是构建脚本主动移除的结果。
- 原页面的 Navbar CSS 和部分不可达 Mobile Menu DOM 仍被保留。
- 长期迁移必须修改源架构，而不是修改生成文件。

### 5.5 实施前静态首页缺陷与当前修复

实施前生成页面在 Navbar DOM 被删除后仍直接执行：

```javascript
const navbar = document.getElementById('navbar');
navbar.classList.toggle(...);
```

这会在 Scroll 回调中触发空节点异常。当前保留的生成脚本已经把访问改为
`navbar?.classList.toggle(...)`，因此该异常不再适用于当前工作区生成物。

仍保留的历史结构包括：

- Mobile Menu DOM 仍存在。
- 可见 Hamburger Trigger 已随 Header 被删除。
- Mobile Menu 实际不可访问。
- iframe 内锚点只改变 iframe 自身 Fragment。
- 错误的站内链接可能把完整 Next.js 应用再次加载进 iframe。

### 5.6 页面 Header 碎片化

重构前页面分别拥有不同的 Header 或返回入口：

| 页面                  | 当前模式             |
| --------------------- | -------------------- |
| `/`                   | 可拖拽浮动菜单       |
| `/playground`         | 48px 局部工具 Header |
| `/whiteboard`         | 48px 局部工具 Header |
| `/shares`             | `ShareHeader`        |
| `/shares/[slug]`      | `ShareHeader`        |
| `/shares/[slug]/deck` | Deck 专用演示 Header |
| `/recording-summary`  | Hero 内返回首页按钮  |
| `/brand`              | Hero 内返回 Chip     |
| `/#ai-wireframe`      | 编辑器内部工具界面   |

### 5.7 Token 碎片化

重构前至少存在四套并行视觉系统：

1. `src/app/globals.css` + Tailwind 语义 Token。
2. cc4pm 静态 iframe 的独立 CSS Variables。
3. `GetStartedSection` 的米色、Slate、Cyan、Coral 和宋体组合。
4. `AiWireframeSection` 的米色、Blue、Slate 和 Georgia 组合。

`src/styles/designTokens.ts`
当前是样式指南数据，不是运行时 Token 源。真正的运行时权威源应统一为：

```text
src/app/globals.css
        ↓
tailwind.config.ts
        ↓
React Components
```

## 6. 目标品牌与信息架构

### 6.1 品牌与创作生态层级

目标结构：

```text
AI Speeds Mission
帮助人们拥抱 AI 时代带来的巨大生产力和范式跃进
│
├── Products
│   ├── AI API Gateway
│   └── cc4pm
│
├── Tools
│   ├── Playground
│   ├── Whiteboard
│   ├── Recording Summary
│   └── AI Wireframe
│
├── Knowledge and Work
│   ├── Get Started
│   ├── Public Shares
│   ├── Articles / Methods
│   └── Cases / Experiments
│
├── Curated Resources
│   ├── 外部文章与研究
│   ├── 工具与项目收藏
│   └── 带有 AI Speeds 编辑说明的专题集合
│
└── Contributors
    ├── 创始贡献者
    ├── Team
    ├── Partners
    └── Invited Contributors
```

AI
Speeds 是上层品牌、使命载体和编辑出版主体，cc4pm 是其产品之一。首页不再等同于 cc4pm 单一产品页，也不应把全部内容描述成某一个人的独立作品。

短期页面可以主要呈现创始贡献者的成果，但长期品牌归属与具体内容署名必须分开：

- AI Speeds 负责统一使命、质量标准、信息架构和发布体验。
- 具体产品、作品和文章保留真实创作者与维护者。
- 联合项目明确展示团队和合作方。
- 精选资源明确展示原作者、原始来源和 AI Speeds 的策展角色。

### 6.2 内容来源与署名模型

所有可发现内容必须属于以下一种来源：

| 来源            | 含义                                 | 展示要求                          |
| --------------- | ------------------------------------ | --------------------------------- |
| `original`      | AI Speeds 或其贡献者原创             | 显示创作者、维护者与发布时间      |
| `collaboration` | 与团队、合作方或邀请贡献者联合完成   | 显示全部主要贡献方及角色          |
| `curated`       | AI Speeds 选择、整理和评论的外部资源 | 显示“精选/策展”、原作者和原始链接 |

推荐类型：

```typescript
export type ContributorKind = 'person' | 'team' | 'organization';

export type ContributionRole =
  | 'creator'
  | 'author'
  | 'maintainer'
  | 'collaborator'
  | 'speaker'
  | 'curator';

export type ContentOrigin = 'original' | 'collaboration' | 'curated';
export type RightsMode = 'owned' | 'licensed' | 'linked-only';

export type Contributor = {
  id: string;
  kind: ContributorKind;
  displayName: string;
  description?: string;
  profileHref?: string;
  avatarUrl?: string;
};

export type ContentAttribution = {
  contributorId: string;
  roles: readonly ContributionRole[];
};

export type ContentProvenance = {
  origin: ContentOrigin;
  attributions: readonly ContentAttribution[];
  rightsMode: RightsMode;
  sourceUrl?: string;
  canonicalUrl?: string;
  license?: string;
};
```

公开规则：

- `original` 至少有一个 `creator` 或 `author`。
- `collaboration` 必须包含至少两个不同贡献主体，并至少包含一项 `collaborator`
  角色。
- `curated` 必须包含 `curator`、原作者信息和 HTTPS `sourceUrl`。
- `curated` 默认使用 `linked-only`，只保存必要的标题、摘要、缩略信息和 AI
  Speeds 编辑说明。
- 未经明确授权，不镜像第三方完整文章、视频、附件或下载文件。
- 页面卡片和详情页必须让访问者能够区分“AI Speeds 创作”和“AI Speeds 精选”。

### 6.3 Contributor Registry

建议建立独立贡献者注册表：

```text
src/content/contributors/
├── types.ts
├── registry.ts
└── index.ts
```

第一版即使只有一个主要贡献者，也通过 Registry 引用，而不是在页面组件中写死姓名。后续 Team、Partner 和 Invited
Contributor 使用同一结构。

Public Shares 现有 `share.author`
不在 Header 重构阶段强制改型。当前由独立、以 Slug 为 Key 的 Provenance
Registry 提供统一展示署名，`share.author`
仍用于部分搜索 Keyword 与 Metadata；等内容模型单独迁移时再支持多贡献者，避免破坏已经发布的 Share。

贡献者详情页不是第一阶段必需路由；只有在拥有足够真实内容后才增加
`/contributors/[id]` 或 `/people/[id]`，不能先发布空档案页。

### 6.4 第一版导航

```text
首页
产品 ▼
  ├── AI API 网关
  └── cc4pm
工具 ▼
  ├── 接口测试
  ├── 白板
  ├── 录音总结
  └── UI 结构设计
资源 ▼
  ├── 接入指南
  └── 公开分享
Brand Kit
────────
GitHub ↗

右侧：搜索 + 打开 Playground
```

约束：

- 只展示真实存在或在本方案中明确创建的入口。
- 第一阶段不显示登录、积分、通知、头像或版本号。
- GitHub URL 来自集中配置，不在组件中散落硬编码。
- 产品项第一阶段可以链接到原生首页 Product
  Section；未来可无损升级为独立产品路由。
- “打开 Playground”是主要 CTA，因为它是当前可立即使用的真实功能。
- 第一版不在主导航展示空的 Team、Partners、Articles、Cases 或 Curated
  Resources 栏目。
- 当相应栏目拥有经过审核的真实公开内容后，可加入“资源”分组或升级为独立一级内容域。
- 卡片中的来源标签和贡献者署名不依赖主导航是否已经暴露对应集合页。

### 6.5 URL 目标

| 功能        | 目标 URL              | 说明                               |
| ----------- | --------------------- | ---------------------------------- |
| 首页        | `/`                   | 原生 React 编辑型首页              |
| AI API 网关 | `/#api-gateway`       | 第一阶段首页产品区锚点             |
| cc4pm       | `/#cc4pm`             | 第一阶段首页产品区锚点             |
| 接入指南    | `/get-started`        | 从 Hash Section 提升为独立路由     |
| UI 结构设计 | `/wireframe`          | 从 Hash Section 提升为独立工具路由 |
| Playground  | `/playground`         | 保持 URL                           |
| Whiteboard  | `/whiteboard`         | 保持 URL                           |
| 录音总结    | `/recording-summary`  | 保持 URL                           |
| 公开分享    | `/shares`             | 保持 URL                           |
| Brand Kit   | `/brand`              | 保持 URL                           |
| Deck        | `/shares/[slug]/deck` | 保持 URL，继续沉浸式显示           |

### 6.6 内容贡献、策展与发布治理

AI
Speeds 对外承担 Publisher 和编辑品牌职责，但 Publisher 不等于每项内容的唯一作者。

#### 发布状态

目标通用内容模型为：

```typescript
export type PublicationStatus = 'draft' | 'review' | 'public' | 'archived';
```

- `draft`：仅本地创作，不进入公开构建结果。
- `review`：内容、来源、权利和展示方式待审核。
- `public`：可以进入页面、搜索、Sitemap 和首页精选。
- `archived`：当前不进入公开页面或发现渠道，稳定归档 URL 尚未实现。

当前 Share Registry 的实际 `ShareStatus` 只有
`draft | public | archived`；`review`
仍是后续内容模型目标，不是已生效的 Share 发布状态。

#### 发布门禁

所有公开内容必须满足：

1. 与 AI Speeds 使命存在明确关系。
2. 标题、摘要和入口真实有效。
3. 原创内容有创作者或作者。
4. 协作内容有主要贡献方与角色。
5. 策展内容有原作者、来源链接和策展说明。
6. 使用本地托管媒体时具有明确权利边界。
7. 不包含本地路径、Secret、私人 Notes 或未授权个人信息。
8. 外部资源不得通过页面样式造成 AI Speeds 原创的误解。

#### 编辑责任

短期内容仍通过代码和类型化 Registry 审核发布，不建设公开投稿后台。未来即使增加团队后台，也应保留：

- Draft 与 Review 流程。
- 可追溯的 Contributor ID。
- 内容来源和权利字段。
- 发布、更新和归档时间。
- 更正、下架和外链失效处理。

#### 展示规则

统一来源标签：

```text
原创      AI Speeds 原创 · 作者名称
共创      AI Speeds × 合作方 · 主要贡献者
精选      AI Speeds 精选 · 来源/原作者
```

Partner
Logo 只有在存在真实合作内容或明确合作关系时展示，不能作为空洞的信任装饰。资源收藏也不能只做链接堆积；每条内容必须包含 AI
Speeds 的选择理由或上下文说明。

## 7. 三层 Shell 架构

### 7.1 Site Shell

适用页面：

```text
/
/get-started
/shares
/shares/[slug]
/brand
```

组成：

```text
Optional Announcement Slot
SiteHeader
Page Content
SiteFooter
```

特征：

- 完整 Sticky Header。
- 全局导航、搜索和主要 CTA。
- 页面可以拥有自己的 Hero 或局部标题，但不再重复品牌返回按钮。
- Footer 提供品牌收束、主要栏目、Brand
  Kit 与 GitHub 入口；当前没有独立联系入口。

### 7.2 Tool Shell

适用页面：

```text
/playground
/recording-summary
/whiteboard
/wireframe
```

组成：

```text
ToolHeader
Tool Workspace
```

特征：

- 默认 Header 高度 48px。
- 包含品牌返回与工具名称；`ToolHeader` 组件支持可选 Action Slot，但共享
  `ToolShellHeader` 本轮未接入页面 Action，也未提供全站菜单入口。
- 不显示完整桌面一级导航，避免挤占工具空间。
- 工具工作区高度使用 `100dvh - tool header height`，不得被固定 Header 遮挡。
- Whiteboard 和 Wireframe 后续可以增加 Focus
  Mode，隐藏 ToolHeader，但不作为第一阶段前置条件。

### 7.3 Immersive Shell

第一阶段适用页面：

```text
/shares/[slug]/deck
```

特征：

- 不渲染 SiteHeader 或普通 ToolHeader。
- 页面自行提供返回、页码、演示模式和全屏控制。
- 保持 `h-dvh`、键盘翻页、触摸滑动、全屏和自动隐藏控制栏行为。

### 7.4 目标 Route Group

```text
src/app/
├── layout.tsx
│
├── (site)/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── get-started/page.tsx
│   ├── shares/page.tsx
│   ├── shares/[slug]/layout.tsx
│   ├── shares/[slug]/page.tsx
│   └── brand/page.tsx
│
├── (tools)/
│   ├── layout.tsx
│   ├── playground/page.tsx
│   ├── recording-summary/page.tsx
│   ├── whiteboard/page.tsx
│   └── wireframe/page.tsx
│
├── (immersive)/
│   └── shares/[slug]/deck/page.tsx
│
└── (legacy)/
    └── home/page.tsx
```

Route Group 不改变公开 URL。

注意：Deck 移出 Site Shell 后不再继承原
`shares/[slug]/layout.tsx`。必须在 Immersive 分支为 `[slug]`
增加对应的静态参数与 `dynamicParams` 约束，并继续复用同一 Share
Registry，不能复制内容数据。

### 7.5 实际落地结构

本轮最终实现为：

```text
src/app/
├── layout.tsx
├── (site)/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── get-started/page.tsx
│   ├── brand/
│   └── shares/
├── (tools)/
│   ├── layout.tsx
│   ├── playground/
│   ├── recording-summary/
│   ├── whiteboard/page.tsx
│   └── wireframe/page.tsx
├── (immersive)/
│   └── shares/[slug]/
├── (legacy)/
│   ├── layout.tsx
│   └── home/page.tsx
└── design/style-guide/page.tsx
```

补充边界：

- Root Layout 只保留全局 Metadata、字体与开发集成，不注入视觉 Header。
- `(site)` 在服务端构建轻量 Search DTO，并统一挂载 `SiteHeader` 与
  `SiteFooter`。
- `(tools)` 使用 48px 紧凑 `ToolShellHeader`，工作区以 Shell 剩余高度滚动。
- `(immersive)` 独立调用 `getPublicShares()` 生成静态参数，并保持
  `dynamicParams = false`。
- `(legacy)` 只承载兼容桥，不承载新的站点正文。
- `/design/style-guide` 按本阶段非目标保持原路由，不强行迁入新 Shell。

## 8. 导航数据模型

### 8.1 设计原则

当前 `src/config/features.ts` 是平面 Feature Registry。目标不是在
`SiteHeader.tsx` 中重新硬编码一份链接，而是：

1. Feature Registry 描述“站点有哪些真实能力”。
2. Navigation Registry 描述“这些能力如何分组显示”。
3. Contributor Registry 描述“谁参与了创作、维护、演讲或策展”。
4. Content Registry 描述“内容来自原创、协作还是策展，以及如何署名”。
5. Search Index 从公开 Feature、Public Shares 和已审核内容集合派生。
6. Sitemap 从公开 Route 类型 Feature 和公开内容实体派生。
7. 首页精选只引用已发布内容，不在组件中复制内容元数据。

### 8.2 建议类型

```typescript
export type ShellKind = 'site' | 'tool' | 'immersive';
export type FeatureTargetKind = 'route' | 'anchor' | 'external';
export type NavigationGroupId = 'products' | 'tools' | 'resources';

export type FeaturePage = {
  id: string;
  title: string;
  description: string;
  href: string;
  targetKind: FeatureTargetKind;
  shell: ShellKind;
  isPublic: boolean;
  searchable: boolean;
  keywords: readonly string[];
  activeMatch: 'exact' | 'prefix' | 'hash';
  sitemapPriority?: number;
  sitemapChangeFrequency?: NonNullable<
    MetadataRoute.Sitemap[number]['changeFrequency']
  >;
};

export type NavigationGroup = {
  id: NavigationGroupId;
  label: string;
  featureIds: readonly string[];
};
```

图标配置使用稳定的字符串 Key，而不是在配置文件中保存 React Node。

### 8.3 建议文件职责

```text
src/config/features.ts
  功能、URL、Shell、搜索和 Sitemap 元数据

src/config/site-navigation.ts
  一级栏目顺序、分组和外部入口

src/config/ui-texts.ts
  导航、搜索、Header、Footer、来源标签和无障碍文案

src/content/contributors/
  Person、Team、Organization 与贡献角色注册表

src/content/resources/
  经过审核的精选外部资源、来源、策展说明与权利模式

src/lib/navigation.ts
  Feature ID 解析、激活匹配和开发期完整性检查

src/lib/attribution.ts
  解析并校验当前 Public Share 的 Provenance 与统一署名摘要

src/lib/search.ts
  在服务端从公开 Feature 与 Share 生成搜索 DTO

src/lib/search-query.ts
  提供客户端安全的归一化、评分和排序逻辑
```

### 8.4 完整性检查

构建时至少检查：

- Feature ID 唯一。
- Route Href 唯一。
- Navigation Group 引用的 Feature ID 存在。
- `isPublic: false` 的功能不能进入公开导航和搜索。
- External Link 必须是 HTTPS。
- Sitemap 只接受 `targetKind: 'route'` 的公开页面。
- Anchor 必须指向已声明的首页 Section ID。
- Immersive 页面不进入普通 Header 主导航，除非其入口指向上层详情页。
- 所有 Share Provenance 引用的 Contributor ID 必须存在。
- 公开原创 Share 至少有一个 Creator 或 Author。
- 公开协作 Share 必须包含至少两个不同贡献主体和显式 Collaborator。
- 公开策展 Share 必须有 HTTPS 原始来源、原作者或 Creator，以及 Curator。
- `linked-only` Share 不能托管本地 Deck 或 Download。
- `isPublic: false` Feature 及非 `public`
  Share 不能进入公开导航、Search、Sitemap 和首页内容区；未来内容 Registry 的
  `review` 门禁仍需单独实现。

## 9. 组件架构

### 9.1 Site 组件

```text
src/components/site/
├── SiteHeader.tsx
├── DesktopNavigation.tsx
├── MobileNavigation.tsx
├── GlobalSearchDialog.tsx
├── SiteFooter.tsx
├── SkipLink.tsx
├── useCurrentHash.ts
└── index.ts

src/components/tools/
├── ToolShellHeader.tsx
├── ToolHeader.tsx
└── index.ts
```

实际职责边界：

- `(site)/layout.tsx` 是 Server Component，调用
  `siteSearchEntries`，只把可序列化的轻量 Search DTO 传给 Header。
- `SiteHeader.tsx` 是小型 Client Island，统一控制 Search 与 Mobile
  Menu，确保二者不会叠加为双 Modal。
- `DesktopNavigation.tsx` 负责 1024px 以上分组导航、点击打开和断点 Portal 清理。
- `MobileNavigation.tsx` 负责 1023px 以下右对齐 Modal Popover、Body
  Lock 和断点清理。
- `GlobalSearchDialog.tsx` 只导入客户端安全的
  `src/lib/search-query.ts`，负责搜索、快捷键、IME、方向键、Live
  Region 与焦点恢复。
- `SkipLink.tsx` 被 Site 与 Tool Shell 复用。
- `ToolShellHeader.tsx` 根据当前工具路由生成紧凑 Header；`ToolHeader.tsx`
  提供显示结构。
- Announcement Slot 仍是架构预留，本轮没有创建或挂载空组件。

### 9.2 首页组件

```text
src/components/home/
├── HomePage.tsx
├── MissionHero.tsx
├── ProductStories.tsx
├── ManifestoSection.tsx
├── ToolCollection.tsx
├── PublicWorkSection.tsx
├── GetStartedPreview.tsx
├── AboutPreview.tsx
├── HomeClosingCta.tsx
├── LegacyHomeHashBridge.tsx
└── index.ts
```

`HomePage.tsx` 以 Server
Component 组合八个原生 Section。现有产品故事和接入预览以服务端 HTML 为主，本轮没有为了预设架构创建空的
`interactive/` 目录，也没有创建无真实数据的 `CuratedResourcesSection` 或
`ContributorsAndPartnersSection`。兼容旧 Hash 的唯一首页客户端叶子是
`LegacyHomeHashBridge.tsx`。

原则：

- 首页主体保持 Server Component。
- 只给需要状态、Observer、Clipboard 或 Pointer 行为的叶子加 `'use client'`。
- 不将整页变成 Client Component。
- 不把 Header 的状态和首页内容状态放进同一个大组件。

## 10. Site Header 详细规格

### 10.1 容器和尺寸

```text
position: sticky
inset-block-start: 0
z-index: 40
border-bottom: 1px
backdrop blur: 12px
```

| 视口           | 主行高度 | 水平 Padding |
| -------------- | -------: | -----------: |
| `< 640px`      |     56px |         16px |
| `640px–1023px` |     64px |         24px |
| `>= 1024px`    |     64px |         32px |

内容容器：

```text
max-width: 72rem / 1152px
margin-inline: auto
```

Header 不根据滚动距离缩小、隐藏或增加复杂状态，以避免 Layout Shift 和额外 Scroll
Listener。

### 10.2 品牌区

- 图标 24×24px。
- 图标与 Wordmark 间距 8px。
- 当前 Header Wordmark 为 16px System Sans；Editorial
  Serif 约 20px 的早期目标未在本轮实现。
- 所有视口保留完整 `AI Speeds` 文本。
- 整体是一个指向 `/` 的 Link。
- Link 有明确的可见 Focus Ring。
- `BrandLogo` 的文字色改用语义 `text-text-primary`，移除组件内 `text-slate-*`
  硬编码。
- 第一阶段不显示版本号 Badge。

### 10.3 桌面导航

`>= 1024px` 显示：

- 一级项目最小高度 44px。
- 文字 14px / 20px。
- 普通字重 500。
- 当前分组使用语义浅色背景与主文本色，不渲染额外底部指示线。
- Dropdown 点击打开；Hover 只改变视觉，不负责打开。
- GitHub 外链与 Primary CTA 位于右侧工具区，不在导航内插入分割线。

当前三个分组菜单均使用 320px 宽度。

菜单项可包含一行短描述，但移动端应根据空间决定是否隐藏描述。

### 10.4 右侧工具区

桌面：

```text
Search Trigger | Primary CTA
```

- Search Trigger：44×44px；超宽桌面可扩展为文字与快捷键样式。
- CTA 最小高度 44px，文字“打开 Playground”。
- CTA 使用现有 Primary Semantic Token。
- 不添加积分、通知、头像或登录占位。

### 10.5 移动 Header

`< 1024px`：

```text
Brand                                 Search   Menu
```

- Search 与 Menu Trigger 均为 44×44px。
- Header 中不单独显示 CTA，CTA 放入菜单底部。
- 菜单为右对齐浮层，不使用全屏宽 Drawer。
- 宽度为 `min(24rem, calc(100vw - 2rem))`。
- 最大高度为 `min(70vh, 36rem)`。
- 使用内部纵向滚动和 `overscroll-contain`。
- 打开时锁定 Body Scroll。
- 当前页面使用浅品牌色背景和圆角。

### 10.6 交互原语

项目已经安装：

```text
@radix-ui/react-dropdown-menu
@radix-ui/react-dialog
@radix-ui/react-popover
```

因此不新增导航 UI 依赖：

- Desktop Group Menu 使用 Radix Dropdown Menu。
- Mobile Navigation 使用 Modal Radix Popover，采用右对齐浮层并锁定 Body Scroll。
- Global Search 使用 Radix Dialog。
- 动画使用已有 CSS / Tailwind Transition，不为 Header 引入 Framer Motion。

### 10.7 层级规范

```text
Page content       z-auto
Sticky header      z-40
Dropdown/popover   z-50
Dialog overlay     z-[60]
Dialog content     z-[61]
Toast              z-[70]
```

不使用任意增长的 `z-[1000]`、`z-[1200]`，除非现有第三方画布明确需要独立 Layer
Contract。

### 10.8 实际 Header 结果

最终实现与浏览器测量结果：

- Sticky Header 使用 `z-40`、暖色半透明表面、12px Blur 与 1px Bottom Border。
- `< 640px` 内容高度为 56px，含边框实测外高 57px。
- `>= 640px` 内容高度为 64px，含边框实测外高 65px。
- 内容容器为 72rem / 1152px。
- 1024px 显示桌面分组导航；1023px 及以下只保留 Brand、Search 与 Menu。
- Search Trigger 使用 44×44px 可点击区域，满足移动 Target Size；GitHub 与 Header
  CTA 只在 `lg` 以上显示，CTA 在移动菜单内仍可到达。
- Desktop Dropdown、Mobile Popover 和 Search
  Dialog 均为受控状态；跨断点时主动关闭并清理 Radix Portal 与 Body
  Lock，同时把焦点转移到始终可见的品牌首页链接。

## 11. 全局搜索方案

### 11.1 第一版范围

第一版使用静态客户端索引，不增加搜索 API 或外部搜索服务。

数据来源：

1. 公开 Feature Registry。
2. `getPublicShares()` 返回的 Public Shares。
3. 首页明确声明的产品 Section。
4. 后续已经审核并公开的原创、协作和精选内容注册表。

草稿 Share、内部 Route、待审核资源和未公开 Contributor 不得进入索引。第一版没有精选资源时，不创建空结果分组。

### 11.2 数据结构

```typescript
export type SearchEntry = {
  id: string;
  title: string;
  description: string;
  href: string;
  group: SearchGroupId;
  origin: ContentOrigin;
  attributionLabel: string;
  keywords: readonly string[];
  targetKind: FeatureTargetKind;
};
```

中文分组名称由 `src/config/ui-texts.ts` 映射，不进入 DTO 的 `group` ID。

搜索结果必须显示足以辨别来源的简短署名。例如：

```text
AI Speeds 原创
AI Speeds × 合作方
AI Speeds 精选 · 原作者名称
```

Public
Share 的来源标签必须由 Attribution 与 Provenance 数据派生；Feature 搜索项当前使用固定的
`AI Speeds` 署名。来源标签不是装饰性 Tag。

### 11.3 匹配规则

输入归一化：

1. Unicode NFKC。
2. 转小写。
3. Trim。
4. 连续空白折叠。

排序权重：

```text
标题前缀 > 标题包含 > Keywords 包含 > 描述包含
```

第一版不引入拼音分词、模糊索引或远端向量搜索。内容规模增长后再替换
`src/lib/search.ts` 的实现，Header API 不变。

### 11.4 交互要求

- `Meta+K` 和 `Control+K` 打开。
- Trigger 有明确 Accessible Name。
- 打开后自动聚焦输入框。
- Escape 关闭。
- 关闭后焦点返回实际打开者；如果打开者已移除或不可见，则回退到 Header Search
  Trigger。
- 上下方向键移动选中项。
- Enter 导航。
- 无结果时显示明确空态。
- 结果按 Group 展示。
- 内部链接使用 Next `Link`。
- 外链显示外链图标并使用 `noopener noreferrer`。

尺寸：

| 视口 | Dialog                                   |
| ---- | ---------------------------------------- |
| 桌面 | 最大宽 672px，顶部约 12dvh，最大高 76dvh |
| 移动 | 左右 16px，顶部约 8dvh，最大高 84dvh     |

### 11.5 实际 Search 边界与体积结果

搜索实现拆为两个明确边界：

```text
src/lib/search.ts
  服务端读取 Feature 与 Public Share Registry，只生成摘要 DTO

src/lib/search-query.ts
  客户端安全的 DTO 类型、NFKC 归一化、排序和纯查询逻辑
```

最终排序保持原有可加权行为：标题前缀 `+400`、标题包含 `+300`、Keyword 包含
`+200`、描述包含 `+100`，同分按 `zh-CN`
标题顺序稳定排序。`GlobalSearchDialog.tsx` 不再导入 Share
Registry 或 Transcript。

最终构建证据：

```text
旧 Site layout client chunk    54,307 bytes
新 Site layout client chunk    17,287 bytes
减少                         37,020 bytes / 68.168%
```

用于边界验证的唯一 Transcript 句子在 `.next/static/chunks/` 与
`.open-next/assets/_next/static/chunks/`
中均不存在。最终 Preview 中 Search 共展示 11 个公开条目；`Control+K`、自动聚焦、连续方向键、来源署名、Live
Region、Escape 关闭与焦点恢复的 8 项断言全部通过。

## 12. 原生首页信息结构

### 12.1 页面顺序

```text
SiteHeader
├── MissionHero
├── ProductStories
│   ├── AI API Gateway
│   └── cc4pm
├── ManifestoSection
├── ToolCollection
├── PublicWorkSection
├── CuratedResourcesSection（有真实内容时才渲染）
├── GetStartedPreview
├── ContributorsAndPartnersSection（有真实内容时才渲染）
├── AboutPreview
├── HomeClosingCta
└── SiteFooter
```

### 12.2 Mission Hero

目标：先解释 AI
Speeds 的使命和开放创作属性，而不是直接把整个站点定义成 cc4pm 或某一个人的个人主页。

核心信息必须表达：

> AI Speeds 致力于帮助人们拥抱 AI 时代带来的巨大生产力和范式跃进。

内容约束：

- 使命优先，个人履历或单一产品介绍不占据 H1 的核心位置。
- 可以说明“当前主要由创始贡献者建设”，但不能暗示未来内容只能来自一个人。
- 使用当前已确认的品牌主张，避免创造无法验证的用户量或增长数据。
- 一个主 CTA：打开 Playground。
- 一个次 CTA：查看接入指南或 GitHub。
- Hero 后第一屏应能看到下一 Section 的入口线索。
- 不使用自动播放视频作为 LCP 主体。

### 12.3 Product Stories

采用 Lovstudio 的“大型产品故事”原则，不使用十几个等权小卡片。

第一版两项：

1. AI API Gateway。
2. cc4pm。

每项包含：

- Eyebrow。
- 产品名。
- 一句价值主张。
- 2–3 条真实能力。
- 产品预览或界面截图。
- 主要入口。
- 文档或方法入口。

### 12.4 Manifesto

- 使用珊瑚色大面积背景。
- 承接 “Make AI Speeds Us”。
- 只表达一个清晰判断，不堆砌功能。
- 使用 Editorial Serif Typography。
- 装饰图形必须 `aria-hidden`。

### 12.5 Tool Collection

展示真实工具：

- Playground。
- Whiteboard。
- Recording Summary。
- AI Wireframe。

每项包含：

- 名称。
- 一句用途。
- 当前可用状态。
- 真实 Route。

不显示尚未实现的 “Coming Soon” 假入口。

### 12.6 Public Work

直接消费 Public Shares Registry：

- 第一阶段展示最新 3 个公开 Share；不足 3 个则按实际数量显示。
- 不将 Draft Share 渲染到客户端。
- 展示活动、主题、真实作者或贡献方和详情入口。
- 联合分享显示所有主要合作方，不能只显示 AI Speeds。
- “查看全部”进入 `/shares`。

### 12.7 Curated Resources

这是长期能力，只有在存在经过审核的真实条目时才渲染，不作为第一版空栏目占位。

每条精选资源至少展示：

- 原始标题。
- 原作者或发布组织。
- 原始 HTTPS 链接。
- 资源类型。
- AI Speeds 为什么推荐它的简短编辑说明。
- 策展者。
- 来源标签“AI Speeds 精选”，不能使用“AI Speeds 原创”。

默认只链接到来源，不在站内复制完整第三方正文。需要本地托管附件、译文或长摘要时，必须在内容数据中记录相应 License 或授权依据。

### 12.8 Contributors and Partners

这是条件渲染能力：

- 短期可以只在具体作品上显示创始贡献者署名，不需要单独做“团队墙”。
- 当 Team、Partner 或 Invited Contributor 有实际公开贡献后，再展示贡献者集合。
- 展示依据是公开内容关联，不按商业关系手工维护一组无作品 Logo。
- Contributor 页面应聚合真实参与的产品、作品、分享和策展记录。

### 12.9 Get Started Preview

首页只提供简洁流程预览：

```text
选择 Provider → 配置环境变量 → 启动 Claude Code
```

完整交互式指南迁移到 `/get-started`，继续复用现有 `GetStartedSection`。

### 12.10 Footer

第一版 Footer 包含：

- AI Speeds 品牌主张。
- 产品、工具、资源栏目。
- GitHub。
- Brand Kit。
- Copyright。

不添加没有真实目的地的社交图标。

## 13. cc4pm iframe 内容迁移

### 13.1 迁移原则

`public/static/cc4pm-homepage.html`
是生成物，只用于迁移时的内容和交互对照。迁移源应同时参考：

```text
node_modules/@cc4pm/homepage/index.html
public/static/cc4pm-homepage.html
scripts/prepare-cc4pm-homepage.mjs
```

不能直接复制当前约 2,109 行的生成文件进入一个 TSX 组件。

### 13.2 内容映射

| 静态首页内容   | 目标位置                                      |
| -------------- | --------------------------------------------- |
| 原 cc4pm Hero  | 首页 cc4pm Product Story，或后续 cc4pm 独立页 |
| Social Proof   | 只保留可验证内容，放入产品故事                |
| Video Showcase | cc4pm 产品媒体区                              |
| Personas       | cc4pm 产品说明或 Get Started 页面             |
| Architecture   | `ArchitectureExplorer` Client Island          |
| Curriculum     | `/get-started` 的 `CurriculumAccordion`       |
| Workflow       | 首页 Get Started Preview 或完整指南           |
| Install        | `/get-started`，复用真实命令数据              |
| Community      | About Preview 或 Footer 上方社区入口          |
| FAQ            | `/get-started`                                |
| CTA            | Home Closing CTA                              |
| 原 Footer      | 替换为 SiteFooter                             |

### 13.3 交互迁移

| 原生 JS 行为          | React 目标                                        |
| --------------------- | ------------------------------------------------- |
| Workflow 动态生成     | 类型化数据 `.map()` 服务端渲染                    |
| Architecture 动态生成 | 独立 Client Island                                |
| Curriculum Accordion  | 独立、键盘可用 Accordion                          |
| Reveal Observer       | 可选叶子 Client Island；Reduced Motion 下直接显示 |
| Counter Animation     | 仅用于真实数字；无 JS 时显示最终值                |
| FAQ 单开              | 独立 Accordion 或语义化 `<details>`               |
| Clipboard             | 复用 `CopyCommandButton`，含失败反馈              |
| Terminal Typewriter   | Client Island；Reduced Motion 下直接显示完整命令  |
| Navbar Scroll Script  | 删除，不迁移                                      |
| iframe Mobile Menu    | 删除，由全局 SiteHeader 接管                      |

### 13.4 构建链清理

原生首页完成并通过一个完整发布周期后：

1. 从 `dev`、`build`、`cf:build` 中移除 `prepare:homepage` 前置命令。
2. 删除 `prepare:homepage` Script。
3. 删除 `scripts/prepare-cc4pm-homepage.mjs`。
4. 如果没有其他使用者，移除 `@cc4pm/homepage` 依赖。
5. 删除生成文件 `public/static/cc4pm-homepage.html`。
6. 将 `/api/static/homepage` 改为重定向到 `/`，或在确认无兼容需求后删除。
7. 如已有外部链接指向 `/static/cc4pm-homepage.html`，为该路径提供到 `/`
   的永久重定向。

不得先删除生成链，再开始内容迁移；回滚期必须保留旧实现。

## 14. Legacy URL 与状态迁移

### 14.1 目标

旧入口继续可用：

```text
/#get-started
/#ai-wireframe
/home
/home#get-started
/home#ai-wireframe
```

### 14.2 兼容策略

分两个发布阶段：

#### 兼容阶段

- `/` 与 `/home` 均通过 `LegacyHomeHashBridge` 识别旧 Hash。
- 新建 `/get-started` 和 `/wireframe`。
- 菜单和站内新链接全部改用真实 Route。
- `/#get-started`、`/#ai-wireframe`、`/home#get-started` 与 `/home#ai-wireframe`
  使用 `router.replace()` 进入真实 Route。
- `/home`、`/home#api-gateway` 与 `/home#cc4pm` 使用 `window.location.replace()`
  返回根首页或对应首页 Anchor。
- Bridge 挂载时检查一次 Location，并监听后续 `hashchange`；实现本身不使用轮询或
  `push()`。

映射：

```text
/#get-started       → /get-started
/#ai-wireframe      → /wireframe
/home               → /
/home#get-started   → /get-started
/home#ai-wireframe  → /wireframe
/home#api-gateway   → /#api-gateway
/home#cc4pm         → /#cc4pm
```

Hash 不会发送到服务器，因此 Hash 兼容必须由极小的 Client
Bridge 完成。应接受一次短暂客户端跳转，不应为了旧 Hash 让整个新首页长期依赖 Client
Rendering。

#### 收敛阶段

- `HomePageWithNav` 不再负责页面主体，也不再被活动 Route 引用。
- 根页面直接渲染 `HomePage`。
- 旧 Hash 兼容逻辑移动到单独的 `LegacyHomeHashBridge`。
- 旧组件中的浮动菜单、拖拽状态和相关 Local
  Storage 逻辑仍保留在未引用文件中；源码删除延期到获得明确授权后执行。

### 14.3 Local Storage

旧键：

```text
aispeeds-homepage-menu-position
```

新 Header 不读取该键。第一阶段无需主动删除用户存储值；停止使用即可，避免不必要的客户端迁移代码。

## 15. Design Token 与视觉系统

### 15.1 视觉方向

继续使用 AI Speeds 自身品牌：

- Coral 作为主要品牌色。
- Cyan 作为辅助科技色。
- 暖白和米色作为编辑型页面背景。
- Slate 继续用于工具和正文层级。
- 玻璃表面只用于 Header、Popover 和紧凑控制，不铺满全部内容卡片。

不复制 Lovstudio 的品牌 Logo 或精确颜色值。

### 15.2 运行时权威源

```text
src/app/globals.css
```

Tailwind 只映射 CSS Variables：

```text
tailwind.config.ts
```

`src/styles/designTokens.ts` 继续作为 Style Guide
Catalog，但新增 Token 时必须同步，或在后续单独改为从共享结构生成，避免继续漂移。

### 15.3 建议新增 Token

```css
--font-family-editorial:
  'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Georgia, serif;

--color-surface-header: rgba(255, 252, 248, 0.84);
--size-site-header: 4rem;
--size-site-header-mobile: 3.5rem;
--size-tool-header: 3rem;
--container-site: 72rem;
```

对应 Tailwind 建议：

```text
font-editorial
bg-header-surface
max-w-site
h-site-header
h-site-header-mobile
h-tool-header
```

### 15.4 字体职责

| 字体角色        | 用途                                       |
| --------------- | ------------------------------------------ |
| System Sans     | 导航、Header Wordmark、正文、表单、工具 UI |
| Editorial Serif | 首页 H1/H2、Manifesto                      |
| System Mono     | Eyebrow、代码、快捷键和技术标签            |

第一阶段不新增外部 Google
Fonts 请求。优先使用系统字体栈，减少阻塞资源和跨域依赖。

### 15.5 禁止项

新组件不得新增：

- `text-slate-*` 代替已有语义文本 Token。
- 重复的 Coral Hex。
- 页面内部 Inline `fontFamily`。
- 任意 `z-index` 竞争。
- 与 Runtime CSS 无关的第二套 CSS Variables。

已有工具页面的硬编码样式在各自迁移阶段处理，不要求首页阶段一次清空。当前
`ProductStories` 与 `ToolCollection` 仍有直接 Palette Class 和 Raw RGB
Gradient，属于已记录但尚未完成的 Token 收敛债务。

## 16. Server / Client Component 边界

### 16.1 Server Components

优先保持服务端渲染：

- Site Layout。
- 首页主体。
- Product Stories。
- Tool Collection 数据。
- Public Shares 摘要。
- Footer。
- Get Started 页面外层。
- Share Catalog 和 Detail。

### 16.2 Client Islands

仅以下内容使用客户端组件：

- Header Dropdown 与 Mobile Menu。
- Global Search Dialog。
- 当前路径和 Hash 激活状态。
- Architecture Explorer。
- Accordion。
- Copy Button。
- Terminal Demo。
- Reveal Observer。
- Legacy Hash Bridge。

### 16.3 约束

- 不在 Site Layout 顶层放置大型 Context Provider。
- 不把 Public Shares 全量 Transcript 传入 Header 搜索索引。
- 不把首页所有内容序列化给单个 Client Component。
- Header Client Props 只包含必要的导航和搜索摘要。
- 不为简单 Hover 或 Fade 引入 Framer Motion。

## 17. SEO 与页面发现

### 17.1 首页

移除 iframe 后，首页初始 HTML 必须包含：

- 唯一 H1。
- 产品标题。
- 工具链接。
- 公开分享入口。
- Get Started 入口。
- Footer 链接。

### 17.2 新路由

需要为以下页面增加独立 Metadata：

```text
/get-started
/wireframe
```

规则：

- `/get-started`：`index, follow`，进入 Sitemap。
- `/wireframe`：如页面对公开用户可完整使用，则
  `index, follow`；如只是实验性工具，则先 `noindex, follow`，由产品状态决定。
- `/shares/[slug]/deck`：继续 `noindex, follow`，Canonical 指向详情页。

### 17.3 Sitemap

`src/app/sitemap.ts` 从公开 Route Feature 和 `getPublicShares()`
生成；Anchor 与 External Link 不进入 Sitemap。

### 17.4 结构化语义

- Header 使用 `<header>`。
- 主导航使用带 Label 的 `<nav>`。
- 每页只有一个 `<main>`。
- 首页内容使用 `<section aria-labelledby>`。
- Footer 使用 `<footer>`。
- 页面标题按 H1 → H2 → H3 顺序。
- 不依赖 iframe `title` 代替真实页面语义。

## 18. 无障碍要求

### 18.1 Header

- 提供 Skip Link，目标为 `#main-content`。
- Logo Link 有明确名称。
- 当前 Route 使用 `aria-current='page'`。
- 当前首页 Anchor 使用 `aria-current='location'`。
- Menu Trigger 提供 `aria-haspopup` 和展开状态。
- 所有图标按钮提供可访问名称。
- Focus Ring 不得被 `overflow-hidden` 裁剪。

### 18.2 Dropdown 和移动菜单

- Enter / Space 打开。
- 方向键移动菜单项。
- Escape 关闭。
- 普通关闭后焦点返回 Trigger；跨断点自动关闭时转移到始终可见的品牌首页链接。
- Mobile Popover Dialog 有明确 Accessible Name。
- 点击内部 Route 后关闭。
- 移动菜单打开时页面主体不可继续滚动。
- 菜单内部可以滚动，且不把滚动链传给 Body。

### 18.3 Search

- Dialog 有标题和说明。
- 输入框有 Label。
- 结果数量通过适当 Live Region 公告。
- 键盘选择项和视觉高亮一致。
- 空结果状态可被屏幕阅读器读取。

### 18.4 Motion

`prefers-reduced-motion: reduce` 时：

- 关闭 Reveal 位移动画。
- Terminal 直接显示最终文本。
- Dropdown 和 Dialog 只保留必要的状态切换。
- 不自动平滑滚动。

### 18.5 Target Size

移动端主要控件至少 44×44 CSS pixels；Header Search 与 Menu
Trigger 当前均使用 44×44px 可点击区域。

## 19. 性能要求

### 19.1 结构要求

- 首页不再加载完整 iframe Document。
- 不重复加载 iframe 字体、CSS 和 JS。
- Header 不注册 Scroll Listener。
- 首页大部分内容服务端渲染。
- 客户端交互按叶子组件拆分。
- 图片提供明确宽高，避免 CLS。
- 首屏主图按真实 LCP 需要设置优先级，其他图片 Lazy Load。

### 19.2 依赖要求

- 使用已经安装的 Radix 和 Lucide。
- 不新增第二套 Headless UI。
- Header 动画不引入 Framer Motion。
- 第一版搜索不新增 Fuse.js、Algolia 或远端 SDK。

### 19.3 运行时要求

- 移除因 Hash Effect 导致的首页首帧内容替换。
- Header SSR 结构和 Hydration 后结构保持一致。
- Search Dialog 未打开时不渲染大量结果 DOM。
- Public Share
  DTO 包含标题、摘要、URL、Tag、作者、活动、地点与 Provenance 摘要；查询匹配标题、Keywords 和摘要，不匹配 URL，也不包含 Transcript。

## 20. 文件级改动方案

### 20.1 最初建议的新增文件（最终实现按职责合并）

下列是实施前的候选拆分，不是当前文件清单；实际落地以 20.4 为准。

```text
src/app/(site)/layout.tsx
src/app/(site)/page.tsx
src/app/(site)/get-started/page.tsx
src/app/(tools)/layout.tsx
src/app/(tools)/wireframe/page.tsx
src/components/site/SiteHeader.tsx
src/components/site/SiteHeaderClient.tsx
src/components/site/SiteBrandLink.tsx
src/components/site/DesktopNavigation.tsx
src/components/site/MobileNavigation.tsx
src/components/site/NavigationGroupMenu.tsx
src/components/site/GlobalSearchDialog.tsx
src/components/site/SiteFooter.tsx
src/components/tools/ToolHeader.tsx
src/components/home/LegacyHomeHashBridge.tsx
src/components/home/HomePage.tsx
src/components/home/MissionHero.tsx
src/components/home/ProductStories.tsx
src/components/home/ManifestoSection.tsx
src/components/home/ToolCollection.tsx
src/components/home/PublicWorkSection.tsx
src/components/home/CuratedResourcesSection.tsx
src/components/home/ContributorsAndPartnersSection.tsx
src/components/home/GetStartedPreview.tsx
src/components/home/AboutPreview.tsx
src/components/home/HomeClosingCta.tsx
src/config/site-navigation.ts
src/content/contributors/types.ts
src/content/contributors/registry.ts
src/content/contributors/index.ts
src/content/resources/types.ts
src/content/resources/registry.ts
src/content/resources/index.ts
src/lib/navigation.ts
src/lib/attribution.ts
src/lib/search.ts
```

实际没有单独创建 `SiteHeaderClient.tsx`、`SiteBrandLink.tsx` 或
`NavigationGroupMenu.tsx`：`SiteHeader.tsx` 自身作为 Client
Island 并内联品牌链接，分组菜单由 `DesktopNavigation.tsx`
实现。具体组件可以按职责合并，但不得重新形成一个包含全部 Header 与首页状态的超大 Client
Component。

Contributor
Registry 从第一版建立，以避免单一作者硬编码。`CuratedResourcesSection` 与
`src/content/resources/`
只有在首批真实精选资源完成来源与权利审核后才创建；`ContributorsAndPartnersSection`
只有在 Team、Partner 或 Invited
Contributor 已有真实公开贡献时才创建。没有内容时不提交空 Registry、空 Section 或空页面。

### 20.2 修改文件

| 文件                                   | 目标修改                                                  |
| -------------------------------------- | --------------------------------------------------------- |
| `src/config/features.ts`               | 增加 Shell、描述、搜索、激活匹配等字段；保留 Sitemap 数据 |
| `src/config/ui-texts.ts`               | 增加分组导航、搜索、Header、Footer 和无障碍文案           |
| `src/app/globals.css`                  | 增加 Header、Editorial Font 和 Shell 尺寸 Token           |
| `tailwind.config.ts`                   | 映射新增语义 Token                                        |
| `src/styles/designTokens.ts`           | 同步 Style Guide 展示数据，不作为运行时源                 |
| `src/components/brand/BrandLogo.tsx`   | 使用语义文字色，并支持 Header Wordmark 样式               |
| `src/app/sitemap.ts`                   | 纳入真实新增路由，排除 Anchor、External 和 noindex 页面   |
| `src/app/robots.ts`                    | 如无新策略则只验证，不做无意义改动                        |
| `src/components/HomePageWithNav.tsx`   | 已停止活动 Route 引用；保留为回滚文件，稳定期后再决定删除 |
| `src/app/api/static/homepage/route.ts` | iframe 下线后重定向到 `/`                                 |
| `package.json`                         | 原生首页稳定后移除 `prepare:homepage` 构建前置和无用依赖  |

### 20.3 已完成的 Route Move

| 迁移前路径                  | 当前落地路径                        | URL                  |
| --------------------------- | ----------------------------------- | -------------------- |
| `src/app/page.tsx`          | `src/app/(site)/page.tsx`           | `/`                  |
| `src/app/(main)/brand`      | `src/app/(site)/brand`              | `/brand`             |
| `src/app/(main)/shares`     | 分拆到 `(site)` 和 `(immersive)`    | 保持原 URL           |
| `src/app/(main)/playground` | `src/app/(tools)/playground`        | `/playground`        |
| `src/app/(main)/whiteboard` | `src/app/(tools)/whiteboard`        | `/whiteboard`        |
| `src/app/recording-summary` | `src/app/(tools)/recording-summary` | `/recording-summary` |
| `src/app/(main)/home`       | `src/app/(legacy)/home`             | `/home`              |

Route Move 已按小范围文件移动完成；Shares 内容页与 Deck 分别落在 `(site)` 和
`(immersive)`，原 `(main)` 路由目录已清空。后续修改应直接作用于当前 Route
Group 的落地文件。

### 20.4 实际新增的共享基础

最终实现没有机械创建 20.1 中的所有建议文件，而是按真实职责收敛为：

```text
src/config/site-links.ts
src/config/site-navigation.ts
src/content/contributors/types.ts
src/content/contributors/registry.ts
src/content/contributors/index.ts
src/content/shares/provenance.ts
src/lib/navigation.ts
src/lib/attribution.ts
src/lib/search.ts
src/lib/search-query.ts
src/lib/site-content-validation.ts
src/components/site/
src/components/tools/
src/components/home/
```

关键实现差异：

- `src/lib/site-content-validation.ts`
  汇总 Feature、Navigation、Contributor、Share Provenance 与 Search
  Index 验证，并在 Sitemap 构建路径中执行 Fail Fast 断言。
- Public Share 原有 Schema 未改型；`src/lib/attribution.ts` 和 Provenance
  Registry 提供兼容层。
- 没有真实精选资源，因此没有创建空的
  `src/content/resources/`、空导航组或空首页 Section。
- `HomePageWithNav.tsx` 不再被 `src/`
  引用，但文件暂留于未提交工作区，避免未经确认删除既有本地内容。
- `open-next.config.ts` 继续使用 `staticAssetsIncrementalCache` 与
  `enableCacheInterception: true`，没有以 Shell 重构破坏 Cloudflare 增量缓存。

## 21. 分阶段实施计划

### Phase 0：基线与保护

目标：建立可回滚基线，不改变产品行为。

1. 记录当前 Git 状态和现有未提交文件。
2. 确认 Shares、SEO、OpenNext 等正在进行的改动边界。
3. 记录当前桌面、平板、移动页面截图。
4. 记录现有 URL、Metadata、Sitemap 和主要交互。
5. 记录 iframe 页面各 Section 内容与动态行为。
6. 不修改 Root Layout 中受保护的开发集成区块。

完成条件：拥有可用于视觉、路由和行为对比的基线。

### Phase 1：导航模型与 Header 原语

目标：实现可独立验收的 SiteHeader，不立即移动所有路由。

1. 扩展 Feature Registry。
2. 新增 Site Navigation Registry。
3. 建立 Contributor Registry，并录入当前真实贡献主体。
4. 建立 Attribution / Provenance 基础类型和 Slug-keyed Public Share Provenance
   Registry。
5. 新增导航与内容来源完整性检查。
6. 新增 SiteHeader、Desktop Navigation、Mobile Navigation。
7. 新增匿名优先的右侧 Search 与 Playground CTA。
8. 新增 Global Search 静态索引，并携带来源与署名摘要。
9. 新增 Header 和字体 Token。
10. 调整 BrandLogo 语义颜色。
11. 在隔离预览页面或首页临时集成点验证 Header。

完成条件：Desktop、Tablet、Mobile、键盘和搜索验收通过，没有虚假账户 UI。

### Phase 2：原生编辑型首页

目标：用原生 React 替换首页 iframe。

1. 创建 `HomePage`。
2. 实现以 AI Speeds 使命为核心的 Mission Hero。
3. 实现 API Gateway 与 cc4pm Product Stories。
4. 实现 Manifesto，并明确“帮助人们拥抱 AI 生产力和范式跃进”的品牌判断。
5. 实现 Tool Collection。
6. 接入 Public Shares Registry，并展示真实贡献者和合作方。
7. 仅在存在审核通过的数据时实现 Curated Resources 与 Contributors / Partners
   Section。
8. 实现 Get Started Preview 和 About Preview。
9. 迁移本轮首页实际保留内容所需的交互；cc4pm
   Curriculum、Architecture、交互式安装流程与 FAQ 延后。
10. 接入 SiteHeader 和 SiteFooter。
11. 移除首页可拖拽菜单的主导航职责。

完成条件：根首页初始 HTML 包含主要内容和链接，不再渲染 iframe。

### Phase 3：真实路由与 Legacy 兼容

目标：停止以 Hash 切换整页应用。

1. 新建 `/get-started` 并复用现有 `GetStartedSection`。
2. 新建 `/wireframe` 并复用现有 `AiWireframeSection`。
3. 新导航全部切换为真实 Route。
4. 添加 `LegacyHomeHashBridge`。
5. 停止从根首页引用 `HomePageWithNav`，由 `LegacyHomeHashBridge`
   独立承担兼容逻辑。
6. 验证浏览器前进后退、直接访问和旧书签。
7. 旧拖拽菜单源码暂留于未引用文件，待后续明确授权后删除。

完成条件：新路由可直接刷新、分享并拥有独立 Metadata；旧 Hash 仍可到达目标。

### Phase 4：Route Group 与 Shell 统一

目标：让共享 Shell 跨内容页和工具页生效。

1. 建立 `(site)`、`(tools)`、`(immersive)`、`(legacy)`。
2. 将 Brand 和 Shares 内容页迁入 Site Shell。
3. 将 Playground、Recording Summary、Whiteboard、Wireframe 迁入 Tool Shell。
4. 将 Deck Route 迁入 Immersive Shell。
5. 为新的 Immersive `[slug]` 分支恢复静态参数和公开状态约束。
6. 移除页面内重复品牌返回 Header。
7. 修复 `h-screen` / `h-dvh` 工具内容的 Header 高度扣减。
8. `(main)` 为空后删除其 Layout 和目录。

完成条件：所有 Route 保持原 URL，不出现双 Header、遮挡、404 或合法 Share
Deck 缺失。

### Phase 5：生成链清理

目标：删除已经没有运行时用途的 iframe 生成系统。

1. 移除 `prepare:homepage` 前置。
2. 移除准备脚本。
3. 移除无用 `@cc4pm/homepage` 依赖。
4. 删除生成 HTML。
5. 处理 `/api/static/homepage` 和静态 URL 兼容重定向。
6. 确认开发、Next Build 和 OpenNext Build 不再生成该文件。

完成条件：完整构建和生产预览不依赖 iframe 资产，旧入口得到明确响应。

### Phase 6：视觉收敛与质量门禁

目标：统一新 Shell 与已迁移页面，不扩大到工具内部重写。

1. 将新组件中的颜色和字体收敛到语义 Token。
2. 检查 Brand、Shares 和 Get Started 与 Site Shell 的视觉连续性。
3. 检查 ToolHeader 与工具内容的空间关系。
4. 执行 Lighthouse、浏览器、键盘、响应式和生产预览验收。
5. 修复所有 Console Error、Hydration Warning 和无障碍阻塞项。

完成条件：满足本文最终验收清单。

### Phase 7：多贡献者与精选资源演进

目标：在真实内容增长后扩展 AI Speeds，而不是提前建设空平台。

触发条件：

- 出现第一项 Team 或 Partner 共创内容；或
- 出现第一批完成来源、权利和编辑说明审核的精选资源。

实施内容：

1. 将对应内容接入 Contributor 和 Provenance 模型。
2. 为 Share、作品和资源卡片增加统一来源标签。
3. 根据真实内容量决定是否增加 `/resources`、`/collections` 或 Contributor 页面。
4. 将公开内容加入 Search、Sitemap、首页精选和相关推荐。
5. 增加外链可用性检查和 Archived 状态处理。
6. 仍以代码审核发布为默认，不因多贡献者自动引入账号或投稿后台。

完成条件：访问者能清楚理解内容由谁创作、与谁合作、为何被 AI
Speeds 收录，以及内容如何服务于站点使命。

### 21.8 当前阶段状态

| Phase   | 本地状态             | 说明                                                                                    |
| ------- | -------------------- | --------------------------------------------------------------------------------------- |
| Phase 0 | 完成                 | 已保留 Dirty Working Tree、Share 与 OpenNext 边界，没有 Reset、Stash 或覆盖本地分歧文件 |
| Phase 1 | 完成                 | Registry、响应式 Header、匿名工具区和 Global Search 已实现并验证                        |
| Phase 2 | 核心完成，细节延后   | `/` 已切换到原生首页且无 iframe；cc4pm Curriculum、Architecture、安装交互与 FAQ 未迁移  |
| Phase 3 | 运行时完成，清理延后 | 七条 Legacy 映射已验证；`HomePageWithNav` 已停止引用但源码暂留                          |
| Phase 4 | 完成                 | Site、Tool、Immersive、Legacy Route Group 已落地，URL 保持不变                          |
| Phase 5 | 未开始               | 必须等待生产发布、稳定观察期和后续明确授权；回滚生成链继续保留                          |
| Phase 6 | 部分完成             | 门禁、Preview、交互、Lighthouse 通过；LCP、Token 收敛、Catalog 与标题层级仍有未完成项   |
| Phase 7 | 条件未触发           | 尚无真实 Team / Partner 共创条目或审核通过的精选资源，不创建空栏目                      |

本轮没有执行 Commit、Push、PR、Deploy、R2 发布或生产变更。

## 22. 验证方案

项目没有测试框架。实施后的命令验证必须通过项目规定的 test-runner
agent 执行，使用真实服务、无 Mock 并保留详细输出。

### 22.1 静态门禁

```bash
pnpm run lint:check
pnpm run typecheck
pnpm run build
pnpm run shares:validate
pnpm run cf:build
```

如果迁移尚未进入 Shares Route Move 阶段，仍需运行
`shares:validate`，防止共享配置改动破坏 Public Shares。

### 22.2 Route 验证

至少验证：

```text
/
/get-started
/wireframe
/playground
/whiteboard
/recording-summary
/shares
/shares/[valid-slug]
/shares/[valid-slug]/deck
/brand
/home
/invalid-route
/shares/invalid-slug
```

检查：

- 状态码。
- Redirect。
- RSC 请求。
- Canonical。
- Robots。
- Sitemap。
- Header 类型。
- 页面是否出现双 Header。

### 22.3 浏览器矩阵

| Viewport | 目的                    |
| -------- | ----------------------- |
| 1440×900 | 常规桌面                |
| 1272×841 | 对齐参考截图的 CSS 视口 |
| 1024×768 | 桌面导航断点上界        |
| 1023×768 | 移动导航断点下界        |
| 768×1024 | 平板竖屏                |
| 640×900  | Header 高度断点上界     |
| 639×900  | Header 高度断点下界     |
| 390×844  | 移动竖屏                |
| 844×390  | 移动横屏与菜单溢出      |
| 320×568  | 极窄屏基础可用性        |

### 22.4 Header 验收

- Sticky 行为稳定。
- 页面滚动时不产生尺寸跳变。
- Desktop Dropdown 点击打开。
- Hover 不意外打开菜单。
- Escape 关闭。
- Outside Click 关闭。
- 普通关闭返回 Trigger；跨断点关闭返回始终可见的品牌首页链接。
- 当前 Route 和 Group 激活正确。
- 1024px 与 1023px 切换正确。
- Mobile Menu 内部滚动可到达最后一项。
- Body 不随 Mobile Menu 继续滚动。
- CTA 在桌面 Header 和移动菜单中均可到达 Playground。
- 外链新窗口行为和 `rel` 正确。

### 22.5 Search 验收

- `Meta+K`、`Control+K` 和按钮均能打开。
- 打开时输入框自动聚焦。
- 中文、英文和大小写匹配正确。
- Feature 和 Public Share 均可搜索。
- 已公开的原创、协作和精选内容显示正确来源标签与署名摘要。
- Draft、Review 和未审核资源不可搜索。
- 没有精选内容时不显示空的“精选”分组。
- 无结果空态正确。
- 上下键与 Enter 可完成导航。
- Escape 关闭并恢复焦点。
- 移动端 Dialog 不水平溢出。

### 22.6 首页验收

- 初始 HTML 中不存在 cc4pm iframe。
- H1 唯一。
- 首页清楚表达“帮助人们拥抱 AI 时代带来的巨大生产力和范式跃进”的使命。
- AI Speeds 与 cc4pm 品牌层级清楚。
- 页面不把 AI Speeds 错误限定为单一自然人的作品集。
- 工具入口都指向真实页面。
- Public Work 只显示公开 Share，并展示真实贡献者或合作方。
- 精选资源只在有审核通过的数据时出现，并明确原作者、来源与策展角色。
- 无未经验证的用户数、下载量或增长数据。
- Reduced Motion 下不执行位移和逐字动画。
- 页面无水平滚动。
- 页面无 Console Error 或 Hydration Warning。

### 22.7 Tool 与 Immersive 验收

- ToolHeader 不遮挡工作区。
- Whiteboard 和 Wireframe 画布尺寸计算正确。
- Recording Summary 的录音与结果状态不因 Shell 改动重置。
- Playground 请求、Curl Copy 和结果面板行为不变。
- Deck 不渲染 SiteHeader。
- Deck 键盘、Swipe、Hash、Presentation 和 Fullscreen 行为不变。

### 22.8 Lighthouse

对以下页面执行 Desktop 和 Mobile Audit：

```text
/
/get-started
/shares
/shares/[slug]
```

目标：

- Accessibility：无新增失败。
- Best Practices：无新增失败。
- SEO：可索引页面无新增失败。
- Agentic Browsing：无新增失败。
- 无明显 CLS 和交互阻塞回归。

Deck 的 `noindex` 是明确策略，不将其 SEO 分数作为重构失败。

### 22.9 最终静态与构建门禁

由于项目配置的 `test-runner` agent 没有 Shell /
Bash 工具，agent 明确报告无法执行命令，也没有模拟结果。随后按规定使用真实本地环境、无 Mock、严格串行执行，并把完整输出写入仓库外临时日志。以下是手工执行并记录的本地门禁结果，不是全部由 CI
Workflow 覆盖的持久证据；当前 CI 覆盖 `lint:check`、Registry-only
Share 校验、`build`、`typecheck` 与 `cf:build`，但不覆盖本表中的全部命令：

| 门禁                       | 结果 | 耗时 / 关键证据                                                  |
| -------------------------- | ---- | ---------------------------------------------------------------- |
| `pnpm run lint:check`      | 通过 | 2.048s；0 Error、12 Warning                                      |
| `pnpm run typecheck`       | 通过 | 1.749s                                                           |
| `git diff --check`         | 通过 | 0.046s                                                           |
| `pnpm run shares:validate` | 通过 | 0.982s；84 Payload、85 个总对象                                  |
| `pnpm run build`           | 通过 | 19.950s；Next.js 15.5.15，25/25 Static Pages                     |
| `pnpm run cf:build`        | 通过 | 21.932s；OpenNext Worker、Static Assets 与 Cache Assets 生成成功 |

Next Build 的根页面 First Load JS 为 109kB，共享 First Load
JS 为 105kB。仓库配置继续启用 OpenNext Static Assets Incremental Cache 与 Cache
Interception；运行时 Cache
HIT 是后续 Preview 实测证据，不由配置文件本身单独证明。

焦点恢复最终源码完成后又执行了一次
`pnpm run cf:build`：命令退出码为 0，Next.js 在 3.4s 内完成编译并生成 25/25 个静态页面，OpenNext 重新生成
`.open-next/worker.js`。该构建仍只输出已记录的 `workerd compatibility_date`
建议和 Node `punycode` Deprecation Warning，没有新增构建失败。

### 22.10 最终 Preview HTTP、RSC 与回滚结果

最终重建的 Cloudflare Preview 采用真实
`workerd`，验证前后监听进程未被重启。独立 HTTP Harness 8/8 断言通过：

- 13 个正向入口全部返回 HTTP
  200 且正文非空：`/`、`/get-started`、`/wireframe`、`/playground`、`/whiteboard`、`/recording-summary`、`/shares`、有效 Share 详情、有效 Deck、`/brand`、`/home`、`/robots.txt`、`/sitemap.xml`。
- `/invalid-route` 与 `/shares/invalid-slug` 均返回 HTTP 404。
- 首页 HTML 为原生服务端页面，包含使命文案且不包含 `<iframe>`。
- Robots 返回 `text/plain`，Sitemap 返回 `application/xml`。
- 全矩阵没有 5xx，最终 Liveness 仍为 HTTP 200。

最终六个 RSC 请求全部返回 HTTP 200 与 `text/x-component`：

| Route                                            | 最终 RSC Payload |
| ------------------------------------------------ | ---------------: |
| `/`                                              |     64,360 bytes |
| `/get-started`                                   |     16,091 bytes |
| `/shares`                                        |     21,911 bytes |
| `/shares/agent-native-product-ai-maker-shanghai` |    106,974 bytes |
| `/playground`                                    |      6,416 bytes |
| `/wireframe`                                     |      6,402 bytes |

cc4pm 回滚链按计划保留并实测通过；应用源码控制第一跳，第二个 307 是本次 Cloudflare
/ Static Asset Handler Preview 中观察到的行为，不是
`src/app/api/static/homepage/route.ts` 定义的第二条重定向：

```text
/api/static/homepage
307 → /static/cc4pm-homepage.html        应用 Route
307 → /static/cc4pm-homepage             Preview Asset Handler 实测
200 → 103,823-byte HTML
```

### 22.11 最终 Search、Overlay 与 Legacy URL 结果

最终 Search Harness 8/8 通过，且没有 Console Message、Runtime
Exception 或失败请求：

- `Control+K` 打开并自动聚焦。
- 初始展示 11 个真实公开条目。
- 连续两次 `ArrowDown` 从输入框依次移动到 `/#api-gateway` 与 `/#cc4pm`。
- `Agent Native` 只返回对应公开 Share，并显示 `AI Speeds 原创 · 王艺辉 / 晓灰`。
- Live Region 公告 `1 个结果`。
- Escape 关闭并恢复焦点；最终源码复验中，`Control+K` 从首页正文“如何用上 Claude
  Code”链接打开后返回同一链接，点击 Header Search 打开后返回 Header Search
  Trigger。

修正 Harness 对隐藏按钮的误选后，最终 Overlay / Breakpoint Harness 8/8 通过：

- 1023px Mobile Menu 真实打开为单一 Modal Popover，Body Lock 生效且无水平溢出。
- 打开 Search 会先关闭已打开的 Mobile Menu，不产生叠加 Modal。
- 1023→1024 清理 Mobile Portal 并恢复滚动。
- 1024px 使用真实 Pointer Event 点击打开桌面“产品”Dropdown。
- 1024→1023 清理 Desktop Portal。
- 全过程无 Console、Runtime 或 Network Failure。

最终焦点源码在最新 Preview 中使用“只改变宽度、保持 `isMobile=false` 与
`touch=false`”的方法再次复验。页面上的 `window`
Token 在 1023→1024 和 1024→1023 两次转换中都保留，证明没有通过重建执行上下文伪造响应式结果：Mobile
Menu 普通 Escape 关闭返回 Menu Trigger，Desktop
Dropdown 普通 Escape 关闭返回“产品”Trigger；两类 Overlay 跨断点关闭都把焦点转移到“AI
Speeds 首页”品牌链接，同时将 Dialog / Menu、Radix Popper Portal、Body
Overflow 与 Pointer Lock 清理为关闭状态。两种宽度都没有水平溢出。

Legacy 验证 Harness 使用 Location Polling，而不是错误等待客户端
`router.replace()` 的第二个 `Page.loadEventFired`；`LegacyHomeHashBridge`
本身使用 `useEffect`、`hashchange`、`router.replace()` 与
`window.location.replace()`，不执行轮询。七条映射共 14/14 断言通过：

```text
/#get-started       → /get-started
/#ai-wireframe      → /wireframe
/home               → /
/home#get-started   → /get-started
/home#ai-wireframe  → /wireframe
/home#api-gateway   → /#api-gateway
/home#cc4pm         → /#cc4pm
```

每条映射均无 Console、Runtime 或 Network
Failure；所有 Harness 自有 Chrome 进程均完成定向清理。

### 22.12 Transcript Compatibility 与 Accessibility Tree

曾尝试为 40 张 Transcript 卡片启用 `content-visibility: auto` 和 Intrinsic
Size，以减少首屏工作；两次冷运行 LCP 为 17,796ms 与 15,844ms，平均 16,820ms，没有改善预定义目标。该实验已撤销。

最终源码：

- 移除 Transcript 卡片的 `content-visibility` 与 Intrinsic Placeholder。
- 移除 40 个 Transcript 卡片的 Backdrop Filter。
- 将 Share Hero 的两处大型 Blur Filter 改为 Radial Gradient。
- 保持所有 Transcript 正常可见渲染，恢复完整初始 Accessibility Tree。

最终兼容 Harness 37/37 通过，四个阶段均为零 Layout Shift：

1. 直接访问 `#slide-40`。
2. 精确 `window.find()` Transcript 句子。
3. 真实 CDP `Tab` 焦点遍历。
4. 显式 Reveal 前后的完整 Accessibility Tree。

初始、未显式滚动到第 40 页的完整 AX Tree 已包含：

- “在在线演示中打开第 40 页：谢谢”链接。
- “谢谢”三级标题。
- 完整 Transcript：“谢谢大家。进入问答。本文相关的实践记录收录在 xiaohui.cool。”

### 22.13 Lighthouse 结果

完整矩阵曾对 `/`、`/get-started`、`/shares` 与有效 Share 详情的 Desktop /
Mobile 共八种组合执行 Audit，Accessibility、Best Practices、SEO 与 Agentic
Browsing 均为 100，失败项为 0。

最终重建 Preview 又聚焦复验两个 Mobile 页面：

| 页面            | Accessibility | Best Practices | SEO | Agentic Browsing | Failed |
| --------------- | ------------: | -------------: | --: | ---------------: | -----: |
| `/`             |           100 |            100 | 100 |              100 |      0 |
| 有效 Share 详情 |           100 |            100 | 100 |              100 |      0 |

最终焦点恢复源码在最新 OpenNext Preview 根首页上又执行一次 Navigation / Desktop
Audit：Accessibility、Best Practices、SEO 与 Agentic
Browsing 均为 100，56 项通过、0 项失败。

### 22.14 冷移动性能结果与未解决项

最终性能 Harness 使用 390×844、DPR 3、Mobile / Touch、150ms Latency、1.6 Mbps
Download、0.75 Mbps Upload、4× CPU Slowdown、全新 Chrome
Profile 与禁用缓存，两个 Profile 严格串行执行：

| Profile |      LCP |         DCL |       Load | CLS | 断言  |
| ------- | -------: | ----------: | ---------: | --: | ----- |
| Run 1   | 16,500ms |  30,343.8ms | 31,003.2ms |   0 | 11/12 |
| Run 2   | 17,024ms |  56,470.1ms | 57,254.4ms |   0 | 11/12 |
| 平均    | 16,762ms | 43,406.95ms | 44,128.8ms |   0 | —     |

预定义基线区间为 14,904–15,516ms，目标为相对最佳基线改善 20%，即不高于 11,923.2ms。最终平均值比最佳基线慢 12.466%，即比阈值高 4,838.8ms；两次运行唯一失败断言均为 LCP
Threshold。

两次 LCP 元素始终是位于首屏下沿的 1200×675 Cover
WebP；页面以约 356×200px 显示它。该图片为 98,290
bytes、`fetchPriority='high'`，Resource Initiator 为
`link`，证明 React 服务端输出已经提供 Preload。

LCP 分解如下：

| 分段                          |     Run 1 |     Run 2 |
| ----------------------------- | --------: | --------: |
| Main Document TTFB            |    36.1ms |    58.7ms |
| TTFB 后到 Cover `fetchStart`  | 5,234.5ms | 5,065.2ms |
| Cover `loadTime - fetchStart` | 7,489.1ms | 7,677.7ms |
| Cover `renderTime - loadTime` | 3,740.3ms | 4,222.4ms |
| 初始文字 LCP Candidate        |  11,732ms |  11,336ms |
| 最终 Cover LCP                |  16,500ms |  17,024ms |

Main Document 在两次运行中约 0.39–0.40s 完成响应，DNS 与 Connect 均为 0ms，且
`x-opennext-cache` 为 HIT。Cover、JS 与 CSS 均为 CDN HIT；浏览器 Cache、Service
Worker 与 Prefetch Cache 均未命中，因此这是“冷浏览器 + 暖应用 / CDN
Cache”测试，不是冷 Origin 测试。

Resource Timing 显示 Cover Response 在约 7.823s / 7.626s 结束，但 LCP
Entry 的 Image `loadTime` 为约 12.760s / 12.802s，两者存在 4.937s /
5.176s 的未归因间隔。Cover 响应没有提供
`Timing-Allow-Origin`，因此浏览器 Resource
Timing 无法完整暴露跨域请求阶段。初始资产还包括 12 个 JavaScript
Chunk（合计 166,139 bytes Encoded / 539,955 bytes
Decoded）和一个 Render-blocking CSS（12,749 bytes Encoded）；Aggregate Script /
Task Duration 较高，但现有证据没有 Long Task Stack、Script
Coverage 或单文件执行归因，不能据此指定某个 Chunk 为根因。

Run 2 的 DCL 和 Load 比 Run
1 晚约 26s，但其 FCP 更早、LCP 只晚 524ms，且部分晚期 RSC 与 Route
Chunk 发生在 LCP 之后，因此 DCL /
Load 差异不能解释为同等规模的 LCP 网络回归。历史实验与最终实现的平均 LCP 分别为 16,820ms 与 16,762ms，几乎停留在同一约 16.8s 平台。

结论分开记录：

- 浏览器流程和数据采集：通过。
- 性能充分性：失败。
- 根因：尚未隔离，并受本地执行环境与跨域 Timing 可见性影响。

现有证据不支持继续猜测性压缩 Cover、增加重复 Preload 或删除某个未归因 JS 模块，因此本轮不再做新的源码改动。后续若继续优化，应先采集固定截止时间、包含 Long
Task / Script Attribution 的性能 Trace，并检查 Cover Preload 在初始 HTML
Response 中的准确位置，再决定是提前发现图片还是减少 Pre-LCP Hydration / Shared
JS 工作。

### 22.15 验证工具限制

- 项目没有测试框架。
- 配置的 `test-runner` agent 没有命令执行工具，因此只报告能力限制，未伪造结果。
- `.claude/scripts/test-and-log.sh` 在隔离目录中因发现 Ambient
  Jest，将普通 JavaScript Harness 错误派发给 Jest，并返回 “No tests found”。
- 在该 Wrapper 失败后，使用直接 `node` 运行相同 Harness；所有脚本、日志、Chrome
  Profile 和 JSON 证据均保存在仓库外临时目录。
- 验证没有使用 Mock，没有修改 Public R2
  v4 资产，没有重启 Preview，也没有向仓库加入临时测试文件。

### 22.16 最终焦点恢复源码复验

焦点修复完成后的最终 OpenNext Bundle 与新启动的 Cloudflare
Preview 取得以下结果：

1. `pnpm run cf:build` 退出码 0，Next.js 15.5.15 编译成功、25/25 Static
   Pages 生成成功，OpenNext Worker Bundle 生成成功。
2. 1023px Mobile Menu 以名为“全站导航”的 Modal
   Dialog 打开；普通 Escape 关闭返回 Menu
   Trigger，Dialog 与 Portal 数量归零，Body Overflow 恢复为 `visible`，Pointer
   Events 恢复为 `auto`。
3. Mobile
   Menu 打开后只把视口宽度从 1023px 改为 1024px，执行上下文 Token 保留；Overlay 自动关闭，焦点转移到“AI
   Speeds 首页”，Portal 与 Body Lock 均清理。
4. 1024px 桌面“产品”Dropdown 通过真实 Pointer
   Click 打开；普通 Escape 关闭返回“产品”Trigger。
5. Desktop
   Dropdown 打开后只把视口宽度从 1024px 改为 1023px，执行上下文 Token 保留；Menu 与 Portal 自动移除，焦点转移到“AI
   Speeds 首页”。
6. 首页正文“如何用上 Claude Code”链接获得焦点后按 `Control+K`，Search
   Dialog 打开并自动聚焦输入框；Escape 关闭后返回同一个正文链接。点击 Header
   Search 打开的独立路径则返回 Header Search Trigger。
7. Search Dialog 的 Accessibility Tree 名称为“搜索 AI
   Speeds”，描述为“查找产品、工具、指南和公开分享。”；Mobile
   Dialog 名称为“全站导航”。
8. 最终焦点流程没有 Console Error、Warning、Runtime Exception 或失败 Network
   Request；1023px 与 1024px 都没有水平溢出。
9. 根首页最终 Lighthouse Navigation / Desktop
   Audit 四项均为 100，56 项通过、0 项失败。

改变 Chrome 的 Desktop / Mobile 执行模式会重建 JavaScript Execution
Context，并把焦点重置到
`body`；该方法不能用于证明响应式焦点恢复。因此最终证据只改变 Viewport
Width，并用保留的 `window` Token 显式确认上下文连续性。

本轮最终复验没有 Commit、Push、PR、Deploy、R2 发布、Public
Asset 删除或回滚链清理。

## 23. 风险与缓解

### 23.1 Dirty Working Tree

风险：共享文件和 Shares 目录当前包含未提交工作。

缓解：

- 实施前重新读取目标文件和 `git status`。
- 禁止整文件覆盖。
- Route Move 与首页组件开发分阶段进行。
- 不在 Shares 活跃变更期间直接让 `(main)/layout.tsx` 获得全局视觉副作用。
- 不 Reset、Stash 或丢弃既有改动。

### 23.2 生成文件误改

风险：修改 `public/static/cc4pm-homepage.html` 后被下一次构建覆盖。

缓解：

- 把它明确视为生成物。
- 迁移内容到 `src/components/home/` 或类型化内容数据。
- 只在最终阶段删除生成链。

### 23.3 Route Group 引发 404

风险：Share Deck 移动后失去原 `[slug]`
Layout 的静态参数约束，OpenNext 下可能再次出现合法动态路由 404。

缓解：

- Immersive 分支使用同一 Share Registry 生成静态参数。
- 保留 `dynamicParams = false` 的预期行为。
- 检查 Next Prerender Manifest 和 OpenNext Cache 产物。
- 在 Cloudflare Preview 中测试页面与浏览器形式 RSC 请求。

### 23.4 双 Header 和视口遮挡

风险：Root Layout 或 `(main)`
直接加入 Header，会同时影响 Whiteboard、Deck 和已有局部 Header。

缓解：

- 不在 Root Layout 放视觉 Header。
- 先建立语义 Route Group。
- 每种 Shell 只渲染一种 Header。
- 工具工作区显式扣除 ToolHeader 高度。

### 23.5 行为迁移不完整

风险：静态首页中的 Architecture、Accordion、Copy、Terminal 等原生 JS 行为在 React 迁移中丢失。

缓解：

- 建立逐项行为映射。
- 每个行为独立为 Client Island。
- 先完成静态内容，再逐项启用交互。
- 保留旧 iframe 作为回滚路径，直到原生页面通过验收。

### 23.6 Header 客户端体积扩大

风险：导航、搜索和页面激活逻辑全部进入一个大型 Client Bundle。

缓解：

- Header 数据由 Server Component 生成。
- Search Dialog 按打开状态渲染结果。
- 不把 Transcript 或首页完整内容传给 Header。
- 使用现有 Radix 依赖，不新增 UI 框架。

### 23.7 品牌、署名与来源边界不清

风险：首页继续以 cc4pm 或单一作者为唯一主角，AI
Speeds 无法承载其他产品和共同创作；如果协作方署名丢失，或精选内容被呈现为 AI
Speeds 原创，也会损害贡献者关系与品牌可信度。

缓解：

- Mission Hero 明确解释 AI
  Speeds 的使命，并说明当前由创始贡献者主导而非永久限定为单人品牌。
- cc4pm 放入 Product Stories，工具、Public Shares 和未来内容集合进入稳定内容域。
- 作者、维护者、合作方与策展者从 Contributor
  Registry 和 Attribution 数据派生，不在组件中写死。
- 原创、协作和精选内容使用不同 Provenance 与展示标签。
- 精选资源默认链接原始来源，并显示原作者、来源和 AI Speeds 的选择理由。
- 没有真实公开内容时不渲染 Team、Partners、Contributors 或 Curated
  Resources 空栏目。
- 现有 cc4pm 内容迁移到对应产品和指南区域，不直接删除。

## 24. 回滚策略

### 24.1 Phase 1 Header 回滚

- Header 新组件在单一集成点挂载。
- 出现严重导航问题时恢复旧浮动菜单入口。
- 不删除 Feature Registry 旧字段，直到新导航稳定。

### 24.2 首页回滚

- 当前保留 `HomePageWithNav` 与旧 iframe 生成链。
- 回滚需要临时修改 `src/app/(site)/page.tsx`，恢复渲染
  `HomePageWithNav`；当前根页面没有可直接切换的 iframe 分支或 Feature Flag。
- 回滚不需要恢复被删除的构建链，因为构建链只在最终 Phase 5 清理。

### 24.3 Route 回滚

- Route Group Move 保持 URL 不变。
- 每次只迁移一类 Route。
- 若构建或 RSC 验证失败，将对应文件移动回原 Route Group。
- Share Deck 移动必须单独提交和验证，避免与首页视觉改动混在同一回滚单元。

### 24.4 生成链回滚

- 只有原生首页完成一个发布周期后才删除依赖和准备脚本。
- 清理阶段出现问题时恢复 `prepare:homepage` 和 `@cc4pm/homepage`
  依赖，不回退已完成的 React 组件。

### 24.5 当前保留状态

生产发布和稳定观察期尚未开始，因此当前明确保留：

```text
@cc4pm/homepage
scripts/prepare-cc4pm-homepage.mjs
prepare:homepage
public/static/cc4pm-homepage.html
src/app/api/static/homepage/route.ts
```

`public/static/cc4pm-homepage.html`
是仓库跟踪但由准备脚本重新生成的快照，不作为手工维护源；当前工作区版本为 103,823
bytes / 2,109 行，`HEAD` 中的已提交快照为 103,776
bytes。最终 Preview 已验证回滚端点可到达当前静态 HTML。Phase
5 与旧链退役继续作为独立后续任务，不包含在本地实现完成声明中。

## 25. 实施顺序与提交边界

建议使用小而聚焦的变更单元：

```text
1. feat: add site navigation registry
2. feat: add responsive site header
3. feat: add global site search
4. feat: add native editorial homepage
5. feat: add get-started and wireframe routes
6. refactor: migrate content routes to site shell
7. refactor: migrate utility routes to tool shell
8. refactor: isolate share deck route
9. refactor: remove legacy homepage iframe
10. chore: remove homepage generation pipeline
11. style: align migrated pages with semantic tokens
```

实际 Commit Message 应遵循仓库 Conventional
Commits 规则；本文不授权自动 Commit、Push 或部署。

不要把以下事项合入同一个变更：

- 首页视觉与 Share Deck Route Move。
- Header 与 AI Proxy 服务改动。
- Token 收敛与工具业务重写。
- iframe 删除与首个 React 首页实现。

## 26. 默认产品决策

在没有额外产品决策前，实施按以下默认值执行：

| 决策                              | 默认值                                                   |
| --------------------------------- | -------------------------------------------------------- |
| 参考方式                          | 借鉴结构，不做视觉克隆                                   |
| 品牌模式                          | Mission-driven、Founder-led、Multi-contributor-ready     |
| 品牌关系                          | AI Speeds 为使命、上层品牌和编辑出版主体，cc4pm 为产品   |
| 内容来源                          | 明确区分 Original、Collaboration、Curated                |
| 贡献者建模                        | 第一版建立 Contributor Registry，不在组件中写死单一作者  |
| 精选资源                          | 只有审核通过的真实内容才启用；外部内容默认 `linked-only` |
| 发布治理                          | 类型化 Registry + 代码审核；不建设开放式 UGC             |
| Header 用户状态                   | Anonymous-first                                          |
| Primary CTA                       | 打开 Playground                                          |
| Search                            | 第一版实现静态真实索引                                   |
| Announcement Bar                  | 预留组件，默认关闭                                       |
| Account / Credits / Notifications | 不实现                                                   |
| Desktop Nav Breakpoint            | 1024px                                                   |
| Mobile Header Breakpoint          | 640px 高度切换                                           |
| Header Container                  | 1152px                                                   |
| Header Scroll Behavior            | 始终 Sticky，不收缩、不隐藏                              |
| Dropdown Open                     | 点击打开                                                 |
| Mobile Navigation                 | 右对齐浮层，不使用全屏 Drawer                            |
| 首页实现                          | 原生 React Server Components + Client Islands            |
| Get Started                       | 独立 `/get-started` Route                                |
| AI Wireframe                      | 独立 `/wireframe` Route                                  |
| Deck                              | Immersive Shell，不显示 SiteHeader                       |
| 字体                              | System Sans + System Editorial Serif + System Mono       |
| 新 UI 依赖                        | 不新增，复用现有 Radix 与 Lucide                         |

## 27. 最终验收清单

### 架构

- [x] AI Speeds 的使命、品牌与 cc4pm 产品层级明确。
- [x] 架构支持创始贡献者主导，并可扩展到 Team、Partner 与 Invited Contributor。
- [x] Site、Tool、Immersive 与 Legacy Shell 已建立。
- [x] Root Layout 没有强行注入视觉 Header。
- [x] 页面 URL 保持稳定。
- [x] `/#get-started`、`/#ai-wireframe` 与 `/home`
      兼容行为通过最终 Preview 验证。
- [x] `HomePageWithNav` 不再承担站点导航和页面主体双重职责。

### Header

- [x] 桌面 Header 内容高为 64px，移动 Header 内容高为 56px。
- [x] Header 使用 1152px 居中容器。
- [x] 1024px 显示桌面导航，1023px 使用移动菜单。
- [x] 品牌、分组导航、搜索和 Playground CTA 均可访问。
- [x] 不存在虚假账户、积分、通知或头像。
- [x] Dropdown、Mobile
      Menu 和 Search 的键盘、焦点、Modal 与断点 Portal 行为通过。
- [x] Header 滚动时不缩小、不隐藏、不产生 Layout Shift。

### 首页

- [x] `/` 不再渲染 iframe。
- [x] 主要内容存在于初始 HTML。
- [x] 页面采用原生 Section Composition。
- [x] Mission Hero 清楚表达“帮助人们拥抱 AI 时代带来的巨大生产力和范式跃进”。
- [x] 页面没有把 AI Speeds 描述成单一自然人专属的作品集。
- [x] Product、Tools、Public Work、Get Started 和 About 层级清楚。
- [x] Public Work 展示真实作者、贡献者或合作方。
- [x] Curated Resources 与 Contributors /
      Partners 只有在存在真实公开内容时才会创建和渲染；当前没有空栏目。
- [x] Public Share 的来源标签由 Provenance 派生；Feature 搜索项当前使用固定的
      `AI Speeds` 署名；真实原创 Share 已在卡片、详情和 Search 中正确署名。
- [x] cc4pm 定位、能力摘要、命令预览、GitHub 与 Get Started 入口已迁入 Product
      Story。
- [ ] cc4pm Curriculum、Architecture、交互式安装流程与 FAQ 尚未迁移。
- [x] 不包含无法验证的营销数字。

### 内容治理与署名

- [x] Contributor Registry 支持 Person、Team 和 Organization。
- [x] 公开 Share 的 Provenance 至少包含 Creator 或 Author，构建路径验证已启用。
- [ ] 共创内容的最终视觉验收：当前没有真实共创条目，条件未触发；Validator 已要求多个贡献主体和显式 Collaborator。
- [ ] 精选内容的最终视觉验收：当前没有审核通过的精选条目，条件未触发；未创建空 Registry 或空 Section。
- [x] `linked-only` Share Provenance 禁止本地 Deck 和 Download 资源。
- [ ] Curated 默认值与 `licensed` 内容的显式授权依据校验尚未实现。
- [x] 只有公开 Feature 与 `public`
      Share 进入当前页面、Search、Sitemap 和首页内容区。
- [x] Share 的 `draft` 与 `archived`
      状态不会进入公开页面、Search、Sitemap 或首页；`review`
      / 未审核资源门禁待对应内容 Registry 实现后验收。
- [x] 多贡献者能力不依赖开放式账号或 UGC 投稿系统。

### 路由和 Shell

- [x] `/get-started` 可直接访问和刷新。
- [x] `/wireframe` 可直接访问和刷新。
- [x] Site 页面只出现一个全局 Header。
- [x] Tool 页面使用紧凑 ToolHeader。
- [x] Deck 继续使用专用沉浸式控制栏。
- [x] Share 详情、Deck、无效 Slug 和 RSC 请求行为不回归。

### Token 与视觉

- [x] 新 Shell、Header 与主要页面表面已使用 Runtime Semantic Tokens。
- [ ] `ProductStories` 与 `ToolCollection` 仍包含直接 Slate / Cyan / Amber /
      Emerald Palette Class 及 Raw RGB Gradient，语义 Token 收敛尚未完成。
- [x] Header 和首页没有新增重复 Coral Hex。
- [x] Editorial Font 使用统一 Token。
- [x] BrandLogo 不再硬编码 Slate 文字色。
- [x] 新增 Runtime Token 已映射到 Tailwind，Header Surface 与 Blur 已同步 Style
      Guide Catalog。
- [ ] Editorial Font、Site Container 与 Shell Size
      Token 的 Catalog 展示尚未补齐。

### SEO、性能与无障碍

- [x] 首页 H1 唯一并包含真实链接。
- [ ] 首页 `PublicWorkSection` 内嵌 Share Card 当前仍使用 H2；H1 → H2 →
      H3 的完整文档层级尚未收敛。
- [x] `/get-started` 和 `/wireframe` Metadata 策略明确。
- [x] Sitemap 不包含 Anchor、External 或 noindex 页面。
- [x] Header 提供 Skip Link、当前页状态和可见焦点。
- [x] Reduced Motion 行为正确。
- [x] 页面无 iframe 双滚动上下文。
- [x] 页面无 Console Error、Hydration Warning 或水平溢出。
- [x] 指定页面 Lighthouse 无新增失败；最终聚焦 Mobile 与最新焦点源码 Desktop
      Audit 均为四项 100。
- [x] Transcript 深 Hash、精确查找、真实键盘遍历和初始完整 AX
      Tree 共 37/37 通过。
- [ ] Share 详情冷移动 LCP 达到不高于 11,923.2ms 的目标；最终平均为 16,762ms，尚未解决。

### 构建与发布

- [x] `pnpm run lint:check` 通过。
- [x] `pnpm run typecheck` 通过。
- [x] `git diff --check` 通过。
- [x] `pnpm run shares:validate` 通过。
- [x] `pnpm run build` 通过。
- [x] `pnpm run cf:build` 通过。
- [x] Cloudflare Preview 主要 Route、RSC、404、Legacy 与回滚请求通过。
- [ ] 完成生产部署与稳定观察期；本轮尚未授权 Deploy。
- [ ] 稳定期后再删除 `prepare:homepage` 生成链；当前按回滚策略保留。

未勾选项是明确的条件未触发或未解决项，不代表本地 Shell 实现回退为未完成。

## 28. 结论

AI
Speeds 当前的问题不是缺少一个更漂亮的 Header，而是缺少一套能够长期承载使命、产品、工具、共同创作与优质资源策展的站点结构。

长期正确方案是：

```text
清晰的 AI Speeds 使命与品牌层级
+ 分组信息架构
+ 响应式全局 Header
+ Site / Tool / Immersive Shell
+ 原生 React 编辑型首页
+ 真实功能路由
+ Contributor / Attribution / Provenance 模型
+ 有发布门禁的原创、共创与精选内容
+ 静态公开搜索索引
+ 单一运行时 Design Token 源
```

Lovstudio 提供的是结构参考：稳定的全局 Shell、清晰的内容域、完整的移动导航、全局搜索和编辑型首页叙事。AI
Speeds 应保留自己的 Coral /
Cyan 品牌与真实产品能力，并以“帮助人们拥抱 AI 时代带来的巨大生产力和范式跃进”为长期使命，而不是复制 Lovstudio 的账户业务和品牌视觉。

AI
Speeds 第一阶段可以继续由创始贡献者主导，但数据模型和页面表达不能把它封闭为单一自然人的作品集。未来 Team、Partner、Invited
Contributor 和精选外部资源都应在同一品牌框架下被准确署名；AI
Speeds 作为 Publisher 和策展者，也必须清楚说明哪些内容是原创、哪些是共同创作、哪些只是经过编辑判断的外部资源。

本地实现已经证明该架构可以在保留现有 URL、Public Shares、工具能力、OpenNext
Cache 与 cc4pm 回滚路径的前提下完成迁移：原生首页、四类 Shell、全局导航、搜索、Provenance、Legacy
Bridge、RSC 和无障碍边界均通过最终 Preview 验证。`public/static/cc4pm-homepage.html`
仍只是构建生成物，不再是根首页运行时来源，但在生产稳定期之前继续保留。

当前不能宣称项目全部完成：Share 详情页的预定义冷移动 LCP 目标仍失败，生产 Deploy 与稳定观察期尚未执行；cc4pm 详细内容、剩余 Palette
/ RGB Token、Style Guide Catalog、Public Work 标题层级和 Curated `licensed`
授权依据校验仍待收敛；首条真实共创或精选内容出现后，还需要补做对应视觉验收。未创建空栏目、不引入开放式 UGC、不复制来源或权利不清的第三方内容，仍是后续演进必须保持的内容边界。
