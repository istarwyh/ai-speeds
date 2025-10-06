/**
 * 安全的 Markdown 渲染器（内部使用 markdown-it 渲染）
 * 目标：更完整的 Markdown 支持 + Mermaid + 语法高亮（highlight.js）
 */
import MarkdownIt from 'markdown-it';
import DOMPurify from 'isomorphic-dompurify';
// 使用按需注册的 highlight.js，减少体积并避免运行时从 CDN 加载 JS
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import yaml from 'highlight.js/lib/languages/yaml';
import markdownLang from 'highlight.js/lib/languages/markdown';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import bash from 'highlight.js/lib/languages/bash';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import go from 'highlight.js/lib/languages/go';
import rust from 'highlight.js/lib/languages/rust';
import sql from 'highlight.js/lib/languages/sql';
import diff from 'highlight.js/lib/languages/diff';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import { loadHighlightJsStyle } from './highlight';

// 注册常用语言（可按需增减）
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('markdown', markdownLang);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('shell', bash);
hljs.registerLanguage('sh', bash);
hljs.registerLanguage('python', python);
hljs.registerLanguage('java', java);
hljs.registerLanguage('go', go);
hljs.registerLanguage('rust', rust);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('diff', diff);
hljs.registerLanguage('dockerfile', dockerfile);

export class SafeMarkdownRenderer {
  private md: MarkdownIt;

  constructor() {
    // 初始化 markdown-it
    this.md = new MarkdownIt({
      html: false, // 禁用 HTML 以防止 XSS 攻击
      linkify: true,
      breaks: true,
      // 使用 highlight.js 在渲染阶段生成高亮后的 HTML
      highlight: (str: string, lang: string) => {
        const language = (lang || '').toLowerCase();
        if (language && hljs.getLanguage(language)) {
          try {
            const { value } = hljs.highlight(str, {
              language,
              ignoreIllegals: true,
            });
            return `<pre class="code-block"><code class="hljs language-${language}">${value}</code></pre>`;
          } catch {
            // Error highlighting code block, falling back to escaped text
          }
        }
        // 未知语言或异常：转义原文，保留基本结构
        const escaped = this.escapeHtml(str);
        return `<pre class="code-block"><code class="hljs">${escaped}</code></pre>`;
      },
    });

    // 自定义 fence 渲染：支持 mermaid，并为代码块添加与现有样式匹配的类名
    const self = this;
    const defaultFence = this.md.renderer.rules.fence?.bind(this.md.renderer);
    this.md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
      // Guard index to avoid out-of-range access
      const safeIdx = Number.isInteger(idx) && idx >= 0 && idx < tokens.length ? idx : -1;
      if (safeIdx === -1) {
        return '';
      }
      // eslint-disable-next-line security/detect-object-injection
      const token = tokens[safeIdx];
      if (!token) {
        return '';
      }

      const info = (token.info ?? '').trim().toLowerCase();
      const content = token.content ?? '';

      // 特殊处理 Mermaid，其余交给默认 fence（从而走 highlight 回调）
      if (info === 'mermaid' || info === 'sequencediagram') {
        const diagramId = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        return `<div class="mermaid-diagram" id="${diagramId}">${self.escapeHtml(content)}</div>`;
      }

      if (defaultFence) {
        return defaultFence(tokens, idx, options, env, slf);
      }

      // 兜底：无默认 fence 时，仍输出基础结构
      const lang = info || 'text';
      const escaped = self.escapeHtml(content);
      return `<pre class="code-block"><code class="hljs language-${lang}">${escaped}</code></pre>`;
    };

