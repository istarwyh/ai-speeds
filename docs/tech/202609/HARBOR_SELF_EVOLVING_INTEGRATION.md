# Harbor Self-Evolving 产品接入技术方案

## 1. 结论

第一阶段推荐采用 **“AI Speeds 路由壳 + 跨域全屏 iframe”**：

- 用户从 AI Speeds 菜单选择 `Harbor Self-Evolving`；
- 浏览器进入 `https://aispeeds.me/product/harbor-self-evolving`；
- 该 Next.js 页面使用全屏 iframe 加载
  `https://istarwyh.github.io/harbor-self-evolving/zh/`；
- 地址栏始终保留 AI Speeds 的产品 URL，Harbor 网站仍由原仓库独立发布。

这是当前满足需求且改动最小、风险最低的方案。目标站点已经实测可以被 iframe 加载，而且它大量使用
`/harbor-self-evolving/...` 根绝对路径；iframe 会让这些资源继续在 GitHub
Pages 域名下正确解析，避免反向代理需要进行 HTML、CSS、导航和语言路径重写。

不推荐仅使用 redirect，因为 redirect 会将地址栏切换到 GitHub
Pages；也不推荐第一阶段直接使用外部 rewrite，因为虽然 Next.js
rewrite 可以隐藏目标地址，但目标 HTML 的静态资源与站内链接并不以
`/product/harbor-self-evolving`
为基路径，无法仅靠一条 rewrite 获得完整、稳定的同域体验。

## 2. 需求与边界

### 2.1 用户体验目标

1. 首页菜单新增 `Harbor Self-Evolving`。
2. 点击后打开 `/product/harbor-self-evolving`。
3. 页面视觉内容就是 Harbor Self-Evolving 中文站。
4. 用户刷新该 URL 后仍可正常打开。
5. 不要求将 Harbor 网站源码迁入 AI Speeds，也不阻塞 Harbor 独立发布。

### 2.2 第一阶段不解决的问题

- 不将 iframe 内部页面路径同步到父页面地址栏。
- 不把 Harbor 页面正文作为 AI Speeds 页面 DOM 的一部分。
- 不让 AI Speeds 操作 iframe 内部 DOM、主题或滚动状态。
- 不为 Harbor 网站提供 AI Speeds 同源 Cookie、登录态或 Service Worker。
- 不改变 Harbor 网站当前 GitHub Pages 发布流程。

如果后续要求 SEO 归属 AI
Speeds、可分享的站内深链、同域登录或统一埋点，应升级到第 8 节的“同源静态托管”方案。

## 3. 已核实的现状

核实时间：`2026-09-20T02:02:32Z`。

### 3.1 AI Speeds

- 项目使用 Next.js 15 App Router，并通过 OpenNext 部署到 Cloudflare Workers。
- `wrangler.toml` 将 `aispeeds.me` 和 `cc.xiaohui.cool` 绑定到同一个 Worker。
- 首页浮动菜单由 `src/config/features.ts` 统一配置：
  - `section` 在首页内部切换；
  - `route` 使用 Next.js `Link` 进入独立路由。
- `src/components/HomePageWithNav.tsx`
  已存在全屏 iframe 的使用先例，但当前 iframe 加载的是同源静态首页。
- `src/app/sitemap.ts` 会自动收录 `featurePages` 中公开的 route。
- 当前 `next.config.mjs` 没有全站 Content-Security-Policy，也没有限制
  `frame-src`。
- 目标路由当前返回 `404`，不存在旧页面兼容问题。

### 3.2 Harbor Self-Evolving 站点

目标：`https://istarwyh.github.io/harbor-self-evolving/zh/`。

核实结果：

- 无尾斜杠 `/zh` 会 `301` 到 `/zh/`，iframe 应直接使用带尾斜杠 URL。
- 最终页面返回 `200`。
- 响应没有 `X-Frame-Options`。
- 响应没有 CSP `frame-ancestors`。
- 已在真实 Chromium 中验证 iframe `load` 成功。
- 站点由 Hugo 0.165.0 生成，当前 `baseURL` 为：
  `https://istarwyh.github.io/harbor-self-evolving/`。
