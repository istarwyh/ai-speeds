// src/features/how-to-apply-cc/index.ts
// 整合了原 modules/how-to-apply-cc 和 src/client/howToApplyCC 的功能

export const howToApplyCCModule = `
<section id="how-to-apply-cc" class="content-section">
  <!-- 概览卡片容器 - 由新的模块化系统渲染 -->
  <div id="how-to-apply-cc-overview-cards" class="overview-cards-container">
    <!-- 卡片内容将由 src/client/howToApplyCC 系统动态生成 -->
  </div>
  
  <!-- 文章内容容器 -->
  <div id="how-to-apply-cc-content" class="content-container">
    <!-- 文章内容将根据导航动态加载 -->
  </div>
</section>
`;
