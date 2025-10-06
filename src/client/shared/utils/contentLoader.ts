/// <reference path="../types/env.d.ts" />

/**
 * 通用内容加载器工具（DRY）
 * 提供标准化的 cardId 规范化和查找逻辑
 */

/**
 * 规范化 cardId 的变体列表
 * 尝试多种格式以提高容错性
 */
export function normalizeCardIdVariants(cardId: string): string[] {
  const normalized = cardId.trim();
  const lower = normalized.toLowerCase();
  // Use a Set to avoid duplicate variants, e.g., if the original id is already lowercase.
  return Array.from(new Set([normalized, lower, lower.replace(/_/g, '-')]));
}

/**
 * 从 contentLoaders 映射中查找并加载内容
 * @param cardId - 卡片 ID
 * @param contentLoaders - 内容加载器映射
 * @param moduleName - 模块名称（用于日志）
 * @returns 加载的内容字符串，如果未找到则返回 null
 */
export async function loadContentFromMap(
  cardId: string,
  contentLoaders: Record<string, () => Promise<string>>,
  moduleName: string,
): Promise<string | null> {
  const variants = normalizeCardIdVariants(cardId);

  // 尝试所有变体
  for (const key of variants) {
    const loader = contentLoaders[key];
    if (loader) {
      try {
        return await loader();
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.warn(`[${moduleName}] Failed to import markdown for`, key, err);
        }
        return null;
      }
    }
  }

  // 未找到映射
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn(`[${moduleName}] Missing content mapping for cardId:`, cardId);
  }

  return null;
}
