import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { siteConfigBuild } from './src/config/getSiteConfig.ts';

// https://astro.build/config
export default defineConfig({
  // CUSTOMIZE: change to the deployed production URL once known.
  // The site URL is required for canonical tags, sitemap, and OG tags.
  site: siteConfigBuild.url,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) =>
        !page.includes('/thank-you/') &&
        !page.includes('/404/') &&
        !page.includes('/preview/'),
      customPages: [],
      serialize(item) {
        // Boost priorities for the high-value pages.
        if (item.url === siteConfigBuild.url + '/') item.priority = 1.0;
        else if (item.url.includes('/services/')) item.priority = 0.9;
        else if (item.url.includes('/locations/')) item.priority = 0.8;
        else if (item.url.includes('/blog/')) item.priority = 0.6;
        return item;
      },
    }),
    mdx(),
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
  experimental: {
    clientPrerender: true,
  },
});
