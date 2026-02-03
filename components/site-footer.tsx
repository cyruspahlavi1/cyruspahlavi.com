'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

export function SiteFooter() {
  const { t, isRTL } = useI18n();

  const navColumns = [
    {
      title: t.footer.about,
      links: [
        { label: t.footer.biography, href: '/biography' },
        { label: t.footer.mission, href: '/mission' },
        { label: t.footer.family, href: '/family' },
      ],
    },
    {
      title: t.footer.work,
      links: [
        { label: t.footer.works, href: '/works' },
        { label: t.footer.initiatives, href: '/initiatives-and-partners' },
        { label: t.footer.news, href: '/news' },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { label: t.footer.privacy, href: '/privacy' },
        { label: t.footer.terms, href: '/terms' },
        { label: t.footer.contact, href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-neutral-950 to-black">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className={cn(
          "grid gap-12 md:gap-16 lg:grid-cols-[240px_1fr]",
          isRTL && "lg:grid-cols-[1fr_240px]"
        )}>
          {/* Seal & Brand */}
          <div className={cn(
            "flex flex-col items-center text-center lg:items-start lg:text-left",
            isRTL && "lg:items-end lg:text-right lg:order-2"
          )}>
            <Image
              src="/images/official-seal.png"
              alt="Official Seal"
              width={180}
              height={180}
              className="h-auto w-36 md:w-44 opacity-90"
            />
            <p className="mt-6 text-sm leading-relaxed text-neutral-500">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation Columns */}
          <div className={cn(
            "grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-12",
            isRTL && "lg:order-1"
          )}>
            {navColumns.map((column) => (
              <div key={column.title} className={isRTL ? "text-right" : ""}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {column.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Column - Desktop */}
            <div className={cn(
              "col-span-2 sm:col-span-3 lg:col-span-1 hidden lg:block",
              isRTL && "text-right"
            )}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {t.footer.connect}
              </h4>
              <a
                href="mailto:office@cyruspahlavi.com"
                className={cn(
                  "mt-4 inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-gold",
                  isRTL && "flex-row-reverse"
                )}
              >
                <Mail size={14} />
                office@cyruspahlavi.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className={cn(
          "container flex flex-col items-center justify-between gap-4 py-6 text-xs text-neutral-600 md:flex-row",
          isRTL && "md:flex-row-reverse"
        )}>
          <p>&copy; {new Date().getFullYear()} {t.site.name}. {t.footer.copyright}</p>
          <p className={cn("text-center", isRTL ? "md:text-left" : "md:text-right")}>
            {t.footer.memberOf}
          </p>
        </div>
      </div>
    </footer>
  );
}
