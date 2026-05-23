import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/config/site-url';

export const dynamic = 'force-dynamic';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const siteUrl = await getSiteUrl();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/v1/', '/img-proxy'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
