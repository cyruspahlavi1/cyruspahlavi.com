'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function StatementsContent() {
  const { isRTL, locale } = useI18n();

  const statements = [
    {
      ref: 'HRHCP-2026-02-01-01',
      titleEn: 'Declaration of Responsibility and Intent',
      titleFa: 'اعلامیه مسئولیت و نیت',
      dateEn: 'February 1, 2026',
      dateFa: '۱۲ بهمن ۱۴۰۴',
      pagesEn: '8 pages',
      pagesFa: '۸ صفحه',
      descriptionEn: "Comprehensive declaration outlining Cyrus Pahlavi's commitments to Iran's peaceful transition toward constitutional democracy. The document establishes clear pledges on secular governance, equal citizenship, women's full equality, national unity, and peaceful relations with neighbors. Witnessed and attested by Prince Shahram Pahlavi-Nia.",
      descriptionFa: 'اعلامیه جامعی که تعهدات سایروس پهلوی به گذار صلح‌آمیز ایران به سوی دموکراسی قانون‌مند را ترسیم می‌کند. این سند تعهدات روشنی در مورد حکمرانی سکولار، شهروندی برابر، برابری کامل زنان، وحدت ملی و روابط صلح‌آمیز با همسایگان ایجاد می‌کند. شاهد و تأیید شده توسط شاهزاده شهرام پهلوی‌نیا.',
      pdf: '/official-statements/HRHCP-2026-02-01-01.pdf',
      html: '/official-statements/declaration-of-responsibility.html',
    },
    {
      ref: 'HRHCP-2026-02-01-02',
      titleEn: 'Mission Statement and Operating Principles',
      titleFa: 'بیانیه رسالت و اصول عملیاتی',
      dateEn: 'February 1, 2026',
      dateFa: '۱۲ بهمن ۱۴۰۴',
      pagesEn: '1 page',
      pagesFa: '۱ صفحه',
      descriptionEn: 'Official mission statement and operating principles. Establishes the framework for advancing peaceful, lawful, and nationally legitimate transition for Iran toward a secular constitutional order.',
      descriptionFa: 'بیانیه رسمی رسالت و اصول عملیاتی. چارچوبی برای پیشبرد گذار صلح‌آمیز، قانونی و مشروع ملی برای ایران به سوی نظم قانون‌اساسی سکولار ایجاد می‌کند.',
      html: '/official-statements/mission-statement.html',
    },
  ];

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      <section className="bg-black py-24">
        <div className="container">
          <div className={isRTL ? "text-right" : ""}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              {locale === 'fa' ? 'بیانیه‌ها' : 'Statements'}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl">
              {locale === 'fa' ? 'بیانیه‌ها و اعلامیه‌های رسمی' : 'Official Statements and Declarations'}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-neutral-400">
              {locale === 'fa'
                ? 'این صفحه شامل آرشیو معتبر تمام بیانیه‌ها و اعلامیه‌های رسمی است. تمام اسناد دارای مهر زمانی و شماره مرجع برای تأیید هستند.'
                : 'This page contains the authoritative archive of all official statements and declarations. All documents are timestamped and reference-numbered for verification.'}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="grid gap-6">
            {statements.map((item) => (
              <div
                key={item.ref}
                className={cn(
                  "rounded-xl border border-white/10 bg-black p-8",
                  isRTL && "text-right"
                )}
              >
                <div className={cn(
                  "flex flex-wrap items-start justify-between gap-4",
                  isRTL && "flex-row-reverse"
                )}>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gold">{item.ref}</p>
                    <h2 className="mt-3 font-serif text-2xl text-white">
                      {isRTL ? item.titleFa : item.titleEn}
                    </h2>
                  </div>
                  <div className={cn(
                    "text-xs uppercase tracking-[0.2em] text-neutral-500",
                    isRTL && "text-left"
                  )}>
                    <p>{isRTL ? item.dateFa : item.dateEn}</p>
                    <p>{isRTL ? item.pagesFa : item.pagesEn}</p>
                  </div>
                </div>
                <p className="mt-4 text-neutral-400">
                  {isRTL ? item.descriptionFa : item.descriptionEn}
                </p>
                <div className={cn(
                  "mt-6 flex flex-wrap gap-3",
                  isRTL && "flex-row-reverse"
                )}>
                  {item.pdf && (
                    <Button asChild size="sm">
                      <Link href={item.pdf} target="_blank">
                        {locale === 'fa' ? 'دانلود PDF' : 'Download PDF'}
                      </Link>
                    </Button>
                  )}
                  {item.html && (
                    <Button asChild size="sm" variant="outline">
                      <Link href={item.html} target="_blank">
                        {locale === 'fa' ? 'مشاهده نسخه HTML' : 'View HTML Version'}
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
