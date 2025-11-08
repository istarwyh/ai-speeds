import React from 'react';
import type { ContentTip } from '@/client/shared/types/ContentCard';
import styles from './ShareCard.module.css';

export interface ShareCardTipsProps {
  tips: ContentTip[];
}

/**
 * ShareCardTips - 提示框组件
 * 显示重点提示信息
 */
export const ShareCardTips: React.FC<ShareCardTipsProps> = ({ tips }) => {
  return (
    <div className={styles['tips']}>
      {tips.map((tip, index) => (
        <div key={index} className={styles['tipItem']}>
          <strong>{tip.title}：</strong>
          {tip.content}
        </div>
      ))}
    </div>
  );
};
