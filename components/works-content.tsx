'use client';

import Link from 'next/link';
import { Palette, Cpu, PenTool, Film, Globe, BookOpen, ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

type DisciplineKey = 'visualArts' | 'technology' | 'investment' | 'writing' | 'screen' | 'sculpture';

interface DisciplineConfig {
  key: DisciplineKey;
  icon: LucideIcon;
  links: { label: string; href: string }[];
}

const disciplineConfig: DisciplineConfig[] = [
  {
    key: 'visualArts',
    icon: Palette,
    links: [
      { label: 'CyrusPahlavi.art', href: 'https://cyruspahlavi.art' },
      { label: 'Artnet Profile', href: 'https://www.artnet.com/artists/cyrus-pahlavi/' },
    ],
  },
  {
    key: 'technology',
    icon: Cpu,
    links: [
      { label: 'Pars Network', href: 'https://pars.network' },
      { label: 'Lux Fund', href: 'https://lux.fund' },
    ],
  },
  {
    key: 'investment',
    icon: Globe,
    links: [
      { label: 'Parsis Fund', href: 'https://parsis.fund' },
      { label: 'Lux Fund', href: 'https://lux.fund' },
    ],
  },
  {
    key: 'writing',
    icon: BookOpen,
    links: [],
  },
  {
    key: 'screen',
    icon: Film,
    links: [
      { label: 'IMDb', href: 'https://www.imdb.com/name/nm1797299/' },
    ],
  },
  {
    key: 'sculpture',
    icon: PenTool,
    links: [],
  },
];

interface Exhibition {
  year: string;
  titleKey: 'privateExhibition' | 'artDubai' | 'groupExhibition' | 'sothebysAuction' | 'privateCollection';
  location: string;
}

const exhibitionData: Exhibition[] = [
  { year: '2024', titleKey: 'privateExhibition', location: 'Geneva, Switzerland' },
  { year: '2022', titleKey: 'artDubai', location: 'Dubai, UAE' },
  { year: '2021', titleKey: 'groupExhibition', location: 'Monaco' },
  { year: '2019', titleKey: 'sothebysAuction', location: 'London, UK' },
  { year: '2018', titleKey: 'privateCollection', location: 'New York, USA' },
];

export function WorksContent() {
  const { t, isRTL } = useI18n();

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="bg-black py-24">
        <div className="container">
          <div className={cn("mx-auto max-w-4xl text-center", isRTL && "text-center")}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              {t.works.title}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              {t.works.headline}
            </h1>
            <p className="mt-8 text-lg text-neutral-400">
              {t.works.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="grid gap-12">
            {disciplineConfig.map((config, index) => {
              const discipline = t.works.disciplines[config.key];
              const Icon = config.icon;

              return (
                <div
                  key={config.key}
                  className={cn(
                    "grid gap-12 lg:grid-cols-2 lg:items-start",
                    isRTL && "lg:grid-cols-2"
                  )}
                >
                  <div className={cn(
                    index % 2 === 1 && !isRTL ? 'lg:order-2' : '',
                    isRTL && (index % 2 === 0 ? 'lg:order-2 text-right' : 'text-right')
                  )}>
                    <Icon className={cn("h-10 w-10 text-gold", isRTL && "mr-auto ml-0")} />
                    <h2 className="mt-6 font-serif text-3xl text-white">{discipline.title}</h2>
                    <p className="mt-4 text-lg text-neutral-400">{discipline.description}</p>
                    {config.links.length > 0 && (
                      <div className={cn("mt-6 flex flex-wrap gap-4", isRTL && "flex-row-reverse justify-end")}>
                        {config.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                              "inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline",
                              isRTL && "flex-row-reverse"
                            )}
                          >
                            {link.label}
                            <ArrowRight size={12} className={isRTL ? "rotate-180" : ""} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={cn(
                    "rounded-xl border border-white/10 bg-black p-8",
                    index % 2 === 1 && !isRTL ? 'lg:order-1' : '',
                    isRTL && (index % 2 === 0 ? 'lg:order-1 text-right' : 'text-right')
                  )}>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                      {t.works.keyAchievements}
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {discipline.achievements.map((achievement: string, i: number) => (
                        <li key={i} className={cn("flex items-start gap-3 text-neutral-300", isRTL && "flex-row-reverse")}>
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="font-serif text-3xl text-white">{t.works.selectedExhibitions}</h2>
              <p className="mt-4 text-neutral-400">
                {t.works.exhibitionsSubtitle}
              </p>
            </div>
            <div className="mt-12 space-y-4">
              {exhibitionData.map((exhibition) => (
                <div
                  key={`${exhibition.year}-${exhibition.titleKey}`}
                  className={cn(
                    "flex items-center justify-between rounded-xl border border-white/10 bg-neutral-950 px-6 py-4",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <div className={isRTL ? "text-right" : ""}>
                    <span className="font-serif text-lg text-white">{t.works.exhibitions[exhibition.titleKey]}</span>
                    <span className={cn("text-sm text-neutral-500", isRTL ? "mr-4" : "ml-4")}>{exhibition.location}</span>
                  </div>
                  <span className="text-sm font-semibold text-gold">{exhibition.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="border-t border-gold/20 bg-neutral-950 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="font-serif text-2xl italic leading-relaxed text-white">
              &ldquo;{t.works.philosophyQuote}&rdquo;
            </blockquote>
            <cite className="mt-8 block text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              {t.site.hrhName}
            </cite>
          </div>
        </div>
      </section>
    </main>
  );
}
