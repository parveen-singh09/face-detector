import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";
import { en, type UIStrings } from "./ui/en";
import { es } from "./ui/es";
import { fr } from "./ui/fr";
import { de } from "./ui/de";
import { pt } from "./ui/pt";
import { it } from "./ui/it";
import { nl } from "./ui/nl";
import { ru } from "./ui/ru";
import { ja } from "./ui/ja";
import { ko } from "./ui/ko";
import { zh } from "./ui/zh";
import { hi } from "./ui/hi";
import { ar } from "./ui/ar";
import { id } from "./ui/id";
import { tr } from "./ui/tr";

const DICTS: Record<Locale, UIStrings> = {
  en,
  es,
  fr,
  de,
  pt,
  it,
  nl,
  ru,
  ja,
  ko,
  zh,
  hi,
  ar,
  id,
  tr,
};

export function getLangFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split("/");
  if (maybeLocale && isLocale(maybeLocale)) return maybeLocale;
  return DEFAULT_LOCALE;
}

export function useTranslations(lang: string): UIStrings {
  if (isLocale(lang)) return DICTS[lang];
  return DICTS[DEFAULT_LOCALE];
}

export function delocalizePath(path: string): string {
  const segments = path.split("/").filter(Boolean);
  if (segments.length && isLocale(segments[0])) segments.shift();
  return "/" + segments.join("/");
}

export function localizePath(path: string, lang: Locale): string {
  const canonical = delocalizePath(path);
  if (lang === DEFAULT_LOCALE) return canonical;
  if (canonical === "/") return `/${lang}/`;
  return `/${lang}${canonical}`;
}

export { type UIStrings };
