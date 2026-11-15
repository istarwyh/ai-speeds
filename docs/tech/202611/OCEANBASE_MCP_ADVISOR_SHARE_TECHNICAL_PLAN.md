---
name: oceanbase-mcp-advisor-share-technical-plan
status: complete
created: 2026-11-15T09:23:26Z
updated: 2026-11-15T10:28:13Z
---

# OceanBase AI 黑客松：MCP Advisor 分享接入方案

## 1. 目标

在 aispeeds.me 的 Public
Shares 中新增独立分享，提供 12 页在线演示、PDF、公开 PPTX 和逐页 Markdown。复用现有目录、详情页与沉浸式 deck，不与 CCF 或上海分享合并。

建议 slug：`mcp-advisor-oceanbase-hackathon`；标题「MCP
Advisor：做 AI 时代最懂 MCP 的顾问」，活动名称「OceanBase AI 黑客松」。入口为
`/shares/mcp-advisor-oceanbase-hackathon`，在线演示为该路径下的 `/deck`。

本文记录接入方案与实施结果；应用生产部署状态单独记录，不将素材上传视为整站已上线。

## 2. 已核实的源材料

用户指定文件：微信 `2025-05` 文件目录中的
`mcpadvisor-晓灰-0518演示.pptx`。执行时通过 `--source`
显式传入本地路径，不复制另一份 OceanBase
PPT，也不将微信目录或原始大文件提交到仓库。

| 项目               | 只读检查结果                                               |
| ------------------ | ---------------------------------------------------------- |
| 文件大小与修改时间 | 36.72 MB；2025-05-18 16:52（本机时间）                     |
| 页面               | 12 页，12192000 × 6858000 EMU，16:9，可沿用现有播放器比例  |
| 内容               | 可提取文字；包含介绍、技术架构、数据流程、成果、规划       |
| 封面署名           | 王艺辉（蚂蚁集团）、陆冠融（比亚迪）                       |
| 视频               | 第 5 页引用内嵌 `media1.mp4`，约 30.31 MiB                 |
| 字体               | 主要使用阿里巴巴普惠体，转换时需留意替代字体导致的换行变化 |

### 活动、获奖与日期地点（已联网核实）

| 环节                     | 日期（北京时间）               | 地点                      | 依据                                                                                  |
| ------------------------ | ------------------------------ | ------------------------- | ------------------------------------------------------------------------------------- |
| 黑客松八强线下决赛、答辩 | 2025-05-16                     | 广州 · 阿里广州中心会议室 | OceanBase 决赛预告明确 5 月 16 日在广州答辩；评委白鳝的现场回顾进一步明确会场         |
| 开发者大会、获奖作品展示 | 2025-05-17                     | 广州 · 四季酒店           | OceanBase 官方社区大会公告明确日期、酒店，并说明现场揭晓黑客松获奖作品                |
| MCPAdvisor 获奖          | 首届 OceanBase AI 黑客松二等奖 | —                         | OceanBase 数据库账号 5 月 19 日收官报道明确点名 mcpadvisor 团队，来自蚂蚁胜信与比亚迪 |

来源：

