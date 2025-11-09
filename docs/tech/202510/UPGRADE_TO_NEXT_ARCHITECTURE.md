# Claude Code Router 升级到 Next.js + OpenNext Cloudflare 架构方案

> **调研日期**: 2025-10-05  
> **目标**: 将当前 Cloudflare Workers 项目升级到 Next.js 15 + OpenNext
> Cloudflare 架构  
> **参考项目**: shipany-2.6.0-cloudflare

---

## 📋 执行摘要

### 升级核心价值

| 维度           | 当前架构              | 目标架构                        | 提升         |
| -------------- | --------------------- | ------------------------------- | ------------ |
| **开发效率**   | 手动路由 + 字符串模板 | Next.js App Router + React 组件 | **10x**      |
| **类型安全**   | 部分 TypeScript       | 全栈 TypeScript + 严格模式      | **100%**     |
| **UI 开发**    | 原生 CSS + 手动 DOM   | Tailwind + shadcn/ui + React    | **5x**       |
| **功能完整性** | API 代理              | API + 认证 + 数据库 + 支付      | **全栈**     |
| **部署方式**   | Cloudflare Workers    | Workers + Edge Runtime + SSR    | **现代化**   |
| **可维护性**   | 中等                  | 高                              | **显著提升** |

### 关键决策点

1. ✅ **采用 Next.js 15** - 最新稳定版，完整 App Router 支持
2. ✅ **使用 @opennextjs/cloudflare** - 官方 Cloudflare 适配器
3. ✅ **保留核心 API 功能** - Anthropic ↔ OpenAI 格式转换
4. ✅ **渐进式迁移** - 分阶段实施，降低风险
5. ✅ **学习 shipany 最佳实践** - 成熟的生产架构

---

## 🔍 深度架构对比分析

### 当前项目 (shipany-2.6.0-cloudflare) 的优势

#### 1. **现代化框架栈**

- **Next.js 15.2.3** - 最新版本的 React 框架
- **React 19.0.0** - 最新的 React 版本
- **TypeScript 5.7.2** - 强类型支持
- **Tailwind CSS 4.1.4** - 现代化 CSS 框架

#### 2. **完整的全栈能力**

```typescript
// shipany 使用 Next.js App Router 架构
src/app/
  ├── api/                    # API 路由
  │   ├── auth/              # 认证 API
  │   ├── checkout/          # 支付 API
  │   ├── demo/              # 演示 API
  │   └── ...
  ├── [locale]/              # 国际化路由
  └── layout.tsx             # 布局组件
```

vs

```typescript
// claude-code-router 使用传统 Cloudflare Workers
src/server/index.ts         # 单一入口文件
  - 手动路由匹配
  - 字符串模板 HTML
  - 无组件化
```

#### 3. **OpenNext Cloudflare 集成**

- **@opennextjs/cloudflare 1.2.1** - 专门为 Cloudflare 优化的 Next.js 适配器
- 自动处理静态资源、服务端渲染、API 路由
- 支持增量静态再生成 (ISR)
- 完整的 Edge Runtime 支持

```json
// package.json
"scripts": {
  "cf:preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
  "cf:deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy",
}
```

#### 4. **数据库集成 (Drizzle ORM)**

```typescript
// src/db/config.ts
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

- 类型安全的数据库操作
- 自动迁移管理
- 支持 PostgreSQL
- 完整的 ORM 功能

#### 5. **认证系统 (NextAuth.js 5.0)**

```typescript
// src/auth/config.ts
- Google OAuth
- GitHub OAuth
- Google One Tap
- JWT 会话管理
- 自动用户管理
```

#### 6. **国际化 (next-intl)**

```typescript
// src/middleware.ts
export default createMiddleware(routing);

