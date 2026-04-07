import { LegacyPageWrapper } from '@/components/LegacyPageWrapper';
import { homepageHtml } from '@/legacy/scripts/generated/homepageHtml';

/**
 * 主页 - 复用现有的所有模块和组件
 * 使用适配器模式包装现有逻辑
 */
export default function HomePage() {
  return <LegacyPageWrapper homepageHtml={homepageHtml} />;
}
