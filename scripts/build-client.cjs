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

    // 构建 How to Implement 模块
    await buildHowToImplementModule();

    // 构建 How to Apply CC 模块
    await buildHowToApplyCCModule();

    // 构建供应商详情模块
    await buildProviderDetailsModule();

    console.log('✅ 客户端脚本构建完成！');
    console.log('📝 客户端脚本已生成到 src/scripts/generated/ 目录');
    console.log('🎯 模块文件保持简洁，无需注入代码');
  } catch (error) {
    console.error('❌ 构建失败:', error);
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
async function buildModule({
  entryPoint,
  outputFile,
  globalName,
  exportName,
  description,
  hasMarkdownLoader = false,
  needsPostProcessing = false,
}) {
  console.log(`📦 打包${description}模块...`);

  const startTime = Date.now();

  try {
    const result = await esbuild.build({
      entryPoints: [entryPoint],
      bundle: true,
      format: 'iife',
      globalName,
      target: 'es2020',
      minify: true,
      write: false,
      platform: 'browser',
      define: {
        'process.env.NODE_ENV': '"production"',
      },
      ...(hasMarkdownLoader && {
        loader: {
          '.md': 'text',
        },
      }),
    });

    let bundledCode = result.outputFiles[0].text;

    // 如果需要后处理（修复反引号转义问题）
    if (needsPostProcessing) {
      bundledCode = bundledCode.replace(/\\`/g, '\\`');
    }

    // 包装成可注入的格式
    const wrappedCode = `// ${description}模块 - 构建时间: ${new Date().toISOString()}
// @ts-nocheck
export const ${exportName} = ${JSON.stringify(bundledCode)};
`;

    // 确保输出目录存在
    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // 写入文件
    fs.writeFileSync(outputFile, wrappedCode, 'utf8');

    const buildTime = Date.now() - startTime;
    console.log(`📝 ${description}模块已打包到: ${outputFile}`);
    console.log(`📊 打包大小: ${(bundledCode.length / 1024).toFixed(2)} KB`);
    console.log(`⏱️  构建时间: ${buildTime}ms`);
  } catch (error) {
    console.error(`❌ 打包${description}模块失败:`, error);
    throw error;
  }
}

/**
 * 构建最佳实践模块
 */
async function buildBestPracticesModule() {
  await buildModule({
    entryPoint: path.resolve(__dirname, '../src/client/bestPractices/index.ts'),
    outputFile: path.resolve(__dirname, '../src/scripts/generated/bestPracticesBundle.ts'),
    globalName: 'BestPracticesApp',
    exportName: 'bestPracticesClientScript',
    description: '最佳实践',
    hasMarkdownLoader: true,
    needsPostProcessing: false,
  });
}

/**
 * 构建 How to Implement 模块
 */
async function buildHowToImplementModule() {
  await buildModule({
    entryPoint: path.resolve(__dirname, '../src/client/howToImplement/index.ts'),
    outputFile: path.resolve(__dirname, '../src/scripts/generated/howToImplementBundle.ts'),
    globalName: 'HowToImplementApp',
    exportName: 'howToImplementClientScript',
    description: 'How to Implement ',
    hasMarkdownLoader: true,
    needsPostProcessing: false,
  });
}

/**
 * 构建 How to Apply CC 模块
 */
async function buildHowToApplyCCModule() {
  await buildModule({
    entryPoint: path.resolve(__dirname, '../src/client/howToApplyCC/index.ts'),
    outputFile: path.resolve(__dirname, '../src/scripts/generated/howToApplyCCBundle.ts'),
    globalName: 'HowToApplyCCApp',
    exportName: 'howToApplyCCClientScript',
    description: 'How to Apply CC ',
    hasMarkdownLoader: true,
    needsPostProcessing: true, // 修复反引号转义问题
  });
}

/**
 * 构建供应商详情模块
 */
async function buildProviderDetailsModule() {
  await buildModule({
    entryPoint: path.resolve(__dirname, '../src/scripts/providerDetails.ts'),
    outputFile: path.resolve(__dirname, '../src/scripts/generated/providerDetailsBundle.ts'),
    globalName: 'ProviderDetailsApp',
    exportName: 'providerDetailsClientScript',
    description: '供应商详情',
    hasMarkdownLoader: false, // 不需要 markdown 加载器
    needsPostProcessing: false,
  });
}

// 运行构建
if (require.main === module) {
  buildClientScripts();
}

module.exports = { buildClientScripts };