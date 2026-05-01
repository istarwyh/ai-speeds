// 主模块聚合器
export { getStartedModule } from './get-started';

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
