'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Filter } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';
import { newsArticles, categories } from '@/lib/news-data';

export function NewsContent() {
  const { isRTL, locale } = useI18n();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = activeCategory === 'all'
    ? newsArticles
    : newsArticles.filter(article => article.category === activeCategory);

  const getCategoryLabel = (categoryValue: string) => {
    const cat = categories.find(c => c.value === categoryValue);
    return isRTL ? cat?.labelFa : cat?.labelEn;
  };

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              {locale === 'fa' ? 'اخبار و رسانه' : 'News & Media'}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              {locale === 'fa' ? 'اتاق خبر' : 'Press Room'}
            </h1>
            <p className="mt-8 text-lg text-neutral-400">
              {locale === 'fa'
                ? 'بیانیه‌های رسمی، اعلامیه‌ها و به‌روزرسانی‌های مربوط به ابتکارات، سرمایه‌گذاری‌ها و رویدادها.'
                : 'Official statements, announcements, and updates on initiatives, investments, and events.'}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-t border-white/10 bg-neutral-950 py-8">
        <div className="container">
          <div className={cn(
            "flex flex-wrap items-center gap-3",
            isRTL && "flex-row-reverse"
          )}>
            <Filter className="h-4 w-4 text-neutral-500" />
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === cat.value
                    ? "bg-gold text-black"
                    : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
                )}
              >
                {isRTL ? cat.labelFa : cat.labelEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="bg-neutral-950 py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {filteredArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className={cn(
                  "group rounded-xl border border-white/10 bg-black p-8 transition-all hover:border-gold/40 hover:bg-neutral-900/50",
                  index === 0 && activeCategory === 'all' && "lg:col-span-2",
                  isRTL && "text-right"
                )}
              >
                <div className={cn(
                  "flex flex-wrap items-center gap-4",
                  isRTL && "flex-row-reverse justify-end"
                )}>
                  <time className="text-xs font-semibold uppercase tracking-wider text-gold">
                    {isRTL ? article.dateFa : article.date}
                  </time>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-neutral-400">
                    {getCategoryLabel(article.category)}
                  </span>
                  {article.featured && (
                    <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-medium text-gold">
                      {locale === 'fa' ? 'ویژه' : 'Featured'}
                    </span>
                  )}
                </div>
                <h2 className={cn(
                  "mt-4 font-serif leading-snug text-white group-hover:text-gold transition-colors",
                  index === 0 && activeCategory === 'all' ? 'text-3xl' : 'text-xl'
                )}>
                  {isRTL ? article.titleFa : article.titleEn}
                </h2>
                <p className={cn(
                  "mt-4 text-neutral-500",
                  index === 0 && activeCategory === 'all' ? 'text-lg' : 'text-sm'
                )}>
                  {isRTL ? article.excerptFa : article.excerptEn}
                </p>
                <span className={cn(
                  "mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold",
                  isRTL && "flex-row-reverse"
                )}>
                  {locale === 'fa' ? 'ادامه مطلب' : 'Read More'}
                  <ArrowRight size={12} className={cn("transition-transform group-hover:translate-x-1", isRTL && "rotate-180 group-hover:-translate-x-1")} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="border-t border-white/10 bg-black py-16">
        <div className="container">
          <div className={cn(
            "mx-auto max-w-2xl rounded-xl border border-white/10 bg-neutral-950 p-8",
            isRTL && "text-right"
          )}>
            <h3 className="font-serif text-2xl text-white">
              {locale === 'fa' ? 'تماس مطبوعاتی' : 'Press Contact'}
            </h3>
            <p className="mt-4 text-neutral-400">
              {locale === 'fa'
                ? 'برای استعلام‌های مطبوعاتی، درخواست مصاحبه یا اعتبارنامه رسانه‌ای، لطفاً تماس بگیرید:'
                : 'For press inquiries, interview requests, or media credentials, please contact:'}
            </p>
            <p className="mt-4 font-semibold text-gold">press@cyruspahlavi.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
