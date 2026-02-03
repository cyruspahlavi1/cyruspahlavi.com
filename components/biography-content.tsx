'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Palette, Globe, Building, GraduationCap, Heart, Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

const exhibitions = [
  'Marlborough Gallery, Monaco',
  'Miami Art Basel 2023 (The Continuum Opera Gallery)',
  'Galerie St. Pere, Paris, France',
  'Palace Hotel, Gstaad, Switzerland',
  "Musee d'Art Contemporain — Le Pavillon Vendome, Paris, France (2020)",
  'Can 7 Formentera Gallery, Ibiza, Spain',
  'Galerie Pierre Passebon, Paris, France (2012)',
  'Art Dubai 2022 (Courtyard Gallery)',
];

export function BiographyContent() {
  const { t, isRTL } = useI18n();

  const initiatives = [
    {
      name: t.biography.initiatives.parsisFoundation,
      url: 'https://parsis.foundation',
      description: t.biography.initiatives.parsisFoundationDesc,
      icon: Building,
    },
    {
      name: t.biography.initiatives.parsisFund,
      url: 'https://parsis.fund',
      description: t.biography.initiatives.parsisFundDesc,
      icon: Globe,
    },
    {
      name: t.biography.initiatives.parsNetwork,
      url: 'https://pars.network',
      description: t.biography.initiatives.parsNetworkDesc,
      icon: Globe,
    },
    {
      name: t.biography.initiatives.luxFund,
      url: 'https://lux.fund',
      description: t.biography.initiatives.luxFundDesc,
      icon: Briefcase,
    },
  ];

  const quickFacts = [
    { label: t.biography.practice, value: t.biography.visualArtist, icon: Palette },
    { label: t.biography.focus, value: t.biography.humanitarianWork, icon: Heart },
    { label: t.biography.sector, value: t.biography.privacyTechnology, icon: Globe },
  ];

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="bg-black py-24">
        <div className="container">
          <div className={cn("mx-auto max-w-4xl text-center", isRTL && "text-center")}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">{t.biography.title}</p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              {t.biography.headline}
            </h1>
            <p className="mt-8 text-lg text-neutral-400">
              {t.biography.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Portrait & Quick Facts */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className={cn(
            "grid gap-16 lg:grid-cols-[400px_1fr] lg:items-start",
            isRTL && "lg:grid-cols-[1fr_400px]"
          )}>
            {/* Portrait */}
            <div className={cn("mx-auto w-full max-w-sm lg:mx-0", isRTL && "lg:order-2")}>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/cyrus-pahlavi.jpg"
                  alt={t.site.hrhName}
                  width={520}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-4 text-center text-sm text-neutral-500">{t.site.hrhName}</p>
            </div>

            {/* Bio Content */}
            <div className={cn("space-y-10", isRTL && "lg:order-1 text-right")}>
              <div>
                <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
                  <Calendar className="h-5 w-5 text-gold" />
                  <h2 className="font-serif text-2xl text-white">{t.biography.earlyLife}</h2>
                </div>
                <p className="mt-4 text-neutral-400">
                  {t.biography.earlyLifeText}
                </p>
              </div>

              <div>
                <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
                  <GraduationCap className="h-5 w-5 text-gold" />
                  <h2 className="font-serif text-2xl text-white">{t.biography.education}</h2>
                </div>
                <p className="mt-4 text-neutral-400">
                  {t.biography.educationText}
                </p>
              </div>

              <div>
                <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
                  <MapPin className="h-5 w-5 text-gold" />
                  <h2 className="font-serif text-2xl text-white">{t.biography.residence}</h2>
                </div>
                <p className="mt-4 text-neutral-400">
                  {t.biography.residenceText}
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid gap-4 sm:grid-cols-3">
                {quickFacts.map((item) => (
                  <div key={item.label} className={cn("rounded-xl border border-white/10 bg-black p-5", isRTL && "text-right")}>
                    <item.icon className={cn("h-5 w-5 text-gold", isRTL && "mr-auto ml-0")} />
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-500">{item.label}</p>
                    <p className="mt-1 font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artistic Practice */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container">
          <div className={cn("mx-auto max-w-4xl", isRTL && "text-right")}>
            <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
              <Palette className="h-6 w-6 text-gold" />
              <h2 className="font-serif text-3xl text-white">{t.biography.artisticPractice}</h2>
            </div>
            <p className="mt-6 text-lg text-neutral-400">
              {t.biography.artisticPracticeText1}
            </p>
            <p className="mt-4 text-neutral-500">
              {t.biography.artisticPracticeText2}
            </p>
            <Link
              href="/works"
              className={cn(
                "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline",
                isRTL && "flex-row-reverse"
              )}
            >
              {t.biography.viewWorksExhibitions}
              <ArrowRight size={14} className={isRTL ? "rotate-180" : ""} />
            </Link>
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className={cn("mb-12", isRTL && "text-right")}>
            <h2 className="font-serif text-3xl text-white">{t.biography.selectedExhibitions}</h2>
            <p className="mt-4 text-neutral-500">{t.biography.exhibitionsSubtitle}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {exhibitions.map((ex) => (
              <div key={ex} className={cn("flex items-start gap-4 rounded-xl border border-white/10 bg-black p-5", isRTL && "flex-row-reverse text-right")}>
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                <span className="text-neutral-300">{ex}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Humanitarian Work */}
      <section className="border-t border-gold/20 bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className={cn("rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/5 to-transparent p-10", isRTL && "text-right")}>
              <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
                <Heart className="h-6 w-6 text-gold" />
                <h2 className="font-serif text-3xl text-white">{t.biography.humanitarianCivicWork}</h2>
              </div>
              <p className="mt-6 text-lg text-neutral-300">
                {t.biography.humanitarianText1}
              </p>
              <p className="mt-4 text-neutral-400">
                {t.biography.humanitarianText2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className={cn("mb-12", isRTL && "text-right")}>
            <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
              <Building className="h-6 w-6 text-gold" />
              <h2 className="font-serif text-3xl text-white">{t.biography.civicTechInitiatives}</h2>
            </div>
            <p className="mt-4 text-neutral-500">
              {t.biography.civicTechSubtitle}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {initiatives.map((init) => (
              <a
                key={init.name}
                href={init.url}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "group rounded-xl border border-white/10 bg-black p-6 transition-all hover:border-gold/50",
                  isRTL && "text-right"
                )}
              >
                <init.icon className={cn("h-6 w-6 text-gold", isRTL && "mr-auto ml-0")} />
                <h3 className="mt-4 font-serif text-xl text-white">{init.name}</h3>
                <p className="mt-2 text-sm text-neutral-500">{init.description}</p>
                <span className={cn(
                  "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold",
                  isRTL && "flex-row-reverse"
                )}>
                  {t.biography.visit}
                  <ArrowRight size={12} className={cn("transition-transform group-hover:translate-x-1", isRTL && "rotate-180 group-hover:-translate-x-1")} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container">
          <div className={cn("mx-auto max-w-4xl", isRTL && "text-right")}>
            <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
              <Briefcase className="h-6 w-6 text-gold" />
              <h2 className="font-serif text-3xl text-white">{t.biography.professionalBackground}</h2>
            </div>
            <p className="mt-6 text-lg text-neutral-400">
              {t.biography.professionalText1}
            </p>
            <p className="mt-4 text-neutral-500">
              {t.biography.professionalText2}
            </p>
            <div className={cn("mt-10 flex flex-wrap gap-4", isRTL && "flex-row-reverse")}>
              <Link
                href="/works"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-gold/90",
                  isRTL && "flex-row-reverse"
                )}
              >
                {t.biography.viewWorks}
                <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
              </Link>
              <Link
                href="/mission"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                {t.biography.readMission}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
