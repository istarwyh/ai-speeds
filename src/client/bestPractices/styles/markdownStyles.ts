/**
 * Markdown 内容专用样式
 * 为最佳实践模块的 Markdown 内容提供美观的样式
 */
export const markdownStyles = `
/* Markdown 内容容器 */
.practice-article {
  max-width: 900px;
  margin: 0 auto;
  padding: clamp(1rem, 3vw, 1.5rem);
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(8px);
  animation: articleFadeInUp 0.28s ease forwards;
  position: relative;
}

.practice-article__header {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 5;
  background: transparent;
  margin: 0;
  padding: 0;
  border-bottom: none;
  /* Side-by-side buttons layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.practice-article__back-btn,
.copy-content-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid #e5e7eb;
  color: #374151;
  padding: 8px 14px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  min-height: 44px; /* 确保触摸友好 */
  min-width: 44px;
  transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.12s ease;
  box-shadow: 0 1px 4px rgba(17, 24, 39, 0.06);
  backdrop-filter: saturate(1.2) blur(2px);
}

/* Normalize icon size inside copy button */
.copy-content-btn svg {
  width: 16px;
  height: 16px;
  display: inline-block;
}

.practice-article__back-btn:hover,
.copy-content-btn:hover {
  background: #ffffff;
  border-color: #d1d5db;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(17, 24, 39, 0.08);
}

.practice-article__back-btn:active,
.copy-content-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

.practice-article__back-btn:focus-visible,
.copy-content-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.35);
}

.practice-article__content {
  line-height: 1.7;
  color: #374151;
  font-size: clamp(1rem, 2.5vw, 1.0625rem);
}

/* 文章进入/退出动画 */
@keyframes articleFadeInUp {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes articleFadeOutDown {
  to { opacity: 0; transform: translateY(8px); }
}

.practice-article.is-exiting {
  animation: articleFadeOutDown 0.22s ease forwards;
}

/* Markdown 内容样式 */
.markdown-content {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.markdown-content h1 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 24px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid #e5e7eb;
}

.markdown-content h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1f2937;
  margin: 32px 0 16px 0;
  padding-left: 12px;
  border-left: 4px solid #3b82f6;
}

.markdown-content h3 {
  font-size: 1.375rem;
  font-weight: 600;
  color: #1f2937;
  margin: 24px 0 12px 0;
}

.markdown-content h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin: 20px 0 10px 0;
}

.markdown-content p {
  margin-bottom: 16px;
  line-height: 1.7;
  color: #4b5563;
}

.markdown-content strong {
  font-weight: 600;
  color: #1f2937;
}

.markdown-content em {
  font-style: italic;
  color: #6b7280;
}

/* 列表样式 */
.markdown-content ul,
.markdown-content ol {
  margin: 16px 0;
  padding-left: 24px;
}

.markdown-content li {
  margin-bottom: 8px;
  line-height: 1.6;
  color: #4b5563;
}

.markdown-content li strong {
  color: #1f2937;
}

/* 代码样式 */
.markdown-content code {
  background: #f1f5f9;
  color: #e11d48;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
  font-size: 0.9em;
  border: 1px solid #e2e8f0;
}

/* 代码块样式 - 匹配 SafeMarkdownRenderer 生成的结构 */
.markdown-content pre.code-block {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin: 20px 0;
  overflow-x: auto;
  position: relative;
}

.markdown-content pre.code-block {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
}

.markdown-content pre.code-block code {
  background: none;
  /* 不强制设置颜色，交给 highlight.js 主题处理 */
  padding: 0;
  border: none;
  border-radius: 0;
  display: block;
  white-space: pre;
}

/* 当未启用 hljs 时提供一个温和的回退颜色 */
.markdown-content pre.code-block code:not(.hljs) {
  color: #334155;
}

/* 当应用 hljs 时，避免行内 code 规则将其渲染为红色 */
.markdown-content pre.code-block code.hljs {
  color: inherit;
}

/* 骨架屏加载动画 */
.article-skeleton {
  padding: 20px 0;
}

.skeleton-title {
  height: 32px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 24px;
  width: 60%;
}

.skeleton-line {
  height: 16px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 12px;
  width: 100%;
}

.skeleton-line.short {
  width: 70%;
}

.skeleton-diagram {
  height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 8px;
  margin: 24px 0;
}

@keyframes skeleton-loading {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Mermaid 图表增强样式 */
.markdown-content .mermaid-diagram {
  margin: 24px 0;
  padding: 20px;
  background: #fafbfc;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  text-align: center;
  overflow-x: auto;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
}

.markdown-content .mermaid-diagram:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.markdown-content .mermaid-diagram.mermaid-rendered {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  padding: 16px;
  cursor: pointer;
}

.markdown-content .mermaid-diagram.mermaid-rendered::after {
  content: "🔍 点击查看大图";
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 12px;
  color: #6b7280;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.markdown-content .mermaid-diagram.mermaid-rendered:hover::after {
  opacity: 1;
}

.markdown-content .mermaid-diagram svg {
  max-width: 100%;
  height: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
  transition: transform 0.3s ease;
}

.markdown-content .mermaid-diagram.mermaid-rendered:hover svg {
  transform: scale(1.02);
}

/* 全屏查看模态框 */
.mermaid-fullscreen-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

.mermaid-fullscreen-content {
  max-width: 95%;
  max-height: 95%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  overflow: auto;
  transform: scale(0.9);
  animation: scaleIn 0.3s ease forwards;
}

.mermaid-fullscreen-close {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  z-index: 1001;
}

.mermaid-fullscreen-close:hover {
  color: #333;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

@keyframes scaleIn {
  to { transform: scale(1); }
}

/* 复制按钮样式 - 适配新的代码块结构 */
.markdown-content pre.code-block:hover .copy-button {
  opacity: 1;
}

.copy-button {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #e5e7eb;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1;
}

.copy-button:hover {
  background: #d1d5db;
}

.copy-button.copied {
  background: #10b981;
  color: white;
}

/* 返回顶部按钮 */
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
}

.back-to-top:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}

/* 阅读进度条 */
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  z-index: 999;
  transition: width 0.1s ease;
}

/* 链接样式 */
.markdown-content a {
  color: #3b82f6;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
}

.markdown-content a:hover {
  color: #1d4ed8;
  border-bottom-color: #3b82f6;
}

/* 图片样式 */
.markdown-content img,
.markdown-content img.markdown-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 16px auto;
  border-radius: 8px;
  border: 1px solid var(--border-color, #e5e7eb);
  background: var(--bg-secondary, #f9fafb);
}

.markdown-content img[loading="lazy"] {
  filter: blur(0);
}

.markdown-content .md-image-blocked {
  display: inline-block;
  padding: 6px 8px;
  font-size: 0.9em;
  color: var(--error, #dc2626);
  background: var(--bg-error-light, #fef2f2);
  border: 1px solid var(--border-error, #fecaca);
  border-radius: 6px;
}

/* 引用块样式 */
.markdown-content blockquote {
  border-left: 4px solid #e5e7eb;
  padding-left: 16px;
  margin: 20px 0;
  color: #6b7280;
  font-style: italic;
  background: #f9fafb;
  padding: 16px;
  border-radius: 0 8px 8px 0;
}

/* 表格样式 */
.markdown-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.markdown-content th,
.markdown-content td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

.markdown-content th {
  background: #f9fafb;
  font-weight: 600;
  color: #374151;
}

.markdown-content tr:hover {
  background: #f9fafb;
}

/* 分隔线样式 */
.markdown-content hr {
  border: none;
  height: 1px;
  background: #e5e7eb;
  margin: 32px 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  body {
    font-size: 16px; /* 防止 iOS 自动缩放 */
    -webkit-text-size-adjust: 100%;
  }
  
  .practice-article {
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 8px;
  }
  
  .practice-article__header {
    top: 8px;
    right: 8px;
    margin: 0;
    padding: 0;
  }
  
  .practice-article__back-btn,
  .copy-content-btn {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    min-height: 48px; /* 移动端触摸目标 */
    min-width: 48px;
  }
  
  /* Compact label on small screens */
  .copy-content-btn .copy-text {
    display: none;
  }
  
  /* 流式标题大小 */
  .markdown-content h1 {
    font-size: clamp(1.5rem, 5vw, 2.25rem);
    margin-bottom: 1rem;
  }
  
  .markdown-content h2 {
    font-size: clamp(1.25rem, 4vw, 1.75rem);
    margin: 1.5rem 0 0.75rem 0;
    padding-left: 8px;
  }
  
  .markdown-content h3 {
    font-size: clamp(1.125rem, 3.5vw, 1.375rem);
    margin: 1.25rem 0 0.625rem 0;
  }
  
  .markdown-content h4 {
    font-size: clamp(1rem, 3vw, 1.125rem);
  }
  
  /* 移动端文本优化 */
  .markdown-content p,
  .markdown-content li {
    line-height: 1.7;
    margin-bottom: 1rem;
  }
  
  /* 代码块移动端优化 */
  .markdown-content pre.code-block {
    margin: 1rem -1rem; /* 负边距实现全宽 */
    border-radius: 0;
    font-size: 0.875rem;
    padding: 0;
  }
  
  .markdown-content pre.code-block code {
    padding: 1rem;
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch; /* iOS 平滑滚动 */
    white-space: pre;
    word-break: normal;
  }
  
  /* 代码块滚动提示 */
  .markdown-content pre.code-block::after {
    content: '← 滑动查看更多 →';
    display: block;
    text-align: center;
    font-size: 0.75rem;
    color: #6b7280;
    padding: 0.5rem;
    background: #f1f5f9;
    border-top: 1px solid #e2e8f0;
  }
  
  .markdown-content pre.code-block.scrolled::after {
    display: none;
  }
  
  /* 表格移动端优化 */
  .markdown-content table {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    font-size: 0.875rem;
  }
  
  .markdown-content th,
  .markdown-content td {
    padding: 0.75rem 1rem;
    white-space: nowrap;
  }
  
  /* 列表移动端优化 */
  .markdown-content ul,
  .markdown-content ol {
    padding-left: 1.25rem;
  }
  
  .markdown-content li {
    margin-bottom: 0.75rem;
  }
}

/* 小屏幕手机优化 (iPhone SE 等) */
@media (max-width: 375px) {
  .practice-article {
    margin: 0.25rem;
    padding: 0.875rem;
  }
  
  .practice-article__back-btn,
  .copy-content-btn {
    padding: 0.625rem 0.875rem;
    font-size: 0.8125rem;
  }
  
  .markdown-content h1 {
    font-size: 1.5rem;
  }
  
  .markdown-content h2 {
    font-size: 1.25rem;
  }
  
  .markdown-content pre.code-block code {
    font-size: 0.8125rem;
  }
}
`;

/**
 * 注入 Markdown 样式到页面
 */
export function injectMarkdownStyles(): void {
  if (document.getElementById('markdown-styles')) {
    return; // 样式已经注入
  }

  const style = document.createElement('style');
  style.id = 'markdown-styles';
  style.textContent = markdownStyles;
  document.head.appendChild(style);
}
