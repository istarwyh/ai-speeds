'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const legacyHashRoutes: Readonly<Record<string, string>> = {
  'get-started': '/get-started',
  'ai-wireframe': '/wireframe',
};

export function LegacyHomeHashBridge({ redirectHome = false }: { redirectHome?: boolean }) {
  const router = useRouter();

  useEffect(() => {
    const redirectLegacyHash = () => {
      const sectionId = window.location.hash.slice(1);
      const route = legacyHashRoutes[sectionId];

      if (route !== undefined) {
        router.replace(route);
        return;
      }

      if (redirectHome) {
        window.location.replace(sectionId ? `/#${sectionId}` : '/');
      }
    };

    redirectLegacyHash();
    window.addEventListener('hashchange', redirectLegacyHash);
    return () => window.removeEventListener('hashchange', redirectLegacyHash);
  }, [redirectHome, router]);

  return null;
}