- [OceanBase 决赛预告（转载，署名 OceanBase）](https://www.10100.com/article/40289415)：5 月 16 日广州线下终极答辩，另在开发者大会展示获奖作品。
- [评委现场回顾：首届黑客松大赛掠影](https://www.modb.pro/db/1924291049095180288)：明确 5 月 16 日决赛及阿里广州中心会场，并介绍 MCPADVISOR 获第二名。该文后段将大会日期也写为 5 月 16 日，与官方大会公告冲突，故不采纳其大会日期。
- [OceanBase 官方社区大会公告](https://ask.oceanbase.com/t/topic/35623644)：2025 年 5 月 17 日、广州四季酒店。
- [OceanBase 数据库账号收官报道](https://www.modb.pro/db/1924452526657646592)：确认 mcpadvisor 二等奖；开头以 5 月 17 日描述收官，不将收官日期等同于前一天的决赛日期。

**本条目的填写口径：**按用户指定的「黑客松分享」定位，`event.name`
使用「首届 OceanBase AI 黑客松」，`eventDate` 表示 2025-05-16，`location` 与
`event.location`
均使用「广州 · 阿里广州中心」。详情补充「MCPAdvisor 获二等奖；获奖作品于次日开发者大会展示」并保留上述来源。日期展示固定按 Asia/Shanghai 处理；UTC 字段可用
`2025-05-15T16:00:00Z` 表示当地日历日零点，不代表已知答辩开始时刻。

文件名中的 0518 和修改时间不作为活动日期证据。公开记录能够确认赛事及大会两个环节，但不能证明当前这份 5 月 18 日修改的 PPT 就是任一现场播放的原件，对外称「黑客松项目分享材料公开整理版」。

## 3. 复用边界与最小改动

当前工作区已有未提交的 CCF 通用改动，应在其基础上衔接，保留现有工作：

- `types.ts` 已支持文章资源、关联文章和可选地点；本分享暂未确认配套文章，不配置
  `article.md` 或虚构文章链接。
- `prepare-share-assets.mjs` 已支持
  `--slug`、`--media-version`、`--source`，直接复用。当前 PPT 含可编辑文字与视频，应走 LibreOffice 渲染，不使用针对图片型 PPT 的快速路径。
- `publish-share-assets.mjs`
  仍有上海分享的固定对象数和抽检页码，不能直接用于本分享；按 CCF 方案统一改为上传指定分享版本目录，移除固定计数、摘要比对及独立资产校验调用，不另写一套 OceanBase 上传器。
- 首页、分享目录和 sitemap 沿用公开 registry 派生，无需新增路由或重复维护列表。

主要新增 `src/content/shares/mcp-advisor-oceanbase-hackathon.ts`，在 `index.ts`
注册，并补充 `provenance.ts`
归属。归属按联名材料处理，保留封面两位演讲者；依据现有贡献者模型补充陆冠融记录，不将整份材料标为王艺辉独著。公开版保留必要的第三方来源署名。

## 4. 内容与视频处理

逐页整理
`number`、`title`、`description`、`transcript`，同一份 slides 数据驱动详情页正文及
`transcript.md`。直接提取可编辑文字，结合实际渲染图补充架构箭头、数据流和截图信息；图片内文字按需识别，不必对全稿做 OCR。

提取结果中的长十六进制串等异常文本先核对其实际可见性，不直接作为正文发布。成果数据和未来规划明确标注为「2025 年分享时的描述」，不当作当前产品状态；整理文字不称为现场逐字稿。

**首期视频处理：**在线 deck 使用第 5 页静态画面，详情页和该页文字明确提示「演示视频包含在 PPTX 中，下载后使用支持视频的演示软件播放」。公开 PPTX 保留内嵌视频，清理备注、私人元数据和失效本机链接时不得误删媒体关系。PDF 不承诺播放视频。

这样首期无需扩展播放器或资源类型。独立在线视频播放作为后续增强，再增加 MP4 托管和页面播放入口；不把 PPT 静态导出宣称为已支持视频。

## 5. 资源与发布

建议媒体目录：`https://assets.aispeeds.me/shares/mcp-advisor-oceanbase-hackathon/v1/`。

产物包括 `cover.webp`、`slides/001.webp` 至
`012.webp`、对应缩略图、`deck.pdf`、`source.pptx`、`transcript.md`；`manifest.json`
如保留，仅作为文件列表。PDF 与图片均从本次指定文件生成，公开 PPTX 从其副本清理生成。

先以 draft 整理内容并生成本地资源，检查字体、图文页序、视频页提示及公开 PPTX 的媒体保留情况；然后上传独立版本资源，切换 public，填写实际 UTC 发布时间并发布应用。原始活动日期与在线发布日期分开记录，资源版本不覆盖已发布前缀。

## 6. 实施顺序与验收

1. 整理 12 页文字、联名署名和封面，按已核实的决赛日期、地点与二等奖信息填写，保留来源及次日大会展示说明。
2. 新增分享内容注册，衔接 CCF 的通用 prepare/publish 调整；不覆盖其他分享的未提交改动。
3. 生成素材，逐页对照源稿，特别核对第 5 页与第 7—8 页架构、数据流。
4. 按仓库要求执行类型和架构检查，查看详情页、deck 在手机宽度下的显示与键盘翻页；发布后确认下载链接、首页、目录与 sitemap。

完成标准：独立分享可发现，12 页图文对应，三类下载可用，联名署名完整，视频播放限制明确，旧分享保持正常。应用问题回滚应用；素材问题发布新媒体版本并更新引用。

参考：[CCF 分享接入方案](./CCF_TF179_SHARE_AND_ARTICLE_TECHNICAL_PLAN.md)、[源码架构](../../SRC_ARCHITECTURE.md)。

## 7. 实施记录

已新增 12 页内容注册、联合署名、活动日期（固定 Asia/Shanghai 展示）及逐页文字。第 7—8 页文字覆盖架构分支、Provider 与时序图中的结果处理步骤；活动与获奖来源保留在第 12 页整理文字中。

原稿直接经 LibreOffice 导出时，封面的自动尺寸文本框发生换行与重叠，部分字体别名也不能正确解析。已增加
`scripts/prepare-oceanbase-render-copy.py`：仅为渲染副本使用本机 PingFang
SC，扩宽封面的四个文字框，并为其余无换行自动尺寸框增加宽度；不改原文件，也不替换公开下载 PPTX 的幻灯片和视频。PDF/图片因此属于经过字体与排版兼容处理的公开整理版。

`prepare-share-assets.mjs` 增加可选 `--render-source`。下载文件仍由 `--source`
清理生成；渲染副本也先清理备注和元数据，再用于图片与 PDF。未传该选项的既有分享维持原流程。清理器仅补充标准 MP4、handout
master、缩略图支持，并去掉固定为上海分享的元数据标题。

本地重建方式（`SOURCE_PPTX`
由执行者指向用户指定原稿；渲染副本必须使用新的输出路径）：

```bash
python3 scripts/prepare-oceanbase-render-copy.py \
  --input "$SOURCE_PPTX" --output /tmp/oceanbase-render-copy.pptx
node --experimental-strip-types scripts/prepare-share-assets.mjs \
  --slug mcp-advisor-oceanbase-hackathon --media-version v1 \
  --source "$SOURCE_PPTX" --render-source /tmp/oceanbase-render-copy.pptx \
  --renderer libreoffice
```

产物位于
`dist/shares/mcp-advisor-oceanbase-hackathon/v1/`，共 29 个文件。下载 PPTX 保留原稿全部幻灯片 XML 和同一份 MP4，移除备注及私人属性；PDF 与图像均为 12 页。不要将此目录或 PPTX 大文件加入 Git。

已执行类型、架构、相关文件 ESLint 和产物检查；图片经过逐页联系表及重点页面目视核对。发布素材使用本机已登录 Wrangler 的
`r2 object put --remote`，目标桶
`assets-aispeeds-me`，沿用各文件 MIME 类型及不可变缓存。原因是当前未配置发布脚本需要的 R2
S3 环境变量，而本机 OAuth 已能访问同一资产桶；通用发布脚本保持原状。

工作区同时包含 CCF 内容及通用流程调整，整站部署会包含这些改动，部署前需明确合并发布范围。

当前结果：29 个文件已上传，封面、PDF、PPTX、逐页 Markdown、manifest 的公开 URL 返回 200；生产 Next.js 构建通过。浏览器已检查 320px 布局无横向溢出、日期为 2025 年 5 月 16 日、首图加载、右方向键到第 2 页、End 到第 12 页、deck
noindex 与详情 canonical；首页、目录、sitemap 均包含新条目，上海及 CCF 详情仍可访问。此时应用尚未部署到生产；后续联合发布结果见下一节。

## 8. OceanBase 与 CCF 联合上线

用户明确选择两场分享一起部署。生产上线于 `2026-11-15T10:19:15.327Z`
完成，验收记录时间为 `2026-11-15T10:20:33Z`。

- 源码基于 `024d10f`；部署前只有本文及未跟踪的本地指导文件，未改动其他应用源码。
- OceanBase 29 个文件已发布；另补齐 CCF
  v1 的 78 个文件，包含 36 页演示及完整文章 Markdown。
- 标准 `cf:deploy` 构建被 OpenNext 的 Next.js
  15 生命周期检查拦截，未写生产。此次沿用项目现有 Next.js 15.5.15，以
  `opennextjs-cloudflare build --dangerouslyUseUnsupportedNextVersion`
  显式兼容构建，再执行
  `opennextjs-cloudflare deploy`；未持久关闭版本检查，后续标准构建仍需升级受支持版本或明确选择兼容选项。
- 已核对 Cloudflare 账号 `9e62157e1ca3cd2d84c5bd7b39c17c28` 属于
  `aispeeds.me`。发布前该账号下不存在 `aispeeds`
  Worker 及对应域名关联，因此本次按仓库配置创建 Worker，并绑定
  `aispeeds.me`、`cc.xiaohui.cool`；未修改其他 Worker。
- 当前生产版本为 `143e7779-58eb-467c-abaa-a91bfaf97324`，Cloudflare
  deployment 读回确认承载 100% 流量。
- 正式站首页、分享目录和 sitemap 均返回 200，包含两场分享。两场详情及 deck 可访问，手机 320px 无横向溢出，封面与第二页图片加载成功，键盘翻页正常，canonical 与 deck
  noindex 正确。
- OceanBase 的 PDF/PPTX/逐页 Markdown，以及 CCF 的 PDF/PPTX/逐页 Markdown/文章 Markdown 均返回 200 且 MIME 类型正确；既有上海分享返回 200。

正式入口：

- [OceanBase MCPAdvisor 分享](https://aispeeds.me/shares/mcp-advisor-oceanbase-hackathon)
- [CCF TF 179 分享](https://aispeeds.me/shares/agent-native-product-ccf-tf179)

## 9. PR 评审修正

发布器只接收分享 slug 和媒体版本，输入目录固定由目标派生为
`dist/shares/<slug>/<version>`，取消可独立指向其他分享的
`--staging`。遇到已有对象直接失败并要求新媒体版本，不再将 412 当作可续传成功；不恢复摘要比对或 manifest 发布门禁。图片型渲染器在正确的
`p:blipFill/a:srcRect` 节点检查裁切并拒绝不支持的裁切图片。

CI 的 Cloudflare 构建失败已从日志核实为既有 Next.js
15 生命周期检查；主分支的版本、锁文件和构建命令相同，本 PR 不升级框架或持久跳过检查。
