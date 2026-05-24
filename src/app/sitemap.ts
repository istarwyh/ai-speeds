import type { MetadataRoute } from 'next';
import { featurePages } from '@/config/features';
import { getSiteUrl } from '@/config/site-url';

export const dynamic = 'force-dynamic';

const lastModified = new Date();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = await getSiteUrl();

  return featurePages
    .filter(feature => feature.kind === 'route' && feature.isPublic)
    .map(feature => ({
      url: `${siteUrl}${feature.href === '/' ? '' : feature.href}`,
      lastModified,
      changeFrequency: feature.sitemapChangeFrequency,
      priority: feature.sitemapPriority,
    }));
}