- 它是多页静态站，不是 SPA fallback；未知路径会返回真实 `404`。
- HTML 中的 CSS、JavaScript、图片、搜索索引和站内链接大量使用：
  `/harbor-self-evolving/...`。
- 站点当前具有中文、英文、文档、博客、搜索、主题切换等内部导航。
- 当前部署来源可在
  [Pages workflow](https://github.com/istarwyh/harbor-self-evolving/blob/main/.github/workflows/website-pages.yml)
  和
  [Hugo 配置](https://github.com/istarwyh/harbor-self-evolving/blob/main/website/hugo.yaml)
  中核对。

上述事实说明当前适合跨域 iframe，但不适合未经上游配合就直接挂到新的子路径。

## 4. 推荐架构

```text
用户
  │
  │ 点击首页菜单
  ▼
https://aispeeds.me/product/harbor-self-evolving
  │
  │ Next.js App Router 渲染产品壳页面
  ▼
全屏 iframe
  │
  │ HTTPS 跨域加载
  ▼
https://istarwyh.github.io/harbor-self-evolving/zh/
  │
  ├── /harbor-self-evolving/scss/...
  ├── /harbor-self-evolving/js/...
  ├── /harbor-self-evolving/images/...
  └── /harbor-self-evolving/zh/docs/...
```

关键点：iframe 内文档的 origin 仍是
`istarwyh.github.io`，因此 Harbor 网站现有的根绝对路径不需要改写。

## 5. 代码设计

### 5.1 菜单文案

修改 `src/config/ui-texts.ts`：

```typescript
NAVIGATION: {
  // ...
  HARBOR_SELF_EVOLVING: 'Harbor Self-Evolving',
},
```

菜单文案继续由现有 UI 文案单一数据源维护，不在组件中硬编码。

### 5.2 产品路由配置

修改 `src/config/features.ts`，新增 route：

```typescript
{
  id: 'harbor-self-evolving',
  title: UI_TEXTS.NAVIGATION.HARBOR_SELF_EVOLVING,
  href: '/product/harbor-self-evolving',
  kind: 'route',
  isPublic: true,
  showInHomeMenu: true,
  sitemapPriority: 0.7,
  sitemapChangeFrequency: 'weekly',
},
```

这样可直接复用 `homeUtilityFeatures` 和现有 `<Link>` 导航，不需要在
`HomePageWithNav.tsx` 中增加产品专用判断。

该 route 默认会被 `src/app/sitemap.ts`
收录。若未来决定不给 iframe 壳页面做索引，应给 `FeaturePage` 增加独立的
`includeInSitemap` 字段，不要把 `isPublic` 错误地改成 `false`。

### 5.3 产品页面

新增：

`src/app/(main)/product/harbor-self-evolving/page.tsx`

建议实现：

```tsx
import type { Metadata } from 'next';

const HARBOR_SELF_EVOLVING_URL =
  'https://istarwyh.github.io/harbor-self-evolving/zh/';

export const metadata: Metadata = {
  title: 'Harbor Self-Evolving | AI Speeds',
  description: '面向 DeepSeek Harness Agent 的持续评测与受控自进化。',
  alternates: {
    canonical: 'https://aispeeds.me/product/harbor-self-evolving',
  },
};

export default function HarborSelfEvolvingPage() {
  return (
    <main className='h-[100dvh] w-full overflow-hidden bg-bg-primary'>
      <iframe
        src={HARBOR_SELF_EVOLVING_URL}
        title='Harbor Self-Evolving'
        className='block h-full w-full border-0'
        referrerPolicy='strict-origin-when-cross-origin'
      />
      <noscript>
        <a href={HARBOR_SELF_EVOLVING_URL}>打开 Harbor Self-Evolving 中文站</a>
      </noscript>
    </main>
  );
}
```

说明：

- route group `(main)` 不会出现在 URL 中，因此最终 URL 正确。
- 使用 `100dvh`，避免移动浏览器地址栏导致 `100vh` 高度不准确。
- 页面本身不需要 `'use client'`，可保持为 Server Component。
- `title` 用于 iframe 无障碍识别。
- 不使用 `loading='lazy'`，因为 iframe 是页面唯一主体。
- 当前不增加
  `sandbox`。目标是同一维护者控制的可信产品站，跨域同源策略已经阻止其直接访问父页面 DOM；贸然添加 sandbox 可能破坏搜索、主题、本地存储、新窗口链接或未来下载能力。
- 不给 iframe 添加宽泛的 `allow`
  权限；后续只有在产品确实使用剪贴板、全屏等能力时才按需开放。

### 5.4 可选的配置收敛

如果未来会接入多个外部产品，建议新增 `src/config/products.ts`：

```typescript
export const products = {
  harborSelfEvolving: {
    id: 'harbor-self-evolving',
    path: '/product/harbor-self-evolving',
    embedUrl: 'https://istarwyh.github.io/harbor-self-evolving/zh/',
    renderMode: 'external-frame',
  },
} as const;
```

第一期只有一个外部产品时可以暂不抽象，避免过度设计；但 URL 至少应在页面模块内定义为常量，不应散落在多个组件中。

## 6. 安全、SEO 与可观测性

### 6.1 安全

当前目标响应允许 iframe。上线前仍需再次检查：

```bash
curl -sSI https://istarwyh.github.io/harbor-self-evolving/zh/
```

重点关注：

- `X-Frame-Options`；
- `Content-Security-Policy` 中的 `frame-ancestors`；
- AI Speeds 未来 CSP 中的 `frame-src`。

如果 AI Speeds 后续增加 CSP，需要至少包含：

```text
frame-src 'self' https://istarwyh.github.io;
```

不要依赖 `Access-Control-Allow-Origin`
判断能否 iframe；CORS 与 frame 嵌入是不同机制。

### 6.2 SEO

第一阶段的 AI
Speeds 页面是展示壳，搜索引擎不会把 iframe 正文等同于父页面正文。建议：

- 给父页面提供准确的 title、description 和 self canonical；
- 允许 sitemap 收录品牌入口 URL；
- 接受 Harbor 正文仍主要由 GitHub Pages URL 获得索引；
- 不在父页面复制隐藏正文，以免产生隐藏内容或双份内容维护问题。

如果业务目标变成“所有 Harbor 文档都由 aispeeds.me 收录”，iframe 不再适用，应采用第 8.2 节方案。

### 6.3 可观测性

父页面只能稳定观测“进入产品路由”，无法直接读取跨域 iframe 内部点击。第一阶段建议：

- 记录 `/product/harbor-self-evolving` 的页面访问；
- Harbor 站点继续使用自己的访问统计；
- 如需跨域统一漏斗，由双方约定固定 schema 的 `postMessage`，并严格校验
  `event.origin === 'https://istarwyh.github.io'`，不要开放任意消息执行能力。

## 7. 已知限制与失败策略

| 场景                                            | 影响                         | 第一阶段处理                            |
| ----------------------------------------------- | ---------------------------- | --------------------------------------- |
| GitHub Pages 不可用                             | iframe 内容无法加载          | 保留 noscript/外部链接；监控上游可用性  |
| 上游新增 `X-Frame-Options` 或 `frame-ancestors` | 浏览器拒绝嵌入               | 自动化检查响应头；触发升级方案          |
| iframe 内进入文档子页                           | 父地址栏仍是产品根 URL       | 第一阶段接受；深链需求升级到同源托管    |
| 用户分享父页面 URL                              | 只能分享 Harbor 中文首页状态 | 第一阶段接受                            |
| 跨域统计                                        | 父页面无法读取内部行为       | 双站分别统计，或显式 `postMessage` 协议 |
| 第三方 Cookie/登录                              | 受浏览器策略限制             | 当前静态产品站不依赖登录；未来重新评估  |
| JavaScript 禁用                                 | iframe 不一定提供预期交互    | `noscript` 提供直接访问链接             |

建议在 UI 上预留“在新窗口打开”能力，但不要默认覆盖页面或加入永久顶栏，以免破坏“页面就是 Harbor 中文站”的产品目标。若增加错误提示，不要依赖 iframe
`onError` 作为唯一判据，因为跨域导航失败并不总会可靠触发该事件。

## 8. 备选方案比较

### 8.1 外部 redirect：不采用

```text
/product/harbor-self-evolving
  └── 302/307 → https://istarwyh.github.io/harbor-self-evolving/zh/
```

优点是最简单；缺点是地址栏会变化，不满足核心需求。

### 8.2 构建期同步并同源静态托管：长期推荐

适用于以下新增要求：

- AI Speeds URL 需要可索引的正文；
- 每篇 Harbor 文档需要独立可分享 URL；
- 需要同源埋点、导航或更强的页面控制；
- 不希望运行时依赖 GitHub Pages。

推荐方式是复用当前 `@cc4pm/homepage` 的成熟思路：

1. Harbor 仓库以固定版本生成 Hugo 静态产物；
2. 以 npm 包或不可变 CI artifact 发布，不在 AI Speeds 构建时临时抓取 `main`；
3. Harbor 构建时将 `baseURL` 设置为
   `https://aispeeds.me/product/harbor-self-evolving/`；
4. AI Speeds 锁定版本并在构建前复制产物；
5. 上游发布后通过 `repository_dispatch` 更新下游版本；
6. 用 Cloudflare 静态资产交付，并验证目录 index、404、语言路由和缓存。

该方案的发布可重复性和 SEO 最好，但需要改造上游发布流程，实施成本高于 iframe。

### 8.3 Next.js 外部 rewrite：暂不采用

Next.js 官方支持将 rewrite 的 destination 指向外部 URL，并保持用户看到的源 URL。但当前 Harbor
HTML 使用 `/harbor-self-evolving/...` 根绝对路径，且中文路由自带 `/zh/`：

- 单条 rewrite 只能代理入口 HTML，不能自动把所有资源改到新的产品前缀；
- 站内点击会进入 `/harbor-self-evolving/zh/...`，离开期望的 `/product/...`
  命名空间；
- canonical、hreflang、搜索索引、action manifest 等仍指向 GitHub Pages；
- 运行时字符串替换 HTML 还需继续处理 CSS URL、JSON、redirect
  `Location`、缓存与完整性校验；
- 实测 AI Speeds 当前会把带尾斜杠目录 `308` 到无尾斜杠，而 GitHub
  Pages 会把无尾斜杠目录 `301`
  回带尾斜杠；未经验证的 rewrite/代理可能形成重定向循环或破坏目录语义。

如果代理使用完全相同的 `/harbor-self-evolving/`
前缀，现有静态资源路径会更容易兼容，但这仍不满足本需求指定的
`/product/harbor-self-evolving` 命名空间。只有在 Harbor 上游先原生支持目标 base
path 后，才考虑简单 rewrite。Next.js rewrite 行为参考：
[Next.js rewrites 官方文档](https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites)。

### 8.4 Cloudflare Worker 反向代理：暂不采用

专用 Worker 可以 fetch 上游并修改响应、路径和缓存，但会引入：

- HTML/CSS/JSON 多类型重写；
- redirect、canonical、hreflang 与 Cookie 处理；
- 当前 OpenNext custom domain 与更细粒度 route 的部署协调；
- 必须在 Next/OpenNext 尾斜杠规范化之前接管目标前缀；
- 必须保留上游真实状态码，并覆盖 HTML、CSS、JavaScript、字体、图片、搜索 JSON、RSS 和 Markdown 等资源；
- 缓存键、TTL、上游故障和内容安全责任；
- SSRF/open proxy 防护。

如果改写 JavaScript 或 CSS 字节，还会使上游现有 SRI 校验值失效。除非必须运行时镜像上游，不应为静态产品站先引入这层复杂度。Cloudflare 对 Worker 子请求缓存的说明参考：
[Cache using fetch](https://developers.cloudflare.com/workers/examples/cache-using-fetch/)。

## 9. 实施步骤

### Phase 1：iframe 接入

1. 在 `src/config/ui-texts.ts` 增加菜单文案。
2. 在 `src/config/features.ts` 增加产品 route。
3. 新建 `src/app/(main)/product/harbor-self-evolving/page.tsx`。
4. 补充 metadata、iframe title、referrer policy 和无脚本链接。
5. 执行类型检查和构建验证。
6. 使用 Cloudflare preview 验证，不启动与现有生产域无关的替代服务。
7. 部署后检查真实 `aispeeds.me` URL。

### Phase 2：可靠性增强

1. 在 CI 中检查上游 `200`、`X-Frame-Options` 和 `frame-ancestors`。
2. 增加父路由访问统计。
3. 根据实际反馈决定是否增加“新窗口打开”按钮。
4. 若上游开始禁止 iframe，切换到构建期同源静态托管，而不是绕过安全响应头。

### Phase 3：可选的同源迁移

1. 在 Harbor 仓库增加 AI Speeds baseURL 构建目标。
2. 产出带版本的静态发布物。
3. 建立跨仓库版本同步。
4. 迁移到 `/product/harbor-self-evolving/**` 深链。
5. 增加旧入口、canonical 和 sitemap 迁移策略。

## 10. 验收清单

### 功能

- [ ] 首页菜单显示 `Harbor Self-Evolving`。
- [ ] 点击后地址栏为 `/product/harbor-self-evolving`。
- [ ] 刷新或直接访问该 URL 返回 `200`。
- [ ] Harbor 中文首页完整渲染。
- [ ] CSS、JavaScript、图片和搜索索引加载成功。
- [ ] 文档、博客、语言和主题切换可用。
- [ ] iframe 内导航不会将顶层页面跳转到 GitHub Pages。

### 体验

- [ ] 桌面端无双滚动条或页面白边。
- [ ] iOS Safari、Android Chrome 的可视高度正常。
- [ ] iframe 有明确的无障碍 title。
- [ ] 键盘焦点可进入 Harbor 页面并正常操作。
- [ ] GitHub 新窗口链接行为正常。

### 工程

- [ ] `pnpm run typecheck` 通过。
- [ ] `pnpm run build` 通过。
- [ ] `pnpm run cf:build` 通过。
- [ ] Cloudflare preview 中路由和 iframe 正常。
- [ ] `sitemap.xml` 包含预期 URL。
- [ ] `aispeeds.me` 与 `cc.xiaohui.cool` 行为符合预期。
- [ ] 上游响应仍未设置阻止嵌入的响应头。

## 11. 预计改动范围

第一阶段只需修改或新增：

```text
src/config/ui-texts.ts
src/config/features.ts
src/app/(main)/product/harbor-self-evolving/page.tsx
```

当前不需要修改：

```text
next.config.mjs
open-next.config.ts
wrangler.toml
```

如果未来添加全站 CSP，再修改 `next.config.mjs` 或对应的响应头配置，将
`https://istarwyh.github.io` 加入 `frame-src`。

## 12. 最终决策

采用 iframe 作为第一阶段正式方案，并将“构建期同源静态托管”保留为出现 SEO、深链、同源能力或上游禁止嵌入时的升级路径。

该决策利用了现有 App
Router、菜单 SSOT 与全屏 iframe 模式，不修改 Cloudflare 路由拓扑，也不要求 Harbor 站点立即重构 baseURL，能够以最小变更实现指定的用户入口和地址栏行为。
