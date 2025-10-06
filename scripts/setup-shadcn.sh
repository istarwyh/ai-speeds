#!/bin/bash

# Shadcn UI 组件库安装脚本
# 用于快速设置 shadcn-tailwind-design-system 所需的依赖

set -e

echo "🚀 开始安装 Shadcn UI 依赖..."

# 核心依赖
echo "📦 安装核心依赖..."
pnpm add class-variance-authority clsx tailwind-merge
pnpm add lucide-react
pnpm add tailwindcss-animate

# Radix UI 组件
echo "📦 安装 Radix UI 组件..."
pnpm add @radix-ui/react-slot
pnpm add @radix-ui/react-dialog
pnpm add @radix-ui/react-dropdown-menu
pnpm add @radix-ui/react-select
pnpm add @radix-ui/react-tabs
pnpm add @radix-ui/react-toast
pnpm add @radix-ui/react-tooltip
pnpm add @radix-ui/react-popover
pnpm add @radix-ui/react-checkbox
pnpm add @radix-ui/react-radio-group
pnpm add @radix-ui/react-switch
pnpm add @radix-ui/react-label
pnpm add @radix-ui/react-separator
pnpm add @radix-ui/react-avatar
pnpm add @radix-ui/react-accordion

# 表单处理（可选）
echo "📦 安装表单处理库（可选）..."
read -p "是否安装 React Hook Form 和 Zod？(y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    pnpm add react-hook-form zod @hookform/resolvers
    echo "✅ 表单库安装完成"
fi

# 图表库（可选）
echo "📦 安装图表库（可选）..."
read -p "是否安装 Recharts 用于数据可视化？(y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    pnpm add recharts
    echo "✅ 图表库安装完成"
fi

# 日期选择器（可选）
echo "📦 安装日期选择器（可选）..."
read -p "是否安装 date-fns 和 react-day-picker？(y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    pnpm add date-fns react-day-picker
    echo "✅ 日期库安装完成"
fi

echo ""
echo "✅ 所有依赖安装完成！"
echo ""
echo "📚 下一步："
echo "1. 查看集成文档: docs/design/SHADCN_INTEGRATION.md"
echo "2. 配置 Tailwind CSS: tailwind.config.ts"
echo "3. 更新全局样式: src/app/globals.css"
echo "4. 从 shadcn-tailwind-design-system 复制需要的组件"
echo "5. 在 Style Guide 中测试组件"
echo ""
echo "🎉 开始使用 Shadcn UI 组件库吧！"
