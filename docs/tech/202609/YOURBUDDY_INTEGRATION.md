# YourBuddy 产品接入 AI Speeds 技术方案

## 0. 结论

实施状态：**代码已实现并通过本地构建与真实浏览器验收，尚未部署**。

YourBuddy 作为 AI Speeds 的沉浸式产品接入：

- AI Speeds 公开地址：`https://aispeeds.me/product/yourbuddy`
- 上游内容地址：`https://istarwyh.github.io/yourbuddy/`
- 路由归属：`src/app/(immersive)/product/yourbuddy/page.tsx`
- 展示方式：全屏跨域 iframe
- 导航归属：全站“产品”分组
- 搜索与 Sitemap：从 `src/config/features.ts` 自动派生

第一阶段不做反向代理、静态镜像、URL rewrite，也不修改 YourBuddy 的 GitHub
Pages 发布流程。该方案复用已经上线的 Harbor
Self-Evolving 沉浸式边界，改动小、可独立回滚，并能让用户在 `aispeeds.me`
地址栏下完整浏览 YourBuddy 中文站。

## 1. 目标与非目标

### 1.1 目标

1. 用户从 AI Speeds 的产品导航进入 YourBuddy。
2. 顶层地址栏保持 `https://aispeeds.me/product/yourbuddy`。
3. YourBuddy 首页、文档、插件、路线图、下载、搜索、语言和主题切换正常工作。
4. 提供“新窗口打开”兜底入口，避免 iframe 策略变化时形成无出口页面。
5. 新入口自动进入 AI Speeds 全站搜索和 Sitemap。
6. 不复制 YourBuddy 内容，不建立两个独立内容源。
7. 不破坏 AI Speeds 原生首页和现有 Harbor 接入。

### 1.2 第一阶段非目标

- 不把 iframe 内部路径同步到顶层地址栏。
- 不把 YourBuddy 的完整正文复制到 AI Speeds，用于父页面 SEO。
- 不代理 `/yourbuddy/**` 静态资源。
- 不建立跨站登录、Cookie 或父子 DOM 访问。
- 不在本次接入中重构 Harbor 路由或抽象通用外部产品框架。
- 不默认向首页 `ProductStories` 增加第三个大型产品故事区块。

## 2. 已核实事实

核验时间：`2026-09-23T01:43:11Z`

### 2.1 上游站点

| 项目           | 核验结果                                                                              |
| -------------- | ------------------------------------------------------------------------------------- |
| 无尾斜杠入口   | `https://istarwyh.github.io/yourbuddy` 返回 `301`                                     |
| 正式入口       | `https://istarwyh.github.io/yourbuddy/` 返回 `200`                                    |
| 页面标题       | `YourBuddy`                                                                           |
| 页面语言       | `zh-CN`，提供英文入口 `/yourbuddy/en/`                                                |
| 页面描述       | “让每个人，都有自己的 AI 工作台。”                                                    |
| 技术栈         | Hugo 生成的 GitHub Pages 静态站                                                       |
| 基础路径       | `/yourbuddy/`                                                                         |
| 内部路由       | 多页静态路由，例如 `/yourbuddy/docs/`、`/yourbuddy/plugins/`、`/yourbuddy/download/`  |
| 静态资源       | 根相对 `/yourbuddy/...` 路径，CSS、JavaScript、图片和离线搜索索引由 GitHub Pages 提供 |
| 搜索           | 客户端离线搜索索引                                                                    |
| 浏览器状态     | 使用 `localStorage` 保存主题状态                                                      |
| 外部行为       | 包含新窗口 GitHub 链接、下载入口和复制相关脚本                                        |
| Service Worker | 当前发布首页未注册 Service Worker                                                     |

站点与源仓库：

