'use client';

import dynamic from 'next/dynamic';

const WhiteboardCanvas = dynamic(() => import('./WhiteboardCanvas').then(m => m.WhiteboardCanvas), { ssr: false });

export function WhiteboardLoader() {
  return <WhiteboardCanvas />;
}
