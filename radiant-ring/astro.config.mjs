// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aifaceshapeanalyzer.com',

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
      filter: (page) =>
        !page.endsWith('/404') &&
        !page.endsWith('/404/') &&
        !page.endsWith('/500') &&
        !page.endsWith('/500/'),
      serialize(item) {
        if (item.url === 'https://aifaceshapeanalyzer.com/') {
          item.priority = 1.0;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        } else {
          item.priority = 0.7;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        }
        return item;
      },
    }),
  ],
});