- [YourBuddy 中文站](https://istarwyh.github.io/yourbuddy/)
- [YourBuddy 源仓库](https://github.com/istarwyh/yourbuddy)
- [GitHub Pages 发布流程](https://github.com/istarwyh/yourbuddy/blob/master/.github/workflows/docs-pages.yml)
- [Hugo 产品站配置](https://github.com/istarwyh/yourbuddy/blob/master/website/product/hugo.yaml)

上游 Pages 发布流程从 release tag 显式触发，构建时使用 GitHub Pages 输出的 base
path，因此正式页面稳定使用 `/yourbuddy/` 作为资源和站内链接前缀。

### 2.2 iframe 可行性

对正式响应头的核验结果：

- 未返回 `X-Frame-Options`；
- 未返回阻止嵌入的 `Content-Security-Policy: frame-ancestors ...`；
- 使用 HTTPS；
- 页面及已抽查的文档、插件、英文首页和 JavaScript 资源均可访问；
- 程序化抽查的 28 个首页同源链接和资源全部返回 `200`，CSS、JavaScript 和 JSON
  MIME 正常。

在真实 Chromium 中，将现有 AI Speeds
Harbor 沉浸式页面的 iframe 临时指向 YourBuddy 后，YourBuddy 中文首页完整渲染，导航栏、首屏内容、样式和图片正常。进一步使用本方案建议的 sandbox 和 Permissions
Policy 后，已验证：

- 中文首页与主题状态正常；
- 站内搜索弹层可打开；
- “开始打造我的工作台”可在 iframe 内进入 `/yourbuddy/docs/start/`；
- `localStorage` 可读写；
- Clipboard API 可用；
- 页面保持跨域隔离。

这证明当前上游可以被 `aispeeds.me`
跨域嵌入，且建议的限制不会破坏已抽查的核心交互。

该能力依赖上游响应策略。若 GitHub
Pages 或 YourBuddy 未来增加阻止嵌入的响应头，AI
Speeds 不应绕过安全策略，应下架入口或迁移到经过设计的同源发布方案。

## 3. 架构决策

### 3.1 推荐：沉浸式跨域 iframe

```text
AI Speeds 产品导航 / 全站搜索 / Sitemap
  -> https://aispeeds.me/product/yourbuddy
  -> Next.js (immersive) route
  -> iframe https://istarwyh.github.io/yourbuddy/
  -> YourBuddy GitHub Pages HTML、CSS、JS、搜索索引和下载资源
```

选择原因：

1. **满足地址栏要求**：顶层 URL 保持在 `aispeeds.me`。
2. **保持内容单一来源**：YourBuddy 继续独立构建和发布。
3. **兼容现有资源路径**：iframe 内 `/yourbuddy/**` 始终解析到
   `istarwyh.github.io`。
4. **复用已验证边界**：与 Harbor 的 `(immersive)` 路由模型一致。
5. **回滚简单**：无数据库、API、缓存或 Cloudflare 路由迁移。

### 3.2 为什么不用外部跳转

外部链接实现最简单，但用户点击后顶层地址栏会变为
`istarwyh.github.io`，不满足“接入 `aispeeds.me`”的目标。

### 3.3 为什么第一阶段不用 Next.js rewrite

YourBuddy 页面和资源大量使用 `/yourbuddy/**` 根相对路径。只把
`/product/yourbuddy` rewrite 到上游 HTML 并不够，还必须代理：

- `/yourbuddy/scss/**`；
- `/yourbuddy/js/**`；
- `/yourbuddy/icons/**`；
- `/yourbuddy/offline-search-index.*.json`；
- 所有站内文档、插件、语言、下载与 Markdown 路径。

还要重写 canonical、hreflang、Open
Graph、重定向和缓存策略。该方案复杂度与运行责任显著高于 iframe。

### 3.4 为什么第一阶段不用 Cloudflare Worker 反向代理

专用反向代理需要正确处理状态码、Content-Type、缓存键、ETag、重定向、绝对路径、SRI、canonical、下载、上游故障和 SSRF 防护。YourBuddy 已有稳定静态发布站点，没有必要为第一阶段承担这组责任。

### 3.5 为什么第一阶段不用静态镜像

构建期镜像可以获得同源内容和更强 SEO，但需要：

- 固定并校验 YourBuddy 发布物版本；
- 处理 AI Speeds 与 YourBuddy 的跨仓库发布顺序；
- 修改 base URL 和所有 canonical/hreflang；
- 定义资源冲突、更新频率和故障回滚机制。

只有当 iframe 被禁止，或业务明确要求父域深链、正文 SEO、统一分析和离线托管时，才进入第三阶段评估。

## 4. 路由与注册表设计

### 4.1 公开 URL

采用：

```text
/product/yourbuddy
```

不采用 `/yourbuddy`，避免占用可能用于未来同源资源树的根前缀；不采用
`/tools/yourbuddy`，因为 YourBuddy 是完整产品，不是单一工具。

### 4.2 Feature registry

在 `src/config/features.ts` 增加完整 Feature：

```ts
{
  id: 'yourbuddy',
  title: UI_TEXTS.NAVIGATION.YOURBUDDY,
  description: '可扩展的 AI 桌面工作台，将模型、Skill、Plugin、文件和专业流程组织到同一工作空间。',
  href: '/product/yourbuddy',
  targetKind: 'route',
  shell: 'immersive',
  isPublic: true,
  includeInSitemap: true,
  searchable: true,
  keywords: ['YourBuddy', 'AI 工作台', 'DeepSeek Harness', 'Skill', 'Plugin', 'Agent'],
  searchGroup: 'products',
  activeMatch: 'exact',
  kind: 'route',
  showInHomeMenu: true,
  allowInNavigation: true,
  sitemapPriority: 0.7,
  sitemapChangeFrequency: 'weekly',
}
```

关键约束：

- `allowInNavigation: true` 是 immersive Feature 进入普通导航的显式门控；
- `includeInSitemap: true` 让 `/sitemap.xml` 自动收录父路由；
- `searchable: true` 让全站搜索自动生成 `feature:yourbuddy`；
- `showInHomeMenu`
  与 Harbor 保持一致，但当前原生首页不会据此自动增加大型产品故事卡片。

### 4.3 导航顺序

在 `src/config/site-navigation.ts` 的产品组中加入
`yourbuddy`。推荐将它放在第一位，体现其“完整 AI 工作台”的产品层级：

```ts
featureIds: ['yourbuddy', 'api-gateway', 'cc4pm', 'harbor-self-evolving'];
```

桌面导航、移动导航和 Footer 都消费
`resolvedNavigationGroups`，不应分别加入产品专用判断。

### 4.4 UI 文案

在 `src/config/ui-texts.ts` 增加：

```ts
YOURBUDDY: 'YourBuddy',
```

## 5. 页面实现

新增：

```text
src/app/(immersive)/product/yourbuddy/page.tsx
```

建议实现：

```tsx
import type { Metadata } from 'next';

const YOURBUDDY_URL = 'https://istarwyh.github.io/yourbuddy/';

export const metadata: Metadata = {
  title: 'YourBuddy | AI Speeds',
  description: '让每个人，都有自己的 AI 工作台。',
  alternates: {
    canonical: 'https://aispeeds.me/product/yourbuddy',
  },
};

export default function YourBuddyPage() {
  return (
    <main className='relative h-[100dvh] w-full overflow-hidden bg-bg-primary'>
      <iframe
        src={YOURBUDDY_URL}
        title='YourBuddy'
        className='block h-full w-full border-0'
        referrerPolicy='strict-origin-when-cross-origin'
        sandbox='allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads'
        allow='clipboard-write; fullscreen'
        allowFullScreen
      />
      <a
        href={YOURBUDDY_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='absolute bottom-4 right-4 rounded-pill border border-floating-border bg-floating-surface px-4 py-2 text-sm font-semibold text-text-primary shadow-floating backdrop-blur-floating transition hover:border-primary hover:bg-floating-surface-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
      >
        新窗口打开
      </a>
      <noscript>
        <a href={YOURBUDDY_URL}>打开 YourBuddy 中文站</a>
      </noscript>
    </main>
  );
}
```

### 5.1 安全边界

第一阶段使用经过真实 Chromium 验证的最小 sandbox：

```text
allow-scripts
allow-same-origin
allow-popups
allow-popups-to-escape-sandbox
allow-downloads
```

各项用途：

- `allow-scripts`：站内搜索、主题、键盘操作和菜单依赖 JavaScript；
- `allow-same-origin`：保留 GitHub Pages origin，使
  `localStorage`、`sessionStorage`、同源搜索索引和资源请求正常；
- `allow-popups`：允许 `target=_blank` 的 GitHub 等外部链接；
- `allow-popups-to-escape-sandbox`：新开的外部页面不继承 YourBuddy
  iframe 的 sandbox；
- `allow-downloads`：允许下载页中的 DMG、ZIP 和校验文件下载。

不开放 `allow-top-navigation`，避免 iframe 导航顶层 AI
Speeds 页面；当前核心流程不需要
`allow-forms`。`allow='clipboard-write; fullscreen'`
仅显式委派复制和全屏两项 Permissions
Policy，复制仍必须由用户手势触发，也受具体浏览器策略约束。

`allow-scripts` 与 `allow-same-origin` 同时存在不会让 YourBuddy 读取 AI Speeds
DOM：两个页面仍是不同 origin，浏览器同源策略继续隔离父子页面。由于子页面跨域，它也不能移除父页面设置的 sandbox 属性。

不应加入摄像头、麦克风、定位、支付或其他宽泛权限。若上游增加新能力，应先以真实浏览器验证，再逐项增加最小权限。

### 5.2 顶层 URL 与深链限制

iframe 内部导航不会改变顶层 `/product/yourbuddy`。因此：

- 用户在 iframe 内进入某篇文档后刷新顶层页面，会回到 YourBuddy 首页；
- 浏览器前进/后退不会完整反映 iframe 内导航；
- 父页面无法跨域读取当前 iframe 路径。

第一阶段接受这一限制。若以后要求深链，需要 YourBuddy 增加受控 `postMessage`
协议，父页严格校验
`event.origin === 'https://istarwyh.github.io'`，并维护显式路径白名单；不能通过 DOM
hack 或开放代理实现。

## 6. 自动派生行为

### 6.1 导航

`src/config/site-navigation.ts` 加入 Feature ID 后，以下位置自动出现 YourBuddy：

- 桌面产品菜单；
- 移动导航；
- Site Footer。

无需修改 `DesktopNavigation.tsx`、`MobileNavigation.tsx` 或 `SiteFooter.tsx`。

### 6.2 全站搜索

`searchable: true` 和 `searchGroup: 'products'` 会让现有搜索索引自动收录：

- 标题：`YourBuddy`；
- 描述；
- 关键词；
- 目标 URL：`/product/yourbuddy`。

无需修改 `GlobalSearchDialog.tsx`、`site-search.ts` 或搜索排序逻辑。

### 6.3 Sitemap

`src/app/sitemap.ts` 会自动生成：

```text
https://aispeeds.me/product/yourbuddy
```

频率为 `weekly`，priority 为 `0.7`。父路由的 canonical 始终指向
`aispeeds.me`，iframe 内上游页面继续保留自己的 GitHub Pages
canonical；两者代表不同发布边界，不应互相重写。

### 6.4 首页曝光

当前 `src/components/home/ProductStories.tsx` 只显式展示 AI
API 网关和 cc4pm，不会根据 `showInHomeMenu` 自动渲染 YourBuddy。

第一阶段只接入产品导航、搜索和 Sitemap。如果需要把 YourBuddy 作为首页主产品故事，应作为独立设计任务：

- 增加第三个产品故事区块；
- 明确与 API 网关、cc4pm 的产品层级；
- 使用经过确认的产品截图和能力文案；
- 单独完成桌面、移动和视觉回归验证。

## 7. SEO、分析与可靠性

### 7.1 SEO

搜索引擎通常不会把跨域 iframe 正文视作父页正文。`/product/yourbuddy`
第一阶段依赖 metadata、导航链接和 Sitemap 被发现，适合品牌入口，但不是完整的同源 SEO 落地页。

若 SEO 成为核心目标，优先考虑在 `(site)`
下建设原生 YourBuddy 介绍页，并从该页面跳转到沉浸式体验或上游文档；不要把上游正文隐藏复制到父页面。

### 7.2 分析

AI Speeds 可以统计 `/product/yourbuddy`
父路由访问，但无法直接统计 iframe 内部文档导航。内部行为应由 YourBuddy 自身统计；若以后需要统一漏斗，再设计版本化
`postMessage` 事件 schema，并严格校验 origin 和消息类型。

### 7.3 可用性依赖

父路由正常不代表上游内容可用。第二阶段可在 CI 或定时任务中检查：

1. 正式入口返回 `200`；
2. 不出现阻止嵌入的 `X-Frame-Options`；
3. CSP `frame-ancestors` 仍允许 `aispeeds.me`；
4. 首页关键 CSS、JavaScript、图标和搜索索引返回 `200`；
5. 中文首页和至少一个文档深链可渲染。

监测失败应告警，不应由运行时 Worker 自动改写上游响应头。

### 7.4 未来全站 CSP

AI
Speeds 当前没有阻止该 iframe 的全站 CSP。若未来增加 CSP，需要把准确 origin 加入：

```text
frame-src https://istarwyh.github.io;
```

不要使用 `frame-src *`。

## 8. 预计改动范围

第一阶段修改或新增：

```text
src/config/ui-texts.ts
src/config/features.ts
src/config/site-navigation.ts
src/app/(immersive)/product/yourbuddy/page.tsx
CLAUDE.md
README.md
docs/QUICK_START_NEW_DEV.md
docs/SRC_ARCHITECTURE.md
docs/tech/202609/YOURBUDDY_INTEGRATION.md
```

无需修改：

```text
src/lib/navigation.ts
src/app/sitemap.ts
src/app/_lib/site-search.ts
src/components/site/DesktopNavigation.tsx
src/components/site/MobileNavigation.tsx
src/components/site/SiteFooter.tsx
src/components/site/GlobalSearchDialog.tsx
next.config.mjs
open-next.config.ts
wrangler.toml
architecture/compatibility-manifest.json
```

## 9. 实施阶段

### Phase 1：最小正式接入

1. 增加导航文案。
2. 注册完整 Feature。
3. 将 Feature ID 放入产品导航。
4. 新增沉浸式 iframe route。
5. 更新 README 和架构文档。
6. 完成静态门禁、生产构建和浏览器验收。
7. 部署后核验两个生产域名。

### Phase 2：可靠性与产品体验

1. 增加上游可嵌入性和关键资源健康检查。
2. 根据真实使用反馈优化“新窗口打开”按钮的位置、视觉权重与移动端避让。
3. 设计父页访问分析；只有在确有需求时增加严格的 `postMessage` 协议。
4. 单独评估首页 YourBuddy 产品故事区块。

### Phase 3：可选同源迁移

仅在 iframe 被禁止或业务需要深链、同源 SEO、统一分析时启动：

1. 为 YourBuddy 增加 AI Speeds 专用 base URL 构建目标。
2. 产出带版本和完整性校验的静态发布物。
3. 建立跨仓库版本同步和回滚流程。
4. 在 AI Speeds 托管 `/product/yourbuddy/**` 内容与资源。
5. 迁移 canonical、hreflang、Sitemap 和旧入口。

## 10. 验证清单

### 10.1 静态门禁

```bash
pnpm run node:check
pnpm run node:check:self-test
pnpm run lint:check
pnpm run typecheck
pnpm run architecture:check
pnpm run architecture:check:self-test
pnpm run build
pnpm run cf:build
git diff --check
```

仓库当前没有测试框架，不应为这一条 registry 接入引入新的测试系统。

### 10.2 功能验收

- [ ] 产品菜单显示 `YourBuddy`，且桌面、移动和 Footer 各只出现一次。
- [ ] 点击后顶层地址为 `/product/yourbuddy`。
- [ ] 直接访问和刷新返回 `200`。
- [ ] YourBuddy 中文首页完整渲染。
- [ ] 使用文档、默认插件、扩展 Y8、路线图、下载和 GitHub 链接可用。
- [ ] 中文/英文切换可用。
- [ ] 主题切换和刷新后主题状态正常。
- [ ] 站内搜索可打开、输入和跳转。
- [ ] 复制按钮、下载和 YourBuddy 自带的新窗口链接正常。
- [ ] 父页面“新窗口打开”兜底入口可见、可聚焦，且不遮挡关键内容。
- [ ] iframe 不能把顶层页面导航离开 AI Speeds。
- [ ] iframe 有准确的无障碍 title。
- [ ] 键盘焦点可进入 iframe 并操作导航。
- [ ] 桌面端没有双滚动条和白边。
- [ ] iOS Safari 与 Android Chrome 的 `100dvh` 行为正常。

### 10.3 AI Speeds 集成验收

- [ ] Cmd/Ctrl+K 搜索 `YourBuddy`、`AI 工作台`、`Skill` 能命中产品。
- [ ] `/sitemap.xml` 只包含一次 `/product/yourbuddy`。
- [ ] canonical 为 `https://aispeeds.me/product/yourbuddy`。
- [ ] `aispeeds.me` 与 `cc.xiaohui.cool` 均返回 `200`。
- [ ] 上游仍未发送阻止嵌入的响应头。
- [ ] Harbor、原生首页和其他产品/工具路由没有回归。

## 11. 发布与回滚

### 11.1 发布

将 UI 文案、Feature、导航、route 和文档放在同一原子提交中，通过现有 `main`
CI 部署到 Cloudflare
Workers。部署后使用真实 Chromium 验证生产 URL，不能只依赖静态构建产物或 `curl`。

### 11.2 回滚

完整回滚：revert 该原子提交，删除 route、Feature、导航 ID 和 UI 文案。

紧急下架发现入口但暂时保留 URL：

1. 从产品导航移除 `yourbuddy`；
2. 将 `searchable`、`includeInSitemap` 和 `showInHomeMenu` 设为 `false`；
3. 保留 `isPublic: true` 和 route，避免已有链接立刻失效。

不能只把仍被导航引用的 Feature 改成
`isPublic: false`，否则 registry 校验会失败。

## 12. 最终决策

第一阶段采用 `(immersive)` 全屏跨域 iframe，把 YourBuddy 接入
`/product/yourbuddy`，并通过 Feature registry 统一驱动产品导航、搜索和 Sitemap。

该方案已经通过响应头、资源路径和真实 Chromium 嵌入验证，能以最小改动满足入口与地址栏要求。反向代理、静态镜像、首页大型故事卡和 iframe 深链同步均保留为有明确业务需求后的独立演进项，不进入本次最小实施范围。
