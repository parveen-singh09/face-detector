/**
 * i18n config — the single source of truth for which locales exist, how they're
 * labelled, their reading direction, and their OG locale codes.
 *
 * English is the default locale and lives at the site root (no `/en/` prefix);
 * every other locale is served under its prefix (`/es/`, `/ar/`, …). This mirrors
 * the `i18n` block in `astro.config.mjs` — keep the two `locales` lists in sync.
 */

export const DEFAULT_LOCALE = "en" as const;

/** Ordered list of every supported locale (default first). */
export const LOCALES = [
  "en",
  "es",
  "fr",
  "de",
  "pt",
  "it",
  "nl",
  "ru",
  "ja",
  "ko",
  "zh",
  "hi",
  "ar",
  "id",
  "tr",
] as const;

export type Locale = (typeof LOCALES)[number];

/** The non-default locales — used by `getStaticPaths()` on the `[lang]` routes. */
export const NON_DEFAULT_LOCALES = LOCALES.filter(
  (l) => l !== DEFAULT_LOCALE,
) as Exclude<Locale, typeof DEFAULT_LOCALE>[];

/** Native-name label shown in the language switcher. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  it: "Italiano",
  nl: "Nederlands",
  ru: "Русский",
  ja: "日本語",
  ko: "한국어",
  zh: "中文",
  hi: "हिन्दी",
  ar: "العربية",
  id: "Bahasa Indonesia",
  tr: "Türkçe",
};

/**
 * Flag code per locale — the basename of a circular flag SVG in `public/flags/`.
 * A locale is a language, not a country, so we pick the most representative flag
 * (en→gb, pt→pt, zh→cn, hi→in, ar→sa, ko→kr, ja→jp). Vendored locally (no runtime
 * CDN) and rendered as `<img src="/flags/{code}.svg">` in the language switcher.
 */
export const LOCALE_FLAG: Record<Locale, string> = {
  en: "gb",
  es: "es",
  fr: "fr",
  de: "de",
  pt: "pt",
  it: "it",
  nl: "nl",
  ru: "ru",
  ja: "jp",
  ko: "kr",
  zh: "cn",
  hi: "in",
  ar: "sa",
  id: "id",
  tr: "tr",
};

/** Right-to-left locales. Drives `<html dir>` and the RTL CSS overrides. */
export const RTL_LOCALES: Locale[] = ["ar"];

/** `og:locale` / hreflang region codes. */
export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
  pt: "pt_BR",
  it: "it_IT",
  nl: "nl_NL",
  ru: "ru_RU",
  ja: "ja_JP",
  ko: "ko_KR",
  zh: "zh_CN",
  hi: "hi_IN",
  ar: "ar_AR",
  id: "id_ID",
  tr: "tr_TR",
};

/** BCP-47 hreflang code (what Google expects in `<link hreflang>`). */
export const HREFLANG: Record<Locale, string> = {
  en: "en",
  es: "es",
  fr: "fr",
  de: "de",
  pt: "pt-BR",
  it: "it",
  nl: "nl",
  ru: "ru",
  ja: "ja",
  ko: "ko",
  zh: "zh-Hans",
  hi: "hi",
  ar: "ar",
  id: "id",
  tr: "tr",
};

export function isRtl(lang: string): boolean {
  return RTL_LOCALES.includes(lang as Locale);
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
