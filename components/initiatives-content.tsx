'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

export function InitiativesContent() {
  const { t, isRTL, locale } = useI18n();

  const initiatives = [
    {
      titleEn: 'Parsis Foundation',
      titleFa: 'بنیاد پارسیس',
      descriptionEn: 'Foundation supporting civic, cultural, and humanitarian initiatives.',
      descriptionFa: 'بنیاد حامی ابتکارات مدنی، فرهنگی و بشردوستانه.',
      href: 'https://parsis.foundation',
    },
    {
      titleEn: 'Cyrus.NGO',
      titleFa: 'Cyrus.NGO',
      descriptionEn: 'Public-interest organization supporting civil society and humanitarian work.',
      descriptionFa: 'سازمان منافع عمومی حامی جامعه مدنی و کار بشردوستانه.',
      href: 'https://cyrus.ngo',
    },
    {
      titleEn: 'Pars Network',
      titleFa: 'شبکه پارس',
      descriptionEn: 'Privacy-preserving platform providing resilient communications and public-interest media infrastructure for Iranians facing censorship and information blackouts.',
      descriptionFa: 'پلتفرم حفظ‌کننده حریم خصوصی که ارتباطات مقاوم و زیرساخت رسانه‌ای منافع عمومی را برای ایرانیانی که با سانسور و قطع اطلاعات مواجه هستند، فراهم می‌کند.',
      href: 'https://pars.network',
    },
    {
      titleEn: 'MIGA Protocol',
      titleFa: 'پروتکل میگا',
      descriptionEn: 'Humanitarian funding initiative supporting the global Persian community through transparent, mission-driven assistance and direct relief.',
      descriptionFa: 'ابتکار تأمین مالی بشردوستانه که از جامعه جهانی ایرانیان از طریق کمک شفاف و مبتنی بر رسالت و امداد مستقیم حمایت می‌کند.',
      href: 'https://migaprotocol.xyz',
    },
    {
      titleEn: 'MIGA Foundation',
      titleFa: 'بنیاد میگا',
      descriptionEn: 'Mission and governance for transparency and accountability.',
      descriptionFa: 'رسالت و حکمرانی برای شفافیت و پاسخگویی.',
      href: 'https://miga.us.org',
    },
    {
      titleEn: 'Lux Fund & Lux Partners',
      titleFa: 'صندوق لاکس و شرکای لاکس',
      descriptionEn: 'Privacy and security technologies, cryptography research, and privacy-preserving computation.',
      descriptionFa: 'فناوری‌های حریم خصوصی و امنیت، تحقیقات رمزنگاری و محاسبات حفظ‌کننده حریم خصوصی.',
    },
  ];

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      <section className="bg-black py-24">
        <div className="container">
          <div className={isRTL ? "text-right" : ""}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              {locale === 'fa' ? 'ابتکارات و همکاران' : 'Initiatives & Partners'}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl">
              {locale === 'fa' ? 'پروژه‌ها و مشارکت‌های جاری' : 'Current Projects and Partnerships'}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-neutral-400">
              {locale === 'fa'
                ? 'ابتکارات فناوری، بشردوستانه و فرهنگی در حمایت از مردم ایران و حفظ میراث ایرانی.'
                : 'Technology, humanitarian, and cultural initiatives supporting the Iranian people and preserving Persian heritage.'}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {initiatives.map((item) => (
              <div key={item.titleEn} className={cn(
                "rounded-xl border border-white/10 bg-black p-8",
                isRTL && "text-right"
              )}>
                <h3 className="font-serif text-xl text-gold">
                  {isRTL ? item.titleFa : item.titleEn}
                </h3>
                <p className="mt-4 text-neutral-400">
                  {isRTL ? item.descriptionFa : item.descriptionEn}
                </p>
                {item.href && (
                  <Link
                    href={item.href}
                    target="_blank"
                    className={cn(
                      "mt-6 inline-flex text-sm font-semibold text-gold hover:underline",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    {locale === 'fa' ? '← بازدید' : 'Visit →'}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