    // 自定义 image 渲染：为图片添加安全与表现属性
    const defaultImage = this.md.renderer.rules.image?.bind(this.md.renderer);
    this.md.renderer.rules.image = function (tokens, idx, options, env, slf) {
      // Guard index to avoid out-of-range access
      const safeIdx = Number.isInteger(idx) && idx >= 0 && idx < tokens.length ? idx : -1;
      if (safeIdx === -1) {
        return '';
      }
      // eslint-disable-next-line security/detect-object-injection
      const token = tokens[safeIdx];
      if (!token) {
        return '';
      }

      const src = token.attrGet('src') || '';
      const alt = token.content || token.attrGet('alt') || '';

      // 允许 http/https 与相对路径，拒绝其他协议
      const isAllowedSrc =
        /^https?:\/\//.test(src) || src.startsWith('/') || src.startsWith('./') || src.startsWith('../');
      const isDangerousProtocol = /^(data|javascript|vbscript|file|mailto|tel):/i.test(src);
      if (!isAllowedSrc || isDangerousProtocol) {
        // 以可见文本替代，避免渲染潜在危险协议
        return `<span class="md-image-blocked">${self.escapeHtml(alt)}</span>`;
      }

      token.attrSet('loading', 'lazy');
      token.attrSet('decoding', 'async');
      token.attrSet('referrerpolicy', 'no-referrer');
      token.attrSet('alt', alt);
      token.attrJoin('class', 'markdown-image');

      if (defaultImage) {
        return defaultImage(tokens, idx, options, env, slf);
      }
      return slf.renderToken(tokens, idx, options);
    };
  }

  /**
   * 渲染 Markdown 为 HTML
   */
  render(markdown: string): string {
    if (!markdown || typeof markdown !== 'string') {
      return '';
    }
    // 使用 markdown-it 渲染（内部已处理代码块与 mermaid 占位）
    const html = this.md.render(markdown);

    // 使用 DOMPurify 进行 HTML 安全清理
    const sanitizeOptions = {
      ALLOWED_TAGS: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'br',
        'strong',
        'em',
        'code',
        'pre',
        'ul',
        'ol',
        'li',
        'a',
        'blockquote',
        'div',
        'img',
      ],
      ALLOWED_ATTR: [
        'class',
        'id',
        'href',
        'target',
        'rel',
        // img 相关
        'src',
        'alt',
        'title',
        'loading',
        'referrerpolicy',
        'decoding',
        'width',
        'height',
        'srcset',
        'sizes',
      ],
      ALLOW_DATA_ATTR: false,
    };

    const sanitizedHtml = DOMPurify.sanitize(html, sanitizeOptions);

    return sanitizedHtml;
  }

  /**
   * 转义 HTML 字符以防止 XSS
   */
  private escapeHtml(text: string): string {
    const input = String(text);
    // Use charCode switch to avoid string literal quote style issues
    return input.replace(/[&<>"']/g, ch => {
      switch (ch.charCodeAt(0)) {
        // &
        case 38:
          return '&amp;';
        // <
        case 60:
          return '&lt;';
        // >
        case 62:
          return '&gt;';
        // "
        case 34:
          return '&quot;';
        // '
        case 39:
          return '&#39;';
        default:
          return ch;
      }
    });
  }

  /**
   * 添加代码高亮（简单实现）
   */
  highlightCode(container: HTMLElement): void {
    // 由于我们在渲染阶段已通过 markdown-it + hljs 完成高亮，这里仅确保样式和 Mermaid 渲染
    // 注入高亮样式（主题 CSS）并触发 Mermaid
    this.ensureHighlightCss();
    this.renderMermaidDiagrams(container);
  }
  /**
   * 确保高亮样式已加载（已移除 CDN 依赖）
   */
  private ensureHighlightCss(): void {
    // 优先确保主题样式可用（当前使用 CDN 注入方式，后续可切换为本地打包）
    loadHighlightJsStyle().catch(() => {
      // 降级：若样式加载失败，则保留占位提示，避免静默失败
      if (!document.getElementById('hljs-style-note')) {
        const note = document.createElement('style');
        note.id = 'hljs-style-note';
        note.textContent = '/* highlight.js styles should be bundled locally */';
        document.head.appendChild(note);
      }
    });
  }

  /**
   * 渲染 Mermaid 图表
   */
  private renderMermaidDiagrams(container: HTMLElement): void {
    const mermaidDiagrams = container.querySelectorAll('.mermaid-diagram');
    if (mermaidDiagrams.length === 0) {
      return;
    } // 动态加载 Mermaid 库
    this.loadMermaidLibrary()
      .then(() => {
        mermaidDiagrams.forEach(diagram => {
          this.initializeMermaidDiagram(diagram as HTMLElement);
        });
      })
      .catch(() => {
        // 降级处理：显示原始代码
        mermaidDiagrams.forEach(diagram => {
          const code = diagram.textContent || '';
          diagram.innerHTML = `<pre><code>${code}</code></pre>`;
          diagram.classList.add('mermaid-fallback');
        });
      });
  }

  /**
   * 动态加载 Mermaid 库
   */
  private loadMermaidLibrary(): Promise<void> {
    return new Promise((resolve, reject) => {
      // 检查是否已经加载
      if ((window as { mermaid?: unknown }).mermaid) {
        resolve();
        return;
      } // 创建 script 标签加载 Mermaid
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
      script.async = true;
      script.onload = () => {
        try {
          // 初始化 Mermaid
          const mermaid = (window as unknown as { mermaid: { initialize: (config: Record<string, unknown>) => void } })
            .mermaid;
          mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
            fontFamily: 'monospace',
          });
          resolve();
        } catch {
          reject(new Error('Failed to initialize Mermaid'));
        }
      };
      script.onerror = () => {
        reject(new Error('Failed to load Mermaid library'));
      };
      document.head.appendChild(script);
    });
  }

  /**
   * 初始化单个 Mermaid 图表
   */
  private initializeMermaidDiagram(element: HTMLElement): void {
    const mermaid = (window as { mermaid?: { render: (id: string, code: string) => Promise<{ svg: string }> } })
      .mermaid;
    if (!mermaid) {
      return;
    }

    const code = element.textContent || '';
    const id = element.id;
    try {
      // 清空元素内容
      element.textContent = '';
      element.innerHTML = '<div style="padding: 20px; color: #666;">正在渲染图表...</div>';

      // 渲染 Mermaid 图表
      mermaid
        .render(id + '-svg', code)
        .then((result: { svg: string }) => {
          element.innerHTML = result.svg;
          element.classList.add('mermaid-rendered');

          // 添加点击全屏查看功能
          element.addEventListener('click', () => {
            this.showMermaidFullscreen(result.svg, id);
          });
        })
        .catch((_error: Error) => {
          // 降级显示原始代码
          element.innerHTML = `
                    <div style="color: #dc2626; margin-bottom: 8px;">⚠️ 图表渲染失败</div>
                    <pre><code>${this.escapeHtml(code)}</code></pre>
                `;
          element.classList.add('mermaid-error');
        });
    } catch {
      // 降级显示原始代码
      element.innerHTML = `
                <div style="color: #dc2626; margin-bottom: 8px;">⚠️ 图表初始化失败</div>
                <pre><code>${this.escapeHtml(code)}</code></pre>
            `;
      element.classList.add('mermaid-error');
    }
  }

  /**
   * 显示 Mermaid 图表全屏模式
   */
  private showMermaidFullscreen(svgContent: string, _diagramId: string): void {
    // 创建全屏模态框
    const modal = document.createElement('div');
    modal.className = 'mermaid-fullscreen-modal';
    modal.innerHTML = `
            <div class="mermaid-fullscreen-content">
                <button class="mermaid-fullscreen-close" onclick="this.closest('.mermaid-fullscreen-modal').remove()">&times;</button>
                ${svgContent}
            </div>
        `;

    // 点击背景关闭
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.remove();
      }
    });

    // ESC 键关闭
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        modal.remove();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);

    document.body.appendChild(modal);
  }
}

/**
 * 创建默认的 Markdown 渲染器实例
 */
export function createMarkdownRenderer(): SafeMarkdownRenderer {
  return new SafeMarkdownRenderer();
}
