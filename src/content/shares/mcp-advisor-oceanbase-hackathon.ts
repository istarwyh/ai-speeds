import type { Share } from './types.ts';

const ASSET_BASE_URL = 'https://assets.aispeeds.me/shares/mcp-advisor-oceanbase-hackathon/v1';

export const mcpAdvisorOceanbaseHackathon = {
  slug: 'mcp-advisor-oceanbase-hackathon',
  status: 'draft',
  locale: 'zh-CN',
  title: 'MCP Advisor：做 AI 时代最懂 MCP 的顾问',
  subtitle: '首届 OceanBase AI 黑客松 · 二等奖',
  summary:
    'MCPAdvisor 获首届 OceanBase AI 黑客松二等奖。12 页分享介绍 MCP 服务发现、意图匹配、OceanBase 向量检索与多 Provider 融合推荐。',
  description:
    '王艺辉、陆冠融的黑客松项目分享材料公开整理版。决赛于 2025 年 5 月 16 日在广州阿里广州中心举行，获奖作品于次日开发者大会展示。成果数据与规划保留 2025 年分享时的口径，不代表当前产品状态。第 5 页在线展示静态画面，演示视频包含在下载的 PPTX 中，请使用支持视频的演示软件播放；PDF 不支持视频播放。',
  author: { name: '王艺辉 / 晓灰、陆冠融' },
  event: { name: '首届 OceanBase AI 黑客松', location: '广州 · 阿里广州中心' },
  location: '广州 · 阿里广州中心',
  eventDate: '2025-05-15T16:00:00Z',
  publishedAt: '2026-11-15T09:26:54Z',
  updatedAt: '2026-11-15T09:26:54Z',
  tags: ['MCP', 'OceanBase', '向量检索', '黑客松', '二等奖'],
  coverPath: `${ASSET_BASE_URL}/cover.webp`,
  coverAlt: 'MCP advisor 分享封面：做 AI 时代最懂 MCP 的顾问，演讲人王艺辉、陆冠融。',
  resources: [
    {
      kind: 'pdf',
      label: '下载 PDF',
      url: `${ASSET_BASE_URL}/deck.pdf`,
      fileName: 'mcp-advisor-oceanbase-hackathon-v1.pdf',
      mediaType: 'application/pdf',
    },
    {
      kind: 'pptx',
      label: '下载 PPTX（含演示视频）',
      url: `${ASSET_BASE_URL}/source.pptx`,
      fileName: 'mcp-advisor-oceanbase-hackathon-v1.pptx',
      mediaType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    },
    {
      kind: 'transcript',
      label: '下载逐页文字',
      url: `${ASSET_BASE_URL}/transcript.md`,
      fileName: 'mcp-advisor-oceanbase-hackathon-v1-transcript.md',
      mediaType: 'text/markdown; charset=utf-8',
    },
  ],
  deck: {
    kind: 'deck',
    version: 'v1',
    baseUrl: ASSET_BASE_URL,
    slideCount: 12,
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
        title: '做 AI 时代最懂 MCP 的顾问',
        description: '封面列出 MCP advisor 名称、主题及两位演讲人：王艺辉（蚂蚁集团）、陆冠融（比亚迪）。',
        transcript:
          'MCP Advisor：做 AI 时代最懂 MCP 的顾问。演讲人王艺辉、陆冠融。本材料按原 PPT 的 12 页顺序整理，文字为页面内容整理，不是现场逐字稿。',
      },
      {
        number: 2,
        title: '目录：产品、技术与成果',
        description: '目录包含三个章节：MCP Advisor 是什么、技术方案与实现、成果展示与未来规划。',
        transcript:
          '首先介绍根据意图为 Agent 规划并安装合适 MCP 服务器的产品目标；其次介绍多 Provider 结果融合的技术方案；最后回顾分享当时的发布成果与未来规划。下载量等数据均为 2025 年分享时的描述。',
      },
      {
        number: 3,
        title: 'MCP Advisor 是什么？',
        description: '第一章过渡页，提出 MCP Advisor 是智能体的 MCP 服务顾问。',
        transcript: 'MCP Advisor 是智能体的 MCP 服务顾问，帮助 Agent 找到适合当前任务的 MCP 服务。',
      },
      {
        number: 4,
        title: 'MCP Advisor：MCP 好顾问',
        description: '页面围绕智能路由、服务发现与降低复杂度三个方面，说明从理解 MCP 生态到匹配、安装服务的目标。',
        transcript:
          'MCP 被比喻为 AI 与世界之间的 USB-C 接口。MCP Advisor 帮助 LLM 发现并理解可用服务，减轻认知负担；按任务匹配 MCP 服务器，简化与外部工具的集成，服务于 Agent 动态规划、适配运行环境与任务的需求。这是当时分享的产品定位。',
      },
      {
        number: 5,
        title: '视频展示：推荐与安装 MCP',
        description:
          '视频演示页配有三个要点：按意图推荐多个 MCP 并展示相似程度，Agent 选择服务安装，处理安装前置依赖。在线 deck 为静态画面。',
        transcript:
          '演示流程为：根据意图推荐多个 MCP 并指出相似程度，Agent 选择合适的 MCP 安装，再处理安装的前置依赖。演示视频包含在可下载的 PPTX 中，请使用支持视频的演示软件播放；在线图片与 PDF 不播放视频。这里概述原页标注的演示流程，不将其扩写为已核实的逐帧操作。',
      },
      {
        number: 6,
        title: '技术方案与实现',
        description: '第二章过渡页，突出使用 OceanBase 向量数据库引擎提供高效向量相似度搜索。',
        transcript: '技术方案以 OceanBase 向量数据库引擎为基础，利用向量相似度搜索支持 MCP 服务推荐。',
      },
      {
        number: 7,
        title: '系统组件架构',
        description:
          '架构分为 MCP 连接层、统一搜索服务层、向量引擎与 DB 层：连接层接收请求，搜索层融合多 Provider 结果，向量与数据库层提供检索和数据更新能力。',
        transcript:
          'MCP 连接层处理查询请求，支持 STDIO、SSE、REST API，连接本地、API 与企业内部数据源。统一搜索服务层融合 OceanBase、Meilisearch、API 和内存引擎的搜索结果。向量引擎与 DB 层基于 TensorFlow 与 OceanBase HNSW 高维向量索引，支持分布式定时数据更新和内存兜底。以上为 2025 年 PPT 的架构描述，不等同于当前仓库的功能清单。',
      },
      {
        number: 8,
        title: '数据流程：意图处理与混合搜索',
        description:
          '流程由意图处理进入多个 Provider 并发召回，再通过标量过滤与 HNSW 向量查询检索，最终按不同来源权重融合推荐结果。',
        transcript:
          '先提取意图关键词，用 TensorFlow.js 将意图向量化；多个 Provider 并发搜索，包括内存向量数据库、公网 API、OceanBase 与 Meilisearch；检索结合标量过滤和 HNSW 向量相似度查询；最后调整不同来源权重，加权融合推荐结果。Provider 可继续扩展。',
      },
      {
        number: 9,
        title: '成果展示与未来规划',
        description: '第三章过渡页，回顾发布两周时的进展，以及在 OceanBase 开发者大会介绍项目的经历。',
        transcript:
          '原稿回顾服务正式发布两周后的成果：在 OceanBase 开发者大会介绍项目，并获得海外同行关注。以下成果与规划均保留分享时的历史语境。',
      },
      {
        number: 10,
        title: '成果展示',
        description:
          '页面介绍 glama 下载量、mcp.so 首页展示与托管、海外同行交流，以及广州 OceanBase 开发者大会介绍经历。',
        transcript:
          '原页记载：发布两周，仅 glama 平台已有 80 多次下载；项目在 mcp.so 首页展示并提供云端托管；有意大利公司 CEO 留言交流；作者出席广州 OceanBase 开发者大会介绍项目。这些是原稿中的历史描述，不作为当前下载量或第三方服务可用性的承诺。',
      },
      {
        number: 11,
        title: '未来规划：四个阶段',
        description:
          '四阶段规划涵盖 Intelligence Layer、Learning Systems、Advanced Features、Ecosystem Expansion，时间范围从 2025 年第二季度延续至 2026 年第四季度。',
        transcript:
          '原稿规划：第一阶段（2025 Q2—Q3）收集反馈、分析 Agent 与 MCP 交互、深入使用数据库改善推荐；第二阶段（2025 Q4—2026 Q1）预训练 MCP 选择信息、建设强化学习框架；第三阶段（2026 Q1—Q2）探索任务分解、动态规划、自适应 MCP 配置；第四阶段（2026 Q3—Q4）提供开发者 SDK API、定制 MCP 培训工具、企业集成框架。以上是当时规划，不代表这些能力已经交付。',
      },
      {
        number: 12,
        title: '谢谢与活动资料',
        description: '原稿以 Thank you! 结束。下方文字补充赛事、获奖和地点的公开资料来源。',
        transcript:
          '谢谢！补充资料（非原页文字）：MCPAdvisor 获首届 OceanBase AI 黑客松二等奖。决赛为 2025 年 5 月 16 日、广州阿里广州中心；次日开发者大会在广州四季酒店举行并展示获奖作品。当前公开整理稿不宣称为现场播放原件。\n\n获奖报道：https://www.modb.pro/db/1924452526657646592\n决赛预告：https://www.10100.com/article/40289415\n评委现场回顾：https://www.modb.pro/db/1924291049095180288\n开发者大会官方公告：https://ask.oceanbase.com/t/topic/35623644',
      },
    ],
  },
} satisfies Share;
