'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    window.location.replace(window.location.hash ? `/${window.location.hash}` : '/');
  }, []);

  return null;
}
