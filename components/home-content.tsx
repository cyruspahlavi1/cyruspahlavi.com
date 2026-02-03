'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

export function HomeContent() {
  const { t, isRTL } = useI18n();

  const sectionLinks = [
    {
      title: t.sections.biography,
      description: t.sections.biographyDesc,
      href: '/biography',
    },
    {
      title: t.sections.mission,
      description: t.sections.missionDesc,
      href: '/mission',
    },
    {
      title: t.sections.works,
      description: t.sections.worksDesc,
      href: '/works',
    },
  ];

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-73px)] lg:h-[calc(100vh-73px)] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-black" />
        <div className="container relative z-10 py-12 md:py-16 lg:py-12">
          <div className={cn(
            "grid gap-10 lg:gap-12 lg:grid-cols-[1fr_auto] lg:items-center",
            isRTL && "lg:grid-cols-[auto_1fr]"
          )}>
            <div className={cn("text-center lg:text-left", isRTL && "lg:text-right lg:order-2")}>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
                {t.hero.title}
              </p>
              <h1 className="mt-4 md:mt-6 font-serif text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl xl:text-7xl">
                {t.hero.name}
              </h1>
              <div className={cn("mt-6 md:mt-8 h-px w-24 bg-gold mx-auto lg:mx-0", isRTL && "lg:mr-0 lg:ml-auto")} />
              <p className="mt-6 md:mt-8 text-sm md:text-base lg:text-lg uppercase tracking-[0.12em] md:tracking-[0.2em] text-neutral-400">
                {t.hero.tagline}
              </p>
              <p className={cn(
                "mt-6 md:mt-8 max-w-lg text-base md:text-lg leading-relaxed text-neutral-400 hidden md:block mx-auto lg:mx-0",
                isRTL && "lg:mr-0 lg:ml-auto"
              )}>
                {t.hero.description}
              </p>
            </div>
            <div className={cn("relative flex justify-center", isRTL && "lg:order-1")}>
              <div className="relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[360px]">
                <div className="absolute -inset-3 md:-inset-4 rounded-2xl border border-gold/20" />
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/cyrus-pahlavi.jpg"
                    alt={t.hero.name}
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="border-y border-gold/20 bg-neutral-950 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Quote className="mx-auto h-12 w-12 text-gold/40" />
            <blockquote className="mt-8 font-serif text-2xl italic leading-relaxed text-white md:text-3xl lg:text-4xl">
              &ldquo;{t.home.quote}&rdquo;
            </blockquote>
            <cite className="mt-8 block text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              {t.site.name}
            </cite>
          </div>
        </div>
      </section>

      {/* Section Links */}
      <section className="bg-black py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {sectionLinks.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-950 p-10 transition-all duration-300 hover:border-gold/40",
                  isRTL && "text-right"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <h3 className="relative font-serif text-2xl text-white">{section.title}</h3>
                <p className="relative mt-4 text-neutral-500">{section.description}</p>
                <div className={cn(
                  "relative mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold",
                  isRTL && "flex-row-reverse justify-end"
                )}>
                  <ArrowRight size={16} className={cn("transition-transform group-hover:translate-x-1", isRTL && "rotate-180 group-hover:-translate-x-1")} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className={cn(
            "grid gap-16 lg:grid-cols-2 lg:items-center",
            isRTL && "lg:grid-cols-2"
          )}>
            <div className={cn(isRTL && "lg:order-2 text-right")}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                {t.home.legacyLabel}
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-white">
                {t.home.legacyTitle}
              </h2>
              <p className="mt-8 text-lg text-neutral-400">
                {t.home.legacyText1}
              </p>
              <p className="mt-6 text-neutral-500">
                {t.home.legacyText2}
              </p>
              <Link
                href="/enduring-legacy"
                className={cn(
                  "mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold hover:underline",
                  isRTL && "flex-row-reverse"
                )}
              >
                {t.home.exploreLegacy}
                <ArrowRight size={14} className={isRTL ? "rotate-180" : ""} />
              </Link>
            </div>
            <div className={cn("rounded-xl border border-white/10 bg-black p-10", isRTL && "lg:order-1 text-right")}>
              <Quote className={cn("h-8 w-8 text-gold/40", isRTL && "ml-auto")} />
              <p className="mt-6 font-serif text-xl italic leading-relaxed text-white">
                &ldquo;{t.home.legacyQuote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold">
                {t.site.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {t.home.valuesLabel}
            </p>
            <h2 className="mt-6 font-serif text-4xl text-white">
              {t.home.valuesTitle}
            </h2>
            <p className="mt-8 text-lg text-neutral-400">
              {t.home.valuesDescription}
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <h4 className="font-serif text-xl text-gold">{t.home.community}</h4>
              <p className="mt-4 text-sm text-neutral-500">
                {t.home.communityDesc}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <h4 className="font-serif text-xl text-gold">{t.home.generosity}</h4>
              <p className="mt-4 text-sm text-neutral-500">
                {t.home.generosityDesc}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <h4 className="font-serif text-xl text-gold">{t.home.inclusivity}</h4>
              <p className="mt-4 text-sm text-neutral-500">
                {t.home.inclusivityDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className={cn("mb-16 flex items-end justify-between", isRTL && "flex-row-reverse")}>
            <div className={isRTL ? "text-right" : ""}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t.home.latestNews}</p>
              <h2 className="mt-4 font-serif text-4xl text-white">{t.home.news}</h2>
            </div>
            <Link
              href="/news"
              className={cn("hidden text-sm font-semibold uppercase tracking-wider text-gold hover:underline sm:block", isRTL && "flex-row-reverse")}
            >
              {t.home.viewAll} →
            </Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                date: '2 February 2026',
                title: 'Foundation launches humanitarian initiative supporting communities across three continents',
                excerpt: 'A new humanitarian program bringing education, healthcare, and sustainable development to underserved communities.',
                href: '/news/humanitarian-initiative',
              },
              {
                date: '28 January 2026',
                title: 'Art exhibition celebrates 25 years of creative practice',
                excerpt: 'A retrospective exhibition opens in Geneva, showcasing works that explore themes of memory, hope, and the human experience.',
                href: '/news/art-exhibition',
              },
              {
                date: '15 January 2026',
                title: 'Technology partnership brings secure communications to civil society',
                excerpt: 'New collaboration brings privacy-preserving tools to organizations working to protect human dignity.',
                href: '/news/technology-partnership',
              },
            ].map((item, index) => (
              <article
                key={item.href}
                className={cn(
                  "rounded-xl border border-white/10 bg-black p-8 transition-colors hover:border-gold/40",
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : '',
                  isRTL && "text-right"
                )}
              >
                <time className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {item.date}
                </time>
                <h3 className={`mt-4 font-serif leading-snug text-white ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                  {item.title}
                </h3>
                <p className={`mt-4 text-neutral-500 ${index === 0 ? 'text-base' : 'text-sm line-clamp-3'}`}>
                  {item.excerpt}
                </p>
                <Link
                  href={item.href}
                  className={cn(
                    "mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold hover:underline",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  {t.home.readMore}
                  <ArrowRight size={12} className={isRTL ? "rotate-180" : ""} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
