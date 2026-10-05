# MCP Advisor Integration

实施状态：**代码已实现，尚未提交或部署**。

## 1. 目标

在 AI Speeds 增加 MCP Advisor 产品入口，让用户能够：

1. 理解它解决的 MCP Server 发现问题；
2. 区分“生成安装指引”和“自动执行安装”；
3. 查看真实的公开工具调用截图；
4. 前往快速开始、GitHub 仓库和 npm 包；
5. 从产品导航、全站搜索和 Sitemap 发现该页面。

公开路由固定为：

```text
https://aispeeds.me/product/mcp-advisor
```

## 2. 已核实的一手资料

核实日期：2026-10-05。

| 事实         | 证据                                                             |
| ------------ | ---------------------------------------------------------------- |
| GitHub 仓库  | <https://github.com/istarwyh/mcpadvisor>                         |
| 对外品牌     | README 使用 `MCP Advisor`；repo 与命令使用 `mcpadvisor`          |
| npm 包       | <https://www.npmjs.com/package/@xiaohui-wang/mcpadvisor>         |
| npm 最新版本 | npm Registry 返回 `1.0.7`；main 分支 `package.json` 仍为 `1.0.5` |
| 主要能力     | 根据任务推荐 MCP Server；为指定 MCP 生成安装与客户端配置指南     |
| MCP tools    | `recommend-mcp-servers`、`install-mcp-server`                    |
| transports   | stdio、SSE、REST                                                 |
| 搜索来源     | Meilisearch、Compass、GetMCP；Nacos 按配置启用                   |
| 许可证       | 仓库和 package metadata 声明 MIT                                 |
| 独立产品站   | 未发现；仓库没有 GitHub Pages 或 deployment                      |

快速开始：

```text
https://github.com/istarwyh/mcpadvisor/blob/main/docs/GETTING_STARTED.md
```

npm 入口：

```text
https://www.npmjs.com/package/@xiaohui-wang/mcpadvisor
```

公开截图来源：

```text
https://xiaohui-zhangjiakou.oss-cn-zhangjiakou.aliyuncs.com/image/202506221717969.png
```

页面保存经过尺寸优化的本地副本，避免运行时依赖第三方图片热链。

## 3. 产品边界

MCP Advisor 是本地运行的 Node.js CLI、library 和 MCP
Server，不是已托管的网页 SaaS，也不是 MCP marketplace。

它当前注册两个 MCP tools：

- `recommend-mcp-servers`：根据任务描述、关键词和能力要求搜索并整理候选；
- `install-mcp-server`：读取目标项目资料，生成安装和 AI 客户端配置指引。

虽然第二个 tool 的名字包含
`install`，公开源码显示它输出的是操作指南，不直接修改用户系统。AI
Speeds 页面必须明确说明这一点，不使用“一键自动安装任意 MCP”等表述。

搜索结果来自本地配置和外部目录，不能被描述为始终最新、安全或经过认证。页面提醒用户在安装前核对源码、权限、运行命令和数据处理方式。

## 4. 架构决策

### 4.1 使用原生产品页

MCP Advisor 使用 `(site)` 路由组中的原生 Next.js 页面：

```text
src/app/(site)/product/mcp-advisor/page.tsx
```

原因：

- 产品运行在 MCP 客户端或本地 Node.js 环境，不在浏览器页面中运行；
- 没有独立托管的产品网站；
- GitHub 返回 `X-Frame-Options: deny` 和 `frame-ancestors 'none'`；
- npm 页面不允许跨站嵌入；
- 原生页面可以完整控制 SEO、可访问性、移动端布局和事实边界。

### 4.2 不使用 iframe、代理或伪在线体验

本阶段明确不做：

- GitHub、npm 或第三方目录 iframe；
- 代理或镜像 GitHub README；
- 在 AI Speeds 页面中模拟 MCP Server；
- 提供未经验证的公网 SSE/REST endpoint；
- 把 roadmap 中的学习、多 Agent 编排等能力写成现有功能；
- 使用当前返回 404 的 README demo video 或 Smithery 页面。

## 5. 页面结构

页面使用 AI Speeds 现有 Header、Footer 和语义化设计令牌，包含：

1. 产品定位和快速开始、GitHub 操作；
2. 两个 MCP tools、三种 transport、npm 版本事实；
3. 从任务到推荐与配置指引的产品流程图；
4. 两个 MCP tool 的准确职责和安装边界；
5. README 中的公开工具调用截图；
6. Claude Desktop 配置示例；
7. 可组合的搜索来源与运行连接方式；
8. 外部来源不等于安全认证的提示；
9. npm 与 GitHub 出口。

页面是 Server Component，不增加客户端状态或新依赖。

## 6. 注册表接入

`src/config/features.ts` 注册 `mcp-advisor`：

```text
href: /product/mcp-advisor
targetKind: route
shell: site
searchGroup: products
activeMatch: exact
includeInSitemap: true
searchable: true
showInHomeMenu: true
```

`src/config/site-navigation.ts`
将它放在产品组中。桌面导航、移动导航、Footer、搜索和 Sitemap 继续从现有注册表自动派生，不增加组件级硬编码。

## 7. 外部链接、安全与数据流

快速开始、GitHub 和 npm 操作统一使用：

```html
target="_blank" rel="noopener noreferrer"
```

AI Speeds 页面只做静态产品说明和外部导航：

- 不启动 MCP Advisor；
- 不接收用户任务描述；
- 不调用 MCP registry；
- 不代理第三方项目 README；
- 不安装软件或修改 MCP 客户端配置。

仓库声明 MIT，但当前 LICENSE 的版权行与仓库作者信息存在疑似模板遗留。页面只写“repository
declares MIT”，不对版权归属作进一步保证。

## 8. 文件范围

```text
src/app/(site)/product/mcp-advisor/page.tsx
src/config/features.ts
src/config/site-links.ts
src/config/site-navigation.ts
src/config/ui-texts.ts
public/images/products/mcp-advisor/discovery-result.png
CLAUDE.md
README.md
docs/QUICK_START_NEW_DEV.md
docs/SRC_ARCHITECTURE.md
docs/tech/202610/MCP_ADVISOR_INTEGRATION.md
```

以下派生逻辑无需修改：

```text
src/app/_lib/site-search.ts
src/app/sitemap.ts
src/lib/navigation.ts
src/components/site/**
```

## 9. 验收

静态门禁：

```bash
pnpm run node:check
pnpm run node:check:self-test
pnpm run architecture:check
pnpm run architecture:check:self-test
pnpm run lint:check
pnpm run typecheck
pnpm run build
pnpm run cf:build
```

真实浏览器验收：

- `/product/mcp-advisor` 正常显示 Header、页面内容和 Footer；
- 快速开始、GitHub 和 npm 操作在新窗口打开；
- 公开截图加载并保持比例；
- 桌面与移动产品导航都能发现 MCP Advisor；
- 全站搜索 `MCP Advisor`、`MCP Server`、`MCP 推荐` 能命中；
- Sitemap 只出现一个 canonical URL；
- writingHelper、YourBuddy、Harbor 与首页保持原行为；
- 页面在无客户端 JavaScript 时仍可读取和导航。

## 10. 回滚

回滚时同时删除：

1. `mcp-advisor` Feature 与导航项；
2. 原生产品路由；
3. 快速开始、GitHub 与 npm 链接常量；
4. 本地公开截图；
5. README 与架构文档中的 MCP Advisor 说明。

搜索、Footer 和 Sitemap 会随注册表删除自动回滚，不保留空入口或兼容别名。
