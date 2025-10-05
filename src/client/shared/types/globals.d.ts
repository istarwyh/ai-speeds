// Global browser types for client-side code
declare global {
  interface Window {
    history: History;
    MutationObserver: typeof MutationObserver;
    Image: typeof HTMLImageElement;
    CanvasRenderingContext2D: typeof CanvasRenderingContext2D;
  }

  // Web API types
  interface ReadableStreamDefaultController<R = any> {
    enqueue(chunk?: R): void;
    close(): void;
    error(e?: any): void;
  }

  const history: History;
  const MutationObserver: {
    new (callback: MutationCallback): MutationObserver;
    prototype: MutationObserver;
  };
  const Image: {
    new (): HTMLImageElement;
    prototype: HTMLImageElement;
  };
  const CanvasRenderingContext2D: {
    prototype: CanvasRenderingContext2D;
  };
}

export {};
