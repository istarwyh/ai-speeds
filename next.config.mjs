import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Tracked debt; CI runs the explicit lint gate.
  },
  typescript: {
    ignoreBuildErrors: true, // Tracked debt; CI runs the explicit typecheck gate.
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
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
