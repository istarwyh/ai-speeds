// src/features/best-practices/index.ts
// 整合了原 modules/best-practices 和 src/client/bestPractices 的功能

export const bestPracticesModule = `
<section id="best-practices" class="content-section">
  <!-- 概览卡片容器 - 由新的模块化系统渲染 -->
  <div id="best-practices-overview-cards" class="overview-cards-container">
    <!-- 卡片内容将由 src/client/bestPractices 系统动态生成 -->
  </div>
  
  <!-- 文章内容容器 -->
  <div id="best-practices-content" class="content-container">
    <!-- 文章内容将根据导航动态加载 -->
  </div>
</section>
`;
