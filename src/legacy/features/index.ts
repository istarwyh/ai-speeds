// 主模块聚合器
export { getStartedModule } from './get-started';
export { bestPracticesModule } from './best-practices';
export { implementationModule } from './how-to-implement';
export { howToApplyCCModule } from './how-to-apply-cc';

// 导入UI常量
import { UI_TEXTS } from '../config/ui-texts';

// 模块配置 - 使用单一数据源
export const moduleConfig = {
  'get-started': {
    title: UI_TEXTS.MODULE_TITLES['get-started'],
    icon: UI_TEXTS.MODULE_ICONS['get-started'],
    description: UI_TEXTS.MODULE_DESCRIPTIONS['get-started'],
    order: 1,
  },
  'best-practices': {
    title: UI_TEXTS.MODULE_TITLES['best-practices'],
    icon: UI_TEXTS.MODULE_ICONS['best-practices'],
    description: UI_TEXTS.MODULE_DESCRIPTIONS['best-practices'],
    order: 2,
  },
  'how-to-implement': {
    title: UI_TEXTS.MODULE_TITLES['how-to-implement'],
    icon: UI_TEXTS.MODULE_ICONS['how-to-implement'],
    description: UI_TEXTS.MODULE_DESCRIPTIONS['how-to-implement'],
    order: 3,
  },
  'how-to-apply-cc': {
    title: UI_TEXTS.MODULE_TITLES['how-to-apply-cc'],
    icon: UI_TEXTS.MODULE_ICONS['how-to-apply-cc'],
    description: UI_TEXTS.MODULE_DESCRIPTIONS['how-to-apply-cc'],
    order: 4,
  },
};

// 内容类型定义
export interface ContentItem {
  id: string;
  title: string;
  category: string;
  status: 'published' | 'coming-soon' | 'draft';
  path?: string;
  component?: string;
}

export interface ModuleStructure {
  components: string[];
  content: ContentItem[];
  articles?: ContentItem[];
  guides?: ContentItem[];
}
