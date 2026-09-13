import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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
