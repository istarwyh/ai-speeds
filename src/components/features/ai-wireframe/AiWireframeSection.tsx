'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type DragEvent,
  type PointerEvent,
  type ReactNode,
} from 'react';

type WireframeElementKind =
  | 'text'
  | 'box'
  | 'divider'
  | 'button'
  | 'input'
  | 'card'
  | 'table'
  | 'list'
  | 'navbar'
  | 'tabs'
  | 'modal'
  | 'placeholder'
  | 'search'
  | 'pagination';

type WireframeRegion = 'header' | 'sidebar' | 'main' | 'footer' | 'modal' | 'floating';
type ToolId = 'select' | WireframeElementKind;
type DragMode = 'move' | 'resize';
type ResizeHandle = 'nw' | 'ne' | 'sw' | 'se';
type SecondaryPanel = 'templates' | 'export' | 'page';
type RightPanel = 'layers' | 'inspector';
type FeedbackTone = 'success' | 'error' | 'info';
type CanvasViewport = 'web' | 'mobile';
type NumberField = 'x' | 'y' | 'w' | 'h' | 'z';
type AlignmentGuide = { orientation: 'horizontal' | 'vertical'; position: number };
type PlacementPreview = { kind: WireframeElementKind; x: number; y: number; w: number; h: number };
type OutputSection = { title: string; content: string };

type WireframeElement = {
  id: string;
  kind: WireframeElementKind;
  title: string;
  details: string;
  notes: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  region: WireframeRegion;
};

type WireframeDocument = {
  pageName: string;
  purpose: string;
  styleDirection: string;
  elements: WireframeElement[];
};

type TemplateElement = Omit<WireframeElement, 'id'>;

type WireframeTemplate = {
  id: string;
  name: string;
  description: string;
  pageName: string;
  purpose: string;
  styleDirection: string;
  elements: TemplateElement[];
};

type ElementPreset = Omit<WireframeElement, 'id' | 'x' | 'y' | 'z'>;

type DragOrigin = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type DragState = {
  id: string;
  mode: DragMode;
  handle: ResizeHandle;
  startClientX: number;
  startClientY: number;
  originX: number;
  originY: number;
  originW: number;
  originH: number;
  origins: DragOrigin[];
};

type Feedback = {
  tone: FeedbackTone;
  message: string;
};

type ToolDefinition = {
  id: ToolId;
  label: string;
  group: 'BASICS' | 'UI ELEMENTS' | 'STRUCTURE';
  glyph: string;
  hint: string;
};

const storageKey = 'ai-wireframe-editor-v2';
const defaultExampleTemplateId = 'google-search-example';
const dragDataType = 'application/x-ai-wireframe-kind';
const pageColumns = 78;
const pageRows = 31;
const minElementWidth = 6;
const minElementHeight = 4;
const canvasViewports: Record<CanvasViewport, { label: string; width: number; height: number; note: string }> = {
  web: { label: 'Web 端', width: 1180, height: 820, note: '桌面页面稿纸' },
  mobile: { label: '移动端', width: 390, height: 844, note: '手机页面稿纸' },
};
const canvasViewportIds: CanvasViewport[] = ['web', 'mobile'];
const canvasZoomMin = 0.5;
const canvasZoomMax = 1.6;
const canvasZoomStep = 0.1;

const elementKindIds: WireframeElementKind[] = [
  'text',
  'box',
  'divider',
  'button',
  'input',
  'card',
  'table',
  'list',
  'navbar',
  'tabs',
  'modal',
  'placeholder',
  'search',
  'pagination',
];

const regionIds: WireframeRegion[] = ['header', 'sidebar', 'main', 'footer', 'modal', 'floating'];

const tools: ToolDefinition[] = [
  { id: 'select', label: '选择', group: 'BASICS', glyph: '⌖', hint: '移动、缩放、编辑图层' },
  { id: 'text', label: '文本', group: 'BASICS', glyph: 'T', hint: '标题、标签或说明文字' },
  { id: 'button', label: '按钮', group: 'UI ELEMENTS', glyph: '●', hint: '主要或次要操作' },
  { id: 'input', label: '输入框', group: 'UI ELEMENTS', glyph: '⌜⌟', hint: '文本输入或表单控件' },
  { id: 'card', label: '卡片', group: 'UI ELEMENTS', glyph: '▱', hint: '成组内容面板' },
  { id: 'box', label: '区块', group: 'BASICS', glyph: '□', hint: '通用内容区域' },
  { id: 'divider', label: '分割线', group: 'BASICS', glyph: '─', hint: '视觉分隔或流程线' },
  { id: 'table', label: '表格', group: 'UI ELEMENTS', glyph: '▦', hint: '带行列的数据表' },
  { id: 'modal', label: '弹窗', group: 'UI ELEMENTS', glyph: '▣', hint: '对话框或确认流程' },
  { id: 'navbar', label: '导航', group: 'STRUCTURE', glyph: '⌐', hint: '顶部导航或页面头部' },
  { id: 'tabs', label: '标签页', group: 'STRUCTURE', glyph: '▭', hint: '分段导航' },
  { id: 'search', label: '搜索区', group: 'STRUCTURE', glyph: '⌕', hint: '搜索与筛选区域' },
  { id: 'list', label: '列表', group: 'STRUCTURE', glyph: '≡', hint: '重复内容、动态或菜单' },
  { id: 'pagination', label: '分页', group: 'STRUCTURE', glyph: '<>', hint: '分页控制区' },
  { id: 'placeholder', label: '占位区', group: 'STRUCTURE', glyph: '▒', hint: '图表、图片、空状态或未知区域' },
];

const primaryToolIds: ToolId[] = ['select', 'text', 'button', 'input', 'card', 'box'];

const emptyWireframe: WireframeDocument = {
  pageName: '未命名页面',
  purpose: '描述这个页面要帮助用户完成什么任务。',
  styleDirection: '低保真、结构清晰、可访问，方便 AI 编程工具直接理解与实现。',
  elements: [],
};

const canvasGridStyle: CSSProperties = {
  backgroundColor: '#fbfaf4',
  backgroundImage:
    'linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(rgba(15,23,42,0.075) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.075) 1px, transparent 1px)',
  backgroundPosition: '0 0, 0 0, 0 0, 0 0',
  backgroundSize: '16px 16px, 16px 16px, 80px 80px, 80px 80px',
};

const displayFont: CSSProperties = {
  fontFamily: ['Georgia', 'Songti SC', 'Noto Serif CJK SC', 'serif'].join(', '),
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function splitLines(value: string): string[] {
  return value
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);
}

function kindLabel(kind: WireframeElementKind): string {
  switch (kind) {
    case 'text':
      return '文本';
    case 'box':
      return '区块';
    case 'divider':
      return '分割线';
    case 'button':
      return '按钮';
    case 'input':
      return '输入框';
    case 'card':
      return '卡片';
    case 'table':
      return '表格';
    case 'list':
      return '列表';
    case 'navbar':
      return '导航栏';
    case 'tabs':
      return '标签页';
    case 'modal':
      return '弹窗';
    case 'placeholder':
      return '占位区';
    case 'search':
      return '搜索区';
    case 'pagination':
      return '分页';
  }
}

function regionLabel(region: WireframeRegion): string {
  switch (region) {
    case 'header':
      return '顶部 / 头部';
    case 'sidebar':
      return '左侧 / 侧边栏';
    case 'main':
      return '主体内容';
    case 'footer':
      return '底部';
    case 'modal':
      return '弹窗层';
    case 'floating':
      return '浮动操作';
  }
}

function toolGroupLabel(group: ToolDefinition['group']): string {
  switch (group) {
    case 'BASICS':
      return '基础工具';
    case 'UI ELEMENTS':
      return '界面元素';
    case 'STRUCTURE':
      return '页面结构';
  }
}

function presetFor(kind: WireframeElementKind): ElementPreset {
  switch (kind) {
    case 'text':
      return {
        kind,
        title: '区块标题',
        details: '补充说明或帮助文案',
        notes: '用于页面标题、字段标签、提示说明等文本信息。',
        w: 24,
        h: 9,
        region: 'main',
      };
    case 'box':
      return {
        kind,
        title: '内容区块',
        details: '成组内容区域',
        notes: '用于表达页面分区、布局区域或内容容器。',
        w: 34,
        h: 22,
        region: 'main',
      };
    case 'divider':
      return {
        kind,
        title: '分割线',
        details: '分隔页面区域',
        notes: '用于结构分隔，不用于高保真装饰。',
        w: 36,
        h: 5,
        region: 'main',
      };
    case 'button':
      return {
        kind,
        title: '主要操作',
        details: '点击触发核心动作',
        notes: '标注它是主按钮、次按钮、危险操作还是链接样式。',
        w: 18,
        h: 8,
        region: 'main',
      };
    case 'input':
      return {
        kind,
        title: '输入项标签',
        details: '占位提示文案',
        notes: '说明校验规则、必填状态和辅助提示。',
        w: 32,
        h: 9,
        region: 'main',
      };
    case 'card':
      return {
        kind,
        title: '卡片标题',
        details: '指标、摘要或成组控件',
        notes: '用于表达嵌套内容组或独立信息卡片。',
        w: 30,
        h: 18,
        region: 'main',
      };
    case 'table':
      return {
        kind,
        title: '数据表格',
        details: '姓名 | 手机号 | 状态 | 操作\n张三 | 13800000000 | 启用 | 编辑\n李四 | 13900000000 | 待审核 | 编辑',
        notes: '第一行写表头，后续行写示例数据。',
        w: 58,
        h: 24,
        region: 'main',
      };
    case 'list':
      return {
        kind,
        title: '列表组',
        details: '第一项\n第二项\n第三项',
        notes: '用于导航列表、消息流、卡片列表或重复内容。',
        w: 28,
        h: 20,
        region: 'main',
      };
    case 'navbar':
      return {
        kind,
        title: '页面标题',
        details: '概览 | 报表 | 设置 | [新建]',
        notes: '顶层导航和页面级操作。',
        w: 78,
        h: 9,
        region: 'header',
      };
    case 'tabs':
      return {
        kind,
        title: '标签页组',
        details: '资料 | 安全 | 账单',
        notes: '默认第一个标签为当前选中项，除非另有说明。',
        w: 40,
        h: 9,
        region: 'main',
      };
    case 'modal':
      return {
        kind,
        title: '确认操作',
        details: '确定要继续吗？\n[取消] [确认]',
        notes: '描述触发方式、遮罩行为和关闭方式。',
        w: 36,
        h: 24,
        region: 'modal',
      };
    case 'placeholder':
      return {
        kind,
        title: '内容占位区',
        details: '图表 / 图片 / 空状态区域',
        notes: '当具体内容还不重要时，用它表达结构位置。',
        w: 34,
        h: 20,
        region: 'main',
      };
    case 'search':
      return {
        kind,
        title: '搜索用户...',
        details: '筛选：角色、状态、团队',
        notes: '说明这个搜索区域面向哪些对象和筛选维度。',
        w: 50,
        h: 9,
        region: 'main',
      };
    case 'pagination':
      return {
        kind,
        title: '分页',
        details: '< 上一页   1  2  3   下一页 >',
        notes: '说明每页条数、总数和禁用状态。',
        w: 40,
        h: 8,
        region: 'footer',
      };
  }
}

function isElementKind(value: unknown): value is WireframeElementKind {
  return typeof value === 'string' && elementKindIds.some(kind => kind === value);
}

function isRegion(value: unknown): value is WireframeRegion {
  return typeof value === 'string' && regionIds.some(region => region === value);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isWireframeElement(value: unknown): value is WireframeElement {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value['id'] === 'string' &&
    isElementKind(value['kind']) &&
    typeof value['title'] === 'string' &&
    typeof value['details'] === 'string' &&
    typeof value['notes'] === 'string' &&
    typeof value['x'] === 'number' &&
    typeof value['y'] === 'number' &&
    typeof value['w'] === 'number' &&
    typeof value['h'] === 'number' &&
    typeof value['z'] === 'number' &&
    isRegion(value['region'])
  );
}

function isWireframeDocument(value: unknown): value is WireframeDocument {
  if (!isRecord(value)) {
    return false;
  }

  const elements = value['elements'];
  return (
    typeof value['pageName'] === 'string' &&
    typeof value['purpose'] === 'string' &&
    typeof value['styleDirection'] === 'string' &&
    Array.isArray(elements) &&
    elements.every(isWireframeElement)
  );
}

function normalizeElementBounds(element: WireframeElement): WireframeElement {
  const w = clamp(Math.round(element.w), minElementWidth, 98);
  const h = clamp(Math.round(element.h), minElementHeight, 94);
  return {
    ...element,
    x: clamp(Math.round(element.x), 0, 100 - w),
    y: clamp(Math.round(element.y), 0, 100 - h),
    w,
    h,
    z: clamp(Math.round(element.z), 1, 999),
  };
}

function cloneWireframe(wireframe: WireframeDocument): WireframeDocument {
  return {
    ...wireframe,
    elements: wireframe.elements.map(element => ({ ...element })),
  };
}

function toolById(id: ToolId): ToolDefinition | null {
  return tools.find(tool => tool.id === id) ?? null;
}

function snapValue(value: number, targets: number[]): { value: number; guide: number | null } {
  const threshold = 1.25;
  let snappedValue = value;
  let guide: number | null = null;
  let bestDistance = threshold;

  targets.forEach(target => {
    const distance = Math.abs(value - target);
    if (distance <= bestDistance) {
      snappedValue = target;
      guide = target;
      bestDistance = distance;
    }
  });

  return { value: snappedValue, guide };
}

