import es from './es.json';
import en from './en.json';
import ptBr from './pt-br.json';

export const languages = {
  es: 'Español',
  en: 'English',
  'pt-br': 'Português'
};

export const defaultLang = 'es';

export const translations = {
  es,
  en,
  'pt-br': ptBr
} as const;

export type Lang = keyof typeof translations;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getPathWithLang(path: string, lang: Lang): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}
