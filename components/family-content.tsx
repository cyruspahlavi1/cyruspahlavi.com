'use client';

import { Quote, Crown, History, Heart, Globe } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

type MemberKey = 'rezaShah' | 'mohammadReza' | 'crownPrince' | 'farah';
type MilestoneKey = 'founding' | 'whiteRevolution' | 'celebration' | 'present';

const memberKeys: MemberKey[] = ['rezaShah', 'mohammadReza', 'crownPrince', 'farah'];
const milestoneKeys: MilestoneKey[] = ['founding', 'whiteRevolution', 'celebration', 'present'];

export function FamilyContent() {
  const { t, isRTL } = useI18n();

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="bg-black py-24">
        <div className="container">
          <div className={cn("mx-auto max-w-4xl text-center", isRTL && "text-center")}>
            <Crown className="mx-auto h-16 w-16 text-gold" />
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              {t.family.title}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              {t.family.headline}
            </h1>
            <p className="mt-8 text-lg text-neutral-400">
              {t.family.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Family Members */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className={cn("mb-16", isRTL && "text-right")}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {t.family.royalFamily}
            </p>
            <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl">
              {t.family.dedicatedToService}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {memberKeys.map((key) => {
              const member = t.family.members[key];
              return (
                <div
                  key={key}
                  className={cn("rounded-xl border border-white/10 bg-black p-8", isRTL && "text-right")}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                    {member.relation}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl text-white">{member.name}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{member.title} &middot; {member.years}</p>
                  <p className="mt-4 text-neutral-400">{member.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-gold/20 bg-black py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Quote className="mx-auto h-12 w-12 text-gold/40" />
            <blockquote className="mt-8 font-serif text-2xl italic leading-relaxed text-white md:text-3xl">
              &ldquo;{t.family.familyQuote}&rdquo;
            </blockquote>
            <cite className="mt-8 block text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              {t.site.hrhName}
            </cite>
          </div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <History className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-6 font-serif text-3xl text-white md:text-4xl">
              {t.family.centuryOfProgress}
            </h2>
            <p className="mt-4 text-neutral-400">
              {t.family.centurySubtitle}
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              {milestoneKeys.map((key, index) => {
                const milestone = t.family.milestones[key];
                return (
                  <div
                    key={key}
                    className={cn("flex gap-8", isRTL && "flex-row-reverse")}
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-black">
                        <span className="text-sm font-bold text-gold">{index + 1}</span>
                      </div>
                      {index < milestoneKeys.length - 1 && (
                        <div className="mt-2 h-full w-px bg-white/10" />
                      )}
                    </div>
                    <div className={cn("flex-1 pb-8", isRTL && "text-right")}>
                      <span className="text-sm font-semibold text-gold">{milestone.year}</span>
                      <h3 className="mt-2 font-serif text-xl text-white">{milestone.title}</h3>
                      <p className="mt-2 text-neutral-400">{milestone.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              {t.family.enduringValues}
            </h2>
            <p className="mt-6 text-lg text-neutral-400">
              {t.family.valuesSubtitle}
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <Heart className="mx-auto h-8 w-8 text-gold" />
              <h4 className="mt-4 font-serif text-xl text-gold">{t.family.service}</h4>
              <p className="mt-4 text-sm text-neutral-500">
                {t.family.serviceDesc}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <Crown className="mx-auto h-8 w-8 text-gold" />
              <h4 className="mt-4 font-serif text-xl text-gold">{t.family.dignity}</h4>
              <p className="mt-4 text-sm text-neutral-500">
                {t.family.dignityDesc}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <Globe className="mx-auto h-8 w-8 text-gold" />
              <h4 className="mt-4 font-serif text-xl text-gold">{t.family.unity}</h4>
              <p className="mt-4 text-sm text-neutral-500">
                {t.family.unityDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl text-white">
              {t.family.continuingLegacy}
            </h2>
            <p className="mt-6 text-neutral-400">
              {t.family.continuingLegacyText}
            </p>
            <div className={cn("mt-10 flex flex-wrap justify-center gap-4", isRTL && "flex-row-reverse")}>
              <Link
                href="/mission"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-gold/90",
                  isRTL && "flex-row-reverse"
                )}
              >
                {t.family.ourMission}
                <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
              </Link>
              <Link
                href="/initiatives-and-partners"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                {t.family.currentInitiatives}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
