import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 合并 Tailwind CSS 类名
 *
 * 用于组合多个类名并解决冲突，shadcn/ui 组件的核心工具函数
 *
 * @example
 * cn('px-2 py-1', 'px-4') // => 'py-1 px-4' (后面的 px-4 覆盖 px-2)
 * cn('text-red-500', condition && 'text-blue-500') // 条件类名
 *
 * @param inputs - 类名数组，支持字符串、对象、数组等多种格式
 * @returns 合并后的类名字符串
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
