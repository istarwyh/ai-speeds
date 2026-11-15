---
name: ccf-tf179-share-and-article-technical-plan
status: implemented-draft
created: 2026-11-15
updated: 2026-11-15T09:35:00Z
---

# CCF TF 179 分享：v1 演示材料与配套文章接入方案

## 1. 目标与范围

在 AI Speeds 的 Public Shares 中新增一场 CCF 分享，将用户指定的 v1
PPT 与已发布的配套文章关联为同一个分享条目。访客可以在线翻阅演示、下载材料、打开原文；Agent 可以直接读取完整文章 Markdown 和逐页文字，无需解析 PPT 图片。

本方案只规划接入，不代表已经完成内容核对、资源上传或生产部署。不修改现有 AI
Maker 上海分享，不把 CCF 材料合并进上海分享条目。

首期交付：

- 独立 CCF 分享详情、36 页在线 deck、PDF、公开 PPTX。
- 详情页明确关联 xiaohui.cool 配套文章。
- 可下载的完整文章 Markdown，以及与 v1 实际页码一致的逐页 Markdown。
- 内容来源、版本和发布日期可追溯；沿用现有作者归属体系。

## 2. 已核实的输入

### 2.1 活动与正文

本地演讲稿和 journey 记录明确指向：2026 年 6 月 25 日，CCF
TF 第 179 期「智能体加速金融创新」。主题为保险快查 Agent Native 实践。

配套原文（已在线打开核实标题及章节）：

