import React from 'react';
import styles from './ShareCard.module.css';

export interface ShareCardContentProps {
  text: string;
  maxLines?: number;
}

/**
 * ShareCardContent - 内容文本组件
 * 支持多行文本显示和省略
 */
export const ShareCardContent: React.FC<ShareCardContentProps> = ({ text, maxLines = 3 }) => {
  return (
    <div
      className={styles['contentText']}
      style={{
        WebkitLineClamp: maxLines,
      }}
    >
      {text}
    </div>
  );
};
