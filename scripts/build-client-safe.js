#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOCK_FILE = path.resolve(__dirname, '../.build-lock');
const LOCK_TIMEOUT = 10000; // 10秒超时
const LAST_BUILD_FILE = path.resolve(__dirname, '../.last-build-time');

/**
 * 获取目录下所有文件的最新修改时间
 */
function getLastModified(dir) {
  let lastModified = 0;

  function walkDir(currentDir) {
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

  walkDir(dir);
  return lastModified;
}

/**
 * 安全的客户端构建包装器
 * 使用文件系统锁和时间戳检查防止重复构建
 */
function safeBuildClient() {
  try {
    const currentTime = Date.now();

    // 检查锁文件是否存在
    if (fs.existsSync(LOCK_FILE)) {
      const lockTime = parseInt(fs.readFileSync(LOCK_FILE, 'utf8'));

      // 如果锁文件超时，删除它
      if (currentTime - lockTime > LOCK_TIMEOUT) {
        console.log('🧹 清理超时的构建锁');
        fs.unlinkSync(LOCK_FILE);
      } else {
        console.log('🔒 构建已在进行中，跳过重复构建');
        console.log(`⏳ 距离上次构建: ${((currentTime - lockTime) / 1000).toFixed(1)}秒`);
        return;
      }
    }

    // 检查源文件是否有变化
    const srcDir = path.resolve(__dirname, '../src/client');
    const currentSrcModified = getLastModified(srcDir);

    let lastBuildTime = 0;
    if (fs.existsSync(LAST_BUILD_FILE)) {
      lastBuildTime = parseInt(fs.readFileSync(LAST_BUILD_FILE, 'utf8'));
    }

    // 如果源文件没有变化，跳过构建
    if (currentSrcModified <= lastBuildTime) {
      console.log('📁 源文件无变化，跳过构建');
      console.log(`⏰ 上次构建: ${new Date(lastBuildTime).toLocaleTimeString()}`);
      console.log(`📝 源文件最后修改: ${new Date(currentSrcModified).toLocaleTimeString()}`);
      return;
    }

    // 创建锁文件
    fs.writeFileSync(LOCK_FILE, currentTime.toString(), 'utf8');

    console.log('🚀 检测到源文件变化，开始构建...');
    console.log(`📝 源文件最后修改: ${new Date(currentSrcModified).toLocaleTimeString()}`);

    // 执行实际的构建脚本
    execSync('node scripts/build-client.js', {
      stdio: 'inherit',
      cwd: path.resolve(__dirname, '..')
    });

    // 记录构建完成时间
    fs.writeFileSync(LAST_BUILD_FILE, currentTime.toString(), 'utf8');

  } catch (error) {
    console.error('❌ 构建失败:', error.message);
    process.exit(1);
  } finally {
    // 清理锁文件
    if (fs.existsSync(LOCK_FILE)) {
      fs.unlinkSync(LOCK_FILE);
    }
  }
}

// 运行安全构建
safeBuildClient();