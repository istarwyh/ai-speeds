import React from 'react';
import type { BaseContentCard } from '@/client/shared/types/ContentCard';
import { ShareCardHeader } from './ShareCardHeader';
import { ShareCardContent } from './ShareCardContent';
import { ShareCardImage } from './ShareCardImage';
import { ShareCardTips } from './ShareCardTips';
import { ShareCardTags } from './ShareCardTags';
import { ShareCardFooter } from './ShareCardFooter';
import styles from './ShareCard.module.css';

export interface ShareCardProps {
  card: BaseContentCard;
  getIcon: (category: string) => string;
  deepLink: string;
}

/**
 * ShareCard - 分享卡片主组件
 * 采用声明式 React 组件设计,通过 html2canvas 转换为图片
 */
export const ShareCard = React.forwardRef<HTMLDivElement, ShareCardProps>(({ card, getIcon, deepLink }, ref) => {
  const icon = getIcon(card.category) || '📋';
  const footerTags: string[] | undefined = card.tags && card.tags.length > 0 ? card.tags : undefined;

  return (
    <div ref={ref} className={styles['shareCard']}>
      {/* 顶部品牌色条 */}
      <div className={styles['brandStrip']} />

      {/* 主内容区 */}
      <div className={styles['content']}>
        <ShareCardHeader card={card} icon={icon} />

        {card.description && <ShareCardContent text={card.description} maxLines={3} />}
        {!card.description && card.overview && <ShareCardContent text={card.overview} maxLines={3} />}

        {card.imageUrl && <ShareCardImage imageUrl={card.imageUrl} />}

        {card.tips && card.tips.length > 0 && <ShareCardTips tips={card.tips} />}

        {card.tags && card.tags.length > 0 && <ShareCardTags tags={card.tags} />}
      </div>

      {/* 底部信息 */}
      <ShareCardFooter deepLink={deepLink} {...(footerTags ? { tags: footerTags } : {})} />
    </div>
  );
});

ShareCard.displayName = 'ShareCard';
