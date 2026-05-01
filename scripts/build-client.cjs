#!/usr/bin/env node
// @ts-nocheck

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
    // 构建供应商详情模块
    await buildProviderDetailsModule();

    // 生成首页 HTML 字符串（用于 API 路由，避免运行时 fs.readFileSync）
    await generateHomepageHtml();

    console.log('✅ 客户端脚本构建完成！');
    console.log('📝 客户端脚本已生成到 src/legacy/scripts/generated/ 目录');
    console.log('🎯 模块文件保持简洁，无需注入代码');
  } catch (error) {
    console.error('❌ 构建失败:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

/**
 * 通用的模块构建函数
 * @param {Object} config - 构建配置
 * @param {string} config.entryPoint - 入口文件路径
 * @param {string} config.outputFile - 输出文件路径
 * @param {string} config.globalName - 全局变量名
 * @param {string} config.exportName - 导出变量名
 * @param {string} config.description - 模块描述
 * @param {boolean} config.hasMarkdownLoader - 是否需要markdown加载器
 * @param {boolean} config.needsPostProcessing - 是否需要后处理
 */
async function buildModule(config) {
  const {
    entryPoint,
    outputFile,
    globalName,
    exportName,
    description,
    hasMarkdownLoader = true,
    needsPostProcessing = false,
  } = config;

  // 确保输出目录存在
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`📦 打包${description}模块...`);

  // 根据 Node 进程环境决定构建模式（默认 production）
  const nodeEnv = process.env.NODE_ENV === 'development' ? 'development' : 'production';

  // 构建 esbuild 配置
  const buildConfig = {
    entryPoints: [entryPoint],
    bundle: true,
    format: /** @type {const} */ ('iife'),
    globalName,
    target: 'es2020',
    minify: nodeEnv === 'production',
    write: false,
    platform: 'browser',
    define: {
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    },
  };

  // 添加 markdown 加载器（如果需要）
  if (hasMarkdownLoader) {
    buildConfig.loader = {
      '.md': 'text', // 将 .md 文件作为文本加载
    };
  }

  // 清理类型检查错误
  const esbuild = require('esbuild');
  /**
   * @param {any} buildConfig
   */
  const buildOptions = buildConfig;

  // 使用 esbuild 打包
  const result = await esbuild.build(buildConfig);

  // 检查输出文件
  if (!result.outputFiles || result.outputFiles.length === 0) {
    throw new Error('没有 outputFiles 输出');
  }

  // 获取打包后的代码
  const bundledCode = result.outputFiles[0]?.text || '';

  // 包装成 TypeScript 导出
  // 使用 JSON.stringify 来正确转义所有特殊字符
  const wrappedCode = `// 自动生成的${description}客户端脚本包
// 构建时间: ${new Date().toISOString()}
// 请勿手动修改此文件

export const ${exportName} = ${JSON.stringify(bundledCode)};
`;

  // 写入文件
  fs.writeFileSync(outputFile, wrappedCode, 'utf8');

  // 后处理（如果需要）
  if (needsPostProcessing) {
    let fileContent = fs.readFileSync(outputFile, 'utf8');
    // 修复 JSON 字符串中的反引号转义问题
    fileContent = fileContent.replace(/([^\\])\\`/g, '$1\\\\`');
    fs.writeFileSync(outputFile, fileContent, 'utf8');
  }

  console.log(`📝 ${description}模块已打包到: ${outputFile}`);
  console.log(`📊 打包大小: ${(bundledCode.length / 1024).toFixed(2)} KB`);
}

/**
 * 构建供应商详情模块
 */
async function buildProviderDetailsModule() {
  await buildModule({
    entryPoint: path.resolve(__dirname, '../src/legacy/scripts/scripts/providerDetails.ts'),
    outputFile: path.resolve(__dirname, '../src/legacy/scripts/generated/providerDetailsBundle.ts'),
    globalName: 'ProviderDetailsApp',
    exportName: 'providerDetailsClientScript',
    description: '供应商详情',
    hasMarkdownLoader: false, // 不需要 markdown 加载器
    needsPostProcessing: false,
  });
}

/**
 * 生成首页 HTML 字符串文件
 * 在构建时读取 @cc4pm/homepage/index.html，生成可直接 import 的 TS 常量
 * 解决 Cloudflare Workers 无法在运行时使用 fs.readFileSync 的问题
 */
async function generateHomepageHtml() {
  const htmlPath = path.resolve(
    __dirname,
    '../node_modules/@cc4pm/homepage/index.html',
  );
  const outputFile = path.resolve(
    __dirname,
    '../src/legacy/scripts/generated/homepageHtml.ts',
  );

  if (!fs.existsSync(htmlPath)) {
    console.warn('⚠️ 未找到 @cc4pm/homepage/index.html，跳过首页 HTML 生成');
    return;
  }

  const html = fs.readFileSync(htmlPath, 'utf-8');

  const wrappedCode = `// 自动生成的首页 HTML 字符串
// 构建时间: ${new Date().toISOString()}
// 请勿手动修改此文件

export const homepageHtml = ${JSON.stringify(html)};
`;

  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, wrappedCode, 'utf8');
  console.log(`📝 首页 HTML 已生成到: ${outputFile}`);
  console.log(`📊 HTML 大小: ${(html.length / 1024).toFixed(2)} KB`);
}

// 运行构建
if (require.main === module) {
  buildClientScripts();
}

module.exports = { buildClientScripts };
