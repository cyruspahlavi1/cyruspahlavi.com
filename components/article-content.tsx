'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Share2, ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';
import { categories, newsArticles, type NewsArticle } from '@/lib/news-data';

interface ArticleContentProps {
  article: NewsArticle;
}

export function ArticleContent({ article }: ArticleContentProps) {
  const { isRTL, locale } = useI18n();

  const getCategoryLabel = (categoryValue: string) => {
    const cat = categories.find(c => c.value === categoryValue);
    return isRTL ? cat?.labelFa : cat?.labelEn;
  };

  // Get related articles (same category, excluding current)
  const relatedArticles = newsArticles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2);

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="bg-black py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Back Link */}
            <Link
              href="/news"
              className={cn(
                "inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-gold transition-colors",
                isRTL && "flex-row-reverse"
              )}
            >
              <ArrowLeft size={16} className={isRTL ? "rotate-180" : ""} />
              {locale === 'fa' ? 'بازگشت به اخبار' : 'Back to News'}
            </Link>

            {/* Meta */}
            <div className={cn(
              "mt-8 flex flex-wrap items-center gap-4",
              isRTL && "flex-row-reverse justify-end"
            )}>
              <div className={cn("flex items-center gap-2 text-gold", isRTL && "flex-row-reverse")}>
                <Calendar size={14} />
                <time className="text-xs font-semibold uppercase tracking-wider">
                  {isRTL ? article.dateFa : article.date}
                </time>
              </div>
              <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                <Tag size={14} className="text-neutral-500" />
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-neutral-400">
                  {getCategoryLabel(article.category)}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className={cn(
              "mt-6 font-serif text-4xl leading-tight text-white md:text-5xl",
              isRTL && "text-right"
            )}>
              {isRTL ? article.titleFa : article.titleEn}
            </h1>

            {/* Excerpt */}
            <p className={cn(
              "mt-6 text-xl text-neutral-400",
              isRTL && "text-right"
            )}>
              {isRTL ? article.excerptFa : article.excerptEn}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="border-t border-white/10 bg-neutral-950 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <article className={cn("space-y-6", isRTL && "text-right")}>
              {(isRTL ? article.contentFa : article.contentEn).map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-neutral-300">
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Share */}
            <div className={cn(
              "mt-12 flex items-center gap-4 border-t border-white/10 pt-8",
              isRTL && "flex-row-reverse"
            )}>
              <Share2 size={16} className="text-neutral-500" />
              <span className="text-sm text-neutral-500">
                {locale === 'fa' ? 'اشتراک‌گذاری' : 'Share'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-white/10 bg-black py-16">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className={cn("font-serif text-2xl text-white", isRTL && "text-right")}>
                {locale === 'fa' ? 'مطالب مرتبط' : 'Related Articles'}
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/news/${related.slug}`}
                    className={cn(
                      "group rounded-xl border border-white/10 bg-neutral-950 p-6 transition-all hover:border-gold/40",
                      isRTL && "text-right"
                    )}
                  >
                    <time className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {isRTL ? related.dateFa : related.date}
                    </time>
                    <h3 className="mt-3 font-serif text-lg text-white group-hover:text-gold transition-colors">
                      {isRTL ? related.titleFa : related.titleEn}
                    </h3>
                    <span className={cn(
                      "mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold",
                      isRTL && "flex-row-reverse"
                    )}>
                      {locale === 'fa' ? 'ادامه مطلب' : 'Read More'}
                      <ArrowRight size={10} className={isRTL ? "rotate-180" : ""} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to News */}
      <section className="border-t border-white/10 bg-neutral-950 py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-gold/90 transition-colors"
            >
              {locale === 'fa' ? 'مشاهده همه اخبار' : 'View All News'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
