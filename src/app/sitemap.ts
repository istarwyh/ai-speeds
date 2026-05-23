import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/config/site-url';

export const dynamic = 'force-dynamic';

const lastModified = new Date();

const routes = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/brand', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/playground', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/whiteboard', changeFrequency: 'monthly', priority: 0.6 },
] satisfies Array<{
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
}>;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = await getSiteUrl();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
