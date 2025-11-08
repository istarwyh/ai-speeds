import React from 'react';
import type { BaseContentCard } from '@/client/shared/types/ContentCard';
import styles from './ShareCard.module.css';

export interface ShareCardHeaderProps {
  card: BaseContentCard;
  icon: string;
}

/**
 * ShareCardHeader - 卡片头部组件
 * 包含图标和标题
 */
export const ShareCardHeader: React.FC<ShareCardHeaderProps> = ({ card, icon }) => {
  return (
    <div className={styles['header']}>
      <div className={styles['iconWrapper']}>
        <span className={styles['icon']}>{icon}</span>
      </div>
      <div className={styles['titleWrapper']}>
        <h2 className={styles['title']}>{card.title}</h2>
      </div>
    </div>
  );
};
