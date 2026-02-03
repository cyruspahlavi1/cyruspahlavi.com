'use client';

import { Quote, Leaf, Users, GraduationCap, Handshake, Building, Shield } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

type PriorityKey = 'sustainability' | 'coexistence' | 'education' | 'cooperation' | 'prosperity' | 'identity';

interface Priority {
  key: PriorityKey;
  icon: LucideIcon;
}

const priorityConfig: Priority[] = [
  { key: 'sustainability', icon: Leaf },
  { key: 'coexistence', icon: Users },
  { key: 'education', icon: GraduationCap },
  { key: 'cooperation', icon: Handshake },
  { key: 'prosperity', icon: Building },
  { key: 'identity', icon: Shield },
];

export function MissionContent() {
  const { t, isRTL } = useI18n();

  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="bg-black py-24">
        <div className="container">
          <div className={cn("mx-auto max-w-4xl text-center", isRTL && "text-center")}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              {t.mission.title}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              {t.mission.headline}
            </h1>
            <p className="mt-8 text-lg text-neutral-400">
              {t.mission.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Priorities */}
      <section className="bg-neutral-950">
        {priorityConfig.map((priority, index) => {
          const priorityData = t.mission.priorities[priority.key];
          const Icon = priority.icon;

          return (
            <div key={priority.key} className="border-t border-white/10 py-24">
              <div className="container">
                <div className={cn(
                  "grid gap-16 lg:grid-cols-2 lg:items-start",
                  index % 2 === 1 && !isRTL ? '' : '',
                  isRTL && "lg:grid-cols-2"
                )}>
                  <div className={cn(
                    index % 2 === 1 && !isRTL ? 'lg:order-2' : '',
                    isRTL && (index % 2 === 0 ? 'lg:order-2 text-right' : 'text-right')
                  )}>
                    <Icon className={cn("h-12 w-12 text-gold", isRTL && "mr-auto ml-0")} />
                    <h2 className="mt-8 font-serif text-3xl leading-tight text-white md:text-4xl">
                      {priorityData.title}
                    </h2>
                    <p className="mt-8 text-lg text-neutral-400">
                      {priorityData.description}
                    </p>
                  </div>
                  <div className={cn(
                    "rounded-xl border border-white/10 bg-black p-10",
                    index % 2 === 1 && !isRTL ? 'lg:order-1' : '',
                    isRTL && (index % 2 === 0 ? 'lg:order-1 text-right' : 'text-right')
                  )}>
                    <Quote className={cn("h-8 w-8 text-gold/40", isRTL && "mr-auto ml-0")} />
                    <p className="mt-6 font-serif text-xl italic leading-relaxed text-white">
                      &ldquo;{priorityData.quote}&rdquo;
                    </p>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold">
                      {t.site.hrhName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
