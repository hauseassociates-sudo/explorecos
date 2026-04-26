import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { CATEGORIES } from '../content/config';

// Hand-rolled sitemap. Replaces the @astrojs/sitemap integration which had
// a runtime issue in this Astro version.
export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error('Astro.site is not set in astro.config.mjs');
  }
  const site = context.site.toString().replace(/\/$/, '');
  const today = new Date().toISOString().split('T')[0];

  const listings = await getCollection('listings');

  const urls: { loc: string; priority: string; changefreq: string }[] = [
    { loc: `${site}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${site}/map`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${site}/stay`, priority: '0.8', changefreq: 'weekly' },
    ...CATEGORIES.map((slug) => ({
      loc: `${site}/categories/${slug}`,
      priority: '0.7',
      changefreq: 'weekly',
    })),
    ...listings.map((entry) => ({
      loc: `${site}/listings/${entry.slug}`,
      priority: '0.7',
      changefreq: 'monthly',
    })),
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url>\n` +
          `    <loc>${u.loc}</loc>\n` +
          `    <lastmod>${today}</lastmod>\n` +
          `    <changefreq>${u.changefreq}</changefreq>\n` +
          `    <priority>${u.priority}</priority>\n` +
          `  </url>`,
      )
      .join('\n') +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
