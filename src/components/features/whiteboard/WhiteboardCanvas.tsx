'use client';

import { Excalidraw } from '@excalidraw/excalidraw';
import '@excalidraw/excalidraw/index.css';
import { useCallback, useEffect, useState } from 'react';
import type { ExcalidrawElement } from '@excalidraw/excalidraw/element/types';
import type { AppState, BinaryFiles } from '@excalidraw/excalidraw/types';

const STORAGE_KEY = 'excalidraw_whiteboard';
const DEBOUNCE_MS = 300;

const loadSavedData = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export function WhiteboardCanvas() {
  const [initialData, setInitialData] = useState<{
    elements: readonly ExcalidrawElement[];
    appState: Partial<AppState>;
  } | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = loadSavedData();
    if (saved) {
      setInitialData({
        elements: saved.elements ?? [],
        appState: saved.appState ?? {},
      });
    }
    setReady(true);
  }, []);

  const handleChange = useCallback(
    (elements: readonly ExcalidrawElement[], appState: AppState, _files: BinaryFiles) => {
      if (typeof window === 'undefined') {
        return;
      }
      clearTimeout((handleChange as unknown as { _t?: ReturnType<typeof setTimeout> })._t);
      (handleChange as unknown as { _t?: ReturnType<typeof setTimeout> })._t = setTimeout(() => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ elements, appState: { theme: appState.theme } }));
      }, DEBOUNCE_MS);
    },
    [],
  );

  if (!ready) {
    return null;
  }

  return (
    <div className='h-full w-full'>
      <Excalidraw
        initialData={initialData ? { elements: initialData.elements, appState: initialData.appState } : null}
        onChange={handleChange}
      />
    </div>
  );
}