// 支持多语言
('/(en|en-US|zh|zh-CN|zh-TW|zh-HK|zh-MO|ja|ko|ru|fr|de|ar|es|it)/:path*');
```

#### 7. **AI SDK 集成**

```typescript
// 多个 AI 提供商支持
"@ai-sdk/deepseek": "^0.1.11",
"@ai-sdk/openai": "^1.1.13",
"@ai-sdk/replicate": "^0.1.10",
"@openrouter/ai-sdk-provider": "^0.0.6",
"ai": "^4.1.64",  // Vercel AI SDK
```

#### 8. **现代化 UI 组件库**

```typescript
// Radix UI + shadcn/ui
- 完整的无障碍组件
- 可定制的设计系统
- Framer Motion 动画
- 响应式设计
```

#### 9. **支付集成 (Stripe)**

```typescript
"@stripe/stripe-js": "^5.4.0",
"stripe": "^17.5.0",
```

#### 10. **文档系统 (Fumadocs)**

```typescript
"fumadocs-core": "^15.6.3",
"fumadocs-mdx": "^11.6.11",
"fumadocs-ui": "^15.6.3",
```

#### 11. **开发体验**

- **Turbopack** - 极速开发服务器
- **Bundle Analyzer** - 包大小分析
- **Hot Module Replacement** - 热更新
- **TypeScript 严格模式** - 类型安全

#### 12. **生产优化**

```javascript
// next.config.mjs
output: "standalone",           // 独立部署
reactStrictMode: false,         // 生产优化
experimental: { mdxRs: true },  // Rust MDX 编译器
```

---

### claude-code-router 的局限性

#### 1. **手动路由管理**

```typescript
// 需要手动匹配每个路由
if (url.pathname === '/home' && request.method === 'GET') {
  return new Response(indexHtml, { headers: { 'Content-Type': 'text/html' } });
}
```

#### 2. **字符串模板 HTML**

```typescript
// src/templates/index.ts
export const indexHtml = `<!DOCTYPE html>...`; // 难以维护
```

#### 3. **无组件化**

- 无法复用 UI 组件
- 无法使用 React 生态
- 无法使用现代 CSS 框架

#### 4. **无数据库集成**

- 无持久化存储
- 无用户管理
- 无状态管理

#### 5. **构建复杂**

```json
// 需要手动构建客户端脚本
"build:client": "node scripts/build-client-safe.cjs",
```

#### 6. **无 SSR/SSG**

- 只能提供静态 HTML
- 无服务端渲染
- 无增量静态生成

---

## 升级路径

### 阶段 1: 项目初始化

#### 1.1 创建新的 Next.js 项目

```bash
cd ~/Desktop/code-open
npx create-next-app@latest claude-code-router-next --typescript --tailwind --app --no-src-dir
cd claude-code-router-next
```

#### 1.2 安装核心依赖

```bash
# OpenNext Cloudflare
pnpm add @opennextjs/cloudflare

# 开发依赖
pnpm add -D wrangler cross-env
```

#### 1.3 配置 Next.js

```javascript
// next.config.mjs
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
};

export default nextConfig;

initOpenNextCloudflareForDev();
```

#### 1.4 创建 OpenNext 配置

```typescript
// open-next.config.ts
import { defineCloudflareConfig } from '@opennextjs/cloudflare';

export default defineCloudflareConfig({
  // 可选: 启用 R2 缓存
  // incrementalCache: r2IncrementalCache,
});
```

#### 1.5 配置 Wrangler

```toml
# wrangler.toml
name = "claude-code-router-next"
main = ".open-next/worker.js"
compatibility_date = "2025-03-01"
compatibility_flags = ["nodejs_compat", "global_fetch_strictly_public"]

[assets]
binding = "ASSETS"
directory = ".open-next/assets"

[observability]
enabled = true

[vars]
# 环境变量
```

#### 1.6 更新 package.json

```json
{
  "scripts": {
    "dev": "cross-env NODE_NO_WARNINGS=1 next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "cf:preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
    "cf:deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy"
  }
}
```

---

### 阶段 2: 迁移核心功能

#### 2.1 迁移 API 路由

**旧架构 (claude-code-router):**

```typescript
// src/server/index.ts
if (url.pathname === '/v1/messages' && request.method === 'POST') {
  const anthropicRequest = await request.json();
  const bearerToken = request.headers.get('x-api-key');

  const { provider, baseUrl } = selectProvider(env);
  const openaiRequest = formatAnthropicToOpenAI(
    anthropicRequest,
    provider,
    PROVIDER_CONFIGS,
  );

  const openaiResponse = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    },
    body: JSON.stringify(openaiRequest),
  });

  // ... 处理响应
}
```

**新架构 (Next.js App Router):**

```typescript
// app/api/v1/messages/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { formatAnthropicToOpenAI } from '@/lib/api/adapters/format';
import { streamOpenAIToAnthropic } from '@/lib/api/adapters/stream';
import { selectProvider } from '@/lib/api/providers';

