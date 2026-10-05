# writingHelper VS Code Extension Integration

实施状态：**代码已实现，尚未提交或部署**。

## 1. 目标

在 AI Speeds 增加 writingHelper 产品入口，让用户能够：

1. 了解插件解决的英文写作问题；
2. 查看真实的 VS Code 补全演示；
3. 前往 Visual Studio Marketplace 安装；
4. 查看 GitHub 源代码；
5. 从产品导航、全站搜索和 Sitemap 发现该页面。

公开路由固定为：

```text
https://aispeeds.me/product/writing-helper
```

## 2. 已核实的一手资料

核实日期：2026-10-05。

| 事实               | 证据                                                                         |
| ------------------ | ---------------------------------------------------------------------------- |
| GitHub 仓库        | <https://github.com/istarwyh/writingHelper>                                  |
| Marketplace 标识   | `istarwyh.writinghelper`                                                     |
| Marketplace 页面   | <https://marketplace.visualstudio.com/items?itemName=istarwyh.writinghelper> |
| 公开版本           | Marketplace 与 `package.json` 均为 `0.1.8`                                   |
| Marketplace 安装量 | 官方 Gallery API 返回 17,389 次安装；页面文案使用稳定的 `17k+`               |
| VS Code 版本声明   | `engines.vscode: ^1.33.0`                                                    |
| 文档类型           | `markdown`、`plaintext`、`latex`、`tex`                                      |
| 主要能力           | 词语搭配与词组补全、写作计数、写作用时快捷键                                 |
| 许可证             | 仓库与扩展清单声明 GPLv2                                                     |
| 独立产品站         | 未发现；GitHub Pages 路径返回 404                                            |
| Open VSX           | 未发现对应扩展条目                                                           |

README 的公开演示素材来自：

```text
https://gitee.com/istarwyh/images/raw/master/1624119548_20210620001856138_14747.gif
```

本地页面保存经过核实的 Marketplace 图标与 README 演示 GIF，避免产品页依赖第三方热链。

## 3. 架构决策

### 3.1 使用原生产品页

writingHelper 使用 `(site)` 路由组中的原生 Next.js 页面：

```text
src/app/(site)/product/writing-helper/page.tsx
```

原因：

- writingHelper 是桌面 VS Code 扩展，不是浏览器应用；
- Visual Studio Marketplace 返回 `X-Frame-Options: SAMEORIGIN`；
- GitHub 返回 `X-Frame-Options: deny` 和 `frame-ancestors 'none'`；
- 仓库没有可独立嵌入的产品官网；
- 原生页面可以完整控制 SEO、可访问性、移动端布局和安装路径。

### 3.2 不使用 iframe、反向代理或页面镜像

本阶段明确不做：

- Marketplace 或 GitHub iframe；
- 代理 Marketplace 页面；
- 在浏览器中模拟 VS Code 插件运行；
- 复制 Marketplace 的完整页面或动态评分系统；
- 将 `vscode:` 私有协议作为唯一安装入口。

主要安装按钮使用公开 HTTPS Marketplace 页面。命令行安装方式作为辅助信息提供：

```bash
code --install-extension istarwyh.writinghelper
```

## 4. 页面结构

页面使用 AI Speeds 现有站点 Header、Footer 和语义化设计令牌，包含：

1. 产品定位、Marketplace 与 GitHub 操作；
2. 17k+ 安装、0.1.8 版本与 GPLv2 事实；
3. writingHelper 官方图标；
4. README 中的真实补全演示；
5. 词语搭配、写作计数、用时记录三项能力；
6. Markdown、纯文本、LaTeX、TeX 支持范围；
7. 安装命令和三步使用流程。

页面是 Server Component，不增加客户端状态或新依赖。

## 5. 注册表接入

`src/config/features.ts` 注册 `writing-helper`：

```text
href: /product/writing-helper
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

## 6. 外部链接与安全

Marketplace 和 GitHub 操作统一使用：

```html
target="_blank" rel="noopener noreferrer"
```

AI
Speeds 页面不接收扩展源码、文档正文或用户写作内容。扩展的运行和数据行为由安装后的 VS
Code 扩展负责；本页只做产品说明和外部导航。

页面只陈述仓库、扩展清单、Marketplace
API 与公开演示能够证明的事实，不把 writingHelper 描述为浏览器应用或 AI 自动写作产品。

## 7. 文件范围

```text
src/app/(site)/product/writing-helper/page.tsx
src/config/features.ts
src/config/site-links.ts
src/config/site-navigation.ts
src/config/ui-texts.ts
public/images/products/writing-helper/icon.png
public/images/products/writing-helper/demo.gif
CLAUDE.md
README.md
docs/QUICK_START_NEW_DEV.md
docs/SRC_ARCHITECTURE.md
docs/tech/202610/WRITING_HELPER_VSCODE_EXTENSION_INTEGRATION.md
```

以下派生逻辑无需修改：

```text
src/app/_lib/site-search.ts
src/app/sitemap.ts
src/lib/navigation.ts
src/components/site/**
```

## 8. 验收

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

- `/product/writing-helper` 正常显示 Header、页面内容和 Footer；
- Marketplace 和 GitHub 操作在新窗口打开；
- 演示 GIF 能加载并保持比例；
- 桌面与移动产品导航都能发现 writingHelper；
- 全站搜索 `writingHelper`、`VS Code`、`英文写作` 能命中；
- Sitemap 只出现一个 canonical URL；
- YourBuddy 与 Harbor 路由保持原行为；
- 页面在无客户端 JavaScript 时仍可读取和导航。

## 9. 回滚

回滚时同时删除：

1. `writing-helper` Feature 与导航项；
2. 原生产品路由；
3. Marketplace/GitHub 链接常量；
4. 本地产品图片；
5. README 与架构文档中的 writingHelper 说明。

搜索、Footer 和 Sitemap 会随注册表删除自动回滚，不保留空入口或兼容别名。
