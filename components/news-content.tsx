'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

export function NewsContent() {
  const { t, isRTL } = useI18n();

  const newsItems = [
    {
      date: '2 February 2026',
      dateFa: '۱۳ بهمن ۱۴۰۴',
      titleEn: 'Foundation launches humanitarian initiative supporting communities across three continents',
      titleFa: 'بنیاد ابتکار بشردوستانه‌ای را برای حمایت از جوامع در سه قاره راه‌اندازی کرد',
      excerptEn: 'A new humanitarian program bringing education, healthcare, and sustainable development to underserved communities in Europe, the Middle East, and Central Asia.',
      excerptFa: 'برنامه بشردوستانه جدیدی که آموزش، بهداشت و توسعه پایدار را به جوامع محروم در اروپا، خاورمیانه و آسیای مرکزی می‌آورد.',
      category: 'humanitarian',
    },
    {
      date: '28 January 2026',
      dateFa: '۸ بهمن ۱۴۰۴',
      titleEn: 'Art exhibition celebrates 25 years of creative practice',
      titleFa: 'نمایشگاه هنری ۲۵ سال فعالیت خلاقانه را جشن می‌گیرد',
      excerptEn: 'A retrospective exhibition opens in Geneva, showcasing works that explore themes of memory, hope, and the human experience.',
      excerptFa: 'نمایشگاه مروری در ژنو افتتاح شد که آثاری با موضوعات خاطره، امید و تجربه انسانی را به نمایش می‌گذارد.',
      category: 'culture',
    },
    {
      date: '15 January 2026',
      dateFa: '۲۵ دی ۱۴۰۴',
      titleEn: 'Technology partnership brings secure communications to civil society',
      titleFa: 'مشارکت فناوری ارتباطات امن را به جامعه مدنی می‌آورد',
      excerptEn: 'New collaboration brings privacy-preserving tools to organizations working to protect human dignity in challenging environments.',
      excerptFa: 'همکاری جدید ابزارهای حفظ حریم خصوصی را به سازمان‌هایی که در محیط‌های چالش‌برانگیز برای حفاظت از کرامت انسانی تلاش می‌کنند، ارائه می‌دهد.',
      category: 'technology',
    },
    {
      date: '8 January 2026',
      dateFa: '۱۸ دی ۱۴۰۴',
      titleEn: 'Educational scholarship program expanded to new regions',
      titleFa: 'برنامه بورسیه تحصیلی به مناطق جدید گسترش یافت',
      excerptEn: 'The scholarship initiative now supports students in twelve countries, providing opportunities for higher education and professional development.',
      excerptFa: 'ابتکار بورسیه اکنون از دانشجویان در دوازده کشور حمایت می‌کند و فرصت‌هایی برای تحصیلات عالی و توسعه حرفه‌ای فراهم می‌آورد.',
      category: 'education',
    },
    {
      date: '2 January 2026',
      dateFa: '۱۲ دی ۱۴۰۴',
      titleEn: 'Annual message emphasizes unity and collective responsibility',
      titleFa: 'پیام سالانه بر وحدت و مسئولیت جمعی تأکید می‌کند',
      excerptEn: 'In a new year address, HRH Cyrus Pahlavi reflected on achievements of the past year and outlined priorities for continued progress.',
      excerptFa: 'در پیام سال نو، علیاحضرت کوروش پهلوی به دستاوردهای سال گذشته اشاره کرد و اولویت‌های ادامه پیشرفت را ترسیم نمود.',
      category: 'address',
    },
    {
      date: '18 December 2025',
      dateFa: '۲۷ آذر ۱۴۰۴',
      titleEn: 'Cultural preservation initiative receives international recognition',
      titleFa: 'ابتکار حفظ فرهنگ مورد شناسایی بین‌المللی قرار گرفت',
      excerptEn: 'The heritage preservation program was recognized by UNESCO for its work in documenting and protecting cultural artifacts.',
      excerptFa: 'برنامه حفظ میراث توسط یونسکو به خاطر کارش در مستندسازی و حفاظت از آثار فرهنگی مورد تقدیر قرار گرفت.',
      category: 'culture',
    },
  ];

  const getCategoryLabel = (category: string) => {
    const categories: Record<string, string> = {
      humanitarian: t.news.categories.humanitarian,
      culture: t.news.categories.culture,
      technology: t.news.categories.technology,
      education: t.news.categories.education,
      address: t.news.categories.address,
    };
    return categories[category] || category;
  };

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="bg-black py-24">
        <div className="container">
          <div className={cn("mx-auto max-w-4xl text-center", isRTL && "text-center")}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              {t.news.title}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              {t.news.headline}
            </h1>
            <p className="mt-8 text-lg text-neutral-400">
              {t.news.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {newsItems.map((item, index) => (
              <article
                key={item.titleEn}
                className={cn(
                  "rounded-xl border border-white/10 bg-black p-8 transition-colors hover:border-gold/40",
                  index === 0 && "lg:col-span-2",
                  isRTL && "text-right"
                )}
              >
                <div className={cn("flex flex-wrap items-center gap-4", isRTL && "flex-row-reverse justify-end")}>
                  <time className="text-xs font-semibold uppercase tracking-wider text-gold">
                    {isRTL ? item.dateFa : item.date}
                  </time>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-neutral-400">
                    {getCategoryLabel(item.category)}
                  </span>
                </div>
                <h2 className={`mt-4 font-serif leading-snug text-white ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                  {isRTL ? item.titleFa : item.titleEn}
                </h2>
                <p className={`mt-4 text-neutral-500 ${index === 0 ? 'text-lg' : 'text-sm'}`}>
                  {isRTL ? item.excerptFa : item.excerptEn}
                </p>
                <button className={cn(
                  "mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold hover:underline",
                  isRTL && "flex-row-reverse"
                )}>
                  {t.news.readMore}
                  <ArrowRight size={12} className={isRTL ? "rotate-180" : ""} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