export async function POST(request: NextRequest) {
  try {
    const anthropicRequest = await request.json();
    const bearerToken = request.headers.get('x-api-key');

    if (!bearerToken) {
      return NextResponse.json({ error: 'Missing API key' }, { status: 401 });
    }

    const { provider, baseUrl } = selectProvider(process.env);
    const openaiRequest = formatAnthropicToOpenAI(anthropicRequest, provider);

    const openaiResponse = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(openaiRequest),
    });

    if (!openaiResponse.ok) {
      const error = await openaiResponse.text();
      return NextResponse.json({ error }, { status: openaiResponse.status });
    }

    if (openaiRequest.stream) {
      const anthropicStream = streamOpenAIToAnthropic(
        openaiResponse.body as ReadableStream,
        openaiRequest.model,
      );

      return new NextResponse(anthropicStream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive',
        },
      });
    }

    const openaiData = await openaiResponse.json();
    const anthropicResponse = formatOpenAIToAnthropic(
      openaiData,
      openaiRequest.model,
    );

    return NextResponse.json(anthropicResponse);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export const runtime = 'edge'; // 使用 Edge Runtime
```

#### 2.2 迁移图片代理

**旧架构:**

```typescript
// src/server/routes/imgProxy.ts
export async function handleImgProxy(
  url: URL,
  request: Request,
  env: Env,
): Promise<Response> {
  // ... 实现
}
```

**新架构:**

```typescript
// app/api/img-proxy/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const src = searchParams.get('src');

  if (!src) {
    return NextResponse.json(
      { error: 'Missing src parameter' },
      { status: 400 },
    );
  }

  // 验证 URL
  let imageUrl: URL;
  try {
    imageUrl = new URL(src);
  } catch {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  // 验证协议
  if (imageUrl.protocol !== 'https:') {
    return NextResponse.json(
      { error: 'Only HTTPS URLs are allowed' },
      { status: 400 },
    );
  }

  // 白名单检查
  const whitelist = process.env.IMAGE_PROXY_WHITELIST || '*';
  if (whitelist !== '*') {
    const allowedHosts = whitelist.split(',').map(h => h.trim());
    if (!allowedHosts.includes(imageUrl.hostname)) {
      return NextResponse.json({ error: 'Host not allowed' }, { status: 403 });
    }
  }

  try {
    const imageResponse = await fetch(imageUrl.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ImageProxy/1.0)',
      },
    });

    if (!imageResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch image' },
        { status: imageResponse.status },
      );
    }

    const contentType = imageResponse.headers.get('content-type');
    if (!contentType?.startsWith('image/')) {
      return NextResponse.json({ error: 'Not an image' }, { status: 400 });
    }

    const imageBuffer = await imageResponse.arrayBuffer();

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': `public, max-age=${process.env.IMAGE_PROXY_CACHE_TTL || '86400'}`,
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Image proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to proxy image' },
      { status: 500 },
    );
  }
}

export const runtime = 'edge';
```

#### 2.3 迁移前端页面

**旧架构 (字符串模板):**

```typescript
// src/templates/index.ts
export const indexHtml = `
<!DOCTYPE html>
<html>
<head>
  <title>Claude Code Router</title>
  <style>/* ... */</style>
</head>
<body>
  <div id="app"></div>
  <script>/* ... */</script>
</body>
</html>
`;
```

**新架构 (React 组件):**

```typescript
// app/page.tsx
import { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Sidebar } from '@/components/sidebar';
import { MainContent } from '@/components/main-content';

export const metadata: Metadata = {
  title: 'Claude Code Router',
  description: 'Universal Claude API Proxy',
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navigation />
        <MainContent />
      </div>
    </div>
  );
}
```

```typescript
// components/navigation.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('get-started');

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4 py-4">
          <Button
            variant={activeSection === 'get-started' ? 'default' : 'ghost'}
            onClick={() => setActiveSection('get-started')}
          >
            Get Started
          </Button>
          <Button
            variant={activeSection === 'best-practices' ? 'default' : 'ghost'}
            onClick={() => setActiveSection('best-practices')}
          >
            Best Practices
          </Button>
          {/* ... 更多导航项 */}
        </div>
      </div>
    </nav>
  );
}
```

---

### 阶段 3: 添加高级功能

#### 3.1 添加数据库支持

```bash
pnpm add drizzle-orm postgres
pnpm add -D drizzle-kit
```

```typescript
// lib/db/config.ts
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './lib/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

```typescript
// lib/db/schema.ts
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  uuid: uuid('uuid').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  nickname: text('nickname'),
  avatar_url: text('avatar_url'),
  created_at: timestamp('created_at').defaultNow(),
});

export const apiKeys = pgTable('api_keys', {
  id: uuid('id').primaryKey().defaultRandom(),
  user_uuid: uuid('user_uuid').references(() => users.uuid),
  key: text('key').notNull().unique(),
  name: text('name'),
  created_at: timestamp('created_at').defaultNow(),
});
```

