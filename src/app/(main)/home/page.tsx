import { LegacyPageWrapper } from '@/components-next/LegacyPageWrapper';

/**
 * 主页 - 复用现有的所有模块和组件
 * 使用适配器模式包装现有逻辑
 */
export default function HomePage() {
  return <LegacyPageWrapper />;
}