function snapMovingElement(
  element: WireframeElement,
  patch: Pick<WireframeElement, 'x' | 'y'>,
  elements: WireframeElement[],
  movingIds: string[],
): { patch: Pick<WireframeElement, 'x' | 'y'>; guides: AlignmentGuide[] } {
  const stationaryElements = elements.filter(candidate => !movingIds.includes(candidate.id));
  const verticalTargets = [
    0,
    50,
    100,
    ...stationaryElements.flatMap(candidate => [candidate.x, candidate.x + candidate.w / 2, candidate.x + candidate.w]),
  ];
  const horizontalTargets = [
    0,
    50,
    100,
    ...stationaryElements.flatMap(candidate => [candidate.y, candidate.y + candidate.h / 2, candidate.y + candidate.h]),
  ];
  const left = patch.x;
  const centerX = patch.x + element.w / 2;
  const right = patch.x + element.w;
  const top = patch.y;
  const centerY = patch.y + element.h / 2;
  const bottom = patch.y + element.h;
  const leftSnap = snapValue(left, verticalTargets);
  const centerXSnap = snapValue(centerX, verticalTargets);
  const rightSnap = snapValue(right, verticalTargets);
  const topSnap = snapValue(top, horizontalTargets);
  const centerYSnap = snapValue(centerY, horizontalTargets);
  const bottomSnap = snapValue(bottom, horizontalTargets);
  const verticalSnap = [leftSnap, centerXSnap, rightSnap].find(result => result.guide !== null);
  const horizontalSnap = [topSnap, centerYSnap, bottomSnap].find(result => result.guide !== null);
  let nextX = patch.x;
  let nextY = patch.y;
  const guides: AlignmentGuide[] = [];

  if (verticalSnap && verticalSnap.guide !== null) {
    nextX += verticalSnap.value - (verticalSnap === leftSnap ? left : verticalSnap === centerXSnap ? centerX : right);
    guides.push({ orientation: 'vertical', position: verticalSnap.guide });
  }

  if (horizontalSnap && horizontalSnap.guide !== null) {
    nextY +=
      horizontalSnap.value - (horizontalSnap === topSnap ? top : horizontalSnap === centerYSnap ? centerY : bottom);
    guides.push({ orientation: 'horizontal', position: horizontalSnap.guide });
  }

  return { patch: { x: nextX, y: nextY }, guides };
}

function templateElement(
  kind: WireframeElementKind,
  title: string,
  details: string,
  x: number,
  y: number,
  w: number,
  h: number,
  region: WireframeRegion,
  notes: string,
  z: number,
): TemplateElement {
  return { kind, title, details, x, y, w, h, region, notes, z };
}

const wireframeTemplates: WireframeTemplate[] = [
  {
    id: 'google-search-example',
    name: 'Google 搜索页示例',
    description: '更像搜索首页：右上导航、中心品牌、搜索胶囊、双按钮和底部链接。',
    pageName: 'Google 搜索页结构示例',
    purpose: '帮助用户理解一个搜索首页如何由右上入口、品牌焦点、搜索框、快捷操作和底部辅助导航组成。',
    styleDirection: '极简、留白充足、中心聚焦；只表达结构，不使用真实品牌素材或图片。',
    elements: [
      templateElement(
        'navbar',
        '右上导航',
        'Gmail | 图片 | 应用 | 登录',
        56,
        4,
        38,
        7,
        'header',
        '顶部导航靠右，登录是最明确的账号入口。',
        1,
      ),
      templateElement(
        'text',
        'Google',
        '品牌字标占位，不依赖真实 Logo 图片。',
        36,
        19,
        28,
        11,
        'main',
        '这是视觉焦点，保持居中和足够留白。',
        2,
      ),
      templateElement(
        'search',
        '搜索或输入网址',
        '语音搜索 | 图片搜索 | 自动补全',
        24,
        38,
        52,
        9,
        'main',
        '输入时展示搜索建议；回车或点击搜索按钮提交。',
        3,
      ),
      templateElement(
        'button',
        'Google 搜索',
        '主要搜索操作',
        34,
        52,
        15,
        7,
        'main',
        '提交当前关键词并进入搜索结果页。',
        4,
      ),
      templateElement(
        'button',
        '手气不错',
        '次要探索操作',
        51,
        52,
        15,
        7,
        'main',
        '直接跳转到一个最匹配结果，可作为次要按钮。',
        5,
      ),
      templateElement(
        'text',
        '语言切换',
        'Google 提供：English | 简体中文',
        35,
        64,
        30,
        7,
        'main',
        '辅助链接弱化展示。',
        6,
      ),
      templateElement(
        'box',
        '底部链接栏',
        '关于 | 广告 | 商务 | 隐私 | 条款 | 设置',
        4,
        88,
        92,
        8,
        'footer',
        '底部是辅助链接，移动端可折叠为两行。',
        7,
      ),
    ],
  },
  {
    id: 'douyin-feed-example',
    name: '抖音短视频页示例',
    description: '手机画板形态：9:16 视频、频道、右侧互动、底部文案和导航。',
    pageName: '抖音短视频页结构示例',
    purpose: '表达一个短视频沉浸式信息流页面的核心区域、互动关系和导航层级。',
    styleDirection: '移动端优先、沉浸式、内容占满主体；结构上突出视频、互动和切换下一条。',
    elements: [
      templateElement(
        'box',
        '手机画板 9:16',
        '沉浸式短视频 App 容器',
        35,
        3,
        30,
        93,
        'main',
        '移动端画板，所有核心控件都在手机容器内。',
        1,
      ),
      templateElement('tabs', '频道', '关注 | 推荐 | 同城', 39, 7, 22, 7, 'header', '推荐是默认激活频道。', 2),
      templateElement(
        'placeholder',
        '全屏视频',
        '上下滑切换下一条',
        38,
        15,
        24,
        57,
        'main',
        '视频区域是页面主体，支持上下滑动切换内容。',
        3,
      ),
      templateElement(
        'list',
        '互动栏',
        '头像 +\n♥ 12.8w\n评论 3421\n收藏\n分享',
        60,
        30,
        8,
        34,
        'floating',
        '互动栏悬浮在视频右侧，点击评论打开底部评论面板。',
        4,
      ),
      templateElement(
        'text',
        '视频文案',
        '@创作者昵称\n标题 / 话题标签 / 音乐',
        39,
        72,
        21,
        12,
        'main',
        '底部文案覆盖在视频上，保证可读性。',
        5,
      ),
      templateElement(
        'navbar',
        '底部导航',
        '首页 | 朋友 | + | 消息 | 我',
        38,
        88,
        24,
        7,
        'footer',
        '发布按钮位于导航中间，是高优先级入口。',
        6,
      ),
    ],
  },
  {
    id: 'xiaohongshu-notes-example',
    name: '小红书笔记流示例',
    description: '手机画板形态：搜索、频道筛选、双列瀑布流卡片和底部导航。',
    pageName: '小红书笔记流结构示例',
    purpose: '表达一个种草社区首页如何组织搜索、频道、瀑布流内容和发布入口。',
    styleDirection: '内容卡片优先、轻社区氛围、移动端瀑布流；重点表达卡片层级和互动信息。',
    elements: [
      templateElement(
        'box',
        '手机画板',
        '内容社区 App 首页容器',
        34,
        3,
        32,
        93,
        'main',
        '移动端画板，内部是双列瀑布流。',
        1,
      ),
      templateElement(
        'search',
        '搜索笔记 / 商品 / 用户',
        '扫一扫 | 消息',
        37,
        7,
        26,
        7,
        'header',
        '搜索是内容发现主入口。',
        2,
      ),
      templateElement(
        'tabs',
        '频道筛选',
        '关注 | 发现 | 附近 | 美食',
        37,
        17,
        26,
        6,
        'main',
        '横向滚动频道，发现为默认激活。',
        3,
      ),
      templateElement(
        'card',
        '咖啡路线',
        '封面图\n标题：周末咖啡店路线\n♥ 2.4k',
        37,
        26,
        12,
        27,
        'main',
        '卡片点击进入笔记详情，点赞数展示在卡片底部。',
        4,
      ),
      templateElement(
        'card',
        '通勤穿搭',
        '封面图\n标题：一周通勤穿搭\n♥ 987',
        51,
        26,
        12,
        33,
        'main',
        '瀑布流卡片高度可不同。',
        5,
      ),
      templateElement(
        'card',
        '露营装备',
        '封面图\n标题：新手露营装备\n♥ 1.1k',
        37,
        56,
        12,
        25,
        'main',
        '移动端双列瀑布流继续向下滚动。',
        6,
      ),
      templateElement(
        'card',
        '晚餐灵感',
        '封面图\n标题：下班快手菜\n♥ 3.2k',
        51,
        62,
        12,
        20,
        'main',
        '短卡片与长卡片错位排列。',
        7,
      ),
      templateElement(
        'navbar',
        '底部导航',
        '首页 | 购物 | + | 消息 | 我',
        37,
        88,
        26,
        7,
        'footer',
        '发布入口居中，底部导航固定。',
        8,
      ),
    ],
  },
  {
    id: 'user-management',
    name: '用户管理',
    description: '顶部操作、搜索筛选、数据表格和分页。',
    pageName: '用户管理',
    purpose: '管理用户，按关键词搜索，查看账号状态，并编辑单个用户。',
    styleDirection: '清爽的后台管理界面，层级清晰、控件紧凑，优先满足桌面端数据密度。',
    elements: [
      templateElement(
        'navbar',
        '用户管理',
        '团队成员 | 角色权限 | 操作日志 | [新增用户]',
        4,
        4,
        82,
        9,
        'header',
        '新增用户是页面主操作。',
        1,
      ),
      templateElement(
        'search',
        '搜索用户...',
        '筛选：角色、状态、最近活跃',
        7,
        18,
        54,
        9,
        'main',
        '搜索会过滤表格，筛选项用于进一步缩小结果范围。',
        2,
      ),
      templateElement('button', '邮件邀请', '搜索区附近的次要操作', 66, 18, 19, 9, 'main', '打开轻量邀请流程。', 3),
      templateElement(
        'table',
        '用户表格',
        '姓名 | 邮箱 | 状态 | 操作\n张三 | zhangsan@example.com | 启用 | 编辑\n李四 | lisi@example.com | 待审核 | 编辑\n王五 | wangwu@example.com | 停用 | 编辑',
        7,
        32,
        78,
        36,
        'main',
        '状态使用徽标展示，编辑会打开用户详情抽屉。',
        4,
      ),
      templateElement(
        'pagination',
        '分页',
        '< 上一页   1  2  3   下一页 >',
        28,
        74,
        42,
        8,
        'footer',
        '分页旁展示结果总数。',
        5,
      ),
    ],
  },
  {
    id: 'login',
    name: '登录',
    description: '居中的登录卡片，保留少量辅助链接。',
    pageName: '登录',
    purpose: '让老用户快速登录，并在需要时找回访问权限。',
    styleDirection: '安静可信的单列布局，核心是紧凑的登录卡片。',
    elements: [
      templateElement(
        'text',
        '欢迎回来',
        '登录后继续进入你的工作台。',
        35,
        12,
        30,
        9,
        'main',
        '首屏文案要让用户确认自己来对了地方。',
        1,
      ),
      templateElement(
        'card',
        '登录卡片',
        '手机号 / 邮箱输入框\n密码输入框\n[登录]\n忘记密码？',
        32,
        27,
        36,
        38,
        'main',
        '卡片包含完整登录表单，并支持键盘操作。',
        2,
      ),
      templateElement('button', '登录', '主要提交按钮', 39, 55, 22, 8, 'main', '登录校验期间展示加载状态。', 3),
    ],
  },
  {
    id: 'register',
    name: '注册',
    description: '账号创建表单和价值说明面板。',
    pageName: '创建账号',
    purpose: '帮助新用户创建账号，并理解注册后的下一步。',
    styleDirection: '友好的注册引导页，表单清晰，并带有降低顾虑的侧边说明。',
    elements: [
      templateElement(
        'card',
        '创建你的账号',
        '姓名输入框\n手机号 / 邮箱输入框\n密码输入框\n[创建账号]',
        12,
        17,
        36,
        48,
        'main',
        '内联校验说明密码要求。',
        1,
      ),
      templateElement(
        'box',
        '为什么加入',
        '无需绑定银行卡\n草稿保存在本地\n随时可以取消',
        56,
        19,
        30,
        38,
        'main',
        '说明面板解释产品价值，但不干扰表单填写。',
        2,
      ),
      templateElement(
        'text',
        '已有账号？',
        '表单下方提供登录链接。',
        15,
        70,
        32,
        8,
        'footer',
        '视觉上弱于注册主流程。',
        3,
      ),
    ],
  },
  {
    id: 'dashboard',
    name: '仪表盘',
    description: '指标卡、核心图表和活动侧栏。',
    pageName: '产品仪表盘',
    purpose: '汇总产品健康度、近期动态和最重要的运营操作。',
    styleDirection: '偏分析型仪表盘，包含指标卡、核心图表区域和紧凑活动侧栏。',
    elements: [
      templateElement(
        'navbar',
        '仪表盘',
        '概览 | 分析 | 报表 | [导出]',
        4,
        4,
        82,
        9,
        'header',
        '日期范围选择器可放在头部。',
        1,
      ),
      templateElement('card', '收入', '¥34.8 万\n较上月 +12%', 6, 18, 24, 16, 'main', '带趋势提示的指标卡。', 2),
      templateElement('card', '活跃用户', '12,840\n本周 +8%', 36, 18, 24, 16, 'main', '带简短辅助说明的指标卡。', 3),
      templateElement('card', '转化率', '7.4%\n需要关注', 66, 18, 24, 16, 'main', '该指标卡可使用预警样式。', 4),
      templateElement(
        'placeholder',
        '使用趋势图',
        '折线图占位\n时间范围：最近 30 天',
        6,
        40,
        58,
        34,
        'main',
        '实现图表，或提供表格兜底。',
        5,
      ),
      templateElement(
        'list',
        '最近动态',
        '新团队加入\n账单已更新\nAPI Key 已轮换\n报表已导出',
        69,
        40,
        23,
        34,
        'sidebar',
        '右侧栏内容较长时可独立滚动。',
        6,
      ),
    ],
  },
  {
    id: 'settings',
    name: '设置',
    description: '标签页、表单卡片、帮助面板和固定操作区。',
    pageName: '设置',
    purpose: '让用户查看并更新资料、安全、通知和账单偏好。',
    styleDirection: '结构化设置页，分区稳定，并提供清晰保存反馈。',
    elements: [
      templateElement(
        'navbar',
        '设置',
        '账号偏好与工作区控制',
        5,
        5,
        84,
        9,
        'header',
        '保持页面标题和保存状态可见。',
        1,
      ),
      templateElement(
        'tabs',
        '设置标签页',
        '资料 | 安全 | 通知 | 账单',
        7,
        20,
        58,
        9,
        'main',
        '标签页在当前页面内切换设置分区。',
        2,
      ),
      templateElement(
        'card',
        '资料表单',
        '显示名称\n邮箱地址\n时区\n语言',
        7,
        34,
        55,
        36,
        'main',
        '输入项需要明确标签，并按用途分组。',
        3,
      ),
      templateElement(
        'box',
        '帮助面板',
        '资料修改会应用到所有工作区。\n所有权问题请联系客服处理。',
        67,
        34,
        24,
        28,
        'sidebar',
        '辅助信息放在表单侧边。',
        4,
      ),
      templateElement('button', '保存修改', '底部固定主操作', 69, 76, 22, 8, 'footer', '未检测到修改前保持禁用。', 5),
    ],
  },
  {
    id: 'pricing',
    name: '价格页',
    description: '套餐卡片、推荐套餐和常见问题。',
    pageName: '价格页',
    purpose: '对比订阅套餐，并引导访客选择合适方案。',
    styleDirection: '偏内容化的价格页布局，三张套餐卡片均衡排列，并突出推荐方案。',
    elements: [
      templateElement(
        'text',
        '选择适合你的方案',
        '面向个人、团队和企业的清晰定价。',
        22,
        7,
        56,
        10,
        'header',
        '首屏文案要降低用户决策压力。',
        1,
      ),
      templateElement('card', '入门版', '¥0 / 月\n基础额度\n[免费开始]', 7, 25, 26, 34, 'main', '入门套餐卡片。', 2),
      templateElement(
        'card',
        '专业版 - 推荐',
        '¥139 / 月\n更高额度\n优先支持\n[升级]',
        37,
        21,
        26,
        42,
        'main',
        '作为推荐套餐重点突出。',
        3,
      ),
      templateElement(
        'card',
        '企业版',
        '定制报价\nSSO\n专属支持\n[联系销售]',
        67,
        25,
        26,
        34,
        'main',
        '企业版 CTA 打开联系表单。',
        4,
      ),
      templateElement(
        'list',
        '常见问题',
        '可以随时取消吗？\n支持开具发票吗？\n可以切换套餐吗？',
        14,
        69,
        72,
        18,
        'footer',
        '移动端常见问题排在套餐卡片之后。',
        5,
      ),
    ],
  },
  {
    id: 'form-submit',
    name: '表单提交',
    description: '成组请求表单，包含填写指引和提交操作。',
    pageName: '提交申请',
    purpose: '收集结构化申请信息，并通过可预期的校验完成提交。',
    styleDirection: '务实的表单页面，分组清晰，有辅助说明和可见校验状态。',
    elements: [
      templateElement(
        'text',
        '提交一个申请',
        '告诉我们你需要什么，以及期望什么时候完成。',
        7,
        6,
        48,
        10,
        'header',
        '页面标题和一句背景说明。',
        1,
      ),
      templateElement(
        'card',
        '申请详情',
        '标题输入框\n分类下拉选择\n描述文本域\n优先级单选组',
        7,
        22,
        58,
        46,
        'main',
        '包含必填项的主表单区域。',
        2,
      ),
      templateElement(
        'box',
        '填写指引',
        '描述越具体越好\n有链接时请附上\nSLA：2 个工作日',
        70,
        24,
        23,
        30,
        'sidebar',
        '指引面板用于降低提交错误。',
        3,
      ),
      templateElement('button', '提交申请', '主要操作', 45, 75, 22, 8, 'footer', '提交前校验必填项。', 4),
      templateElement('button', '保存草稿', '次要操作', 70, 75, 19, 8, 'footer', '保存表单填写进度。', 5),
    ],
  },
  {
    id: 'data-table',
    name: '数据表格',
    description: '带筛选和行操作的业务表格。',
    pageName: '订单管理',
    purpose: '查看、筛选并处理记录列表，支持批量操作。',
    styleDirection: '高密度数据操作页，筛选、行操作和分页清晰可见。',
    elements: [
      templateElement(
        'navbar',
        '订单管理',
        '[导出 CSV] | [新建订单]',
        4,
        4,
        82,
        9,
        'header',
        '头部操作需要保持易发现。',
        1,
      ),
      templateElement(
        'tabs',
        '订单状态标签页',
        '全部 | 待支付 | 已支付 | 已退款 | 失败',
        6,
        17,
        62,
        9,
        'main',
        '标签旁可展示数量。',
        2,
      ),
      templateElement(
        'search',
        '搜索订单...',
        '筛选：日期、客户、金额、状态',
        6,
        30,
        80,
        9,
        'main',
        '搜索和筛选会更新表格状态。',
        3,
      ),
      templateElement(
        'table',
        '订单表格',
        '订单号 | 客户 | 金额 | 状态 | 操作\n#1024 | 张三 | ¥120 | 已支付 | 查看\n#1025 | 李四 | ¥86 | 待支付 | 查看\n#1026 | 王五 | ¥240 | 失败 | 重试',
        6,
        43,
        80,
        30,
        'main',
        '行支持选择和单条记录操作菜单。',
        4,
      ),
      templateElement(
        'pagination',
        '分页',
        '显示 1-25 / 共 248 条   < 1 2 3 ... 10 >',
        20,
        78,
        58,
        8,
        'footer',
        '必要时包含每页条数控制。',
        5,
      ),
    ],
  },
  {
    id: 'empty-state',
    name: '空状态',
    description: '清晰空状态说明和第一步 CTA。',
    pageName: '暂无项目',
    purpose: '解释为什么为空，并帮助用户采取第一个有意义的动作。',
    styleDirection: '克制的空状态页面，包含一个强 CTA 和一个次要学习路径。',
    elements: [
      templateElement(
        'placeholder',
        '空状态插画',
        '简单图标或抽象占位',
        34,
        16,
        32,
        22,
        'main',
        '插画可选，主要含义由文字承载。',
        1,
      ),
      templateElement(
        'text',
        '还没有项目',
        '创建第一个项目，或导入已有工作区。',
        28,
        45,
        44,
        12,
        'main',
        '文案要解释为什么出现空状态。',
        2,
      ),
      templateElement('button', '创建项目', '空状态主操作', 38, 62, 24, 8, 'main', '启动项目创建流程。', 3),
      templateElement('button', '导入工作区', '次要操作', 38, 73, 24, 8, 'main', '让熟悉的用户跳过手动配置。', 4),
    ],
  },
  {
    id: 'confirm-modal',
    name: '确认弹窗',
    description: '危险操作触发阻断式确认弹窗。',
    pageName: '删除确认流程',
    purpose: '确认破坏性操作，同时避免误删。',
    styleDirection: '聚焦的确认弹窗，风险文案明确，并提供安全取消路径。',
    elements: [
      templateElement(
        'navbar',
        '项目设置',
        '通用 | 成员 | 危险区域',
        4,
        4,
        82,
        9,
        'header',
        '点击删除触发后，弹窗覆盖在当前页面上。',
        1,
      ),
      templateElement(
        'box',
        '危险区域',
        '删除该项目及所有相关数据。',
        18,
        25,
        64,
        22,
        'main',
        '破坏性控件需要在视觉上与普通操作分离。',
        2,
      ),
      templateElement(
        'button',
        '删除项目',
        '危险操作触发按钮',
        55,
        39,
        22,
        8,
        'main',
        '不会立即删除，而是先打开确认弹窗。',
        3,
      ),
      templateElement(
        'modal',
        '删除项目？',
        '此操作无法撤销。请输入“删除”进行确认。\n[取消] [永久删除]',
        29,
        28,
        42,
        32,
        'modal',
        '弹窗阻断背景交互，关闭后焦点回到触发按钮。',
        6,
      ),
    ],
  },
];

