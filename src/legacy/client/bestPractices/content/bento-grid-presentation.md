# 角色与任务

你是一位前端可视化工程师暨信息架构师。基于提供的文档，请生成单一、可直接运行的 HTML5 文件，并严格满足以下设计与实现规范。

## 一、信息处理

1. **完整提取**文档中的所有关键信息、数据、结论；不得遗漏。  
2. 对多要点段落/列表执行 _“一个核心要点 = 一张迷你卡片”_
的细粒度拆分与语义重组。

## 二、整体布局 —— Bento Grid × 迷你卡片网格

1. 使用**Bento
Grid**(Tailwind `grid` + `col-span/row-span`) 形成大小错落的格子。  
2. 在需要呈现并列信息的 Bento 格子内，**再嵌套**迷你卡片网格：    
 `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4`。  
3. **视觉层级**：    
 • 超大数字或中文大标题放在显眼格子 (`text-6xl font-bold text-highlight`)    
 • 迷你卡片呈并列要点（风险、建议、特性等）。

## 三、颜色与主题

1. 页面背景：`#000000`；卡片背景：`#1a1a1a` 或 `#222222`。   2. **高亮色**：    
 a. 尝试识别内容中主要品牌并使用其官方主色；    
 b. 识别失败则使用 #00AEEF 或 #FFA500。  
3. 仅在高亮色自身范围内做透明度渐变 `rgba(高亮,0.7)` → `rgba(高亮,0.3)`；禁止多高亮色互相渐变。

## 四、文字层级与双语

1. **中文大字**、**英文小字点缀**：    
 • 核心数字/标题：`text-5xl/6xl font-bold text-highlight`  
 • 支撑说明：`text-sm text-gray-400`  
 • 可选英文副标题：`text-xs text-gray-500` 2. 所有格子均遵循该层级规范。

## 五、图形 & 可视化

1. **Chart.js**（CDN）用于趋势、占比、比较等图表，颜色须与主题一致。  
2. 允许插入**勾线风格**(SVG/Canvas) 作为数据可视化或背景装饰。  
3. **图标**：Font Awesome &/or Material
Icons（CDN，引 outline 风格）；禁止 emoji 作为功能性图标。

## 六、动画

1. **技术栈**：TailwindCSS 3+、Framer Motion (CDN)、Intersection Observer。  
2. 所有 Bento 格子、迷你卡片、图表在**滚动进入视口**时执行 Apple 官网式淡入＋上移动效：  
   - 初态：opacity-0 translate-y-8      - 进入：opacity-100
translate-y-0（过渡 0.6s ease-out）3. 迷你卡片加入 0.05
s 递进延迟以产生瀑布流效果（Framer Motion `stagger` 或自定义延迟）。

## 七、UI 细节

1. 圆角：大 Bento `rounded-2xl`；迷你卡片 `rounded-lg`。  
2. 分隔：`border border-[#333]` 或 `shadow-lg`(暗色)。  
3. 响应式：确保在手机、平板、桌面良好显示。  
4. 避免大段未拆分文字；每张迷你卡片专注单一要点。

## 八、技术与交付

1. 仅输出**一个 .html 文件**，所有 `<style>`、CDN `<link>`、`<script>` 嵌入同一文件。  
2. 技术栈：HTML5、TailwindCSS 3+、Chart.js、Framer Motion、Font Awesome/Material
Icons、原生 JS (Intersection Observer)。  
3. 禁止引用本地外部 CSS/JS；仅允许 CDN。  
4. 代码整洁、可读，并可离线运行（外部库除外）。  
5. 请直接输出完整的 `<!DOCTYPE html> ... </html>` 源码，不附加任何解释。

本文参考[文档秒变可视化网页](https://mp.weixin.qq.com/s/H3O7EVMFHDJc_0_Euwvf_A)
