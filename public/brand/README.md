# AI Speeds Brand Kit

可在外部网站使用的 AI Speeds 品牌标识资源包。

## 📦 文件说明

### SVG 文件

- `ai-speeds-logo.svg` - 标准方形logo (带渐变)
- `ai-speeds-logo-horizontal.svg` - 横向logo (图标+文字)
- `ai-speeds-icon.svg` - 纯图标 (32px)
- `ai-speeds-monochrome.svg` - 单色版本

### JavaScript Kit

- `brand-kit.js` - 完整的JavaScript品牌库

## 🚀 使用方法

### 方法1: 直接使用SVG文件

```html
<!-- 方形logo -->
<img
  src="https://aispeeds.me/brand/ai-speeds-logo.svg"
  alt="AI Speeds"
  width="200"
/>

<!-- 横向logo -->
<img
  src="https://aispeeds.me/brand/ai-speeds-logo-horizontal.svg"
  alt="AI Speeds"
  width="240"
/>

<!-- 小图标 -->
<img
  src="https://aispeeds.me/brand/ai-speeds-icon.svg"
  alt="AI Speeds"
  width="32"
/>
```

### 方法2: JavaScript Brand Kit (推荐)

```html
<!-- 1. 引入brand-kit.js -->
<script src="https://aispeeds.me/brand/brand-kit.js"></script>

<!-- 2. 在HTML中插入logo -->
<div id="logo-container"></div>

<script>
  // 3. 使用JavaScript插入logo
  AISpeedsBrand.insertLogo('#logo-container', 'square', {
    size: 200,
    link: true,
    linkUrl: 'https://aispeeds.me',
  });

  // 其他样式
  AISpeedsBrand.insertLogo('#small-logo', 'icon', {
    size: 32,
    className: 'my-custom-class',
  });
</script>
```

### 方法3: 内联SVG

```html
<!-- 获取SVG代码 -->
<script src="https://aispeeds.me/brand/brand-kit.js"></script>

<div id="my-logo"></div>

<script>
  document.getElementById('my-logo').innerHTML = AISpeedsBrand.getLogo(
    'square',
    {
      size: 200,
    },
  );
</script>
```

## 🎨 可用样式

### Logo类型

- `square` - 方形logo (默认)
- `horizontal` - 横向logo (图标+文字)
- `icon` - 纯图标
- `monochrome` - 单色版本

### 配置选项

```javascript
{
  size: 200,        // 方形/图标尺寸
  width: 240,       // 横向logo宽度
  height: 60,       // 横向logo高度
  className: '',    // 自定义CSS类
  link: true,       // 是否包装为链接
  linkUrl: 'https://aispeeds.me'  // 链接地址
}
```

## 🎯 使用示例

### 基础使用

```html
<script src="https://aispeeds.me/brand/brand-kit.js"></script>
<div id="brand-logo"></div>

<script>
  AISpeedsBrand.insertLogo('#brand-logo');
</script>
```

### 多种样式

```html
<script src="https://aispeeds.me/brand/brand-kit.js"></script>

<div id="square-logo"></div>
<div id="horizontal-logo"></div>
<div id="icon-logo"></div>

<script>
  AISpeedsBrand.insertLogo('#square-logo', 'square', { size: 120 });
  AISpeedsBrand.insertLogo('#horizontal-logo', 'horizontal', {
    width: 180,
    height: 45,
  });
  AISpeedsBrand.insertLogo('#icon-logo', 'icon', { size: 24 });
</script>
```

### 自定义样式

```html
<script src="https://aispeeds.me/brand/brand-kit.js"></script>

<div id="custom-logo"></div>

<script>
  AISpeedsBrand.insertLogo('#custom-logo', 'monochrome', {
    size: 150,
    className: 'custom-brand',
    link: false, // 不包装为链接
  });
</script>

<style>
  .custom-brand {
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  .custom-brand:hover {
    opacity: 1;
  }
</style>
```

## 🌐 CDN 使用

如果你有CDN，可以这样使用：

```html
<script src="https://cdn.yoursite.com/brand/brand-kit.js"></script>
```

或者直接使用SVG：

```html
<img src="https://cdn.yoursite.com/brand/ai-speeds-logo.svg" alt="AI Speeds" />
```

## 📏 品牌规范

### 最小尺寸

- 图标: 16px
- 方形logo: 32px
- 横向logo: 120px宽度

### 推荐尺寸

- 小图标: 24-32px
- 中等logo: 64-120px
- 大logo: 200px+

### 留白空间

- logo周围保持至少logo高度1/4的留白

### 颜色使用

- 主要使用原色，不要修改
- 单色版本使用 `currentColor`，可继承父元素颜色

## 📄 许可证

AI Speeds 品牌标识遵循 MIT 许可证，可自由使用但请：

1. 不要修改logo设计
2. 保持品牌识别性
3. 链接回 https://aispeeds.me (如可能)

## 🆘 问题反馈

如有问题或建议，请联系：[your-contact@aispeeds.me]
