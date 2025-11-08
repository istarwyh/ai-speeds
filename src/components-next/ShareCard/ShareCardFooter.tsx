import React from 'react';
import styles from './ShareCard.module.css';

export interface ShareCardFooterProps {
  deepLink: string;
  tags?: string[];
}

/**
 * ShareCardFooter - 卡片底部组件
 * 包含品牌信息
 */
export const ShareCardFooter: React.FC<ShareCardFooterProps> = () => {
  return (
    <div className={styles['footer']}>
      <div className={styles['brandInfo']}>
        <span className={styles['brandText']}>aispeeds.me</span>
      </div>
      <div className={styles['qrCodePlaceholder']}>QR</div>
    </div>
  );
};
