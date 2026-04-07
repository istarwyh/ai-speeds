'use client';

import { useEffect, useState } from 'react';
import { LegacyPageWrapper } from '@/components/LegacyPageWrapper';
import { HomePageWithNav } from '@/components/HomePageWithNav';

/**
 * Home 页面 - 根据 hash 决定渲染方式
 * - 无 hash: 显示 iframe 嵌入的首页
 * - 有 hash: 显示 LegacyPageWrapper 的多 section 页面
 */
export default function HomePage() {
  const [hasHash, setHasHash] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setHasHash(!!window.location.hash);
    };
    checkHash();

    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // 有 hash 时渲染 LegacyPageWrapper
  if (hasHash) {
    return <LegacyPageWrapper />;
  }

  // 无 hash 时渲染 iframe 首页
  return <HomePageWithNav />;
}