function createWireframeFromTemplate(template: WireframeTemplate): WireframeDocument {
  return {
    pageName: template.pageName,
    purpose: template.purpose,
    styleDirection: template.styleDirection,
    elements: template.elements.map((element, index) =>
      normalizeElementBounds({ ...element, id: `${template.id}-${index + 1}` }),
    ),
  };
}

function createInitialWireframe(): WireframeDocument {
  const defaultTemplate = wireframeTemplates.find(template => template.id === defaultExampleTemplateId);
  return defaultTemplate ? createWireframeFromTemplate(defaultTemplate) : emptyWireframe;
}

function createElementId(kind: WireframeElementKind): string {
  return `wire-${kind}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 11)}`;
}

function createElementAt(
  kind: WireframeElementKind,
  x: number,
  y: number,
  existingElements: WireframeElement[],
): WireframeElement {
  const preset = presetFor(kind);
  const maxZ = existingElements.reduce((currentMax, element) => Math.max(currentMax, element.z), 0);
  return normalizeElementBounds({
    ...preset,
    id: createElementId(kind),
    x: x - preset.w / 2,
    y: y - preset.h / 2,
    z: maxZ + 1,
  });
}

function sanitizeAsciiLine(value: string, maxLength: number): string {
  return value
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

function createGrid(): string[][] {
  return Array.from({ length: pageRows }, () => Array.from({ length: pageColumns }, () => ' '));
}

function setGridCell(grid: string[][], row: number, column: number, value: string) {
  const targetRow = grid[row];
  if (!targetRow || column < 0 || column >= targetRow.length) {
    return;
  }

  targetRow[column] = value;
}

function writeGridText(grid: string[][], row: number, column: number, value: string, maxLength: number) {
  Array.from(sanitizeAsciiLine(value, maxLength)).forEach((character, index) => {
    setGridCell(grid, row, column + index, character);
  });
}

function formatElementLabel(element: WireframeElement): string {
  if (element.kind === 'button') {
    return `[ ${element.title} ]`;
  }

  if (element.kind === 'input' || element.kind === 'search') {
    return `[ ${element.title} ]`;
  }

  if (element.kind === 'table') {
    return `表格：${element.title}`;
  }

  if (element.kind === 'modal') {
    return `弹窗：${element.title}`;
  }

  if (element.kind === 'divider') {
    return `--- ${element.title} ---`;
  }

  return element.title;
}

function drawBox(grid: string[][], element: WireframeElement) {
  const column = clamp(Math.round((element.x / 100) * (pageColumns - 2)), 1, pageColumns - 4);
  const row = clamp(Math.round((element.y / 100) * (pageRows - 2)), 1, pageRows - 4);
  const width = clamp(Math.round((element.w / 100) * (pageColumns - 2)), 8, pageColumns - column - 1);
  const height = clamp(Math.round((element.h / 100) * (pageRows - 2)), 3, pageRows - row - 1);
  const right = column + width;
  const bottom = row + height;

  if (element.kind === 'divider') {
    for (let currentColumn = column; currentColumn <= right; currentColumn += 1) {
      setGridCell(grid, row + 1, currentColumn, '-');
    }
    writeGridText(grid, row, column + 2, element.title, Math.max(width - 3, 1));
    return;
  }

  for (let currentColumn = column; currentColumn <= right; currentColumn += 1) {
    setGridCell(grid, row, currentColumn, currentColumn === column || currentColumn === right ? '+' : '-');
    setGridCell(grid, bottom, currentColumn, currentColumn === column || currentColumn === right ? '+' : '-');
  }

  for (let currentRow = row + 1; currentRow < bottom; currentRow += 1) {
    setGridCell(grid, currentRow, column, '|');
    setGridCell(grid, currentRow, right, '|');
  }

  writeGridText(grid, row + 1, column + 2, formatElementLabel(element), Math.max(width - 3, 1));
  splitLines(element.details)
    .slice(0, Math.max(height - 3, 0))
    .forEach((line, index) => {
      writeGridText(grid, row + 2 + index, column + 2, line, Math.max(width - 3, 1));
    });
}

function generateAsciiWireframe(wireframe: WireframeDocument): string {
  const grid = createGrid();

  for (let column = 0; column < pageColumns; column += 1) {
    setGridCell(grid, 0, column, column === 0 || column === pageColumns - 1 ? '+' : '-');
    setGridCell(grid, pageRows - 1, column, column === 0 || column === pageColumns - 1 ? '+' : '-');
  }

  for (let row = 1; row < pageRows - 1; row += 1) {
    setGridCell(grid, row, 0, '|');
    setGridCell(grid, row, pageColumns - 1, '|');
  }

  writeGridText(grid, 0, 3, ` ${wireframe.pageName} `, pageColumns - 6);
  wireframe.elements
    .slice()
    .sort((first, second) => first.z - second.z)
    .forEach(element => drawBox(grid, element));

  return grid.map(row => row.join('').trimEnd()).join('\n');
}

function elementSummary(element: WireframeElement): string {
  const firstDetail = splitLines(element.details)[0] ?? '';
  if (firstDetail.length === 0) {
    return `${kindLabel(element.kind)}: ${element.title}`;
  }

  return `${kindLabel(element.kind)}: ${element.title} — ${firstDetail}`;
}

function summarizeComponents(elements: WireframeElement[]): string {
  if (elements.length === 0) {
    return '- 还没有 UI 元素。可以添加元素，或从模板开始。';
  }

  return elements
    .slice()
    .sort((first, second) => first.region.localeCompare(second.region) || first.y - second.y || first.x - second.x)
    .map(element => `- ${regionLabel(element.region)} / ${elementSummary(element)}`)
    .join('\n');
}

function summarizeInteractions(elements: WireframeElement[]): string {
  const interactions = elements
    .filter(
      element =>
        element.kind === 'button' ||
        element.kind === 'search' ||
        element.kind === 'input' ||
        element.kind === 'tabs' ||
        element.kind === 'modal',
    )
    .map(element => `- ${element.title}: ${splitLines(element.notes)[0] ?? element.notes}`);

  if (interactions.length === 0) {
    return '- 暂无明确交互说明。请根据页面结构补充焦点、悬停、加载、空状态和响应式行为。';
  }

  return interactions.join('\n');
}

function createWireframeSections(wireframe: WireframeDocument): OutputSection[] {
  return [
    { title: '页面用途', content: wireframe.purpose },
    { title: '结构线框', content: generateAsciiWireframe(wireframe) },
    { title: '组件说明', content: summarizeComponents(wireframe.elements) },
  ];
}

function createPromptSections(wireframe: WireframeDocument): OutputSection[] {
  return [
    { title: '页面用途', content: wireframe.purpose },
    { title: '样式方向', content: wireframe.styleDirection },
    { title: '结构线框', content: generateAsciiWireframe(wireframe) },
    { title: '主要组件', content: summarizeComponents(wireframe.elements) },
    { title: '交互行为', content: summarizeInteractions(wireframe.elements) },
    {
      title: '响应式要求',
      content:
        '- 桌面端保持线框图展示的层级关系。\n- 移动端按以下顺序纵向堆叠主要区域：头部、主体内容、次要/侧边内容、底部操作。\n- 保持主操作可见，并确保表单和表格在窄屏可用。',
    },
    {
      title: '验收标准',
      content:
        '- 实现后的页面应匹配线框图中的布局层级和组件关系。\n- 标签、输入框、按钮、标签页、表格、列表、空状态和弹窗状态都应使用可访问的 HTML 表达。\n- 主操作和次要操作在视觉上有清晰区分。\n- 根据需要处理加载、空状态、禁用、焦点和错误状态。\n- 页面核心结构不依赖图片传达。',
    },
  ];
}

function formatSections(sections: OutputSection[]): string {
  return sections.map(section => `## ${section.title}\n${section.content}`).join('\n\n');
}

function generateWireframeMarkdown(wireframe: WireframeDocument): string {
  return `# ${wireframe.pageName}\n\n${formatSections(createWireframeSections(wireframe))}\n`;
}

function generateImplementationPrompt(wireframe: WireframeDocument): string {
  return `请根据下面的结构化线框图实现这个 UI 页面。\n\n${formatSections(createPromptSections(wireframe))}\n`;
}

function feedbackClass(tone: FeedbackTone): string {
  if (tone === 'success') {
    return 'border-emerald-200 bg-emerald-50 text-emerald-900';
  }

  if (tone === 'error') {
    return 'border-red-200 bg-red-50 text-red-900';
  }

  return 'border-slate-200 bg-white text-slate-700';
}

function toolButtonClass(active: boolean): string {
  return `flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition ${
    active
      ? 'border-l-4 border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20'
      : 'border-l-4 border-transparent text-slate-600 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950'
  }`;
}

function isTypingTarget(target: unknown): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.isContentEditable ||
    target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA' ||
    target.tagName === 'SELECT'
  );
}

