/**
 * 通用复制组件 - 为文档内容提供复制功能
 * 更新时间: 2025-09-20
 */
export class CopyComponent {
  private container: HTMLElement;
  private copyButton: HTMLElement | null = null;
  private rawMarkdown: string = '';

  constructor(container: HTMLElement, rawMarkdown?: string) {
    this.container = container;
    this.rawMarkdown = rawMarkdown || '';
    this.initialize();
  }

  private initialize(): void {
    this.createCopyButton();
    this.bindEvents();
  }

  private createCopyButton(): void {
    // 创建复制按钮，样式类似返回按钮
    this.copyButton = document.createElement('button');
    this.copyButton.className = 'copy-content-btn';
    this.copyButton.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span class="copy-text">复制内容</span>
    `;
    this.copyButton.title = '复制文档内容';

    // 添加样式
    this.addCopyButtonStyles();

    // 定位复制按钮到header区域，与返回按钮对齐
    this.positionCopyButton();
  }

  private positionCopyButton(): void {
    if (!this.copyButton) return;

    // 查找文档header容器，与返回按钮垂直排布
    const headerContainer = this.container.querySelector('.practice-article__header');

    if (headerContainer) {
      // 统一返回按钮的样式
      this.unifyBackButtonStyle(headerContainer);

      // 将复制按钮添加到header容器
      headerContainer.appendChild(this.copyButton);
    } else {
      // 如果找不到header容器，添加到根容器
      this.container.style.position = 'relative';
      this.container.appendChild(this.copyButton);
    }
  }

  private unifyBackButtonStyle(headerContainer: Element): void {
    // 不再修改返回按钮的样式，保持其原始样式
    // 复制按钮将模仿返回按钮的原始样式
  }

  private addCopyButtonStyles(): void {
    if (!this.copyButton) return;
    // 使用统一的 CSS 类进行样式控制（见 markdownStyles.ts）
    this.copyButton.classList.add('copy-content-btn');
  }

  private bindEvents(): void {
    if (!this.copyButton) return;

    this.copyButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.copyContent();
    });
  }

  private async copyContent(): Promise<void> {
    try {
      // 优先复制原始 Markdown 内容
      let content = this.rawMarkdown;

      // 如果没有原始 Markdown，则提取渲染后的内容
      if (!content) {
        content = this.extractTextContent();
      }

      if (!content) {
        this.showFeedback('没有找到可复制的内容', 'error');
        return;
      }

      // 使用现代 Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(content);
        this.showFeedback('内容已复制到剪贴板', 'success');
      } else {
        // 降级到传统方法
        this.fallbackCopyText(content);
        this.showFeedback('内容已复制到剪贴板', 'success');
      }
    } catch (error) {
      console.error('复制失败:', error);
      this.showFeedback('复制失败，请手动选择复制', 'error');
    }
  }

  private extractTextContent(): string {
    // 查找文档内容容器
    const contentSelectors = [
      '.practice-article__content',
      '.markdown-content-container',
      '#markdown-content-container',
      '.article-content',
      '.content'
    ];

    let contentElement: HTMLElement | null = null;

    for (const selector of contentSelectors) {
      contentElement = this.container.querySelector(selector);
      if (contentElement) break;
    }

    if (!contentElement) {
      contentElement = this.container;
    }

    // 提取纯文本内容，保持格式
    return this.getFormattedText(contentElement);
  }

  private getFormattedText(element: HTMLElement): string {
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      {
        acceptNode: (node) => {
          // 跳过复制按钮和隐藏元素
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement;
            if (el.classList.contains('copy-content-btn') ||
                el.style.display === 'none' ||
                el.hidden) {
              return NodeFilter.FILTER_REJECT;
            }
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let text = '';
    let node: Node | null;

    while (node = walker.nextNode()) {
      if (node.nodeType === Node.TEXT_NODE) {
        const textContent = node.textContent?.trim();
        if (textContent) {
          text += textContent + ' ';
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        const tagName = el.tagName.toLowerCase();

        // 在块级元素后添加换行
        if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'li', 'pre'].includes(tagName)) {
          text += '\n';
        }

        // 在列表项前添加标记
        if (tagName === 'li') {
          const parentTag = el.parentElement?.tagName.toLowerCase();
          if (parentTag === 'ul') {
            text += '• ';
          } else if (parentTag === 'ol') {
            const index = Array.from(el.parentElement!.children).indexOf(el) + 1;
            text += `${index}. `;
          }
        }

        // 在代码块前后添加标记
        if (tagName === 'pre' || tagName === 'code') {
          text += '```\n';
        }
      }
    }

    return text.replace(/\n\s*\n/g, '\n\n').trim();
  }

  private fallbackCopyText(text: string): void {
    // 创建临时文本区域
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
    } finally {
      document.body.removeChild(textArea);
    }
  }

  private showFeedback(message: string, type: 'success' | 'error'): void {
    if (!this.copyButton) return;

    // 保存原始内容和样式
    const originalHtml = this.copyButton.innerHTML;
    const originalColor = this.copyButton.style.color;
    const originalBorderColor = this.copyButton.style.borderColor;
    const originalBackground = this.copyButton.style.background;

    // 创建反馈图标
    const icon = type === 'success'
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"></path></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';

    // 更新按钮内容
    this.copyButton.innerHTML = `${icon}<span class="copy-text">${message}</span>`;

    // 更新样式
    if (type === 'success') {
      this.copyButton.style.color = '#10b981';
      this.copyButton.style.borderColor = '#10b981';
      this.copyButton.style.background = 'rgba(16, 185, 129, 0.1)';
    } else {
      this.copyButton.style.color = '#ef4444';
      this.copyButton.style.borderColor = '#ef4444';
      this.copyButton.style.background = 'rgba(239, 68, 68, 0.1)';
    }

    // 2秒后恢复原始状态
    setTimeout(() => {
      if (this.copyButton) {
        this.copyButton.innerHTML = originalHtml;
        this.copyButton.style.color = originalColor;
        this.copyButton.style.borderColor = originalBorderColor;
        this.copyButton.style.background = originalBackground;
      }
    }, 2000);
  }

  /**
   * 销毁组件
   */
  public destroy(): void {
    if (this.copyButton) {
      this.copyButton.remove();
      this.copyButton = null;
    }
  }

  /**
   * 手动重新定位复制按钮（当内容动态更新时调用）
   */
  public reposition(): void {
    if (this.copyButton) {
      this.copyButton.remove();
      this.createCopyButton();
    }
  }
}