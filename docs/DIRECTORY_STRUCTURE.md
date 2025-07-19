# 目录结构说明

本项目采用模块化的目录结构，支持三个主要功能模块和未来的内容扩展。

## 📁 整体结构

```
claude-code-router/
├── modules/                    # 功能模块
│   ├── get-started/           # 如何用上 CC 模块
│   ├── best-practices/        # 如何用好 CC 模块
│   ├── implementation/        # 如何实现 CC 模块
│   └── index.ts              # 模块聚合器
├── shared/                    # 共享资源
│   ├── components/           # 共享组件
│   ├── styles/              # 样式文件
│   ├── scripts/             # 脚本文件
│   ├── utils/               # 工具函数
│   └── index.ts             # 共享资源聚合器
├── components/              # [已废弃] 旧组件目录
├── styles/                  # [已废弃] 旧样式目录
├── scripts/                 # [已废弃] 旧脚本目录
└── ...                      # 其他项目文件
```

## 🚀 模块详细结构

### 1. get-started 模块 (如何用上 CC)

```
modules/get-started/
├── components/              # 模块专用组件
│   ├── providers.ts        # AI 提供商介绍
│   ├── setup.ts           # 设置指南
│   └── deployment.ts      # 部署说明
├── content/               # 静态内容 (未来扩展)
└── index.ts              # 模块入口
```

### 2. best-practices 模块 (如何用好 CC)

```
modules/best-practices/
├── components/              # 模块专用组件
│   └── bestPractices.ts    # 最佳实践主组件
├── content/               # 静态内容
├── articles/              # 深度文章
│   └── environment-config.md  # 环境配置指南
└── index.ts              # 模块入口
```

### 3. implementation 模块 (如何实现 CC)

```
modules/implementation/
├── components/              # 模块专用组件
│   └── implementation.ts   # 技术实现主组件
├── content/               # 静态内容
├── guides/                # 技术指南
│   └── architecture-deep-dive.md  # 架构深度解析
└── index.ts              # 模块入口
```

## 🔧 共享资源结构

### shared 目录

```
shared/
├── components/              # 全局共享组件
│   ├── head.ts             # HTML head 组件
│   ├── sidebar.ts          # 侧边栏组件
│   ├── navigation.ts       # 导航栏组件
│   └── getStarted.ts       # [待清理] 旧组件
├── styles/                 # 样式文件
│   ├── designTokens.ts     # 设计令牌
│   ├── baseStyles.ts       # 基础样式
│   ├── componentStyles.ts  # 组件样式
│   └── index.ts           # 样式聚合器
├── scripts/               # 脚本文件
│   ├── sidebar.ts         # 侧边栏脚本
│   ├── navigation.ts      # 导航脚本
│   └── index.ts          # 脚本聚合器
├── utils/                 # 工具函数
│   └── index.ts          # 工具函数集合
└── index.ts              # 共享资源聚合器
```

## 📝 内容扩展指南

### 添加新文章

1. 在对应模块的 `articles/` 目录下创建 Markdown 文件
2. 在模块的 `index.ts` 中更新 `articlesList`
3. 创建对应的组件来渲染文章内容

### 添加新指南

1. 在对应模块的 `guides/` 目录下创建 Markdown 文件
2. 在模块的 `index.ts` 中更新 `guidesList`
3. 创建对应的组件来渲染指南内容

### 添加新组件

1. 在对应模块的 `components/` 目录下创建组件文件
2. 在模块的 `index.ts` 中导出新组件
3. 在主模块组件中引用新组件

## 🔄 迁移说明

当前项目正在从旧的单一目录结构迁移到新的模块化结构：

- ✅ 已完成：模块化架构搭建
- ✅ 已完成：组件重新组织
- ✅ 已完成：样式和脚本迁移
- 🔄 进行中：旧目录清理
- 📋 待完成：内容管理系统
- 📋 待完成：动态路由支持

## 🎯 未来规划

1. **内容管理系统**：支持动态加载文章和指南
2. **搜索功能**：全文搜索和分类过滤
3. **多语言支持**：国际化内容管理
4. **主题系统**：可切换的视觉主题
5. **插件系统**：支持第三方扩展

---

*本文档会随着项目发展持续更新。*
