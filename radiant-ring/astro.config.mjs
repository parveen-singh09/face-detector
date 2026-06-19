// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aifaceshapeanalyzer.com',

  // English is the default locale and lives at the site root (no /en/ prefix);
  // every other locale is served under its prefix (/es/, /ar/, …). Keep this
  // `locales` list in sync with src/i18n/config.ts.
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'ru',
      'ja', 'ko', 'zh', 'hi', 'ar', 'id', 'tr',
    ],
    routing: { prefixDefaultLocale: false },
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // Emit hreflang alternates for every localized URL. Keys match the i18n
      // locales above; values are the BCP-47 codes Google expects.
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          fr: 'fr',
          de: 'de',
          pt: 'pt-BR',
          it: 'it',
          nl: 'nl',
          ru: 'ru',
          ja: 'ja',
          ko: 'ko',
          zh: 'zh-Hans',
          hi: 'hi',
          ar: 'ar',
          id: 'id',
          tr: 'tr',
        },
      },
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