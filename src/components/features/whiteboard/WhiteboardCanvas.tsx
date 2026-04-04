'use client';

import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';

export function WhiteboardCanvas() {
  return (
    <div className='h-full w-full'>
      <Tldraw persistenceKey='whiteboard' />
    </div>
  );
}