#### 3.2 添加认证系统

```bash
pnpm add next-auth@beta
```

```typescript
// auth.ts
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
```

```typescript
// app/api/auth/[...nextauth]/route.ts
import { handlers } from '@/auth';

export const { GET, POST } = handlers;
export const runtime = 'edge';
```

#### 3.3 添加国际化

```bash
pnpm add next-intl
```

```typescript
// i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh', 'ja', 'ko'],
  defaultLocale: 'en',
});
```

```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(en|zh|ja|ko)/:path*'],
};
```

---

### 阶段 4: UI 组件化

#### 4.1 安装 shadcn/ui

```bash
pnpm dlx shadcn@latest init
```

#### 4.2 添加组件

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add dropdown-menu
pnpm dlx shadcn@latest add tabs
```

#### 4.3 创建布局组件

```typescript
// components/layout/app-layout.tsx
import { ReactNode } from 'react';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { Footer } from './footer';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
```

---

### 阶段 5: 部署配置

#### 5.1 环境变量

```bash
# .env.local
DATABASE_URL="postgresql://..."
AUTH_SECRET="your-secret"
AUTH_GOOGLE_ID="..."
AUTH_GOOGLE_SECRET="..."
AUTH_GITHUB_ID="..."
AUTH_GITHUB_SECRET="..."

# API 提供商
OPENAI_BASE_URL="https://api.openai.com/v1"
DEEPSEEK_BASE_URL="https://api.deepseek.com/v1"
OPENROUTER_BASE_URL="https://openrouter.ai/api/v1"

# 图片代理
IMAGE_PROXY_WHITELIST="*"
IMAGE_PROXY_CACHE_TTL="86400"
```

#### 5.2 Cloudflare 部署

```bash
# 构建
pnpm run build

# 预览
pnpm run cf:preview

# 部署
pnpm run cf:deploy
```

#### 5.3 配置 Cloudflare Bindings

```toml
# wrangler.toml
[[d1_databases]]
binding = "DB"
database_name = "claude-router-db"
database_id = "your-database-id"

[[kv_namespaces]]
binding = "CACHE"
id = "your-kv-id"

[[r2_buckets]]
binding = "ASSETS"
bucket_name = "your-bucket"
```

---

## 迁移检查清单

### 功能迁移

- [ ] API 路由 (`/v1/messages`)
- [ ] 图片代理 (`/img-proxy`)
- [ ] 健康检查 (`/__test/health`)
- [ ] 静态页面 (`/home`, `/terms`, `/privacy`)
- [ ] Markdown 文件服务

### 新增功能

- [ ] 数据库集成
- [ ] 用户认证
- [ ] 国际化
- [ ] UI 组件库
- [ ] 支付集成 (可选)
- [ ] 文档系统 (可选)

### 配置

- [ ] Next.js 配置
- [ ] OpenNext 配置
- [ ] Wrangler 配置
- [ ] TypeScript 配置
- [ ] Tailwind 配置

### 测试

- [ ] API 端点测试
- [ ] 认证流程测试
- [ ] 图片代理测试
- [ ] 部署测试

---

## 性能优化建议

### 1. 启用 R2 缓存

```typescript
// open-next.config.ts
import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import r2IncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache';

export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
});
```

### 2. 使用 Edge Runtime

```typescript
// app/api/*/route.ts
export const runtime = 'edge';
```

### 3. 静态生成

```typescript
// app/page.tsx
export const dynamic = 'force-static';
export const revalidate = 3600; // 1 hour
```

### 4. 图片优化

```typescript
// next.config.mjs
images: {
  formats: ['image/avif', 'image/webp'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**',
    },
  ],
},
```

---

## 总结

### shipany-2.6.0-cloudflare 的核心优势:

1. **现代化全栈框架** - Next.js 15 + React 19
2. **完整的开发生态** - TypeScript, Tailwind, shadcn/ui
3. **生产级功能** - 认证, 数据库, 支付, 国际化
4. **Cloudflare 优化** - OpenNext 适配器, Edge Runtime
5. **开发体验** - Turbopack, HMR, 类型安全
6. **可扩展性** - 组件化, 模块化, 可维护

### 升级收益:

- ✅ **10倍开发效率** - 组件化 vs 字符串模板
- ✅ **类型安全** - TypeScript 全栈
- ✅ **SEO 优化** - SSR/SSG
- ✅ **用户体验** - React 交互 + 现代 UI
- ✅ **可维护性** - 清晰的项目结构
- ✅ **生态系统** - npm 包生态

### 建议:

**立即开始迁移!** 新架构将为项目带来质的飞跃。

---

## 🎯 详细迁移实施方案

### 阶段 0: 准备工作 (1-2天)

#### 0.1 环境准备

```bash
# 确保工具版本
node --version  # >= 18.0.0
pnpm --version  # >= 9.0.0
wrangler --version  # >= 4.0.0

