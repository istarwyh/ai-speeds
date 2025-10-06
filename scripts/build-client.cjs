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
    // 先生成所有模块的内容映射（SSOT）
    await generateBestPracticesContentMap();
    await generateHowToImplementContentMap();
    await generateHowToApplyCCContentMap();

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
    format: 'iife',
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
 * 通用内容映射生成器（SSOT）
 * @param {Object} config - 生成配置
 * @param {string} config.moduleName - 模块名称（用于日志）
 * @param {string} config.contentDir - 内容目录路径
 * @param {string} config.generatedDir - 生成文件目录路径
 * @param {string} config.cardsFile - 卡片数据文件路径
 */
async function generateContentMap(config) {
  const { moduleName, contentDir, generatedDir, cardsFile } = config;
  const outputFile = path.join(generatedDir, 'contentMap.ts');

  if (!fs.existsSync(contentDir)) {
    console.warn(`⚠️ 未找到${moduleName}内容目录:`, contentDir);
    return;
  }
  if (!fs.existsSync(generatedDir)) {
    fs.mkdirSync(generatedDir, { recursive: true });
  }

  const files = fs
    .readdirSync(contentDir)
    .filter(f => f.endsWith('.md'))
    .sort((a, b) => a.localeCompare(b));

  const toSlug = fileName => fileName.replace(/\.md$/i, '').trim().toLowerCase();
  const toVar = slug =>
    'md_' + slug.replace(/-([a-z0-9])/g, (_m, c) => c.toUpperCase()).replace(/[^a-zA-Z0-9_]/g, '_');

  const imports = [];
  const entries = [];
  const fileSlugs = new Set();
  for (const file of files) {
    const slug = toSlug(file);
    const varName = toVar(slug);
    imports.push(`import ${varName} from '../content/${file}';`);
    entries.push(`  '${slug}': async () => ${varName},`);
    fileSlugs.add(slug);
  }

  const header = `// 自动生成文件，请勿手动修改\n// 生成时间: ${new Date().toISOString()}\n`;
  const body = `\n${imports.join('\n')}\n\nexport const contentLoaders: Record<string, () => Promise<string>> = {\n${entries.join(
    '\n',
  )}\n};\n`;

  fs.writeFileSync(outputFile, header + body, 'utf8');
  console.log(`📝 已生成${moduleName}内容映射:`, outputFile);

  // 校验 cardsData 与文件匹配性
  try {
    const cardsSrc = fs.readFileSync(cardsFile, 'utf8');
    const idRegex = /id\s*:\s*['\"`]([^'\"`]+)['\"`]/g;
    const cardIds = new Set();
    let m;
    while ((m = idRegex.exec(cardsSrc))) {
      cardIds.add(m[1].trim().toLowerCase());
    }

    const missingMd = [];
    const extraMd = [];
    for (const id of cardIds) {
      if (!fileSlugs.has(id)) missingMd.push(id);
    }
    for (const slug of fileSlugs) {
      if (!cardIds.has(slug)) extraMd.push(slug);
    }

    if (missingMd.length) {
      console.warn(`⚠️ ${moduleName}以下卡片缺少对应的 .md 文件:`, missingMd.join(', '));
    }
    if (extraMd.length) {
      console.warn(`⚠️ ${moduleName}以下 .md 文件没有匹配的卡片 id:`, extraMd.join(', '));
    }
  } catch (e) {
    console.warn(`⚠️ 校验${moduleName} cardsData 失败:`, e.message);
  }
}

/**
 * 生成最佳实践内容映射文件（SSOT）
 */
async function generateBestPracticesContentMap() {
  await generateContentMap({
    moduleName: '最佳实践',
    contentDir: path.resolve(__dirname, '../src/client/bestPractices/content'),
    generatedDir: path.resolve(__dirname, '../src/client/bestPractices/generated'),
    cardsFile: path.resolve(__dirname, '../src/client/bestPractices/data/cardsData.ts'),
  });
}

/**
 * 生成 How to Implement 内容映射文件（SSOT）
 */
async function generateHowToImplementContentMap() {
  await generateContentMap({
    moduleName: 'How to Implement',
    contentDir: path.resolve(__dirname, '../src/client/howToImplement/content'),
    generatedDir: path.resolve(__dirname, '../src/client/howToImplement/generated'),
    cardsFile: path.resolve(__dirname, '../src/client/howToImplement/data/cardsData.ts'),
  });
}

/**
 * 生成 How to Apply CC 内容映射文件（SSOT）
 */
async function generateHowToApplyCCContentMap() {
  await generateContentMap({
    moduleName: 'How to Apply CC',
    contentDir: path.resolve(__dirname, '../src/client/howToApplyCC/content'),
    generatedDir: path.resolve(__dirname, '../src/client/howToApplyCC/generated'),
    cardsFile: path.resolve(__dirname, '../src/client/howToApplyCC/data/cardsData.ts'),
  });
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
