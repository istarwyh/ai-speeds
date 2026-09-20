import type { ReactNode } from 'react';
import { ToolShellHeader } from '@/components/tools/ToolShellHeader';

export default function ToolsLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-dvh min-h-0 flex-col overflow-hidden bg-bg-secondary text-text-primary'>
      <ToolShellHeader />
      <div id='tool-main-content' tabIndex={-1} className='min-h-0 flex-1 overflow-auto outline-none'>
        {children}
      </div>
    </div>
  );
}
