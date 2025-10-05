import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // 可选: 启用 R2 缓存
  // incrementalCache: r2IncrementalCache,
});
