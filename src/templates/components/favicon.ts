/**
 * 服务器端 favicon 生成
 * 用于在 HTML 模板中使用
 */
export function generateFaviconDataUrl(): string {
  // 生成简单的 SVG favicon
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#f3f4f6"/><text x="16" y="22" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#4285f4" text-anchor="middle">Y</text></svg>`;
  
  // 使用 btoa 进行 base64 编码（在 Cloudflare Workers 中可用）
  return `data:image/svg+xml;base64,${btoa(svgContent)}`;
}

export const faviconDataUrl = generateFaviconDataUrl();
