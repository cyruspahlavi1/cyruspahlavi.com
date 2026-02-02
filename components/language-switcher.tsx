'use client';

import { useI18n } from '@/lib/i18n/context';
import { Locale } from '@/lib/i18n';

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'fa' : 'en');
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 rounded-lg border border-white/10 bg-card/50 px-3 py-1.5 text-sm transition-colors hover:bg-card"
      aria-label={locale === 'en' ? 'Switch to Farsi' : 'Switch to English'}
    >
      <span className={locale === 'en' ? 'text-gold' : 'text-muted-foreground'}>EN</span>
      <span className="text-muted-foreground">/</span>
      <span className={locale === 'fa' ? 'text-gold' : 'text-muted-foreground'}>فا</span>
    </button>
  );
}
