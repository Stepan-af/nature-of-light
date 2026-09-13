// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * The dev server doesn't map directory URLs to `public/<dir>/index.html`
 * (Apache does), so `/admin/` would 404 locally. Rewrite it in dev only.
 * @type {import('astro').AstroIntegration}
 */
const adminDevRoute = {
  name: 'admin-dev-route',
  hooks: {
    'astro:server:setup': ({ server }) => {
      server.middlewares.use((req, _res, next) => {
        if (req.url === '/admin/' || req.url?.startsWith('/admin/?')) req.url = '/admin/index.html';
        next();
      });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  // Production domain. Used for canonical URLs, sitemap and Open Graph.
  site: process.env.SITE_URL ?? 'https://prirodasveta.ru',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Page CSS is small (≤10 KB gz); inlining removes render-blocking requests.
    inlineStylesheets: 'always',
  },
  // Keep the admin panel out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/admin/') }), adminDevRoute],
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  fonts: [
    {
      name: 'Playfair Display',
      cssVariable: '--font-display',
      provider: fontProviders.fontsource(),
      weights: ['400 900'],
      styles: ['normal', 'italic'],
      subsets: ['cyrillic', 'latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    // The design specifies DM Sans, which has no Cyrillic glyphs. Inter is the
    // design's own "Typography/Family/Content" token and covers Cyrillic.
    {
      name: 'Inter',
      cssVariable: '--font-body',
      provider: fontProviders.fontsource(),
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['cyrillic', 'latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      provider: fontProviders.fontsource(),
      weights: [400],
      styles: ['normal'],
      subsets: ['cyrillic', 'latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
