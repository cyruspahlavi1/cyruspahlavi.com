'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { HamburgerIcon } from './hamburger-icon';
import { cn } from '@/lib/utils';
import { CommandPalette } from './command-palette';
import { SiteMenuPanel } from './site-menu-panel';
import { LanguageSwitcher } from './language-switcher';
import { ThemeToggle } from './theme-toggle';
import { useI18n } from '@/lib/i18n/context';

export function SiteHeader() {
  const { t, isRTL } = useI18n();
  const [open, setOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [paletteOpen, setPaletteOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
      if (event.key === 'Escape') {
        setPaletteOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/cyrus-signature.png"
              alt="Cyrus Pahlavi"
              width={160}
              height={44}
              className="signature-logo"
              priority
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-muted-foreground">
            <Link href="/biography" className="relative transition-colors hover:text-gold">
              {t.nav.biography}
            </Link>
            <Link href="/mission" className="relative transition-colors hover:text-gold">
              {t.nav.mission}
            </Link>
            <Link href="/initiatives-and-partners" className="relative transition-colors hover:text-gold">
              {t.nav.initiatives}
            </Link>
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              <Search size={14} />
              {t.nav.search}
              <span className="rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-muted-foreground">⌘K</span>
            </button>
            <div className="relative">
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                {t.nav.menu}
              </button>
              <SiteMenuPanel open={menuOpen} onClose={() => setMenuOpen(false)} />
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-3 text-muted-foreground xl:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <HamburgerIcon open={open} />
          </button>
        </div>

        <div
          className={cn(
            'xl:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl transition-all',
            open ? 'max-h-[540px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="container flex flex-col gap-4 py-6 text-sm font-semibold text-muted-foreground">
            <Link href="/biography" className="transition-colors hover:text-gold" onClick={() => setOpen(false)}>
              {t.nav.biography}
            </Link>
            <Link href="/mission" className="transition-colors hover:text-gold" onClick={() => setOpen(false)}>
              {t.nav.mission}
            </Link>
            <Link href="/initiatives-and-partners" className="transition-colors hover:text-gold" onClick={() => setOpen(false)}>
              {t.nav.initiatives}
            </Link>
            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
              onClick={() => setPaletteOpen(true)}
            >
              <Search size={14} />
              {t.nav.search} (⌘K)
            </button>
          </div>
        </div>
      </header>

      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
