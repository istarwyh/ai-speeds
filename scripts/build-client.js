#!/usr/bin/env node

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

/**
 * 构建客户端脚本的构建器
 * 将模块化的 TypeScript 代码打包成单个 IIFE 字符串
 */
async function buildClientScripts() {
  console.log('🔨 开始构建客户端脚本...');

  try {
    // 构建最佳实践模块
    await buildBestPracticesModule();
    
    // 构建供应商详情模块
    await buildProviderDetailsModule();
    
    // 注入客户端脚本到模块中
    await injectClientScripts();
    
    console.log('✅ 客户端脚本构建完成！');
  } catch (error) {
    console.error('❌ 构建失败:', error);
    process.exit(1);
  }
}

/**
 * 构建最佳实践模块
 */
async function buildBestPracticesModule() {
  const entryPoint = path.resolve(__dirname, '../src/client/bestPractices/index.ts');
  const outputFile = path.resolve(__dirname, '../shared/scripts/generated/bestPracticesBundle.ts');
  
  // 确保输出目录存在
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('📦 打包最佳实践模块...');
  
  // 使用 esbuild 打包
  const result = await esbuild.build({
    entryPoints: [entryPoint],
    bundle: true,
    format: 'iife',
    globalName: 'BestPracticesApp',
    target: 'es2020',
    minify: false, // 开发时不压缩，便于调试
    write: false,
    platform: 'browser',
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    loader: {
      '.md': 'text' // 将 .md 文件作为文本加载
    }
  });

  // 获取打包后的代码
  const bundledCode = result.outputFiles[0].text;
  
  // 包装成 TypeScript 导出
  // 使用 JSON.stringify 来正确转义所有特殊字符
  const wrappedCode = `// 自动生成的客户端脚本包
// 构建时间: ${new Date().toISOString()}
// 请勿手动修改此文件

export const bestPracticesClientScript = ${JSON.stringify(bundledCode)};
`;

  // 写入文件
  fs.writeFileSync(outputFile, wrappedCode, 'utf8');
  
  console.log(`📝 最佳实践模块已打包到: ${outputFile}`);
  console.log(`📊 打包大小: ${(bundledCode.length / 1024).toFixed(2)} KB`);
}

/**
 * 构建供应商详情模块
 */
async function buildProviderDetailsModule() {
  const entryPoint = path.resolve(__dirname, '../shared/scripts/providerDetails.ts');
  const outputFile = path.resolve(__dirname, '../shared/scripts/generated/providerDetailsBundle.ts');
  
  // 确保输出目录存在
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('📦 打包供应商详情模块...');
  
  // 使用 esbuild 打包
  const result = await esbuild.build({
    entryPoints: [entryPoint],
    bundle: true,
    format: 'iife',
    globalName: 'ProviderDetailsApp',
    target: 'es2020',
    minify: false, // 开发时不压缩，便于调试
    write: false,
    platform: 'browser',
    define: {
      'process.env.NODE_ENV': '"production"'
    }
  });

  // 获取打包后的代码
  const bundledCode = result.outputFiles[0].text;
  
  // 包装成 TypeScript 导出
  const wrappedCode = `// 自动生成的供应商详情客户端脚本
// 构建时间: ${new Date().toISOString()}
// 请勿手动修改此文件

export const providerDetailsClientScript = ${JSON.stringify(bundledCode)};
`;

  // 写入文件
  fs.writeFileSync(outputFile, wrappedCode, 'utf8');
  
  console.log(`📝 供应商详情模块已打包到: ${outputFile}`);
  console.log(`📊 打包大小: ${(bundledCode.length / 1024).toFixed(2)} KB`);
}

/**
 * 注入客户端脚本到模块中
 */
async function injectClientScripts() {
  console.log('🔧 注入客户端脚本...');
  
  // 读取供应商详情脚本
  const providerDetailsBundle = path.resolve(__dirname, '../shared/scripts/generated/providerDetailsBundle.ts');
  
  if (!fs.existsSync(providerDetailsBundle)) {
    console.warn('⚠️ 供应商详情脚本未找到，跳过注入');
    return;
  }
  
  // 读取构建后的脚本
  const bundleContent = fs.readFileSync(providerDetailsBundle, 'utf8');
  const scriptMatch = bundleContent.match(/export const providerDetailsClientScript = "(.+)";/);
  
  if (!scriptMatch) {
    console.warn('⚠️ 无法解析供应商详情脚本');
    return;
  }
  
  // 解析脚本内容
  const scriptContent = JSON.parse(`"${scriptMatch[1]}"`);
  
  // 读取 get-started 模块文件
  const getStartedFile = path.resolve(__dirname, '../modules/get-started/index.ts');
  let getStartedContent = fs.readFileSync(getStartedFile, 'utf8');
  
  // 替换占位符
  getStartedContent = getStartedContent.replace(
    '// PROVIDER_DETAILS_SCRIPT_PLACEHOLDER',
    scriptContent
  );
  
  // 写回文件
  fs.writeFileSync(getStartedFile, getStartedContent, 'utf8');
  
  console.log('✅ 客户端脚本注入完成');
}

// 运行构建
if (require.main === module) {
  buildClientScripts();
}

module.exports = { buildClientScripts };
