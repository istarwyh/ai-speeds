import type { Share } from './types.ts';

const slug = 'insurance-quick-check-shanghai-2026';
const baseUrl = `https://assets.aispeeds.me/shares/${slug}/v1`;

const slideNotes = [
  [
    '保险快查',
    '上海（长三角）中青年工程师创新创业大赛金融科技赛道答辩。',
    '用大模型智能体帮助用户理解保险产品和比较条款，让关键结论能够复核。',
  ],
  ['跨专业协作', '五位核心成员的分工。公开版已移除成员照片。', '王艺辉负责 Agent 架构、产品资产建设与质量评测体系。'],
  [
    '团队如何协作',
    '项目融合保险、算法、工程、产品和运营。',
    '从需求到线上质量，团队共同负责，不能把成果归给某一个模型或角色。',
  ],
  [
    '给三岁孩子选长期医疗险',
    '以家长比较两款长期医疗险的问题为例。',
    '家长需要结合就医需求、家庭预算和已有保障判断差异。',
  ],
  [
    '保险难在判断',
    '材料、个人条件、计算和表达各有难点。',
    '条款、健康告知和费率表需要合起来看，哪些能算、哪些需要额外材料也要分清楚。',
  ],
  [
    '怎样交付可信判断',
    '答案要建立在可找到的资料和可解释的判断之上。',
    '重点看结论能否追到原始依据，以及答案是否说明适用条件。',
  ],
  [
    '从问题到可复核的结果',
    '自然语言查询、筛选、对比、条款解读和适配分析。',
    '对比内容按保障责任、医疗资源、续保与费用组织。',
  ],
  [
    '真实产品演示',
    '答辩稿保留产品演示的静态画面。',
    '看三个问题：资料从哪里来、判断如何形成、结论能不能重查。这一页不是独立视频。',
  ],
  ['Agent Native 技术闭环', '上下文供给、推理检索、校验和反馈。', '执行、生成结果的修复和能力评测各有独立的目标。'],
  [
    'DeepResearch：组织可信上下文',
    '按任务组织条款、费率、公开资料及核验反馈。',
    '上下文要带来源和时效，供后续产品检索和校验使用。',
  ],
  [
    'Agentic Search：收敛到合适的候选',
    '根据需求拆检索任务，观察召回后再调整。',
    '候选太多可以追加区分条件，太少可以换查找方向，但用户给的硬条件不能放宽。',
  ],
  [
    'Agentic Verify：先校验再交付',
    '核验结构、数据、事实、引用和适用边界。',
    '只修正生成结果，不覆盖原始材料；到达修复上限后，不能继续无休止重试。',
  ],
  [
    '三类反馈循环',
    '执行循环改变本次任务，产物循环修本次回答，能力循环面向未来任务。',
    '修好一份产物，不代表下一次就不会犯同类错误。',
  ],
  [
    '来源、计算、校验、边界',
    '答辩用四道关说明什么样的结论可以交付。',
    '结论附依据与边界；材料不足时明确说明还不能下判断。',
  ],
  ['业务运行情况', '答辩原页记录了当时的规模、覆盖与质量。', '对应统计时点见答辩页脚，不将答辩口径表述为当前指标。'],
  [
    '可以持续积累的系统资产',
    '知识材料、确定性工具和质量反馈是长期积累项。',
    '评测、复核和失败样本共同帮助团队发现下一步要修哪里。',
  ],
  [
    '从保险快查到可信决策辅助',
    '总结项目，并讨论方法在复杂金融场景中的延伸。',
    '把差异、依据与不确定性说清楚，最终选择交给用户。',
  ],
] as const;

export const insuranceQuickCheckShanghai2026: Share = {
  slug,
  status: 'public',
  locale: 'zh-CN',
  title: '保险快查：基于大模型智能体的保险产品可信理解与决策辅助平台',
  subtitle: '上海（长三角）中青年工程师创新创业大赛 · 金融科技赛道',
  summary: '以给 3 岁孩子比较两款长期医疗险为例，介绍保险快查如何查条款、做对比，再用可复核的证据支持判断。',
  description:
    '团队带着「保险快查：基于大模型智能体的保险产品可信理解与决策辅助平台」参加 2026 年上海（长三角）中青年工程师创新创业大赛决赛。这份 17 页公开答辩稿，从家长的保险问题出发，讲清检索、计算、核验以及证据不足时的回答边界。公开版移除了团队成员照片。',
  author: { name: '王艺辉 / 晓灰' },
  event: {
    name: '2026 年上海（长三角）中青年工程师创新创业大赛决赛',
    location: '上海杨浦 · 复兴岛国际创客岛',
    url: 'https://rsj.sh.gov.cn/ttpxw_17107/20261123/t0035_1444848.html',
  },
  location: '上海杨浦 · 复兴岛国际创客岛',
  eventDate: '2026-11-19T00:00:00Z',
  publishedAt: '2026-11-25T13:58:20Z',
  updatedAt: '2026-11-25T13:58:20Z',
  tags: ['保险科技', '金融科技', 'Agent Native'],
  coverPath: `${baseUrl}/cover.webp`,
  coverAlt: '王艺辉在上海（长三角）中青年工程师创新创业大赛决赛现场，身后是写有比赛名称的舞台屏幕。',
  resources: [
    {
      kind: 'pdf',
      label: '下载答辩 PDF（公开版）',
      url: `${baseUrl}/deck.pdf`,
      fileName: `${slug}-v1.pdf`,
      mediaType: 'application/pdf',
    },
    {
      kind: 'transcript',
      label: '下载逐页文字',
      url: `${baseUrl}/transcript.md`,
      fileName: `${slug}-v1-transcript.md`,
      mediaType: 'text/markdown; charset=utf-8',
    },
  ],
  deck: {
    kind: 'deck',
    version: 'v1',
    baseUrl,
    slideCount: slideNotes.length,
    slideWidth: 1920,
    slideHeight: 1080,
    imageFormat: 'webp',
    paths: {
      cover: 'cover.webp',
      slides: 'slides',
      thumbnails: 'thumbnails',
      manifest: 'manifest.json',
      pdf: 'deck.pdf',
      transcript: 'transcript.md',
    },
    slides: slideNotes.map(([title, description, transcript], index) => ({
      number: index + 1,
      title,
      description,
      transcript,
    })),
  },
};
