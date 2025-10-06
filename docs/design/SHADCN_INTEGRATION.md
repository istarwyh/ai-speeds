# Shadcn Tailwind Design System 集成指南

## 📦 项目概述

[shadcn-tailwind-design-system](https://github.com/huluwa1991/shadcn-tailwind-design-system)
是一个基于 shadcn/ui 的完整组件库，包含：

- 50+ 精美组件
- Storybook 文档
- 5 个实用示例（数据看板、设置页面、简历编辑器等）
- 完整的布局系统和表单解决方案

## 🎯 集成策略

### 方案对比

| 方案                   | 优点         | 缺点       | 适用场景             |
| ---------------------- | ------------ | ---------- | -------------------- |
| **Git Submodule**      | 保持同步更新 | 增加复杂度 | 学习参考             |
| **直接复制组件**       | 完全可控     | 需手动更新 | **生产环境（推荐）** |
| **npm 包（如果发布）** | 标准化管理   | 依赖外部   | 稳定版本             |

## 🚀 推荐实施步骤

### 第 1 步：安装核心依赖

```bash
# shadcn/ui 核心依赖
pnpm add @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-dropdown-menu
pnpm add @radix-ui/react-select @radix-ui/react-tabs @radix-ui/react-toast
pnpm add @radix-ui/react-tooltip @radix-ui/react-popover @radix-ui/react-checkbox
pnpm add @radix-ui/react-radio-group @radix-ui/react-switch @radix-ui/react-label

# 工具库
pnpm add class-variance-authority clsx tailwind-merge
pnpm add lucide-react

# 表单处理（可选）
pnpm add react-hook-form zod @hookform/resolvers

# 图表库（可选，用于数据看板）
pnpm add recharts

# 日期选择器（可选）
pnpm add date-fns react-day-picker
```

### 第 2 步：创建工具函数

```bash
# 创建 utils 目录
mkdir -p src/lib/utils
```

创建 `src/lib/utils/cn.ts`：

```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 合并 Tailwind CSS 类名
 * 用于组合多个类名并解决冲突
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 第 3 步：配置 Tailwind CSS

更新 `tailwind.config.ts`，添加 shadcn 需要的配置：

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  // ... 现有配置

  theme: {
    extend: {
      colors: {
        // 保留现有的设计令牌映射
        // ...

        // shadcn/ui 需要的颜色变量
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
```

安装动画插件：

```bash
pnpm add tailwindcss-animate
```

### 第 4 步：添加 CSS 变量

更新 `src/app/globals.css`，在现有 designTokens 之后添加：

```css
@layer base {
  :root {
    /* shadcn/ui 变量 - 映射到我们的设计令牌 */
    --background: 0 0% 100%;
    --foreground: 222 47% 11%;

    --card: 0 0% 100%;
    --card-foreground: 222 47% 11%;

    --popover: 0 0% 100%;
    --popover-foreground: 222 47% 11%;

    --primary: 221 83% 53%;
    --primary-foreground: 210 40% 98%;

    --secondary: 262 52% 47%;
    --secondary-foreground: 210 40% 98%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215 16% 47%;

    --accent: 188 78% 41%;
    --accent-foreground: 222 47% 11%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 210 40% 98%;

    --border: 214 32% 91%;
    --input: 214 32% 91%;
    --ring: 221 83% 53%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 222 47% 11%;
    --foreground: 210 40% 98%;

    --card: 222 47% 11%;
    --card-foreground: 210 40% 98%;

    --popover: 222 47% 11%;
    --popover-foreground: 210 40% 98%;

    --primary: 217 91% 60%;
    --primary-foreground: 222 47% 11%;

    --secondary: 217 33% 17%;
    --secondary-foreground: 210 40% 98%;

    --muted: 223 47% 11%;
    --muted-foreground: 215 20% 65%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;

    --border: 216 34% 17%;
    --input: 216 34% 17%;
    --ring: 224 71% 4%;
  }
}
```

### 第 5 步：复制需要的组件

从 shadcn-tailwind-design-system 仓库中选择性复制组件到你的项目：

```bash
# 创建组件目录
mkdir -p src/components-next/ui

# 推荐首先复制的基础组件：
# - button.tsx
# - input.tsx
# - card.tsx
# - dialog.tsx
# - dropdown-menu.tsx
# - select.tsx
# - toast.tsx
# - tooltip.tsx
```

### 第 6 步：创建组件索引

创建 `src/components-next/ui/index.ts`：

```typescript
// 基础组件
export { Button, buttonVariants } from './button';
export { Input } from './input';
export { Label } from './label';
export { Badge } from './badge';

// 卡片组件
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './card';

// 对话框
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './dialog';

// 下拉菜单
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './dropdown-menu';

// 根据需要继续添加...
```

## 📚 使用示例

### 基础按钮

```tsx
import { Button } from '@/components-next/ui';

export function Example() {
  return (
    <div className='flex gap-4'>
      <Button>Default</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
    </div>
  );
}
```

### 卡片组件

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components-next/ui';

export function AIToolCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Content Tool</CardTitle>
        <CardDescription>Create amazing content with AI</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your content here...</p>
      </CardContent>
    </Card>
  );
}
```

### 表单示例

```tsx
import { Button, Input, Label } from '@/components-next/ui';
import { useForm } from 'react-hook-form';