# 备份当前项目
cd ~/Desktop/code-open
cp -r claude-code-router claude-code-router-backup
```

#### 0.2 学习 shipany 架构

- [ ] 阅读 `/Users/mac/Desktop/code-open/shipany-2.6.0-cloudflare/CLAUDE.md`
- [ ] 研究目录结构 `src/app/`, `src/components/`, `src/lib/`
- [ ] 理解 OpenNext Cloudflare 工作原理
- [ ] 熟悉 Next.js 15 App Router 模式

#### 0.3 创建迁移分支

```bash
cd claude-code-router
git checkout -b feat/migrate-to-nextjs
git push -u origin feat/migrate-to-nextjs
```

---

### 阶段 1: Next.js 项目初始化 (2-3天)

#### 1.1 创建新项目结构

```bash
# 在当前项目中初始化 Next.js
pnpm create next-app@latest . --typescript --tailwind --app --no-src-dir
```

**选择配置:**

- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ App Router
- ❌ src/ directory (使用根目录)
- ✅ Import alias (@/\*)

#### 1.2 安装核心依赖

```bash
# OpenNext Cloudflare 适配器
pnpm add @opennextjs/cloudflare

# 开发工具
pnpm add -D wrangler@latest cross-env

# UI 组件库
pnpm add @radix-ui/react-slot class-variance-authority clsx tailwind-merge

# 工具库
pnpm add lucide-react
```

#### 1.3 配置文件设置

**next.config.mjs:**

```javascript
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
```

**open-next.config.ts:**

```typescript
import { defineCloudflareConfig } from '@opennextjs/cloudflare';

export default defineCloudflareConfig({
  // 可选: 启用 R2 缓存
  // incrementalCache: r2IncrementalCache,
});
```

**wrangler.toml:**

```toml
name = "claude-code-router"
main = ".open-next/worker.js"
compatibility_date = "2025-03-01"
compatibility_flags = ["nodejs_compat", "global_fetch_strictly_public"]

[assets]
binding = "ASSETS"
directory = ".open-next/assets"

[observability]
enabled = true
head_sampling_rate = 1

[vars]
IMAGE_PROXY_WHITELIST = "*"
IMAGE_PROXY_CACHE_TTL = "86400"
```

**package.json scripts:**

```json
{
  "scripts": {
    "dev": "cross-env NODE_NO_WARNINGS=1 next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "cf:build": "opennextjs-cloudflare build",
    "cf:preview": "pnpm cf:build && opennextjs-cloudflare preview",
    "cf:deploy": "pnpm cf:build && opennextjs-cloudflare deploy",
    "cf:typegen": "wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts"
  }
}
```

#### 1.4 TypeScript 配置

```json
// tsconfig.json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    },
    "target": "ES2017"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

#### 1.5 初始化 shadcn/ui

```bash
pnpm dlx shadcn@latest init

# 添加基础组件
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add tabs
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add dropdown-menu
```

---

### 阶段 2: 迁移核心 API 功能 (3-5天)

#### 2.1 创建 lib 目录结构

```bash
mkdir -p lib/{api,utils,types}
mkdir -p lib/api/{adapters,providers,types}
```

#### 2.2 迁移 API 适配器

**lib/api/adapters/format.ts:**

```typescript
// 从 src/services/llm-provider/adapters/format.ts 迁移
import { Provider } from '../types';
import { PROVIDER_CONFIGS } from '../providers';

export function formatAnthropicToOpenAI(
  anthropicRequest: any,
  provider: Provider,
  configs = PROVIDER_CONFIGS,
) {
  // 保持原有逻辑
  const config = configs[provider];
  // ... 实现
}

export function formatOpenAIToAnthropic(openaiData: any, model: string) {
  // 保持原有逻辑
  // ... 实现
}
```

**lib/api/adapters/stream.ts:**

