// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aifaceshapeanalyzer.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // Keep error pages out of the sitemap — they shouldn't be indexed.
      filter: (page) =>
        !page.endsWith('/404') &&
        !page.endsWith('/404/') &&
        !page.endsWith('/500') &&
        !page.endsWith('/500/'),
      serialize(item) {
        // Homepage is the priority entry and changes most often.
        if (item.url === 'https://aifaceshapeanalyzer.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
});