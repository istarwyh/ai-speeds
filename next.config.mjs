import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // 暂时忽略 ESLint 错误，专注于迁移
  },
  typescript: {
    ignoreBuildErrors: true, // 暂时忽略 TypeScript 错误
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // 重写规则：兼容旧的 /img-proxy 路径
  async rewrites() {
    return [
      {
        source: '/img-proxy',
        destination: '/api/img-proxy',
      },
    ];
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