```typescript
// 从 src/services/llm-provider/adapters/stream.ts 迁移
export function streamOpenAIToAnthropic(
  openaiStream: ReadableStream,
  model: string,
): ReadableStream {
  // 保持原有逻辑
  // ... 实现
}
```

#### 2.3 迁移 Provider 配置

**lib/api/providers/index.ts:**

```typescript
// 从 src/services/llm-provider/providers/index.ts 迁移
export const PROVIDER_CONFIGS = {
  deepseek: {
    defaultBaseUrl: 'https://api.deepseek.com',
    // ...
  },
  // ... 其他配置
};

export function selectProvider(env: Record<string, string | undefined>) {
  // 保持原有逻辑
  // ... 实现
}
```

#### 2.4 创建 API 路由

**app/api/v1/messages/route.ts:**

```typescript
import { NextRequest, NextResponse } from 'next/server';
import {
  formatAnthropicToOpenAI,
  formatOpenAIToAnthropic,
} from '@/lib/api/adapters/format';
import { streamOpenAIToAnthropic } from '@/lib/api/adapters/stream';
import { selectProvider } from '@/lib/api/providers';

export async function POST(request: NextRequest) {
  try {
    const anthropicRequest = await request.json();
    const bearerToken = request.headers.get('x-api-key');

    if (!bearerToken) {
      return NextResponse.json({ error: 'Missing API key' }, { status: 401 });
    }

    const { provider, baseUrl } = selectProvider(process.env);
    const openaiRequest = formatAnthropicToOpenAI(anthropicRequest, provider);

    const openaiResponse = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(openaiRequest),
    });

    if (!openaiResponse.ok) {
      const error = await openaiResponse.text();
      return NextResponse.json({ error }, { status: openaiResponse.status });
    }

    if (openaiRequest.stream) {
      const anthropicStream = streamOpenAIToAnthropic(
        openaiResponse.body as ReadableStream,
        openaiRequest.model,
      );

      return new NextResponse(anthropicStream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive',
        },
      });
    }

    const openaiData = await openaiResponse.json();
    const anthropicResponse = formatOpenAIToAnthropic(
      openaiData,
      openaiRequest.model,
    );

    return NextResponse.json(anthropicResponse);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export const runtime = 'edge';
```

**app/api/img-proxy/route.ts:**

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const src = searchParams.get('src');

  if (!src) {
    return NextResponse.json(
      { error: 'Missing src parameter' },
      { status: 400 },
    );
  }

  let imageUrl: URL;
  try {
    imageUrl = new URL(src);
  } catch {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  if (imageUrl.protocol !== 'https:') {
    return NextResponse.json(
      { error: 'Only HTTPS URLs are allowed' },
      { status: 400 },
    );
  }

  const whitelist = process.env.IMAGE_PROXY_WHITELIST || '*';
  if (whitelist !== '*') {
    const allowedHosts = whitelist.split(',').map(h => h.trim());
    if (!allowedHosts.includes(imageUrl.hostname)) {
      return NextResponse.json({ error: 'Host not allowed' }, { status: 403 });
    }
  }

  try {
    const imageResponse = await fetch(imageUrl.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ImageProxy/1.0)',
      },
    });

    if (!imageResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch image' },
        { status: imageResponse.status },
      );
    }

    const contentType = imageResponse.headers.get('content-type');
    if (!contentType?.startsWith('image/')) {
      return NextResponse.json({ error: 'Not an image' }, { status: 400 });
    }

    const imageBuffer = await imageResponse.arrayBuffer();

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': `public, max-age=${process.env.IMAGE_PROXY_CACHE_TTL || '86400'}`,
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Image proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to proxy image' },
      { status: 500 },
    );
  }
}

export const runtime = 'edge';
```

---

### 阶段 3: 迁移前端页面 (5-7天)

#### 3.1 创建布局系统

**app/layout.tsx:**

```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Claude Code Router',
  description: 'Universal Claude API Proxy - Make AI Speeds Us',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

#### 3.2 创建主页

**app/page.tsx:**

```typescript
import { Navigation } from '@/components/navigation';
import { GetStartedSection } from '@/components/sections/get-started';
import { BestPracticesSection } from '@/components/sections/best-practices';
import { ImplementationSection } from '@/components/sections/implementation';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <GetStartedSection />
        <BestPracticesSection />
        <ImplementationSection />
      </main>
    </div>
  );
}
```

#### 3.3 迁移导航组件

**components/navigation.tsx:**

```typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Navigation() {
  const [activeTab, setActiveTab] = useState('get-started');

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">Claude Code Router</span>
          </a>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
          <TabsList>
            <TabsTrigger value="get-started">如何用上 CC</TabsTrigger>
            <TabsTrigger value="best-practices">如何用好 CC</TabsTrigger>
            <TabsTrigger value="implementation">如何实现 CC</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </nav>
  );
}
```

#### 3.4 迁移内容组件

**components/sections/get-started.tsx:**

```typescript
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function GetStartedSection() {
  return (
    <section id="get-started" className="py-8">
      <h2 className="text-3xl font-bold mb-6">如何用上 CC</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 迁移现有的 provider 卡片 */}
        <Card>
          <CardHeader>
            <CardTitle>DeepSeek</CardTitle>
            <CardDescription>高性能 AI 模型</CardDescription>
          </CardHeader>
          <CardContent>
            {/* 内容 */}
          </CardContent>
        </Card>
        {/* ... 更多卡片 */}
      </div>
    </section>
  );
}
```

**components/sections/best-practices.tsx:**

```typescript
'use client';

import { Card } from '@/components/ui/card';
import { practices } from '@/lib/data/practices';

export function BestPracticesSection() {
  return (
    <section id="best-practices" className="py-8">
      <h2 className="text-3xl font-bold mb-6">如何用好 CC</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {practices.map((practice) => (
          <Card key={practice.id}>
            {/* 迁移现有的实践卡片 */}
          </Card>
        ))}
      </div>
    </section>
  );
}
```

#### 3.5 迁移 Markdown 内容系统

**lib/mdx/index.ts:**

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getMarkdownContent(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data,
    content,
  };
}
```

**app/practices/[slug]/page.tsx:**

```typescript
import { getMarkdownContent } from '@/lib/mdx';
import { MarkdownRenderer } from '@/components/markdown-renderer';

export default function PracticePage({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = getMarkdownContent(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
      <MarkdownRenderer content={content} />
    </div>
  );
}
```

---

### 阶段 4: 样式系统迁移 (2-3天)

#### 4.1 迁移设计令牌

**app/globals.css:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* 从 src/styles/designTokens.ts 迁移 */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    /* ... 更多令牌 */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... 暗色模式 */
  }
}
```

#### 4.2 配置 Tailwind

**tailwind.config.ts:**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // ... 从设计令牌映射
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
```

---

### 阶段 5: 测试与优化 (3-5天)

#### 5.1 本地测试

```bash
# 开发模式测试
pnpm dev

# 访问 http://localhost:3000
# 测试所有页面和功能
```

#### 5.2 Cloudflare 预览

```bash
# 构建并预览
pnpm cf:preview

# 测试 Edge Runtime 功能
# 验证 API 路由
# 检查静态资源
```

#### 5.3 性能优化

**启用 R2 缓存:**

```typescript
// open-next.config.ts
import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import r2IncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache';

export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
});
```

**优化图片加载:**

```typescript
// next.config.mjs
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
}
```

---

### 阶段 6: 部署上线 (1-2天)

#### 6.1 环境变量配置

```bash
# .env.production
NEXT_PUBLIC_WEB_URL="https://cc.xiaohui.cool"

# API 提供商
DEEPSEEK_BASE_URL="https://api.deepseek.com"
OPENAI_BASE_URL="https://api.openai.com/v1"
# ... 其他配置

# 图片代理
IMAGE_PROXY_WHITELIST="*"
IMAGE_PROXY_CACHE_TTL="86400"
```

#### 6.2 部署到 Cloudflare

```bash
# 最终构建
pnpm build

# 部署
pnpm cf:deploy

