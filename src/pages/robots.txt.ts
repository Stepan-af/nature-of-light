import type { APIRoute } from 'astro';
import { NOINDEX } from 'astro:env/server';

/** robots.txt built from `site` and NOINDEX (test domains block all crawlers). */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;
  const body = NOINDEX
    ? ['# Test deployment — not for indexing.', 'User-agent: *', 'Disallow: /', '']
    : ['User-agent: *', 'Allow: /', 'Disallow: /admin/', 'Disallow: /api/', '', `Sitemap: ${sitemap}`, ''];
  return new Response(body.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
