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
    
    // 注入客户端脚本到模块中
    await injectClientScripts();
    
    console.log('✅ 客户端脚本构建完成！');
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
async function buildModule(config) {
  const {
    entryPoint,
    outputFile,
    globalName,
    exportName,
    description,
    hasMarkdownLoader = true,
    needsPostProcessing = false
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
    format: 'iife',
    globalName,
    target: 'es2020',
    minify: nodeEnv === 'production',
    write: false,
    platform: 'browser',
    define: {
      'process.env.NODE_ENV': JSON.stringify(nodeEnv)
    }
  };

  // 添加 markdown 加载器（如果需要）
  if (hasMarkdownLoader) {
    buildConfig.loader = {
      '.md': 'text' // 将 .md 文件作为文本加载
    };
  }

  // 使用 esbuild 打包
  const result = await esbuild.build(buildConfig);

  // 获取打包后的代码
  const bundledCode = result.outputFiles[0].text;
  
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
 * 构建最佳实践模块
 */
async function buildBestPracticesModule() {
  await buildModule({
    entryPoint: path.resolve(__dirname, '../src/client/bestPractices/index.ts'),
    outputFile: path.resolve(__dirname, '../shared/scripts/generated/bestPracticesBundle.ts'),
    globalName: 'BestPracticesApp',
    exportName: 'bestPracticesClientScript',
    description: '最佳实践'
  });
}

/**
 * 构建 How to Implement 模块
 */
async function buildHowToImplementModule() {
  await buildModule({
    entryPoint: path.resolve(__dirname, '../src/client/howToImplement/index.ts'),
    outputFile: path.resolve(__dirname, '../shared/scripts/generated/howToImplementBundle.ts'),
    globalName: 'HowToImplementApp',
    exportName: 'howToImplementClientScript',
    description: 'How to Implement '
  });
}

/**
 * 构建 How to Apply CC 模块
 */
async function buildHowToApplyCCModule() {
  await buildModule({
    entryPoint: path.resolve(__dirname, '../src/client/howToApplyCC/index.ts'),
    outputFile: path.resolve(__dirname, '../shared/scripts/generated/howToApplyCCBundle.ts'),
    globalName: 'HowToApplyCCApp',
    exportName: 'howToApplyCCClientScript',
    description: 'How to Apply CC ',
    needsPostProcessing: true // 修复反引号转义问题
  });
}

/**
 * 构建供应商详情模块
 */
async function buildProviderDetailsModule() {
  await buildModule({
    entryPoint: path.resolve(__dirname, '../shared/scripts/providerDetails.ts'),
    outputFile: path.resolve(__dirname, '../shared/scripts/generated/providerDetailsBundle.ts'),
    globalName: 'ProviderDetailsApp',
    exportName: 'providerDetailsClientScript',
    description: '供应商详情',
    hasMarkdownLoader: false // 不需要 markdown 加载器
  });
}

/**
 * 注入客户端脚本到模块中
 */
async function injectClientScripts() {
  console.log('🔧 注入客户端脚本...');
  
  // 注入供应商详情脚本到 get-started 模块
  await injectProviderDetailsScript();
  
  // 注入 How to Implement 脚本到 how-to-implement 模块
  await injectHowToImplementScript();
  
  // 注入 How to Apply CC 脚本到 how-to-apply-cc 模块
  await injectHowToApplyCCScript();
  
  console.log('✅ 客户端脚本注入完成');
}

/**
 * 注入供应商详情脚本
 */
async function injectProviderDetailsScript() {
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
  
  // 替换占位符（仅替换独立行上的占位符，且避免 $ 模式被解释）
  getStartedContent = getStartedContent.replace(
    /^\s*\/\/ PROVIDER_DETAILS_SCRIPT_PLACEHOLDER\s*$/m,
    () => scriptContent
  );
  
  // 写回文件
  fs.writeFileSync(getStartedFile, getStartedContent, 'utf8');
}

/**
 * 注入 How to Implement 脚本
 */
async function injectHowToImplementScript() {
  try {
    // 读取 How to Implement 脚本
    const howToImplementBundle = path.resolve(__dirname, '../shared/scripts/generated/howToImplementBundle.ts');
    
    if (!fs.existsSync(howToImplementBundle)) {
      console.warn('⚠️ How to Implement 脚本未找到，跳过注入');
      return;
    }
    
    // 读取构建后的脚本
    const bundleContent = fs.readFileSync(howToImplementBundle, 'utf8');
    const scriptMatch = bundleContent.match(/export const howToImplementClientScript = "(.+)";/);
    
    if (!scriptMatch) {
      console.warn('⚠️ 无法解析 How to Implement 脚本');
      return;
    }
    
    // 解析脚本内容
    const scriptContent = JSON.parse(`"${scriptMatch[1]}"`);
    
    // 将脚本内容按行使用 '//' 注释，避免内部出现的 '*/' 破坏外层注释
    const wrappedScript = [
      '// BEGIN_INERT_CLIENT_SCRIPT (How to Implement)',
      ...scriptContent.split('\n').map((line) => `// ${line}`),
      '// END_INERT_CLIENT_SCRIPT (How to Implement)'
    ].join('\n');
    
    // 读取 how-to-implement 模块文件
    const howToImplementFile = path.resolve(__dirname, '../modules/how-to-implement/index.ts');
    
    if (!fs.existsSync(howToImplementFile)) {
      throw new Error(`How to Implement 模块文件不存在: ${howToImplementFile}`);
    }
    
    let howToImplementContent = fs.readFileSync(howToImplementFile, 'utf8');

    // 精确检测是否存在“独立行”的占位符
    const hasStandalonePlaceholderHTI = /^\s*\/\/ HOW_TO_IMPLEMENT_SCRIPT_PLACEHOLDER\s*$/m.test(howToImplementContent);
    if (!hasStandalonePlaceholderHTI) {
      // 如果没有占位符但出现了历史注入内容，尝试自动修复为干净模板
      if (howToImplementContent.includes('var HowToImplementApp = (() => {')) {
        // 兼容历史与当前导出名：howToImplementModule 或 implementationModule
        const headerMatch = howToImplementContent.match(/export const (?:howToImplementModule|implementationModule) = `[\s\S]*?`;\n?/);
        if (headerMatch) {
          howToImplementContent = `${headerMatch[0]}\n// HOW_TO_IMPLEMENT_SCRIPT_PLACEHOLDER\n`;
          console.warn('🧹 已重置 how-to-implement 模块为干净模板，准备重新注入');
        } else {
          console.warn('⚠️ 未找到 how-to-implement 模块头，跳过自动修复');
          return;
        }
      } else {
        console.warn('⚠️ How to Implement 模块中未找到脚本占位符');
        return;
      }
    }

    // 仅替换独立行上的占位符，并避免 $ 模式被解释
    howToImplementContent = howToImplementContent.replace(
      /^\s*\/\/ HOW_TO_IMPLEMENT_SCRIPT_PLACEHOLDER\s*$/m,
      () => wrappedScript
    );
    
    // 写回文件
    fs.writeFileSync(howToImplementFile, howToImplementContent, 'utf8');
  } catch (error) {
    console.error('❌ 注入 How to Implement 脚本时发生错误:', error.message);
    throw error;
  }
}

/**
 * 注入 How to Apply CC 脚本
 */
async function injectHowToApplyCCScript() {
  try {
    // 读取 How to Apply CC 脚本
    const howToApplyCCBundle = path.resolve(__dirname, '../shared/scripts/generated/howToApplyCCBundle.ts');
    
    if (!fs.existsSync(howToApplyCCBundle)) {
      console.warn('⚠️ How to Apply CC 脚本未找到，跳过注入');
      return;
    }
    
    // 读取构建后的脚本
    const bundleContent = fs.readFileSync(howToApplyCCBundle, 'utf8');
    const scriptMatch = bundleContent.match(/export const howToApplyCCClientScript = "(.+)";/s);
    
    if (!scriptMatch) {
      console.warn('⚠️ 无法解析 How to Apply CC 脚本');
      return;
    }
    
    // 解析脚本内容
    const scriptContent = JSON.parse(`"${scriptMatch[1]}"`);
    
    // 不要在 Workers 端执行浏览器代码：按行注释，避免内部 '*/' 终止外层注释
    const wrappedScript = [
      '',
      '// BEGIN_INERT_CLIENT_SCRIPT (How to Apply CC)',
      ...scriptContent.split('\n').map((line) => `// ${line}`),
      '// END_INERT_CLIENT_SCRIPT (How to Apply CC)'
    ].join('\n');
    
    // 读取 how-to-apply-cc 模块文件
    const howToApplyCCFile = path.resolve(__dirname, '../modules/how-to-apply-cc/index.ts');
    
    if (!fs.existsSync(howToApplyCCFile)) {
      throw new Error(`How to Apply CC 模块文件不存在: ${howToApplyCCFile}`);
    }
    
    let howToApplyCCContent = fs.readFileSync(howToApplyCCFile, 'utf8');

    // 精确检测是否存在“独立行”的占位符
    const hasStandalonePlaceholderHTACC = /^\s*\/\/ HOW_TO_APPLY_CC_SCRIPT_PLACEHOLDER\s*$/m.test(howToApplyCCContent);
    if (!hasStandalonePlaceholderHTACC) {
      // 如果没有占位符但出现了历史注入内容，尝试自动修复为干净模板
      if (howToApplyCCContent.includes('var HowToApplyCCApp = (() => {')) {
        const headerMatch = howToApplyCCContent.match(/export const howToApplyCCModule = `[\s\S]*?`;\n?/);
        if (headerMatch) {
          howToApplyCCContent = `${headerMatch[0]}\n// HOW_TO_APPLY_CC_SCRIPT_PLACEHOLDER\n`;
          console.warn('🧹 已重置 how-to-apply-cc 模块为干净模板，准备重新注入');
        } else {
          console.warn('⚠️ 未找到 how-to-apply-cc 模块头，跳过自动修复');
          return;
        }
      } else {
        console.warn('⚠️ How to Apply CC 模块中未找到脚本占位符');
        return;
      }
    }

    // 仅替换独立行上的占位符，并避免 $ 模式被解释
    howToApplyCCContent = howToApplyCCContent.replace(
      /^\s*\/\/ HOW_TO_APPLY_CC_SCRIPT_PLACEHOLDER\s*$/m,
      () => wrappedScript
    );
    
    // 写回文件
    fs.writeFileSync(howToApplyCCFile, howToApplyCCContent, 'utf8');
    console.log('✅ How to Apply CC 脚本注入完成');
  } catch (error) {
    console.error('❌ 注入 How to Apply CC 脚本时发生错误:', error.message);
    throw error;
  }
}

// 运行构建
if (require.main === module) {
  buildClientScripts();
}

module.exports = { buildClientScripts };
