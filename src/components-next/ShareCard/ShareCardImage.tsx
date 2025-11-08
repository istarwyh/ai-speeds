import React from 'react';
import styles from './ShareCard.module.css';

export interface ShareCardImageProps {
  imageUrl: string;
}

/**
 * ShareCardImage - 图片组件
 * 使用 object-fit: cover 保持宽高比
 */
export const ShareCardImage: React.FC<ShareCardImageProps> = ({ imageUrl }) => {
  const resolvedUrl = imageUrl.startsWith('http') ? `/img-proxy?src=${encodeURIComponent(imageUrl)}` : imageUrl;

  return (
    <div className={styles['imageContainer']}>
      <img src={resolvedUrl} alt='' className={styles['image']} crossOrigin='anonymous' />
    </div>
  );
};
