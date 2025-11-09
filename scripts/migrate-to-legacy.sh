#!/bin/bash
# Legacy 代码隔离脚本
# 将所有旧代码移动到 src/legacy/ 目录，保持新架构清晰

set -e

echo "🚀 开始 Legacy 代码隔离..."
echo ""

# 检查是否已经隔离
if [ -d "src/legacy" ]; then
  echo "⚠️  警告：src/legacy 目录已存在"
  read -p "是否要重新隔离？这将覆盖现有的 legacy 目录 (y/N): " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ 取消隔离"
    exit 1
  fi
  echo "🗑️  删除现有 legacy 目录..."
  rm -rf src/legacy
fi

# 1. 创建 legacy 目录结构
echo "📁 创建 legacy 目录结构..."
mkdir -p src/legacy/scripts/generated

# 2. 移动 Legacy 代码
echo "📦 移动 Legacy 代码到 src/legacy/..."

# 移动组件
if [ -d "src/components" ]; then
  echo "  - 移动 components/"
  mv src/components src/legacy/components
fi

# 移动功能模块
if [ -d "src/features" ]; then
  echo "  - 移动 features/"
  mv src/features src/legacy/features
fi

# 移动客户端代码
if [ -d "src/client" ]; then
  echo "  - 移动 client/"
  mv src/client src/legacy/client
fi

# 移动脚本
if [ -d "src/scripts" ]; then
  echo "  - 移动 scripts/"
  mv src/scripts src/legacy/scripts
fi

# 移动 index.ts
if [ -f "src/index.ts" ]; then
  echo "  - 移动 index.ts"
  mv src/index.ts src/legacy/index.ts
fi

# 3. 移动样式文件（保留 designTokens.ts 和 globals.css）
echo "🎨 移动 Legacy 样式文件..."
if [ -d "src/styles" ]; then
  # 创建临时目录保存要保留的文件
  mkdir -p /tmp/keep-styles
  
  # 保存要保留的文件
  if [ -f "src/styles/designTokens.ts" ]; then
    cp src/styles/designTokens.ts /tmp/keep-styles/
  fi
  
  # 移动整个 styles 目录
  mv src/styles src/legacy/styles
  
  # 重新创建 styles 目录并恢复保留的文件
  mkdir -p src/styles
  if [ -f "/tmp/keep-styles/designTokens.ts" ]; then
    mv /tmp/keep-styles/designTokens.ts src/styles/
  fi
  
  # 清理临时目录
  rm -rf /tmp/keep-styles
  
  echo "  ✅ 保留了 src/styles/designTokens.ts"
fi

# 4. 更新 legacy/index.ts 中的导入路径
echo "🔧 更新 legacy/index.ts 导入路径..."
if [ -f "src/legacy/index.ts" ]; then
  # macOS 使用 sed -i ''，Linux 使用 sed -i
  if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' "s|from './components/|from './components/|g" src/legacy/index.ts
    sed -i '' "s|from './styles'|from './styles'|g" src/legacy/index.ts
    sed -i '' "s|from './scripts'|from './scripts'|g" src/legacy/index.ts
  else
    sed -i "s|from './components/|from './components/|g" src/legacy/index.ts
    sed -i "s|from './styles'|from './styles'|g" src/legacy/index.ts
    sed -i "s|from './scripts'|from './scripts'|g" src/legacy/index.ts
  fi
fi

