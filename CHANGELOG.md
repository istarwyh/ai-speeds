# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project adheres to
Semantic Versioning where applicable.

## [1.1.0] - 2025-11-09

### Added

- **架构重构**: 完成 Legacy 代码隔离和服务层重构
  - 创建 `src/legacy/` 目录，隔离所有旧代码
  - 新架构使用 `src/app/` 和 `src/components/`
  - 通过 `LegacyPageWrapper` 适配器保持功能正常运行

### Changed

- **目录结构优化**:
  - `src/components-next/` → `src/components/` (更简洁的命名)
  - `src/api/` → `src/services/llm-provider/` (清晰的职责划分)
  - 实现三层架构：Controller (app/api) → Service (services) → Utility (lib)

- **导入路径更新**:
  - 所有 `@/components-next` → `@/components`
  - 所有 `@/api` → `@/services/llm-provider`
  - 更新 tsconfig.json 路径别名

### Documentation

- 更新 `CLAUDE.md` 反映新的架构和目录结构
- 更新所有文档中的目录引用和导入路径
- 添加架构演进说明和三层架构图示

### Technical Details

- **Legacy 隔离**:
  - 移动 `src/components/` → `src/legacy/components/`
  - 移动 `src/features/` → `src/legacy/features/`
  - 移动 `src/client/` → `src/legacy/client/`
  - 移动 `src/styles/` → `src/legacy/styles/` (保留 designTokens.ts)
  - 移动 `src/scripts/` → `src/legacy/scripts/`

- **服务层重构**:
  - 将 API 适配器逻辑移至专门的服务层
  - 清晰分离 HTTP 接口层和业务逻辑层
  - 便于未来扩展其他服务（数据库、缓存、认证等）

### Benefits

- ✅ 职责清晰：API 路由 vs 业务逻辑 vs 工具函数
- ✅ 易于维护：新旧代码完全隔离
- ✅ 符合最佳实践：标准的三层架构模式
- ✅ 便于扩展：可轻松添加新的服务模块

## [1.0.0] - 2025-10-05

### Changed

- **品牌重塑**: 将项目从 "Claude Code Router" 转型为 "AI Speeds" 平台
  - 更新了README标题和项目描述
  - 重新定位为核心功能：Universal API proxy for using Claude Code with multiple AI providers
  - 强调AI工具自我展示和AI生成内容聚合平台的定位

### Documentation

- Updated `docs/tech/BEST_PRACTICES_SHARE_USER_STORIES.md` to reflect the
  actual implemented behavior of the Best Practices card share feature:
  - Poster generation is presented via a preview modal with actions for
    copy image, download image, copy deep link, and cancel.
  - QR code is rendered live (deep link) when the network allows, with a
    graceful placeholder fallback when unavailable.
  - External cover images may be drawn into the poster via `/img-proxy`
    to avoid CORS canvas tainting.
  - Viewport-driven prewarm is used to preload the cover image and QR to
    improve perceived performance.
  - Success metrics and manual acceptance checklist updated accordingly.

- Revised `docs/tech/BEST_PRACTICES_SHARE_TECH_DESIGN.md` to align with the
  current implementation:
  - Architecture now includes preview modal flow and viewport-driven prewarm
    via `BaseArticleEventHandler` and `IntersectionObserver`.
  - `ShareService` details updated: canvas composition, deep link builder,
    QR rendering with fallback, and `/img-proxy` for cross-origin images.
  - Accessibility section expanded to cover modal semantics (dialog role,
    ESC/overlay close) and planned focus-trap/inert background.
  - Performance notes include prewarm strategy and font readiness.
  - Security mentions `IMAGE_PROXY_WHITELIST` and `IMAGE_PROXY_CACHE_TTL`.
  - Testing plan covers modal actions, QR rendering, deep link copy, and
    regression on card navigation.

### Notes

- Documentation now matches the code in
  `src/client/shared/services/ShareService.ts` and
  `src/client/shared/handlers/BaseArticleEventHandler.ts`.
- Image proxy host whitelist can be configured via `IMAGE_PROXY_WHITELIST`.
  Per project preference, `*` is acceptable for development; review before
  production.

