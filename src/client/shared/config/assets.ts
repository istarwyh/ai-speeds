/**
 * Centralized asset configuration for the application
 * This allows for easy management of image URLs and other assets
 */

export interface AssetConfig {
  baseUrl: string;
  images: Record<string, string>;
}

// Default configuration
export const DEFAULT_ASSET_CONFIG: AssetConfig = {
  baseUrl: 'https://xiaohui-zhangjiakou.oss-cn-zhangjiakou.aliyuncs.com/image/',
  images: {
    // How to Implement images
    'claude-code-implementation': '202508261857484.png',
    'claude-code-git-integration': '202508261902348.png',

    // Best Practices images
    'best-practice-1': '202508232133560.png',
    'best-practice-hooks': '202507202037009.png',
    'linus-torvalds-agent': '202508262218029.png',
  },
};

/**
 * Get full image URL from image key
 * @param imageKey - The key of the image
 * @param config - Optional custom asset configuration
 * @returns Full image URL
 */
export function getImageUrl(imageKey: string, config: AssetConfig = DEFAULT_ASSET_CONFIG): string {
  const imagePath = config.images[imageKey];
  if (!imagePath) {
    console.warn(`Image key "${imageKey}" not found in asset configuration`);
    return '';
  }
  return `${config.baseUrl}${imagePath}`;
}

/**
 * Get all available image keys
 * @param config - Optional custom asset configuration
 * @returns Array of available image keys
 */
export function getAvailableImageKeys(config: AssetConfig = DEFAULT_ASSET_CONFIG): string[] {
  return Object.keys(config.images);
}
