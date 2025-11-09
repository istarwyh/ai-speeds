import { LegacyPageWrapper } from '@/components/LegacyPageWrapper';

export default function RootPage() {
  // 直接渲染主页，避免在某些平台上出现重定向路径被重复拼接的问题
  return <LegacyPageWrapper />;
}
