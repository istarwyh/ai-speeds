import type { Share } from './types.ts';

const ASSET_BASE_URL = 'https://assets.aispeeds.me/shares/agent-native-product-ccf-tf179/v1';

export const agentNativeProductCcfTf179 = {
  slug: 'agent-native-product-ccf-tf179',
  status: 'public',
  locale: 'zh-CN',
  title: '保险快查 Agent Native 实践',
  subtitle: 'CCF TF 第 179 期 · 智能体加速金融创新',
  summary:
    '以保险快查为线索，讲解离线认知资本生产、协议化协作，以及内容型（DIPG）与交互型（AgenticOne）两种在线消费方式。',
  description:
    '2026 年 6 月 CCF TF 第 179 期「智能体加速金融创新」分享材料的公开整理版：从 Agent Native 的系统方法论出发，依次拆解上下文供给链路、Verify 质量网关、DIPG 内容生成与 AgenticOne 实时咨询架构。',
  author: {
    name: '王艺辉 / 晓灰',
  },
  event: {
    name: 'CCF TF 第 179 期：智能体加速金融创新',
  },
  eventDate: '2026-06-25T00:00:00Z',
  publishedAt: '2026-11-15T09:25:20Z',
  updatedAt: '2026-11-15T09:25:20Z',
  tags: ['Agent Native', 'Harness Engineering', 'AI 产品', '保险科技', 'CCF'],
  coverPath: `${ASSET_BASE_URL}/cover.webp`,
  coverAlt: '《构建 Agent Native Product》封面：保险快查离线认知资本与在线 Agent 实践。',
  relatedArticles: [
    {
      title: '构建 Agent Native Product：保险快查离线与在线实践演讲稿',
      url: 'https://xiaohui.cool/show/构建-Agent-Native-Product：保险快查离线与在线实践演讲稿',
      description: '配套完整演讲稿，含章节叙述与延伸阅读。',
    },
  ],
  resources: [
    {
      kind: 'pdf',
      label: '下载 PDF',
      url: `${ASSET_BASE_URL}/deck.pdf`,
      fileName: 'agent-native-product-ccf-tf179-v1.pdf',
      mediaType: 'application/pdf',
    },
    {
      kind: 'pptx',
      label: '下载 PPTX',
      url: `${ASSET_BASE_URL}/source.pptx`,
      fileName: 'agent-native-product-ccf-tf179-v1.pptx',
      mediaType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    },
    {
      kind: 'transcript',
      label: '下载逐页文字',
      url: `${ASSET_BASE_URL}/transcript.md`,
      fileName: 'agent-native-product-ccf-tf179-v1-transcript.md',
      mediaType: 'text/markdown; charset=utf-8',
    },
    {
      kind: 'article',
      label: '下载文章 Markdown',
      url: `${ASSET_BASE_URL}/article.md`,
      fileName: 'agent-native-product-ccf-tf179-article.md',
      mediaType: 'text/markdown; charset=utf-8',
    },
  ],
  deck: {
    kind: 'deck',
    version: 'v1',
    baseUrl: ASSET_BASE_URL,
    slideCount: 36,
    slideWidth: 1920,
    slideHeight: 1080,
    imageFormat: 'webp',
    paths: {
      cover: 'cover.webp',
      slides: 'slides',
      thumbnails: 'thumbnails',
      manifest: 'manifest.json',
      pdf: 'deck.pdf',
      pptx: 'source.pptx',
      transcript: 'transcript.md',
    },
    slides: [
      {
        number: 1,
        title: '保险快查：离线认知资本与在线 Agent 实践',
        description:
          '封面，大标题“构建 Agent Native Product”，副标题为“保险快查：离线认知资本与在线 Agent 实践”，并列出离线认知资本、协议化协作、在线低时延消费三个关键词。',
        transcript: '不是让模型想更久，而是让系统沉淀更深。',
      },
      {
        number: 2,
        title: '自我介绍',
        description:
          '左侧为讲者肖像与姓名“王艺辉｜晓灰”，下方为“北京大学毕业｜蚂蚁集团 Agent 技术专家”；右侧四张卡片依次为个人简介、代表实践、核心关注与荣誉。',
        transcript:
          '个人简介：研究和实践方向包括大模型应用工程化、Agent 系统设计、企业级后端架构与业务流程自动化。代表实践：从 0 到 1 主牵了保险快查 Agent 应用，在复杂保险业务场景下的 Agent 长程任务构建、效果评估、Harness Engineering 和系统稳定性方面具有丰富实践经验。核心关注：大模型应用工程化、Agent 系统设计、Harness Engineering、系统稳定性与效果评估。荣誉：财保 ACE·AI 先锋；阿里 & 蚂蚁 ATA 个人 Agent 最佳实践者。',
      },
      {
        number: 3,
        title: '政策背景：银行业保险业人工智能安全开发应用指导意见',
        description:
          '政府信息公开页面截图，发布时间 2026-06-18，公文名称为“国家金融监督管理总局关于银行业保险业人工智能安全开发应用的指导意见”，文号金发〔2026〕8号，页面展示公文开头段落。',
        transcript:
          '本页引用国家金融监督管理总局 2026 年 6 月 18 日发布的《关于银行业保险业人工智能安全开发应用的指导意见》（金发〔2026〕8号），作为保险行业应用 AI 的政策背景。',
      },
      {
        number: 4,
        title: '真实咨询场景',
        description:
          '中间是一条真实咨询示例的手机界面：用户询问带父母去普吉岛再飞苏格兰、老人有高血压应买什么意外险，Agent 先筛选旅行意外险、再深度匹配产品；左右分别为“用户场景”与“Agent 输出”两栏。',
        transcript:
          '用户场景：复杂保险问题咨询；条款理解存在困惑；需要专业方案建议。Agent 输出：关键信息提炼与澄清；条款检索与解读；风险分析与保障解释；产品匹配与方案建议。',
      },
      {
        number: 5,
        title: '保险咨询为什么难',
        description:
          '标题页式要点图，突出保险咨询是高约束业务推理，列出材料长、条件多、表达严三类难点，并标注长上下文、多条件约束、强事实要求、低时延体验四个标签。',
        transcript:
          '保险咨询不是普通问答，而是高约束业务推理。材料长：条款、投保须知、健康告知。条件多：等待期、除外责任、续保条件。表达严：合规、来源、可追溯。',
      },
      {
        number: 6,
        title: '今天的路线',
        description:
          '路线图，由四步组成：Agent Native 方法论、离线认知资本生产、DIPG 内容型消费、AgenticOne 交互型消费，对应 Method、Offline、Content、Interaction。',
        transcript:
          '从方法论到保险快查实践。1. Agent Native 方法论；2. 离线认知资本生产；3. DIPG 内容型消费；4. AgenticOne 交互型消费。',
      },
      {
        number: 7,
        title: 'Part 1：Agent Native 的系统方法论',
        description:
          '第一部分章节页，主题为 Agent Native 的系统方法论，关键词包括 Product Plane、Production Plane、OneAgent、Protocol。',
        transcript: '先定义系统边界，再谈 Agent 能力。',
      },
      {
        number: 8,
        title: 'Agent Native 不是加聊天框',
        description:
          '闭环示意图：用户意图 → Agent 调度 → 结果交付，再由反馈和失败样本回流，使下一轮能力变强；标注 Intent、Context、Tools、Result、Feedback。',
        transcript:
          'Agent Native 不是加聊天框，而是让产品形成智能闭环。用户意图 → Agent 调度 → 结果交付；反馈和失败样本回流；下一轮能力变强。',
      },
      {
        number: 9,
        title: '两个平面：Product 交付智能，Production 制造智能',
        description:
          '双平面示意图：Product Plane 面向回答、内容、行动，Production Plane 面向观察、诊断、修复；涉及 Product Agent、Production Agent、logs、evals、repair、release gate。',
        transcript: 'Product Plane：回答、内容、行动。Production Plane：观察、诊断、修复。两者闭环才是 Agent Native。',
      },
      {
        number: 10,
        title: 'Token 经济学',
        description: '离线与在线两侧的对比图，标注 offline token、context asset、online token、latency budget。',
        transcript:
          '离线生产资本，在线调度资本。离线 token：检索、阅读、验证、索引。在线 token：理解意图、调度资产、终末生成。成本从一次性推理转为可复用资产。',
      },
      {
        number: 11,
        title: 'OneAgent：可复用的基础内核',
        description:
          '基础内核结构图，列出 ReAct Loop、Tools / MCP、state/VFS、SubAgent、checkpoint / events，并标注 Reason、Action、Observation、ToolMessage、files、audit。',
        transcript:
          'OneAgent 不是 God Agent，而是领域 Agent 的抽象类，包含 ReAct Loop、Tools / MCP、state/VFS、SubAgent、checkpoint / events。',
      },
      {
        number: 12,
        title: '协议化协作',
        description: '协作契约示意图，标注 task、handoff、state、evidence、verify、event。',
        transcript:
          '多 Agent 不能只是互相聊天。任务契约：目标、输入、约束、停止条件。状态契约：事实进入 state/VFS，证据与校验随之沉淀。事件契约：可追溯、可拒绝、可展示。',
      },
      {
        number: 13,
        title: 'Part 2：离线认知资本生产线',
        description: '第二部分章节页，关键词 Context Supply Pipeline、Evidence、Verify。',
        transcript: '在线体验的上限，来自离线资产的质量。',
      },
      {
        number: 14,
        title: '保险快查总览',
        description: '总览图：一条上下文供给链路沉淀认知资本，向 DIPG 与 AgenticOne 两个出口供给。',
        transcript:
          '一条供给链路，两个消费出口。上下文供给链路沉淀资产；DIPG 消费为 verified HTML；AgenticOne 消费为实时咨询体验。',
      },
      {
        number: 15,
        title: 'Context Supply Pipeline',
        description:
          '供给链路图，输出一组可消费资产，标注 raw materials、retrieval trace、source priority、quality gate。',
        transcript:
          '生产的不是文本，而是一组可消费资产：context bundle；evidence / source map；vector index；verify score / callback。',
      },
      {
        number: 16,
        title: '离线链路的四类 Agent',
        description: '四类 Agent 分工图，标注 todo、material index、service info、world context、score、error_code。',
        transcript:
          '分工明确，避免一个 Agent 吞掉所有复杂性。Host：规划与主报告。Supplementary：内部增量。World Knowledge：外部认知。Verify：质量网关。',
      },
      {
        number: 17,
        title: 'state/VFS 是事实承载层',
        description: '上下文与状态分层图，标注 messages、files、audit、search_evidence、checkpoint。',
        transcript:
          '模型上下文负责推理，state 负责承载事实。长材料不进 messages；报告、证据、索引进入 state；checkpoint 让过程可恢复、可审计。',
      },
      {
        number: 18,
        title: 'Verify Agent 的位置',
        description: '质量网关示意图，标注 structural_check、llm_verify、fix_hint、callback。',
        transcript: '质量网关，不是语言点评员。看产物，也看原料；结构校验 + 事实校验；合格回调，不合格返回错误码。',
      },
      {
        number: 19,
        title: 'Part 3：DIPG：内容型消费',
        description: '第三部分章节页，关键词 verified HTML、offline first、DB direct。',
        transcript: '把离线认知资本变成 C 端可展示内容。',
      },
      {
        number: 20,
        title: '产品页内容示例',
        description:
          '并排四张产品页截图：医疗险保障范围解读、保障比例图表、特色服务与重要免责条款，以及年金产品页的 AI 总结与适配度入口。',
        transcript:
          '本页为内容型消费的产品页截图示例，包含保障范围深度解读、赔付比例与限额、特色服务、免责条款，以及 AI 总结与适配度分析。截图中的细节以图像为准。',
      },
      {
        number: 21,
        title: 'DIPG 主链路',
        description: '主链路流程图：Research Agent → Verify Agent → Host 局部修正 → 入库 DB，C 端凭 prodNo 直出。',
        transcript:
          '离线生成、校验、入库，C 端直出。Research 生成 HTML；Verify 把关结构与事实；Host 按 fix_hint 局部修正；通过后刷入 DB。',
      },
      {
        number: 22,
        title: '两个 badcase 说明为什么要 Verify',
        description:
          '两个失败样本对比：结构错误与无来源事实幻觉，标注 HTML parser、unsupported claim、source missing。',
        transcript:
          '页面可以塌，也可以很体面地骗人。孤儿 </div>：结构错误。“优于市场 85%”：无来源事实幻觉。前者靠程序化校验，后者靠事实对齐。',
      },
      {
        number: 23,
        title: 'Audit 契约',
        description: '校验对齐示意图，标注 claim、source、tool output、alignment。',
        transcript:
          '校验要对齐“产物”与“生产原料”。工具调用、检索结果、原始素材进入 /audit/；HTML 结论必须能连回 source；Verify 不是对文本做主观评分。',
      },
      {
        number: 24,
        title: '从 RAG 到 Deep Research',
        description: 'RAG 与 Deep Research 对比图，标注 support、counter、missing、constraint。',
        transcript:
          '不是找更多材料，而是组织研究轨迹。普通 RAG 追求相关性；Deep Research 追求结论敏感性；支持、反对、缺失都会影响结论。',
      },
      {
        number: 25,
        title: '从证据包到轨迹包',
        description: '类比案件卷宗的轨迹包示意图，示例问题为“保证续保？”，涉及“审核同意”“不能过度表达”。',
        transcript: '像案件卷宗，而不是照片堆。轨迹包包含：初始判断；支持材料；限制 / 反对材料；写作约束。',
      },
      {
        number: 26,
        title: '报告评测体系',
        description: '评测层级图，标注 score、evidence、source、reason_code。',
        transcript:
          '不要只给总分，要拆到 checkpoint。Dimension → Item → Checkpoint；结构化 Judge 才能统计和回归；评测器也需要元评测。',
      },
      {
        number: 27,
        title: '从离线到在线',
        description: '过渡页，用一座“桥”连接内容型消费与交互型消费。',
        transcript: '同一批认知资本，进入实时咨询链路。DIPG 是内容型消费；AgenticOne 是交互型消费。',
      },
      {
        number: 28,
        title: 'Part 4：AgenticOne：交互型消费',
        description: '第四部分章节页，关键词 thin orchestrator、thick capabilities、state first。',
        transcript: '主 Agent 要薄，领域能力要厚。',
      },
      {
        number: 29,
        title: '典型咨询案例',
        description:
          '并排四个真实咨询案例的回答截图：外籍人士在尼泊尔高海拔徒步、带高血压长辈跨国旅行、储蓄增值型产品收益率要求、同一家保司兼顾旅行意外与养老安排。',
        transcript:
          '四个典型咨询问题分别涉及：外籍留学生赴尼泊尔 5000 米以上登山的旅行险；带高血压父母出境的意外险；要求收益率高于 2.68% 的较短期限储蓄增值型产品；同一家保司既保障东京旅行又覆盖养老安排的产品组合。截图细节以图像为准。',
      },
      {
        number: 30,
        title: 'AgenticOne 六层架构',
        description: '分层架构图，标注 session、active flow、intent routing、tools、state、SSE。',
        transcript: '把在线不确定性拆开治理：入口与会话；Orchestrator；主 Agent / SubAgent；工具数据；状态流式。',
      },
      {
        number: 31,
        title: '主 Agent 要薄',
        description: '主 Agent 职责边界图，标注 intent、routing、state ref、terminal output。',
        transcript:
          '它负责调度，不负责吞掉所有长上下文：理解意图与指代；判断下一步能力；不直接读长条款；不二次改写终末工具结果。',
      },
      {
        number: 32,
        title: '搜品不是普通搜索工具',
        description:
          '并发任务拆解图：“端午去尼泊尔爬山”被拆成 product、benefit、budget、underwriting 等并发检索，标注 safe_in_country=尼泊尔、高海拔、紧急救援、concurrent_search。',
        transcript:
          '“端午去尼泊尔爬山”如何变成并发任务。product：旅行险与目的地；benefit：救援 / 高风险运动；budget：预算过滤；underwriting：核保过滤。',
      },
      {
        number: 33,
        title: '条款问答链路',
        description: '取证到回答的链路图，标注 CLAUSE、EXCLUSION、search_evidence、terminal tool。',
        transcript:
          'EBC 徒步能不能赔？先取证，再回答。取证 SubAgent 查条款 / 除外 / 投保须知；证据写入 state.search_evidence；qa_summary 读取证据生成最终答案。',
      },
      {
        number: 34,
        title: '事件流不是 token 流',
        description: '事件翻译示意图，标注 run_id、parent_ids、checkpoint、last_event_id、SSE。',
        transcript:
          '把运行时事件翻译成产品事件。内部事件树：LLM / tools / SubAgent；producer/consumer 重排业务时序；前端 SSE 展示搜索、取证、生成；断连后接续，不重跑。',
      },
      {
        number: 35,
        title: '一句话收束',
        description:
          '收束页，核心公式“Agent Native Product = 认知资本 + 协议化协作”，并强调“不是想更久，而是沉淀更深”。',
        transcript: '可复用：离线资产。可追溯：证据与 source map。可校验：Verify + Eval。可交付：在线低时延消费。',
      },
      {
        number: 36,
        title: '感谢聆听',
        description: '结束页，“感谢聆听 · 欢迎交流指正”，左下为讲者署名“王艺辉｜晓灰”，右下为联系二维码。',
        transcript: '感谢聆听，欢迎交流指正。',
      },
    ],
  },
} as const satisfies Share;