export function LoginForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(console.log)} className='space-y-4'>
      <div>
        <Label htmlFor='email'>Email</Label>
        <Input id='email' type='email' {...register('email')} />
      </div>
      <div>
        <Label htmlFor='password'>Password</Label>
        <Input id='email' type='password' {...register('password')} />
      </div>
      <Button type='submit'>Login</Button>
    </form>
  );
}
```

## 🎨 在 Style Guide 中展示

更新 `src/app/design/style-guide/page.tsx`，添加 shadcn 组件展示区：

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
} from '@/components-next/ui';

// 在页面中添加新的 section
<section className='mb-10'>
  <h2 className='text-xl font-semibold mb-4'>Shadcn Components</h2>

  {/* Buttons */}
  <div className='mb-6'>
    <h3 className='text-lg font-medium mb-3'>Buttons</h3>
    <div className='flex flex-wrap gap-4'>
      <Button>Default</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
      <Button size='sm'>Small</Button>
      <Button size='lg'>Large</Button>
    </div>
  </div>

  {/* Cards */}
  <div className='mb-6'>
    <h3 className='text-lg font-medium mb-3'>Cards</h3>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      <Card>
        <CardHeader>
          <CardTitle>AI Tool</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-sm text-muted-foreground'>
            Create content with AI assistance
          </p>
        </CardContent>
      </Card>
    </div>
  </div>

  {/* Form Elements */}
  <div>
    <h3 className='text-lg font-medium mb-3'>Form Elements</h3>
    <div className='space-y-4 max-w-md'>
      <Input placeholder='Enter text...' />
      <Input type='email' placeholder='Email address' />
      <Input type='password' placeholder='Password' />
    </div>
  </div>
</section>;
```

## 🎯 推荐的组件优先级

### 第一批（立即使用）

1. **Button** - 替换现有按钮
2. **Card** - 用于内容卡片
3. **Input** - 表单输入
4. **Dialog** - 模态对话框
5. **Toast** - 消息提示

### 第二批（逐步迁移）

6. **Select** - 下拉选择
7. **Tabs** - 标签页
8. **Dropdown Menu** - 下拉菜单
9. **Tooltip** - 提示框
10. **Table** - 数据表格

### 第三批（高级功能）

11. **Form** - 完整表单系统
12. **DatePicker** - 日期选择
13. **Command** - 命令面板
14. **Pagination** - 分页组件
15. **Dashboard** - 数据看板示例

## ⚠️ 注意事项

### 1. 样式冲突

- shadcn 的 CSS 变量使用 HSL 格式
- 你现有的设计令牌使用 hex 格式
- 需要在 `globals.css` 中做好映射

### 2. TypeScript 路径

确保 `tsconfig.json` 包含正确的路径别名：

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/components-next/*": ["./src/components-next/*"],
      "@/lib/*": ["./src/lib/*"]
    }
  }
}
```

### 3. 组件定制

- 复制的组件可以根据需要修改
- 建议保持组件 API 一致性
- 添加项目特定的变体

### 4. 性能考虑

- 只复制需要的组件，避免全部引入
- 使用动态导入优化加载
- 考虑代码分割策略

## 📖 参考资源

- [shadcn/ui 官方文档](https://ui.shadcn.com/)
- [Radix UI 文档](https://www.radix-ui.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [原仓库](https://github.com/huluwa1991/shadcn-tailwind-design-system)

## 🚀 下一步

1. ✅ 安装核心依赖
2. ✅ 配置 Tailwind 和 CSS 变量
3. ✅ 复制基础组件（Button, Card, Input）
4. ✅ 在 Style Guide 中测试
5. ⏳ 在实际页面中使用
6. ⏳ 逐步迁移现有组件
7. ⏳ 参考示例页面实现复杂功能

## 💡 最佳实践

1. **渐进式采用**：先在新功能中使用，逐步替换旧组件
2. **保持一致性**：确保新旧组件视觉风格统一
3. **文档先行**：在 Style Guide 中展示所有组件
4. **类型安全**：充分利用 TypeScript 类型定义
5. **性能优化**：按需引入，避免打包体积过大
