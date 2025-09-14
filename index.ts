/**
 * Claude Code Router 主入口文件
 * 
 * 这个文件是 Cloudflare Workers 的入口点，
 * 实际实现已移动到 src/server/index.ts 以实现更好的代码组织
 */

import serverHandler from './src/server/index';

// 导出 Cloudflare Workers 处理程序
export default serverHandler;
