import { BaseCardRenderer } from '../../shared/renderers/BaseCardRenderer';
import type { SDKCard } from '../../shared/types/ContentCard';
import { applyCCCategoryConfig } from '../data/categoryConfig';

export class HowToApplyCCCardRenderer extends BaseCardRenderer<SDKCard> {
  constructor() {
    super(applyCCCategoryConfig);
  }
}
