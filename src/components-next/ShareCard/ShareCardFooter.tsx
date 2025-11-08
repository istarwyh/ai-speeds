import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './ShareCard.module.css';

export interface ShareCardFooterProps {
  deepLink: string;
  tags?: string[];
}

/**
 * ShareCardFooter - 卡片底部组件
 * 包含品牌信息和动态生成的二维码
 */
export const ShareCardFooter: React.FC<ShareCardFooterProps> = ({ deepLink }) => {
  return (
    <div className={styles['footer']}>
      <div className={styles['brandInfo']}>
        <span className={styles['brandText']}>aispeeds.me</span>
      </div>
      <QRCodeSVG
        value={deepLink}
        size={48}
        bgColor='#ffffff'
        fgColor='#000000'
        level='L'
        style={{ borderRadius: '4px' }}
      />
    </div>
  );
};
