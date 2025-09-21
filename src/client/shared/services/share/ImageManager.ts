/// <reference path="../../types/env.d.ts" />

export interface ImageLoadOptions {
  crossOrigin?: string;
  timeout?: number;
}

export class ImageManager {
  private imageCache = new Map<string, HTMLImageElement>();
  private loadingPromises = new Map<string, Promise<HTMLImageElement>>();

  // Load image with caching and error handling
  public async loadImage(url: string, options: ImageLoadOptions = {}): Promise<HTMLImageElement> {
    // Check cache first
    if (this.imageCache.has(url)) {
      return this.imageCache.get(url)!;
    }

    // Check if already loading
    if (this.loadingPromises.has(url)) {
      return this.loadingPromises.get(url)!;
    }

    // Start loading
    const loadPromise = this.createImageLoadPromise(url, options);
    this.loadingPromises.set(url, loadPromise);

    try {
      const img = await loadPromise;
      this.imageCache.set(url, img);
      this.loadingPromises.delete(url);
      return img;
    } catch (error) {
      this.loadingPromises.delete(url);
      throw error;
    }
  }

  // Load QR code image
  public async loadQRImage(data: string, size: number): Promise<HTMLImageElement> {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`;
    return this.loadImage(qrUrl, { crossOrigin: 'anonymous' });
  }

  // Resolve image URL with proxy handling
  public resolveImageUrl(url: string): string {
    try {
      const absoluteUrl = new URL(url, window.location.href);

      // Use proxy for external HTTPS images to avoid CORS issues
      if (absoluteUrl.origin !== window.location.origin && absoluteUrl.protocol === 'https:') {
        return `/img-proxy?src=${encodeURIComponent(absoluteUrl.toString())}`;
      }

      return absoluteUrl.toString();
    } catch {
      // If URL parsing fails, return original and let upstream handle errors
      return url;
    }
  }

  // Calculate image dimensions for canvas rendering
  public calculateImageDimensions(
    img: HTMLImageElement,
    maxWidth: number,
    maxHeight?: number,
    pageImageInfo?: { pageImageWidth?: number; pageImageHeight?: number },
  ): { width: number; height: number } {
    // Prefer page display dimensions for consistency
    if (pageImageInfo?.pageImageWidth && pageImageInfo?.pageImageHeight) {
      const pageAspect = pageImageInfo.pageImageHeight / pageImageInfo.pageImageWidth;
      return {
        width: maxWidth,
        height: Math.round(maxWidth * pageAspect),
      };
    }

    // Fallback to natural aspect ratio
    const naturalAspect = img.naturalHeight / img.naturalWidth;
    let width = maxWidth;
    let height = Math.round(width * naturalAspect);

    // Apply max height constraint if specified
    if (maxHeight && height > maxHeight) {
      height = maxHeight;
      width = Math.round(height / naturalAspect);
    }

    return { width, height };
  }

  // Create placeholder for failed image loads
  public createPlaceholder(
    width: number,
    height: number,
    text: string = '封面图',
  ): { width: number; height: number; text: string } {
    return { width, height, text };
  }

  // Clear cache (useful for memory management)
  public clearCache(): void {
    this.imageCache.clear();
    this.loadingPromises.clear();
  }

  // Get cache statistics
  public getCacheStats(): { cached: number; loading: number } {
    return {
      cached: this.imageCache.size,
      loading: this.loadingPromises.size,
    };
  }

  private createImageLoadPromise(url: string, options: ImageLoadOptions): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();

      // Set cross-origin if specified
      if (options.crossOrigin) {
        img.crossOrigin = options.crossOrigin;
      }

      // Set up timeout
      const timeout = options.timeout || 10000; // 10 second default
      const timeoutId = setTimeout(() => {
        reject(new Error(`Image load timeout: ${url}`));
      }, timeout);

      img.onload = () => {
        clearTimeout(timeoutId);
        resolve(img);
      };

      img.onerror = () => {
        clearTimeout(timeoutId);
        reject(new Error(`Image load failed: ${url}`));
      };

      // Start loading
      img.src = this.resolveImageUrl(url);
    });
  }
}
