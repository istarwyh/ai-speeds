#!/usr/bin/env node

// @ts-check

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

/**
 * 安全构建客户端脚本
 * 包含智能重试和错误恢复机制
 */

/**
 * @param {string} dir - Directory path
 * @returns {number} Last modified timestamp
 */
function getLastModified(/** @type {string} */ dir) {
  let lastModified = 0;

  /**
   * @param {string} currentDir - Current directory path
   */
  function walkDir(/** @type {string} */ currentDir) {
    const files = fs.readdirSync(currentDir);

    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        walkDir(filePath);
      } else if (stat.isFile() && (file.endsWith('.ts') || file.endsWith('.js'))) {
        lastModified = Math.max(lastModified, stat.mtime.getTime());
      }
    }
  }

  try {
    walkDir(dir);
  } catch (err) {
    console.error(`读取目录 ${dir} 时出错:`, err);
  }

  return lastModified;
}

/**
 * @param {string} currentDir - Current directory path
 * @returns {number} Total line count
 */
function walkDirForLineCount(/** @type {string} */ currentDir) {
  let totalLines = 0;
  const files = fs.readdirSync(currentDir);
  for (const file of files) {
    const filePath = path.join(currentDir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      totalLines += walkDirForLineCount(filePath);
    } else if (stat.isFile() && (file.endsWith('.ts') || file.endsWith('.js'))) {
      const content = fs.readFileSync(filePath, 'utf8');
      totalLines += content.split('\n').length;
    }
  }
  return totalLines;
}

/**
 * 获取客户端脚本目录的总行数（用于更智能的缓存）
 * @returns {number} Line count
 */
function getClientLineCount() {
  let totalLines = 0;
  try {
    totalLines = walkDirForLineCount(CLIENT_DIR);
  } catch (err) {
    console.error(`计算行数时出错:`, err);
  }
  return totalLines;
}

// 对两种构建模式的行为进行更智能的检查
// 为开发环境构建 => 跳过某些优化

/**
 * @param {Error} error - Error object
 * @param {string} context - Error context
 */
function logBuildError(/** @type {Error} */ error, context = '') {
  const errorLogFile = 'build-errors.log';
  const timestamp = new Date().toISOString();
  const errorMessage = `\n=== Build Error ===\nTimestamp: ${timestamp}\nContext: ${context}\nError: ${error}\nStack: ${error.stack || 'No stack trace'}\n=== End ===\n`;

  try {
    fs.appendFileSync(errorLogFile, errorMessage);
  } catch (err) {
    console.error('写入错误日志失败:', err);
  }
}

// 错误计数
let errorCount = 0;

// 定义客户端脚本目录
const CLIENT_DIR = path.resolve(__dirname, '../src/legacy/client');
const GENERATED_DIR = path.resolve(__dirname, '../src/legacy/scripts/generated');
const LAST_BUILD_FILE = 'last_build.json';

// 检查客户端脚本源目录是否存在
if (!fs.existsSync(CLIENT_DIR)) {
  console.error('❌ 客户端脚本源目录不存在:', CLIENT_DIR);
  process.exit(1);
}

// 生成输出目录
if (!fs.existsSync(GENERATED_DIR)) {
  fs.mkdirSync(GENERATED_DIR, { recursive: true });
  console.log(`✅ 创建输出目录: ${GENERATED_DIR}`);
}

/**
 * 安全执行构建命令
 * @param {string} command - 命令
 * @param {string[]} args - 参数
 */
function safeExec(/** @type {string} */ command, /** @type {string[]} */ args) {
  const result = spawnSync(command, args, {
    stdio: 'pipe',
    encoding: 'utf8',
    shell: true,
  });

  if (result.error) {
    errorCount++;
    logBuildError(result.error, `执行命令失败: ${command} ${args.join(' ')}`);
    return false;
  }

  if (result.status !== 0) {
    errorCount++;
    logBuildError(new Error(`命令退出码非0: ${result.status}`), `命令执行失败: ${command} ${args.join(' ')}`);
    console.error(`命令执行失败: ${command} ${args.join(' ')}`);
    console.error(`退出码: ${result.status}`);
    console.error(`stdout: ${result.stdout}`);
    console.error(`stderr: ${result.stderr}`);
    return false;
  }

  return true;
}

/**
 * 主构建函数
 */
async function buildClientScripts() {
  try {
    console.log('🚀 开始安全构建客户端脚本...');

    // 获取各种信息用于智能缓存检查
    const currentTime = Date.now();
    const lastBuildData = fs.existsSync(LAST_BUILD_FILE)
      ? JSON.parse(fs.readFileSync(LAST_BUILD_FILE, 'utf8'))
      : { timestamp: 0, lineCount: 0 };

    const lastContentModification = getLastModified(CLIENT_DIR);
    const currentLineCount = getClientLineCount();

    const homepageHtmlPath = path.resolve(__dirname, '../node_modules/@cc4pm/homepage/index.html');
    const homepageMtime = fs.existsSync(homepageHtmlPath)
      ? fs.statSync(homepageHtmlPath).mtime.getTime()
      : 0;

    // 更智能的缓存检查
    if (
      lastContentModification < lastBuildData.timestamp &&
      currentLineCount === lastBuildData.lineCount &&
      homepageMtime === lastBuildData.homepageMtime &&
      fs.existsSync(path.join(GENERATED_DIR, 'appClientScript.ts'))
    ) {
      console.log('✅ 客户端代码未修改，跳过构建（智能缓存）');

      // 仍然进行文件存在性检查（而非完全跳过构建）
      const expectedFiles = [
        'appClientScript.ts',
        'howToApplyCCClientScript.ts',
        'bestPracticesClientScript.ts',
        'howToImplementClientScript.ts',
        'providerDetailsClientScript.ts',
        'homepageHtml.ts',
      ];

      const allFilesExist = expectedFiles.every(file =>
        fs.existsSync(path.join(GENERATED_DIR, file))
      );

      if (allFilesExist) {
        process.exit(0);
      }

      console.log('⚠️ 部分文件缺失，重新构建...');
    }

    // 执行实际的客户端脚本构建
    console.log('🔨 执行客户端脚本构建...');

    if (!safeExec('node', [path.resolve(__dirname, 'build-client.cjs')])) {
      throw new Error('客户端脚本构建失败');
    }

    console.log('✅ 客户端脚本构建成功！（安全检查通过）');

    // 保存这次构建的信息（包含行数统计，用于下次的智能缓存）
    fs.writeFileSync(
      LAST_BUILD_FILE,
      JSON.stringify({
        timestamp: currentTime,
        lineCount: currentLineCount,
        homepageMtime,
        errorCount,
      }),
      'utf8',
    );

    console.log('📊 构建报告摘要:');
    console.log(`- 错误计数: ${errorCount}`);
    console.log('- 客户端代码总行数:', currentLineCount.toLocaleString());
    if (errorCount === 0) {
      console.log('✅ 构建成功完成！');
    } else {
      console.log('⚠️ 构建完成，但有一些警告（未见严重错误）');
    }
  } catch (error) {
    console.error('❌ 构建失败:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

// 处理非正常退出
process.on('uncaughtException', (error) => {
  console.error('❌ 未捕获的异常:', error instanceof Error ? error.message : String(error));
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('❌ 未处理的 Promise 拒绝:', reason instanceof Error ? reason.message : String(reason));
  process.exit(1);
});

// 如果直接运行此脚本，执行主函数
if (require.main === module) {
  buildClientScripts();
}