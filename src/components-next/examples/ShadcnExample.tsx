/**
 * Shadcn UI 组件使用示例
 *
 * 展示如何在 AI Speeds 项目中使用 shadcn-tailwind-design-system 的组件
 *
 * 注意：需要先从 shadcn-tailwind-design-system 复制相应的组件到 @/components-next/ui
 */

'use client';

import React from 'react';
import { useState, type FormEvent } from 'react';

// 这些组件需要从 shadcn-tailwind-design-system 复制到你的项目
// import { Button } from '@/components-next/ui/button';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components-next/ui/card';
// import { Input } from '@/components-next/ui/input';
// import { Label } from '@/components-next/ui/label';
// import { Badge } from '@/components-next/ui/badge';

/**
 * 基础按钮示例
 */
export function ButtonExample() {
  return (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>按钮变体</h3>
      <div className='flex flex-wrap gap-4'>
        {/* <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button> */}
        <p className='text-sm text-muted-foreground'>请先从 shadcn-tailwind-design-system 复制 Button 组件</p>
      </div>

      <h3 className='text-lg font-semibold mt-6'>按钮尺寸</h3>
      <div className='flex flex-wrap gap-4 items-center'>
        {/* <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">🚀</Button> */}
      </div>
    </div>
  );
}

/**
 * 卡片组件示例
 */
export function CardExample() {
  return (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>AI 工具卡片</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle>AI Content Generator</CardTitle>
              <Badge>New</Badge>
            </div>
            <CardDescription>
              使用 AI 快速生成高质量内容
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              支持多种内容类型：文章、社交媒体、邮件等
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">立即使用</Button>
          </CardFooter>
        </Card> */}

        <p className='text-sm text-muted-foreground'>请先从 shadcn-tailwind-design-system 复制 Card 组件</p>
      </div>
    </div>
  );
}

/**
 * 表单示例
 */
export function FormExample() {
  const [email, _setEmail] = useState('');
  const [password, _setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Use state values without logging to satisfy lints in example-only UI
    void email;
    void password;
  };

  return (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>登录表单</h3>
      <form onSubmit={handleSubmit} className='space-y-4 max-w-md'>
        {/* <div className="space-y-2">
          <Label htmlFor="email">邮箱</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">密码</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <Button type="submit" className="w-full">
          登录
        </Button> */}

        <p className='text-sm text-muted-foreground'>请先从 shadcn-tailwind-design-system 复制 Input 和 Label 组件</p>
      </form>
    </div>
  );
}

/**
 * 完整示例页面
 */
export function ShadcnExamplePage() {
  return (
    <div className='container mx-auto p-8 space-y-12'>
      <header>
        <h1 className='text-3xl font-bold mb-2'>Shadcn UI 组件示例</h1>
        <p className='text-muted-foreground'>展示如何在 AI Speeds 项目中使用 shadcn-tailwind-design-system</p>
      </header>

      <section>
        <ButtonExample />
      </section>

      <section>
        <CardExample />
      </section>

      <section>
        <FormExample />
      </section>

      <section className='border-t pt-8'>
        <h3 className='text-lg font-semibold mb-4'>使用步骤</h3>
        <ol className='list-decimal list-inside space-y-2 text-sm text-muted-foreground'>
          <li>
            运行 <code className='px-2 py-1 bg-muted rounded'>bash scripts/setup-shadcn.sh</code> 安装依赖
          </li>
          <li>
            从{' '}
            <a href='https://github.com/huluwa1991/shadcn-tailwind-design-system' className='text-primary underline'>
              shadcn-tailwind-design-system
            </a>{' '}
            复制需要的组件
          </li>
          <li>
            将组件放到 <code className='px-2 py-1 bg-muted rounded'>src/components-next/ui/</code> 目录
          </li>
          <li>取消本文件中相应组件的注释</li>
          <li>在你的页面中导入和使用组件</li>
        </ol>
      </section>

      <section className='border-t pt-8'>
        <h3 className='text-lg font-semibold mb-4'>推荐的组件复制顺序</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='space-y-2'>
            <h4 className='font-medium'>第一批（基础）</h4>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Button</li>
              <li>• Card</li>
              <li>• Input</li>
              <li>• Label</li>
              <li>• Badge</li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h4 className='font-medium'>第二批（交互）</h4>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Dialog</li>
              <li>• Dropdown Menu</li>
              <li>• Select</li>
              <li>• Toast</li>
              <li>• Tooltip</li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h4 className='font-medium'>第三批（高级）</h4>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Form</li>
              <li>• Table</li>
              <li>• Tabs</li>
              <li>• Command</li>
              <li>• DatePicker</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