# 验证部署
curl https://cc.xiaohui.cool/api/v1/messages
```

#### 6.3 DNS 配置

- 更新 Cloudflare DNS 记录
- 配置自定义域名
- 启用 SSL/TLS

---

## 📊 迁移风险评估与缓解

### 高风险项

| 风险           | 影响 | 概率 | 缓解措施                            |
| -------------- | ---- | ---- | ----------------------------------- |
| API 兼容性破坏 | 高   | 中   | 保持原有 API 接口不变，添加完整测试 |
| 性能下降       | 中   | 低   | 使用 Edge Runtime，启用缓存优化     |
| 部署失败       | 高   | 低   | 充分测试 cf:preview，保留回滚方案   |
| 学习曲线       | 中   | 高   | 参考 shipany 示例，逐步学习         |

### 缓解策略

1. **保留旧版本** - 在新分支开发，主分支保持稳定
2. **并行运行** - 新旧版本同时部署，逐步切换流量
3. **完整测试** - API 测试、E2E 测试、性能测试
4. **文档完善** - 记录所有变更和配置

---

## ✅ 迁移检查清单

### 准备阶段

- [ ] 备份当前项目
- [ ] 学习 shipany 架构
- [ ] 创建迁移分支
- [ ] 准备开发环境

### 开发阶段

- [ ] Next.js 项目初始化
- [ ] 配置 OpenNext Cloudflare
- [ ] 迁移 API 路由
- [ ] 迁移前端组件
- [ ] 迁移样式系统
- [ ] 迁移 Markdown 内容

### 测试阶段

- [ ] 本地功能测试
- [ ] API 兼容性测试
- [ ] 性能基准测试
- [ ] Cloudflare 预览测试

### 部署阶段

- [ ] 环境变量配置
- [ ] 生产构建
- [ ] Cloudflare 部署
- [ ] DNS 配置
- [ ] 监控告警设置

---

## 🚀 shipany 最佳实践学习要点

### 1. 项目结构组织

```
✅ 学习点: 清晰的分层架构
- app/ - 路由和页面
- components/ - UI 组件
- lib/ - 业务逻辑
- types/ - 类型定义
```

### 2. API 路由设计

```typescript
✅ 学习点: Edge Runtime + 错误处理
export const runtime = 'edge';

// 统一的错误响应格式
return NextResponse.json({ error }, { status });
```

### 3. 组件设计模式

```typescript
✅ 学习点: 客户端/服务端组件分离
'use client';  // 仅在需要交互时使用

// 服务端组件用于数据获取
export default async function Page() {
  const data = await fetchData();
  return <ClientComponent data={data} />;
}
```

### 4. 类型安全

```typescript
✅ 学习点: 完整的 TypeScript 覆盖
// 定义清晰的接口
interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}
```

### 5. 性能优化

```typescript
✅ 学习点: 静态生成 + 增量更新
export const dynamic = 'force-static';
export const revalidate = 3600;
```

### 6. 国际化支持

```typescript
✅ 学习点: next-intl 集成
// middleware.ts
export default createMiddleware(routing);
```

### 7. 数据库集成

```typescript
✅ 学习点: Drizzle ORM + PostgreSQL
// 类型安全的数据库操作
const users = await db.select().from(usersTable);
```

### 8. 认证系统

```typescript
✅ 学习点: NextAuth.js v5
export const { auth, signIn, signOut } = NextAuth({
  providers: [Google, GitHub],
});
```

---

## 📈 预期收益

### 开发效率提升

- **组件复用**: React 组件 vs 字符串模板
- **类型安全**: 全栈 TypeScript 支持
- **开发工具**: Turbopack + HMR
- **预计提升**: **10x**

### 功能扩展能力

- **数据库**: 用户管理、数据持久化
- **认证**: OAuth 登录
- **支付**: Stripe 集成
- **国际化**: 多语言支持

### 用户体验改善

- **SSR/SSG**: SEO 优化
- **响应式**: 现代 UI 组件
- **性能**: Edge Runtime 优化
- **可访问性**: Radix UI 支持

### 可维护性提升

- **代码组织**: 清晰的目录结构
- **测试覆盖**: Jest + Playwright
- **文档完善**: TypeScript 自文档化
- **团队协作**: 标准化开发流程

---

## 🎯 总结与建议

### 核心优势

1. ✅ **现代化技术栈** - Next.js 15 + React 19
2. ✅ **完整开发生态** - TypeScript + Tailwind + shadcn/ui
3. ✅ **生产级功能** - 认证 + 数据库 + 支付
4. ✅ **Cloudflare 优化** - OpenNext 适配器 + Edge Runtime
5. ✅ **卓越开发体验** - Turbopack + HMR + 类型安全

### 实施建议

1. **渐进式迁移** - 分阶段实施，降低风险
2. **保持兼容** - API 接口保持不变
3. **充分测试** - 每个阶段完成后测试
4. **学习参考** - 深入研究 shipany 架构
5. **文档先行** - 记录所有变更和决策

### 下一步行动

1. ✅ **立即开始** - 创建迁移分支
2. ✅ **快速验证** - 完成阶段 1-2，验证可行性
3. ✅ **全面迁移** - 按计划执行所有阶段
4. ✅ **持续优化** - 上线后持续改进

**建议: 立即启动迁移！新架构将为 Claude Code Router 带来质的飞跃。**
