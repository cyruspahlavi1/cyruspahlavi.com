'use client';

import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

export function ContactContent() {
  const { t, isRTL } = useI18n();

  const contactEmails = [
    { labelEn: 'Official Correspondence', labelFa: 'مکاتبات رسمی', value: 'office@cyruspahlavi.com' },
    { labelEn: 'Press Inquiries', labelFa: 'استعلام‌های مطبوعاتی', value: 'press@cyruspahlavi.com' },
    { labelEn: 'Government Liaison', labelFa: 'رابط دولتی', value: 'gov@cyruspahlavi.com' },
  ];

  const officialAddress = [
    'Palacestrasse 28,',
    'CH-3780 Gstaad,',
    'Switzerland',
  ];

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      <section className="bg-black py-24">
        <div className="container">
          <div className={isRTL ? "text-right" : ""}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">{t.contact.title}</p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl">{t.contact.headline}</h1>
            <p className="mt-6 max-w-3xl text-lg text-neutral-400">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {contactEmails.map((item) => (
              <div key={item.value} className={cn(
                "rounded-xl border border-white/10 bg-black p-6",
                isRTL && "text-right"
              )}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {isRTL ? item.labelFa : item.labelEn}
                </p>
                <p className="mt-4 text-lg font-medium text-white">{item.value}</p>
              </div>
            ))}
            <div className={cn(
              "rounded-xl border border-white/10 bg-black p-6",
              isRTL && "text-right"
            )}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {t.contact.officialWebsite}
              </p>
              <p className="mt-4 text-lg font-medium text-white">cyruspahlavi.com</p>
            </div>
            <div className={cn(
              "rounded-xl border border-white/10 bg-black p-6",
              isRTL && "text-right"
            )}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {t.contact.address}
              </p>
              <div className="mt-4 text-sm font-medium text-white">
                {officialAddress.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