# 5. 更新 LegacyPageWrapper.tsx 中的导入路径
echo "🔄 更新 LegacyPageWrapper.tsx 导入路径..."
if [ -f "src/components-next/LegacyPageWrapper.tsx" ]; then
  if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' 's|from '\''@/index'\'';|from '\''@/legacy'\'';|g' src/components-next/LegacyPageWrapper.tsx
    sed -i '' 's|from '\''@/features/get-started'\'';|from '\''@/legacy/features/get-started'\'';|g' src/components-next/LegacyPageWrapper.tsx
    sed -i '' 's|from '\''@/features/best-practices'\'';|from '\''@/legacy/features/best-practices'\'';|g' src/components-next/LegacyPageWrapper.tsx
    sed -i '' 's|from '\''@/features/how-to-implement'\'';|from '\''@/legacy/features/how-to-implement'\'';|g' src/components-next/LegacyPageWrapper.tsx
    sed -i '' 's|from '\''@/features/how-to-apply-cc'\'';|from '\''@/legacy/features/how-to-apply-cc'\'';|g' src/components-next/LegacyPageWrapper.tsx
  else
    sed -i 's|from '\''@/index'\'';|from '\''@/legacy'\'';|g' src/components-next/LegacyPageWrapper.tsx
    sed -i 's|from '\''@/features/get-started'\'';|from '\''@/legacy/features/get-started'\'';|g' src/components-next/LegacyPageWrapper.tsx
    sed -i 's|from '\''@/features/best-practices'\'';|from '\''@/legacy/features/best-practices'\'';|g' src/components-next/LegacyPageWrapper.tsx
    sed -i 's|from '\''@/features/how-to-implement'\'';|from '\''@/legacy/features/how-to-implement'\'';|g' src/components-next/LegacyPageWrapper.tsx
    sed -i 's|from '\''@/features/how-to-apply-cc'\'';|from '\''@/legacy/features/how-to-apply-cc'\'';|g' src/components-next/LegacyPageWrapper.tsx
  fi
fi

# 6. 更新构建脚本路径
echo "🛠️  更新构建脚本路径..."
if [ -f "scripts/build-client.js" ]; then
  if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' 's|../src/client/|../src/legacy/client/|g' scripts/build-client.js
    sed -i '' 's|../src/scripts/generated/|../src/legacy/scripts/generated/|g' scripts/build-client.js
  else
    sed -i 's|../src/client/|../src/legacy/client/|g' scripts/build-client.js
    sed -i 's|../src/scripts/generated/|../src/legacy/scripts/generated/|g' scripts/build-client.js
  fi
fi

# 7. 更新 legacy/scripts/index.ts 中的导入路径
echo "🔧 更新 legacy/scripts/index.ts 导入路径..."
if [ -f "src/legacy/scripts/index.ts" ]; then
  # 不需要修改，因为相对路径仍然有效
  echo "  ✅ scripts/index.ts 路径无需修改"
fi

# 8. 重新构建客户端代码
echo ""
echo "🔨 重新构建客户端代码..."
npm run build:client

# 9. 验证 Next.js 构建
echo ""
echo "✅ 验证 Next.js 构建..."
npm run build

echo ""
echo "🎉 Legacy 代码隔离完成！"
echo ""
echo "📋 隔离结果："
echo "  ✅ Legacy 代码已移动到 src/legacy/"
echo "  ✅ 保留了共享资源："
echo "     - src/api/"
echo "     - src/lib/"
echo "     - src/config/"
echo "     - src/types/"
echo "     - src/styles/designTokens.ts"
echo "  ✅ 客户端代码已重新构建"
echo "  ✅ Next.js 构建验证通过"
echo ""
echo "🚀 后续步骤："
echo "  1. 运行 'npm run dev' 测试应用"
echo "  2. 访问 http://localhost:3000 验证页面正常"
echo "  3. 开始在 src/app/ 和 src/components-next/ 下进行新开发"
echo ""
echo "📚 参考文档："
echo "  - docs/LEGACY_ISOLATION_GUIDE.md - 完整隔离指南"
echo "  - docs/QUICK_START_NEW_DEV.md - 新架构开发指南"
echo ""
echo "⚠️  注意事项："
echo "  - 旧代码现在在 src/legacy/ 目录下"
echo "  - 新开发请使用 Next.js 最佳实践"
echo "  - 适配器 LegacyPageWrapper 会继续工作"
echo "  - 可以逐步迁移 legacy 功能到新架构"