[构建 Agent Native Product：保险快查离线与在线实践演讲稿](https://xiaohui.cool/show/构建-Agent-Native-Product：保险快查离线与在线实践演讲稿)

文章页面标注 2026 年 6 月 21 日；本地 frontmatter 的 modified 为 2026-07-13。文章不是「AI
Maker 上海 45 分钟版」。活动地点尚未核实，不从上海分享复制。

### 2.2 权威 PPT

用户已明确指定使用：

```text
/Users/mac/Desktop/code-open/quartz/content/slide-deck/agent-native-insurance-balanced/保险快查 Agent Native 实践-王艺辉-v1.pptx
```

本地只读检查结果：

| 项目         | 结果                         |
| ------------ | ---------------------------- |
| 物理页数     | 36                           |
| 图片数       | 40                           |
| 可提取文字   | 0 words / 0 text boxes       |
| 文件修改时间 | 2026-08-30 23:16（本机时间） |

这是一份以图片承载内容的 PPT。命名和修改时间不证明它与现场播放文件完全相同，对外称「CCF 分享材料公开整理版」，不宣称现场原件。

### 2.3 文字材料与保留价值

| 本地材料（相对 quartz/content）                                   | 处理                                                       |
| ----------------------------------------------------------------- | ---------------------------------------------------------- |
| `show/构建 Agent Native Product：保险快查离线与在线实践演讲稿.md` | 217 行完整叙述，作为完整文章快照的来源；保留章节和延伸阅读 |
| `slide-deck/agent-native-insurance-balanced/outline.md`           | 466 行、30 页底稿，保留要点和图示关系，作为逐页核对参考    |
| `slide-deck/agent-native-insurance-balanced/prompts/*.md`         | 制图归档，内容与 outline 高度重复，不整体放入消费材料      |
| `analysis.md`                                                     | 受众与风格简述，可供编写摘要参考                           |
| `source-agent-native-insurance-balanced.md`                       | 仅 3 行风格说明，不作为正文源                              |
| `batch-*.txt`、`logs/`、生成脚本                                  | 制作归档，不作为正文发布                                   |

30 页大纲不能直接映射成 v1 的 36 页讲稿。原目录的 balanced
PDF 也不是已核实的 v1 导出，必须从指定 PPT 重新生成。

## 3. 现有实现与差距

现有页面和内容边界可复用：

- `src/app/(site)/shares/**`：目录和详情。
- `src/app/(immersive)/shares/[slug]/deck/**`：沉浸式演示。
- `src/content/shares/types.ts`、`registry.ts`：内容契约、注册与资源 URL。
- `src/content/shares/provenance.ts`：原创、自有材料、作者与演讲者归属。
- `src/components/features/shares/ShareDetail.tsx`、`ShareTranscript.tsx`：资源下载与服务端渲染逐页正文。
- `src/components/home/PublicWorkSection.tsx` 和 `src/app/sitemap.ts`
  已从公开注册表派生列表。

需要补齐：

1. `ShareResourceKind`
   只支持 PDF、PPTX、transcript，没有外部文章关联字段和完整文章下载类型。
2. 所有托管资源 URL 都限制在
   `assets.aispeeds.me/shares/`，不能把 xiaohui.cool 原文硬塞进 resources，也不能因此放宽现有资源域名约束。
3. prepare、publish 仍绑定首场分享，需要改为按分享和版本生成、上传资源；原有独立校验流程及发布前校验调用一并移除。
4. 目前没有已经核对过的 v1 逐页文字，图片 OCR 和人工核对是内容准备的必要工作。
5. `event.location` 与 `location`
   当前要求非空且相同，活动地点未知时不能直接填入虚构地点。

## 4. 信息架构与页面行为

建议使用独立标识 `agent-native-product-ccf-tf179`：

```text
https://aispeeds.me/shares/agent-native-product-ccf-tf179
https://aispeeds.me/shares/agent-native-product-ccf-tf179/deck
```

建议标题「保险快查 Agent Native 实践」，副标题「CCF
TF 第 179 期 · 智能体加速金融创新」。最终文字以 v1 封面和活动记录核对为准。

详情页在演示按钮附近增加「阅读配套文章」，链接原文，并在资料区说明三种文字资料的区别：

- 阅读原文：跳转 xiaohui.cool，提供完整叙述与延伸阅读。
- 下载文章 Markdown：公开发布时冻结的完整文章快照，适合 Agent 读取。
- 下载逐页文字：按 v1 的 36 页组织，包含标题、要点、图示关系及有依据的讲解。

三者直接以正常 HTML
anchor 暴露，服务端渲染可见，不依赖点击后 API 才返回链接。延用现有 320
px 移动布局、键盘操作和 deck 导航；不新增独立文章镜像页面。

## 5. 内容模型调整

### 5.1 外部关联与下载分开

建议给 Share 增加可选 `relatedArticles`，条目包括
`title`、`url`、`description`，首期仅配置这一篇。直接配置原文 HTTPS
URL，组件以外链方式呈现。字段未提供时上海分享保持原状。

给 `ShareResourceKind` 增加 `article`，mediaType 复用
`text/markdown; charset=utf-8`。对应资源命名为
`article.md`，继续受资产域名约束。更新文字文件图标。

文章资源直接由 resources 中的 `kind: 'article'`
表达；不强行扩展 deck.paths 的必填字段，旧 deck 不需要新增文件。生成流程从实际资源集合输出文件，下载 URL 使用当前媒体版本前缀。

### 5.2 日期与署名

- `eventDate`
  表示 2026-06-25。当前模型是 UTC 时间串，实施时明确日历日期与显示时区的转换，不把活动日期当在线发布日期。
- `publishedAt`、`updatedAt`
  在真正上线时写入实际 UTC 时间，文档日期不能充当已上线时间。
- `provenance.ts` 配置 `origin: 'original'`、`rightsMode: 'owned'`、贡献者
  `xiaohui`、角色 `author` / `speaker`。
- 配套文章属于关联阅读，不把整个 Share 的 canonical 改到博客文章。详情 canonical 保持 aispeeds.me，deck 保持 noindex 并指回详情。
- 活动地点先从可靠记录核实；若仍未知，将两个 location 字段改为可选并更新 UI，不用「待补充」冒充地点。

## 6. Agent 可消费文字的制作

### 6.1 完整文章快照

构建阶段从本地文章生成并审核
`article.md`，不在用户请求期间抓取博客。包含来源 URL、原标题、抓取/冻结时间与关联分享标识；不把本机绝对路径写入公开文件。

将 Obsidian 的双链、别名和 callout 转成通用 Markdown。每个延伸阅读先解析到真实站内文章路径，再生成 xiaohui.cool 绝对 URL；无法解析的链接保留为文字并在内部审核记录里列出，不猜 URL。完整文章保持语义与章节，不改成 PPT 摘要。

博客后续修改不会静默改变已经封存的快照；需要更新时生成新的媒体版本。

### 6.2 v1 逐页文字

1. 从指定源生成 36 页预览，记录实际页序、页面尺寸和图片内容；先确认可沿用现有 16:9 要求，若不符则调整渲染策略，避免裁切。
2. 对每页做 OCR
   / 视觉读取，再与 outline、文章核对；以 v1 实际页面为图文对应依据。
3. 每页整理
   `number`、`title`、`description`、`transcript`。description 覆盖图中节点、箭头方向、分支、条件和关键标签，不能只写「架构图」。
4. 将图中原文与文章补充解释区分开；补充解释不能伪称现场逐字稿。没有依据的内容不补写，页面事实与文章存在冲突时进入审核清单。
5. 输出内部 36 页核对表，标注旧大纲页码或「新增/调整」、文章对应章节、OCR 易错点和审核状态。只在对应关系核实后建立章节跳转，首期不强制文章段落与页码一一匹配。
6. 同一份审核后的 slides 数据驱动详情页正文、在线页码关联和
   `transcript.md`，避免三处重复维护。

先完成内容可读性，再考虑知识图谱、向量索引等后续能力；首期不引入额外检索服务。

## 7. 素材生成与发布简化

按分享和版本生成、上传资源，不引入额外 release 校验配置。

- prepare：支持选择 slug 和媒体版本，保留
  `--source`、`--registry`、`--output`，可以读取 draft 条目；文章通过本地输入生成
  `article.md`。
- publish：上传所选输出目录中的资源，完成后再发布引用它们的应用。
- 去掉原有分享流程中的源文件摘要、产物摘要、固定对象数、逐对象比对、远端抽检及独立校验步骤，同时移除 prepare、publish 对这些步骤的调用。
- `manifest.json` 如继续保留，仅作为文件列表，不承担校验或发布门禁。
- 上海分享与 CCF 使用各自的源文件、页数和输出目录，旧命令默认目标仍为上海分享。

建议媒体前缀：

```text
https://assets.aispeeds.me/shares/agent-native-product-ccf-tf179/v1/
  cover.webp
  slides/001.webp ... 036.webp
  thumbnails/001.webp ... 036.webp
  deck.pdf
  source.pptx
  transcript.md
  article.md
  manifest.json
```

这里的媒体 `v1`
与用户源文件命名是两个版本概念，首次发布选择该目录不代表上传未经处理的源文件。若目录已封存则选新版本，绝不覆盖。

PDF 和图像从本次 v1
PPT 生成，PPTX 沿用移除私人备注与元数据的清理处理，去掉其中的摘要比对及独立校验调用。图片中的隐私仍需在内容整理时处理。

## 8. 实施拆分与涉及文件

| 阶段       | 主要文件/产物                                                                                    | 完成条件                                       |
| ---------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| 内容核对   | v1 预览、36 页核对表、文章快照                                                                   | 页序、图示关系和文章来源核实，未混入上海版本   |
| 模型和内容 | `types.ts`、`registry.ts`、新增 `agent-native-product-ccf-tf179.ts`、`index.ts`、`provenance.ts` | draft 可配置，文章链接与下载资源分开表达       |
| 展示       | `ShareDetail.tsx`、必要的 `ShareTranscript.tsx` 文案、`src/config/ui-texts.ts`                   | 原文与两类 Markdown 可发现，旧分享无回归       |
| 发布工具   | prepare、publish 脚本及旧校验入口清理                                                            | 按所选分享生成、上传，不依赖固定计数或校验门禁 |
| 资源准备   | `dist/shares/<slug>/<version>`                                                                   | 生成演示图片、PDF、公开 PPTX 和两类 Markdown   |
| 上线       | 远端不可变资源、public 注册项、应用部署                                                          | 媒体先上传，再发布引用它的应用                 |

首页列表和 sitemap 已从 registry 派生，先确认自动出现；仅在实际有静态清单遗漏时补充，不复制一份新的分享列表。

## 9. 发布顺序

1. 从指定 PPT 生成演示图片、PDF 和公开 PPTX，整理逐页文字与文章 Markdown。
2. 上传当前分享版本的资源，不设置本地或远端校验门禁。
3. 将 Share 切为 public，填写实际发布时间，发布引用这些资源的应用。

本阶段只提交技术方案。后续实施时才执行生成、上传和部署，不因本文中的步骤自动启动生产发布。

## 10. 回滚与待核对项

应用回归时回滚应用版本；媒体或文字内容错误则发布新资产版本并切换引用，不覆盖旧前缀。原文链接和下载快照是独立入口，博客暂时不可用时已发布文字材料仍可读取。

实施前尚需核对：活动地点、v1 页面实际尺寸、36 页顺序及与文章内容的差异、公开内容与署名。以上均可通过现有材料和可靠活动记录继续调查；在未知信息不影响其他工作的情况下，先完成内容和工具调整。

## 11. 参考

- [既有 Public Shares 发布方案](../202609/SHARES_PRESENTATION_PLATFORM_TECHNICAL_PLAN.md)
- [当前源码架构](../../SRC_ARCHITECTURE.md)
- [配套文章原文](https://xiaohui.cool/show/构建-Agent-Native-Product：保险快查离线与在线实践演讲稿)
- [CCF 活动回顾（演讲稿所引用）](https://mp.weixin.qq.com/s/hrxFK6xPFgREx4mUOX7msg)
