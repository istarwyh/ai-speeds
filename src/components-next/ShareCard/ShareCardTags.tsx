import React from 'react';
import styles from './ShareCard.module.css';

export interface ShareCardTagsProps {
  tags: string[];
}

/**
 * ShareCardTags - 标签组件
 * 显示卡片相关标签
 */
export const ShareCardTags: React.FC<ShareCardTagsProps> = ({ tags }) => {
  return (
    <div className={styles['tags']}>
      {tags.map((tag, index) => (
        <span key={index} className={styles['tag']}>
          {tag}
        </span>
      ))}
    </div>
  );
};
