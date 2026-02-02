import en from './en.json';
import fa from './fa.json';

export type Locale = 'en' | 'fa';

export const translations = { en, fa } as const;

export type TranslationKeys = typeof en;

export function getTranslation(locale: Locale): TranslationKeys {
  return translations[locale];
}

export function isRTL(locale: Locale): boolean {
  return locale === 'fa';
}