function applyNumberField(element: WireframeElement, field: NumberField, value: number): WireframeElement {
  switch (field) {
    case 'x':
      return { ...element, x: value };
    case 'y':
      return { ...element, y: value };
    case 'w':
      return { ...element, w: value };
    case 'h':
      return { ...element, h: value };
    case 'z':
      return { ...element, z: value };
  }
}

function FieldLabel({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className='block'>
      <span className='text-[0.65rem] font-black uppercase tracking-[0.18em] text-slate-400'>{label}</span>
      <div className='mt-2'>{children}</div>
    </label>
  );
}

function SmallButton({
  children,
  onClick,
  active = false,
}: {
  children: ReactNode;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`rounded-xl border px-3 py-2 text-xs font-black transition hover:-translate-y-0.5 ${
        active
          ? 'border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-950/10'
          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-950 hover:text-slate-950'
      }`}
    >
      {children}
    </button>
  );
}

function ElementPreview({ element }: { element: WireframeElement }) {
  const lines = splitLines(element.details);
  const firstLine = lines[0] ?? element.details;

  if (element.kind === 'text') {
    return (
      <div className='flex h-full flex-col justify-center gap-2'>
        <strong className='truncate text-lg leading-none tracking-tight text-slate-900'>{element.title}</strong>
        {firstLine ? <span className='truncate text-xs font-semibold text-slate-400'>{firstLine}</span> : null}
      </div>
    );
  }

  if (element.kind === 'navbar') {
    return (
      <div className='flex h-full items-center justify-between gap-4 border-b border-slate-200/80 px-1'>
        <strong className='truncate text-sm tracking-tight'>{element.title}</strong>
        <div className='flex min-w-0 items-center justify-end gap-2 text-[0.62rem] font-bold text-slate-500'>
          {(firstLine || '导航项 | 操作')
            .split('|')
            .slice(0, 5)
            .map(item => (
              <span key={item} className='truncate rounded-full bg-slate-100 px-2 py-1'>
                {item.trim()}
              </span>
            ))}
        </div>
      </div>
    );
  }

  if (element.kind === 'button') {
    const buttonClass = element.details.includes('危险')
      ? 'border-red-400 bg-red-50 text-red-900'
      : element.details.includes('次要')
        ? 'border-slate-400 bg-white text-slate-700'
        : 'border-slate-950 bg-slate-950 text-white';

    return (
      <div className='flex h-full items-center justify-center'>
        <div
          className={`min-w-[70%] rounded-full border px-4 py-2 text-center text-sm font-black shadow-sm ${buttonClass}`}
        >
          {element.title}
        </div>
      </div>
    );
  }

  if (element.kind === 'input' || element.kind === 'search') {
    return (
      <div className='flex h-full flex-col justify-center gap-2'>
        <span className='truncate text-[0.68rem] font-black text-slate-500'>{element.title}</span>
        <div className='flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-400 shadow-inner shadow-slate-900/5'>
          <span className='text-slate-300'>{element.kind === 'search' ? '⌕' : 'Aa'}</span>
          <span className='truncate'>{firstLine || (element.kind === 'search' ? '搜索关键词' : '输入内容')}</span>
        </div>
      </div>
    );
  }

  if (element.kind === 'card') {
    return (
      <div className='flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm'>
        <div className='h-8 rounded-xl bg-slate-100' />
        <strong className='truncate text-sm'>{element.title}</strong>
        <span className='truncate text-xs font-semibold text-slate-400'>{firstLine || '卡片内容摘要'}</span>
        <div className='mt-auto flex gap-1'>
          <span className='h-1.5 flex-1 rounded-full bg-slate-200' />
          <span className='h-1.5 w-8 rounded-full bg-slate-100' />
        </div>
      </div>
    );
  }

  if (element.kind === 'table') {
    const header = firstLine || '列名 | 列名 | 操作';
    const rows = lines.slice(1, 4);

    return (
      <div className='flex h-full flex-col gap-2 overflow-hidden'>
        <strong className='truncate text-xs'>{element.title}</strong>
        <div className='overflow-hidden rounded-xl border border-slate-300 bg-white text-[0.62rem] shadow-inner shadow-slate-900/5'>
          <div className='truncate border-b border-slate-300 bg-slate-100 px-2 py-1 font-black'>{header}</div>
          {(rows.length > 0 ? rows : ['示例行', '示例行']).map((row, index) => (
            <div key={`${row}-${index}`} className='truncate border-b border-slate-200 px-2 py-1 last:border-b-0'>
              {row}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (element.kind === 'list') {
    return (
      <div className='space-y-2 overflow-hidden'>
        <strong className='block truncate text-sm'>{element.title}</strong>
        {(lines.length > 0 ? lines : ['列表项', '列表项', '列表项']).slice(0, 4).map((line, index) => (
          <div key={`${line}-${index}`} className='flex items-center gap-2 text-[0.68rem] text-slate-600'>
            <span className='h-2 w-2 shrink-0 rounded-full bg-slate-300' />
            <span className='truncate'>{line}</span>
          </div>
        ))}
      </div>
    );
  }

  if (element.kind === 'tabs') {
    return (
      <div className='flex h-full flex-col justify-center gap-2'>
        <strong className='truncate text-xs'>{element.title}</strong>
        <div className='inline-flex max-w-full overflow-hidden rounded-2xl border border-slate-300 bg-slate-100 p-1 text-[0.62rem] font-black'>
          {(firstLine || '选项一 | 选项二 | 选项三')
            .split('|')
            .slice(0, 4)
            .map((item, index) => (
              <span
                key={item}
                className={`truncate rounded-xl px-2 py-1 ${index === 0 ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500'}`}
              >
                {item.trim()}
              </span>
            ))}
        </div>
      </div>
    );
  }

  if (element.kind === 'pagination') {
    return (
      <div className='flex h-full items-center justify-center gap-1 text-center text-xs font-black text-slate-600'>
        {(firstLine || '< 上一页   1  2  3   下一页 >')
          .split(/\s+/)
          .slice(0, 8)
          .map((item, index) => (
            <span key={`${item}-${index}`} className='rounded-lg border border-slate-200 bg-white px-2 py-1'>
              {item}
            </span>
          ))}
      </div>
    );
  }

  if (element.kind === 'placeholder') {
    return (
      <div className='flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-400 bg-slate-50/80 text-center'>
        <div className='h-10 w-14 rounded-xl border border-slate-300 bg-white shadow-inner shadow-slate-900/5' />
        <strong className='max-w-full truncate px-3 text-xs'>{element.title}</strong>
      </div>
    );
  }

  if (element.kind === 'divider') {
    return (
      <div className='flex h-full items-center gap-3'>
        <span className='h-px flex-1 bg-slate-300' />
        <strong className='truncate text-[0.68rem] uppercase tracking-[0.18em] text-slate-400'>{element.title}</strong>
        <span className='h-px flex-1 bg-slate-300' />
      </div>
    );
  }

  if (element.kind === 'modal') {
    return (
      <div className='flex h-full items-center justify-center rounded-[1.25rem] bg-slate-950/20 p-4'>
        <div className='w-full max-w-[90%] rounded-3xl border border-slate-300 bg-white p-4 shadow-2xl shadow-slate-950/20'>
          <strong className='block truncate text-base'>{element.title}</strong>
          <p className='mt-2 line-clamp-2 text-xs font-semibold leading-5 text-slate-500'>
            {firstLine || '弹窗内容说明'}
          </p>
          <div className='mt-4 flex justify-end gap-2'>
            <span className='h-7 w-14 rounded-full border border-slate-300 bg-white' />
            <span className='h-7 w-16 rounded-full bg-slate-950' />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex h-full flex-col gap-2 rounded-2xl border border-slate-200/80 bg-white/70 p-3'>
      <strong className='block truncate text-sm'>{element.title}</strong>
      {firstLine ? <span className='truncate text-xs font-semibold text-slate-400'>{firstLine}</span> : null}
      <span className='mt-auto h-2 w-2/3 rounded-full bg-slate-100' />
    </div>
  );
}

function ResizeHandleButton({
  handle,
  onPointerDown,
}: {
  handle: ResizeHandle;
  onPointerDown: (event: PointerEvent<HTMLButtonElement>, handle: ResizeHandle) => void;
}) {
  const positionClass =
    handle === 'nw'
      ? '-left-1.5 -top-1.5 cursor-nwse-resize'
      : handle === 'ne'
        ? '-right-1.5 -top-1.5 cursor-nesw-resize'
        : handle === 'sw'
          ? '-bottom-1.5 -left-1.5 cursor-nesw-resize'
          : '-bottom-1.5 -right-1.5 cursor-nwse-resize';

  return (
    <button
      type='button'
      aria-label={`缩放 ${handle}`}
      onPointerDown={event => onPointerDown(event, handle)}
      className={`absolute h-3.5 w-3.5 rounded-full border border-blue-700 bg-white shadow ${positionClass}`}
    />
  );
}

function CanvasElement({
  element,
  selected,
  editing,
  inlineTitle,
  onSelect,
  onStartDrag,
  onStartResize,
  onStartInlineEdit,
  onInlineTitleChange,
  onCommitInlineEdit,
  onCancelInlineEdit,
  onNudge,
}: {
  element: WireframeElement;
  selected: boolean;
  editing: boolean;
  inlineTitle: string;
  onSelect: (id: string, additive: boolean) => void;
  onStartDrag: (event: PointerEvent<HTMLElement>, element: WireframeElement) => void;
  onStartResize: (event: PointerEvent<HTMLButtonElement>, element: WireframeElement, handle: ResizeHandle) => void;
  onStartInlineEdit: (element: WireframeElement) => void;
  onInlineTitleChange: (value: string) => void;
  onCommitInlineEdit: () => void;
  onCancelInlineEdit: () => void;
  onNudge: (id: string, dx: number, dy: number) => void;
}) {
  const elementStyle: CSSProperties = {
    left: `${element.x}%`,
    top: `${element.y}%`,
    width: `${element.w}%`,
    height: `${element.h}%`,
    zIndex: element.z,
  };

  return (
    <div
      role='button'
      tabIndex={0}
      aria-label={`${kindLabel(element.kind)} ${element.title}`}
      style={elementStyle}
      onPointerDown={event => onStartDrag(event, element)}
      onDoubleClick={event => {
        event.stopPropagation();
        onStartInlineEdit(element);
      }}
      onClick={event => {
        event.stopPropagation();
        onSelect(element.id, event.shiftKey || event.metaKey || event.ctrlKey);
      }}
      onKeyDown={event => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          onNudge(element.id, event.shiftKey ? -5 : -1, 0);
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          onNudge(element.id, event.shiftKey ? 5 : 1, 0);
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          onNudge(element.id, 0, event.shiftKey ? -5 : -1);
        } else if (event.key === 'ArrowDown') {
          event.preventDefault();
          onNudge(element.id, 0, event.shiftKey ? 5 : 1);
        } else if (event.key === 'Enter') {
          event.preventDefault();
          onStartInlineEdit(element);
        }
      }}
      className={`group absolute cursor-move overflow-visible rounded-[1.35rem] border text-left text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg ${
        element.kind === 'modal' ? 'bg-transparent p-0 shadow-none' : 'bg-white/90 p-2 shadow-sm'
      } ${selected ? 'border-blue-700 ring-2 ring-blue-600 ring-offset-2 ring-offset-[#fbfaf4]' : 'border-slate-200/80 hover:border-slate-300'}`}
    >
      <div
        className={`pointer-events-none absolute right-2 top-2 z-10 rounded-full border border-slate-200 bg-white/95 px-2 py-0.5 text-[0.56rem] font-black uppercase tracking-[0.12em] text-slate-400 shadow-sm transition ${
          selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        {kindLabel(element.kind)} · {Math.round(element.w)}×{Math.round(element.h)}
      </div>
      <div className='h-full overflow-hidden'>
        {editing ? (
          <input
            autoFocus
            value={inlineTitle}
            onPointerDown={event => event.stopPropagation()}
            onFocus={event => event.target.select()}
            onChange={event => onInlineTitleChange(event.target.value)}
            onBlur={onCommitInlineEdit}
            onKeyDown={event => {
              event.stopPropagation();
              if (event.key === 'Enter') {
                event.preventDefault();
                onCommitInlineEdit();
              } else if (event.key === 'Escape') {
                event.preventDefault();
                onCancelInlineEdit();
              }
            }}
            className='w-full rounded-xl border border-blue-600 bg-white px-3 py-2 text-sm font-black outline-none ring-4 ring-blue-100'
          />
        ) : (
          <ElementPreview element={element} />
        )}
      </div>
      {selected ? (
        <>
          {(['nw', 'ne', 'sw', 'se'] as ResizeHandle[]).map(handle => (
            <ResizeHandleButton
              key={handle}
              handle={handle}
              onPointerDown={(event, nextHandle) => onStartResize(event, element, nextHandle)}
            />
          ))}
        </>
      ) : null}
    </div>
  );
}

export function AiWireframeSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef<DragState | null>(null);
  const historyRef = useRef<{ past: WireframeDocument[]; future: WireframeDocument[] }>({ past: [], future: [] });
  const feedbackKeyRef = useRef(0);
  const copyStatusRef = useRef<HTMLElement>(null);
  const copyButtonRef = useRef<HTMLButtonElement>(null);
  const copyStatusTimeoutRef = useRef<number | null>(null);
  const [wireframe, setWireframe] = useState<WireframeDocument>(() => createInitialWireframe());
  const [activeTool, setActiveTool] = useState<ToolId>('select');
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  const [selectedElementIds, setSelectedElementIds] = useState<string[]>([]);
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [alignmentGuides, setAlignmentGuides] = useState<AlignmentGuide[]>([]);
  const [placementPreview, setPlacementPreview] = useState<PlacementPreview | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>({
    tone: 'info',
    message: '已加载 Google 搜索页结构示例。你可以直接拖动、双击改文案，或从模板切换抖音/小红书示例。',
  });
  const [secondaryPanel, setSecondaryPanel] = useState<SecondaryPanel | null>(null);
  const [rightPanel, setRightPanel] = useState<RightPanel>('layers');
  const [rightSidebarCollapsed, setRightSidebarCollapsed] = useState(true);
  const [rightSidebarPinned, setRightSidebarPinned] = useState(false);
  const [moreToolsOpen, setMoreToolsOpen] = useState(false);
  const [inlineEditingId, setInlineEditingId] = useState<string | null>(null);
  const [inlineTitle, setInlineTitle] = useState('');
  const [promptDraft, setPromptDraft] = useState('');
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [canvasViewport, setCanvasViewport] = useState<CanvasViewport>('web');
  const [canvasZoom, setCanvasZoom] = useState(1);

  const selectedElement = useMemo(
    () => wireframe.elements.find(element => element.id === selectedElementId) ?? null,
    [selectedElementId, wireframe.elements],
  );
  const selectedElements = useMemo(
    () => wireframe.elements.filter(element => selectedElementIds.includes(element.id)),
    [selectedElementIds, wireframe.elements],
  );
  const layers = useMemo(
    () => wireframe.elements.slice().sort((first, second) => second.z - first.z || second.y - first.y),
    [wireframe.elements],
  );
  const primaryTools = useMemo(
    () => primaryToolIds.map(toolById).filter((tool): tool is ToolDefinition => tool !== null),
    [],
  );
  const moreTools = useMemo(() => tools.filter(tool => !primaryToolIds.includes(tool.id)), []);
  const markdownOutput = useMemo(() => generateWireframeMarkdown(wireframe), [wireframe]);
  const promptOutput = useMemo(() => generateImplementationPrompt(wireframe), [wireframe]);
  const activeCanvasViewport = canvasViewports[canvasViewport];
  const canUndo = historyRef.current.past.length > 0;
  const canRedo = historyRef.current.future.length > 0;
  const canvasZoomPercent = Math.round(canvasZoom * 100);
  const canZoomOut = canvasZoom > canvasZoomMin;
  const canZoomIn = canvasZoom < canvasZoomMax;
  const rightSidebarExpanded = rightSidebarPinned || !rightSidebarCollapsed;

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);

    if (stored) {
      try {
        const parsed: unknown = JSON.parse(stored);
        if (isWireframeDocument(parsed)) {
          setWireframe({ ...parsed, elements: parsed.elements.map(normalizeElementBounds) });
          setFeedback({ tone: 'info', message: '已加载你上次编辑的本地草稿。' });
        }
      } catch {
        setFeedback({ tone: 'error', message: '本地草稿读取失败，已为你加载一个可编辑的产品示例。' });
      }
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(wireframe));
  }, [hydrated, wireframe]);

  const showFeedback = (nextFeedback: Feedback) => {
    const feedbackKey = feedbackKeyRef.current + 1;
    feedbackKeyRef.current = feedbackKey;
    setFeedback(nextFeedback);
    window.setTimeout(() => {
      if (feedbackKeyRef.current === feedbackKey) {
        setFeedback(null);
      }
    }, 3000);
  };

  const showCopyFeedback = (nextFeedback: Feedback) => {
    const statusElement = copyStatusRef.current;
    const buttonElement = copyButtonRef.current;

    if (copyStatusTimeoutRef.current !== null) {
      window.clearTimeout(copyStatusTimeoutRef.current);
    }

    if (statusElement) {
      statusElement.hidden = false;
      statusElement.textContent = nextFeedback.message;
      statusElement.className = `rounded-xl border px-3 py-2 text-xs font-black ${feedbackClass(nextFeedback.tone)}`;
    }

    if (buttonElement) {
      buttonElement.textContent =
        nextFeedback.tone === 'success' ? '已复制' : nextFeedback.tone === 'error' ? '复制失败' : '复制中...';
    }

    copyStatusTimeoutRef.current = window.setTimeout(() => {
      if (statusElement) {
        statusElement.hidden = true;
        statusElement.textContent = '';
      }

      if (buttonElement) {
        buttonElement.textContent = '复制 Markdown';
      }
    }, 3000);
  };

  const updateCanvasZoom = (nextZoom: number) => {
    setCanvasZoom(clamp(Number(nextZoom.toFixed(2)), canvasZoomMin, canvasZoomMax));
  };

  const stepCanvasZoom = (direction: -1 | 1) => {
    setCanvasZoom(current =>
      clamp(Number((current + canvasZoomStep * direction).toFixed(2)), canvasZoomMin, canvasZoomMax),
    );
  };

  const pushHistory = (snapshot: WireframeDocument) => {
    historyRef.current = {
      past: [...historyRef.current.past.slice(-49), cloneWireframe(snapshot)],
      future: [],
    };
  };

  const setWireframeWithHistory = (updater: (current: WireframeDocument) => WireframeDocument) => {
    setWireframe(current => {
      const next = updater(current);
      if (next === current) {
        return current;
      }

      historyRef.current = {
        past: [...historyRef.current.past.slice(-49), cloneWireframe(current)],
        future: [],
      };
      return next;
    });
  };

  const selectElement = (id: string | null, additive = false) => {
    if (!id) {
      setSelectedElementId(null);
      setSelectedElementIds([]);
      return;
    }

    if (additive) {
      setSelectedElementIds(current => {
        const next = current.includes(id) ? current.filter(currentId => currentId !== id) : [...current, id];
        setSelectedElementId(next.at(-1) ?? null);
        return next;
      });
    } else {
      setSelectedElementId(id);
      setSelectedElementIds([id]);
    }
  };

  const selectElementForEditing = (id: string | null, additive = false) => {
    selectElement(id, additive);
    if (id && !additive) {
      setRightPanel('inspector');
      setRightSidebarCollapsed(false);
    }
  };

  const undoWireframe = () => {
    setWireframe(current => {
      const previous = historyRef.current.past.at(-1);
      if (!previous) {
        return current;
      }

      historyRef.current = {
        past: historyRef.current.past.slice(0, -1),
        future: [cloneWireframe(current), ...historyRef.current.future.slice(0, 49)],
      };
      setSelectedElementId(null);
      setSelectedElementIds([]);
      setInlineEditingId(null);
      setAlignmentGuides([]);
      return cloneWireframe(previous);
    });
  };

  const redoWireframe = () => {
    setWireframe(current => {
      const next = historyRef.current.future[0];
      if (!next) {
        return current;
      }

      historyRef.current = {
        past: [...historyRef.current.past.slice(-49), cloneWireframe(current)],
        future: historyRef.current.future.slice(1),
      };
      setSelectedElementId(null);
      setSelectedElementIds([]);
      setInlineEditingId(null);
      setAlignmentGuides([]);
      return cloneWireframe(next);
    });
  };

  const updateElement = (id: string, patch: Partial<WireframeElement>) => {
    setWireframeWithHistory(current => ({
      ...current,
      elements: current.elements.map(element =>
        element.id === id ? normalizeElementBounds({ ...element, ...patch }) : element,
      ),
    }));
  };

  const updateElementNumber = (id: string, field: NumberField, value: number) => {
    if (!Number.isFinite(value)) {
      return;
    }

    setWireframeWithHistory(current => ({
      ...current,
      elements: current.elements.map(element =>
        element.id === id ? normalizeElementBounds(applyNumberField(element, field, value)) : element,
      ),
    }));
  };

  const placeElement = (kind: WireframeElementKind, x: number, y: number) => {
    setWireframeWithHistory(current => {
      const nextElement = createElementAt(kind, x, y, current.elements);
      setSelectedElementId(nextElement.id);
      setSelectedElementIds([nextElement.id]);
      setRightPanel('inspector');
      setInlineEditingId(null);
      showFeedback({ tone: 'success', message: `已放置${kindLabel(kind)}，可拖拽调整位置。` });
      return { ...current, elements: [...current.elements, nextElement] };
    });
  };

  const removeElements = (ids: string[]) => {
    if (ids.length === 0) {
      return;
    }

    setWireframeWithHistory(current => ({
      ...current,
      elements: current.elements.filter(element => !ids.includes(element.id)),
    }));
    setSelectedElementId(current => (current && ids.includes(current) ? null : current));
    setSelectedElementIds(current => current.filter(id => !ids.includes(id)));
    setInlineEditingId(current => (current && ids.includes(current) ? null : current));
    showFeedback({ tone: 'info', message: ids.length > 1 ? '已删除选中的多个图层。' : '图层已删除。' });
  };

  const removeElement = (id: string) => {
    removeElements([id]);
  };

  const removeSelectedElements = () => {
    removeElements(selectedElementIds.length > 0 ? selectedElementIds : selectedElementId ? [selectedElementId] : []);
  };

  const duplicateSelectedElement = () => {
    if (!selectedElement) {
      return;
    }

    setWireframeWithHistory(current => {
      const maxZ = current.elements.reduce((currentMax, element) => Math.max(currentMax, element.z), 0);
      const duplicate = normalizeElementBounds({
        ...selectedElement,
        id: createElementId(selectedElement.kind),
        title: `${selectedElement.title} 副本`,
        x: selectedElement.x + 3,
        y: selectedElement.y + 3,
        z: maxZ + 1,
      });
      setSelectedElementId(duplicate.id);
      setSelectedElementIds([duplicate.id]);
      setRightPanel('inspector');
      showFeedback({ tone: 'success', message: '图层已复制。' });
      return { ...current, elements: [...current.elements, duplicate] };
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) {
        return;
      }

      const key = event.key.toLowerCase();

      if ((event.metaKey || event.ctrlKey) && key === 'z') {
        event.preventDefault();
        if (event.shiftKey) {
          redoWireframe();
        } else {
          undoWireframe();
        }
        return;
      }

      if ((event.metaKey || event.ctrlKey) && key === 'y') {
        event.preventDefault();
        redoWireframe();
        return;
      }

      if (!selectedElementId && selectedElementIds.length === 0) {
        return;
      }

      if (event.key === 'Delete' || event.key === 'Backspace') {
        event.preventDefault();
        removeSelectedElements();
      } else if ((event.metaKey || event.ctrlKey) && key === 'd') {
        event.preventDefault();
        duplicateSelectedElement();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const canvasPointFromEvent = (event: PointerEvent<HTMLDivElement> | DragEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return null;
    }

    const bounds = canvas.getBoundingClientRect();
    return {
      x: clamp(((event.clientX - bounds.left) / bounds.width) * 100, 0, 100),
      y: clamp(((event.clientY - bounds.top) / bounds.height) * 100, 0, 100),
    };
  };

  const handleCanvasPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (isElementKind(activeTool)) {
      const point = canvasPointFromEvent(event);
      if (point) {
        placeElement(activeTool, point.x, point.y);
      }
      return;
    }

    selectElement(null);
    setInlineEditingId(null);
  };

  const startMove = (event: PointerEvent<HTMLElement>, element: WireframeElement) => {
    if (event.button !== 0) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (event.shiftKey || event.metaKey || event.ctrlKey) {
      selectElement(element.id, true);
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    setActiveTool('select');
    const movingIds = selectedElementIds.includes(element.id) ? selectedElementIds : [element.id];
    const origins = wireframe.elements
      .filter(candidate => movingIds.includes(candidate.id))
      .map(candidate => ({ id: candidate.id, x: candidate.x, y: candidate.y, w: candidate.w, h: candidate.h }));
    setSelectedElementId(element.id);
    setSelectedElementIds(movingIds);
    pushHistory(wireframe);

    const nextDragState: DragState = {
      id: element.id,
      mode: 'move',
      handle: 'se',
      startClientX: event.clientX,
      startClientY: event.clientY,
      originX: element.x,
      originY: element.y,
      originW: element.w,
      originH: element.h,
      origins,
    };
    dragStateRef.current = nextDragState;
    setDragState(nextDragState);
  };

  const startResize = (event: PointerEvent<HTMLButtonElement>, element: WireframeElement, handle: ResizeHandle) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    setSelectedElementId(element.id);
    setSelectedElementIds([element.id]);
    pushHistory(wireframe);

    const nextDragState: DragState = {
      id: element.id,
      mode: 'resize',
      handle,
      startClientX: event.clientX,
      startClientY: event.clientY,
      originX: element.x,
      originY: element.y,
      originW: element.w,
      originH: element.h,
      origins: [{ id: element.id, x: element.x, y: element.y, w: element.w, h: element.h }],
    };
    dragStateRef.current = nextDragState;
    setDragState(nextDragState);
  };

  const updateDraggingElement = useCallback((clientX: number, clientY: number) => {
    const currentDragState = dragStateRef.current;
    if (!currentDragState) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const bounds = canvas.getBoundingClientRect();
    const dx = ((clientX - currentDragState.startClientX) / bounds.width) * 100;
    const dy = ((clientY - currentDragState.startClientY) / bounds.height) * 100;

    setWireframe(current => {
      if (currentDragState.mode === 'move') {
        const primaryOrigin = currentDragState.origins.find(origin => origin.id === currentDragState.id);
        if (!primaryOrigin) {
          return current;
        }

        const movingIds = currentDragState.origins.map(origin => origin.id);
        const primaryElement = current.elements.find(element => element.id === currentDragState.id);
        if (!primaryElement) {
          return current;
        }

        const snapped = snapMovingElement(
          primaryElement,
          { x: primaryOrigin.x + dx, y: primaryOrigin.y + dy },
          current.elements,
          movingIds,
        );
        const snappedDx = snapped.patch.x - primaryOrigin.x;
        const snappedDy = snapped.patch.y - primaryOrigin.y;
        setAlignmentGuides(snapped.guides);

        return {
          ...current,
          elements: current.elements.map(element => {
            const origin = currentDragState.origins.find(candidate => candidate.id === element.id);
            return origin
              ? normalizeElementBounds({ ...element, x: origin.x + snappedDx, y: origin.y + snappedDy })
              : element;
          }),
        };
      }

      let patch: Partial<WireframeElement>;

      if (currentDragState.handle === 'se') {
        patch = { w: currentDragState.originW + dx, h: currentDragState.originH + dy };
      } else if (currentDragState.handle === 'sw') {
        patch = {
          x: currentDragState.originX + dx,
          w: currentDragState.originW - dx,
          h: currentDragState.originH + dy,
        };
      } else if (currentDragState.handle === 'ne') {
        patch = {
          y: currentDragState.originY + dy,
          w: currentDragState.originW + dx,
          h: currentDragState.originH - dy,
        };
      } else {
        patch = {
          x: currentDragState.originX + dx,
          y: currentDragState.originY + dy,
          w: currentDragState.originW - dx,
          h: currentDragState.originH - dy,
        };
      }

      setAlignmentGuides([]);
      return {
        ...current,
        elements: current.elements.map(element =>
          element.id === currentDragState.id ? normalizeElementBounds({ ...element, ...patch }) : element,
        ),
      };
    });
  }, []);

  const continueDrag = (event: PointerEvent<HTMLDivElement>) => {
    updateDraggingElement(event.clientX, event.clientY);
  };

  const endDrag = () => {
    if (dragStateRef.current || dragState) {
      dragStateRef.current = null;
      setDragState(null);
      setAlignmentGuides([]);
    }
  };

  useEffect(() => {
    const handlePointerMove = (event: { clientX: number; clientY: number }) => {
      updateDraggingElement(event.clientX, event.clientY);
    };
    const handlePointerEnd = () => {
      dragStateRef.current = null;
      setDragState(null);
      setAlignmentGuides([]);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerEnd);
    window.addEventListener('pointercancel', handlePointerEnd);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerEnd);
      window.removeEventListener('pointercancel', handlePointerEnd);
    };
  }, [updateDraggingElement]);

  const nudgeElement = (id: string, dx: number, dy: number) => {
    const movingIds = selectedElementIds.includes(id) ? selectedElementIds : [id];
    setSelectedElementId(id);
    setSelectedElementIds(movingIds);
    setWireframeWithHistory(current => ({
      ...current,
      elements: current.elements.map(element =>
        movingIds.includes(element.id)
          ? normalizeElementBounds({ ...element, x: element.x + dx, y: element.y + dy })
          : element,
      ),
    }));
  };

  const startInlineEdit = (element: WireframeElement) => {
    setSelectedElementId(element.id);
    setSelectedElementIds([element.id]);
    setRightPanel('inspector');
    setRightSidebarCollapsed(false);
    setInlineEditingId(element.id);
    setInlineTitle(element.title);
  };

  const commitInlineEdit = () => {
    if (!inlineEditingId) {
      return;
    }

    updateElement(inlineEditingId, { title: inlineTitle.trim() || '未命名图层' });
    setInlineEditingId(null);
    setInlineTitle('');
  };

  const cancelInlineEdit = () => {
    setInlineEditingId(null);
    setInlineTitle('');
  };

  const handleToolDragStart = (event: DragEvent<HTMLButtonElement>, kind: WireframeElementKind) => {
    event.dataTransfer.effectAllowed = 'copy';
    event.dataTransfer.setData(dragDataType, kind);
  };

  const handleToolDragEnd = () => {
    setPlacementPreview(null);
  };

  const updatePlacementPreview = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedKind = event.dataTransfer.getData(dragDataType);
    if (!isElementKind(droppedKind)) {
      setPlacementPreview(null);
      return;
    }

    const point = canvasPointFromEvent(event);
    if (!point) {
      setPlacementPreview(null);
      return;
    }

    const preset = presetFor(droppedKind);
    const preview = normalizeElementBounds({
      ...preset,
      id: 'placement-preview',
      x: point.x - preset.w / 2,
      y: point.y - preset.h / 2,
      z: 999,
    });
    setPlacementPreview({ kind: droppedKind, x: preview.x, y: preview.y, w: preview.w, h: preview.h });
  };

  const handleCanvasDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedKind = event.dataTransfer.getData(dragDataType);
    setPlacementPreview(null);
    if (!isElementKind(droppedKind)) {
      return;
    }

    const point = canvasPointFromEvent(event);
    if (point) {
      placeElement(droppedKind, point.x, point.y);
      setActiveTool('select');
    }
  };

  const loadTemplate = (template: WireframeTemplate) => {
    if (wireframe.elements.length > 0) {
      const confirmed = window.confirm(`要用「${template.name}」模板替换当前画布吗？`);
      if (!confirmed) {
        showFeedback({ tone: 'info', message: '已取消模板替换，当前画布保持不变。' });
        return;
      }
    }

    const nextWireframe = createWireframeFromTemplate(template);
    setWireframeWithHistory(() => nextWireframe);
    setSelectedElementId(nextWireframe.elements[0]?.id ?? null);
    setSelectedElementIds(nextWireframe.elements[0] ? [nextWireframe.elements[0].id] : []);
    setRightPanel('layers');
    setSecondaryPanel(null);
    showFeedback({ tone: 'success', message: `已载入「${template.name}」模板，可继续拖拽图层调整。` });
  };

  const clearCanvas = () => {
    if (wireframe.elements.length === 0) {
      showFeedback({ tone: 'info', message: '画布已经是空的。' });
      return;
    }

    if (!window.confirm('确定清空当前线框图吗？这会移除此浏览器草稿中的所有图层。')) {
      showFeedback({ tone: 'info', message: '已取消清空，当前线框图保持不变。' });
      return;
    }

    setWireframeWithHistory(current => ({ ...current, elements: [] }));
    setSelectedElementId(null);
    setSelectedElementIds([]);
    setInlineEditingId(null);
    showFeedback({ tone: 'success', message: '画布已清空。可以选择工具或载入模板继续。' });
  };

  const copyTextWithTextarea = (text: string): boolean => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', 'true');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      return document.execCommand('copy');
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const copyText = async (text: string, successMessage: string) => {
    let timeoutId: number | undefined;

    showCopyFeedback({ tone: 'info', message: '正在复制...' });

    if (copyTextWithTextarea(text)) {
      showCopyFeedback({ tone: 'success', message: '已复制' });
      showFeedback({ tone: 'success', message: successMessage });
      return;
    }

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('剪贴板 API 不可用');
      }

      await Promise.race([
        navigator.clipboard.writeText(text),
        new Promise<never>((_, reject) => {
          timeoutId = window.setTimeout(() => reject(new Error('剪贴板写入超时')), 2000);
        }),
      ]);
      showCopyFeedback({ tone: 'success', message: '已复制' });
      showFeedback({ tone: 'success', message: successMessage });
    } catch {
      showCopyFeedback({ tone: 'error', message: '复制失败' });
      showFeedback({ tone: 'error', message: '复制失败。请打开“导出”面板手动复制文本。' });
    } finally {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    }
  };

  const openPromptPanel = () => {
    setPromptDraft(promptOutput);
    setSecondaryPanel('export');
    showFeedback({ tone: 'success', message: '已在“导出”面板生成 AI 实现提示词。' });
  };

  const alignSelectedElements = (mode: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom') => {
    if (selectedElements.length < 2) {
      showFeedback({ tone: 'info', message: '请先多选两个或更多图层。' });
      return;
    }

    const left = Math.min(...selectedElements.map(element => element.x));
    const right = Math.max(...selectedElements.map(element => element.x + element.w));
    const top = Math.min(...selectedElements.map(element => element.y));
    const bottom = Math.max(...selectedElements.map(element => element.y + element.h));
    const center = (left + right) / 2;
    const middle = (top + bottom) / 2;

    setWireframeWithHistory(current => ({
      ...current,
      elements: current.elements.map(element => {
        if (!selectedElementIds.includes(element.id)) {
          return element;
        }

        if (mode === 'left') {
          return normalizeElementBounds({ ...element, x: left });
        }
        if (mode === 'center') {
          return normalizeElementBounds({ ...element, x: center - element.w / 2 });
        }
        if (mode === 'right') {
          return normalizeElementBounds({ ...element, x: right - element.w });
        }
        if (mode === 'top') {
          return normalizeElementBounds({ ...element, y: top });
        }
        if (mode === 'middle') {
          return normalizeElementBounds({ ...element, y: middle - element.h / 2 });
        }
        return normalizeElementBounds({ ...element, y: bottom - element.h });
      }),
    }));
    showFeedback({ tone: 'success', message: '已对齐选中图层。' });
  };

  const bringLayerForward = () => {
    if (!selectedElement) {
      return;
    }

    updateElement(selectedElement.id, { z: selectedElement.z + 1 });
  };

  const sendLayerBackward = () => {
    if (!selectedElement) {
      return;
    }

    updateElement(selectedElement.id, { z: selectedElement.z - 1 });
  };

  return (
    <section
      id='ai-wireframe'
      className='relative h-[calc(100dvh-4rem)] overflow-hidden bg-[#f7f5ee] text-slate-950 md:h-screen'
    >
      <div className='grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)] lg:grid-cols-[224px_minmax(0,1fr)] lg:grid-rows-1'>
        <aside className='min-h-0 border-b border-slate-200 bg-white lg:border-b-0 lg:border-r'>
          <div className='flex h-full min-h-0 flex-col'>
            <div className='border-b border-slate-200 px-4 py-4'>
              <button type='button' onClick={() => setActiveTool('select')} className='text-left'>
                <p className='text-xl font-black tracking-tight' style={displayFont}>
                  快速设计 UI 结构
                </p>
                <p className='mt-1 text-xs font-semibold text-slate-400'>画布里先搭结构，再复制给 AI 编程工具。</p>
              </button>
              <button
                type='button'
                onClick={openPromptPanel}
                className='mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-floating-border bg-floating-surface px-4 py-3 text-sm font-black text-text-primary shadow-floating backdrop-blur-floating transition hover:translate-y-lift hover:border-primary hover:bg-floating-surface-strong active:scale-press'
              >
                <span>生成提示词</span>
              </button>
              <div className='mt-3 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-black text-slate-500'>
                <span>{wireframe.elements.length} 个图层</span>
                <span>{selectedElementIds.length > 1 ? `已多选 ${selectedElementIds.length}` : '低保真模式'}</span>
              </div>
            </div>

            <div className='min-h-0 flex-1 overflow-y-auto py-4'>
              <p className='px-4 pb-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-300'>常用工具</p>
              <div className='grid grid-cols-2 gap-2 px-3'>
                {primaryTools.map(tool => {
                  const draggable = isElementKind(tool.id);
                  return (
                    <button
                      key={tool.id}
                      type='button'
                      draggable={draggable}
                      onDragStart={event => {
                        if (isElementKind(tool.id)) {
                          handleToolDragStart(event, tool.id);
                        }
                      }}
                      onDragEnd={handleToolDragEnd}
                      onClick={() => setActiveTool(tool.id)}
                      title={tool.hint}
                      className={`rounded-2xl border px-3 py-3 text-left transition hover:-translate-y-0.5 ${
                        activeTool === tool.id
                          ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span className='block font-mono text-lg'>{tool.glyph}</span>
                      <span className='mt-2 block truncate text-sm font-black'>{tool.label}</span>
                    </button>
                  );
                })}
              </div>

              <button
                type='button'
                onClick={() => setMoreToolsOpen(current => !current)}
                className='mx-3 mt-4 flex w-[calc(100%-1.5rem)] items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-black text-slate-600 hover:border-slate-300 hover:bg-white'
              >
                <span>更多元素</span>
                <span>{moreToolsOpen ? '收起' : '展开'}</span>
              </button>

              {moreToolsOpen ? (
                <div className='mt-4'>
                  {(['BASICS', 'UI ELEMENTS', 'STRUCTURE'] as ToolDefinition['group'][]).map(group => {
                    const groupTools = moreTools.filter(tool => tool.group === group);
                    if (groupTools.length === 0) {
                      return null;
                    }

                    return (
                      <div key={group} className='mb-4'>
                        <p className='px-4 pb-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-300'>
                          {toolGroupLabel(group)}
                        </p>
                        {groupTools.map(tool => {
                          const draggable = isElementKind(tool.id);
                          return (
                            <button
                              key={tool.id}
                              type='button'
                              draggable={draggable}
                              onDragStart={event => {
                                if (isElementKind(tool.id)) {
                                  handleToolDragStart(event, tool.id);
                                }
                              }}
                              onDragEnd={handleToolDragEnd}
                              onClick={() => setActiveTool(tool.id)}
                              title={tool.hint}
                              className={toolButtonClass(activeTool === tool.id)}
                            >
                              <span className='w-7 shrink-0 font-mono text-base'>{tool.glyph}</span>
                              <span className='min-w-0'>
                                <span className='block truncate font-mono'>{tool.label}</span>
                                <span
                                  className={`block truncate text-[0.64rem] ${
                                    activeTool === tool.id ? 'text-white/70' : 'text-slate-400'
                                  }`}
                                >
                                  {tool.hint}
                                </span>
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>

            <div className='grid grid-cols-4 border-t border-slate-200 bg-white p-2'>
              <button
                type='button'
                onClick={() => setSecondaryPanel('templates')}
                className='rounded-xl px-2 py-2 text-xs font-black text-slate-500 hover:bg-slate-100'
              >
                模板
              </button>
              <button
                type='button'
                onClick={() => setSecondaryPanel('page')}
                className='rounded-xl px-2 py-2 text-xs font-black text-slate-500 hover:bg-slate-100'
              >
                页面
              </button>
              <button
                type='button'
                onClick={clearCanvas}
                className='rounded-xl px-2 py-2 text-xs font-black text-slate-500 hover:bg-slate-100'
              >
                清空
              </button>
              <button
                type='button'
                onClick={openPromptPanel}
                className='rounded-xl bg-blue-50 px-2 py-2 text-xs font-black text-blue-700 hover:bg-blue-100'
              >
                导出
              </button>
            </div>
          </div>
        </aside>

        <main
          className='min-h-0 min-w-0 bg-[#f3f1ea] transition-[padding] duration-200'
          style={{ paddingRight: rightSidebarExpanded ? 'min(340px, calc(100vw - 1rem))' : '3.5rem' }}
        >
          <div className='flex h-full min-h-0 flex-col'>
            <div className='flex min-h-[3.5rem] shrink-0 flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white/90 px-4 py-2 backdrop-blur'>
              <div className='flex min-w-0 items-center gap-3'>
                <div className='hidden h-3 w-3 rounded-full bg-blue-600 lg:block' />
                <input
                  value={wireframe.pageName}
                  onChange={event => setWireframe(current => ({ ...current, pageName: event.target.value }))}
                  className='min-w-0 max-w-[28rem] bg-transparent text-base font-black outline-none focus:text-blue-700'
                  aria-label='页面名称'
                />
                <span className='hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-black text-slate-400 md:inline'>
                  当前工具：{activeTool === 'select' ? '选择' : kindLabel(activeTool)}
                </span>
              </div>
              <div className='flex shrink-0 flex-wrap items-center justify-end gap-2'>
                <div
                  role='tablist'
                  aria-label='切换稿纸端型'
                  className='flex rounded-pill border border-floating-border bg-floating-surface p-1 shadow-floating backdrop-blur-floating'
                >
                  {canvasViewportIds.map(viewportId => {
                    const viewport = canvasViewports[viewportId];
                    const selected = canvasViewport === viewportId;

                    return (
                      <button
                        key={viewportId}
                        type='button'
                        role='tab'
                        aria-selected={selected}
                        aria-controls='ai-wireframe-canvas'
                        onClick={() => setCanvasViewport(viewportId)}
                        className={`rounded-pill px-3 py-1.5 text-xs font-black transition hover:translate-y-lift active:scale-press ${
                          selected
                            ? 'bg-primary text-primary-foreground shadow-primary-glow'
                            : 'text-text-secondary hover:bg-floating-surface-strong hover:text-text-primary'
                        }`}
                      >
                        <span className='block'>{viewport.label}</span>
                        <span
                          className={`hidden text-[0.62rem] leading-none ${
                            selected ? 'text-primary-foreground/70' : 'text-text-muted'
                          } lg:block`}
                        >
                          {viewport.width}×{viewport.height}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <button
                  type='button'
                  onClick={undoWireframe}
                  disabled={!canUndo}
                  className='rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-600 transition hover:border-slate-950 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-35'
                >
                  Undo
                </button>
                <button
                  type='button'
                  onClick={redoWireframe}
                  disabled={!canRedo}
                  className='rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-600 transition hover:border-slate-950 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-35'
                >
                  Redo
                </button>
                <span
                  ref={copyStatusRef}
                  hidden
                  aria-live='polite'
                  className='rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700'
                />
                <button
                  ref={copyButtonRef}
                  type='button'
                  onClick={() => void copyText(markdownOutput, 'Markdown 线框图已复制，可粘贴到 AI 编程工具。')}
                  className='rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-600 transition hover:border-slate-950 hover:text-slate-950'
                >
                  复制 Markdown
                </button>
                <button
                  type='button'
                  onClick={openPromptPanel}
                  className='rounded-pill border border-floating-border bg-floating-surface px-3 py-2 text-xs font-black text-text-primary shadow-floating backdrop-blur-floating transition hover:translate-y-lift hover:border-primary hover:bg-floating-surface-strong active:scale-press'
                >
                  提示词
                </button>
              </div>
            </div>

            <div className='relative min-h-0 flex-1 overflow-auto p-6'>
              <div
                className='relative mx-auto shrink-0 transition-[height,width] duration-150'
                style={{
                  width: activeCanvasViewport.width * canvasZoom,
                  height: activeCanvasViewport.height * canvasZoom,
                }}
              >
                <div
                  id='ai-wireframe-canvas'
                  ref={canvasRef}
                  role='region'
                  aria-label='线框图画布'
                  onPointerDown={handleCanvasPointerDown}
                  onPointerMove={continueDrag}
                  onPointerUp={endDrag}
                  onPointerCancel={endDrag}
                  onDragOver={updatePlacementPreview}
                  onDragLeave={() => setPlacementPreview(null)}
                  onDrop={handleCanvasDrop}
                  className={`absolute left-0 top-0 overflow-hidden border bg-[#fbfaf4] transition ${
                    canvasViewport === 'mobile'
                      ? 'rounded-[2rem] shadow-[0_28px_90px_rgba(15,23,42,0.18)] ring-8 ring-slate-950/5'
                      : 'rounded-[0.35rem] shadow-2xl shadow-slate-900/10'
                  } ${
                    isElementKind(activeTool)
                      ? 'cursor-crosshair border-blue-500 ring-4 ring-blue-100'
                      : 'cursor-default border-slate-200'
                  }`}
                  style={{
                    ...canvasGridStyle,
                    width: activeCanvasViewport.width,
                    height: activeCanvasViewport.height,
                    transform: `scale(${canvasZoom})`,
                    transformOrigin: 'top left',
                  }}
                >
                  {canvasViewport === 'mobile' ? (
                    <>
                      <div className='pointer-events-none absolute left-1/2 top-3 z-[1002] h-5 w-24 -translate-x-1/2 rounded-full bg-slate-950/10 ring-1 ring-slate-950/10' />
                      <div className='pointer-events-none absolute bottom-3 left-1/2 z-[1002] h-1.5 w-24 -translate-x-1/2 rounded-full bg-slate-950/10' />
                    </>
                  ) : null}

                  {wireframe.elements.length === 0 ? (
                    <div className='pointer-events-none absolute inset-0 flex items-center justify-center p-10 text-center'>
                      <div className='max-w-md rounded-[2rem] border border-dashed border-slate-300 bg-white/75 p-7 shadow-xl shadow-slate-900/5 backdrop-blur'>
                        <p className='text-2xl font-black tracking-tight' style={displayFont}>
                          开始搭建页面结构。
                        </p>
                        <p className='mt-3 text-sm leading-7 text-slate-500'>
                          从左侧拖入工具，或选中工具后点击网格任意位置。双击图层即可重命名。
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {placementPreview ? (
                    <div
                      className='pointer-events-none absolute rounded-[1.35rem] border-2 border-dashed border-blue-500 bg-blue-500/10 shadow-2xl shadow-blue-600/10'
                      style={{
                        left: `${placementPreview.x}%`,
                        top: `${placementPreview.y}%`,
                        width: `${placementPreview.w}%`,
                        height: `${placementPreview.h}%`,
                        zIndex: 1000,
                      }}
                    >
                      <div className='absolute -top-7 left-0 rounded-full bg-blue-600 px-3 py-1 text-[0.65rem] font-black text-white shadow-lg shadow-blue-600/20'>
                        放置 {kindLabel(placementPreview.kind)}
                      </div>
                    </div>
                  ) : null}

                  {alignmentGuides.map(guide => (
                    <div
                      key={`${guide.orientation}-${guide.position}`}
                      className='pointer-events-none absolute z-[1001] bg-blue-500/70 shadow-[0_0_0_1px_rgba(59,130,246,0.2)]'
                      style={
                        guide.orientation === 'vertical'
                          ? { left: `${guide.position}%`, top: 0, bottom: 0, width: 1 }
                          : { top: `${guide.position}%`, left: 0, right: 0, height: 1 }
                      }
                    />
                  ))}

                  {wireframe.elements.map(element => (
                    <CanvasElement
                      key={element.id}
                      element={element}
                      selected={selectedElementIds.includes(element.id)}
                      editing={element.id === inlineEditingId}
                      inlineTitle={inlineTitle}
                      onSelect={selectElementForEditing}
                      onStartDrag={startMove}
                      onStartResize={startResize}
                      onStartInlineEdit={startInlineEdit}
                      onInlineTitleChange={setInlineTitle}
                      onCommitInlineEdit={commitInlineEdit}
                      onCancelInlineEdit={cancelInlineEdit}
                      onNudge={nudgeElement}
                    />
                  ))}
                </div>
              </div>

              {feedback ? (
                <div
                  className={`pointer-events-none fixed bottom-24 left-1/2 z-50 max-w-xl -translate-x-1/2 rounded-2xl border px-4 py-3 text-sm font-semibold shadow-2xl ${feedbackClass(feedback.tone)}`}
                >
                  {feedback.message}
                </div>
              ) : null}
            </div>

            <div className='flex h-12 shrink-0 items-center bg-[#f3f1ea]/95 px-5 backdrop-blur'>
              <div className='flex w-fit items-center rounded-2xl bg-white/70 p-1 shadow-sm shadow-slate-900/5 backdrop-blur'>
                <span className='hidden px-2 text-[0.65rem] font-black uppercase tracking-[0.18em] text-slate-400 sm:inline'>
                  {activeCanvasViewport.note}
                </span>
                <button
                  type='button'
                  onClick={() => stepCanvasZoom(-1)}
                  disabled={!canZoomOut}
                  className='flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 text-sm font-black text-slate-600 transition hover:border-slate-950 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-35'
                  aria-label='缩小稿纸'
                >
                  −
                </button>
                <input
                  type='range'
                  min={canvasZoomMin * 100}
                  max={canvasZoomMax * 100}
                  step={canvasZoomStep * 100}
                  value={canvasZoomPercent}
                  onChange={event => updateCanvasZoom(Number(event.target.value) / 100)}
                  className='h-1.5 w-24 accent-slate-950 sm:w-32'
                  aria-label='调整稿纸缩放比例'
                />
                <button
                  type='button'
                  onClick={() => stepCanvasZoom(1)}
                  disabled={!canZoomIn}
                  className='flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 text-sm font-black text-slate-600 transition hover:border-slate-950 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-35'
                  aria-label='放大稿纸'
                >
                  +
                </button>
                <button
                  type='button'
                  onClick={() => updateCanvasZoom(1)}
                  className='min-w-14 rounded-pill border border-floating-border bg-floating-surface px-3 py-2 text-xs font-black text-text-primary shadow-floating backdrop-blur-floating transition hover:translate-y-lift hover:border-primary hover:bg-floating-surface-strong active:scale-press'
                  aria-label='重置稿纸缩放比例'
                >
                  {canvasZoomPercent}%
                </button>
              </div>
            </div>
          </div>
        </main>

        <aside
          onMouseEnter={() => setRightSidebarCollapsed(false)}
          onMouseLeave={() => {
            if (!rightSidebarPinned) {
              setRightSidebarCollapsed(true);
            }
          }}
          className={`absolute inset-y-0 right-0 z-30 min-h-0 border-l border-slate-200 bg-white/95 shadow-2xl shadow-slate-950/10 backdrop-blur transition-[width] duration-200 ${
            rightSidebarExpanded ? 'w-[min(340px,calc(100vw-1rem))]' : 'w-14'
          }`}
        >
          {!rightSidebarExpanded ? (
            <div className='flex h-full flex-col items-center gap-2 p-2'>
              <button
                type='button'
                onClick={() => setRightSidebarCollapsed(false)}
                className='inline-flex h-10 w-10 items-center justify-center rounded-pill border border-floating-border bg-floating-surface text-sm font-black text-text-primary shadow-floating backdrop-blur-floating transition hover:translate-y-lift hover:border-primary hover:bg-floating-surface-strong active:scale-press'
                aria-label='展开右侧栏'
              >
                ‹
              </button>
              <button
                type='button'
                onClick={() => {
                  setRightPanel('layers');
                  setRightSidebarCollapsed(false);
                }}
                className='[writing-mode:vertical-rl] rounded-2xl border border-slate-200 px-2 py-3 text-[0.68rem] font-black text-slate-500 hover:bg-slate-50'
              >
                图层
              </button>
              <button
                type='button'
                onClick={() => {
                  setRightPanel('inspector');
                  setRightSidebarCollapsed(false);
                }}
                className='[writing-mode:vertical-rl] rounded-2xl border border-slate-200 px-2 py-3 text-[0.68rem] font-black text-slate-500 hover:bg-slate-50'
              >
                检查器
              </button>
            </div>
          ) : (
            <div className='flex h-full min-h-0 flex-col'>
              <div className='border-b border-slate-200 p-3'>
                <div className='flex items-center gap-2 rounded-2xl bg-slate-100 p-1'>
                  <button
                    type='button'
                    onClick={() => setRightPanel('layers')}
                    className={`flex-1 rounded-xl px-3 py-2 text-xs font-black transition ${
                      rightPanel === 'layers'
                        ? 'bg-white text-slate-950 shadow-sm'
                        : 'text-slate-500 hover:text-slate-950'
                    }`}
                  >
                    图层
                  </button>
                  <button
                    type='button'
                    onClick={() => setRightPanel('inspector')}
                    className={`flex-1 rounded-xl px-3 py-2 text-xs font-black transition ${
                      rightPanel === 'inspector'
                        ? 'bg-white text-slate-950 shadow-sm'
                        : 'text-slate-500 hover:text-slate-950'
                    }`}
                  >
                    检查器
                  </button>
                  <button
                    type='button'
                    onClick={() => setRightSidebarPinned(current => !current)}
                    className={`inline-flex h-8 w-8 flex-none items-center justify-center rounded-xl transition ${
                      rightSidebarPinned
                        ? 'bg-slate-950 text-white'
                        : 'text-slate-400 hover:bg-white hover:text-slate-950'
                    }`}
                    aria-label={rightSidebarPinned ? '取消固定右侧栏' : '固定右侧栏'}
                    aria-pressed={rightSidebarPinned}
                  >
                    <svg
                      aria-hidden='true'
                      className={`h-4 w-4 transition-transform ${rightSidebarPinned ? 'rotate-0' : '-rotate-45'}`}
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2.5}
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 17v5' />
                      <path d='M9 10.8a2 2 0 0 1-1.1 1.8l-1.8.9A2 2 0 0 0 5 15.2V16h14v-.8a2 2 0 0 0-1.1-1.8l-1.8-.9A2 2 0 0 1 15 10.8V7h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1z' />
                    </svg>
                  </button>
                  <button
                    type='button'
                    onClick={() => {
                      setRightSidebarPinned(false);
                      setRightSidebarCollapsed(true);
                    }}
                    className='inline-flex h-8 w-8 flex-none items-center justify-center rounded-pill border border-floating-border bg-floating-surface text-xs font-black text-text-primary shadow-floating backdrop-blur-floating transition hover:translate-y-lift hover:border-primary hover:bg-floating-surface-strong active:scale-press'
                    aria-label='折叠右侧栏'
                  >
                    ›
                  </button>
                </div>
              </div>

              <div className='min-h-0 flex-1 overflow-y-auto p-4'>
                {rightPanel === 'layers' ? (
                  layers.length === 0 ? (
                    <p className='rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 font-mono text-sm leading-6 text-slate-400'>
                      在画布上绘制或插入元素后，图层会显示在这里。
                    </p>
                  ) : (
                    <div className='space-y-2'>
                      {layers.map(element => {
                        const isSelected = selectedElementIds.includes(element.id);
                        return (
                          <button
                            key={element.id}
                            type='button'
                            onClick={event =>
                              selectElementForEditing(element.id, event.shiftKey || event.metaKey || event.ctrlKey)
                            }
                            className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-3 py-3 text-left transition ${
                              isSelected
                                ? 'border-blue-600 bg-blue-50 text-blue-950'
                                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                          >
                            <span className='min-w-0'>
                              <span className='block truncate text-sm font-black'>{element.title}</span>
                              <span className='block truncate text-[0.68rem] font-semibold text-slate-400'>
                                {kindLabel(element.kind)} · {regionLabel(element.region)}
                              </span>
                            </span>
                            <span className='text-[0.68rem] font-black text-slate-300'>z{element.z}</span>
                          </button>
                        );
                      })}
                    </div>
                  )
                ) : null}

                {rightPanel === 'inspector' ? (
                  selectedElements.length > 1 ? (
                    <div className='space-y-4'>
                      <div className='rounded-2xl border border-blue-100 bg-blue-50 p-3'>
                        <p className='text-xs font-black text-blue-500'>多选</p>
                        <p className='mt-1 text-lg font-black text-blue-950'>{selectedElements.length} 个图层</p>
                      </div>
                      <div className='grid grid-cols-3 gap-2'>
                        <SmallButton onClick={() => alignSelectedElements('left')}>左齐</SmallButton>
                        <SmallButton onClick={() => alignSelectedElements('center')}>中齐</SmallButton>
                        <SmallButton onClick={() => alignSelectedElements('right')}>右齐</SmallButton>
                        <SmallButton onClick={() => alignSelectedElements('top')}>顶齐</SmallButton>
                        <SmallButton onClick={() => alignSelectedElements('middle')}>居中</SmallButton>
                        <SmallButton onClick={() => alignSelectedElements('bottom')}>底齐</SmallButton>
                      </div>
                      <div className='grid grid-cols-2 gap-2'>
                        <SmallButton
                          onClick={() => nudgeElement(selectedElementId ?? selectedElements[0]?.id ?? '', -2, 0)}
                        >
                          左移
                        </SmallButton>
                        <SmallButton
                          onClick={() => nudgeElement(selectedElementId ?? selectedElements[0]?.id ?? '', 2, 0)}
                        >
                          右移
                        </SmallButton>
                        <SmallButton
                          onClick={() => nudgeElement(selectedElementId ?? selectedElements[0]?.id ?? '', 0, -2)}
                        >
                          上移
                        </SmallButton>
                        <SmallButton
                          onClick={() => nudgeElement(selectedElementId ?? selectedElements[0]?.id ?? '', 0, 2)}
                        >
                          下移
                        </SmallButton>
                      </div>
                      <button
                        type='button'
                        onClick={removeSelectedElements}
                        className='w-full rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-black text-red-900 transition hover:border-red-400 hover:bg-red-100'
                      >
                        删除选中图层
                      </button>
                    </div>
                  ) : selectedElement ? (
                    <div className='space-y-4'>
                      <div className='rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                        <p className='text-xs font-black text-slate-400'>{kindLabel(selectedElement.kind)}</p>
                        <p className='mt-1 truncate text-lg font-black'>{selectedElement.title}</p>
                      </div>

                      <FieldLabel label='名称'>
                        <input
                          value={selectedElement.title}
                          onChange={event => updateElement(selectedElement.id, { title: event.target.value })}
                          className='w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                        />
                      </FieldLabel>
                      <FieldLabel label='详情 / 行数据 / 标签'>
                        <textarea
                          value={selectedElement.details}
                          onChange={event => updateElement(selectedElement.id, { details: event.target.value })}
                          rows={5}
                          className='w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                        />
                      </FieldLabel>
                      <FieldLabel label='AI 实现说明'>
                        <textarea
                          value={selectedElement.notes}
                          onChange={event => updateElement(selectedElement.id, { notes: event.target.value })}
                          rows={3}
                          className='w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                        />
                      </FieldLabel>
                      <FieldLabel label='所属区域'>
                        <select
                          value={selectedElement.region}
                          onChange={event => {
                            if (isRegion(event.target.value)) {
                              updateElement(selectedElement.id, { region: event.target.value });
                            }
                          }}
                          className='w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                        >
                          {regionIds.map(region => (
                            <option key={region} value={region}>
                              {regionLabel(region)}
                            </option>
                          ))}
                        </select>
                      </FieldLabel>

                      <div className='grid grid-cols-3 gap-2'>
                        <SmallButton onClick={() => nudgeElement(selectedElement.id, -2, 0)}>左移</SmallButton>
                        <SmallButton onClick={() => nudgeElement(selectedElement.id, 0, -2)}>上移</SmallButton>
                        <SmallButton onClick={() => nudgeElement(selectedElement.id, 2, 0)}>右移</SmallButton>
                        <SmallButton onClick={() => updateElement(selectedElement.id, { w: selectedElement.w - 3 })}>
                          变窄
                        </SmallButton>
                        <SmallButton onClick={() => nudgeElement(selectedElement.id, 0, 2)}>下移</SmallButton>
                        <SmallButton onClick={() => updateElement(selectedElement.id, { w: selectedElement.w + 3 })}>
                          变宽
                        </SmallButton>
                        <SmallButton onClick={sendLayerBackward}>后移</SmallButton>
                        <SmallButton onClick={duplicateSelectedElement}>复制</SmallButton>
                        <SmallButton onClick={bringLayerForward}>前移</SmallButton>
                      </div>

                      <button
                        type='button'
                        onClick={() => setAdvancedOpen(current => !current)}
                        className='w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-600 transition hover:border-slate-950 hover:text-slate-950'
                      >
                        {advancedOpen ? '收起精确数值' : '微调精确数值'}
                      </button>
                      {advancedOpen ? (
                        <div className='grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                          {(['x', 'y', 'w', 'h', 'z'] as NumberField[]).map(field => (
                            <FieldLabel key={field} label={field.toUpperCase()}>
                              <input
                                type='number'
                                value={
                                  field === 'x'
                                    ? selectedElement.x
                                    : field === 'y'
                                      ? selectedElement.y
                                      : field === 'w'
                                        ? selectedElement.w
                                        : field === 'h'
                                          ? selectedElement.h
                                          : selectedElement.z
                                }
                                onChange={event =>
                                  updateElementNumber(selectedElement.id, field, Number(event.target.value))
                                }
                                className='w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold outline-none focus:border-blue-600'
                              />
                            </FieldLabel>
                          ))}
                        </div>
                      ) : null}
                      <button
                        type='button'
                        onClick={() => removeElement(selectedElement.id)}
                        className='w-full rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-black text-red-900 transition hover:border-red-400 hover:bg-red-100'
                      >
                        删除图层
                      </button>
                    </div>
                  ) : (
                    <p className='rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 font-mono text-sm leading-6 text-slate-400'>
                      选择画布或列表中的图层来编辑文案和行为说明。按住 Shift 或 ⌘ 可以多选。
                    </p>
                  )
                ) : null}
              </div>
            </div>
          )}
        </aside>
      </div>

      {secondaryPanel ? (
        <div className='fixed inset-0 z-[70] bg-slate-950/30 backdrop-blur-sm' onClick={() => setSecondaryPanel(null)}>
          <div
            className={`absolute inset-y-0 right-0 flex w-full flex-col border-l border-slate-200 bg-white shadow-2xl ${
              secondaryPanel === 'export' ? 'max-w-6xl' : 'max-w-xl'
            }`}
            onClick={event => event.stopPropagation()}
          >
            <div className='flex items-center justify-between border-b border-slate-200 px-5 py-4'>
              <div>
                <p className='text-xs font-black uppercase tracking-[0.24em] text-slate-400'>
                  {secondaryPanel === 'templates' ? '模板' : secondaryPanel === 'page' ? '页面上下文' : '导出'}
                </p>
                <h2 className='mt-1 text-2xl font-black' style={displayFont}>
                  {secondaryPanel === 'templates'
                    ? '从产品示例或常用结构开始'
                    : secondaryPanel === 'page'
                      ? '告诉 AI 这个页面要做什么'
                      : '复制 AI 可读文本'}
                </h2>
              </div>
              <button
                type='button'
                onClick={() => setSecondaryPanel(null)}
                className='rounded-xl border border-slate-200 px-3 py-2 text-sm font-black text-slate-500 hover:border-slate-950'
              >
                关闭
              </button>
            </div>

            {secondaryPanel === 'templates' ? (
              <div className='min-h-0 flex-1 overflow-y-auto p-5'>
                <div className='grid gap-3'>
                  {wireframeTemplates.map(template => (
                    <button
                      key={template.id}
                      type='button'
                      onClick={() => loadTemplate(template)}
                      className='rounded-3xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-blue-600 hover:shadow-xl hover:shadow-slate-900/5'
                    >
                      <span className='block text-base font-black text-slate-950'>{template.name}</span>
                      <span className='mt-1 block text-sm leading-6 text-slate-500'>{template.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {secondaryPanel === 'page' ? (
              <div className='min-h-0 flex-1 overflow-y-auto p-5'>
                <div className='space-y-4'>
                  <FieldLabel label='页面名称'>
                    <input
                      value={wireframe.pageName}
                      onChange={event => setWireframe(current => ({ ...current, pageName: event.target.value }))}
                      className='w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                    />
                  </FieldLabel>
                  <FieldLabel label='页面用途'>
                    <textarea
                      value={wireframe.purpose}
                      onChange={event => setWireframe(current => ({ ...current, purpose: event.target.value }))}
                      rows={4}
                      className='w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                    />
                  </FieldLabel>
                  <FieldLabel label='风格方向'>
                    <textarea
                      value={wireframe.styleDirection}
                      onChange={event => setWireframe(current => ({ ...current, styleDirection: event.target.value }))}
                      rows={4}
                      className='w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100'
                    />
                  </FieldLabel>
                </div>
              </div>
            ) : null}

            {secondaryPanel === 'export' ? (
              <div className='grid min-h-0 flex-1 gap-4 p-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]'>
                <div className='min-h-0 overflow-hidden rounded-3xl border border-slate-200 bg-[#fbfaf4] p-4'>
                  <div className='flex items-center justify-between gap-3'>
                    <div>
                      <p className='text-[0.68rem] font-black uppercase tracking-[0.2em] text-slate-400'>线框预览</p>
                      <h3 className='mt-1 truncate text-lg font-black'>{wireframe.pageName}</h3>
                    </div>
                    <span className='rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-black text-slate-400'>
                      {wireframe.elements.length} elements
                    </span>
                  </div>
                  <pre className='mt-4 h-[min(58dvh,520px)] overflow-auto rounded-2xl border border-slate-200 bg-white/80 p-4 font-mono text-[0.62rem] leading-4 text-slate-500 shadow-inner shadow-slate-900/5'>
                    {generateAsciiWireframe(wireframe)}
                  </pre>
                </div>

                <div className='flex min-h-0 flex-col rounded-3xl border border-slate-200 bg-white'>
                  <div className='flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 p-3'>
                    <div>
                      <p className='text-[0.68rem] font-black uppercase tracking-[0.2em] text-slate-400'>Prompt</p>
                      <h3 className='mt-1 text-base font-black'>AI 实现提示词</h3>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      <SmallButton onClick={() => setPromptDraft(promptOutput)}>恢复生成内容</SmallButton>
                      <SmallButton
                        onClick={() =>
                          void copyText(promptDraft, '完整提示词已复制，可粘贴到 Claude Code、Cursor 或 Copilot。')
                        }
                      >
                        复制完整提示词
                      </SmallButton>
                    </div>
                  </div>

                  <div className='min-h-0 flex-1 p-4'>
                    <textarea
                      value={promptDraft}
                      onChange={event => setPromptDraft(event.target.value)}
                      spellCheck={false}
                      className='h-full w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs leading-6 text-slate-700 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100'
                      aria-label='可编辑 AI 实现提示词'
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
